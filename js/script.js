document.addEventListener("scroll", function () {
  var headerBottom = document.querySelector(".header-bottom");
  var scrollY = window.scrollY;

  if (scrollY > 0) {
    headerBottom.classList.add("scrolled");
  } else {
    headerBottom.classList.remove("scrolled");
  }
});

document.querySelector(".hamburger").addEventListener("click", function () {
  const nav = document.querySelector(".site-nav");
  const mask = document.getElementById("mask");
  const mobileNav = document.querySelector(".mobile-nav");

  nav.classList.toggle("active");
  mask.classList.toggle("active");

  // body に no-scroll クラスを追加/削除
  if (nav.classList.contains("active")) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  // モバイルナビのクラスをリセット
  mobileNav.classList.remove("hide");

  // ナビゲーション項目のアニメーションを設定
  const navItems = document.querySelectorAll(".nav-item");
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
  const mobileNav = document.querySelector(".mobile-nav");

  // メニューとマスクを非表示にする
  nav.classList.remove("active");
  mask.classList.remove("active");

  // モバイルナビのクラスをリセット
  mobileNav.classList.remove("show");
  mobileNav.classList.remove("hide");

  document.body.classList.remove("no-scroll");
});

document.getElementById("mask").addEventListener("click", function () {
  const nav = document.querySelector(".site-nav");
  const mask = document.getElementById("mask");

  nav.classList.remove("active");
  mask.classList.remove("active");

  // bodyからno-scrollクラスを削除
  document.body.classList.remove("no-scroll");
});
// ハンバーガーメニューをクリックしたときの処理
document.querySelector(".hamburger").addEventListener("click", function () {
  const navItems = document.querySelectorAll(".nav-item");

  // クラスをリセットしてから、フェードインアニメーションを追加
  navItems.forEach((item, index) => {
    item.classList.remove("fade-out"); // フェードアウトクラスを削除
    // フェードインアニメーションを設定するための遅延
    setTimeout(() => {
      item.classList.add("animate");
    }, index * 100);
  });
});

// "ONLINE STORE" をクリックしたときの処理
document
  .getElementById("online-click")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // クリックイベントが他の要素に伝わらないようにする

    const navItems = document.querySelectorAll(".nav-item");
    const dropdown = document.querySelector(".dropdown");
    const mobileNav = document.querySelector(".mobile-nav");

    // フェードアウトクラスを追加して、アニメーションクラスを削除
    navItems.forEach((item) => {
      item.classList.remove("animate"); // フェードイン用のクラスを削除
      item.classList.add("fade-out"); // フェードアウトクラスを追加
    });

    // サブメニューと mobile-nav の表示を切り替える
    setTimeout(() => {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
        mobileNav.style.display = "none"; // mobile-nav を隠す
      } else {
        dropdown.classList.add("show");
        mobileNav.style.display = "block"; // mobile-nav を表示
      }
    }, 300); // フェードアウトのトランジションに合わせてタイミングを調整
  });

// バツボタンをクリックしたときの処理
document.getElementById("closeButton").addEventListener("click", function () {
  const nav = document.querySelector(".site-nav");
  const mask = document.getElementById("mask");
  const navItems = document.querySelectorAll(".nav-item");
  const mobileNav = document.querySelector(".mobile-nav");

  // メニューとマスクを非表示にする
  nav.classList.remove("active");
  mask.classList.remove("active");
  mobileNav.classList.remove("show"); // mobile-nav を非表示にする
  mobileNav.style.display = "none"; // 明示的に display: none に設定

  document.body.classList.remove("no-scroll");

  // すべてのアイテムのクラスをリセット
  navItems.forEach((item) => {
    item.classList.remove("fade-out"); // フェードアウトクラスを削除
    item.classList.remove("animate"); // フェードイン用のクラスを削除
  });
});
document
  .getElementById("online-click")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // クリックイベントが他の要素に伝わらないようにする

    const dropdown = document.querySelector(".dropdown");
    const mobileNav = document.querySelector(".mobile-nav");

    // サブメニューとモバイルナビの表示を切り替え
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
      mobileNav.classList.remove("show");
      mobileNav.classList.add("hide"); // 確実に非表示
    } else {
      dropdown.classList.add("show");
      mobileNav.classList.remove("hide"); // 表示をリセット
      mobileNav.classList.add("show");
    }
  });

// ドキュメントのどこかをクリックしたときに .dropdown を非表示にする処理
document.addEventListener("click", function () {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.remove("show");
});

// .dropdown 内をクリックしても消えないようにする
document.querySelector(".dropdown").addEventListener("click", function (event) {
  event.stopPropagation(); // クリックイベントの伝播を停止
});
document
  .getElementById("online-click")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // クリックイベントが他の要素に伝わらないようにする

    const dropdown = document.querySelector(".dropdown");
    const mobileNav = document.querySelector(".mobile-nav");

    // サブメニューがすでに表示されているか確認
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show"); // サブメニューを隠す
      mobileNav.style.display = "none"; // mobile-navも隠す
    } else {
      dropdown.classList.add("show"); // サブメニューを表示
      mobileNav.style.display = "block"; // mobile-navを表示
    }
  });

// ドキュメントのどこかをクリックしたときに .dropdown と .mobile-nav を非表示にする処理
document.addEventListener("click", function () {
  const dropdown = document.querySelector(".dropdown");
  const mobileNav = document.querySelector(".mobile-nav");

  dropdown.classList.remove("show");
  mobileNav.classList.remove("show"); // mobile-nav を非表示にする
});

// .dropdown 内をクリックしてもイベントが伝播しないようにする
document.querySelector(".dropdown").addEventListener("click", function (event) {
  event.stopPropagation();
});

