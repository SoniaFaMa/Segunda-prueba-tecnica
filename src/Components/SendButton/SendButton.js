
import './sendButton.css'


export default function SendButton({isFormValid ,translations,language}){


    return(
    <button type="submit" className="form-submit-button" disabled={isFormValid}>
      {translations[language].send}
                  
    </button>
    )
  }
