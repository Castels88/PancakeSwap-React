import { useState } from "react";
import './languagepicker.css'

const languages = [
  { lang: "العربية",  tag:"ar"},
  { lang: "বাংলা", tag: "bn"},
  { lang: "English", tag: "en" },
  { lang: "Deutsch", tag: "de"},
  { lang: "Ελληνικά", tag: "el"},
  { lang: "Español", tag: "es-es" },
  { lang:"Suomalainen", tag: "fi"},
  { lang: "Filipino", tag: "fil" },
  { lang: "Français", tag: "fr" },
  { lang: "हिंदी", tag: "hi" },
  { lang: "Magyar", tag: "hu" },
  { lang: "Bahasa Indonesia", tag: "id" },
  { lang: "Italiano", tag: "it" },
  { lang: "日本語", tag: "ja" },
  { lang: "한국어", tag: "ko" },
  { lang: "Nederlands", tag: "nl" },
  { lang: "Polski", tag: "pl" },
  { lang: "Português (Brazil)", tag: "pt-br" },
  { lang: "Português", tag: "pt" },
  { lang: "Română", tag: "ro" },
  { lang: "Русский", tag: "ru" },
  { lang: "Svenska", tag: "sv" },
  { lang: "தமிழ்", tag: "ta" },
  { lang: "Türkçe", tag: "tr" },
  { lang: "Українська", tag: "uk" },
  { lang: "Tiếng Việt", tag: "vi" },
  { lang: "简体中文", tag: "zh-cn" },
  { lang: "繁體中文", tag: "zh-tw" }
];

export function LangaugePicker() {
  const [actualLang, setActualLang] = useState('');
  const [buttonToggle, setButtonToggle] = useState(false);

  function handleLang(event) {
    setActualLang(event.target.value);
    setButtonToggle(true);
  }

  function handleToggle(){
    setButtonToggle(false);
  }

  return (
    <div className="language-container">
      {!buttonToggle ? <select className='picker' onChange={handleLang} name="languages" id="languages" value={actualLang}>
        {languages.map((language) => {
          return (
            <option
              key={language.tag}
              value={language.tag}
            >
              {language.lang}
            </option>
          );
        })}
      </select> : <button className="button" onClick={handleToggle}>{actualLang}</button>}
    </div>
  );
}
