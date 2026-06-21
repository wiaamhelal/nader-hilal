// import React, { useEffect } from "react";

// const TranslateWidget = () => {
//   useEffect(() => {
//     // التأكد من عدم تحميل السكريبت أكثر من مرة
//     if (!window.googleTranslateElementInit) {
//       window.googleTranslateElementInit = function () {
//         new window.google.translate.TranslateElement(
//           { pageLanguage: "en" },
//           "google_translate_element"
//         );
//       };

//       const script = document.createElement("script");
//       script.src =
//         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   return <div className="ms-2" id="google_translate_element"></div>;
// };

// export default TranslateWidget;

import { useEffect } from "react";

const TranslateWidget = () => {
  useEffect(() => {
    if (!document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "ar,en,fr",
          },
          "google_translate_element"
        );
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;

      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
      .skiptranslate,
      .goog-te-banner-frame {
        display: none !important;
      }
  
      body {
        top: 0 !important;
      }
    `;

    document.head.appendChild(style);
  }, []);

  return <div id="google_translate_element"></div>;
};

export default TranslateWidget;
