import { useTranslation } from "react-i18next";
import "./Footer.scss";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="container">
      <h2 className="footer_title">{t("footer_title")}</h2>
      <div className="footer_contact_wrapper">
        <div className="footer_contact_info">
          {/* footer contact item */}
          <div className="footer_contact_item">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 384 512"
              style={{ color: "#6C2DBA", fontSize: "24px" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
            </svg>
            <div className="footer_contact_text">
              <h3 className="footer_item_title">{t("footer_card_title")}</h3>
              <p className="footer_item_text">{t("footer_card_text")}</p>
            </div>
          </div>

          {/* footer contact item */}
          <div className="footer_contact_item">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              style={{ color: "#6C2DBA", fontSize: "24px" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path>
            </svg>
            <div className="footer_contact_text">
              <h3 className="footer_item_title">{t("footer_card_phone")}</h3>
              <p className="footer_item_text phone_number">
                <a href="tel:+998935138833">+998 (93) 513-88-33</a>
              </p>
            </div>
          </div>

          {/* footer contact item */}
          <div className="footer_contact_item">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              style={{ color: "#6C2DBA", fontSize: "24px" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 4c-4.878 0-9 4.122-9 9s4.122 9 9 9c4.879 0 9-4.122 9-9s-4.121-9-9-9zm5 10h-6V8h2v4h4v2zm3.292-7.292-3.01-3 1.412-1.417 3.01 3zM5.282 2.294 6.7 3.706l-2.99 3-1.417-1.413z"></path>
            </svg>
            <div className="footer_contact_text">
              <h3 className="footer_item_title">{t("footer_card_time1")}</h3>
              <p className="footer_item_text">{t("footer_card_time2")}</p>
            </div>
          </div>

          {/* footer contact item */}
          <div className="footer_contact_item">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              style={{ color: "#6C2DBA", fontSize: "24px" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M378 324a69.78 69.78 0 0 0-48.83 19.91L202 272.41a69.68 69.68 0 0 0 0-32.82l127.13-71.5A69.76 69.76 0 1 0 308.87 129l-130.13 73.2a70 70 0 1 0 0 107.56L308.87 383A70 70 0 1 0 378 324z"></path>
            </svg>
            <div className="footer_contact_text">
              <h3 className="footer_item_title">{t("footer_card_social")}</h3>
              <div className="footer_social">
                <a
                  aria-label="Linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/limsa-2021/"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="footer_social_item"
                    style={{ fontSize: "24px" }}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
                <a
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://instagram.com"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="footer_social_item"
                    style={{ fontSize: "24px" }}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
                  </svg>
                </a>
                <a
                  aria-label="Telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://t.me"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 496 512"
                    className="footer_social_item"
                    style={{ fontSize: "24px" }}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* footer map */}
        <div className="footer_map">
          <iframe
            title="limza"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5991.277605726375!2d69.285732!3d41.338467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4e3088e9bf%3A0xdd9a89a16d423604!2sIT%20Time%20Academy!5e0!3m2!1sen!2sus!4v1728664857855!5m2!1sen!2sus"
            width="620"
            height="300"
            style={{ border: "1px solid #6c2dba" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="footer_bottom">
        <img src="./../../footer_limsa.png" alt="limsa icon" />
        <p className="footer_copy_text">{t("footer_copy")}</p>
      </div>
    </div>
  );
};

export default Footer;
