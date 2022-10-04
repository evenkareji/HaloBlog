'use-strict'
{
  /**
   *hamburgerMenu
   *
   */

  const hamburgerMenuOpen = document.querySelector('.open')
  const hamburgerMenuClose = document.querySelector('.close')
  const hamburgerMenu = document.querySelector('.hamburger')
  const mask = document.getElementById('mask')
  hamburgerMenuOpen.addEventListener('click', () => {
    hamburgerMenu.classList.add('show')
    mask.classList.add('mask_box')
  })

  hamburgerMenuClose.addEventListener('click', () => {
    hamburgerMenu.classList.remove('show')
    mask.classList.remove('mask_box')
  })

  /**
   * カテゴリー
   * スライド
   */
  // current_category
  const categories = document.querySelectorAll('.container_category ul li')

  console.log(categories)
  const arrs = Array.from(categories)

  const ay = arrs.find((arr) => arr.classList.contains('current'))
  console.log(ay)
  const container_articles = document.querySelector('.container_articles')
  let client_w = container_articles.clientWidth

  let currentIndex = 0

  arrs.forEach((category) => {
    category.addEventListener('click', () => {
      currentIndex = 0
      arrs.forEach((el) => {
        //   全ての要素からli.currentをremove
        el.classList.remove('current')
        // clickしたものにcurrentをadd
        category.classList.add('current')
        // スクロール
        let t = el.classList.contains('current')

        if (true === t) {
          console.log(currentIndex)
          // return currentIndex
          currentIndexMultiply = currentIndex
        } else {
          ++currentIndex
        }
        // conso
      })

      // let t = category.classList.contains('current')

      container_articles.style.transform = `translateX(${
        -1 * client_w * currentIndexMultiply
      }px)`
    })
  })

  // slideForEach(arrs)
  // function slideForEach(allSample) {
  //   allSample.forEach((sampleCategory) => {
  //     sampleCategory.addEventListener('click', () => {
  //       currentIndex = 0
  //       sampleCategory.classList.add('current')
  //       doubleForEach(allSample)
  //       container_articles.style.transform = `translateX(${
  //         -1 * client_w * currentIndexMultiply
  //       }px)`
  //     })
  //   })
  // }

  // function doubleForEach(sampleForEach) {
  //   sampleForEach.forEach((sinpleForEach) => {
  //     sinpleForEach.classList.remove('current')

  //     let t = sinpleForEach.classList.contains('current')
  //     console.log(t)
  //     if (true === t) {
  //       console.log(currentIndex)
  //       // return currentIndex
  //       currentIndexMultiply = currentIndex
  //       console.log(currentIndexMultiply)
  //     } else {
  //       ++currentIndex
  //     }
  //   })
  // }

  const rightArrow = document.getElementById('rightArrow')
  const leftArrow = document.getElementById('leftArrow')

  const recommend_section_frame = document.querySelector(
    '.recommend_section_frame',
  )
  const blog_article_recommend_section = document.querySelectorAll(
    '.blog_article_recommend_section',
  )
  console.log(blog_article_recommend_section)
  let recommend_section_frame_width = recommend_section_frame.clientWidth

  let countRecommend = 0
  function Arrow() {
    countRecommend === 0
      ? leftArrow.classList.add('arrow_none')
      : leftArrow.classList.remove('arrow_none')
    return {
      rightArrowFn: function () {
        console.log(countRecommend)

        countRecommend++
        console.log(countRecommend, 'remove')
        recommend_section_frame.style.transform = `translateX(${
          -1 * recommend_section_frame_width * countRecommend
        }px)`
        if (blog_article_recommend_section.length < countRecommend + 1) {
          countRecommend = 0

          recommend_section_frame.style.transform = `translateX(${
            -1 * recommend_section_frame_width * countRecommend
          }px)`
        }

        console.log(countRecommend)

        return countRecommend
      },
      leftArrowFn: function () {
        countRecommend = countRecommend - 1
        console.log(countRecommend)
        recommend_section_frame.style.transform = `translateX(${
          -1 * recommend_section_frame_width * countRecommend
        }px)`
        return countRecommend
      },
    }
  }
  const ArrowEle = Arrow()

  leftArrow.addEventListener('click', () => {
    console.log('left', countRecommend)

    ArrowEle.leftArrowFn()
    Arrow()
  })
  rightArrow.addEventListener('click', () => {
    console.log('right', countRecommend)

    ArrowEle.rightArrowFn()
    // rightArrowFnのreturn で返ったcountRecommendをArrow()内の  countRecommend === 0
    //   ? leftArrow.classList.add('arrow_none')
    //   : leftArrow.classList.remove('arrow_none')で更新するため
    Arrow()
  })

  // console.log(recommend_section_frame_width)
  // function Arrow(arrow) {
  //   console.log('h')
  //   // recommend_section_frame.style.width = recommend_section_frame_width
  //   // console.log(recommend_section_frame_width)
  //   let countRecommend = 1
  //   // let leftCount
  //   leftArrow.classList.add('arrow_none')
  //   arrow.addEventListener('click', () => {
  //     // console.log(arrow)

  //     switch (arrow) {
  //       case rightArrow:
  //         console.log('h')
  //         recommend_section_frame.style.transform = `translateX(${
  //           -1 * recommend_section_frame_width * countRecommend
  //         }px)`
  //         if (blog_article_recommend_section.length < countRecommend + 1) {
  //           countRecommend = 0

  //           recommend_section_frame.style.transform = `translateX(${
  //             -1 * recommend_section_frame_width * countRecommend
  //           }px)`
  //         }
  //         countRecommend++
  //         countRecommend === 1
  //           ? leftArrow.classList.add('arrow_none')
  //           : leftArrow.classList.remove('arrow_none')
  //         console.log(countRecommend)

  //         return countRecommend

  //         break

  //       case leftArrow:
  //         console.log(countRecommend)

  //         // recommend_section_frame.style.transform = `translateX(${
  //         //   -1 * recommend_section_frame_width * countRecommend + 1
  //         // }px)`
  //         break
  //     }
  //   })
  // }
  // Arrow(leftArrow)
  // Arrow(rightArrow)

  let firstVal = 9
  function fn() {
    return {
      firstFn: function () {
        console.log(firstVal)

        firstVal = 8
        console.log(firstVal)
        firstVal = 3
        console.log(firstVal)
        return firstVal
      },
      secondFn: function () {
        console.log(firstVal, 'secondFn')
      },
    }
  }
  const valfb = fn()
  valfb.firstFn()
  valfb.secondFn()
}