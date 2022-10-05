import { useState } from "react";
import '../../SCSS-Modules/languagepicker.css'

const languages = [
  { lang: "English", tag: "en" },
  { lang: "French", tag: "fr" },
  { lang: "Espanol", tag: "es-es" },
  { lang: "Italiano", tag: "it" },
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
    <div>
      {!buttonToggle ? <select className='picker' onChange={handleLang} name="languages" id="languages">
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
