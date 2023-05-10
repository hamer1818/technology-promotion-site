import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({});

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Form verilerini bir API'ye göndermek için buraya kod yazabilirsiniz.
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="name">İsim:</label>
        <input type="text" name="name" className="form-control" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">E-posta:</label>
        <input type="email" name="email" className="form-control" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Telefon:</label>
        <input type="tel" name="phone" className="form-control" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Cinsiyet:</label>
        <select name="gender" className="form-control" onChange={handleChange}>
          <option value="">Lütfen bir seçim yapın</option>
          <option value="male">Erkek</option>
          <option value="female">Kadın</option>
          <option value="leopard">Leopard 1</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="birthdate">Doğum Tarihi:</label>
        <input type="date" name="birthdate" className="form-control" onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Gönder</button>
    </form>
  );
}

export default Form;
