import Image from "next/image";
import styles from "./page.module.css";
import Left_nav_bar from "./modules/welcome/left_nav_bar/left_nav_bar";
import Right_photo_gallery from "./modules/welcome/right_photo_gallery/right_photo_gallery";
import Welcome from "./modules/welcome/welcome";
import Second_panel from "./modules/second_panel/second_panel";

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome />
      <Second_panel />
    </main>
  );
}