document.querySelectorAll(".footer-title").forEach((title) => {
  title.addEventListener("click", function () {
    const button = title.querySelector(".toggle-button");
    button.classList.toggle("active"); // active クラスを切り替え

    const footerNav = title
      .closest(".footer-contair1, .footer-contair2, .footer-contair3")
      .querySelector(".footer-nav");

    // アコーディオンのように表示/非表示を切り替え
    if (footerNav.classList.contains("active")) {
      footerNav.classList.remove("active"); // 非表示
      footerNav.style.maxHeight = null;
    } else {
      footerNav.classList.add("active"); // 表示
      footerNav.style.maxHeight = footerNav.scrollHeight + "px";
    }
  });
});

// mobile-nav 内の mobile-online-click をクリックしたときの処理
document
  .querySelector(".mobile-nav .mobile-online-click")
  .addEventListener("click", function () {
    const navItems = document.querySelectorAll(".nav-item"); // ナビゲーション項目
    const mobileNav = document.querySelector(".mobile-nav"); // モバイルナビ

    console.log("mobile-nav 内の mobile-online-click がクリックされました"); // 確認用ログ

    // フェードインアニメーションの設定
    navItems.forEach((item, index) => {
      item.classList.remove("fade-out"); // フェードアウトクラスを削除
      console.log(`nav-item ${index + 1} のクラスを更新`); // 確認用ログ
      setTimeout(() => {
        item.classList.add("animate"); // 順番にアニメーションを付与
      }, index * 100); // アニメーション遅延
    });

    // モバイルナビのクラス切り替え
    if (mobileNav) {
      console.log("mobile-nav のクラスを切り替えます"); // 確認用ログ
      mobileNav.classList.remove("show"); // 表示クラスを削除
      mobileNav.classList.add("hide"); // 非表示クラスを追加
      console.log("mobile-nav のクラス:", mobileNav.classList); // 確認用ログ
    } else {
      console.error("mobile-nav が見つかりません"); // エラー用ログ
    }
  });
document
  .querySelector(".mobile-nav .mobile-online-click")
  .addEventListener("click", function () {
    const mobileNav = document.querySelector(".mobile-nav");

    if (mobileNav) {
      // フェードアウトアニメーションを適用
      mobileNav.classList.add("fade-out-right", "hide");

      // アニメーション終了後に display: none を設定
      mobileNav.addEventListener(
        "transitionend",
        function () {
          if (mobileNav.classList.contains("hide")) {
            mobileNav.style.display = "none";
            console.log("モバイルナビが非表示になりました");
          }
        },
        { once: true } // 一度だけ実行
      );
    }
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
  spaceBetween: 60,
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
    1280: {
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
// news-item要素をすべて取得
const newsItems = document.querySelectorAll(".news-item");
const newsOptions = {
  threshold: 0.1, // 要素が10%表示されたらアニメーション発火
  rootMargin: "0px 0px 50px 0px", // 50px手前でアニメーションを開始
};

// newsObserverを設定
const newsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // `show`クラスを追加してアニメーションを発火
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // アニメーション発火後に監視解除
    }
  });
}, newsOptions);

// 各 news-item にオブザーバーを適用
newsItems.forEach((item) => {
  newsObserver.observe(item);
});

// swiper-slide 要素をすべて取得
const swiperSlides = document.querySelectorAll(".swiper-slide");

// IntersectionObserverの設定（10%表示で発火）
const swiperObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // 表示領域に入ったらアニメーションを発火
      } else {
        entry.target.classList.remove("show"); // 表示領域を離れたらクラスを削除して再度監視
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px 50px 0px" }
);

// 各 swiper-slide 要素にオブザーバーを適用
swiperSlides.forEach((slide) => {
  swiperObserver.observe(slide);
});

// .journal-img-areaと.journal-text要素を取得
const journalSection = document.querySelector(".journal-img-area");
const journalText = document.querySelector(".journal-text");

const observerOptions = {
  threshold: 0.1, // 要素が10%表示されたらアニメーション発火
  rootMargin: "0px 0px -50px 0px", // 50px手前でアニメーションを開始
};

// Observerの設定
const areaObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // .journal-img-areaと.journal-textにshowクラスを追加
      journalSection.classList.add("show");
      journalText.classList.add("show");
      observer.unobserve(entry.target); // アニメーション発火後に監視解除
    }
  });
}, observerOptions);

// .journal-img-areaを監視
areaObserver.observe(journalSection);
document.addEventListener("DOMContentLoaded", () => {
  const navItem = document.querySelector(".nav-item");
  const dropdown = document.querySelector(".dropdown");

  let hideTimeout;

  navItem.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout); // 遅延をクリアして表示
    dropdown.style.opacity = "1";
    dropdown.style.visibility = "visible";
  });

  navItem.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => {
      dropdown.style.opacity = "0";
      dropdown.style.visibility = "hidden";
    }, 300); // 遅延時間を指定
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const scrollButtons = document.querySelectorAll(".scroll"); // 全ての.scrollを取得
  const collectionSection = document.getElementById("collection");

  if (scrollButtons.length > 0 && collectionSection) {
    scrollButtons.forEach((scrollButton) => {
      scrollButton.addEventListener("click", () => {
        const sectionTop = collectionSection.offsetTop; // セクションの位置を取得
        const offset = 240; // 調整量（px）

        // 調整された位置にスクロール
        window.scrollTo({
          top: sectionTop - offset, // 調整量を引く
          behavior: "smooth",
        });

        console.log("スクロールボタンがクリックされました");
      });
    });
  }
});
