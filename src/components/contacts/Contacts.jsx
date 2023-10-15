import React, { useState } from 'react';
import  "./Contacts.scss";
import axios from 'axios';
import robot from './img/robot6-transformed.png'



const Contacts = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [message, setMessage] = useState('');
  const [nameValid, setNameValid] = useState(true);
  const [surnameValid, setSurnameValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  const sendTelegramMessage = async (name, surname, message) => {
    try {
      const botToken = '6583990133:AAFC5a6Ksn6y_oOMzl_LKsNUMe4dbUjsyG4';
      const chatId = '-4054597751';
      const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
      const response = await axios.post(apiUrl, {
        chat_id: chatId,
        text: `Name: ${name}\nSurname: ${surname}\nMessage: ${message}`,
      });
  
      console.log('Сообщение успешно отправлено в Telegram:', response.data);
    } catch (error) {
      console.error('Ошибка отправки сообщения в Telegram:', error);
    }
  };
  

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        setNameValid(/^[A-Za-z]{3,}$/.test(value));
        break;
      case 'surname':
        setSurnameValid(/^[A-Za-z]{3,}$/.test(value));
        break;
      case 'message':
        setMessageValid(value.length >= 5);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !surname || !message) {
      alert('Пожалуйста, заполните все поля.');
      return; // Отмена отправки
    }
    if (nameValid && surnameValid && messageValid) {
      sendTelegramMessage(name, surname, message);
      // Отправка данных
      console.log('Данные отправлены:', { name, surname, message });
      setName('');
      setSurname('');
      setMessage('');
      setNameValid(true);
      setSurnameValid(true);
      setMessageValid(true);
    } else {
      alert('Пожалуйста, заполните форму правильно.');
    }
  };
  
  return (
    <div className='contactMe'>
      <div className='headerContacts' id='contact_marker'>CONTACT ME</div>

      <div className='contact-wrap' >
              <div className="contact-image">
                  <img src={robot} alt="" />
              </div>
              <div className="formWrapper">
                <div className='form'>
                  <div className='form_header'>Contact me</div>
                  <div>
                    <input type="text" name="name" 
                    id="name" placeholder='Name...' 
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      validateField('name', e.target.value);
                    }}
                    className={nameValid ? '' : 'invalid'} />
                  </div>
                  <div>
                    <input type="text" name="surname"
                      id="surname" placeholder='Surname...' 
                      value={surname}
                      onChange={(e) => {
                        setSurname(e.target.value);
                        validateField('surname', e.target.value);
                      }}
                      className={surnameValid ? '' : 'invalid'}/>
                  </div>
                  <div>
                    <textarea placeholder='Your message...' value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      validateField('message', e.target.value);
                    }}
                    className={messageValid ? '' : 'invalid'}></textarea>
                  </div>
                  <div>
                    <button className='sendBtn' onClick={handleSubmit}>Send</button>
                  </div>
                </div>
              </div>
      </div>
    </div>
   
  )
}

export default Contacts


