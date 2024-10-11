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
  video.muted = true; // ミュートに設定
  video.play(); // 自動再生
});

const circlePaginationSlider = new Swiper(".circlePaginationSlider", {
  loop: true, // スライドをループさせる
  speed: 500, // スライドのアニメーション速度（ミリ秒）
  effect: "fade", // フェード効果を適用
  autoplay: {
    delay: 10000, // 自動再生の遅延（ミリ秒）
    disableOnInteraction: false, // ユーザー操作後も自動再生を維持
  },
  pagination: {
    el: ".swiper-pagination", // ページネーションの要素を指定
    clickable: true, // ページネーションをクリック可能にする
    renderBullet: function (index, className) {
      // ページネーションの丸いボタンを生成するカスタム関数
      return (
        '<div class="' +
        className +
        ' circle-pagination">' +
        '<div class="circle-pagination__inner">' +
        '<svg width="25" height="25" class="circle-svg">' + // SVGをcircle-svgクラスに変更
        '<circle cx="12.5" cy="12.5" r="11"></circle>' +
        "</svg>" +
        "</div></div>"
      );
    },
  },
  on: {
    slideChangeTransitionStart: function () {
      // スライドが変更されるときにアクティブページネーションでのみSVGアニメーションを動かす
      document
        .querySelectorAll(".swiper-pagination-bullet")
        .forEach((bullet) => {
          const svg = bullet.querySelector(".circle-svg");
          if (bullet.classList.contains("swiper-pagination-bullet-active")) {
            svg.style.display = "block"; // アクティブ時にSVGを表示
          } else {
            svg.style.display = "none"; // 非アクティブ時にSVGを非表示
          }
        });
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerGroup: 5,
  slidesPerView: 5,
  spaceBetween: 60,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    hideOnClick: true, // スライドの端に来たらボタンを非表示にする
  },
  breakpoints: {
    300: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    700: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 24,
    },
    999: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: 48,
    },
    1150: {
      slidesPerGroup: 5,
      slidesPerView: 5,
      spaceBetween: 60,
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
