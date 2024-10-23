import { useTranslation } from "react-i18next";
import HeaderDrawer from "./Drawer";
import "./Header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const languages = localStorage.getItem("i18nextLng");

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;

    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="container">
      <div className="header_logo">
        <a href="/">
          <img src={"./limsa_logo.png"} alt="Limsa logo" />
        </a>
      </div>
      <div className="header_navbar">
        <ul>
          <li className="header_list">
            <a href="#about">{t("biz_haqimizda")}</a>
          </li>
          <li className="header_list">
            <a href="#projects">{t("loyihalar")}</a>
          </li>
          <li className="header_list">
            <a href="#services">{t("xizmatlar")}</a>
          </li>
          <li>
            <a href="#contact">{t("aloqa")}</a>
          </li>
        </ul>
      </div>

      <div className="header_contact">
        <select
          className="header_dropdown"
          defaultValue="uz"
          onChange={handleChange}
          value={languages}
        >
          <option value="uz">Uz</option>
          <option value="ru">Ru</option>
          <option value="eng">Eng</option>
        </select>
        <div className="header_phone">
          <a href="tel:+998935138833">+998 (93) 513-88-33</a>
        </div>
        <div className="header_drawer">
          <HeaderDrawer />
        </div>
      </div>
    </div>
  );
};

export default Header;
