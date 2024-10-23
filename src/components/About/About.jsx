import { useTranslation } from "react-i18next";
import AboutModal from "./../Modal/Modal";
import "./About.scss";
const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about_text">
          <h1 className="about_title">
            {t("about_title_part1")} <strong>{t("about_title_strong1")}</strong>
            {t("about_title_part2")} <strong>{t("about_title_strong2")}</strong>
            {t("about_title_part3")}
          </h1>
          <article class="about_description">{t("about_description")}</article>

          <AboutModal />
        </div>
        <div className="about_image">
          <div className="about_image_column first">
            <div className="image_wrapper">
              <img src="./../../about_image1.jpg" alt="" />
            </div>
            <div className="image_wrapper">
              <img src="./../../about_image2.jpg" alt="" />
            </div>
            <div className="image_wrapper">
              <img src="./../../about_image3.jpg" alt="" />
            </div>
          </div>
          <div className="about_image_column second">
            <div className="image_wrapper">
              <img src="./../../about_image4.jpg" alt="" />
            </div>
            <div className="image_wrapper">
              <img src="./../../about_image5.jpg" alt="" />
            </div>
            <div className="image_wrapper">
              <img src="./../../about_image6.jpg" alt="" />
            </div>
          </div>
          <div className="about_image_column third">
            <div className="image_wrapper">
              <img src="./../../about_image7.jpg" alt="" />
            </div>
            <div className="image_wrapper">
              <img src="./../../about_image8.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
