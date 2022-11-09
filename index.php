<?php get_header();?>
    <main>
      <div class="container_cate_article_all">
        <div id="overflow-flick" class="container_category overflow-flick">
          <ul class="flex_category" id="categories">

          </ul>
        </div>

        <section class="article_category_border inner">
          <!-- news -->
          <div class="container_articles container_article_flex">
            <div class="news">


<?php

$args = array(
  'category_name' => 'news',
  'posts_per_page' => 9
);
$the_query = new WP_Query($args);

if ( $the_query->have_posts() ):
while ( $the_query->have_posts() ):
$the_query->the_post();
?>

               <article class="blog_article">
             <a href="<?php the_permalink(); ?>">
                  <h3 class="thumbnail"><?php the_post_thumbnail( array( 358, 305 ))?></h3>
                  <dl class="article_inner_blog">
                    <dt><?php the_title();?></dt>
                    <dd><?php the_time('Y年n月j日');?></dd>
                    <dd><?php the_excerpt();?></dd>
                  </dl>
              </a>
              </article>


               <?php
               endwhile;
              endif;
              wp_reset_postdata();
              ?>



            </div>

            <!-- React -->
            <div class="React">
<!-- classを整える -->
              <?php

              $args = array(
                'category_name' => 'React',
                'posts_per_page' => 9
              );
              $the_query = new WP_Query($args);

              if ( $the_query->have_posts() ):
              while ( $the_query->have_posts() ):
              $the_query->the_post();
              ?>

               <article class="blog_article">
             <a href="<?php the_permalink();?>">
                  <h3 class="thumbnail"><?php the_post_thumbnail(array( 328, 185 ))?></h3>
                  <dl class="article_inner_blog">
                    <dt><?php the_title();?></dt>
                    <dd><?php the_time('Y年n月j日');?></dd>
                    <dd><?php the_excerpt();?></dd>
                  </dl>
              </a>
              </article>


               <?php
               endwhile;
              endif;
              wp_reset_postdata();
              ?>


            </div>
            <!-- PHP -->
            <div class="PHP">
               <?php

              $args = array(
                'category_name' => 'PHP',
                'posts_per_page' => 9
              );
              $the_query = new WP_Query($args);

              if ( $the_query->have_posts() ):
              while ( $the_query->have_posts() ):
              $the_query->the_post();
              ?>

               <article class="blog_article">
             <a href="<?php the_permalink();?>">
                  <h3 class="thumbnail"><?php the_post_thumbnail(array( 328, 185 ))?></h3>
                  <dl class="article_inner_blog">
                    <dt><?php the_title();?></dt>
                    <dd><?php the_time('Y年n月j日');?></dd>
                    <dd><?php the_excerpt();?></dd>
                  </dl>
              </a>
              </article>


               <?php
               endwhile;
              endif;
              wp_reset_postdata();
              ?>
            </div>
            <div class="recommend">
               <?php

              $args = array(
                'category_name' => 'recommend',
                'posts_per_page' => 9
              );
              $the_query = new WP_Query($args);

              if ( $the_query->have_posts() ):
              while ( $the_query->have_posts() ):
              $the_query->the_post();
              ?>

               <article class="blog_article">
             <a href="<?php the_permalink();?>">
                  <h3 class="thumbnail"><?php the_post_thumbnail(array( 328, 185 ))?></h3>
                  <dl class="article_inner_blog">
                    <dt><?php the_title();?></dt>
                    <dd><?php the_time('Y年n月j日');?></dd>
                    <dd><?php the_excerpt();?></dd>
                  </dl>
              </a>
              </article>


               <?php
               endwhile;
              endif;
              wp_reset_postdata();
              ?>
            </div>
          </div>
        </section>
      </div>
      <section class="recommend_section">
        <h1 class="recommend_h1">記事</h1>
        <div
          class="choice_article_recommend_flex choice_recommend_section_frame"
        >
          <span class="material-symbols-outlined material-icons arrow_left" id="leftArrow">
            arrow_back_ios
          </span>
          <div class="recommend_section_frame_container">
            <div class="recommend_section_flex recommend_section_frame">
                <?php

              $args = array(
                'category_name' => 'recommend,news,未分類',
                'posts_per_page' => 8
              );
              $the_query = new WP_Query($args);

              if ( $the_query->have_posts() ):
              while ( $the_query->have_posts() ):
              $the_query->the_post();
              ?>

               <article class="blog_article_recommend_section">
             <a href="<?php the_permalink();?>">
                  <h3 class="thumbnail"><?php the_post_thumbnail(array( 300, 200 ))?></h3>
                  <dl class="article_inner_blog">
                    <dt><?php the_title();?></dt>
                    <dd><?php the_time('Y年n月j日');?></dd>
                    <dd><?php the_excerpt();?></dd>
                  </dl>
              </a>
              </article>


               <?php
               endwhile;
              endif;
              wp_reset_postdata();
              ?>

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

    </main>
    <?php wp_footer();?>
    <?php get_footer();?>

  </body>
</html>
