import Image from "next/image";
import styles from "./form_panel.module.css";

export default function Home() {
  return (
    <main className={styles.main} id="contact">
      <form className={styles.form} action="/send-data-here" method="post">
        <h1 className={styles.title}>Kontakt</h1>

        <input
          className={`${styles.block} ${styles.input_text}`}
          type="text"
          id="name"
          name="name"
          placeholder="Imię"
        />

        <input
          className={`${styles.block} ${styles.input_text}`}
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Nazwisko"
        />

        <input
          className={`${styles.block} ${styles.input_text}`}
          type="text"
          id="first"
          name="first"
          placeholder="adres@email"
        />

        <textarea
          className={`${styles.remove_resize} ${styles.input_text} ${styles.block}`}
          placeholder="Wiadomość"
          rows={5}
        ></textarea>

        <input
          className={`${styles.block} ${styles.input_text}`}
          type="text"
          id="last"
          name="last"
          placeholder="Numer telefonu"
        />
        <button type="submit" className={styles.submit}>
          Zatwierdź
        </button>
      </form>
    </main>
  );
}
