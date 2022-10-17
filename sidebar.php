<aside class="side-category">

  <dl class="side-list">
    <dt>全てのカテゴリー</dt>
    <dd> <?php
    $arg = array(
      'title_li' => ''
    );
    wp_list_categories($arg);
    ?></dd>

  </dl>
</aside>

<aside class="side-archive">
  <h2 class="side-title"></h2>
  <ul class="side-list">
    <?php wp_get_archives(); ?>
  </ul>
</aside>
