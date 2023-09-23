import logo from "public/logo_madej.png";
import styles from "./left_nav_bar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function left_nav_bar() {
  return (
    <div className={styles.main}>
      <Image className={styles.logo} src={logo} alt="Logo" />
      <a href="#galleries">
        <p className={styles.menu}>PORTRETY</p>
      </a>
      <hr className={styles.menuLine}></hr>
      <p className={styles.menu}>O MNIE</p>
      <br />
      <br />

      <p className={styles.menu}>KRAJOBRAZY</p>

      <hr className={styles.menuLine}></hr>
      <p className={styles.menu}>STREET PHOTO</p>
      <br />
      <br />

      <p className={styles.menu}>CENNIK</p>
      <hr className={styles.menuLine}></hr>
      <a href="#contact">
        <p className={styles.menu}>KONTAKT</p>
      </a>
    </div>
  );
}
