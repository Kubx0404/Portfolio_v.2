import styles from "./gallery.module.css";
import "@fontsource/caveat";
import "@fontsource/caveat/400.css";
import Image from "next/image";
import photos from "../../../data/photos.json";

export default function gallery() {
  let photos_tab = new Array();

  photos.photos.map((el) => {
    photos_tab.push(el);
  });

  // let i = 1;
  // photos_tab.forEach((zdj) => {
  //   let div = document.createElement("div");
  //   div.classList.add("photo");
  //   div.classList.add("disable-select");
  //   document.querySelector(`#s${i}`).appendChild(div);
  //   let img = document.createElement("Image");
  //   img.setAttribute("src", `/photos/${zdj}`);
  //   img.setAttribute("alt", "Zdjecie");
  //   // img.setAttribute("onClick", "showModal(src)");
  //   img.classList.add("foto");
  //   div.appendChild(img);

  //   let descr = document.createElement("div");
  //   descr.classList.add("descr");
  //   descr.innerText = "Kliknij, aby powiększyć";

  //   div.appendChild(descr);

  //   i++;
  //   if (i == 4) {
  //     i = 1;
  //   }
  // });

  return (
    <div className={styles.main}>
      {/* <Image
        src="/photos/Img0300.jpg"
        alt="jebać pis"
        width={100}
        height={400}
      /> */}

      {photos.photos.map((el) => {
        if (el.includes("_")) {
          return;
        }

        return (
          <Image
            src={`/photos/${el}`}
            alt={`photo ${el}`}
            key={el}
            width={200}
            height={300}
          />
        );
      })}
    </div>
  );
}
