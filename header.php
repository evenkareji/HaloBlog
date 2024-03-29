<!DOCTYPE html>
<html <?php language_attributes()?>>
  <head>
    <meta charset="<?php bloginfo('charset');?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="<?php bloginfo('description');?>">

    <link
      rel="stylesheet"
      href="<?php echo get_stylesheet_uri();?>"
    />


<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <title><?php bloginfo('name');?></title>
    <?php wp_head();?>
  </head>

  <body>
    <?php wp_body_open();?>
    <header class="hero_header">
      <span
        class="material-symbols-outlined material_color material_padding material_size open material-icons"
        id="hamburger_menu"
      >
        menu
      </span>
      <a href="" class="HaloBlog" id="el">HaloBlog</a>

      <span class="material-symbols-outlined close close_icon material-icons"> close </span>
      <div class="hamburger">
        <ul class="nav-click-currents-color">
          <li class="nav-current" id="home"><a href="<?php echo home_url('/')?>" >home</a></li>
          <li id="about"><a href="<?php echo home_url('index.php/about/')?>">about</a></li>
          <li id="contact"><a href="<?php echo home_url('index.php/contact')?>">contact</a></li>
        </ul>
                <div class="sidebar">
                        <?php get_sidebar(); ?>

                </div>
      </div>
      <div id="mask"></div>
    </header>