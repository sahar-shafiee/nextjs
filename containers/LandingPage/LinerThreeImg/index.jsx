import React from "react";

import styles from "./LinerThreeImg.module.scss";

function LinerThreeImg({ dataLinerThreeImg }) {
  return (
    <>
      {dataLinerThreeImg.length >= 3 && (
        <>
          <div className="container">
            <div className={styles.topImage}>
              <a
                href={dataLinerThreeImg[0].url}
                title={dataLinerThreeImg[0].description}
              >
                <img
                  src={dataLinerThreeImg[0].image}
                  alt={dataLinerThreeImg[0].title}
                />
              </a>
            </div>
            <aside className={styles.section}>
              <a
                href={dataLinerThreeImg[1].url}
                data-observed="0"
                target="_blank"
                title={dataLinerThreeImg[1].description}
                className={styles.one}
              >
                <img
                  src={dataLinerThreeImg[1].image}
                  loading="lazy"
                  alt={dataLinerThreeImg[1].title}
                />
              </a>
              <a
                href={dataLinerThreeImg[2].url}
                data-observed="0"
                target="_blank"
                title={dataLinerThreeImg[2].description}
                className={styles.two}
              >
                <img
                  src={dataLinerThreeImg[2].image}
                  loading="lazy"
                  alt={dataLinerThreeImg[2].title}
                />
              </a>
            </aside>
          </div>
        </>
      )}
    </>
  );
}

export default LinerThreeImg;