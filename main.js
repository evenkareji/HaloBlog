'use-strict';
{
  let $ul = document.getElementById('categories');
  let $li;
  let a;
  let INIT_CATEGORIES = ['最新', 'React', 'PHP', 'おすすめ', '進行中の企画'];
  for (i = 0; i < INIT_CATEGORIES.length; ++i) {
    initialCategory();
  }
  function initialCategory() {
    $li = document.createElement('li');
    a = document.createElement('a');
    $li.appendChild(a);
    a.textContent = INIT_CATEGORIES[i];
    if (a.textContent === '最新') {
      $li.classList.add('current');
    }
    $ul.appendChild($li);
  }

  function init(clickContext) {
    for (i = 0; i < INIT_CATEGORIES.length; ++i) {
      INIT_CATEGORIES[i] != clickContext && updateCategory();
    }
  }

  function updateCategory() {
    $li = document.createElement('li');
    a = document.createElement('a');
    $li.appendChild(a);
    a.textContent = INIT_CATEGORIES[i];

    $ul.appendChild($li);
  }

  const openHumburger = document.querySelector('.open');
  const closeHamburger = document.querySelector('.close');
  const hamburgerMenu = document.querySelector('.hamburger');
  const mask = document.getElementById('mask');

  clickHumbergerEvent();

  function clickHumbergerEvent() {
    clickShow();
    clickClose();
    clickMask();
  }
  function clickShow() {
    openHumburger.addEventListener('click', () => {
      hamburgerMenu.classList.add('show');
      mask.classList.add('mask_box');
    });
  }
  function clickClose() {
    closeHamburger.addEventListener('click', () => {
      hamburgerMenu.classList.remove('show');
      mask.classList.remove('mask_box');
    });
  }
  function clickMask() {
    mask.addEventListener('click', () => {
      hamburgerMenu.classList.remove('show');
      mask.classList.remove('mask_box');
    });
  }

  getCurrentNuv();
  function getCurrentNuv() {
    const $navLists = document.querySelectorAll('.nav-click-currents-color li');

    const navLists = Array.from($navLists);
    navLists.forEach((navList) => {
      navList.addEventListener('click', () => {
        navLists.forEach((navAllLists) => {
          navAllLists.classList.remove('nav-current');
        });
        // クリックしたliにadd
        navList.classList.add('nav-current');
      });
    });
  }

  // const flickRange = document.querySelector('.article_category_border');
  // flickRange.addEventListener('touchstart', slideCategory);
  slideCategory();
  function slideCategory() {
    let categories = document.querySelectorAll('.container_category ul li');

    let arrs = Array.from(categories);

    const container_articles = document.querySelector('.container_articles');
    console.log(container_articles);

    console.log(container_articles != null);

    let client_w = null;
    if (container_articles != null) {
      client_w = container_articles.clientWidth;
    }
    let currentIndex = 0;

    arrs.forEach((category) => {
      category.addEventListener('click', () => {
        console.log('click');
        currentIndex = 0;
        arrs.forEach((el) => {
          //   全ての要素からli.currentをremove
          el.classList.remove('current');
          // clickしたものにcurrentをadd
          category.classList.add('current');
          // スクロール
          let t = el.classList.contains('current');

          if (true === t) {
            console.log(currentIndex);
            // return currentIndex
            currentIndexMultiply = currentIndex;
          } else {
            ++currentIndex;
          }
        });

        container_articles.style.transform = `translateX(${
          -1 * client_w * currentIndexMultiply
        }px)`;
      });
    });
  }
  /*
  -----------------*/
  const rightArrow = document.getElementById('rightArrow');
  const leftArrow = document.getElementById('leftArrow');

  const recommend_section_frame = document.querySelector(
    '.recommend_section_frame',
  );
  const blog_article_recommend_section = document.querySelectorAll(
    '.blog_article_recommend_section',
  );
  console.log(blog_article_recommend_section);

  let recommend_section_frame_width;

  recommendFrame();
  function recommendFrame() {
    recommend_section_frame_width = recommend_section_frame.clientWidth;
  }

  let countRecommend = 0;
  function Arrow() {
    countRecommend === 0
      ? leftArrow.classList.add('arrow_none')
      : leftArrow.classList.remove('arrow_none');
    return {
      rightArrowFn: function () {
        rigthMove();
        blog_article_recommend_section.length < countRecommend + 1 &&
          undoInitialSlide();

        return countRecommend;
      },
      leftArrowFn: function () {
        leftMove();
      },
    };
  }
  const ArrowEle = Arrow();

  leftArrow.addEventListener('click', () => {
    ArrowEle.leftArrowFn();
    Arrow();
  });
  rightArrow.addEventListener('click', () => {
    ArrowEle.rightArrowFn();
    Arrow();
  });

  function leftMove() {
    countRecommend = countRecommend - 1;

    recommend_section_frame.style.transform = `translateX(${
      -1 * recommend_section_frame_width * countRecommend
    }px)`;
    return countRecommend;
  }
  function rigthMove() {
    countRecommend++;

    recommend_section_frame.style.transform = `translateX(${
      -1 * recommend_section_frame_width * countRecommend
    }px)`;
  }
  function undoInitialSlide() {
    countRecommend = 0;

    recommend_section_frame.style.transform = `translateX(${
      -1 * recommend_section_frame_width * countRecommend
    }px)`;
  }
  /*
----------------*/

  turnFirstCategory();
  replaceFirstNodeBySelected();

  function turnFirstCategory() {
    let scroll = document.getElementById('overflow-flick');
    document.body.addEventListener('click', () => {
      scroll.scrollLeft = 0;
    });
  }

  function replaceFirstNodeBySelected() {
    let categories = document.querySelectorAll('.container_category ul li');

    let arrs = Array.from(categories);
    arrs.forEach((arr) => {
      arr.addEventListener('click', () => {
        $ul.innerHTML = '';

        init(arr.innerText);

        convertSelectToFirstEle = $ul.insertBefore(
          arrs.find((arr) => arr.classList.contains('current')),
          $ul.firstChild,
        );
      });
    });
  }
}
