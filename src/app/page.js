import Image from "next/image";
import styles from "./page.module.css";
import Left_nav_bar from "./modules/left_nav_bar/left_nav_bar";
import Right_photo_gallery from "./modules/right_photo_gallery/right_photo_gallery";
import Welcome from "./modules/welcome/welcome";

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome />
    </main>
  );
}
