(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const GALLERY_IMAGES = [
    "assets/images/gallery-01.png",
    "assets/images/gallery-02.png",
    "assets/images/gallery-03.png",
    "assets/images/gallery-04.png",
    "assets/images/gallery-05.png",
    "assets/images/gallery-06.png",
    "assets/images/gallery-07.png",
    "assets/images/gallery-08.png",
    "assets/images/gallery-09.png",
    "assets/images/gallery-10.png",
    "assets/images/gallery-11.png",
    "assets/images/gallery-12.png",
    "assets/images/gallery-13.png",
    "assets/images/gallery-14.png",
    "assets/images/gallery-15.png",
    "assets/images/gallery-16.png",
    "assets/images/gallery-17.png",
    "assets/images/gallery-18.png",
    "assets/images/gallery-19.png",
  ];

  const HERO_MAIN = "assets/images/hero-main.png";
  const HERO_SUB = "assets/images/hero-sub.png";

  function setBg(el, src) {
    if (!el) return;
    const img = new Image();
    img.onload = function () {
      el.style.backgroundImage = "url('" + src + "')";
      el.classList.add("has-image");
    };
    img.onerror = function () {
      el.classList.remove("has-image");
    };
    img.src = src;
  }

  setBg(document.getElementById("hero-photo-main"), HERO_MAIN);
  setBg(document.getElementById("hero-photo-sub"), HERO_SUB);

  const gallery = document.getElementById("gallery-grid");
  if (!gallery) return;

  GALLERY_IMAGES.forEach(function (src, i) {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "gallery__item has-image";
    item.setAttribute("aria-label", "Открыть фото " + (i + 1));

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Хозтовары Бати — фото " + (i + 1);
    img.loading = i < 6 ? "eager" : "lazy";

    item.appendChild(img);
    item.addEventListener("click", function () {
      openLightbox(src, img.alt);
    });
    gallery.appendChild(item);
  });

  function openLightbox(src, alt) {
    const overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.innerHTML =
      '<button type="button" class="lightbox__close" aria-label="Закрыть">×</button>' +
      '<img src="' + src + '" alt="' + (alt || "") + '">';
    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";

    function close() {
      overlay.remove();
      document.body.style.overflow = "";
    }

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay || e.target.classList.contains("lightbox__close")) {
        close();
      }
    });
    document.addEventListener("keydown", function onKey(e) {
      if (e.key === "Escape") {
        close();
        document.removeEventListener("keydown", onKey);
      }
    });
  }
})();
