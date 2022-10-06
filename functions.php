<?php
// 初期設定
function my_theme_support(){
	add_theme_support('post-thumbnails');

	add_theme_support('title-tag');
      //heade内にフィードリンクを出力
add_theme_support('automatic-feed-links');
// カスタムメニュー
register_nav_menus(
  array(
    'nav-global' => 'グローバルメニュー'
  )
);
// ウィジェット
register_sidebar(
  array(
    'name' => 'サイドバー' ,
    'id' => 'sidebar' ,
    'before_widget' => '<div class="widget">',
    'after_widget' => '</div>'
  )
);
}

add_action('after_setup_theme','my_theme_support');


//区切り文字の変更
function change_title_separator( $sep ){
  $sep = ' | ';
  return $sep;
}
add_filter( 'document_title_separator', 'change_title_separator' );


//抜粋の文字数を指定
function custom_excerpt_length($length) {
  return 50;
}
add_filter('excerpt_length', 'custom_excerpt_length');

//抜粋の文末文字を指定
function custom_excerpt_more($more) {
  return ' ... ';
}
add_filter('excerpt_more', 'custom_excerpt_more');

//cssを追加
function my_style_output() {

  wp_enqueue_style('reset', 'https://unpkg.com/modern-css-reset/dist/reset.min.css');
  wp_enqueue_style('my-style', get_stylesheet_uri());
  wp_enqueue_style('material', 'https://fonts.googleapis.com/icon?family=Material+Icons');
}
add_action('wp_enqueue_scripts', 'my_style_output');

//jsを追加
function my_script_output() {
  wp_enqueue_script( 'my-script', get_theme_file_uri('/main.js'), array('jquery'), '1.0.0', true);
}
add_action( 'wp_enqueue_scripts', 'my_script_output');

/*---- Google Icon ----*/
function add_google_icons() {
wp_register_style( 'googleFonts',
'https://fonts.googleapis.com/icon?family=Material+Icons'
);
wp_enqueue_style( 'googleFonts');
}
add_action( 'wp_enqueue_scripts', 'add_google_icons' );