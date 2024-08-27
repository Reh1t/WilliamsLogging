import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./section.module.css";

export type SectionType = {
  className?: string;
};

const Section: NextPage<SectionType> = ({ className = "" }) => {
  const onJ6jItUyKXfEsdImageClick = useCallback(() => {
    window.open("https://www.youtube.com/watch?v=j6jItUyKXfE");
  }, []);

  return (
    <section className={[styles.section2, className].join(" ")}>
      <div className={styles.williams20logo3transparentParent}>
        <img
          className={styles.williams20logo3transparentIcon}
          loading="lazy"
          alt=""
          src="/williams20logo3transparent20bgroundpng@2x.png"
        />
        <a className={styles.byWilliamsLogging}>by Williams Logging</a>
      </div>
      <div className={styles.section2Inner}>
        <div className={styles.ornamentParent}>
          <div className={styles.ornament}>
            <img
              className={styles.j6jituykxfesdIcon}
              loading="lazy"
              alt=""
              src="/j6jituykxfesd@2x.png"
              onClick={onJ6jItUyKXfEsdImageClick}
            />
          </div>
          <div className={styles.welcomeToWilliamsLoggingParent}>
            <b className={styles.welcomeToWilliamsContainer}>
              <p className={styles.welcomeTo}>{`Welcome to `}</p>
              <p className={styles.welcomeTo}>WILLIAMS LOGGING</p>
            </b>
            <div className={styles.text}>
              <div className={styles.welcomeToWilliams}>
                Welcome to Williams Logging, where we blend traditional logging
                expertise with cutting-edge technology to deliver exceptional
                service. Our commitment to innovation and precision ensures that
                our operations are efficient, reliable, and tailored to meet the
                unique needs of both landowners and businesses.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
