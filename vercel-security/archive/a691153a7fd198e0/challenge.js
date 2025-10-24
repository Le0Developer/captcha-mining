function f_2_7_(p_1_, p_1_2) {
  const v_2_ = document.getElementById(p_1_);
  if (v_2_) {
    v_2_.innerText = p_1_2;
  }
}
function f_3_1_(p_1_3, p_1_4, p_1_5) {
  document.getElementById(p_1_3)?.style.setProperty(p_1_4, p_1_5);
}
function f_1_2_(p_2_) {
  document.getElementById(p_2_)?.remove();
  document.querySelector(p_2_)?.remove();
}
const vO_22_3_ = {
  en: {
    header: "We're verifying your browser",
    footer: "Vercel Security Checkpoint",
    failed: "Failed to verify your browser",
    blocked: "Browser verification blocked by third party",
    fix: "Website owner? Click here to fix",
    code: "Code"
  },
  zh: {
    header: "我们正在验证您的浏览器",
    footer: "Vercel 安全检查点",
    failed: "无法验证您的浏览器",
    blocked: "浏览器验证被第三方阻止",
    fix: "网站所有者？点击此处修复",
    code: "代码"
  },
  es: {
    header: "Estamos verificando tu navegador",
    footer: "Punto de control de seguridad de Vercel",
    failed: "No se pudo verificar tu navegador",
    blocked: "Verificación del navegador bloqueada por terceros",
    fix: "¿Propietario del sitio web? Haga clic aquí para solucionar",
    code: "Código"
  },
  hi: {
    header: "हम आपके ब्राउज़र को सत्यापित कर रहे हैं",
    footer: "\"Vercel सुरक्षा जाँच बिंदु\"",
    failed: "आपके ब्राउज़र को सत्यापित करने में विफल रहा",
    blocked: "तीसरे पक्ष द्वारा ब्राउज़र सत्यापन अवरुद्ध",
    fix: "वेबसाइट मालिक? ठीक करने के लिए यहां क्लिक करें",
    code: "कोड"
  },
  ar: {
    header: "نحن نتحقق من متصفحك",
    footer: "نقطة تفتيش أمان Vercel",
    failed: "فشل في التحقق من متصفحك",
    blocked: "تم حظر التحقق من المتصفح بواسطة طرف ثالث",
    fix: "صاحب الموقع؟ انقر هنا للإصلاح",
    rtl: true,
    code: "كود"
  },
  bn: {
    header: "আমরা আপনার ব্রাউজার যাচাই করছি",
    footer: "Vercel নিরাপত্তা চেকপয়েন্ট",
    failed: "আপনার ব্রাউজার যাচাই করতে ব্যর্থ হয়েছে",
    blocked: "তৃতীয় পক্ষ দ্বারা ব্রাউজার যাচাইকরণ বাধাগ্রস্ত",
    fix: "ওয়েবসাইটের মালিক? সমাধান করতে এখানে ক্লিক করুন",
    code: "কোড"
  },
  pt: {
    header: "Estamos verificando seu navegador",
    footer: "Ponto de verificação de segurança da Vercel",
    failed: "Falha ao verificar seu navegador",
    blocked: "Verificação do navegador bloqueada por terceiros",
    fix: "Proprietário do site? Clique aqui para corrigir",
    code: "Código"
  },
  ru: {
    header: "Мы проверяем ваш браузер",
    footer: "Контрольная точка безопасности Vercel",
    failed: "Не удалось проверить ваш браузер",
    blocked: "Проверка браузера заблокирована третьей стороной",
    fix: "Владелец сайта? Нажмите здесь, чтобы исправить",
    code: "Код"
  },
  ja: {
    header: "ブラウザを確認しています",
    footer: "Vercel セキュリティチェックポイント",
    failed: "ブラウザの確認に失敗しました",
    blocked: "ブラウザの確認がサードパーティによりブロックされました",
    fix: "ウェブサイトの所有者ですか？ここをクリックして修正",
    code: "コード"
  },
  pa: {
    header: "ਅਸੀਂ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਦੀ ਪੁਸ਼ਟੀ ਕਰ ਰਹੇ ਹਾਂ",
    footer: "Vercel ਸੁਰੱਖਿਆ ਜਾਂਚ ਬਿੰਦੂ",
    failed: "ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਦੀ ਪੁਸ਼ਟੀ ਕਰਨ ਵਿੱਚ ਅਸਫਲ ਰਿਹਾ",
    blocked: "ਬ੍ਰਾਊਜ਼ਰ ਪੁਸ਼ਟੀਕਰਨ ਤੀਜੀ ਧਿਰ ਦੁਆਰਾ ਬਲਾਕ ਕੀਤਾ ਗਿਆ",
    fix: "ਵੈੱਬਸਾਈਟ ਮਾਲਕ? ਠੀਕ ਕਰਨ ਲਈ ਇੱਥੇ ਕਲਿੱਕ ਕਰੋ",
    code: "ਕੋਡ"
  },
  de: {
    header: "Wir überprüfen Ihren Browser",
    footer: "Vercel Sicherheitskontrollpunkt",
    failed: "Überprüfung Ihres Browsers fehlgeschlagen",
    blocked: "Browserüberprüfung durch Dritte blockiert",
    fix: "Website-Besitzer? Klicken Sie hier, um das Problem zu beheben",
    code: "Code"
  },
  jv: {
    header: "Kita lagi verifikasi browser sampeyan",
    footer: "Titik Pamriksan Keamanan Vercel",
    failed: "Gagal verifikasi browser sampeyan",
    blocked: "Verifikasi browser diblokir dening pihak katelu",
    fix: "Pemilik situs web? Klik kene kanggo ndandani",
    code: "Kode"
  },
  ko: {
    header: "브라우저를 확인하고 있습니다",
    footer: "Vercel 보안 검문소",
    failed: "브라우저를 확인하지 못했습니다",
    blocked: "제3자에 의해 브라우저 확인이 차단되었습니다",
    fix: "웹사이트 소유자이신가요? 여기를 클릭하여 수정하세요",
    code: "코드"
  },
  fr: {
    header: "Nous vérifions votre navigateur",
    footer: "Point de contrôle de sécurité Vercel",
    failed: "Échec de la vérification de votre navigateur",
    blocked: "Vérification du navigateur bloquée par un tiers",
    fix: "Propriétaire du site ? Cliquez ici pour corriger",
    code: "Code"
  },
  te: {
    header: "మేము మీ బ్రౌజర్‌ను ధృవీకరిస్తున్నాము",
    footer: "Vercel భద్రతా తనిఖీ కేంద్రం",
    failed: "మీ బ్రౌజర్‌ను ధృవీకరించడంలో విఫలమైంది",
    blocked: "బ్రౌజర్ ధృవీకరణ మూడవ పక్షం ద్వారా నిరోధించబడింది",
    fix: "వెబ్‌సైట్ యజమానా? సరిచేయడానికి ఇక్కడ క్లిక్ చేయండి",
    code: "కోడ్"
  },
  mr: {
    header: "आम्ही तुमचा ब्राउझर सत्यापित करत आहोत",
    footer: "Vercel सुरक्षा तपासणी बिंदू",
    failed: "तुमचा ब्राउझर सत्यापित करण्यात अयशस्वी",
    blocked: "ब्राउझर सत्यापन तृतीय पक्षाद्वारे अवरोधित",
    fix: "वेबसाइट मालक? दुरुस्त करण्यासाठी येथे क्लिक करा",
    code: "कोड"
  },
  tr: {
    header: "Tarayıcınızı doğruluyoruz",
    footer: "Vercel Güvenlik Kontrol Noktası",
    failed: "Tarayıcınız doğrulanamadı",
    blocked: "Tarayıcı doğrulaması üçüncü taraf tarafından engellendi",
    fix: "Web sitesi sahibi misiniz? Düzeltmek için buraya tıklayın",
    code: "Kod"
  },
  ta: {
    header: "உங்கள் உலாவியை சரிபார்க்கிறோம்",
    footer: "Vercel பாதுகாப்பு சோதனைச் சாவடி",
    failed: "உங்கள் உலாவியை சரிபார்க்க முடியவில்லை",
    blocked: "உலாவி சரிபார்ப்பு மூன்றாம் தரப்பினரால் தடுக்கப்பட்டது",
    fix: "இணையதள உரிமையாளரா? சரிசெய்ய இங்கே கிளிக் செய்யவும்",
    code: "குறியீடு"
  },
  vi: {
    header: "Chúng tôi đang xác minh trình duyệt của bạn",
    footer: "Điểm kiểm tra bảo mật Vercel",
    failed: "Không thể xác minh trình duyệt của bạn",
    blocked: "Xác minh trình duyệt bị chặn bởi bên thứ ba",
    fix: "Chủ trang web? Nhấp vào đây để sửa",
    code: "Mã"
  },
  ur: {
    header: "ہم آپ کے براؤزر کی تصدیق کر رہے ہیں",
    footer: "Vercel سیکیورٹی چیک پوائنٹ",
    failed: "آپ کے براؤزر کی تصدیق نہیں ہو سکی",
    blocked: "براؤزر کی تصدیق تیسرے فریق کے ذریعے مسدود کر دی گئی",
    fix: "ویب سائٹ کے مالک ہیں؟ ٹھیک کرنے کے لیے یہاں کلک کریں",
    rtl: true,
    code: "کوڈ"
  },
  it: {
    header: "Stiamo verificando il tuo browser",
    footer: "Punto di controllo di sicurezza Vercel",
    failed: "Impossibile verificare il tuo browser",
    blocked: "Verifica del browser bloccata da terze parti",
    fix: "Proprietario del sito? Clicca qui per risolvere",
    code: "Codice"
  },
  pl: {
    header: "Weryfikujemy Twoją przeglądarkę",
    footer: "Punkt kontroli bezpieczeństwa Vercel",
    failed: "Nie udało się zweryfikować Twojej przeglądarki",
    blocked: "Weryfikacja przeglądarki zablokowana przez stronę trzecią",
    fix: "Właściciel strony? Kliknij tutaj, aby naprawić",
    code: "Kod"
  }
};
function f_0_3_() {
  const v_1_ = window?.navigator?.languages ?? [];
  for (const v_1_2 of v_1_) {
    const v_2_2 = v_1_2.toLowerCase().split("-")[0];
    if (v_2_2 in vO_22_3_) {
      return vO_22_3_[v_2_2];
    }
  }
  return vO_22_3_.en;
}
function f_0_3_2() {
  const vF_0_3__3_ = f_0_3_();
  f_2_7_("header-text", vF_0_3__3_.header);
  f_2_7_("footer-text", vF_0_3__3_.footer);
  f_3_1_("root", "display", "flex");
  document.dir = vF_0_3__3_.rtl ? "rtl" : "ltr";
}
document.addEventListener("DOMContentLoaded", f_0_3_2);
window.addEventListener("languagechange", f_0_3_2);
f_0_3_2();
const v_1_3 = window.eval;
const v_1_4 = window.Worker;
const vLStoken_4_ = "<token>";
const vLS2_1_ = "2";
const vSetTimeout_1_ = setTimeout(() => f_1_2_2("99"), 15000);
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
function f_1_2_2(p_2_2) {
  const vF_0_3__4_ = f_0_3_();
  f_2_7_("header-text", vF_0_3__4_.failed);
  f_1_2_(".spinner");
  if (p_2_2) {
    const v_2_3 = p_2_2.replace(/\./g, "");
    let v_1_6 = vF_0_3__4_.code + " " + v_2_3;
    if (vF_0_3__4_.rtl) {
      v_1_6 = v_2_3 + " " + vF_0_3__4_.code;
    }
    const v_2_4 = document.getElementById("failure-text");
    if (v_2_4 && !v_2_4.textContent?.trim()) {
      f_2_7_("failure-text", v_1_6);
    }
  }
}
function f_1_1_(p_2_3) {
  const vF_0_3__2_ = f_0_3_();
  f_2_7_("header-text", vF_0_3__2_.blocked);
  f_1_2_(".spinner");
  const v_2_5 = document.getElementById("fix-container");
  if (v_2_5) {
    v_2_5.style.display = "block";
  }
  f_2_7_("fix-text", vF_0_3__2_.fix);
  if (p_2_3) {
    f_2_7_("metadata-text", p_2_3);
  }
}
async function f_1_1_2(p_1_7) {
  const {
    id: a,
    argv: t
  } = p_1_7;
  try {
    const v_1_7 = await v_1_3(t);
    f_1_3_({
      type: "eval-response",
      id: a,
      value: v_1_7,
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
async function f_1_1_3(p_7_) {
  if (p_7_.data.token === vLStoken_4_) {
    switch (p_7_.data.type) {
      case "solve-response":
        {
          if (p_7_.data.success) {
            f_0_1_();
          } else if (p_7_.data.blocked) {
            f_1_1_(p_7_.data.metadata);
          } else {
            f_1_2_2(p_7_.data.metadata);
          }
          break;
        }
      case "eval-request":
        {
          await f_1_1_2(p_7_.data);
          break;
        }
    }
  }
}