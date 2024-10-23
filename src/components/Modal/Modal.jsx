import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "./Modal.css";
import { useTranslation } from "react-i18next";

function AboutModal() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { t, i18n } = useTranslation();

  // State orqali formdagi qiymatlarni boshqarish
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });

  const handleClick = (e) => {
    setLoading(true);
    e.preventDefault();

    let telegram_bot_id = "7386524294:AAGDdFPzQo0gfB7xkEgQ_-IexcTDHg6mNZA";
    let chat_id = 980494597; // Xabar borishi kerak bo'lgan chat_id

    const url = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`;

    const textMessage = `
    Name: ${formData.name}
    Phone: ${formData.number}
    Message: ${formData.message}
    `;

    // Telegramga xabar yuborish
    axios({
      url: url,
      method: "POST",
      data: { chat_id: chat_id, text: textMessage },
    })
      .then((res) => {
        alert(t("contact_alert")); // Xabar muvaffaqiyatli yuborilgani haqida ogohlantirish
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
        handleClose(); // Modaldan chiqish
      });
  };

  // Input qiymatlarini yangilash uchun handleChange
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {t("about_button")}
      </Button>

      <Modal
        animation={true}
        size="520px"
        show={show}
        onHide={handleClose}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#fff", borderBottom: "none" }}
        >
          <Modal.Title
            style={{ color: "#000", fontSize: "16px", marginLeft: "15px" }}
          >
            {t("modal_title")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "28px", backgroundColor: "#fff" }}>
          <Form onSubmit={handleClick}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                style={{
                  border: "2px solid #60697b",
                  borderRadius: "12px",
                  color: "#60697b",
                }}
                type="text"
                placeholder={t("modal_name")}
                name="name"
                value={formData.name} // State'dan qiymat olish
                onChange={handleChange} // O'zgarishlarni kuzatish
                required
              />
              <Form.Control
                style={{
                  border: "2px solid #60697b",
                  borderRadius: "12px",
                  color: "#60697b",
                  marginTop: "20px",
                }}
                type="text"
                placeholder="+998"
                name="number"
                value={formData.number} // State'dan qiymat olish
                onChange={handleChange} // O'zgarishlarni kuzatish
                required
              />
            </Form.Group>
            <Form.Group controlId="about_modal">
              <Form.Control
                style={{
                  border: "2px solid #60697b",
                  borderRadius: "12px",
                  color: "#60697b",
                  padding: "12px 20px",
                  height: "120px",
                  width: "100%",
                }}
                as="textarea"
                placeholder={t("modal_text")}
                name="message"
                value={formData.message} // State'dan qiymat olish
                onChange={handleChange} // O'zgarishlarni kuzatish
                rows={3}
                required
              />
            </Form.Group>
            <Modal.Footer
              style={{
                backgroundColor: "#fff",
                border: "none",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                className="custom-button"
                type="submit"
                disabled={loading}
              >
                {loading
                  ? `${t("contact_input_btn_loader")}...`
                  : t("contact_input_button")}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AboutModal;
