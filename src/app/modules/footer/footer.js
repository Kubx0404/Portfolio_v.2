import styles from "./footer.module.css";
import facebook from "public/facebook.svg";
import instagram from "public/instagram.svg";
import Image from "next/image";
export default function footer() {
  return (
    <div className={styles.footer}>
      <Image src={instagram} alt="instagram" className={styles.icon} />
      <Image src={facebook} alt="facebook" className={styles.icon} />
    </div>
  );
}
