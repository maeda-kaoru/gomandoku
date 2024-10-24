document.addEventListener("scroll", function () {
  var headerBottom = document.querySelector(".header-bottom");
  var scrollY = window.scrollY;

  if (scrollY > 0) {
    headerBottom.classList.add("scrolled");
  } else {
    headerBottom.classList.remove("scrolled");
  }
});

$(function () {
  $(".menuButton").on("click", function () {
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
    $("#mask").toggleClass("active");
    $("#item").toggleClass("active");
  });
});

document.querySelector(".hamburger").addEventListener("click", function () {
  const nav = document.querySelector(".site-nav");
  const mask = document.getElementById("mask");
  const navItems = document.querySelectorAll(".nav-item");

  nav.classList.toggle("active");
  mask.classList.toggle("active");

  // アニメーションクラスを一度削除して再適用
  navItems.forEach((item, index) => {
    item.classList.remove("animate");
    setTimeout(() => {
      item.classList.add("animate");
    }, index * 200); // 順番にアニメーションするための遅延
  });
});

document.getElementById("closeButton").addEventListener("click", function () {
  const nav = document.querySelector(".site-nav");
  const mask = document.getElementById("mask");

  nav.classList.remove("active");
  mask.classList.remove("active");
});

document.getElementById("mask").addEventListener("click", function () {
  const nav = document.querySelector(".site-nav");
  const mask = document.getElementById("mask");

  nav.classList.remove("active");
  mask.classList.remove("active");
});

function adjustGap() {
  const navList = document.querySelector(".nav-list");
  const navItems = navList.querySelectorAll(".nav-item");

  // 999px以上の場合にのみgapを調整
  if (window.innerWidth >= 999) {
    let lastTopOffset = navItems[0].offsetTop;
    navList.style.gap = "0 40px";

    for (let i = 1; i < navItems.length; i++) {
      if (navItems[i].offsetTop !== lastTopOffset) {
        navList.style.gap = "0 20px";
        break;
      }
    }
  } else {
    // 999px以下の場合はメディアクエリで指定されたgapに戻す
    navList.style.gap = ""; // CSSのデフォルト値に戻す
  }
}

// 初期ロード時とウィンドウリサイズ時に呼び出し
window.addEventListener("load", adjustGap);
window.addEventListener("resize", adjustGap);

function adjustSlideHeight() {
  // main-section内のswiper-slide要素のみ取得
  const slides = document.querySelectorAll(".main-section .swiper-slide");
  const viewportHeight = window.innerHeight;

  slides.forEach((slide) => {
    slide.style.height = `${viewportHeight}px`;
  });
}

// 初回読み込み時に高さを調整
document.addEventListener("DOMContentLoaded", adjustSlideHeight);

// ウィンドウのリサイズ時にも高さを再調整
window.addEventListener("resize", adjustSlideHeight);

document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");

  // 動画をミュートに設定
  video.muted = true;

  // IntersectionObserverの設定
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.play(); // セクションが表示されたら再生
      } else {
        video.pause(); // セクションが画面外に出たら一時停止
      }
    });
  });

  // .video-area セクションを監視
  observer.observe(document.querySelector(".video-area"));
});

// PC用Swiperの初期化
new Swiper(".container .circlePaginationSlider", {
  loop: true,
  slidesPerView: 1,
  speed: 500,
  effect: "fade",
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".container .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<div class="' +
        className +
        ' circle-pagination">' +
        '<div class="circle-pagination__inner">' +
        '<svg width="25" height="25" class="circle-svg">' +
        '<circle cx="12.5" cy="12.5" r="11"></circle>' +
        "</svg></div></div>"
      );
    },
  },
  on: {
    slideChangeTransitionStart: function () {
      document
        .querySelectorAll(".container .swiper-pagination-bullet")
        .forEach((bullet) => {
          const svg = bullet.querySelector(".circle-svg");
          svg.style.display = bullet.classList.contains(
            "swiper-pagination-bullet-active"
          )
            ? "block"
            : "none";
        });
    },
  },
});

