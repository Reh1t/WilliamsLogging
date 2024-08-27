import type { NextPage } from "next";
import { useCallback } from "react";
import Section from "../components/section";
import styles from "./index.module.css";

const WillaimsLogging: NextPage = () => {
  const onWilliamsLogging2ImageClick = useCallback(() => {
    window.open("https://www.youtube.com/watch?v=j6jItUyKXfE");
  }, []);

  return (
    <div className={styles.willaimsLogging}>
      <Section />
      <section className={styles.section3}>
        <div className={styles.section3Inner}>
          <div className={styles.frameParent}>
            <div className={styles.servicesParent}>
              <b className={styles.services}>Services</b>
              <div className={styles.text}>
                <div className={styles.williamsLoggingUses}>
                  Williams Logging uses advanced technology, like the Integrated
                  Base Control (IBC) system, to make our logging operations
                  faster and more precise. This system helps our machines run
                  more smoothly and reduces strain on the operators. Even if an
                  operator is less experienced, our technology helps them
                  perform at a high level. We focus on delivering efficient and
                  reliable logging services that meet the needs of both
                  landowners and businesses.
                </div>
              </div>
            </div>
            <div className={styles.ornamentParent}>
              <div className={styles.ornament}>
                <img
                  className={styles.williamsLogging2Icon}
                  loading="lazy"
                  alt=""
                  src="/williams-logging-2@2x.png"
                  onClick={onWilliamsLogging2ImageClick}
                />
              </div>
              <div className={styles.ornament}>
                <img
                  className={styles.williamsLogging2Icon}
                  loading="lazy"
                  alt=""
                  src="/williams-logging-01@2x.png"
                  onClick={onWilliamsLogging2ImageClick}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WillaimsLogging;
