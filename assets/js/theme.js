(function () {
    var root = document.documentElement;
    var btn = document.querySelector('.theme-toggle');
    function apply(t) {
        root.setAttribute('data-theme', t);
        localStorage.setItem('theme', t);
        if (btn) btn.setAttribute('aria-pressed', String(t === 'dark'));
    }
    if (btn) {
        btn.setAttribute('aria-pressed', String(root.getAttribute('data-theme') === 'dark'));
        btn.addEventListener('click', function () {
            apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        });
    }
})();
