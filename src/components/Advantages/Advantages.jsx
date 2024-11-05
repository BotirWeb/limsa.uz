import { useTranslation } from "react-i18next";
import "./Advantages.scss";

const Advantages = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container">
      <div className="advantages_wrapper">
        <div className="advantages_wrapper_img">
          <img src="./../../advantages_img.png" alt="desktop" />
        </div>
        <div className="advantages_wrapper_text">
          <p className="advantages_answer">{t("advantages_answer")}</p>
          <h2 className="advantages_title">{t("advantages_title")}</h2>
          <p className="advantages_description">{t("advantages_text")}</p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
