import './logoutButton.css'

export default function LogotButtom({handleLogout,translations,language}){

    return(
  <button className="logout-button" onClick={handleLogout}>{translations[language].logout}</button>
    )
}