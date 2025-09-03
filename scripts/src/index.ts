import { updateAWSWAF } from "./awswaf";
import { updateBunnyShield } from "./bunny-shield";
import { updateHCaptcha } from "./hcaptcha";
import { alert } from "./lib/notifications";
import { updateTurnstile } from "./turnstile";
import { updateVercelSecurity } from "./vercel";

const stages = [
  updateTurnstile,
  updateHCaptcha,
  updateBunnyShield,
  updateVercelSecurity,
  updateAWSWAF,
];

for (const stage of stages) {
  try {
    await stage();
  } catch (err) {
    await alert(
      `Error when getting ${stage.name}: ${err instanceof Error ? err.stack : err}`,
    );
    throw err;
  }
}
