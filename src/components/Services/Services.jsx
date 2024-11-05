import { useTranslation } from "react-i18next";
import "./Services.scss";

const Services = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="container">
      <h2 className="service_title">{t("service_title")}</h2>
      <div className="service_container">
        {/* service cards, web sayt */}
        <div className="service_card">
          <div className="service_card_image">
            <img src="./../../service_img.jpg" alt="service img" />
          </div>
          <div className="service_right">
            <h3 className="service_card_title">{t("card_title1")}</h3>
            <ul className="service_card_list">
              <li className="service_card_text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  style={{ fontSize: "20px", width: "20px", height: "20px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>

                <p className="service_card_description">{t("card_text1")}</p>
              </li>
              <li className="service_card_text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  style={{ fontSize: "20px", width: "20px", height: "20px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>

                <p className="service_card_description">{t("card_text2")}</p>
              </li>
              <li className="service_card_text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  style={{ fontSize: "20px", width: "20px", height: "20px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>

                <p className="service_card_description">{t("card_text3")}</p>
              </li>
              <li className="service_card_text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  style={{ fontSize: "20px", width: "20px", height: "20px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>

                <p className="service_card_description">{t("card_text4")}</p>
              </li>
            </ul>

            {/* service right button */}
            <a href="#contact" className="service_button">
              <button className="service_contact_button">
                {t("card_button")}
              </button>
            </a>
          </div>
        </div>

        {/* service cards, mobil app */}
        <div className="service_card">
          <div className="service_card_image">
            <img src="./../../service_img2.png" alt="" />
          </div>
          <div className="service_right">
            <h3 className="service_card_title">{t("card_title2")}</h3>
            <ul className="service_card_list">
              <li className="service_card_text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  style={{ fontSize: "20px", width: "20px", height: "20px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>

                <p className="service_card_description">{t("card_text_1")}</p>
              </li>
              <li className="service_card_text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  style={{ fontSize: "20px", width: "20px", height: "20px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>

                <p className="service_card_description">{t("card_text_2")}</p>
              </li>
            </ul>

            {/* service right button */}
            <a href="#contact" className="service_button">
              <button className="service_contact_button">
                {t("card_button")}
              </button>
            </a>
          </div>
        </div>

        {/* service cards, telegram bot */}
        <div className="service_card">
          <div className="service_card_image">
            <img src="./../../service_img1.png" alt="" />
          </div>
          <div className="service_right">
            <h3 className="service_card_title">{t("card_title3")}</h3>
            <ul className="service_card_list">
              <li className="service_card_text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  style={{ fontSize: "20px", width: "20px", height: "20px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>

                <p className="service_card_description">{t("card_text_3")}</p>
              </li>
              <li className="service_card_text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  style={{ fontSize: "20px", width: "20px", height: "20px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>

                <p className="service_card_description">{t("card_text_4")}</p>
              </li>
              <li className="service_card_text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  style={{ fontSize: "20px", width: "20px", height: "20px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>

                <p className="service_card_description">{t("card_text_5")}</p>
              </li>
              <li className="service_card_text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  style={{ fontSize: "20px", width: "20px", height: "20px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>

                <p className="service_card_description">{t("card_text_6")}</p>
              </li>
            </ul>

            {/* service right button */}
            <a href="#contact" className="service_button">
              <button className="service_contact_button">
                {t("card_button")}
              </button>
            </a>
          </div>
        </div>

        {/* service cards, grafik dizayn */}
        <div className="service_card">
          <div className="service_card_image">
            <img src="./../../service_img.jpg" alt="" />
          </div>
          <div className="service_right">
            <h3 className="service_card_title">{t("card_title4")}</h3>
            <ul className="service_card_list">
              <li className="service_card_text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  style={{ fontSize: "20px", width: "20px", height: "20px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>

                <p className="service_card_description">{t("card_text_8")}</p>
              </li>
              <li className="service_card_text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  style={{ fontSize: "20px", width: "20px", height: "20px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>

                <p className="service_card_description">{t("card_text_9")}</p>
              </li>
              <li className="service_card_text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  style={{ fontSize: "20px", width: "20px", height: "20px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>

                <p className="service_card_description">{t("card_text_10")}</p>
              </li>
              <li className="service_card_text">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  style={{ fontSize: "20px", width: "20px", height: "20px" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>

                <p className="service_card_description">{t("card_text_11")}</p>
              </li>
            </ul>

            {/* service right button */}
            <a href="#contact" className="service_button">
              <button className="service_contact_button">
                {t("card_button")}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
