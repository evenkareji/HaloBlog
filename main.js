'use-strict';
{
  let $ul = document.getElementById('categories');
  let li;
  let a;
  let INIT_CATEGORIES;
  categoriesLists();
  function categoriesLists() {
    INIT_CATEGORIES = ['最新', 'React', 'PHP', 'おすすめ', '進行中の企画'];
    for (i = 0; i < INIT_CATEGORIES.length; ++i) {
      li = document.createElement('li');
      a = document.createElement('a');
      li.appendChild(a);
      a.textContent = INIT_CATEGORIES[i];
      if (a.textContent === '最新') {
        li.classList.add('current');
      }
      $ul.appendChild(li);
    }
  }
  function init(fff) {
    for (i = 0; i < INIT_CATEGORIES.length; ++i) {
      if (INIT_CATEGORIES[i] != fff) {
        li = document.createElement('li');
        a = document.createElement('a');
        li.appendChild(a);
        a.textContent = INIT_CATEGORIES[i];

        $ul.appendChild(li);
      }
    }
  }

  const openHumburger = document.querySelector('.open');
  const closeHamburger = document.querySelector('.close');
  const hamburgerMenu = document.querySelector('.hamburger');
  const mask = document.getElementById('mask');
  const humburgerFn = Humburger();
  humburgerFn(openHumburger);
  humburgerFn(closeHamburger);
  humburgerFn(mask);
  function Humburger() {
    function clickHumbergerEvent(clickHumbergar) {
      if (clickHumbergar === openHumburger) {
        clickHumbergar.addEventListener('click', () => {
          hamburgerMenu.classList.add('show');
          mask.classList.add('mask_box');
        });
      } else if (
        (clickHumbergar === mask) |
        (clickHumbergar === closeHamburger)
      ) {
        clickHumbergar.addEventListener('click', () => {
          hamburgerMenu.classList.remove('show');
          mask.classList.remove('mask_box');
        });
      }
    }
    return clickHumbergerEvent;
  }

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

  let categories = document.querySelectorAll('.container_category ul li');

  let arrs = Array.from(categories);

  const container_articles = document.querySelector('.container_articles');
  console.log(container_articles);

  console.log(container_articles != null);

  let client_w = null;
  if (container_articles != null) {
    client_w = container_articles.clientWidth;
  }
  const flickRange = document.querySelector('.article_category_border');
  flickRange.addEventListener('touchstart', slideCategory);
  slideCategory();
  function slideCategory() {
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
  function recoFn() {
    recommend_section_frame_width = recommend_section_frame.clientWidth;
  }

  recoFn();
  console.log(recommend_section_frame_width, 'recoWidth');
  let countRecommend = 0;
  function Arrow() {
    countRecommend === 0
      ? leftArrow.classList.add('arrow_none')
      : leftArrow.classList.remove('arrow_none');
    return {
      rightArrowFn: function () {
        console.log(recommend_section_frame_width, '非同期width変数');
        console.log(countRecommend);

        countRecommend++;
        console.log(countRecommend, 'remove');
        recommend_section_frame.style.transform = `translateX(${
          -1 * recommend_section_frame_width * countRecommend
        }px)`;
        if (blog_article_recommend_section.length < countRecommend + 1) {
          countRecommend = 0;

          recommend_section_frame.style.transform = `translateX(${
            -1 * recommend_section_frame_width * countRecommend
          }px)`;
        }

        console.log(countRecommend);

        return countRecommend;
      },
      leftArrowFn: function () {
        countRecommend = countRecommend - 1;
        console.log(countRecommend);
        recommend_section_frame.style.transform = `translateX(${
          -1 * recommend_section_frame_width * countRecommend
        }px)`;
        return countRecommend;
      },
    };
  }
  const ArrowEle = Arrow();

  leftArrow.addEventListener('click', () => {
    console.log('left', countRecommend);

    ArrowEle.leftArrowFn();
    Arrow();
  });
  rightArrow.addEventListener('click', () => {
    console.log('right', countRecommend);

    ArrowEle.rightArrowFn();

    Arrow();
  });

  turnFirstCategory();
  replaceFirstNodeBySelected();

  function turnFirstCategory() {
    let scroll = document.getElementById('overflow-flick');
    document.body.addEventListener('click', () => {
      scroll.scrollLeft = 0;
    });
  }

  function replaceFirstNodeBySelected() {
    let convertSelectToFirstEle;

    let categories = document.querySelectorAll('.container_category ul li');

    let arrs = Array.from(categories);
    arrs.forEach((arr) => {
      // console.log(INIT_CATEGORIES);
      arr.addEventListener('click', () => {
        $ul.innerHTML = '';
        slideCategory();
        init(arr.innerText);

        let theFirstChild = $ul.firstChild;
        convertSelectToFirstEle = $ul.insertBefore(
          arrs.find((arr) => arr.classList.contains('current')),
          theFirstChild,
        );
      });
    });
  }
}
