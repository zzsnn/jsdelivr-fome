(function (i, s, o, g, r, a, m) {
    i["DaoVoiceObject"] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    a.charset = "utf-8";
    m.parentNode.insertBefore(a, m)
})(window, document, "script", ('https:' == document.location.protocol ? 'https:' : 'http:') + "//cdn.jsdelivr.net/gh/zzsnn/jsdelivr-fome/js/bundle.b69d69b9cd164a70039e.js", "daovoice");
daovoice('init', {
    app_id: "fd4499fa"
});
daovoice('update');