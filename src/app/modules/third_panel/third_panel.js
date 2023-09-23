import styles from "./third_panel.module.css";
import Image from "next/image";
// import "@fontsource/caveat";
// import "@fontsource/caveat/400.css";
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";
import image1 from "../../../../public/photos/Img0605.jpg";
import image3 from "../../../../public/photos/Img0300.jpg";
import image2 from "../../../../public/photos/Img0505.jpg";
import image4 from "../../../../public/photos/Img0407.jpg";
import image5 from "../../../../public/photos/Img0608.jpg";
import image6 from "../../../../public/photos/Img0610.jpg";

export default function third_panel() {
  return (
    <div className={styles.main} id="galleries">
      <h1 className={`${styles.montserrat} shadow ${styles.title}`}>
        Galleries
      </h1>
      <div className={styles.galleries_container}>
        <div className={styles.photo_container}>
          <p className={styles.gallery_cover_text}>best ones</p>
          <Image
            src={image1}
            alt="image1"
            className={styles.gallery_cover_photo}
          />
        </div>
        <div className={styles.photo_container}>
          <p className={styles.gallery_cover_text}>emotions</p>
          <Image
            src={image2}
            alt="image2"
            className={styles.gallery_cover_photo}
          />
        </div>
        <div className={styles.photo_container}>
          <p className={styles.gallery_cover_text}>princess</p>
          <Image
            src={image3}
            alt="image3"
            className={styles.gallery_cover_photo}
          />
        </div>
        <div className={styles.photo_container}>
          <p className={styles.gallery_cover_text}>dark</p>
          <Image
            src={image4}
            alt="image4"
            className={styles.gallery_cover_photo}
          />
        </div>
        <div className={styles.photo_container}>
          <p className={styles.gallery_cover_text}>warm</p>
          <Image
            src={image5}
            alt="image5"
            className={styles.gallery_cover_photo}
          />
        </div>
        <div className={styles.photo_container}>
          <p className={styles.gallery_cover_text}>lights</p>
          <Image
            src={image6}
            alt="image6"
            className={styles.gallery_cover_photo}
          />
        </div>
      </div>
    </div>
  );
}
