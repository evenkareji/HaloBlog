<?php get_header();?>
    <main>
      <div class="container_cate_article_all">
        <div class="container_category">
          <ul class="flex_category" id="categories">
            <li class="current"><a>最新</a></li>
            <li><a>React</a></li>
            <li><a>PHP</a></li>
            <li><a>おすすめ</a></li>
          </ul>
        </div>

        <section class="article_category_border inner">
          <!-- news -->
          <div class="container_articles container_article_flex">
            <div class="news">



            <?php
            if(have_posts()):
              while(have_posts()):
                the_post();
                ?>

               <article class="blog_article">
             <a href="<?php the_permalink();?>">
                  <h3 class="thumbnail"><?php the_post_thumbnail('thumbnail')?></h3>
                  <dl class="article_inner_blog">
                    <dt><?php the_title();?></dt>
                    <dd><?php the_time('Y年n月j日');?></dd>
                    <dd><?php the_excerpt();?></dd>
                  </dl>
              </a>
              </article>


                <?php endwhile;
                  endif;?>



            </div>

            <!-- React -->
            <div class="React">
              <article class="blog_article">
                <h1>tesuserdgtfhjgkhto</h1>
              </article>
              <article class="blog_article">
                <h1>thhaao</h1>
              </article>
              <article class="blog_article">
                <h1>tesuhgjklto</h1>
              </article>
              <article class="blog_article">
                <h1>tehggjksuto</h1>
              </article>
            </div>
            <!-- PHP -->
            <div class="PHP">
              <article class="blog_article">
                <h1>PHPHPPHP</h1>
              </article>
              <article class="blog_article">
                <h1>PHPHPPHP</h1>
              </article>
              <article class="blog_article">
                <h1>PHPHPPHP</h1>
              </article>
              <article class="blog_article">
                <h1>PHPHPPHP</h1>
              </article>
            </div>
            <div class="recommend">
              <article class="blog_article">
                <h1>recommend</h1>
              </article>
              <article class="blog_article">
                <h1>recommend</h1>
              </article>
              <article class="blog_article">
                <h1>recommend</h1>
              </article>
              <article class="blog_article">
                <h1>recommend</h1>
              </article>
            </div>
          </div>
        </section>
      </div>
      <section class="recommend_section">
        <h1 class="recommend_h1">おすすめの本</h1>
        <div
          class="choice_article_recommend_flex choice_recommend_section_frame"
        >
          <span class="material-symbols-outlined material-icons arrow_left" id="leftArrow">
            arrow_back_ios
          </span>
          <div class="recommend_section_frame_container">
            <div class="recommend_section_flex recommend_section_frame">
              <article class="blog_article_recommend_section">
                <div class="article_inner_blog">
                  <h1>tesuto0</h1>
                </div>
              </article>

              <article class="blog_article_recommend_section">
                <div class="article_inner_blog">
                  <h1>tesuto1</h1>
                </div>
              </article>

              <article class="blog_article_recommend_section">
                <div class="article_inner_blog">
                  <h1>tesuto2</h1>
                </div>
              </article>

              <article class="blog_article_recommend_section">
                <div class="article_inner_blog">
                  <h1>tesuto3</h1>
                </div>
              </article>
            </div>
          </div>
          <span class="material-symbols-outlined material-icons right_arrow" id="rightArrow">
            arrow_forward_ios
          </span>
        </div>
      </section>

      <section class="to_top">
        <a href="">
          <span class="material-symbols-outlined material-icons triangle">
            change_history
          </span>
          <p>トップページへ</p></a
        >
      </section>
      <aside class="category_side_menu">
        <dl>
          <dt>全てのカテゴリー</dt>
          <dd>非同期処理</dd>
          <dd>デザイン</dd>
          <dd>UXデザイン</dd>
        </dl>
      </aside>
    </main>
    <footer class="footer_back">
      <p>@HaloBlog</p>
    </footer>
    <script src="main.js"></script>
    <?php wp_footer();?>
  </body>
</html>
