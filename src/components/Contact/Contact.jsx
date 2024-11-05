import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

import "./Contact.scss";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();

  const botToken = process.env.REACT_APP_BOT_TOKEN;
  const userToken = process.env.REACT_APP_CHAT_ID;

  // State orqali qiymatlarni boshqaramiz
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });

  const sendMessage = (event, chatId, message) => {
    setLoading(true);
    event.preventDefault();

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const textMessage = `
    Name: ${formData.name}
    Phone: ${formData.number}
    Message: ${formData.message}
    `;

    // Telegramga xabar yuborish
    axios({
      url: url,
      method: "POST",
      data: { chat_id: userToken, text: textMessage },
    })
      .then((res) => {
        alert(t("contact_alert"));
        // Formani tozalash (state'ni bo'shatish)
        setFormData({
          name: "",
          number: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(t("contact_error"), error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Input qiymatlarini yangilash uchun handleChange
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h2 className="contact_title">{t("contact_title")}</h2>
      <p className="contact_text">{t("contact_text")}</p>
      <form className="contact_form" onSubmit={sendMessage}>
        <div className="contact_user">
          <label htmlFor="name">
            <input
              type="text"
              className="contact_name_input"
              required
              id="name"
              name="name"
              value={formData.name} // Value qiymatini state'dan olish
              onChange={handleChange} // O'zgarishlarni kuzatish
              placeholder={t("contact_input_name")}
            />
          </label>
          <label htmlFor="number">
            <input
              type="text"
              className="contact_number_input"
              required
              id="number"
              name="number"
              value={formData.number} // Value qiymatini state'dan olish
              onChange={handleChange} // O'zgarishlarni kuzatish
              placeholder={t("contact_input_phone")}
            />
          </label>
        </div>
        <textarea
          name="message"
          className="contact_textarea"
          required
          id="textarea"
          maxLength={2000}
          value={formData.message} // Value qiymatini state'dan olish
          onChange={handleChange} // O'zgarishlarni kuzatish
          placeholder={t("contact_input_text")}
        ></textarea>

        <div className="contact_button">
          <button type="submit" disabled={loading}>
            {loading
              ? `${t("contact_input_btn_loader")}...`
              : t("contact_input_button")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
