import logo from "public/logo_madej.png";
import styles from "./right_photo_gallery.module.css";
import Image from "next/image";
import image1 from "public/Img0511_.jpg";
import image2 from "public/Img0605_.jpg";
import image3 from "public/Img0607_.jpg";
import image4 from "public/Img0608_.jpg";

export default function right_photo_gallery() {
  return (
    <div className={styles.main}>
      <Image className={styles.img_top_left} src={image1} alt="Photo1" />
      <Image className={styles.img_top_right} src={image4} alt="Photo4" />
      <Image className={styles.img_down_left} src={image2} alt="Photo2" />
      <Image className={styles.img_down_right} src={image3} alt="Photo3" />
      {/* <div className={styles.img_top_left}></div>
      <div className={styles.img_top_right}></div>
      <div className={styles.img_down_left}></div>
      <div className={styles.img_down_right}></div> */}
    </div>
  );
}
