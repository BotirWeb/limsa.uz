import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import "./Partners.scss";

const Partners = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  const [counterOn, setCounterOn] = useState(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Loyihalar hisoblagichi

    const targetProjects = 500;
    const projectSpeed = 3000;
    const projectIncrement = targetProjects / projectSpeed;

    const updateProjectCount = () => {
      setProjectCount((prevCount) => {
        const newCount = prevCount + projectIncrement;
        if (newCount < targetProjects) {
          return Math.ceil(newCount);
        } else {
          clearInterval(projectInterval);
          return targetProjects;
        }
      });
    };

    const projectInterval = setInterval(updateProjectCount, 1);

    // Mijozlar hisoblagichi
    const targetClients = 20;
    const clientSpeed = 1000;
    const clientIncrement = targetClients / clientSpeed;

    const updateClientCount = () => {
      setClientCount((prevCount) => {
        const newCount = prevCount + clientIncrement;
        if (newCount < targetClients) {
          return Math.ceil(newCount);
        } else {
          clearInterval(clientInterval);
          return targetClients;
        }
      });
    };

    const clientInterval = setInterval(updateClientCount, 1);

    return () => {
      clearInterval(projectInterval);
      clearInterval(clientInterval);
    };
  }, []);

  return (
    <div className="container">
      {/* Partner logo */}
      <img src="./../../partners_limsa_logo.png" alt="partner logo" />

      {/* Partner title */}
      <h2 className="partner_title">{t("partner_title")}</h2>
      <div className="partner_counter">
        <div>
          <h3 className="partner_counter_text">
            {" "}
            <span className="counter">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                {counterOn && (
                  <CountUp start={0} end={500} delay={0} duration={2} />
                )}
                +
              </ScrollTrigger>
            </span>
          </h3>
          <p className="partner_text">{t("finish_project")}</p>
        </div>
        <div>
          <h3 className="partner_counter_text">
            <span>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                {counterOn && (
                  <CountUp start={0} end={20} delay={0} duration={3} />
                )}
                +
              </ScrollTrigger>
            </span>
          </h3>
          <p className="partner_text">{t("partner_clients")}</p>
        </div>
      </div>

      {/* Partner logo */}
      <div className="partner_logos">
        <div className="partner_logo_card">
          <div className="partner_logo">
            <img src="./../../it_time_logo.png" alt="it time akademy" />
          </div>
          <p className="partner_logo_description">IT Time</p>
        </div>
        <div className="partner_logo_card">
          <div className="partner_logo">
            <img src="./../../dez_logo.png" alt="dezinfeksiya" />
          </div>
          <p className="partner_logo_description">Dezinfeksiya Toshkent</p>
        </div>
        <div className="partner_logo_card">
          <div className="partner_logo">
            <img src="./../../homekit_logo.png" alt="homekit" />
          </div>
          <p className="partner_logo_description">HomeKit</p>
        </div>
        <div className="partner_logo_card">
          <div className="partner_logo">
            <img src="./../../loyal.png" alt="uzloyal" />
          </div>
          <p className="partner_logo_description">Loyal</p>
        </div>
        <div className="partner_logo_card">
          <div className="partner_logo">
            <img src="./../../namangan.jpg" alt="namanganoits" />
          </div>
          <p className="partner_logo_description">Namangan OITS</p>
        </div>
        <div className="partner_logo_card">
          <div className="partner_logo">
            <img src="./../../avtozoom.svg" alt="aztozoom" />
          </div>
          <p className="partner_logo_description">Auto zoom</p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
