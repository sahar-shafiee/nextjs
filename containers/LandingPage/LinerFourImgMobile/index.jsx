import React, { useEffect, useState } from "react";

import styles from "./LinerFourImgMobile.module.scss";

function LinerFourImgMobile({ dataLinerFourImgMobile }) {
  return (
    <>
      {dataLinerFourImgMobile.length >= 4 && (
        <>
          <div className="container">
            <aside className={styles.section}>
              <a
                href={dataLinerFourImgMobile[0].url}
                data-observed="0"
                target="_blank"
                title={dataLinerFourImgMobile[0].description}
                className={styles.one}
              >
                <img
                  src={dataLinerFourImgMobile[0].image}
                  loading="lazy"
                  alt={dataLinerFourImgMobile[0].title}
                />
              </a>
              <a
                href={dataLinerFourImgMobile[1].url}
                data-observed="0"
                target="_blank"
                title={dataLinerFourImgMobile[1].description}
                className={styles.two}
              >
                <img
                  src={dataLinerFourImgMobile[1].image}
                  loading="lazy"
                  alt={dataLinerFourImgMobile[1].title}
                />
              </a>
            </aside>
            <aside className={styles.section}>
              <a
                href={dataLinerFourImgMobile[3].url}
                data-observed="0"
                target="_blank"
                title={dataLinerFourImgMobile[3].description}
                className={styles.one}
              >
                <img
                  src={dataLinerFourImgMobile[3].image}
                  loading="lazy"
                  alt={dataLinerFourImgMobile[3].title}
                />
              </a>
              <a
                href={dataLinerFourImgMobile[4].url}
                data-observed="0"
                target="_blank"
                title={dataLinerFourImgMobile[4].description}
                className={styles.two}
              >
                <img
                  src={dataLinerFourImgMobile[4].image}
                  loading="lazy"
                  alt={dataLinerFourImgMobile[4].title}
                />
              </a>
            </aside>
          </div>
        </>
      )}
    </>
  );
}

export default LinerFourImgMobile;