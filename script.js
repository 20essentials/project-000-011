console.groupCollapsed("REFERENCIAS");
console.log("Based in: ", "https://www.castellarogolf.it/golf-resort-liguria/");
console.log("rosa -> ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScjEXI9bYpv3yJpUSrTVK2nO1F7md_5Gz-f_cjs3uC_w&s");
console.log("Font family Inter", "https://fonts.google.com/specimen/Inter");
console.log("img1 ->", "https://www.castellarogolf.it/media/zoo/images/castellaro-deluxe-01_d7f062a5967edb34799483d0c7490748.jpg");
console.log("img2 ->", "https://www.castellarogolf.it/media/zoo/images/castellaro-suite-01_f2ceec08754cb9d8b2aa2f8a0c99c13b.jpg");
console.log("img3 ->", "https://www.castellarogolf.it/media/zoo/images/castellaro-superior-01_89331f62cf6dbf0847415282320839ca.jpg");
console.log("img4 ->", "https://www.castellarogolf.it/media/widgetkit/castellaro-suite-09-ee6061307b08b6885fdfab38242bc642.jpg");
console.log("img5 ->", "https://www.castellarogolf.it/media/widgetkit/castellaro-suite-08-ed6a29cdf80ff3e0e632cd838480b7cd.jpg");
console.log("img6 ->", "https://www.castellarogolf.it/media/widgetkit/castellaro-suite-04-84e89d07f28d13b19a9219e41ba4c052.jpg");
console.log("img7 ->", "https://www.castellarogolf.it/media/widgetkit/castellaro-suite-03-f4b93e1b8a3d602cf61755ca2474f4e4.jpg");
console.log("img8 ->", "https://www.castellarogolf.it/images/bike-aregai.jpg");
console.log("img9 ->", "https://www.castellarogolf.it/images/pin-casa.png");
console.log("img10 ->", "https://www.castellarogolf.it/templates/omni/styles/OverrideCustom/images/compra-casa.jpg");
console.log("aleman -> https://www.castellarogolf.it/media/mod_languages/images/de_de.gif");
console.log("ingles -> https://www.castellarogolf.it/media/mod_languages/images/en_gb.gif");
console.log("frances -> https://www.castellarogolf.it/media/mod_languages/images/fr_fr.gif");
console.log("italiano -> https://www.castellarogolf.it/media/mod_languages/images/it_it.gif");

console.groupEnd();


const d = document;

  d.addEventListener("DOMContentLoaded", e => {
    mostrarBandera();
  });

  function mostrarBandera() {
    let $bandera = d.querySelector(".bandera");

    setTimeout(() => {
      $bandera.style.animation = "haciaAbajo 1s ease 1 both";

      setTimeout(() => {
        $bandera.style.animation = "haciaArriba 1s ease 1 both";
      }, 4000);
    }, 1000);
  }

  function abrirModal(x) {
    let $containerNavBook = d.querySelector(".container-nav-book");
    if (x.classList.contains("change")) {
      $containerNavBook.style.display = "none";
      x.classList.remove("change");
    }
    else {
      x.classList.add("change");
      $containerNavBook.style.display = "flex";
    }
    
    
  }