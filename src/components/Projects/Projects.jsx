import { useTranslation } from "react-i18next";
import "./Projects.scss";

const Projects = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container">
      <h4 className="project_title">{t("projects_realise")}</h4>
      <h2 className="project_we">{t("projects_title")}</h2>

      {/* Page projects wrapper */}
      <div className="project_wrapper">
        <a
          href="https://www.ataevbahodirbuild.uz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./../../about_image1.jpg" alt="atayev bahodir build" />
        </a>
        <a
          href="https://www.autozoomrental.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="./../../about_image5.jpg" alt="autozoomrental" />
        </a>
        <a
          href="https://www.dezinfeksiyatashkent.uz/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="./../../dez.jpg" alt="dezinfeksiyatashkent" />
        </a>
        <a
          href="https://www.https//www.homekit.uz/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="./../../about_image2.jpg" alt="homekit" />
        </a>
        <a
          href="https://www.it-time-academy.uz/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="./../../about_image3.jpg" alt="it-time-academy" />
        </a>
        <a
          href="https://www.uzloyal.uz/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="./../../about_image4.jpg" alt="uzloyal" />
        </a>
        <a
          href="https://www.namanganoits.uz/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="./../../about_image6.jpg" alt="namanganoits" />
        </a>
        <a
          href="https://propartnyor.uz/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="./../../about_image8.jpg" alt="propartnyor" />
        </a>
        <a
          href="https://zamontour.uz/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="./../../about_image7.jpg" alt="zamontour" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
