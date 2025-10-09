function updateElement(selector, text, color) {
  const updateElement = document.querySelector(selector);
  if (updateElement) {
    updateElement.innerText = text;
    if (color) {
      updateElement.style.color = color;
    }
  }
}
const wasmSupported = (() => {
  try {
    if (typeof WebAssembly === "object" && typeof WebAssembly.instantiate === "function") {
      const module = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
      if (module instanceof WebAssembly.Module) {
        return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
      }
    }
  } catch (e) {
    // ignore
  }
  return false;
})();
function clearCookiesForDomains(domain) {
  const parts = ["www", ...domain.split(".")];
  for (let i = 0; i < parts.length - 1; i++) {
    const subdomain = parts.slice(i).join(".");
    document.cookie = `bunny_shield=; Max-Age=-9999999; Path=/; Domain=.${subdomain}`;
    document.cookie = `bunny_shield_chk=; Max-Age=-9999999; Path=/; Domain=.${subdomain}`;
  }
  location.reload();
}
function postResponse(powResponse) {
  fetch("/.bunny-shield/verify-pow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "BunnyShield-Challenge-Response": powResponse
    },
    redirect: "manual"
  }).then(res => {
    const s = res.status;
    if (s >= 400 && s < 500) {
      clearCookiesForDomains(location.hostname);
      return updateElement(".error", "Challenge failed, please reload and try again.", "#FF0000");
    } else if (s >= 500) {
      return updateElement(".error", "Unexpected error, please reload and try again.", "#FF0000");
    }
    window.localStorage.setItem("_bunnyshield-redirect", Math.random());
    location.reload();
  }).catch(() => {
    clearCookiesForDomains(location.hostname);
    updateElement(".error", "Unexpected error, please reload and try again.", "#FF0000");
  });
}
const powFinished = new Promise(resolve => {
  let start = Date.now();
  const workers = [];
  let finished = false;
  const stopPow = () => {
    finished = true;
    updateElement(".status", "Submitting...", "#31cc31");
    workers.forEach(w => w.terminate());
  };
  const submitPow = answer => {
    window.localStorage.setItem("_bunnyshield-pow-response", answer);
    stopPow();
    const dummyTime = 3500 - (Date.now() - start);
    window.setTimeout(() => {
      resolve({
        answer
      });
    }, dummyTime);
  };
  window.addEventListener("DOMContentLoaded", async () => {
    const {
      pow
    } = document.querySelector("[data-pow]").dataset;
    window.addEventListener("storage", event => {
      if (event.key === "_bunnyshield-pow-response" && !finished) {
        stopPow();
        resolve({
          answer: event.newValue,
          localStorage: true
        });
      } else if (event.key === "_bunnyshield-redirect") {
        location.reload();
      }
    });
    if (!wasmSupported) {
      return updateElement(".error", "Browser does not support WebAssembly, please update your browser to proceed.", "#FF0000");
    }
    const eHashes = Math.pow(16, Math.floor(13 / 8)) * (10 || 1);
    const diffString = "0".repeat(Math.floor(13 / 8));
    const [userkey, challenge] = pow.split("#");
    if (window.Worker) {
      const messageHandler = e => {
        if (e.data.length === 1) {
          const totalHashes = e.data[0];
          const elapsedSec = Math.floor((Date.now() - start) / 1000);
          const hps = Math.floor(totalHashes / elapsedSec);
          const requiredSec = Math.floor(eHashes / hps) * 1.5;
          const remainingSec = Math.max(0, Math.floor(requiredSec - elapsedSec));
          return updateElement(".status", "Calculating... " + remainingSec + "s remaining");
        }
        if (finished) {
          return;
        }
        const [workerId, answer] = e.data;
        submitPow(`${pow}#${answer}`);
      };
      let workerThreadCount;
      try {
        workerThreadCount = navigator.hardwareConcurrency || 4;
      } catch {
        workerThreadCount = 4;
      }
      for (let i = 0; i < workerThreadCount; i++) {
        const powWorker = new Worker("/.bunny-shield/assets/shield-worker.js");
        powWorker.onmessage = messageHandler;
        workers.push(powWorker);
      }
      start = Date.now();
      for (let i = 0; i < workerThreadCount; i++) {
        await new Promise(res => setTimeout(res, 10));
        workers[i].postMessage([userkey, challenge, 13, diffString, {
          time: 2,
          mem: 512,
          hashLen: 32,
          parallelism: 1
        }, i, workerThreadCount]);
      }
    } else {
      return updateElement(".error", "Browser does not support Web Workers, please update your browser to proceed.", "#FF0000");
    }
  });
}).then(powResponse => {
  if (!powResponse.localStorage) {
    postResponse(powResponse.answer);
  }
  return powResponse.answer;
}).catch(e => {
  // ignore
});