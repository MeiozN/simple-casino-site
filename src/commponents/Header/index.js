import React from 'react';
import styles from './Header.module.scss';
function Header(){
    return(
        <header className={styles.header}>
        <div className={styles.leftheader}>
          <a className={styles.menu} href="/">Sports</a>
          <a className={styles.menu} href="/"><span className={styles.yellowline}></span>In-Play</a>
          <a className={styles.menu} href="/">casino</a>
          <a className={styles.menu} href="/">live Casino</a>
          <a className={styles.menu} href="/">Virtual Sports</a>
        </div>
        <div className={styles.rightheader}>
        <a className={styles.join} href="/"><span>Join</span></a>
        <a className={styles.login} href="/"><span>login</span></a>
        </div>
        </header>
    )
}
export default Header;