import React, { useState } from 'react';

// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{1,10}$/;

export default function TextInput() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  };

  const handleChangePhone = ({ target }) => {
    const newPhone = target.value;
    const isValid = validPhoneNumber.test(newPhone);
    if (isValid) {
      setPhone(newPhone);
    }
  };

  return (
    <div>
      <label for='email-input'>Email:</label>
      <input id='email-input' value={email} placeholder={'Email'} onChange={handleChange} />
      <br />
      <label for='phone-input'>Phone:</label>
      <input id='phone-input' placeholder={'Phone'} value={phone} onChange={handleChangePhone} />
    </div>
  );
}