// モバイル用Swiperの初期化
new Swiper(".container-mobile .circlePaginationSlider", {
  loop: true,
  slidesPerView: 1,
  speed: 500,
  effect: "fade",
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".container-mobile .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<div class="' +
        className +
        ' circle-pagination">' +
        '<div class="circle-pagination__inner">' +
        '<svg width="25" height="25" class="circle-svg">' +
        '<circle cx="12.5" cy="12.5" r="11"></circle>' +
        "</svg></div></div>"
      );
    },
  },
  on: {
    slideChangeTransitionStart: function () {
      document
        .querySelectorAll(".container-mobile .swiper-pagination-bullet")
        .forEach((bullet) => {
          const svg = bullet.querySelector(".circle-svg");
          svg.style.display = bullet.classList.contains(
            "swiper-pagination-bullet-active"
          )
            ? "block"
            : "none";
        });
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerGroup: 5,
  slidesPerView: 5,
  spaceBetween: 48,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    hideOnClick: true, // スライドの端に来たらボタンを非表示にする
  },
  freeMode: {
    enabled: true, // freeModeを有効にする
    momentumRatio: 0.3, // 慣性の強さを調整
    momentumVelocityRatio: 0.35, // スワイプ速度に対する慣性の反応を調整
  },
  breakpoints: {
    300: {
      slidesPerGroup: 1.5,
      slidesPerView: 1.5,
      spaceBetween: 20,
      navigation: false,
    },
    700: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 24,
      navigation: false,
    },
    1000: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: 48,
    },
    1150: {
      slidesPerGroup: 5,
      slidesPerView: 5,
      spaceBetween: 48,
    },
  },
});

// 全てのスライド（swiper-slide）を取得
const slides = document.querySelectorAll(".swiper-slide");

// 各スライドに対して個別に処理を行う
slides.forEach((slide) => {
  // スライド内のカラーボックスを取得
  const colorBoxes = slide.querySelectorAll(".color-box");
  // スライド内の画像セットを取得
  const imageContainers = slide.querySelectorAll(".image-container");

  // 初期表示: デフォルトの画像セットを表示し、それ以外のセットを非表示
  imageContainers.forEach((container) => {
    if (container.dataset.set === "default") {
      container.style.display = "block"; // デフォルトセットを表示
    } else {
      container.style.display = "none"; // その他のセットを非表示
    }
  });

  // 初期状態: デフォルトで1番目のカラーボックスを選択状態にして、クリック不可にする
  colorBoxes.forEach((box) => {
    if (box.dataset.set === "1") {
      box.classList.add("selected");
      box.style.pointerEvents = "none"; // クリック不可に設定
    }
  });

  // カラーボックスにクリックイベントを追加
  colorBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      // クリックされたボックスに対応するセット番号を取得
      const selectedSet = box.dataset.set;

      // スライド内のすべての画像セットを非表示にし、クリックされたセットのみ表示
      imageContainers.forEach((container) => {
        if (container.dataset.set === selectedSet) {
          container.style.display = "block"; // 該当するセットを表示
        } else {
          container.style.display = "none"; // それ以外は非表示
        }
      });

      // スライド内のすべてのカラーボックスから"selected"クラスを削除し、クリックを有効にする
      colorBoxes.forEach((box) => {
        box.classList.remove("selected");
        box.style.pointerEvents = "auto"; // クリック可能にする
      });

      // クリックされたカラーボックスに"selected"クラスを追加し、クリック不可にする
      box.classList.add("selected");
      box.style.pointerEvents = "none"; // クリック不可に設定
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Intersection Observer を作成
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // セクションが表示されたらアニメーションクラスを追加
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // 一度アニメーションしたら監視を解除
      }
    });
  });

  // 監視対象の要素（セクション）を指定
  const section = document.querySelector(".journal-img-area");
  observer.observe(section);
});
