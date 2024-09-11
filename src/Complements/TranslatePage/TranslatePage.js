
import './translatePage.css'

export default function TranslatePage({translations,language,languageChange}){

  return(

    <label className="head">
          {translations[language].languages}
          <select className="language-options"onChange={languageChange} value={language}>
            <option value="en">{translations[language].english}</option>
            <option value="es">{translations[language].spanish}</option>
          </select>
        </label>
  )
}