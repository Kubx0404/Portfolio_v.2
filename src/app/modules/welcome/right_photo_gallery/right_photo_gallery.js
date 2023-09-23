import styles from "./right_photo_gallery.module.css";
import Image from "next/image";
import image1 from "../../../../../public/photos/Img0511_.jpg";
import image2 from "../../../../../public/photos/Img0605_.jpg";
import image3 from "../../../../../public/photos/Img0607_.jpg";
import image4 from "../../../../../public/photos/Img0608_.jpg";

export default function right_photo_gallery() {
  return (
    <div className={styles.main}>
      <div className={styles.container_top_left}>
        <Image className={styles.image} src={image1} alt="Photo1" />
      </div>
      <div className={styles.container_top_right}>
        <Image className={styles.image} src={image4} alt="Photo4" />
      </div>
      <div className={styles.container_down_left}>
        <Image className={styles.image} src={image2} alt="Photo2" />
      </div>
      <div className={styles.container_down_right}>
        <Image className={styles.image} src={image3} alt="Photo3" />
      </div>
      {/* <div className={styles.img_top_left}></div>
      <div className={styles.img_top_right}></div>
      <div className={styles.img_down_left}></div>
      <div className={styles.img_down_right}></div> */}
    </div>
  );
}
