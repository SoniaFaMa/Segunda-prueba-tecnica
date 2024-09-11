

import SendButton from '../SendButton/SendButton'
import './contactForm.css'


export default function ContactForm({translations,language,formData,handleFormChange,handleFormSubmit,message,isFormValid}){


    return(
    <div className="contact-form-container">
                <h2 className="contact-form-title">{translations[language].contact}</h2>
                <form className="contact-form" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label className="form-label">{translations[language].name}:</label>
                    <input
                      type="text"
                      name="nombre"
                      className="form-input"
                      value={formData.nombre}
                      onChange={handleFormChange}
                    />
                  </div>
  
                  
  
                  <div className="form-group">
                    <label className="form-label">{translations[language].brithday}:</label>
                    <input
                      type="date"
                      name="fechaNacimiento"
                      className="form-input"
                      value={formData.fechaNacimiento}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{translations[language].city}:</label>
                    <input
                      type="text"
                      name="ciudad"
                      className="form-input"
                      value={formData.ciudad}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{translations[language].email}:</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{translations[language].phonenumber}:</label>
                    <input
                      type="tel"
                      name="telefono"
                      className="form-input"
                      value={formData.telefono}
                      onChange={handleFormChange}
                    />
                  </div>
                  <SendButton
                   translations={translations}
                   language={language}
                   isFormValid={isFormValid}
  
                  />
                </form>
                {message && <p className="form-message">{message}</p>}
              </div>
    )
  }