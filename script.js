document.addEventListener('DOMContentLoaded', function() {
    // スムーズスクロール
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ここに動的なコンテンツ（例: APIからのデータ取得、アニメーションなど）を追加できます。
    console.log("Welcome to my portfolio site!");
});