function f_2_3_(p_1_, p_1_2) {
  const v_2_ = document.getElementById(p_1_);
  if (v_2_) {
    v_2_.innerText = p_1_2;
  }
}
function f_3_1_(p_1_3, p_1_4, p_1_5) {
  document.getElementById(p_1_3)?.style.setProperty(p_1_4, p_1_5);
}
function f_1_1_(p_2_) {
  document.getElementById(p_2_)?.remove();
  document.querySelector(p_2_)?.remove();
}
const vO_22_3_ = {
  en: {
    header: "We're verifying your browser",
    footer: "Vercel Security Checkpoint",
    failed: "Failed to verify your browser"
  },
  zh: {
    header: "我们正在验证您的浏览器",
    footer: "Vercel 安全检查点",
    failed: "无法验证您的浏览器"
  },
  es: {
    header: "Estamos verificando tu navegador",
    footer: "Punto de control de seguridad de Vercel",
    failed: "No se pudo verificar tu navegador"
  },
  hi: {
    header: "हम आपके ब्राउज़र को सत्यापित कर रहे हैं",
    footer: "\"Vercel सुरक्षा जाँच बिंदु\"",
    failed: "आपके ब्राउज़र को सत्यापित करने में विफल रहा"
  },
  ar: {
    header: "نحن نتحقق من متصفحك",
    footer: "نقطة تفتيش أمان Vercel",
    failed: "فشل في التحقق من متصفحك",
    rtl: true
  },
  bn: {
    header: "আমরা আপনার ব্রাউজার যাচাই করছি",
    footer: "Vercel নিরাপত্তা চেকপয়েন্ট",
    failed: "আপনার ব্রাউজার যাচাই করতে ব্যর্থ হয়েছে"
  },
  pt: {
    header: "Estamos verificando seu navegador",
    footer: "Ponto de verificação de segurança da Vercel",
    failed: "Falha ao verificar seu navegador"
  },
  ru: {
    header: "Мы проверяем ваш браузер",
    footer: "Контрольная точка безопасности Vercel",
    failed: "Не удалось проверить ваш браузер"
  },
  ja: {
    header: "ブラウザを確認しています",
    footer: "Vercel セキュリティチェックポイント",
    failed: "ブラウザの確認に失敗しました"
  },
  pa: {
    header: "ਅਸੀਂ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਦੀ ਪੁਸ਼ਟੀ ਕਰ ਰਹੇ ਹਾਂ",
    footer: "Vercel ਸੁਰੱਖਿਆ ਜਾਂਚ ਬਿੰਦੂ",
    failed: "ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਦੀ ਪੁਸ਼ਟੀ ਕਰਨ ਵਿੱਚ ਅਸਫਲ ਰਿਹਾ"
  },
  de: {
    header: "Wir überprüfen Ihren Browser",
    footer: "Vercel Sicherheitskontrollpunkt",
    failed: "Überprüfung Ihres Browsers fehlgeschlagen"
  },
  jv: {
    header: "Kita lagi verifikasi browser sampeyan",
    footer: "Titik Pamriksan Keamanan Vercel",
    failed: "Gagal verifikasi browser sampeyan"
  },
  ko: {
    header: "브라우저를 확인하고 있습니다",
    footer: "Vercel 보안 검문소",
    failed: "브라우저를 확인하지 못했습니다"
  },
  fr: {
    header: "Nous vérifions votre navigateur",
    footer: "Point de contrôle de sécurité Vercel",
    failed: "Échec de la vérification de votre navigateur"
  },
  te: {
    header: "మేము మీ బ్రౌజర్‌ను ధృవీకరిస్తున్నాము",
    footer: "Vercel భద్రతా తనిఖీ కేంద్రం",
    failed: "మీ బ్రౌజర్‌ను ధృవీకరించడంలో విఫలమైంది"
  },
  mr: {
    header: "आम्ही तुमचा ब्राउझर सत्यापित करत आहोत",
    footer: "Vercel सुरक्षा तपासणी बिंदू",
    failed: "तुमचा ब्राउझर सत्यापित करण्यात अयशस्वी"
  },
  tr: {
    header: "Tarayıcınızı doğruluyoruz",
    footer: "Vercel Güvenlik Kontrol Noktası",
    failed: "Tarayıcınız doğrulanamadı"
  },
  ta: {
    header: "உங்கள் உலாவியை சரிபார்க்கிறோம்",
    footer: "Vercel பாதுகாப்பு சோதனைச் சாவடி",
    failed: "உங்கள் உலாவியை சரிபார்க்க முடியவில்லை"
  },
  vi: {
    header: "Chúng tôi đang xác minh trình duyệt của bạn",
    footer: "Điểm kiểm tra bảo mật Vercel",
    failed: "Không thể xác minh trình duyệt của bạn"
  },
  ur: {
    header: "ہم آپ کے براؤزر کی تصدیق کر رہے ہیں",
    footer: "Vercel سیکیورٹی چیک پوائنٹ",
    failed: "آپ کے براؤزر کی تصدیق نہیں ہو سکی",
    rtl: true
  },
  it: {
    header: "Stiamo verificando il tuo browser",
    footer: "Punto di controllo di sicurezza Vercel",
    failed: "Impossibile verificare il tuo browser"
  },
  pl: {
    header: "Weryfikujemy Twoją przeglądarkę",
    footer: "Punkt kontroli bezpieczeństwa Vercel",
    failed: "Nie udało się zweryfikować Twojej przeglądarki"
  }
};
function f_0_2_() {
  const v_1_ = window?.navigator?.languages ?? [];
  for (const v_1_2 of v_1_) {
    const v_2_2 = v_1_2.toLowerCase().split("-")[0];
    if (v_2_2 in vO_22_3_) {
      return vO_22_3_[v_2_2];
    }
  }
  return vO_22_3_.en;
}
function f_0_3_() {
  const vF_0_2__3_ = f_0_2_();
  f_2_3_("header-text", vF_0_2__3_.header);
  f_2_3_("footer-text", vF_0_2__3_.footer);
  f_3_1_("root", "display", "flex");
  document.dir = vF_0_2__3_.rtl ? "rtl" : "ltr";
}
document.addEventListener("DOMContentLoaded", f_0_3_);
window.addEventListener("languagechange", f_0_3_);
f_0_3_();
const v_1_3 = window.eval;
const v_1_4 = window.Worker;
const vLStoken_4_ = "<token>";
const vLS2_1_ = "2";
const vSetTimeout_1_ = setTimeout(f_0_2_2, 15000);
const v_1_5 = new v_1_4("/.well-known/vercel/security/static/challenge.v2.min.js");
const v_4_ = new MessageChannel();
v_1_5.postMessage({
  port: v_4_.port1
}, [v_4_.port1]);
v_4_.port2.onmessage = f_1_1_3;
f_1_3_({
  type: "solve-request",
  token: vLStoken_4_,
  version: vLS2_1_
});
function f_1_3_(p_1_6) {
  v_4_.port2.postMessage(p_1_6);
}
function f_0_1_() {
  clearTimeout(vSetTimeout_1_);
  location.reload();
}
function f_0_2_2() {
  const vF_0_2__1_ = f_0_2_();
  f_2_3_("header-text", vF_0_2__1_.failed);
  f_1_1_(".spinner");
}
async function f_1_1_2(p_1_7) {
  const {
    id: a,
    argv: n
  } = p_1_7;
  try {
    const v_1_6 = await v_1_3(n);
    f_1_3_({
      type: "eval-response",
      id: a,
      value: v_1_6,
      token: vLStoken_4_
    });
  } catch (e_1_) {
    f_1_3_({
      type: "eval-response",
      id: a,
      error: e_1_,
      token: vLStoken_4_
    });
  }
}
async function f_1_1_3(p_4_) {
  if (p_4_.data.token === vLStoken_4_) {
    switch (p_4_.data.type) {
      case "solve-response":
        {
          if (p_4_.data.success) {
            f_0_1_();
          } else {
            f_0_2_2();
          }
          break;
        }
      case "eval-request":
        {
          await f_1_1_2(p_4_.data);
          break;
        }
    }
  }
}