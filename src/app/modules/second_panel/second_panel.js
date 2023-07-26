import logo from "public/logo_madej.png";
import styles from "./second_panel.module.css";
import image1 from "public/portrait_me.jpg";
import Image from "next/image";
import "@fontsource/caveat";
import "@fontsource/caveat/400.css";

export default function right_photo_gallery() {
  return (
    <div className={styles.main}>
      <p className={styles.quote}>
        „Przykazanie dla fotografów i innych twórców: nie pożyczaj duszy od
        innego artysty, choćby nie wiem jak ci się spodobała, ponieważ w tym
        samym momencie stracisz swoją duszę, która jest źródłem wyjątkowości
        tego, co robisz” <br />
        <br />– Joanna Maria Rybczyńska
      </p>
      <div className={styles.background_image_container}>
        <Image
          className={styles.portrait_me}
          src={image1}
          alt="Portrait of myself"
        />
      </div>
    </div>
  );
}
