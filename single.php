<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://unpkg.com/modern-css-reset/dist/reset.min.css"
    />
    <link rel="stylesheet" href="style.css" />
    <title>single.php</title>
  </head>
  <body>
    <header></header>
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
          <article class="main-article inner">
            <h1>reactで記事を作成(microCMS)</h1>
            <p>
              microCMSの記事データを取得する関数を別で用意する
              schedule.jsでその関数を非同期で実行し、そして取得する
              blog内のschedule.jsにpost-headerコンポーネントをインポートする
              コンポーネントに
              propsを渡して記事の情報をschedule.jsからpost-header.jsに移動して表示される
              投稿日の注意点
              cmsからデータを取得したもので時間に関することはUTC(今の世界で標準時として使っている時間)で表記される.
              そのためその表記をJST(日本標準時)に直してやる必要がある
              コンソールを開いてnpm install date-fnsをインストールする
            </p>
          </article>
        </section>
      </section>
    </main>
  </body>
</html>
