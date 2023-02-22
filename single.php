<?php get_header();?>
    <main class="mainArticle-aside-bg-color">
      <section class="top">
        <aside class="aside-category-recommend">
          <dl>
            <dt>おすすめ</dt>
            <dd>React</dd>
            <dd>JavaScript</dd>
            <dd>PHP</dd>
            <dd>非同期処理</dd>
            <dd>Next.js</dd>
            <dd>アプリ開発</dd>
          </dl>
          <dl>
            <dt>全てのカテゴリー</dt>
            <dd>React</dd>
            <dd>JavaScript</dd>
            <dd>PHP</dd>
            <dd>非同期処理</dd>
            <dd>Next.js</dd>
            <dd>アプリ開発</dd>
          </dl>
        </aside>

        <section class="main-article-border inner">

 <?php
          if( have_posts() ):
          while( have_posts() ):
          the_post();
          ?>

          <article id=post-<?php the_ID(); ?> <?php post_class('post'); ?>>
            <img src="<?php echo get_theme_file_uri('/images/pic_post01.jpg'); ?>" alt="">
            <h2 class="post-title"><?php the_title(); ?></h2>
            <p class="post-date"><?php the_time('Y年n月j日'); ?></p>
            <div class="post-contents">
              <?php the_content(); ?>
            </div>
            <div class="post-info">
              <ul>
                <li class="post-category">Category: <?php the_category(','); ?></li>
                <li class="post-tag">Tag: <?php the_tags('', ' / '); ?></li>
              </ul>
            </div>
          </article>
 <?php
          endwhile;
          endif;
          ?>


          <div class="nav-page">
            <ul>
              <li><?php previous_post_link('←%link', '前の記事'); ?></li>
              <li><a href="<?php echo home_url('/'); ?>">一覧に戻る</a></li>
              <li><?php next_post_link('%link→', '次の記事'); ?></li>
            </ul>
          </div>
        </div>
        <div class="sidebar">
          <?php get_sidebar(); ?>
        </div>
      </div>
        </section>
      </div>
<?php get_footer(); ?>
    </main>
  </body>
</html>
