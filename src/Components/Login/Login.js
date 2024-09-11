
import './login.css'

export default function Login({translations,language,handleLogin}){

    return(
  
    <div className="login-container">
              <h2 className="login-title">{translations[language].login}</h2>
              <form className="login-form" onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}>
                <div className="form-group">
                  <input type="text" className="email" placeholder={translations[language].email} />
                </div>
                <div className="form-group">
                  <input type="password" className="password" placeholder={translations[language].password} />
                </div>
                <button className="button">{translations[language].login}</button>
              </form>
            </div>
    )
  }