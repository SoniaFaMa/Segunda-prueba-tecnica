import React, { useState, useEffect } from 'react';

import ContactForm from './Components/ContactForm/ContactForm.js'
import TranslatePage from './Components/TranslatePage/TranslatePage';
import LogotButtom from './Components/LogoutButton/LogoutButton';
import WeatherInfo from './Components/WeatherInfo/WeatherInfo';
import Login from './Components/Login/Login';


import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    fechaNacimiento: '',
    ciudad: '',
    email: '',
    telefono: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [message, setMessage] = useState('');
  const [language, SetLanguage]= useState('en')

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setWeatherData([]);
    setSelectedCity('');
  }

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  useEffect(() => {
    if (selectedCity) {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=e4cab5d1b24f57fc3a3a01c13fdbc4de`)
        .then(response => response.json())
        .then(data => {
          setWeatherData(data.list);
        });
    }
  }, [selectedCity]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      const isValid = Object.values(updatedData).every((field) => field.trim() !== '');
      setIsFormValid(isValid);
      return updatedData;
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setMessage('Form submitted successfully.');
    } else {
      setMessage('Please fill out all fields.');
    }
  };

  const languageChange=(e) =>{
    SetLanguage(e.target.value)
  }

  const translations={

    en:{
      london: "London",
      toronto: "Toronto",
      singapore: "Singapour",
      languages:"Languages",
      english:"English",
      spanish:"Spanish",
      login:"Login",
      logout:"Logout",
      send:"send",
      currentTemperature:"Current Temperature",
      maxTemperature: "Max Temperature",
      minTemperature: "Min Temperature",
      dayandTime:"Day and Time",
      name:"Name",
      brithday: "Brithday",
      city:"City",
      email:"Email",
      phonenumber:" Phone Number",
      contact:"Contact",
      password:"Password"

    },

    es:{
      london: "Londres",
      toronto: "Toronto",
      singapore: "Singapur",
      languages:"Idiomas",
      english:"Inglés",
      spanish:"Español",
      login:"Acceso",
      logout:"Cerrar sesión",
      send:"Enviar",
      currentTemperature:"Temperatura Actual",
      maxTemperature: "Temperatura Máxima",
      minTemperature: "Temperatura Mínima",
      dayandTime: "Día y hora",
      name:"Nombre",
      brithday:"Fecha de nacimiento",
      city:"Ciudad",
      email:"Correo electrónico",
      phonenumber:"Teléfono",
      contact:"Contacto",
      password: "Contraseña"
      
    }
    



  }

  return (
    <div className="App">
      <div className="head-container">
        <TranslatePage
        translations={translations}
        language={language}
        languageChange={languageChange}
        />
        {isLoggedIn && (
          <LogotButtom
          handleLogout={handleLogout}
          translations={translations}
          language={language}
          />
        )}
      </div>
      <div className="sidebar">
        {isLoggedIn ? (
          <>
            <div className="cities-container">
              <div className="london-city" onClick={() => handleCityClick('London')}>{translations[language].london}</div>
              <div className="toronto-city" onClick={() => handleCityClick('Toronto')}>{translations[language].toronto}</div>
              <div className="singapore-city" onClick={() => handleCityClick('Singapore')}>{translations[language].singapore}</div>
              

              <div className="main-content">
        {selectedCity && weatherData.length > 0 && (
          <div className="weather-data">
            {weatherData.slice(0, 3).map((temp) => (
              
              <WeatherInfo
              temp={temp}
              translations={translations}
              language={language}
              />


            ))}
          </div>
        )}
      </div>
            </div>

            <ContactForm
            translations={translations}
            language={language}
            formData={formData}
            handleFormChange={handleFormChange}
            handleFormSubmit={handleFormSubmit}
            message={message}
            isFormValid={!isFormValid}

            />
          </>
        ) : (
          
          <Login
          translations={translations}
          language={language}
          handleLogin={handleLogin}
          />


        )}
      </div>
      
    </div>
  );
}






export default App;