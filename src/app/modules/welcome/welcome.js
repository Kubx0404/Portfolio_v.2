import Image from "next/image";
import styles from "./welcome.module.css";
import Left_nav_bar from "../left_nav_bar/left_nav_bar";
import Right_photo_gallery from "../right_photo_gallery/right_photo_gallery";
import logo from "public/logo_madej.png";

export default function Welcome() {
  return (
    <div>
      <div className={styles.first_site}>
        <Left_nav_bar className="left_nav_bar" />
        <div className={styles.vl}></div>
        <Right_photo_gallery className="right_photo_gallery" />
        <Image className={styles.logo} src={logo} alt="Logo" />
      </div>
    </div>
  );
}
