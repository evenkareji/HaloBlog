'use-strict';
{
  // TODO:削除した後に再度追加したnodeをクリックできるように
  // mapかfilterで新しい配列を作るclickされたNodeを元の位置から先頭
  // 再度クリックした時にclickされなかったさっきのnodeを元の位置にもっていく。
  //原因:不明   ブレークポイントで検証してみる。必ず変数がおかしいはず

  // TODO:リアルタイムで画面幅を調整する。Promiseが使えそう

  document.addEventListener('DOMContentLoaded', function () {
    const el = document.getElementById('el');
    const animes = el.innerHTML.trim().split('');
    // console.log(char);

    // anime.reduce();

    // 今までの蓄積と現在を合体させる
    el.innerHTML = animes.reduce((accu, currentValue) => {
      // console.log(accu, 'accu');

      // console.log(currentValue);

      return `${accu}<span class='char'>${currentValue}</span>`;
      // 第二引数に空文字を入れることで配列の全てがcurrentにくる
    }, '');
  });

  let categories;
  let cateLists;
  // different:node生成する前にgetInitialCategoryが実行される
  let $ul = document.getElementById('categories');
  let $lis = document.querySelectorAll('ul li');
  console.log($ul);

  getOrderNodes();
  // clickしたもののindexを配列で取得する
  // その数値番目にappendする
  function getOrderNodes() {
    // TODO:ひとつ前でクリックした要素を元の位置に配置する
    // forEachで
    //     ひとつ前の変数を獲得してあればいい
    // その変数番目にDomを差し込む
    let beforeDomCount = null;

    $lis.forEach(($li) => {
      ++beforeDomCount;
      $li.addEventListener('click', () => {
        console.log('DOM');
      });
    });
  }

  // let $li;
  // let a;
  // let INIT_CATEGORIES = ['最新', 'React', 'PHP', 'おすすめ', '進行中の企画'];
  // setTimeout(() => {
  //   INIT_CATEGORIES[0] = 'こんにちは';
  //   console.log(INIT_CATEGORIES);
  // }, 1000);
  // let INIT_CATEGORIES = [['最新', 'React', 'PHP', 'おすすめ', '進行中の企画']];

  // for (const INIT_CATEGORIE in INIT_CATEGORIES) {
  //   $li = document.createElement('li');
  //   a = document.createElement('a');
  //   $li.appendChild(a);
  //   a.textContent = INIT_CATEGORIES[INIT_CATEGORIE];
  //   if ('最新' === a.textContent) {
  //     $li.classList.add('current');
  //   }
  //   $ul.appendChild($li);
  //   // getInitialCategory();
  // }
  categories = document.querySelectorAll('.container_category ul li');

  cateLists = Array.from(categories);

  // function getInitialCategory() {}
  // 一番先頭に置くとcategoryを押せなくなる;

  const container_articles = document.querySelector('.container_articles');

  // logSwipeEnd();
  // function logSwipeEnd(e) {
  //   e.preventDefault();

  //   if (0 < endX - startX) {
  //     console.log('右向き');
  //     container_articles.style.transform = `translateX(${
  //       1 * client_w * currentIndexMultiply
  //     }px)`;
  //   } else {
  //     console.log('左向き');
  //     container_articles.style.transform = `translateX(${
  //       -1 * client_w * currentIndexMultiply
  //     }px)`;
  //   }
  // }

  slideCategory();
  function slideCategory() {
    let client_w = null;
    if (container_articles != null) {
      client_w = container_articles.clientWidth;
    }

    // なくなった後にnodeを再定義する必要がある？

    let currentIndex = 0;
    cateLists.forEach((cateList) => {
      // clickEventで発火するのが一度目に押された要素のみ
      cateList.addEventListener('click', () => {
        console.log(cateLists, 'ckickArray');
        console.log(cateList, 'clickEle');
        console.log('click1');

        currentIndex = 0;
        cateLists.forEach((el) => {
          el.classList.remove('current');

          cateList.classList.add('current');

          let haveCurrent = el.classList.contains('current');

          if (haveCurrent) {
            // return currentIndex
            currentIndexMultiply = currentIndex;
          } else {
            ++currentIndex;
          }
        });

        container_articles.style.transform = `translateX(${
          -1 * client_w * currentIndexMultiply
        }px)`;
        moveLeft();
        selectedToFirstNode(cateList);
      });
    });
  }

  function selectedToFirstNode(cateList) {
    // $ul.innerHTML = ''; //消さずに書き換えるnodeを配列のように

    // getUpdateCategories(cateList.innerText); //新しく生成したらバグる
    // getOrderNodes();

    convertSelectToFirstEle = $ul.insertBefore(
      cateLists.find((cateList) => cateList.classList.contains('current')),
      $ul.firstChild,
    );

    categories = document.querySelectorAll('.container_category ul li');
    console.log(categories, '新しい');
    cateLists = Array.from(categories);
    console.log(cateLists, '新しい');
  }

  function getUpdateCategories(clickContext) {
    // 選択したもの以外を新しく生成
    for (const INIT_CATEGORIE in INIT_CATEGORIES) {
      clickContext != INIT_CATEGORIES[INIT_CATEGORIE] &&
        updateCategory(INIT_CATEGORIE);
    }
  }
  function updateCategory(INIT_CATEGORIE) {
    $li = document.createElement('li');
    a = document.createElement('a');
    $li.appendChild(a);
    a.textContent = INIT_CATEGORIES[INIT_CATEGORIE];

    $ul.appendChild($li);
  }

  function moveLeft() {
    let scroll = document.getElementById('overflow-flick');
    document.body.addEventListener('click', () => {
      scroll.scrollLeft = 0;
    });
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
  const closeShow = document.querySelector('.close_icon');
  function clickShow() {
    openHumburger.addEventListener('click', () => {
      console.log(closeShow);
      closeShow.classList.add('close_show');
      hamburgerMenu.classList.add('show');
      mask.classList.add('mask_box');
    });
  }
  function clickClose() {
    closeHamburger.addEventListener('click', () => {
      closeShow.classList.remove('close_show');
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
}
