const translations = {
  en: {
    title: "Shree Balaji Drilling",
    welcome: "Welcome",
    description: "We provide boring and pipe services",
    services: "Our Services",
    boring_service: "Boring Service",
    pipe_service: "Pipe Fitting",
    commission_tracking: "Commission Tracking"
  },
  hi: {
    title: "श्री बालाजी ड्रिलिंग",
    welcome: "आपका स्वागत है",
    description: "हम बोरिंग और पाइप सर्विसेज प्रदान करते हैं",
    services: "हमारी सेवाएं",
    boring_service: "बोरिंग सेवा",
    pipe_service: "पाइप फिटिंग",
    commission_tracking: "कमीशन ट्रैकिंग"
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}