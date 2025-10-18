
function load_navbar(url, mountId = "navbar") {
    let el = document.getElementById(mountId);
    if (!el) {
        el = document.createElement("div");
        el.id = mountId;                  
        document.body.prepend(el);        
    }

    fetch(url+'navbar.html')
        .then(r => r.ok ? r.text() : Promise.reject(r.status))
        .then(html => el.innerHTML = html)
        .catch(e => console.error("Navbar 載入失敗：", e, url));
}
