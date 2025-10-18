function loadCommon() {
    const head = document.head;

    const add = (tag, attrs) => {
        const el = document.createElement(tag);
        for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
        head.appendChild(el);
    };


    add("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    });

    add("script", {
        src: "https://code.jquery.com/jquery-3.7.1.min.js",
        defer: ""
    });
    add("script", {
        src: "https://code.jquery.com/ui/1.14.1/jquery-ui.min.js",
        defer: ""
    });


    add("script", {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
        defer: ""
    });

    add("link", {
        rel: "stylesheet",
        href: (location.pathname.includes("/web/") ? "../" : "") + "css/style.css"
    });



   
}

loadCommon();
