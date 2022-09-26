import React from "react";
import styles from "./Banner.module.scss";

function Banner(){
    return(
        <div className={styles.Banner}>
        <img className={styles.arrowleft} src="/img/arrow.png" alt="arrowleft"/>
        <img className="image" src="/img/banner.png" alt="picture1"/>
        <img className="image" src="/img/banner2.png" alt="picture2"/>
        <img className={styles.arrowright} src="/img/arrow.png" alt="arrowright"/>
      </div>
    )
}
export default Banner;