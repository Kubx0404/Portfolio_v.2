import Image from "next/image";
import styles from "./page.module.css";
import Left_nav_bar from "./modules/welcome/left_nav_bar/left_nav_bar";
import Right_photo_gallery from "./modules/welcome/right_photo_gallery/right_photo_gallery";
import Welcome from "./modules/welcome/welcome";
import Second_panel from "./modules/second_panel/second_panel";
import Third_panel from "./modules/third_panel/third_panel";
import Form_panel from "./modules/form_panel/form_panel";
import Footer from "./modules/footer/footer";
import Test from "./modules/test/test";
import Gallery from "./modules/gallery/gallery";
import Header from "./modules/header/header";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Welcome /> */}
      {/* <Second_panel /> */}
      {/* <Third_panel /> */}
      {/* <Form_panel /> */}
      {/* <Footer /> */}
      <Gallery />
      {/* <Header /> */}
    </main>
  );
}
