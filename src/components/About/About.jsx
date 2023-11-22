import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImg.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Front-end</h3>
              <p>
                Sou um desenvolvedor Front-End com experiência em contruir sites optimizados em responsivos.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Back-end</h3>
              <p>
                Tenho experiência desenvolvendo sistemas rápidos e otimizados de back-end e APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Designer UI</h3>
              <p>
                Tenho multiplas landing pages e criei o designe do sistema tambem.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
