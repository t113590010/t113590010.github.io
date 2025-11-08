
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e() }(this, (function () { "use strict"; const t = t => { do { t += Math.floor(1e6 * Math.random()) } while (document.getElementById(t)); return t }, e = t => { let e = t.getAttribute("data-bs-target"); if (!e || "#" === e) { let i = t.getAttribute("href"); if (!i || !i.includes("#") && !i.startsWith(".")) return null; i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]), e = i && "#" !== i ? i.trim() : null } return e }, i = t => { const i = e(t); return i && document.querySelector(i) ? i : null }, n = t => { const i = e(t); return i ? document.querySelector(i) : null }, s = t => { if (!t) return 0; let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t); const n = Number.parseFloat(e), s = Number.parseFloat(i); return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0 }, o = t => { t.dispatchEvent(new Event("transitionend")) }, r = t => (t[0] || t).nodeType, a = (t, e) => { let i = !1; const n = e + 5; t.addEventListener("transitionend", (function e() { i = !0, t.removeEventListener("transitionend", e) })), setTimeout(() => { i || o(t) }, n) }, l = (t, e, i) => { Object.keys(i).forEach(n => { const s = i[n], o = e[n], a = o && r(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase(); var l; if (!new RegExp(s).test(a)) throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`) }) }, c = t => { if (!t) return !1; if (t.style && t.parentNode && t.parentNode.style) { const e = getComputedStyle(t), i = getComputedStyle(t.parentNode); return "none" !== e.display && "none" !== i.display && "hidden" !== e.visibility } return !1 }, d = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")), h = t => { if (!document.documentElement.attachShadow) return null; if ("function" == typeof t.getRootNode) { const e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } return t instanceof ShadowRoot ? t : t.parentNode ? h(t.parentNode) : null }, u = () => { }, f = t => t.offsetHeight, p = () => { const { jQuery: t } = window; return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null }, g = () => "rtl" === document.documentElement.dir, m = (t, e) => { var i; i = () => { const i = p(); if (i) { const n = i.fn[t]; i.fn[t] = e.jQueryInterface, i.fn[t].Constructor = e, i.fn[t].noConflict = () => (i.fn[t] = n, e.jQueryInterface) } }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i() }, _ = t => { "function" == typeof t && t() }, b = new Map; var v = { set(t, e, i) { b.has(t) || b.set(t, new Map); const n = b.get(t); n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`) }, get: (t, e) => b.has(t) && b.get(t).get(e) || null, remove(t, e) { if (!b.has(t)) return; const i = b.get(t); i.delete(e), 0 === i.size && b.delete(t) } }; const y = /[^.]*(?=\..*)\.|.*/, w = /\..*/, E = /::\d+$/, T = {}; let A = 1; const L = { mouseenter: "mouseover", mouseleave: "mouseout" }, O = /^(mouseenter|mouseleave)/i, k = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]); function D(t, e) { return e && `${e}::${A++}` || t.uidEvent || A++ } function x(t) { const e = D(t); return t.uidEvent = e, T[e] = T[e] || {}, T[e] } function C(t, e, i = null) { const n = Object.keys(t); for (let s = 0, o = n.length; s < o; s++) { const o = t[n[s]]; if (o.originalHandler === e && o.delegationSelector === i) return o } return null } function S(t, e, i) { const n = "string" == typeof e, s = n ? i : e; let o = P(t); return k.has(o) || (o = t), [n, s, o] } function N(t, e, i, n, s) { if ("string" != typeof e || !t) return; if (i || (i = n, n = null), O.test(e)) { const t = t => function (e) { if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e) }; n ? n = t(n) : i = t(i) } const [o, r, a] = S(e, i, n), l = x(t), c = l[a] || (l[a] = {}), d = C(c, r, o ? i : null); if (d) return void (d.oneOff = d.oneOff && s); const h = D(r, e.replace(y, "")), u = o ? function (t, e, i) { return function n(s) { const o = t.querySelectorAll(e); for (let { target: r } = s; r && r !== this; r = r.parentNode)for (let a = o.length; a--;)if (o[a] === r) return s.delegateTarget = r, n.oneOff && I.off(t, s.type, e, i), i.apply(r, [s]); return null } }(t, i, n) : function (t, e) { return function i(n) { return n.delegateTarget = t, i.oneOff && I.off(t, n.type, e), e.apply(t, [n]) } }(t, i); u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = h, c[h] = u, t.addEventListener(a, u, o) } function j(t, e, i, n, s) { const o = C(e[i], n, s); o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]) } function P(t) { return t = t.replace(w, ""), L[t] || t } const I = { on(t, e, i, n) { N(t, e, i, n, !1) }, one(t, e, i, n) { N(t, e, i, n, !0) }, off(t, e, i, n) { if ("string" != typeof e || !t) return; const [s, o, r] = S(e, i, n), a = r !== e, l = x(t), c = e.startsWith("."); if (void 0 !== o) { if (!l || !l[r]) return; return void j(t, l, r, o, s ? i : null) } c && Object.keys(l).forEach(i => { !function (t, e, i, n) { const s = e[i] || {}; Object.keys(s).forEach(o => { if (o.includes(n)) { const n = s[o]; j(t, e, i, n.originalHandler, n.delegationSelector) } }) }(t, l, i, e.slice(1)) }); const d = l[r] || {}; Object.keys(d).forEach(i => { const n = i.replace(E, ""); if (!a || e.includes(n)) { const e = d[i]; j(t, l, r, e.originalHandler, e.delegationSelector) } }) }, trigger(t, e, i) { if ("string" != typeof e || !t) return null; const n = p(), s = P(e), o = e !== s, r = k.has(s); let a, l = !0, c = !0, d = !1, h = null; return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), d = a.isDefaultPrevented()), r ? (h = document.createEvent("HTMLEvents"), h.initEvent(s, l, !0)) : h = new CustomEvent(e, { bubbles: l, cancelable: !0 }), void 0 !== i && Object.keys(i).forEach(t => { Object.defineProperty(h, t, { get: () => i[t] }) }), d && h.preventDefault(), c && t.dispatchEvent(h), h.defaultPrevented && void 0 !== a && a.preventDefault(), h } }; class M { constructor(t) { (t = "string" == typeof t ? document.querySelector(t) : t) && (this._element = t, v.set(this._element, this.constructor.DATA_KEY, this)) } dispose() { v.remove(this._element, this.constructor.DATA_KEY), I.off(this._element, "." + this.constructor.DATA_KEY), this._element = null } static getInstance(t) { return v.get(t, this.DATA_KEY) } static get VERSION() { return "5.0.0" } } class H extends M { static get DATA_KEY() { return "bs.alert" } close(t) { const e = t ? this._getRootElement(t) : this._element, i = this._triggerCloseEvent(e); null === i || i.defaultPrevented || this._removeElement(e) } _getRootElement(t) { return n(t) || t.closest(".alert") } _triggerCloseEvent(t) { return I.trigger(t, "close.bs.alert") } _removeElement(t) { if (t.classList.remove("show"), !t.classList.contains("fade")) return void this._destroyElement(t); const e = s(t); I.one(t, "transitionend", () => this._destroyElement(t)), a(t, e) } _destroyElement(t) { t.parentNode && t.parentNode.removeChild(t), I.trigger(t, "closed.bs.alert") } static jQueryInterface(t) { return this.each((function () { let e = v.get(this, "bs.alert"); e || (e = new H(this)), "close" === t && e[t](this) })) } static handleDismiss(t) { return function (e) { e && e.preventDefault(), t.close(this) } } } I.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', H.handleDismiss(new H)), m("alert", H); class R extends M { static get DATA_KEY() { return "bs.button" } toggle() { this._element.setAttribute("aria-pressed", this._element.classList.toggle("active")) } static jQueryInterface(t) { return this.each((function () { let e = v.get(this, "bs.button"); e || (e = new R(this)), "toggle" === t && e[t]() })) } } function B(t) { return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t) } function W(t) { return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase()) } I.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => { t.preventDefault(); const e = t.target.closest('[data-bs-toggle="button"]'); let i = v.get(e, "bs.button"); i || (i = new R(e)), i.toggle() }), m("button", R); const z = { setDataAttribute(t, e, i) { t.setAttribute("data-bs-" + W(e), i) }, removeDataAttribute(t, e) { t.removeAttribute("data-bs-" + W(e)) }, getDataAttributes(t) { if (!t) return {}; const e = {}; return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(i => { let n = i.replace(/^bs/, ""); n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = B(t.dataset[i]) }), e }, getDataAttribute: (t, e) => B(t.getAttribute("data-bs-" + W(e))), offset(t) { const e = t.getBoundingClientRect(); return { top: e.top + document.body.scrollTop, left: e.left + document.body.scrollLeft } }, position: t => ({ top: t.offsetTop, left: t.offsetLeft }) }, U = { find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)), findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t), children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)), parents(t, e) { const i = []; let n = t.parentNode; for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;)n.matches(e) && i.push(n), n = n.parentNode; return i }, prev(t, e) { let i = t.previousElementSibling; for (; i;) { if (i.matches(e)) return [i]; i = i.previousElementSibling } return [] }, next(t, e) { let i = t.nextElementSibling; for (; i;) { if (i.matches(e)) return [i]; i = i.nextElementSibling } return [] } }, $ = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 }, F = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, K = "next", Y = "prev", q = "left", V = "right"; class X extends M { constructor(t, e) { super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = U.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners() } static get Default() { return $ } static get DATA_KEY() { return "bs.carousel" } next() { this._isSliding || this._slide(K) } nextWhenVisible() { !document.hidden && c(this._element) && this.next() } prev() { this._isSliding || this._slide(Y) } pause(t) { t || (this._isPaused = !0), U.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (o(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null } cycle(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) } to(t) { this._activeElement = U.findOne(".active.carousel-item", this._element); const e = this._getItemIndex(this._activeElement); if (t > this._items.length - 1 || t < 0) return; if (this._isSliding) return void I.one(this._element, "slid.bs.carousel", () => this.to(t)); if (e === t) return this.pause(), void this.cycle(); const i = t > e ? K : Y; this._slide(i, this._items[t]) } dispose() { this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null, super.dispose() } _getConfig(t) { return t = { ...$, ...t }, l("carousel", t, F), t } _handleSwipe() { const t = Math.abs(this.touchDeltaX); if (t <= 40) return; const e = t / this.touchDeltaX; this.touchDeltaX = 0, e && this._slide(e > 0 ? V : q) } _addEventListeners() { this._config.keyboard && I.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && (I.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)), I.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners() } _addTouchEventListeners() { const t = t => { !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX }, e = t => { this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX }, i = t => { !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval)) }; U.find(".carousel-item img", this._element).forEach(t => { I.on(t, "dragstart.bs.carousel", t => t.preventDefault()) }), this._pointerEvent ? (I.on(this._element, "pointerdown.bs.carousel", e => t(e)), I.on(this._element, "pointerup.bs.carousel", t => i(t)), this._element.classList.add("pointer-event")) : (I.on(this._element, "touchstart.bs.carousel", e => t(e)), I.on(this._element, "touchmove.bs.carousel", t => e(t)), I.on(this._element, "touchend.bs.carousel", t => i(t))) } _keydown(t) { /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), this._slide(V)) : "ArrowRight" === t.key && (t.preventDefault(), this._slide(q))) } _getItemIndex(t) { return this._items = t && t.parentNode ? U.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t) } _getItemByOrder(t, e) { const i = t === K, n = t === Y, s = this._getItemIndex(e), o = this._items.length - 1; if ((n && 0 === s || i && s === o) && !this._config.wrap) return e; const r = (s + (n ? -1 : 1)) % this._items.length; return -1 === r ? this._items[this._items.length - 1] : this._items[r] } _triggerSlideEvent(t, e) { const i = this._getItemIndex(t), n = this._getItemIndex(U.findOne(".active.carousel-item", this._element)); return I.trigger(this._element, "slide.bs.carousel", { relatedTarget: t, direction: e, from: n, to: i }) } _setActiveIndicatorElement(t) { if (this._indicatorsElement) { const e = U.findOne(".active", this._indicatorsElement); e.classList.remove("active"), e.removeAttribute("aria-current"); const i = U.find("[data-bs-target]", this._indicatorsElement); for (let e = 0; e < i.length; e++)if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) { i[e].classList.add("active"), i[e].setAttribute("aria-current", "true"); break } } } _updateInterval() { const t = this._activeElement || U.findOne(".active.carousel-item", this._element); if (!t) return; const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10); e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval } _slide(t, e) { const i = this._directionToOrder(t), n = U.findOne(".active.carousel-item", this._element), o = this._getItemIndex(n), r = e || this._getItemByOrder(i, n), l = this._getItemIndex(r), c = Boolean(this._interval), d = i === K, h = d ? "carousel-item-start" : "carousel-item-end", u = d ? "carousel-item-next" : "carousel-item-prev", p = this._orderToDirection(i); if (r && r.classList.contains("active")) this._isSliding = !1; else if (!this._triggerSlideEvent(r, p).defaultPrevented && n && r) { if (this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r, this._element.classList.contains("slide")) { r.classList.add(u), f(r), n.classList.add(h), r.classList.add(h); const t = s(n); I.one(n, "transitionend", () => { r.classList.remove(h, u), r.classList.add("active"), n.classList.remove("active", u, h), this._isSliding = !1, setTimeout(() => { I.trigger(this._element, "slid.bs.carousel", { relatedTarget: r, direction: p, from: o, to: l }) }, 0) }), a(n, t) } else n.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, I.trigger(this._element, "slid.bs.carousel", { relatedTarget: r, direction: p, from: o, to: l }); c && this.cycle() } } _directionToOrder(t) { return [V, q].includes(t) ? g() ? t === q ? Y : K : t === q ? K : Y : t } _orderToDirection(t) { return [K, Y].includes(t) ? g() ? t === Y ? q : V : t === Y ? V : q : t } static carouselInterface(t, e) { let i = v.get(t, "bs.carousel"), n = { ...$, ...z.getDataAttributes(t) }; "object" == typeof e && (n = { ...n, ...e }); const s = "string" == typeof e ? e : n.slide; if (i || (i = new X(t, n)), "number" == typeof e) i.to(e); else if ("string" == typeof s) { if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`); i[s]() } else n.interval && n.ride && (i.pause(), i.cycle()) } static jQueryInterface(t) { return this.each((function () { X.carouselInterface(this, t) })) } static dataApiClickHandler(t) { const e = n(this); if (!e || !e.classList.contains("carousel")) return; const i = { ...z.getDataAttributes(e), ...z.getDataAttributes(this) }, s = this.getAttribute("data-bs-slide-to"); s && (i.interval = !1), X.carouselInterface(e, i), s && v.get(e, "bs.carousel").to(s), t.preventDefault() } } I.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", X.dataApiClickHandler), I.on(window, "load.bs.carousel.data-api", () => { const t = U.find('[data-bs-ride="carousel"]'); for (let e = 0, i = t.length; e < i; e++)X.carouselInterface(t[e], v.get(t[e], "bs.carousel")) }), m("carousel", X); const Q = { toggle: !0, parent: "" }, G = { toggle: "boolean", parent: "(string|element)" }; class Z extends M { constructor(t, e) { super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = U.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`); const n = U.find('[data-bs-toggle="collapse"]'); for (let t = 0, e = n.length; t < e; t++) { const e = n[t], s = i(e), o = U.find(s).filter(t => t === this._element); null !== s && o.length && (this._selector = s, this._triggerArray.push(e)) } this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } static get Default() { return Q } static get DATA_KEY() { return "bs.collapse" } toggle() { this._element.classList.contains("show") ? this.hide() : this.show() } show() { if (this._isTransitioning || this._element.classList.contains("show")) return; let t, e; this._parent && (t = U.find(".show, .collapsing", this._parent).filter(t => "string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains("collapse")), 0 === t.length && (t = null)); const i = U.findOne(this._selector); if (t) { const n = t.find(t => i !== t); if (e = n ? v.get(n, "bs.collapse") : null, e && e._isTransitioning) return } if (I.trigger(this._element, "show.bs.collapse").defaultPrevented) return; t && t.forEach(t => { i !== t && Z.collapseInterface(t, "hide"), e || v.set(t, "bs.collapse", null) }); const n = this._getDimension(); this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n] = 0, this._triggerArray.length && this._triggerArray.forEach(t => { t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0) }), this.setTransitioning(!0); const o = "scroll" + (n[0].toUpperCase() + n.slice(1)), r = s(this._element); I.one(this._element, "transitionend", () => { this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[n] = "", this.setTransitioning(!1), I.trigger(this._element, "shown.bs.collapse") }), a(this._element, r), this._element.style[n] = this._element[o] + "px" } hide() { if (this._isTransitioning || !this._element.classList.contains("show")) return; if (I.trigger(this._element, "hide.bs.collapse").defaultPrevented) return; const t = this._getDimension(); this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", f(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show"); const e = this._triggerArray.length; if (e > 0) for (let t = 0; t < e; t++) { const e = this._triggerArray[t], i = n(e); i && !i.classList.contains("show") && (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1)) } this.setTransitioning(!0), this._element.style[t] = ""; const i = s(this._element); I.one(this._element, "transitionend", () => { this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), I.trigger(this._element, "hidden.bs.collapse") }), a(this._element, i) } setTransitioning(t) { this._isTransitioning = t } dispose() { super.dispose(), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null } _getConfig(t) { return (t = { ...Q, ...t }).toggle = Boolean(t.toggle), l("collapse", t, G), t } _getDimension() { return this._element.classList.contains("width") ? "width" : "height" } _getParent() { let { parent: t } = this._config; r(t) ? void 0 === t.jquery && void 0 === t[0] || (t = t[0]) : t = U.findOne(t); const e = `[data-bs-toggle="collapse"][data-bs-parent="${t}"]`; return U.find(e, t).forEach(t => { const e = n(t); this._addAriaAndCollapsedClass(e, [t]) }), t } _addAriaAndCollapsedClass(t, e) { if (!t || !e.length) return; const i = t.classList.contains("show"); e.forEach(t => { i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i) }) } static collapseInterface(t, e) { let i = v.get(t, "bs.collapse"); const n = { ...Q, ...z.getDataAttributes(t), ..."object" == typeof e && e ? e : {} }; if (!i && n.toggle && "string" == typeof e && /show|hide/.test(e) && (n.toggle = !1), i || (i = new Z(t, n)), "string" == typeof e) { if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`); i[e]() } } static jQueryInterface(t) { return this.each((function () { Z.collapseInterface(this, t) })) } } I.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function (t) { ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault(); const e = z.getDataAttributes(this), n = i(this); U.find(n).forEach(t => { const i = v.get(t, "bs.collapse"); let n; i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, Z.collapseInterface(t, n) }) })), m("collapse", Z); var J = "top", tt = "bottom", et = "right", it = "left", nt = [J, tt, et, it], st = nt.reduce((function (t, e) { return t.concat([e + "-start", e + "-end"]) }), []), ot = [].concat(nt, ["auto"]).reduce((function (t, e) { return t.concat([e, e + "-start", e + "-end"]) }), []), rt = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"]; function at(t) { return t ? (t.nodeName || "").toLowerCase() : null } function lt(t) { if (null == t) return window; if ("[object Window]" !== t.toString()) { var e = t.ownerDocument; return e && e.defaultView || window } return t } function ct(t) { return t instanceof lt(t).Element || t instanceof Element } function dt(t) { return t instanceof lt(t).HTMLElement || t instanceof HTMLElement } function ht(t) { return "undefined" != typeof ShadowRoot && (t instanceof lt(t).ShadowRoot || t instanceof ShadowRoot) } var ut = { name: "applyStyles", enabled: !0, phase: "write", fn: function (t) { var e = t.state; Object.keys(e.elements).forEach((function (t) { var i = e.styles[t] || {}, n = e.attributes[t] || {}, s = e.elements[t]; dt(s) && at(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function (t) { var e = n[t]; !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e) }))) })) }, effect: function (t) { var e = t.state, i = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} }; return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () { Object.keys(e.elements).forEach((function (t) { var n = e.elements[t], s = e.attributes[t] || {}, o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function (t, e) { return t[e] = "", t }), {}); dt(n) && at(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function (t) { n.removeAttribute(t) }))) })) } }, requires: ["computeStyles"] }; function ft(t) { return t.split("-")[0] } function pt(t) { var e = t.getBoundingClientRect(); return { width: e.width, height: e.height, top: e.top, right: e.right, bottom: e.bottom, left: e.left, x: e.left, y: e.top } } function gt(t) { var e = pt(t), i = t.offsetWidth, n = t.offsetHeight; return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), { x: t.offsetLeft, y: t.offsetTop, width: i, height: n } } function mt(t, e) { var i = e.getRootNode && e.getRootNode(); if (t.contains(e)) return !0; if (i && ht(i)) { var n = e; do { if (n && t.isSameNode(n)) return !0; n = n.parentNode || n.host } while (n) } return !1 } function _t(t) { return lt(t).getComputedStyle(t) } function bt(t) { return ["table", "td", "th"].indexOf(at(t)) >= 0 } function vt(t) { return ((ct(t) ? t.ownerDocument : t.document) || window.document).documentElement } function yt(t) { return "html" === at(t) ? t : t.assignedSlot || t.parentNode || (ht(t) ? t.host : null) || vt(t) } function wt(t) { return dt(t) && "fixed" !== _t(t).position ? t.offsetParent : null } function Et(t) { for (var e = lt(t), i = wt(t); i && bt(i) && "static" === _t(i).position;)i = wt(i); return i && ("html" === at(i) || "body" === at(i) && "static" === _t(i).position) ? e : i || function (t) { var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"); if (-1 !== navigator.userAgent.indexOf("Trident") && dt(t) && "fixed" === _t(t).position) return null; for (var i = yt(t); dt(i) && ["html", "body"].indexOf(at(i)) < 0;) { var n = _t(i); if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i; i = i.parentNode } return null }(t) || e } function Tt(t) { return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y" } var At = Math.max, Lt = Math.min, Ot = Math.round; function kt(t, e, i) { return At(t, Lt(e, i)) } function Dt(t) { return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t) } function xt(t, e) { return e.reduce((function (e, i) { return e[i] = t, e }), {}) } var Ct = { name: "arrow", enabled: !0, phase: "main", fn: function (t) { var e, i = t.state, n = t.name, s = t.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets, a = ft(i.placement), l = Tt(a), c = [it, et].indexOf(a) >= 0 ? "height" : "width"; if (o && r) { var d = function (t, e) { return Dt("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, { placement: e.placement })) : t) ? t : xt(t, nt)) }(s.padding, i), h = gt(o), u = "y" === l ? J : it, f = "y" === l ? tt : et, p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c], g = r[l] - i.rects.reference[l], m = Et(o), _ = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0, b = p / 2 - g / 2, v = d[u], y = _ - h[c] - d[f], w = _ / 2 - h[c] / 2 + b, E = kt(v, w, y), T = l; i.modifiersData[n] = ((e = {})[T] = E, e.centerOffset = E - w, e) } }, effect: function (t) { var e = t.state, i = t.options.element, n = void 0 === i ? "[data-popper-arrow]" : i; null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && mt(e.elements.popper, n) && (e.elements.arrow = n) }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] }, St = { top: "auto", right: "auto", bottom: "auto", left: "auto" }; function Nt(t) { var e, i = t.popper, n = t.popperRect, s = t.placement, o = t.offsets, r = t.position, a = t.gpuAcceleration, l = t.adaptive, c = t.roundOffsets, d = !0 === c ? function (t) { var e = t.x, i = t.y, n = window.devicePixelRatio || 1; return { x: Ot(Ot(e * n) / n) || 0, y: Ot(Ot(i * n) / n) || 0 } }(o) : "function" == typeof c ? c(o) : o, h = d.x, u = void 0 === h ? 0 : h, f = d.y, p = void 0 === f ? 0 : f, g = o.hasOwnProperty("x"), m = o.hasOwnProperty("y"), _ = it, b = J, v = window; if (l) { var y = Et(i), w = "clientHeight", E = "clientWidth"; y === lt(i) && "static" !== _t(y = vt(i)).position && (w = "scrollHeight", E = "scrollWidth"), y = y, s === J && (b = tt, p -= y[w] - n.height, p *= a ? 1 : -1), s === it && (_ = et, u -= y[E] - n.width, u *= a ? 1 : -1) } var T, A = Object.assign({ position: r }, l && St); return a ? Object.assign({}, A, ((T = {})[b] = m ? "0" : "", T[_] = g ? "0" : "", T.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + p + "px)" : "translate3d(" + u + "px, " + p + "px, 0)", T)) : Object.assign({}, A, ((e = {})[b] = m ? p + "px" : "", e[_] = g ? u + "px" : "", e.transform = "", e)) } var jt = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (t) { var e = t.state, i = t.options, n = i.gpuAcceleration, s = void 0 === n || n, o = i.adaptive, r = void 0 === o || o, a = i.roundOffsets, l = void 0 === a || a, c = { placement: ft(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: s }; null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, Nt(Object.assign({}, c, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: r, roundOffsets: l })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Nt(Object.assign({}, c, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement }) }, data: {} }, Pt = { passive: !0 }, It = { name: "eventListeners", enabled: !0, phase: "write", fn: function () { }, effect: function (t) { var e = t.state, i = t.instance, n = t.options, s = n.scroll, o = void 0 === s || s, r = n.resize, a = void 0 === r || r, l = lt(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper); return o && c.forEach((function (t) { t.addEventListener("scroll", i.update, Pt) })), a && l.addEventListener("resize", i.update, Pt), function () { o && c.forEach((function (t) { t.removeEventListener("scroll", i.update, Pt) })), a && l.removeEventListener("resize", i.update, Pt) } }, data: {} }, Mt = { left: "right", right: "left", bottom: "top", top: "bottom" }; function Ht(t) { return t.replace(/left|right|bottom|top/g, (function (t) { return Mt[t] })) } var Rt = { start: "end", end: "start" }; function Bt(t) { return t.replace(/start|end/g, (function (t) { return Rt[t] })) } function Wt(t) { var e = lt(t); return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset } } function zt(t) { return pt(vt(t)).left + Wt(t).scrollLeft } function Ut(t) { var e = _t(t), i = e.overflow, n = e.overflowX, s = e.overflowY; return /auto|scroll|overlay|hidden/.test(i + s + n) } function $t(t, e) { var i; void 0 === e && (e = []); var n = function t(e) { return ["html", "body", "#document"].indexOf(at(e)) >= 0 ? e.ownerDocument.body : dt(e) && Ut(e) ? e : t(yt(e)) }(t), s = n === (null == (i = t.ownerDocument) ? void 0 : i.body), o = lt(n), r = s ? [o].concat(o.visualViewport || [], Ut(n) ? n : []) : n, a = e.concat(r); return s ? a : a.concat($t(yt(r))) } function Ft(t) { return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height }) } function Kt(t, e) { return "viewport" === e ? Ft(function (t) { var e = lt(t), i = vt(t), n = e.visualViewport, s = i.clientWidth, o = i.clientHeight, r = 0, a = 0; return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), { width: s, height: o, x: r + zt(t), y: a } }(t)) : dt(e) ? function (t) { var e = pt(t); return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e }(e) : Ft(function (t) { var e, i = vt(t), n = Wt(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, o = At(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = At(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -n.scrollLeft + zt(t), l = -n.scrollTop; return "rtl" === _t(s || i).direction && (a += At(i.clientWidth, s ? s.clientWidth : 0) - o), { width: o, height: r, x: a, y: l } }(vt(t))) } function Yt(t) { return t.split("-")[1] } function qt(t) { var e, i = t.reference, n = t.element, s = t.placement, o = s ? ft(s) : null, r = s ? Yt(s) : null, a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2; switch (o) { case J: e = { x: a, y: i.y - n.height }; break; case tt: e = { x: a, y: i.y + i.height }; break; case et: e = { x: i.x + i.width, y: l }; break; case it: e = { x: i.x - n.width, y: l }; break; default: e = { x: i.x, y: i.y } }var c = o ? Tt(o) : null; if (null != c) { var d = "y" === c ? "height" : "width"; switch (r) { case "start": e[c] = e[c] - (i[d] / 2 - n[d] / 2); break; case "end": e[c] = e[c] + (i[d] / 2 - n[d] / 2) } } return e } function Vt(t, e) { void 0 === e && (e = {}); var i = e, n = i.placement, s = void 0 === n ? t.placement : n, o = i.boundary, r = void 0 === o ? "clippingParents" : o, a = i.rootBoundary, l = void 0 === a ? "viewport" : a, c = i.elementContext, d = void 0 === c ? "popper" : c, h = i.altBoundary, u = void 0 !== h && h, f = i.padding, p = void 0 === f ? 0 : f, g = Dt("number" != typeof p ? p : xt(p, nt)), m = "popper" === d ? "reference" : "popper", _ = t.elements.reference, b = t.rects.popper, v = t.elements[u ? m : d], y = function (t, e, i) { var n = "clippingParents" === e ? function (t) { var e = $t(yt(t)), i = ["absolute", "fixed"].indexOf(_t(t).position) >= 0 && dt(t) ? Et(t) : t; return ct(i) ? e.filter((function (t) { return ct(t) && mt(t, i) && "body" !== at(t) })) : [] }(t) : [].concat(e), s = [].concat(n, [i]), o = s[0], r = s.reduce((function (e, i) { var n = Kt(t, i); return e.top = At(n.top, e.top), e.right = Lt(n.right, e.right), e.bottom = Lt(n.bottom, e.bottom), e.left = At(n.left, e.left), e }), Kt(t, o)); return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r }(ct(v) ? v : v.contextElement || vt(t.elements.popper), r, l), w = pt(_), E = qt({ reference: w, element: b, strategy: "absolute", placement: s }), T = Ft(Object.assign({}, b, E)), A = "popper" === d ? T : w, L = { top: y.top - A.top + g.top, bottom: A.bottom - y.bottom + g.bottom, left: y.left - A.left + g.left, right: A.right - y.right + g.right }, O = t.modifiersData.offset; if ("popper" === d && O) { var k = O[s]; Object.keys(L).forEach((function (t) { var e = [et, tt].indexOf(t) >= 0 ? 1 : -1, i = [J, tt].indexOf(t) >= 0 ? "y" : "x"; L[t] += k[i] * e })) } return L } function Xt(t, e) { void 0 === e && (e = {}); var i = e, n = i.placement, s = i.boundary, o = i.rootBoundary, r = i.padding, a = i.flipVariations, l = i.allowedAutoPlacements, c = void 0 === l ? ot : l, d = Yt(n), h = d ? a ? st : st.filter((function (t) { return Yt(t) === d })) : nt, u = h.filter((function (t) { return c.indexOf(t) >= 0 })); 0 === u.length && (u = h); var f = u.reduce((function (e, i) { return e[i] = Vt(t, { placement: i, boundary: s, rootBoundary: o, padding: r })[ft(i)], e }), {}); return Object.keys(f).sort((function (t, e) { return f[t] - f[e] })) } var Qt = { name: "flip", enabled: !0, phase: "main", fn: function (t) { var e = t.state, i = t.options, n = t.name; if (!e.modifiersData[n]._skip) { for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, d = i.boundary, h = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, g = i.allowedAutoPlacements, m = e.options.placement, _ = ft(m), b = l || (_ !== m && p ? function (t) { if ("auto" === ft(t)) return []; var e = Ht(t); return [Bt(t), e, Bt(e)] }(m) : [Ht(m)]), v = [m].concat(b).reduce((function (t, i) { return t.concat("auto" === ft(i) ? Xt(e, { placement: i, boundary: d, rootBoundary: h, padding: c, flipVariations: p, allowedAutoPlacements: g }) : i) }), []), y = e.rects.reference, w = e.rects.popper, E = new Map, T = !0, A = v[0], L = 0; L < v.length; L++) { var O = v[L], k = ft(O), D = "start" === Yt(O), x = [J, tt].indexOf(k) >= 0, C = x ? "width" : "height", S = Vt(e, { placement: O, boundary: d, rootBoundary: h, altBoundary: u, padding: c }), N = x ? D ? et : it : D ? tt : J; y[C] > w[C] && (N = Ht(N)); var j = Ht(N), P = []; if (o && P.push(S[k] <= 0), a && P.push(S[N] <= 0, S[j] <= 0), P.every((function (t) { return t }))) { A = O, T = !1; break } E.set(O, P) } if (T) for (var I = function (t) { var e = v.find((function (e) { var i = E.get(e); if (i) return i.slice(0, t).every((function (t) { return t })) })); if (e) return A = e, "break" }, M = p ? 3 : 1; M > 0 && "break" !== I(M); M--); e.placement !== A && (e.modifiersData[n]._skip = !0, e.placement = A, e.reset = !0) } }, requiresIfExists: ["offset"], data: { _skip: !1 } }; function Gt(t, e, i) { return void 0 === i && (i = { x: 0, y: 0 }), { top: t.top - e.height - i.y, right: t.right - e.width + i.x, bottom: t.bottom - e.height + i.y, left: t.left - e.width - i.x } } function Zt(t) { return [J, et, tt, it].some((function (e) { return t[e] >= 0 })) } var Jt = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (t) { var e = t.state, i = t.name, n = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow, r = Vt(e, { elementContext: "reference" }), a = Vt(e, { altBoundary: !0 }), l = Gt(r, n), c = Gt(a, s, o), d = Zt(l), h = Zt(c); e.modifiersData[i] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: h }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": h }) } }, te = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (t) { var e = t.state, i = t.options, n = t.name, s = i.offset, o = void 0 === s ? [0, 0] : s, r = ot.reduce((function (t, i) { return t[i] = function (t, e, i) { var n = ft(t), s = [it, J].indexOf(n) >= 0 ? -1 : 1, o = "function" == typeof i ? i(Object.assign({}, e, { placement: t })) : i, r = o[0], a = o[1]; return r = r || 0, a = (a || 0) * s, [it, et].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a } }(i, e.rects, o), t }), {}), a = r[e.placement], l = a.x, c = a.y; null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r } }, ee = { name: "popperOffsets", enabled: !0, phase: "read", fn: function (t) { var e = t.state, i = t.name; e.modifiersData[i] = qt({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement }) }, data: {} }, ie = { name: "preventOverflow", enabled: !0, phase: "main", fn: function (t) { var e = t.state, i = t.options, n = t.name, s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 !== r && r, l = i.boundary, c = i.rootBoundary, d = i.altBoundary, h = i.padding, u = i.tether, f = void 0 === u || u, p = i.tetherOffset, g = void 0 === p ? 0 : p, m = Vt(e, { boundary: l, rootBoundary: c, padding: h, altBoundary: d }), _ = ft(e.placement), b = Yt(e.placement), v = !b, y = Tt(_), w = "x" === y ? "y" : "x", E = e.modifiersData.popperOffsets, T = e.rects.reference, A = e.rects.popper, L = "function" == typeof g ? g(Object.assign({}, e.rects, { placement: e.placement })) : g, O = { x: 0, y: 0 }; if (E) { if (o || a) { var k = "y" === y ? J : it, D = "y" === y ? tt : et, x = "y" === y ? "height" : "width", C = E[y], S = E[y] + m[k], N = E[y] - m[D], j = f ? -A[x] / 2 : 0, P = "start" === b ? T[x] : A[x], I = "start" === b ? -A[x] : -T[x], M = e.elements.arrow, H = f && M ? gt(M) : { width: 0, height: 0 }, R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, B = R[k], W = R[D], z = kt(0, T[x], H[x]), U = v ? T[x] / 2 - j - z - B - L : P - z - B - L, $ = v ? -T[x] / 2 + j + z + W + L : I + z + W + L, F = e.elements.arrow && Et(e.elements.arrow), K = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0, Y = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0, q = E[y] + U - Y - K, V = E[y] + $ - Y; if (o) { var X = kt(f ? Lt(S, q) : S, C, f ? At(N, V) : N); E[y] = X, O[y] = X - C } if (a) { var Q = "x" === y ? J : it, G = "x" === y ? tt : et, Z = E[w], nt = Z + m[Q], st = Z - m[G], ot = kt(f ? Lt(nt, q) : nt, Z, f ? At(st, V) : st); E[w] = ot, O[w] = ot - Z } } e.modifiersData[n] = O } }, requiresIfExists: ["offset"] }; function ne(t, e, i) { void 0 === i && (i = !1); var n, s, o = vt(e), r = pt(t), a = dt(e), l = { scrollLeft: 0, scrollTop: 0 }, c = { x: 0, y: 0 }; return (a || !a && !i) && (("body" !== at(e) || Ut(o)) && (l = (n = e) !== lt(n) && dt(n) ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop } : Wt(n)), dt(e) ? ((c = pt(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = zt(o))), { x: r.left + l.scrollLeft - c.x, y: r.top + l.scrollTop - c.y, width: r.width, height: r.height } } var se = { placement: "bottom", modifiers: [], strategy: "absolute" }; function oe() { for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)e[i] = arguments[i]; return !e.some((function (t) { return !(t && "function" == typeof t.getBoundingClientRect) })) } function re(t) { void 0 === t && (t = {}); var e = t, i = e.defaultModifiers, n = void 0 === i ? [] : i, s = e.defaultOptions, o = void 0 === s ? se : s; return function (t, e, i) { void 0 === i && (i = o); var s, r, a = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, se, o), modifiersData: {}, elements: { reference: t, popper: e }, attributes: {}, styles: {} }, l = [], c = !1, d = { state: a, setOptions: function (i) { h(), a.options = Object.assign({}, o, a.options, i), a.scrollParents = { reference: ct(t) ? $t(t) : t.contextElement ? $t(t.contextElement) : [], popper: $t(e) }; var s, r, c = function (t) { var e = function (t) { var e = new Map, i = new Set, n = []; return t.forEach((function (t) { e.set(t.name, t) })), t.forEach((function (t) { i.has(t.name) || function t(s) { i.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach((function (n) { if (!i.has(n)) { var s = e.get(n); s && t(s) } })), n.push(s) }(t) })), n }(t); return rt.reduce((function (t, i) { return t.concat(e.filter((function (t) { return t.phase === i }))) }), []) }((s = [].concat(n, a.options.modifiers), r = s.reduce((function (t, e) { var i = t[e.name]; return t[e.name] = i ? Object.assign({}, i, e, { options: Object.assign({}, i.options, e.options), data: Object.assign({}, i.data, e.data) }) : e, t }), {}), Object.keys(r).map((function (t) { return r[t] })))); return a.orderedModifiers = c.filter((function (t) { return t.enabled })), a.orderedModifiers.forEach((function (t) { var e = t.name, i = t.options, n = void 0 === i ? {} : i, s = t.effect; if ("function" == typeof s) { var o = s({ state: a, name: e, instance: d, options: n }); l.push(o || function () { }) } })), d.update() }, forceUpdate: function () { if (!c) { var t = a.elements, e = t.reference, i = t.popper; if (oe(e, i)) { a.rects = { reference: ne(e, Et(i), "fixed" === a.options.strategy), popper: gt(i) }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function (t) { return a.modifiersData[t.name] = Object.assign({}, t.data) })); for (var n = 0; n < a.orderedModifiers.length; n++)if (!0 !== a.reset) { var s = a.orderedModifiers[n], o = s.fn, r = s.options, l = void 0 === r ? {} : r, h = s.name; "function" == typeof o && (a = o({ state: a, options: l, name: h, instance: d }) || a) } else a.reset = !1, n = -1 } } }, update: (s = function () { return new Promise((function (t) { d.forceUpdate(), t(a) })) }, function () { return r || (r = new Promise((function (t) { Promise.resolve().then((function () { r = void 0, t(s()) })) }))), r }), destroy: function () { h(), c = !0 } }; if (!oe(t, e)) return d; function h() { l.forEach((function (t) { return t() })), l = [] } return d.setOptions(i).then((function (t) { !c && i.onFirstUpdate && i.onFirstUpdate(t) })), d } } var ae = re(), le = re({ defaultModifiers: [It, ee, jt, ut] }), ce = re({ defaultModifiers: [It, ee, jt, ut, te, Qt, ie, Ct, Jt] }), de = Object.freeze({ __proto__: null, popperGenerator: re, detectOverflow: Vt, createPopperBase: ae, createPopper: ce, createPopperLite: le, top: J, bottom: tt, right: et, left: it, auto: "auto", basePlacements: nt, start: "start", end: "end", clippingParents: "clippingParents", viewport: "viewport", popper: "popper", reference: "reference", variationPlacements: st, placements: ot, beforeRead: "beforeRead", read: "read", afterRead: "afterRead", beforeMain: "beforeMain", main: "main", afterMain: "afterMain", beforeWrite: "beforeWrite", write: "write", afterWrite: "afterWrite", modifierPhases: rt, applyStyles: ut, arrow: Ct, computeStyles: jt, eventListeners: It, flip: Qt, hide: Jt, offset: te, popperOffsets: ee, preventOverflow: ie }); const he = new RegExp("ArrowUp|ArrowDown|Escape"), ue = g() ? "top-end" : "top-start", fe = g() ? "top-start" : "top-end", pe = g() ? "bottom-end" : "bottom-start", ge = g() ? "bottom-start" : "bottom-end", me = g() ? "left-start" : "right-start", _e = g() ? "right-start" : "left-start", be = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: !0 }, ve = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" }; class ye extends M { constructor(t, e) { super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } static get Default() { return be } static get DefaultType() { return ve } static get DATA_KEY() { return "bs.dropdown" } toggle() { d(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show()) } show() { if (d(this._element) || this._menu.classList.contains("show")) return; const t = ye.getParentFromElement(this._element), e = { relatedTarget: this._element }; if (!I.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) { if (this._inNavbar) z.setDataAttribute(this._menu, "popper", "none"); else { if (void 0 === de) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)"); let e = this._element; "parent" === this._config.reference ? e = t : r(this._config.reference) ? (e = this._config.reference, void 0 !== this._config.reference.jquery && (e = this._config.reference[0])) : "object" == typeof this._config.reference && (e = this._config.reference); const i = this._getPopperConfig(), n = i.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled); this._popper = ce(e, this._menu, i), n && z.setDataAttribute(this._menu, "popper", "static") } "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => I.on(t, "mouseover", u)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), I.trigger(this._element, "shown.bs.dropdown", e) } } hide() { if (d(this._element) || !this._menu.classList.contains("show")) return; const t = { relatedTarget: this._element }; this._completeHide(t) } dispose() { this._menu = null, this._popper && (this._popper.destroy(), this._popper = null), super.dispose() } update() { this._inNavbar = this._detectNavbar(), this._popper && this._popper.update() } _addEventListeners() { I.on(this._element, "click.bs.dropdown", t => { t.preventDefault(), this.toggle() }) } _completeHide(t) { I.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => I.off(t, "mouseover", u)), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), z.removeDataAttribute(this._menu, "popper"), I.trigger(this._element, "hidden.bs.dropdown", t)) } _getConfig(t) { if (t = { ...this.constructor.Default, ...z.getDataAttributes(this._element), ...t }, l("dropdown", t, this.constructor.DefaultType), "object" == typeof t.reference && !r(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'); return t } _getMenuElement() { return U.next(this._element, ".dropdown-menu")[0] } _getPlacement() { const t = this._element.parentNode; if (t.classList.contains("dropend")) return me; if (t.classList.contains("dropstart")) return _e; const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim(); return t.classList.contains("dropup") ? e ? fe : ue : e ? ge : pe } _detectNavbar() { return null !== this._element.closest(".navbar") } _getOffset() { const { offset: t } = this._config; return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t } _getPopperConfig() { const t = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] }; return "static" === this._config.display && (t.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...t, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig } } _selectMenuItem(t) { const e = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(c); if (!e.length) return; let i = e.indexOf(t.target); "ArrowUp" === t.key && i > 0 && i--, "ArrowDown" === t.key && i < e.length - 1 && i++, i = -1 === i ? 0 : i, e[i].focus() } static dropdownInterface(t, e) { let i = v.get(t, "bs.dropdown"); if (i || (i = new ye(t, "object" == typeof e ? e : null)), "string" == typeof e) { if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`); i[e]() } } static jQueryInterface(t) { return this.each((function () { ye.dropdownInterface(this, t) })) } static clearMenus(t) { if (t) { if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return; if (/input|select|option|textarea|form/i.test(t.target.tagName)) return } const e = U.find('[data-bs-toggle="dropdown"]'); for (let i = 0, n = e.length; i < n; i++) { const n = v.get(e[i], "bs.dropdown"); if (!n || !1 === n._config.autoClose) continue; if (!n._element.classList.contains("show")) continue; const s = { relatedTarget: n._element }; if (t) { const e = t.composedPath(), i = e.includes(n._menu); if (e.includes(n._element) || "inside" === n._config.autoClose && !i || "outside" === n._config.autoClose && i) continue; if ("keyup" === t.type && "Tab" === t.key && n._menu.contains(t.target)) continue; "click" === t.type && (s.clickEvent = t) } n._completeHide(s) } } static getParentFromElement(t) { return n(t) || t.parentNode } static dataApiKeydownHandler(t) { if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !he.test(t.key)) return; const e = this.classList.contains("show"); if (!e && "Escape" === t.key) return; if (t.preventDefault(), t.stopPropagation(), d(this)) return; const i = () => this.matches('[data-bs-toggle="dropdown"]') ? this : U.prev(this, '[data-bs-toggle="dropdown"]')[0]; if ("Escape" === t.key) return i().focus(), void ye.clearMenus(); e || "ArrowUp" !== t.key && "ArrowDown" !== t.key ? e && "Space" !== t.key ? ye.getInstance(i())._selectMenuItem(t) : ye.clearMenus() : i().click() } } I.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', ye.dataApiKeydownHandler), I.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", ye.dataApiKeydownHandler), I.on(document, "click.bs.dropdown.data-api", ye.clearMenus), I.on(document, "keyup.bs.dropdown.data-api", ye.clearMenus), I.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function (t) { t.preventDefault(), ye.dropdownInterface(this) })), m("dropdown", ye); const we = () => { const t = document.documentElement.clientWidth; return Math.abs(window.innerWidth - t) }, Ee = (t = we()) => { Te(), Ae("body", "paddingRight", e => e + t), Ae(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", e => e + t), Ae(".sticky-top", "marginRight", e => e - t) }, Te = () => { const t = document.body.style.overflow; t && z.setDataAttribute(document.body, "overflow", t), document.body.style.overflow = "hidden" }, Ae = (t, e, i) => { const n = we(); U.find(t).forEach(t => { if (t !== document.body && window.innerWidth > t.clientWidth + n) return; const s = t.style[e], o = window.getComputedStyle(t)[e]; z.setDataAttribute(t, e, s), t.style[e] = i(Number.parseFloat(o)) + "px" }) }, Le = () => { Oe("body", "overflow"), Oe("body", "paddingRight"), Oe(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), Oe(".sticky-top", "marginRight") }, Oe = (t, e) => { U.find(t).forEach(t => { const i = z.getDataAttribute(t, e); void 0 === i ? t.style.removeProperty(e) : (z.removeDataAttribute(t, e), t.style[e] = i) }) }, ke = { isVisible: !0, isAnimated: !1, rootElement: document.body, clickCallback: null }, De = { isVisible: "boolean", isAnimated: "boolean", rootElement: "element", clickCallback: "(function|null)" }; class xe { constructor(t) { this._config = this._getConfig(t), this._isAppended = !1, this._element = null } show(t) { this._config.isVisible ? (this._append(), this._config.isAnimated && f(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => { _(t) })) : _(t) } hide(t) { this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => { this.dispose(), _(t) })) : _(t) } _getElement() { if (!this._element) { const t = document.createElement("div"); t.className = "modal-backdrop", this._config.isAnimated && t.classList.add("fade"), this._element = t } return this._element } _getConfig(t) { return t = { ...ke, ..."object" == typeof t ? t : {} }, l("backdrop", t, De), t } _append() { this._isAppended || (this._config.rootElement.appendChild(this._getElement()), I.on(this._getElement(), "mousedown.bs.backdrop", () => { _(this._config.clickCallback) }), this._isAppended = !0) } dispose() { this._isAppended && (I.off(this._element, "mousedown.bs.backdrop"), this._getElement().parentNode.removeChild(this._element), this._isAppended = !1) } _emulateAnimation(t) { if (!this._config.isAnimated) return void _(t); const e = s(this._getElement()); I.one(this._getElement(), "transitionend", () => _(t)), a(this._getElement(), e) } } const Ce = { backdrop: !0, keyboard: !0, focus: !0 }, Se = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" }; class Ne extends M { constructor(t, e) { super(t), this._config = this._getConfig(e), this._dialog = U.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1 } static get Default() { return Ce } static get DATA_KEY() { return "bs.modal" } toggle(t) { return this._isShown ? this.hide() : this.show(t) } show(t) { if (this._isShown || this._isTransitioning) return; this._isAnimated() && (this._isTransitioning = !0); const e = I.trigger(this._element, "show.bs.modal", { relatedTarget: t }); this._isShown || e.defaultPrevented || (this._isShown = !0, Ee(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), I.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', t => this.hide(t)), I.on(this._dialog, "mousedown.dismiss.bs.modal", () => { I.one(this._element, "mouseup.dismiss.bs.modal", t => { t.target === this._element && (this._ignoreBackdropClick = !0) }) }), this._showBackdrop(() => this._showElement(t))) } hide(t) { if (t && t.preventDefault(), !this._isShown || this._isTransitioning) return; if (I.trigger(this._element, "hide.bs.modal").defaultPrevented) return; this._isShown = !1; const e = this._isAnimated(); if (e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), I.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), I.off(this._element, "click.dismiss.bs.modal"), I.off(this._dialog, "mousedown.dismiss.bs.modal"), e) { const t = s(this._element); I.one(this._element, "transitionend", t => this._hideModal(t)), a(this._element, t) } else this._hideModal() } dispose() { [window, this._dialog].forEach(t => I.off(t, ".bs.modal")), super.dispose(), I.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop.dispose(), this._backdrop = null, this._isShown = null, this._ignoreBackdropClick = null, this._isTransitioning = null } handleUpdate() { this._adjustDialog() } _initializeBackDrop() { return new xe({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() }) } _getConfig(t) { return t = { ...Ce, ...z.getDataAttributes(this._element), ...t }, l("modal", t, Se), t } _showElement(t) { const e = this._isAnimated(), i = U.findOne(".modal-body", this._dialog); this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && f(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(); const n = () => { this._config.focus && this._element.focus(), this._isTransitioning = !1, I.trigger(this._element, "shown.bs.modal", { relatedTarget: t }) }; if (e) { const t = s(this._dialog); I.one(this._dialog, "transitionend", n), a(this._dialog, t) } else n() } _enforceFocus() { I.off(document, "focusin.bs.modal"), I.on(document, "focusin.bs.modal", t => { document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus() }) } _setEscapeEvent() { this._isShown ? I.on(this._element, "keydown.dismiss.bs.modal", t => { this._config.keyboard && "Escape" === t.key ? (t.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition() }) : I.off(this._element, "keydown.dismiss.bs.modal") } _setResizeEvent() { this._isShown ? I.on(window, "resize.bs.modal", () => this._adjustDialog()) : I.off(window, "resize.bs.modal") } _hideModal() { this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => { document.body.classList.remove("modal-open"), this._resetAdjustments(), Le(), I.trigger(this._element, "hidden.bs.modal") }) } _showBackdrop(t) { I.on(this._element, "click.dismiss.bs.modal", t => { this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition()) }), this._backdrop.show(t) } _isAnimated() { return this._element.classList.contains("fade") } _triggerBackdropTransition() { if (I.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return; const t = this._element.scrollHeight > document.documentElement.clientHeight; t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static"); const e = s(this._dialog); I.off(this._element, "transitionend"), I.one(this._element, "transitionend", () => { this._element.classList.remove("modal-static"), t || (I.one(this._element, "transitionend", () => { this._element.style.overflowY = "" }), a(this._element, e)) }), a(this._element, e), this._element.focus() } _adjustDialog() { const t = this._element.scrollHeight > document.documentElement.clientHeight, e = we(), i = e > 0; (!i && t && !g() || i && !t && g()) && (this._element.style.paddingLeft = e + "px"), (i && !t && !g() || !i && t && g()) && (this._element.style.paddingRight = e + "px") } _resetAdjustments() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" } static jQueryInterface(t, e) { return this.each((function () { const i = Ne.getInstance(this) || new Ne(this, "object" == typeof t ? t : {}); if ("string" == typeof t) { if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`); i[t](e) } })) } } I.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) { const e = n(this);["A", "AREA"].includes(this.tagName) && t.preventDefault(), I.one(e, "show.bs.modal", t => { t.defaultPrevented || I.one(e, "hidden.bs.modal", () => { c(this) && this.focus() }) }), (Ne.getInstance(e) || new Ne(e)).toggle(this) })), m("modal", Ne); const je = { backdrop: !0, keyboard: !0, scroll: !1 }, Pe = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" }; class Ie extends M { constructor(t, e) { super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._addEventListeners() } static get Default() { return je } static get DATA_KEY() { return "bs.offcanvas" } toggle(t) { return this._isShown ? this.hide() : this.show(t) } show(t) { if (this._isShown) return; if (I.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t }).defaultPrevented) return; this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (Ee(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"); const e = s(this._element); I.one(this._element, "transitionend", () => { I.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t }) }), a(this._element, e) } hide() { if (!this._isShown) return; if (I.trigger(this._element, "hide.bs.offcanvas").defaultPrevented) return; I.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(); const t = s(this._element); I.one(this._element, "transitionend", () => { this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || Le(), I.trigger(this._element, "hidden.bs.offcanvas") }), a(this._element, t) } dispose() { this._backdrop.dispose(), super.dispose(), I.off(document, "focusin.bs.offcanvas"), this._config = null, this._backdrop = null } _getConfig(t) { return t = { ...je, ...z.getDataAttributes(this._element), ..."object" == typeof t ? t : {} }, l("offcanvas", t, Pe), t } _initializeBackDrop() { return new xe({ isVisible: this._config.backdrop, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: () => this.hide() }) } _enforceFocusOnElement(t) { I.off(document, "focusin.bs.offcanvas"), I.on(document, "focusin.bs.offcanvas", e => { document === e.target || t === e.target || t.contains(e.target) || t.focus() }), t.focus() } _addEventListeners() { I.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()), I.on(this._element, "keydown.dismiss.bs.offcanvas", t => { this._config.keyboard && "Escape" === t.key && this.hide() }) } static jQueryInterface(t) { return this.each((function () { const e = v.get(this, "bs.offcanvas") || new Ie(this, "object" == typeof t ? t : {}); if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`); e[t](this) } })) } } I.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function (t) { const e = n(this); if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)) return; I.one(e, "hidden.bs.offcanvas", () => { c(this) && this.focus() }); const i = U.findOne(".offcanvas.show"); i && i !== e && Ie.getInstance(i).hide(), (v.get(e, "bs.offcanvas") || new Ie(e)).toggle(this) })), I.on(window, "load.bs.offcanvas.data-api", () => { U.find(".offcanvas.show").forEach(t => (v.get(t, "bs.offcanvas") || new Ie(t)).show()) }), m("offcanvas", Ie); const Me = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), He = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i, Re = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Be = (t, e) => { const i = t.nodeName.toLowerCase(); if (e.includes(i)) return !Me.has(i) || Boolean(He.test(t.nodeValue) || Re.test(t.nodeValue)); const n = e.filter(t => t instanceof RegExp); for (let t = 0, e = n.length; t < e; t++)if (n[t].test(i)) return !0; return !1 }; function We(t, e, i) { if (!t.length) return t; if (i && "function" == typeof i) return i(t); const n = (new window.DOMParser).parseFromString(t, "text/html"), s = Object.keys(e), o = [].concat(...n.body.querySelectorAll("*")); for (let t = 0, i = o.length; t < i; t++) { const i = o[t], n = i.nodeName.toLowerCase(); if (!s.includes(n)) { i.parentNode.removeChild(i); continue } const r = [].concat(...i.attributes), a = [].concat(e["*"] || [], e[n] || []); r.forEach(t => { Be(t, a) || i.removeAttribute(t.nodeName) }) } return n.body.innerHTML } const ze = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), Ue = new Set(["sanitize", "allowList", "sanitizeFn"]), $e = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(array|string|function)", container: "(string|element|boolean)", fallbackPlacements: "array", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", allowList: "object", popperConfig: "(null|object|function)" }, Fe = { AUTO: "auto", TOP: "top", RIGHT: g() ? "left" : "right", BOTTOM: "bottom", LEFT: g() ? "right" : "left" }, Ke = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: [0, 0], container: !1, fallbackPlacements: ["top", "right", "bottom", "left"], boundary: "clippingParents", customClass: "", sanitize: !0, sanitizeFn: null, allowList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null }, Ye = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" }; class qe extends M { constructor(t, e) { if (void 0 === de) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)"); super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.config = this._getConfig(e), this.tip = null, this._setListeners() } static get Default() { return Ke } static get NAME() { return "tooltip" } static get DATA_KEY() { return "bs.tooltip" } static get Event() { return Ye } static get EVENT_KEY() { return ".bs.tooltip" } static get DefaultType() { return $e } enable() { this._isEnabled = !0 } disable() { this._isEnabled = !1 } toggleEnabled() { this._isEnabled = !this._isEnabled } toggle(t) { if (this._isEnabled) if (t) { const e = this._initializeOnDelegatedTarget(t); e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e) } else { if (this.getTipElement().classList.contains("show")) return void this._leave(null, this); this._enter(null, this) } } dispose() { clearTimeout(this._timeout), I.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, super.dispose() } show() { if ("none" === this._element.style.display) throw new Error("Please use show on visible elements"); if (!this.isWithContent() || !this._isEnabled) return; const e = I.trigger(this._element, this.constructor.Event.SHOW), i = h(this._element), n = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element); if (e.defaultPrevented || !n) return; const o = this.getTipElement(), r = t(this.constructor.NAME); o.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && o.classList.add("fade"); const l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this._element) : this.config.placement, c = this._getAttachment(l); this._addAttachmentClass(c); const d = this._getContainer(); v.set(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (d.appendChild(o), I.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = ce(this._element, o, this._getPopperConfig(c)), o.classList.add("show"); const f = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass; f && o.classList.add(...f.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => { I.on(t, "mouseover", u) }); const p = () => { const t = this._hoverState; this._hoverState = null, I.trigger(this._element, this.constructor.Event.SHOWN), "out" === t && this._leave(null, this) }; if (this.tip.classList.contains("fade")) { const t = s(this.tip); I.one(this.tip, "transitionend", p), a(this.tip, t) } else p() } hide() { if (!this._popper) return; const t = this.getTipElement(), e = () => { this._isWithActiveTrigger() || ("show" !== this._hoverState && t.parentNode && t.parentNode.removeChild(t), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), I.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null)) }; if (!I.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) { if (t.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => I.off(t, "mouseover", u)), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) { const i = s(t); I.one(t, "transitionend", e), a(t, i) } else e(); this._hoverState = "" } } update() { null !== this._popper && this._popper.update() } isWithContent() { return Boolean(this.getTitle()) } getTipElement() { if (this.tip) return this.tip; const t = document.createElement("div"); return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip } setContent() { const t = this.getTipElement(); this.setElementContent(U.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show") } setElementContent(t, e) { if (null !== t) return "object" == typeof e && r(e) ? (e.jquery && (e = e[0]), void (this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = We(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e) } getTitle() { let t = this._element.getAttribute("data-bs-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t } updateAttachment(t) { return "right" === t ? "end" : "left" === t ? "start" : t } _initializeOnDelegatedTarget(t, e) { const i = this.constructor.DATA_KEY; return (e = e || v.get(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), v.set(t.delegateTarget, i, e)), e } _getOffset() { const { offset: t } = this.config; return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t } _getPopperConfig(t) { const e = { placement: t, modifiers: [{ name: "flip", options: { fallbackPlacements: this.config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this.config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "onChange", enabled: !0, phase: "afterWrite", fn: t => this._handlePopperPlacementChange(t) }], onFirstUpdate: t => { t.options.placement !== t.placement && this._handlePopperPlacementChange(t) } }; return { ...e, ..."function" == typeof this.config.popperConfig ? this.config.popperConfig(e) : this.config.popperConfig } } _addAttachmentClass(t) { this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t)) } _getContainer() { return !1 === this.config.container ? document.body : r(this.config.container) ? this.config.container : U.findOne(this.config.container) } _getAttachment(t) { return Fe[t.toUpperCase()] } _setListeners() { this.config.trigger.split(" ").forEach(t => { if ("click" === t) I.on(this._element, this.constructor.Event.CLICK, this.config.selector, t => this.toggle(t)); else if ("manual" !== t) { const e = "hover" === t ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, i = "hover" === t ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT; I.on(this._element, e, this.config.selector, t => this._enter(t)), I.on(this._element, i, this.config.selector, t => this._leave(t)) } }), this._hideModalHandler = () => { this._element && this.hide() }, I.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = { ...this.config, trigger: "manual", selector: "" } : this._fixTitle() } _fixTitle() { const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute("data-bs-original-title"); (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", "")) } _enter(t, e) { e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout(() => { "show" === e._hoverState && e.show() }, e.config.delay.show) : e.show()) } _leave(t, e) { e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(() => { "out" === e._hoverState && e.hide() }, e.config.delay.hide) : e.hide()) } _isWithActiveTrigger() { for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0; return !1 } _getConfig(t) { const e = z.getDataAttributes(this._element); return Object.keys(e).forEach(t => { Ue.has(t) && delete e[t] }), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = { ...this.constructor.Default, ...e, ..."object" == typeof t && t ? t : {} }).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = We(t.template, t.allowList, t.sanitizeFn)), t } _getDelegateConfig() { const t = {}; if (this.config) for (const e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]); return t } _cleanTipClass() { const t = this.getTipElement(), e = t.getAttribute("class").match(ze); null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e)) } _handlePopperPlacementChange(t) { const { state: e } = t; e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement))) } static jQueryInterface(t) { return this.each((function () { let e = v.get(this, "bs.tooltip"); const i = "object" == typeof t && t; if ((e || !/dispose|hide/.test(t)) && (e || (e = new qe(this, i)), "string" == typeof t)) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } m("tooltip", qe); const Ve = new RegExp("(^|\\s)bs-popover\\S+", "g"), Xe = { ...qe.Default, placement: "right", offset: [0, 8], trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }, Qe = { ...qe.DefaultType, content: "(string|element|function)" }, Ge = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" }; class Ze extends qe { static get Default() { return Xe } static get NAME() { return "popover" } static get DATA_KEY() { return "bs.popover" } static get Event() { return Ge } static get EVENT_KEY() { return ".bs.popover" } static get DefaultType() { return Qe } isWithContent() { return this.getTitle() || this._getContent() } setContent() { const t = this.getTipElement(); this.setElementContent(U.findOne(".popover-header", t), this.getTitle()); let e = this._getContent(); "function" == typeof e && (e = e.call(this._element)), this.setElementContent(U.findOne(".popover-body", t), e), t.classList.remove("fade", "show") } _addAttachmentClass(t) { this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t)) } _getContent() { return this._element.getAttribute("data-bs-content") || this.config.content } _cleanTipClass() { const t = this.getTipElement(), e = t.getAttribute("class").match(Ve); null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e)) } static jQueryInterface(t) { return this.each((function () { let e = v.get(this, "bs.popover"); const i = "object" == typeof t ? t : null; if ((e || !/dispose|hide/.test(t)) && (e || (e = new Ze(this, i), v.set(this, "bs.popover", e)), "string" == typeof t)) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } m("popover", Ze); const Je = { offset: 10, method: "auto", target: "" }, ti = { offset: "number", method: "string", target: "(string|element)" }; class ei extends M { constructor(t, e) { super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, I.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process() } static get Default() { return Je } static get DATA_KEY() { return "bs.scrollspy" } refresh() { const t = this._scrollElement === this._scrollElement.window ? "offset" : "position", e = "auto" === this._config.method ? t : this._config.method, n = "position" === e ? this._getScrollTop() : 0; this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), U.find(this._selector).map(t => { const s = i(t), o = s ? U.findOne(s) : null; if (o) { const t = o.getBoundingClientRect(); if (t.width || t.height) return [z[e](o).top + n, s] } return null }).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => { this._offsets.push(t[0]), this._targets.push(t[1]) }) } dispose() { super.dispose(), I.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null } _getConfig(e) { if ("string" != typeof (e = { ...Je, ...z.getDataAttributes(this._element), ..."object" == typeof e && e ? e : {} }).target && r(e.target)) { let { id: i } = e.target; i || (i = t("scrollspy"), e.target.id = i), e.target = "#" + i } return l("scrollspy", e, ti), e } _getScrollTop() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop } _getScrollHeight() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) } _getOffsetHeight() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height } _process() { const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), i = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), t >= i) { const t = this._targets[this._targets.length - 1]; this._activeTarget !== t && this._activate(t) } else { if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (let e = this._offsets.length; e--;)this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e]) } } _activate(t) { this._activeTarget = t, this._clear(); const e = this._selector.split(",").map(e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`), i = U.findOne(e.join(",")); i.classList.contains("dropdown-item") ? (U.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active"), i.classList.add("active")) : (i.classList.add("active"), U.parents(i, ".nav, .list-group").forEach(t => { U.prev(t, ".nav-link, .list-group-item").forEach(t => t.classList.add("active")), U.prev(t, ".nav-item").forEach(t => { U.children(t, ".nav-link").forEach(t => t.classList.add("active")) }) })), I.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: t }) } _clear() { U.find(this._selector).filter(t => t.classList.contains("active")).forEach(t => t.classList.remove("active")) } static jQueryInterface(t) { return this.each((function () { const e = ei.getInstance(this) || new ei(this, "object" == typeof t ? t : {}); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } I.on(window, "load.bs.scrollspy.data-api", () => { U.find('[data-bs-spy="scroll"]').forEach(t => new ei(t)) }), m("scrollspy", ei); class ii extends M { static get DATA_KEY() { return "bs.tab" } show() { if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return; let t; const e = n(this._element), i = this._element.closest(".nav, .list-group"); if (i) { const e = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active"; t = U.find(e, i), t = t[t.length - 1] } const s = t ? I.trigger(t, "hide.bs.tab", { relatedTarget: this._element }) : null; if (I.trigger(this._element, "show.bs.tab", { relatedTarget: t }).defaultPrevented || null !== s && s.defaultPrevented) return; this._activate(this._element, i); const o = () => { I.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }), I.trigger(this._element, "shown.bs.tab", { relatedTarget: t }) }; e ? this._activate(e, e.parentNode, o) : o() } _activate(t, e, i) { const n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? U.children(e, ".active") : U.find(":scope > li > .active", e))[0], o = i && n && n.classList.contains("fade"), r = () => this._transitionComplete(t, n, i); if (n && o) { const t = s(n); n.classList.remove("show"), I.one(n, "transitionend", r), a(n, t) } else r() } _transitionComplete(t, e, i) { if (e) { e.classList.remove("active"); const t = U.findOne(":scope > .dropdown-menu .active", e.parentNode); t && t.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1) } t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), f(t), t.classList.contains("fade") && t.classList.add("show"); let n = t.parentNode; if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) { const e = t.closest(".dropdown"); e && U.find(".dropdown-toggle", e).forEach(t => t.classList.add("active")), t.setAttribute("aria-expanded", !0) } i && i() } static jQueryInterface(t) { return this.each((function () { const e = v.get(this, "bs.tab") || new ii(this); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } I.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) { ["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this) || (v.get(this, "bs.tab") || new ii(this)).show() })), m("tab", ii); const ni = { animation: "boolean", autohide: "boolean", delay: "number" }, si = { animation: !0, autohide: !0, delay: 5e3 }; class oi extends M { constructor(t, e) { super(t), this._config = this._getConfig(e), this._timeout = null, this._setListeners() } static get DefaultType() { return ni } static get Default() { return si } static get DATA_KEY() { return "bs.toast" } show() { if (I.trigger(this._element, "show.bs.toast").defaultPrevented) return; this._clearTimeout(), this._config.animation && this._element.classList.add("fade"); const t = () => { this._element.classList.remove("showing"), this._element.classList.add("show"), I.trigger(this._element, "shown.bs.toast"), this._config.autohide && (this._timeout = setTimeout(() => { this.hide() }, this._config.delay)) }; if (this._element.classList.remove("hide"), f(this._element), this._element.classList.add("showing"), this._config.animation) { const e = s(this._element); I.one(this._element, "transitionend", t), a(this._element, e) } else t() } hide() { if (!this._element.classList.contains("show")) return; if (I.trigger(this._element, "hide.bs.toast").defaultPrevented) return; const t = () => { this._element.classList.add("hide"), I.trigger(this._element, "hidden.bs.toast") }; if (this._element.classList.remove("show"), this._config.animation) { const e = s(this._element); I.one(this._element, "transitionend", t), a(this._element, e) } else t() } dispose() { this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose(), this._config = null } _getConfig(t) { return t = { ...si, ...z.getDataAttributes(this._element), ..."object" == typeof t && t ? t : {} }, l("toast", t, this.constructor.DefaultType), t } _setListeners() { I.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide()) } _clearTimeout() { clearTimeout(this._timeout), this._timeout = null } static jQueryInterface(t) { return this.each((function () { let e = v.get(this, "bs.toast"); if (e || (e = new oi(this, "object" == typeof t && t)), "string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t](this) } })) } } return m("toast", oi), { Alert: H, Button: R, Carousel: X, Collapse: Z, Dropdown: ye, Modal: Ne, Offcanvas: Ie, Popover: Ze, ScrollSpy: ei, Tab: ii, Toast: oi, Tooltip: qe } }));
const basePath = "../";
let game1 = document.body?.className == "game1";


document.addEventListener("DOMContentLoaded", () => {
    load_navbar(basePath + "web/navbar.html");

    const page = document.body.className;

    switch (page) {

        case "index":
            index()
            break
        case "aboutme":
            initAbout()
            break
        case "showcase":
            showcase()
            break
        case "2fa":
            fa()
            break
        case "test9":
            test9()
            break
        case "test10":
            test10()
            break
        case "test11":
            test11()
            break
        case "test12":
            test12()
            break
        case "jstest":
            jstest()
            break
        case "login_html":
            login_html()
            break
        case "game1":
            game1 = true
            break

    }
});

function load_navbar(url, mountId = "navbar") {
    let el = document.getElementById(mountId);
    if (!el) {
        el = document.createElement("div");
        el.id = mountId;
        document.body.prepend(el);
    }

    fetch(url)
        .then(r => r.ok ? r.text() : Promise.reject(r.status))
        .then(html => {
            el.innerHTML = html;
            highlightActive();
        })
        .catch(e => console.error("Navbar 載入失敗：", e, url));
}

function highlightActive() {
    const current = location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-link, .navbar-brand, .dropdown a").forEach(a => {
        const href = a.getAttribute("href")?.split("/").pop();
        if (href === current) {
            a.classList.add("active");

            // 如果在 dropdown 裡，讓母項也亮
            const dropdown = a.closest(".dropdown");
            if (dropdown) {
                dropdown.previousElementSibling?.classList.add("active");
            }
        }
    });
}



function other() {

}
function showcase() {
    test10()
    test11()
}



function index() {

    var c = document.getElementById('canvas')
    var ctx = c.getContext("2d")
    const actions = [];


    function drawSprite(sprite, startX, startY, pixelSize, palette, record = true) {
        for (let y = 0; y < sprite.length; y++) {
            for (let x = 0; x < sprite[y].length; x++) {
                const colorIndex = sprite[y][x];
                if (colorIndex !== "0") {
                    ctx.fillStyle = palette[colorIndex];
                    ctx.fillRect(startX + x * pixelSize, startY + y * pixelSize, pixelSize, pixelSize);
                }
            }
        }

    }

    const catSprite = [
        "0110000000000110",
        "0151100000001100",
        "0015111111111100",
        "0115555555555100",
        "0155345553455100",
        "1555335553355510",
        "1555555555555510",
        "1553355555335510",
        "0115555555511100",
        "0011111111111000",
        "0000011111100000",
        "0100115555110000",
        "0155155555551000",
        "0011555555551000",
        "0000111111110000",
        "0000000000000000"
    ];

    const catPalette = {
        "1": "#b8b8c0",
        "2": "#ff9eb8",
        "3": "#303038",
        "4": "white",
        "5": "#d4d4db",
    };

    const goblinSprite = [
        "4440044444440444",
        "4114411111114114",
        "0411111111111140",
        "0041131111311400",
        "0041111111111400",
        "0004113331114000",
        "0000411111140000",
        "0000041111400000",
        "0000411111540000",
        "0004041155104000",
        "0000041115500400",
        "0000041155400000",
        "0000041441140000",
        "0000411404414000",
        "0000044000440000",
        "0000000000000000"
    ];

    const goblinPalette = {
        "1": "#7ecf5f",
        "3": "#111111",
        "4": "#4aa341",
        "5": "#8b5a2b"
    };

    const skeletonSprite = [
        "0000444444400000",
        "0004222222240000",
        "0042222222224000",
        "0422322222322400",
        "0422222322222400",
        "0422222222222400",
        "0044222222444000",
        "0000433333400000",
        "0000444444000000",
        "0000442222440000",
        "0004041111404000",
        "0000042222400000",
        "0000041441140000",
        "0000411404414000",
        "0000044000440000",
        "0000000000000000"
    ];

    const skeletonPalette = {
        "1": "#f2f2f2",
        "2": "#d6d6d6",
        "3": "black",
        "4": "#8a8a8a",
    };

    const oakSprite = [
        "0000011111100000",
        "0000122222220000",
        "0001222222221000",
        "0012223332222100",
        "0012233333322100",
        "0122233333332210",
        "0122223333222210",
        "0122222222222210",
        "0012222222222100",
        "0001222222221000",
        "0000014444100000",
        "0000014554100000",
        "0000014554100000",
        "0000014554100000",
        "0000014444100000",
        "0000000000000000"
    ];

    const oakPalette = {
        "1": "#9fe07a",
        "2": "#6fba55",
        "3": "#3f7b2a",
        "4": "#b07a49",
        "5": "#875736"
    };
    const offsetX1 = 0
    const offsetY1 = 150
    const offsetX2 = 0
    const offsetY2 = 100


    function drawGrassBase() {
        const W = ctx.canvas.width;
        const H = ctx.canvas.height;

        const grad = ctx.createLinearGradient(0, 0, 0, H);
        grad.addColorStop(0, "#6fbf4b");
        grad.addColorStop(1, "#5f7f4f");

        ctx.fillStyle = grad;
        ctx.fillRect(offsetX1, offsetY1, W, H);
    }
    function drawSky() {
        const W = ctx.canvas.width;
        const H = ctx.canvas.height;

        const grad = ctx.createLinearGradient(0, 0, 0, H);
        grad.addColorStop(0, "#a7d9ff");
        grad.addColorStop(1, "#6fbfef");

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
    }

    drawSky();
    drawGrassBase();

    drawSprite(oakSprite, offsetX2 + 400, offsetY2 + 50, 6, oakPalette);
    drawSprite(oakSprite, offsetX2 + 450, offsetY2 + 150, 6, oakPalette);
    drawSprite(oakSprite, offsetX2 + 100, offsetY2 + 20, 6, oakPalette);
    drawSprite(oakSprite, offsetX2 + 270, offsetY2 + 10, 6, oakPalette);
    drawSprite(oakSprite, offsetX2 + 10, offsetY2 + 80, 6, oakPalette);
    drawSprite(oakSprite, offsetX2 + 200, offsetY2 + 60, 6, oakPalette);

    drawSprite(catSprite, offsetX1 + 100, offsetY1 + 150, 6, catPalette);
    drawSprite(goblinSprite, offsetX1 + 300, offsetY1 + 150, 6, goblinPalette);
    drawSprite(skeletonSprite, offsetX1 + 250, offsetY1 + 50, 6, skeletonPalette);


    const x = 260, y = 225, r = 26, offsetX = 50, offsetY = 20;
    const cx = x + offsetX + offsetX1;
    const cy = y + offsetY + offsetY1;

    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(120,220,255,0.80)";
    ctx.fill();
    ctx.stroke();
    actions.push({ type: "arc", color: "rgba(120,220,255,0.80)", value: { x: cx, y: cy, r } });

    ctx.beginPath();
    ctx.arc(cx + 15, cy - 10, 4, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    actions.push({ type: "arc", color: "white", value: { x: cx + 15, y: cy - 10, r: 4 } });

    ctx.beginPath();
    ctx.arc(cx + 9, cy - 15, 3, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    actions.push({ type: "arc", color: "white", value: { x: cx + 9, y: cy - 15, r: 3 } });

    ctx.beginPath();
    ctx.arc(cx - 10, cy + 1, 5, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    actions.push({ type: "arc", color: "black", value: { x: cx - 10, y: cy + 1, r: 5 } });

    ctx.beginPath();
    ctx.arc(cx - 12, cy + 1, 3, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    actions.push({ type: "arc", color: "white", value: { x: cx - 12, y: cy + 1, r: 3 } });

    ctx.beginPath();
    ctx.arc(cx + 5, cy + 1, 5, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    actions.push({ type: "arc", color: "black", value: { x: cx + 5, y: cy + 1, r: 5 } });

    ctx.beginPath();
    ctx.arc(cx + 3, cy + 1, 3, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    actions.push({ type: "arc", color: "white", value: { x: cx + 3, y: cy + 1, r: 3 } });

    drawTitle()
    function drawTitle() {
        const text = "歡迎來到我的像素網站";
        const centerX = c.width / 2;
        const centerY = 80;

        ctx.font = "bold 20px 'Press Start 2P', Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillStyle = "rgba(0,0,0,0.4)";
        ctx.fillText(text, centerX + 3, centerY + 3);

        ctx.lineWidth = 6;
        ctx.strokeStyle = "white";
        ctx.strokeText(text, centerX, centerY);

        const grad = ctx.createLinearGradient(centerX - 100, centerY - 40, centerX + 100, centerY + 40);
        grad.addColorStop(0, "#ffe27a");
        grad.addColorStop(1, "#ff9e4f");

        ctx.fillStyle = grad;
        ctx.fillText(text, centerX, centerY);
    }

}



function initAbout() {

}

if (game1) {
    const exp_bar = document.getElementById("exp_bar");
    const exp_text = document.getElementById("exp_text");
    const hp_bar = document.getElementById("hp_bar");
    const hp_text = document.getElementById("hp_text");
    const mage_bar = document.getElementById("mage_bar");
    const mage_text = document.getElementById("mage_text");

    class Character {
        constructor(name, maxHP, maxMP) {
            this.name = name;
            this.maxHP = maxHP;
            this.currentHP = maxHP;
            this.maxMP = maxMP;
            this.currentMP = maxMP;
            this.exp = 0;
            this.maxExp = 100;
            this.lvl = 1;
            this.atk = 1;
            this.def = 1;
            this.coin = 0;
            this.tasks = [];
            this.inventory = [];
            this.equipment = { weapon: null, armor: null };
            this.img = "../img/烏一一阿一.png"

            this.train = 10;

            this.talentSlots = [];
            this.talentEffect = {
                expRate: 0,
                coinBonus: 0,
                trainBoost: 0,
                atkPercent: 0,
                defPercent: 0,
                maxHP: 0
            };
            this.statPoints = 0;
            this.totalStatPoints = 0;
            this.statBonus = { atk: 0, def: 0, hp: 0, mp: 0 };
            this.skills = [];
            this.equipSkills = [];
        }

        takeDamage(amount) {
            this.currentHP -= amount;
            if (this.currentHP < 0) this.currentHP = 0;
        }

        heal(amount) {
            const stats = calculateStats(this);
            this.currentHP += amount;
            if (this.currentHP > stats.maxHP) this.currentHP = stats.maxHP;
        }

        useMP(amount) {
            this.currentMP -= amount;
            if (this.currentMP < 0) this.currentMP = 0;
        }

        gainExp(amount) {
            let leveledUp = false;
            const stats = calculateStats(this);
            const realAmount = Math.round(amount * stats.expRate);
            this.exp += realAmount;

            while (this.exp >= this.maxExp) {
                this.exp -= this.maxExp;
                this.maxExp = Math.round(this.maxExp * 1.2);
                this.lvl += 1;
                this.currentHP = this.maxHP;
                this.currentMP = this.maxMP;
                this.maxHP += 10;
                this.maxMP += 10;
                this.atk += 1;
                this.def += 1;
                this.statPoints = (this.statPoints || 0) + 5;
                leveledUp = true;
            }

            if (leveledUp) {
                const stats = calculateStats(this);
                notify(`等級提升至 ${this.lvl}，獲得 5 屬性點可分配`, "#d1ffd1");
                this.currentHP = stats.maxHP;
                this.currentMP = stats.maxMP;
                savePlayer();

                const iframe = document.getElementById('gameFrame');
                const doc = iframe?.contentDocument || iframe?.contentWindow?.document;
                if (doc && doc.querySelector("h1")?.innerText.includes("人物加點")) {
                    parent.openStatPanel();
                }

                refreshStatPanel();
            }

            updateBars();
        }

        addItem(item) {
            if (!item || !item.name) {
                console.log(`資料庫裡沒有`, item);
                return;
            }
            let base = itemDatabase[item.name];
            if (!base) {
                const maybeSkill = item.name.replace("書", "");
                const skillData = skillDatabase[maybeSkill];
                if (skillData) {
                    base = {
                        name: item.name,
                        type: "skillBook",
                        price: skillData.price || 100,
                        skillRef: maybeSkill,
                        desc: `可學會技能：${maybeSkill}（${skillData.desc}）`
                    };
                }
            }

            if (!base) {
                notify(`資料庫裡沒有 ${item.name}`, "#ffd1d1");
                return;
            }

            if (base.type === "consumable") {
                const existing = this.inventory.find(i => i.name === item.name);
                if (existing) {
                    existing.quantity += item.quantity || 1;
                } else {
                    this.inventory.push({
                        id: Date.now() + Math.random(),
                        name: item.name,
                        quantity: item.quantity || 1,
                        type: base.type,
                        price: base.price || 10,
                        effect: base.effect || null,
                        content: base.content || null
                    });
                }
            } else if (base.type === "weapon" || base.type === "armor") {
                this.inventory.push({
                    id: Date.now() + Math.random(),
                    name: item.name,
                    quantity: 1,
                    type: base.type,
                    price: base.price || 10,
                    atk: base.atk || 0,
                    def: base.def || 0,
                    enhancement: item.enhancement || 0,
                    content: base.content || null
                });
            } else if (base.type === "skillBook") {
                const existing = this.inventory.find(i => i.name === item.name);
                if (existing) {
                    existing.quantity += item.quantity || 1;
                } else {
                    this.inventory.push({
                        id: Date.now() + Math.random(),
                        name: base.name,
                        quantity: item.quantity || 1,
                        type: "skillBook",
                        price: base.price,
                        skillRef: base.skillRef,
                        desc: base.desc
                    });
                }
            } else {
                this.inventory.push({
                    id: Date.now() + Math.random(),
                    name: item.name,
                    quantity: item.quantity || 1,
                    type: base.type || "misc",
                    price: base.price || 10,
                    content: base.content || null
                });
            }

            savePlayer();
            notify(`獲得物品：${item.name}`, "#d1ffd1");
        }

        useItem(itemName, quantity = 1) {
            const item = this.inventory.find(i => i.name === itemName);
            if (!item) return notify(`找不到 ${itemName}`, "#ffd1d1");
            if (item.quantity < quantity) return notify(`${itemName} 數量不足`, "#ffd1d1");

            let base = itemDatabase[item.name];
            if (!base && item.type === "skillBook") {
                const skillName = item.skillRef;
                const skillData = skillDatabase[skillName];
                if (skillData) {
                    base = {
                        name: item.name,
                        type: "skillBook",
                        skillRef: skillName,
                        price: skillData.price,
                        desc: skillData.desc
                    };
                }
            }

            if (!base) {
                notify(`${itemName} 不存在於資料庫`, "#ffd1d1");
                return;
            }

            if (base.type === "consumable" && base.effect) {
                if (base.effect.hp) {
                    this.heal(base.effect.hp * quantity);
                    notify(`使用 ${itemName} 回復 ${base.effect.hp * quantity} HP`, "#fff8d6");
                }
                if (base.effect.mp) {
                    this.currentMP = Math.min(this.maxMP, this.currentMP + base.effect.mp * quantity);
                    notify(`使用 ${itemName} 回復 ${base.effect.mp * quantity} MP`, "#fff8d6");
                }

                item.quantity -= quantity;
                if (item.quantity <= 0)
                    this.inventory = this.inventory.filter(i => i.name !== itemName);
            } else if (base.type === "weapon" || base.type === "armor") {
                this.equip(itemName);
            } else if (base.type === "skillBook") {
                const skillName = base.skillRef;
                const skillData = skillDatabase[skillName];
                if (!skillData) {
                    notify("這本書上的字無法辨識", "#ffd1d1");
                    return;
                }

                const alreadyLearned = this.skills.some(s => s.name === skillName);
                if (alreadyLearned) {
                    notify(`你已學會 ${skillName}，無法再次學習`, "#fff8d6");
                    return;
                }

                this.skills.push({ name: skillName, lvl: 1 });
                notify(`學會新技能：${skillName}`, "#d1ffd1");

                item.quantity -= 1;
                if (item.quantity <= 0)
                    this.inventory = this.inventory.filter(i => i.name !== itemName);
            }

            savePlayer();
            updateBars();
        }

        removeItem(name) {
            const item = this.inventory.find(i => i.name === name);
            if (!item) return;

            if (item.quantity && item.quantity > 1) {
                item.quantity--;
            } else {
                const index = this.inventory.indexOf(item);
                this.inventory.splice(index, 1);
            }

            if (this.equipment.weapon && this.equipment.weapon.name === name) {
                this.equipment.weapon = null;
            }

            if (this.equipment.armor && this.equipment.armor.name === name) {
                this.equipment.armor = null;
            }

            savePlayer();
        };

        listItems() {
            console.log("物品欄:");
            this.inventory.forEach(i => console.log(`${i.name} x${i.quantity}`));
        }

        equip(itemName) {
            const item = this.inventory.find(i => i.name === itemName);
            if (!item) return notify(`${itemName} 不存在於背包`, "#ffd1d1");

            const base = itemDatabase[item.name];
            if (!base) return notify(`${itemName} 沒有在資料庫中`, "#ffd1d1");

            if (base.type === "weapon") {
                this.equipment.weapon = { name: base.name, atk: base.atk + (item.enhancement || 0) };
                notify(`已裝備 ${base.name}`, "#d1ffd1");
            } else if (base.type === "armor") {
                this.equipment.armor = { name: base.name, def: base.def + (item.enhancement || 0) };
                notify(`已裝備 ${base.name}`, "#d1ffd1");
            }

            savePlayer();
            updateBars();
        }

        unequip(slot) {
            if (slot === "weapon" && this.equipment.weapon) {
                notify(`已卸下 ${this.equipment.weapon.name}`, "#fff8d6");
                this.equipment.weapon = null;
            } else if (slot === "armor" && this.equipment.armor) {
                notify(`已卸下 ${this.equipment.armor.name}`, "#fff8d6");
                this.equipment.armor = null;
            }
            loadInventory();
            updateBars();
        }
    }

    const player = new Character("Player", 100, 50);
    const maxSkillCount = 5
    let currentTurn = "player";

    const tasks = [
        { name: "討伐史萊姆", count: 5, rewards: { coin: 500, exp: 200, items: ["藥水","火球術"] } },
        { name: "討伐哥布林", count: 5, rewards: { coin: 1000, exp: 800, items: ["中型回血藥水", "中型魔力藥水"] } },
        { name: "討伐骷髏兵", count: 5, rewards: { coin: 2000, exp: 5000, items: ["大型回血藥水", "大型魔力藥水"] } },
        { name: "討伐野蠻人", count: 5, rewards: { coin: 5000, exp: 5000, items: ["大型回血藥水", "大型魔力藥水"] } },
    ];

    function generateEnemy() {
        const enemies = [
            { name: "史萊姆", img: "../img/史萊姆.png", maxHP: 30, currentHP: 30, atk: 5, def: 0, rewardExp: 40, rewardCoin: [50, 100], drops: ["藥水", "鐵劍", "矛", "盾牌", "冰凍術", "再生術", "灼燒術"], lvl: [1, 10] },
            { name: "哥布林", img: "../img/哥布林.png", maxHP: 400, currentHP: 60, atk: 30, def: 20, rewardExp: 200, rewardCoin: [200, 300], drops: ["斧刀", "鎖子甲", "中型回血藥水", "中型魔力藥水"], lvl: [5, 20] },
            { name: "骷髏兵", img: "../img/骷髏頭.png", maxHP: 1500, currentHP: 200, atk: 100, def: 50, rewardExp: 1000, rewardCoin: [600, 800], drops: ["大寶劍","厚實的鎧甲","怒擊","大型回血藥水","大型魔力藥水","石化術"], lvl: [10, 30] },
            { name: "野蠻人", img: "../img/小丑1.png", maxHP: 6000, currentHP: 200, atk: 300, def: 100, rewardExp: 3000, rewardCoin: [1000, 1200], drops: ["神劍","最堅強的護盾"], lvl: [30, 50] }
        ];

        const enemy = { ...enemies[Math.floor(Math.random() * enemies.length)] };
        const [minLvl, maxLvl] = enemy.lvl;
        const lvl = Math.floor(Math.random() * (maxLvl - minLvl + 1)) + minLvl;

        enemy.maxHP += (lvl - 1) * 4;
        enemy.currentHP = enemy.maxHP;
        enemy.atk += (lvl - 1) * 4;
        enemy.def += (lvl - 1) * 2;
        enemy.rewardExp += (lvl - 1) * 4;
        enemy.lvl = lvl;

        return enemy;
    }

    const skillDatabase = {
        火球術: { name: "火球術", shop: true, rate: 30, price: 500, mpCost: 50, power: 30, desc: "對敵人造成自身攻擊力100%+30點火焰傷害並造成燃燒", type: "attack", effect: { target: "enemy", status: [{ type: "burn", value: 5, duration: 3, name: "燃燒" }] } },
        治癒術: { name: "治癒術", shop: true, rate: 30, price: 300, mpCost: 50, power: 25, desc: "恢復自身10%HP+25點固定值", type: "heal", effect: { target: "self", status: [{ type: "heal", value: 0 }] } },
        強化: { name: "強化", shop: true, rate: 30, price: 300, mpCost: 30, power: 0, desc: "提升自身攻擊力20%持續3回合", type: "buff", effect: { target: "self", buffs: [{ name: "攻擊力提升", type: "atk", value: 20, isPercent: true, duration: 3 }] } },
        弱化: { name: "弱化", shop: true, rate: 30, price: 300, mpCost: 30, power: 0, desc: "降低敵人攻擊力20%持續3回合", type: "debuff", effect: { target: "enemy", buffs: [{ name: "攻擊力下降", type: "atk", value: -20, isPercent: true, duration: 3 }] } },
        冰凍術: { name: "冰凍術", shop: true, rate: 30, price: 300, mpCost: 60, power: 30, desc: "造成攻擊力100%+30點冰霜傷害並冰凍敵人1回合", type: "control", effect: { target: "enemy", status: [{ type: "frozen", value: 0, duration: 1, name: "冰凍", successRate: 50 }] } },
        再生術: { name: "再生術", shop: true, rate: 25, price: 350, mpCost: 30, power: 0, desc: "每回合回復5%HP持續4回合", type: "buff", effect: { target: "self", buffs: [{ name: "再生", type: "regen", value: 5, isPercent: true, duration: 4 }] } },
        灼燒術: { name: "灼燒術", shop: true, rate: 35, price: 400, mpCost: 60, power: 40, desc: "造成自身攻擊力100%+40點火焰傷害並使敵人燃燒(3回合)", type: "attack", effect: { target: "enemy", status: [{ type: "burn", value: 6, duration: 3, name: "灼燒" }] } },
        毒霧術: { name: "毒霧術", shop: true, rate: 25, price: 350, mpCost: 60, power: 20, desc: "對敵人造成攻擊力100%+20點毒性傷害並中毒(3回合)", type: "attack", effect: { target: "enemy", status: [{ type: "poison", value: 5, duration: 3, name: "中毒" }] } },
        石化術: { name: "石化術", shop: true, rate: 20, price: 400, mpCost: 50, power: 25, desc: "造成少量傷害並使敵人石化(無法行動1回合)", type: "control", effect: { target: "enemy", status: [{ type: "stun", value: 0, duration: 1, name: "石化", successRate: 75 }] } },
        守護術: { name: "守護術", shop: true, rate: 30, price: 300, mpCost: 30, power: 0, desc: "提升自身防禦力25%持續3回合", type: "buff", effect: { target: "self", buffs: [{ name: "防禦力提升", type: "def", value: 25, isPercent: true, duration: 3 }] } },
        削甲: { name: "削甲", shop: true, rate: 25, price: 280, mpCost: 30, power: 10, desc: "攻擊敵人並降低其防禦力20%持續3回合", type: "attack", effect: { target: "enemy", buffs: [{ name: "防禦力下降", type: "def", value: -20, isPercent: true, duration: 3 }] } },
        怒擊: { name: "怒擊", shop: true, rate: 30, price: 350, mpCost: 100, power: 50, desc: "全力一擊造成自身攻擊力150%的物理傷害", type: "attack", effect: { target: "enemy", status: [{ type: "physical", value: 0 }] } },
        神聖光: { name: "神聖光", shop: true, rate: 20, price: 400, mpCost: 10, power: 30, desc: "恢復自身15%HP並解除不良狀態", type: "heal", effect: { target: "self", status: [{ type: "cleanse", value: 0 }] } }
    };


    const itemDatabase = {
        藥水: { rate: 50, shop: true, price: 50, name: "藥水", type: "consumable", effect: { hp: 40 }, content: "回復40hp" },
        小型回血藥水: { rate: 50, shop: true, price: 50, name: "小型回血藥水", type: "consumable", effect: { hp: 40 }, content: "回復40hp" },
        小型魔力藥水: { rate: 50, shop: true, price: 50, name: "小型魔力藥水", type: "consumable", effect: { mp: 40 }, content: "回復40mp" },
        中型回血藥水: { rate: 50, shop: true, price: 100, name: "中型回血藥水", type: "consumable", effect: { hp: 100 }, content: "回復100hp" },
        中型魔力藥水: { rate: 50, shop: true, price: 100, name: "中型魔力藥水", type: "consumable", effect: { mp: 100 }, content: "回復100mp" },
        大型回血藥水: { rate: 50, shop: true, price: 500, name: "大型回血藥水", type: "consumable", effect: { hp: 500 }, content: "回復500hp" },
        大型魔力藥水: { rate: 50, shop: true, price: 500, name: "大型魔力藥水", type: "consumable", effect: { mp: 500 }, content: "回復500mp" },
        寶箱: { rate: 50, price: 400, name: "寶箱", type: "consumable", content: "拿去商店賣值個好價錢" },
        矛: { rate: 30, shop: true, price: 300, name: "矛", type: "weapon", atk: 20, content: "+20攻擊力" },
        盾牌: { rate: 30, shop: true, price: 300, name: "盾牌", type: "armor", def: 15, content: "+15防禦力" },
        鐵劍: { rate: 30, shop: true, price: 150, name: "鐵劍", type: "weapon", atk: 15, quantity: 1, content: "+15攻擊力" },
        斧刀: { rate: 30, shop: true, price: 550, name: "斧刀", type: "weapon", atk: 60, quantity: 1, content: "+60攻擊力" },
        神劍: { rate: 30, shop: false, price: 5000, name: "神劍", type: "weapon", atk: 1000, quantity: 1, content: "+1000攻擊力" },
        最堅強的護盾: { rate: 20, shop: false, price: 5000, name: "最堅強的護盾", type: "armor", def: 1000, quantity: 1, content: "+1000防禦力" },
        鎖子甲: { rate: 20, shop: true, price: 550, name: "鎖子甲", type: "armor", def: 60, quantity: 1, content: "+60防禦力" },
        大寶劍: { rate: 20, shop: true, price: 1000, name: "大寶劍", type: "weapon", atk: 200, quantity: 1, content: "+200攻擊力" },
        厚實的鎧甲: { rate: 20, shop: true, price: 1000, name: "厚實的鎧甲", type: "armor", def: 200, quantity: 1, content: "+200防禦力" },
    };

    const talents = [
        { name: "廢物", desc: "最大生命 -50", effect: { maxHP: "-50" } },
        { name: "強壯體魄", desc: "最大生命 +50", effect: { maxHP: "+50" } },
        { name: "精準打擊", desc: "攻擊力 +10%", effect: { atkPercent: "*1.1" } },
        { name: "鋼鐵意志", desc: "防禦力 +10%", effect: { defPercent: "*1.1" } },
        { name: "勤奮學者", desc: "獲得經驗值 +20%", effect: { expRate: "*1.2" } },
        { name: "天選之人", desc: "訓練效率 +50%", effect: { trainBoost: "*1.5" } },
        { name: "財神附體", desc: "戰鬥獲得金幣 +20%", effect: { coinBonus: "*1.2" } },
        { name: "幸運加護", desc: "掉寶率 +10%", effect: { dropRate: "*1.1" } },
        { name: "魔法大師", desc: "最大魔力 +200", effect: { maxMP: "+200" } },
        { name: "巨力神臂", desc: "攻擊 +25%，防禦 +10%", effect: { atkPercent: "*1.25", defPercent: "*1.1" } },
        { name: "修練聖體", desc: "獲得經驗值 +10000%", effect: { expRate: "*101" } }
    ];

    function getTalentSlotLimit() {
        const lvl = player.lvl;
        if (lvl >= 50) return 6;
        if (lvl >= 40) return 5;
        if (lvl >= 30) return 4;
        if (lvl >= 20) return 3;
        if (lvl >= 10) return 2;
        return 1;
    }

    let stats = null;

    function notify(message, bg = "#fff8d6", duration = 2000) {
        if (window.parent && window.parent !== window && typeof window.parent.notify === "function") {
            window.parent.notify(message, bg, duration);
            return;
        }

        const doc = document.body ? document : window.parent.document;
        let container = doc.getElementById("notifyContainer");
        if (!container) {
            container = doc.createElement("div");
            container.id = "notifyContainer";
            container.style.position = "fixed";
            container.style.top = "20px";
            container.style.right = "20px";
            container.style.display = "flex";
            container.style.flexDirection = "column";
            container.style.gap = "6px";
            container.style.zIndex = 99999;
            doc.body.appendChild(container);
        }

        const box = doc.createElement("div");
        box.innerHTML = message;
        box.style.padding = "10px 16px";
        box.style.borderRadius = "10px";
        box.style.background = bg;
        box.style.boxShadow = "0 0 10px rgba(0,0,0,0.15)";
        box.style.fontSize = "15px";
        box.style.opacity = "0";
        box.style.transform = "translateX(15px)";
        box.style.transition = "opacity 0.35s ease, transform 0.35s ease";
        box.style.pointerEvents = "none";

        container.prepend(box);

        requestAnimationFrame(() => {
            box.style.opacity = "1";
            box.style.transform = "translateX(0)";
        });

        setTimeout(() => {
            box.style.opacity = "0";
            box.style.transform = "translateX(15px)";
            setTimeout(() => box.remove(), 400);
        }, duration);
    }


    function applyTalentEffects() {
        player.talentEffect = {
            expRate: 0,
            coinBonus: 0,
            trainBoost: 0,
            atkPercent: 0,
            defPercent: 0,
            maxHP: 0,
            maxMP: 0,
            dropRate: 0
        };

        if (!Array.isArray(player.talentSlots) || player.talentSlots.length === 0) return;

        // console.log(player.talentEffect);
        player.talentSlots.forEach(talent => {
            const effect = talent.effect;
            if (!effect) return;

            for (const [key, val] of Object.entries(effect)) {
                if (typeof val !== "string" || val.length < 2) continue;

                const type = val[0];
                const num = parseFloat(val.slice(1));

                if (isNaN(num)) continue;

                if (type === "+") {
                    player.talentEffect[key] = (player.talentEffect[key] || 0) + num;
                } else if (type === "*") {
                    player.talentEffect[key] = (player.talentEffect[key] || 0) + ((num - 1) * 100);
                } else if (type === "-") {
                    player.talentEffect[key] = (player.talentEffect[key] || 0) - num;
                    if(player.currentHP> (player.talentEffect[key] || 0) ){

                        player.currentHP = (player.talentEffect[key] || 0)
                    }

                }
            }
        });
    }

    function calculateStats(player) {
        applyTalentEffects();

        const atkBase = player.atk + (player.equipment.weapon?.atk || 0);
        const defBase = player.def + (player.equipment.armor?.def || 0);
        const hpBase = player.maxHP + (player.equipment.armor?.hp || 0);
        const mpBase = player.maxMP + (player.equipment.weapon?.mp || 0);

        const stats = {
            atk: Math.round((atkBase + (player.statBonus.atk || 0)) * (1 + (player.talentEffect.atkPercent || 0) / 100)),
            def: Math.round((defBase + (player.statBonus.def || 0)) * (1 + (player.talentEffect.defPercent || 0) / 100)),
            maxHP: Math.round((hpBase + (player.statBonus.hp || 0)) + (player.talentEffect.maxHP || 0)),
            maxMP: Math.round((mpBase + (player.statBonus.mp || 0)) + (player.talentEffect.maxMP || 0)),
            expRate: 1 + (player.talentEffect.expRate || 0) / 100,
            coinRate: 1 + (player.talentEffect.coinBonus || 0) / 100,
            trainRate: 1 + (player.talentEffect.trainBoost || 0) / 100,
            dropRate: 0.5 + (player.talentEffect.dropRate || 0) / 100
        };

        return stats;
    }

    function updateBars() {
        const base = calculateStats(player);

        let eff = base;
        if (typeof getEffectiveStats === "function") {
            try {
                eff = getEffectiveStats(player) || base;
            } catch (e) {
                console.warn("getEffectiveStats 呼叫失敗，使用基礎屬性", e);
            }
        }

        hp_bar.style.width = (player.currentHP / base.maxHP * 100) + "%";
        hp_text.innerText = `${player.currentHP}/${base.maxHP}`;

        mage_bar.style.width = (player.currentMP / base.maxMP * 100) + "%";
        mage_text.innerText = `${player.currentMP}/${base.maxMP}`;

        exp_bar.style.width = (player.exp / player.maxExp) * 100 + "%";
        exp_text.innerText = `${player.exp}/${player.maxExp}`;

        document.getElementById("lvl").innerText = player.lvl;
        document.getElementById("atk").innerText = eff.atk;
        document.getElementById("def").innerText = eff.def;
        document.getElementById("coin").innerText = player.coin;

        if (typeof refreshStatPanel === "function") {
            try {
                refreshStatPanel(eff);
            } catch {
                refreshStatPanel();
            }
        }
    }

    stats = calculateStats(player);



    function openCitySkill() {
        const overlay = document.getElementById("citySkillOverlay");
        const cityList = document.getElementById("citySkillList");
        const equipList = document.getElementById("battleSkillList");
        cityList.innerHTML = "";
        equipList.innerHTML = "";

        if (!player.equipSkills) player.equipSkills = [];

        if (player.equipSkills.length === 0) {
            equipList.innerHTML = '<p style="color:#aaa;">尚未裝備任何技能。</p>';
        } else {
            player.equipSkills.forEach((skillName, index) => {
                const data = skillDatabase[skillName];
                if (!data) return;

                const div = document.createElement("div");
                div.setAttribute("style", `
        border-bottom:1px solid #555;
        padding:6px; margin-bottom:4px;
        display:flex; flex-direction:column;
      `);
                div.innerHTML = `
        <b>${skillName}</b><br>
        <small>${data.desc}</small>
      `;

                const btnGroup = document.createElement("div");
                btnGroup.setAttribute("style", "margin-top:5px; display:flex; gap:5px;");

                const upBtn = document.createElement("button");
                upBtn.innerText = "上移";
                upBtn.setAttribute("style", `
        padding:2px 6px; border:none; border-radius:4px;
        background:#777; color:white; cursor:pointer;
      `);
                upBtn.onclick = () => moveEquipSkill(index, -1);

                const downBtn = document.createElement("button");
                downBtn.innerText = "下移";
                downBtn.setAttribute("style", `
        padding:2px 6px; border:none; border-radius:4px;
        background:#777; color:white; cursor:pointer;
      `);
                downBtn.onclick = () => moveEquipSkill(index, 1);

                const removeBtn = document.createElement("button");
                removeBtn.innerText = "卸下";
                removeBtn.setAttribute("style", `
        padding:4px 8px; border:none; border-radius:4px;
        background:#a33; color:white; cursor:pointer;
      `);
                removeBtn.onclick = () => unequipSkill(skillName);

                btnGroup.appendChild(upBtn);
                btnGroup.appendChild(downBtn);
                btnGroup.appendChild(removeBtn);
                div.appendChild(btnGroup);
                equipList.appendChild(div);
            });
        }

        if (!player.skills || player.skills.length === 0) {
            cityList.innerHTML = "<p>尚未學會任何技能。</p>";
        } else {
            player.skills.forEach(skill => {
                const data = skillDatabase[skill.name];
                const div = document.createElement("div");
                div.setAttribute("style", `
        border-bottom:1px solid #555;
        padding:6px; margin-bottom:4px;
      `);

                const isEquipped = player.equipSkills.includes(skill.name);
                div.innerHTML = `
        <b>${skill.name}</b> (Lv.${skill.lvl || 1})<br>
        <small>${data.desc}</small><br>
        MP消耗：${data.mpCost}
      `;

                const btn = document.createElement("button");
                btn.innerText = isEquipped ? "已裝備" : "裝備技能";
                btn.disabled = isEquipped;
                btn.setAttribute("style", `
        margin-top:5px; padding:4px 8px;
        ${isEquipped
                        ? "background:#2a2a2a; color:#aaa; cursor:default; border:1px solid #666;"
                        : "background:#007bff; color:white; cursor:pointer; border:none;"}
        border-radius:4px;
      `);
                if (!isEquipped) btn.onclick = () => equipSkill(skill.name);

                div.appendChild(btn);
                cityList.appendChild(div);
            });
        }

        overlay.style.display = "block";
        loadBattleSkillBar();
    }
    document.getElementById("closeCitySkillBtn").onclick = closeCitySkill;
    function closeCitySkill() {
        document.getElementById("citySkillOverlay").style.display = "none";
    }

    function equipSkill(skillName) {
        if (!player.equipSkills) player.equipSkills = [];
        if (player.equipSkills.includes(skillName))
            return notify(`${skillName} 已經裝備`, "#fff8d6");

        if (player.equipSkills.length >= maxSkillCount)
            return notify("最多只能裝備4個技能", "#ffd1d1");

        player.equipSkills.push(skillName);
        notify(`已裝備 ${skillName}`, "#d1ffd1");
        savePlayer();
        openCitySkill();
    }

    function unequipSkill(skillName) {
        player.equipSkills = player.equipSkills.filter(s => s !== skillName);
        notify(`已卸下 ${skillName}`, "#ffd1d1");
        savePlayer();
        openCitySkill();
    }

    function moveEquipSkill(index, direction) {
        const arr = player.equipSkills;
        const newIndex = index + direction;
        if (newIndex < 0 || newIndex >= arr.length) return;
        const temp = arr[index];
        arr[index] = arr[newIndex];
        arr[newIndex] = temp;
        notify("已調整技能順序", "#fff8d6");
        savePlayer();
        openCitySkill();
    }


    function loadBattleSkillBar() {
        const bar = document.getElementById("battleSkillBar");
        bar.innerHTML = "";

        if (!player.equipSkills || player.equipSkills.length === 0) {
            bar.style.display = "flex";
            bar.innerHTML = `<span style="color:#888;">目前沒有裝備任何技能</span>`;
            return;
        }

        player.equipSkills.forEach(skillName => {
            const btn = document.createElement("button");
            btn.innerText = skillName;
            btn.classList.add("battle-skill-btn");
            btn.setAttribute("data-skill", skillName);
            btn.setAttribute("style", `
      padding:8px 12px;
      font-size:14px;
      border:none;
      border-radius:6px;
      background:#444;
      color:white;
      cursor:pointer;
      transition:background 0.2s;
      opacity:1;
    `);

            btn.onclick = () => {
                if (btn.disabled) return;
                attackEnemy("skill", skillName);
            };

            btn.onmouseenter = () => { if (!btn.disabled) btn.style.background = "#666"; };
            btn.onmouseleave = () => { if (!btn.disabled) btn.style.background = "#444"; };

            bar.appendChild(btn);
        });

        bar.style.display = "flex";
    }

    function hideBattleSkillBar() {
        document.getElementById("battleSkillBar").style.display = "none";
    }

    function useSkill(name) {
        const skill = skillDatabase[name];
        if (!skill) return notify(`未知技能：${name}`, "#ffd1d1");

        if (player.currentMP < skill.mpCost) {
            notify("MP 不足，無法施放技能", "#ffd1d1");
            return false;
        }

        const enemy = window.currentEnemy;
        if (!enemy) {
            notify("沒有敵人可以施放技能", "#ffd1d1");
            return false;
        }

        player.useMP(skill.mpCost);
        updateBars();

        const stats = getEffectiveStats(player);
        const target = skill.effect?.target === "self" ? player : enemy;

        if (skill.type === "attack" && skill.power !== undefined) {
            const rawDamage = stats.atk + skill.power;
            const dmg = Math.max(rawDamage - enemy.def, 1);

            enemy.currentHP = Math.max(enemy.currentHP - dmg, 0);
            showDamageNumber("enemy", dmg);
            notify(`使用 ${name} 造成 ${dmg} 傷害`, "#fff8d6");

            if (skill.effect?.status) {
                skill.effect.status.forEach(s => {
                    applyStatusEffect(enemy, { ...s, from: name });
                });
            }
        } else if (skill.type === "heal") {
            const healAmt = Math.round(player.maxHP * 0.1 + (skill.power || 0));
            player.heal(healAmt);
            notify(`使用 ${name} 恢復 ${healAmt} HP`, "#d1ffd1");
        }

        if (skill.effect?.buffs) {
            skill.effect.buffs.forEach(buff => {
                applyStatusEffect(target, { ...buff, from: name });

                const sign = buff.value > 0 ? "提升" : "降低";
                const absVal = Math.abs(buff.value);
                const typeText = buff.type.toUpperCase();

                // notify(
                //     `${name} 使 ${target.name} 的 ${typeText}${sign}${buff.isPercent ? absVal + "%" : absVal}（${buff.duration} 回合）`,
                //     buff.value > 0 ? "#d1ffd1" : "#ffd1d1"
                // );
            });
        }

        if (skill.type === "control" && skill.effect?.status) {
            skill.effect.status.forEach(status => {
                const rate = status.successRate ?? 100;
                const isSuccess = Math.random() * 100 < rate;

                if (isSuccess) {
                    applyStatusEffect(target, { ...status, from: name });
                    notify(`${target.name} 被施加 ${status.name}`, "#cce6ff");
                } else {
                    notify(`${name} 失敗，${target.name} 抵抗了 ${status.name}`, "#ffd1d1");
                }
            });

            if (skill.power !== undefined) {
                const rawDamage = stats.atk + skill.power;
                const dmg = Math.max(rawDamage - enemy.def, 1);

                enemy.currentHP = Math.max(enemy.currentHP - dmg, 0);
                showDamageNumber("enemy", dmg);
                notify(`${name} 附帶造成 ${dmg} 傷害`, "#fff8d6");
            }
        }

        savePlayer();
        updateBars();
        return true;
    }

    function closeSkill() {
        document.getElementById("skillOverlay").style.display = "none";
    }


    function openStatPanel() {
        const iframe = document.getElementById("gameFrame");
        const stats = calculateStats(player);

        iframe.srcdoc = `
    <html>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>
      <body style="font-family:sans-serif; text-align:center; background:#f5f5dc; min-height:100vh;">
        <div class="container py-4">
          <h1 class="mb-4">人物加點</h1>
          <p>等級：${player.lvl}</p>
          <p>可用屬性點：<strong id="points">${player.statPoints}</strong></p>

          <table class="table table-bordered w-50 mx-auto">
            <tr><th>屬性</th><th>當前值（含加成）</th><th>操作</th></tr>
            <tr>
              <td>攻擊力</td>
              <td id="atkVal">${stats.atk}</td>
              <td><button class="btn btn-sm btn-success" onclick="parent.addStat('atk')">+1</button></td>
            </tr>
            <tr>
              <td>防禦力</td>
              <td id="defVal">${stats.def}</td>
              <td><button class="btn btn-sm btn-success" onclick="parent.addStat('def')">+1</button></td>
            </tr>
            <tr>
              <td>最大生命</td>
              <td id="hpVal">${stats.maxHP}</td>
              <td><button class="btn btn-sm btn-success" onclick="parent.addStat('hp')">+10</button></td>
            </tr>
            <tr>
              <td>最大魔力</td>
              <td id="mpVal">${stats.maxMP}</td>
              <td><button class="btn btn-sm btn-success" onclick="parent.addStat('mp')">+10</button></td>
            </tr>
          </table>

          <button class="btn btn-warning mt-3 me-3" onclick="parent.resetStats()">重置屬性點</button>
          <button class="btn btn-primary mt-4" onclick="parent.loadTown()">返回城鎮</button>
        </div>
      </body>
    </html>`;
    }

    function addStat(type) {
        if (player.statPoints <= 0) {
            notify("沒有可分配的屬性點", "#ffd1d1");
            return;
        }

        switch (type) {
            case "atk":
                player.statBonus.atk += 1;
                break;
            case "def":
                player.statBonus.def += 1;
                break;
            case "hp":
                player.statBonus.hp += 10;
                break;
            case "mp":
                player.statBonus.mp += 10;
                break;
        }

        player.statPoints -= 1;
        savePlayer();
        updateBars();
        refreshStatPanel();
        notify(`已加點 ${type.toUpperCase()}，剩餘點數：${player.statPoints}`, "#d1ffd1");
    }

    function resetStats() {
        if (!confirm("是否確定要重置所有屬性點？")) return;

        const totalReturned =
            player.statBonus.atk +
            player.statBonus.def +
            player.statBonus.hp / 10 +
            player.statBonus.mp / 10;

        player.statBonus = { atk: 0, def: 0, hp: 0, mp: 0 };
        player.statPoints += totalReturned;

        savePlayer();
        updateBars();
        refreshStatPanel();
        notify(`已重置所有屬性點，返還 ${totalReturned} 點`, "#fff8d6");
    }

    function refreshStatPanel() {
        const iframe = document.getElementById("gameFrame");
        const doc = iframe?.contentDocument || iframe?.contentWindow?.document;
        if (!doc) return;

        const title = doc.querySelector("h1")?.innerText || "";
        if (!title.includes("人物加點")) return;

        const stats = calculateStats(player);

        if (doc.getElementById("points")) doc.getElementById("points").textContent = player.statPoints;
        if (doc.getElementById("atkVal")) doc.getElementById("atkVal").textContent = stats.atk;
        if (doc.getElementById("defVal")) doc.getElementById("defVal").textContent = stats.def;
        if (doc.getElementById("hpVal")) doc.getElementById("hpVal").textContent = stats.maxHP;
        if (doc.getElementById("mpVal")) doc.getElementById("mpVal").textContent = stats.maxMP;

        const lvlP = Array.from(doc.querySelectorAll("p")).find(p => p.innerText.includes("等級"));
        if (lvlP) lvlP.innerText = `等級：${player.lvl}`;
    }

    function restAtInn() {
        player.currentHP = calculateStats(player).maxHP;
        player.currentMP = calculateStats(player).maxMP;
        updateBars();
        notify("你在旅館休息了一晚，體力和魔力都恢復了", "#fff8d6");
        savePlayer();

    }




    function loadInventory() {
        const overlay = document.getElementById("inventoryOverlay");
        const tooltip = document.getElementById("tooltip");

        const weaponSlot = document.getElementById("weaponSlot");
        weaponSlot.innerHTML = "<strong>武器:</strong> ";
        if (player.equipment.weapon) {
            weaponSlot.innerHTML += player.equipment.weapon.name;
            const btn = document.createElement("button");
            btn.innerText = "卸下";
            btn.className = "btn btn-sm btn-warning";
            btn.onclick = () => {
                player.unequip("weapon");
                updateBars();
                loadInventory();
            };
            weaponSlot.appendChild(btn);
        } else weaponSlot.innerHTML += "無";

        const armorSlot = document.getElementById("armorSlot");
        armorSlot.innerHTML = "<strong>防具:</strong> ";
        if (player.equipment.armor) {
            armorSlot.innerHTML += player.equipment.armor.name;
            const btn = document.createElement("button");
            btn.innerText = "卸下";
            btn.className = "btn btn-sm btn-warning";
            btn.onclick = () => {
                player.unequip("armor");
                updateBars();
                loadInventory();
            };
            armorSlot.appendChild(btn);
        } else armorSlot.innerHTML += "無";

        const table = document.getElementById("inventoryTable");
        table.innerHTML = `
    <tr>
      <th style="border-bottom:1px solid #000; text-align:left; padding:4px;">物品</th>
      <th style="border-bottom:1px solid #000; text-align:left; padding:4px;">數量</th>
    </tr>
  `;

        player.inventory.forEach(item => {
            let base = itemDatabase[item.name];
            if (!base && item.type === "skillBook") {
                const skill = skillDatabase[item.skillRef] || skillDatabase[item.name.replace("書", "")];
                if (skill) {
                    base = {
                        name: item.name,
                        type: "skillBook",
                        price: skill.price || item.price,
                        content: `可學會技能：${item.skillRef || item.name.replace("書", "")}\n${skill.desc}`
                    };
                }
            }
            if (!base) return;

            const row = table.insertRow();
            row.insertCell().innerText = base.name;
            row.insertCell().innerText = item.quantity;

            row.onmouseenter = e => {
                tooltip.innerText = `${base.name}
類型: ${base.type === "skillBook" ? "技能書" : base.type}
說明: ${base.content || "無"}`;
                tooltip.style.left = e.pageX + 15 + "px";
                tooltip.style.top = e.pageY + 15 + "px";
                tooltip.style.display = "block";
            };
            row.onmousemove = e => {
                tooltip.style.left = e.pageX + 15 + "px";
                tooltip.style.top = e.pageY + 15 + "px";
            };
            row.onmouseleave = () => {
                tooltip.style.display = "none";
            };

            row.onclick = () => {
                const existing = table.querySelector(".action-row");
                if (existing) existing.remove();

                const actionRow = table.insertRow(row.rowIndex + 1);
                actionRow.className = "action-row";
                const cell = actionRow.insertCell();
                cell.colSpan = 2;
                cell.style.textAlign = "center";

                if (base.type === "consumable") {
                    const useBtn = document.createElement("button");
                    useBtn.innerText = "使用";
                    useBtn.className = "btn btn-sm btn-primary me-2";
                    useBtn.onclick = () => {
                        player.useItem(base.name);
                        updateBars();
                        loadInventory();
                    };
                    cell.appendChild(useBtn);

                    const removeBtn = document.createElement("button");
                    removeBtn.innerText = "丟棄";
                    removeBtn.className = "btn btn-sm btn-danger";
                    removeBtn.onclick = () => {
                        if (confirm(`丟棄 ${base.name}?`)) {
                            player.removeItem(base.name);
                            loadInventory();
                        }
                    };
                    cell.appendChild(removeBtn);
                }

                if (base.type === "weapon" || base.type === "armor") {
                    const isEquipped =
                        (base.type === "weapon" && player.equipment.weapon?.name === base.name) ||
                        (base.type === "armor" && player.equipment.armor?.name === base.name);
                    const equipBtn = document.createElement("button");
                    equipBtn.innerText = isEquipped ? "卸下" : "裝備";
                    equipBtn.className = `btn btn-sm ${isEquipped ? "btn-warning" : "btn-success"} me-2`;
                    equipBtn.onclick = () => {
                        if (isEquipped) player.unequip(base.type);
                        else player.equip(base.name);
                        updateBars();
                        loadInventory();
                    };
                    cell.appendChild(equipBtn);

                    if (!isEquipped) {
                        const removeBtn = document.createElement("button");
                        removeBtn.innerText = "丟棄";
                        removeBtn.className = "btn btn-sm btn-danger";
                        removeBtn.onclick = () => {
                            if (confirm(`丟棄 ${base.name}?`)) {
                                player.removeItem(base.name);
                                loadInventory();
                            }
                        };
                        cell.appendChild(removeBtn);
                    }
                }

                if (item.type === "skillBook") {
                    const learnBtn = document.createElement("button");
                    learnBtn.innerText = "學習技能";
                    learnBtn.className = "btn btn-sm btn-primary me-2";
                    learnBtn.onclick = () => {
                        player.useItem(item.name);
                        updateBars();
                        loadInventory();
                    };
                    cell.appendChild(learnBtn);

                    const removeBtn = document.createElement("button");
                    removeBtn.innerText = "丟棄";
                    removeBtn.className = "btn btn-sm btn-danger";
                    removeBtn.onclick = () => {
                        if (confirm(`丟棄 ${item.name}?`)) {
                            player.removeItem(item.name);
                            loadInventory();
                        }
                    };
                    cell.appendChild(removeBtn);
                }
            };
        });

        overlay.style.display = "flex";
    }


    document.getElementById("closeInventory").onclick = closeInventory;
    function closeInventory() {
        document.getElementById("inventoryOverlay").style.display = "none";
    }

    function updateInventoryTable() {
        const iframe = document.getElementById("gameFrame");
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        const table = doc.getElementById("inventory");

        table.innerHTML = "<tr><th>物品</th><th>數量</th><th>操作</th></tr>";

        player.inventory.forEach(item => {
            const row = table.insertRow();
            row.insertCell().innerText = item.name;
            row.insertCell().innerText = item.quantity;

            const actionCell = row.insertCell();
            const useBtn = doc.createElement("button");
            useBtn.classList.add("btn", "btn-sm", "btn-success", "me-2");
            useBtn.innerText = "使用";
            useBtn.onclick = () => {
                player.useItem(item.name);
                updateInventoryTable();
            };

            const removeBtn = doc.createElement("button");
            removeBtn.classList.add("btn", "btn-sm", "btn-danger");
            removeBtn.innerText = "丟棄";
            removeBtn.onclick = () => {
                player.removeItem(item.name);
                updateInventoryTable();
            };

            actionCell.appendChild(useBtn);
            actionCell.appendChild(removeBtn);
        });
    }

    function generateItemShop() {
        return Object.values(itemDatabase)
            .filter(item => item.shop)
            .map(item => ({
                name: item.name,
                price: item.price,
                type: item.type,
                content: item.content ?? "",
                atk: item.atk ?? 0,
                def: item.def ?? 0
            }));
    }
    function generateSkillShop() {
        return Object.values(skillDatabase)
            .filter(skill => skill.shop)
            .map(skill => ({
                name: skill.name,
                price: skill.price,
                mpCost: skill.mpCost,
                desc: skill.desc,
                type: skill.type
            }));
    }
    function rollDailyShop(count = 8) {
        const list = [
            ...generateItemShop(),
            ...generateSkillShop()
        ];

        return list
            .sort(() => Math.random() - 0.5)
            .slice(0, count);
    }

    const shopItems = rollDailyShop();


    function loadShop() {
        // skillDatabase
        // itemDatabase
        const iframe = document.getElementById("gameFrame");
        const shopHTML = shopItems
            .map((item, i) => {
                return `
        <tr>
          <td>${item.name}</td>
          <td>${item.content ? item.content : item.desc}</td>
          <td>${item.price}</td>
          <td><button class="btn btn-sm btn-success" onclick="parent.buyItem(${i})">購買</button></td>
        </tr>`;
            })
            .join("");

        iframe.srcdoc = `
    <html>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>
      <body style="font-family: sans-serif; background:#fff0f5; min-height:100vh;">
        <div class="container">
          <h1 class="mb-4 text-center">商店</h1>
          <p class="text-center">金錢：<span id="shopCoin">${player.coin}</span></p>
          <table class="table table-bordered table-hover">
            <tr><th>物品</th><th>介紹</th><th>價格</th><th>操作</th></tr>
            <tbody>${shopHTML}</tbody>
          </table>
          <div class="row">
            <div class="col">
              <button class="btn btn-outline-secondary w-100" onclick="parent.loadInventory()">物品欄</button>
            </div>
            <div class="col">
              <button class="btn btn-outline-warning w-100" onclick="parent.loadSell()">販賣物品</button>
            </div>
            <div class="col">
              <button class="btn btn-outline-secondary w-100 mb-3" onclick="parent.loadTown()">返回城鎮</button>
            </div>
          </div>
        </div>
      </body>
    </html>`;
    }

    function loadSell() {

        const iframe = document.getElementById("gameFrame");
        const sellHTML = player.inventory
            .filter(i => itemDatabase[i.name]?.price)
            .map(item => {
                const base = itemDatabase[item.name];
                const sellPrice = Math.floor((base.price || 10) / 2);
                return `
        <tr>
          <td>${item.name}</td>
          <td>${item.quantity || 1}</td>
          <td>${sellPrice}</td>
          <td><button class="btn btn-sm btn-danger" onclick="parent.sellItemById('${item.id}')">販賣</button></td>
        </tr>`;
            })
            .join("");

        iframe.srcdoc = `
    <html>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>
      <body style=" background:#fff8d6; min-height:100vh;">
        <div class="container">
          <h1 class="mb-4 text-center">販賣物品</h1>
          <p class="text-center">目前金錢：<span id="shopCoin">${player.coin}</span></p>
          <table class="table table-bordered table-hover">
            <tr><th>物品</th><th>數量</th><th>售價</th><th>操作</th></tr>
            ${sellHTML || "<tr><td colspan='4'>目前沒有可販賣物品</td></tr>"}
          </table>
          <div class="text-center">
          <button class="btn btn-outline-secondary " onclick="parent.loadShop()">返回商店</button>
          </div>
        </div>
      </body>
    </html>`;
    }

    function buyItem(index) {
        const item = shopItems[index];
        // skillDatabase
        // itemDatabase
        if (player.coin < item.price) {
            notify("金錢不足", "#ffd1d1");
            return;
        }

        player.coin -= item.price;
        player.addItem({ name: item.name, quantity: 1 });
        savePlayer();
        updateBars();

        // notify(`購買成功：${item.name}`, "#f5f5dc");
        const iframe = document.getElementById("gameFrame");
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        const coinSpan = doc.getElementById("shopCoin");
        if (coinSpan) coinSpan.textContent = player.coin;
    }

    function sellItemById(id) {
        const index = player.inventory.findIndex(i => i.id === Number(id) || i.id === id);
        if (index === -1) {
            notify("找不到該物品", "#ffd1d1");
            return;
        }
        const item = player.inventory[index];
        const base = itemDatabase[item.name];
        const sellPrice = Math.floor((base?.price || item.price || 10) / 2);
        player.inventory.splice(index, 1);
        player.coin += sellPrice;
        savePlayer();
        updateBars();
        const iframe = document.getElementById("gameFrame");
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        const coinSpan = doc.getElementById("shopCoin");
        if (coinSpan) coinSpan.textContent = player.coin;
        const row = doc.querySelector(`button[onclick="parent.sellItemById('${id}')"]`)?.closest("tr");
        if (row) row.remove();
        const table = doc.querySelector("table.table");
        if (table && table.rows.length === 2) {
            table.insertAdjacentHTML("beforeend", "<tr><td colspan='4'>目前沒有可販賣物品</td></tr>");
        }
        notify(`賣出 ${item.name}，獲得 ${sellPrice} 金幣`, "#f5f5dc");
    }

    function updateTaskTable(doc) {
        const table = doc.getElementById("task");
        if (!table) {
            return;
        }

        let tbody = table.querySelector("tbody");
        if (!tbody) {
            tbody = doc.createElement("tbody");
            table.appendChild(tbody);
        }


        tbody.innerHTML = "";

        tasks.forEach(task => {
            const row = tbody.insertRow();
            const playerTask = player.tasks.find(t => t.name === task.name);

            let taskText = `${task.name} *${task.count}`;
            if (playerTask) taskText += ` (${playerTask.progress}/${task.count})`;

            const nameCell = row.insertCell();
            nameCell.innerText = taskText;
            nameCell.style.wordBreak = "break-word";
            nameCell.style.maxWidth = "200px";
            nameCell.style.verticalAlign = "middle";

            const rewardText = `錢:${task.rewards.coin || 0} | 經驗:${task.rewards.exp || 0} | 物品:${task.rewards.items?.join(", ") || "無"}`;
            const rewardCell = row.insertCell();
            rewardCell.innerText = rewardText;
            rewardCell.style.wordBreak = "break-word";
            rewardCell.style.verticalAlign = "middle";

            const actionCell = row.insertCell();
            actionCell.style.verticalAlign = "middle";

            const btn = doc.createElement("button");
            btn.classList.add("btn", "btn-sm", "w-100");
            btn.style.margin = "2px 0";
            btn.style.whiteSpace = "nowrap";

            if (!playerTask) {
                btn.innerText = "接取任務";
                btn.classList.add("btn-success");
                btn.onclick = () => {
                    player.tasks.push({
                        name: task.name,
                        rewards: task.rewards,
                        status: "進行中",
                        progress: 0
                    });
                    updateTaskTable(doc);
                };
            } else if (playerTask.progress < task.count) {
                btn.innerText = "已接取";
                btn.classList.add("btn-secondary", "disabled");
                savePlayer();
            } else {
                btn.innerText = "完成";
                btn.classList.add("btn-primary");
                btn.onclick = () => {
                    notify(
                        `領取獎勵: 錢 ${task.rewards.coin}, 經驗 ${task.rewards.exp}, 物品 ${task.rewards.items.join(", ")}`,
                        "#d1ffd1"
                    );
                    player.gainExp(task.rewards.exp);
                    player.coin += Math.round(task.rewards.coin * stats.coinRate);
                    if (task.rewards.items && task.rewards.items.length > 0) {
                        task.rewards.items.forEach(itemName => {
                            player.addItem({ name: itemName });
                        });
                    }
                    player.tasks = player.tasks.filter(t => t.name !== task.name);
                    savePlayer();
                    updateBars();
                    updateTaskTable(doc);
                };
            }

            actionCell.appendChild(btn);
        });
    }

    // function acceptTask(index, doc) {
    //     const task = tasks[index];
    //     if (!player.tasks.some(t => t.name === task.name)) {
    //         player.tasks.push({
    //             name: task.name,
    //             reward: task.reward,
    //             status: "進行中"
    //         });
    //         updateTaskTable(doc);
    //     }
    // }

    // function completeTask(index, doc) {
    //     const task = player.tasks[index];
    //     if (!task) return;
    //     task.status = "完成";
    //     updateBars();
    //     updateTaskTable(doc);
    // }

    //節點
    function loadTown() {
        const iframe = document.getElementById('gameFrame');
        iframe.onload = () => {
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            if (!doc) return;
            updateTaskTable(doc);
        };
        iframe.srcdoc = `
    <html>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body style="font-family:sans-serif; text-align:center; background:#f5f5dc; min-height:100vh;">
            <div class="container">
                <h1 class="mb-4">城鎮</h1>
                <div class="row justify-content-center">
                    <div class="col">
                        <table id="task" class="table table-bordered table-hover">
                            <tr><th>任務列表</th><th>獎勵</th><th>操作</th></tr>
                        </table>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-outline-warning w-100 mb-3" onclick="parent.loadBattle()">探索</button>
                        <button class="btn btn-outline-primary w-100 mb-3" onclick="parent.loadShop()">進入商店</button>
                        <button class="btn btn-outline-success w-100 mb-3" onclick="parent.restAtInn()">旅館休息</button>
                        <button class="btn btn-outline-secondary w-100 mb-3" onclick="parent.loadInventory()">物品欄</button>
                        <button class="btn btn-outline-secondary w-100 mb-3" id ="trainBtn" onclick="parent.train()">訓練</button>
                        <button class="btn btn-outline-secondary w-100 mb-3" onclick="parent.talent()">天賦</button>
                        <button class="btn btn-outline-info w-100 mb-3" onclick="parent.openStatPanel()">人物加點</button>
                        <button class="btn btn-outline-danger w-100 mb-3" onclick="parent.openCitySkill()">技能</button>
                    </div>
                </div>
            </div>
        </body>
    </html>
    `;

    }

    function talent() {
        const iframe = document.getElementById('gameFrame');
        iframe.srcdoc = `
    <html>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body style="font-family:sans-serif; text-align:center; background:#fffaf0; min-height:100vh;">
            <div class="container py-5">
                <h1 class="mb-4">天賦抽獎</h1>
                <p>每次抽取需花費 <strong>500 金幣</strong></p>
                <button class="btn btn-warning mb-4" onclick="parent.drawTalent()">抽一個天賦</button>
                <button class="btn btn-outline-secondary mb-4" onclick="parent.loadTown()">返回城鎮</button>
                <hr>
                <h4 class="mt-4">已裝備天賦 (${player.talentSlots.length}/${getTalentSlotLimit()})</h4>
                <div id="activeTalents" class="mb-4"></div>
            </div>
        </body>
    </html>`;
        iframe.onload = () => updateTalentList();
    }

    function drawTalent() {
        if (player.coin < 500) {
            notify("金幣不足，需要 500 金幣", "#ffd1d1");
            return;
        }
        const available = talents.filter(t => !player.talentSlots.some(s => s.name === t.name));
        if (available.length === 0) {
            notify("你已擁有所有天賦", "#ffd1d1");
            return;
        }
        player.coin -= 500;
        const drawn = available[Math.floor(Math.random() * available.length)];
        showTalentDecision(drawn);
        updateBars();
        savePlayer();
    }

    function showTalentDecision(drawn) {
        const iframe = document.getElementById('gameFrame');
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (!doc) return;
        const container = doc.querySelector('.container');
        if (!container) return;
        container.innerHTML = `
        <h2>你抽到了：${drawn.name}</h2>
        <p class="mb-4">${drawn.desc}</p>`;
        const slotLimit = getTalentSlotLimit();
        if (player.talentSlots.length < slotLimit) {
            const equipBtn = doc.createElement('button');
            equipBtn.className = 'btn btn-success me-3';
            equipBtn.innerText = '裝備此天賦';
            equipBtn.onclick = () => {
                player.talentSlots.push(drawn);
                savePlayer();
                talent();
                setTimeout(updateTalentList, 50);
            };
            container.appendChild(equipBtn);
        } else {
            const msg = doc.createElement('p');
            msg.innerText = "天賦欄已滿，請選擇要替換的天賦：";
            container.appendChild(msg);
            player.talentSlots.forEach((slot, i) => {
                const btn = doc.createElement('button');
                btn.className = 'btn btn-outline-danger m-2';
                btn.innerText = `替換「${slot.name}」`;
                btn.onclick = () => {
                    player.talentSlots[i] = drawn;
                    savePlayer();
                    talent();
                    setTimeout(updateTalentList, 50);
                };
                container.appendChild(btn);
            });
        }
        const cancelBtn = doc.createElement('button');
        cancelBtn.className = 'btn btn-secondary m-3';
        cancelBtn.innerText = '放棄';
        cancelBtn.onclick = () => talent();
        container.appendChild(cancelBtn);
    }

    function updateTalentList() {
        const iframe = document.getElementById('gameFrame');
        if (!iframe) return;
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (!doc) return;
        const activeDiv = doc.getElementById('activeTalents');
        if (!activeDiv) return;
        const slotLimit = getTalentSlotLimit();
        activeDiv.innerHTML = '';
        for (let i = 0; i < slotLimit; i++) {
            const slot = doc.createElement('div');
            slot.className = 'border rounded p-2 m-1';
            slot.style.display = 'inline-block';
            slot.style.minWidth = '150px';
            slot.style.background = '#fffbe6';
            if (player.talentSlots[i]) {
                const t = player.talentSlots[i];
                slot.innerHTML = `
                <strong>${t.name}</strong><br>
                <span>${t.desc}</span><br>
                <button class="btn btn-sm btn-danger mt-2" onclick="parent.removeTalentSlot(${i})">移除</button>`;
            } else {
                slot.innerHTML = `<span class="text-muted">空</span>`;
            }
            activeDiv.appendChild(slot);
        }
    }

    function removeTalentSlot(index) {
        player.talentSlots.splice(index, 1);
        savePlayer();
        setTimeout(updateTalentList, 50);
    }


    let trainingInterval = null;
    let isTraining = false;

    function train() {
        const iframe = document.getElementById("gameFrame")
        const doc = iframe?.contentDocument || iframe?.contentWindow?.document;
        const btn = doc?.getElementById("trainBtn");
        if (isTraining) {
            stopTraining();
            btn.textContent = "開始訓練";
            return;
        }

        if (!isInTown()) {
            notify("你只能在城鎮中進行訓練！", "#ffd1d1");
            return;
        }

        isTraining = true;
        btn.textContent = "取消訓練";
        trainingInterval = setInterval(() => {
            const stats = calculateStats(player);
            const gain = Math.round(player.train * stats.trainRate);
            player.gainExp(gain);
            savePlayer();
            updateBars();
            updateTrainingStatus(gain);
        }, 1000);

        updateTrainingStatus();
    }

    function stopTraining() {
        if (trainingInterval) {
            clearInterval(trainingInterval);
            trainingInterval = null;
        }
        isTraining = false;
        updateTrainingStatus();
    }

    function updateTrainingStatus(gain = 0) {
        const iframe = document.getElementById('gameFrame');
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (!doc) return;

        let trainBox = doc.getElementById('trainStatus');

        if (!isTraining) {
            if (trainBox) trainBox.remove();
            return;
        }

        if (!trainBox) {
            const container = doc.querySelector('.container');
            if (container) {
                trainBox = doc.createElement('div');
                trainBox.id = 'trainStatus';
                trainBox.style.position = 'fixed';
                trainBox.style.bottom = '10px';
                trainBox.style.left = '10px';
                trainBox.style.padding = '8px 12px';
                trainBox.style.borderRadius = '8px';
                trainBox.style.background = '#fff8d6';
                trainBox.style.boxShadow = '0 0 5px rgba(0,0,0,0.2)';
                trainBox.style.fontSize = '14px';
                trainBox.style.zIndex = 5000;
                container.appendChild(trainBox);
            }
        }

        if (trainBox) {
            const stats = calculateStats(player);
            const rate = Math.round((stats.trainRate - 1) * 100);
            const expBonus = Math.round((stats.expRate - 1) * 100);
            trainBox.innerHTML = `
            訓練中 (+${gain || player.train} EXP/秒)
            <br>訓練加成：+${rate}%
            <br>經驗加成：+${expBonus}%
            <br>等級：${player.lvl} | 經驗：${player.exp}/${player.maxExp}
        `;
        }
    }

    function pauseTrainingOnSceneChange() {
        if (isTraining) {
            stopTraining();
        }
    }

    function isInTown() {
        const iframe = document.getElementById('gameFrame');
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (!doc) return false;
        return doc.querySelector('h1')?.innerText.includes('城鎮') ?? false;
    }



    function animateAttack(attacker, callback) {
        const iframe = document.getElementById('gameFrame');
        setBattleButtonsDisabled(true);
        if (!iframe) {
            if (typeof callback === 'function') callback();
            return;
        }
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (!doc) {
            if (typeof callback === 'function') callback();
            return;
        }

        const actorImg = doc.querySelector(attacker === 'player' ? '.actor.player img' : '.actor.enemy img');
        const targetImg = doc.querySelector(attacker === 'player' ? '.actor.enemy img' : '.actor.player img');

        if (!actorImg || !targetImg) {
            if (typeof callback === 'function') callback();
            return;
        }

        const actorRect = actorImg.getBoundingClientRect();
        const targetRect = targetImg.getBoundingClientRect();
        const distance = attacker === 'player'
            ? targetRect.left - actorRect.right - 10
            : targetRect.right - actorRect.left + 10;

        actorImg.style.transition = 'none';
        targetImg.style.transition = 'none';
        actorImg.style.transform = 'translateX(0) rotate(0deg)';
        targetImg.style.transform = 'translateX(0) rotate(0deg)';
        void actorImg.offsetWidth;

        actorImg.style.transition = 'transform 0.18s ease';
        actorImg.style.transform = `translateX(${distance}px)`;

        setTimeout(() => {
            actorImg.animate(
                [
                    { transform: `translateX(${distance}px) rotate(0deg)` },
                    { transform: `translateX(${distance - 8}px) rotate(90deg)` },
                    { transform: `translateX(${distance + 8}px) rotate(180deg)` },
                    { transform: `translateX(${distance - 8}px) rotate(270deg)` },
                    { transform: `translateX(${distance + 8}px) rotate(360deg)` },
                    { transform: `translateX(${distance}px) rotate(720deg)` }
                ],
                { duration: 600, iterations: 1, easing: 'ease-in-out' }
            );

            targetImg.animate(
                [
                    { transform: 'translateX(0)' },
                    { transform: attacker === 'player' ? 'translateX(20px)' : 'translateX(-20px)' },
                    { transform: 'translateX(0)' },
                    { transform: attacker === 'player' ? 'translateX(10px)' : 'translateX(-10px)' },
                    { transform: 'translateX(0)' }
                ],
                { duration: 600, iterations: 1, easing: 'ease-in-out' }
            );

            setTimeout(() => {
                actorImg.style.transition = 'transform 0.12s ease';
                actorImg.style.transform = 'translateX(0) rotate(0deg)';

                targetImg.style.transition = 'transform 0.12s ease';
                targetImg.style.transform = 'translateX(0) rotate(0deg)';

                setTimeout(() => {
                    if (typeof callback === 'function') callback();
                }, 120);
            }, 600);
        }, 180);
    }

    function updateEnemyLabels() {
        const iframe = document.getElementById('gameFrame');
        const doc = iframe?.contentDocument || iframe?.contentWindow?.document;
        const enemy = window.currentEnemy;
        const estats = getEffectiveStats(enemy);
        if (!doc || !enemy) return;

        const hpP = doc.getElementById("enemy_hp");
        const atkP = doc.getElementById("enemy_atk");
        const defP = doc.getElementById("enemy_def");
        const lvlP = doc.getElementById("enemy_lvl");

        if (hpP) hpP.innerText = `敵人 HP：${enemy.currentHP}`;
        if (atkP) atkP.innerText = `敵人 攻擊力：${estats.atk}`;
        if (defP) defP.innerText = `敵人 防禦力：${estats.def}`;
        if (lvlP) lvlP.innerText = `敵人 等級：${enemy.lvl}`;
    }

    function ensureEffects(target) {
        if (!target.statusEffects) target.statusEffects = [];
        return target.statusEffects;
    }

    function linkGlobalBuffLists() {
        window.pBuffs = ensureEffects(player);
        if (window.currentEnemy) window.eBuffs = ensureEffects(window.currentEnemy);
    }

    function applyStatusEffect(target, eff) {
        const list = ensureEffects(target);
        const isDelayed = ["poison", "burn", "frozen", "stun", "sleep", "regen"].includes(eff.type);
        const newEff = {
            type: eff.type,
            name: eff.name || eff.type,
            value: eff.value ?? 0,
            duration: eff.duration ?? 1,
            maxDuration: eff.duration ?? 1,
            pending: isDelayed ? 1 : 0,
            isPercent: !!eff.isPercent
        };

        const exist = list.find(x => x.type === newEff.type);
        if (exist) {
            exist.duration = Math.max(exist.duration, newEff.duration);
            if (isDelayed) exist.pending = 1;
            notify(`${target.name} 的 ${newEff.name} 持續時間已刷新`, "#fff8d6");
        } else {
            list.push(newEff);
            if (["frozen", "stun", "sleep"].includes(newEff.type)) {
                notify(`${target.name} 受到${newEff.name}，將無法行動（${newEff.duration} 回合）`, "#fff8d6");
            } else if (["poison", "burn"].includes(newEff.type)) {
                notify(`${target.name} 受到${newEff.name}，下回合開始每回合結算`, "#fff8d6");
            } else {
                notify(`${target.name} 獲得狀態：${newEff.name}（${newEff.duration} 回合${isDelayed ? "，下回合生效" : ""}）`, "#fff8d6");
            }
        }
        linkGlobalBuffLists();
    }

    function processEffects(target, phase) {
        const list = ensureEffects(target);
        if (!list.length) return { skip: false };
        let skip = false;

        for (const eff of list) {
            if (eff.pending && eff.pending > 0) {
                eff.pending--;
                continue;
            }

            if (phase === "start") {
                if (["frozen", "stun", "sleep"].includes(eff.type)) {
                    skip = true;
                    notify(`${target.name} 因 ${eff.name} 無法行動（剩 ${eff.duration} 回合）`, "#ffd1d1");
                }
            } else if (phase === "end") {
                switch (eff.type) {
                    case "poison": {
                        const dmg = Math.round(target.maxHP * (eff.value / 100));
                        target.currentHP = Math.max(0, target.currentHP - dmg);
                        showDamageNumber(target === player ? "player" : "enemy", dmg);
                        notify(`${target.name} 因中毒受到 ${dmg} 傷害`, "#ffd1d1");
                        break;
                    }
                    case "burn": {
                        const dmg = Math.round(target.maxHP * (eff.value / 100));
                        target.currentHP = Math.max(0, target.currentHP - dmg);
                        showDamageNumber(target === player ? "player" : "enemy", dmg);
                        notify(`${target.name} 因燃燒受到 ${dmg} 傷害`, "#ffd1d1");
                        break;
                    }
                    case "regen": {
                        const heal = Math.round(target.maxHP * (eff.value / 100));
                        target.heal(heal);
                        notify(`${target.name} 再生回復 ${heal} HP`, "#d1ffd1");
                        break;
                    }
                }
                eff.duration--;
            }
        }

        for (let i = list.length - 1; i >= 0; i--) {
            if (list[i].duration <= 0) {
                notify(`${target.name} 的 ${list[i].name} 消失`, "#f5f5dc");
                list.splice(i, 1);
            }
        }

        linkGlobalBuffLists();
        return { skip };
    }


    function getEffectiveStats(target) {
        if (target === player) {
            const base = calculateStats(player);
            const list = ensureEffects(player);
            let atkAdd = 0, defAdd = 0;
            for (const s of list) {
                if (s.pending > 0) continue;
                if (s.type === "atk") atkAdd += s.isPercent ? Math.round(base.atk * (s.value / 100)) : s.value;
                if (s.type === "def") defAdd += s.isPercent ? Math.round(base.def * (s.value / 100)) : s.value;
            }
            return { ...base, atk: Math.max(0, base.atk + atkAdd), def: Math.max(0, base.def + defAdd) };
        } else {
            const e = target;
            const list = ensureEffects(e);
            let atk = e.atk, def = e.def;
            for (const s of list) {
                if (s.pending > 0) continue;
                if (s.type === "atk") atk += s.isPercent ? Math.round(e.atk * (s.value / 100)) : s.value;
                if (s.type === "def") def += s.isPercent ? Math.round(e.def * (s.value / 100)) : s.value;
            }
            return { atk: Math.max(0, atk), def: Math.max(0, def) };
        }
    }

    function attackEnemy(way = "", skillName = "") {
        if (player.currentHP <= 0) {
            notify("沒血還想戰鬥，回城鎮去。", "#ffd1d1");
            loadTown();
            return;
        }

        const enemy = window.currentEnemy;
        if (!enemy) return;

        if (!window.currentTurn) window.currentTurn = "player";
        if (!player.statusEffects) player.statusEffects = [];
        if (!enemy.statusEffects) enemy.statusEffects = [];

        function nextTurn() {
            if (enemy.currentHP <= 0) {
                checkTasks(enemy);
                showBattleResult(enemy);
                return;
            }
            if (player.currentHP <= 0) {
                showPlayerDeath(enemy);
                return;
            }

            let skipPlayer = false;
            let skipEnemy = false;

            if (window.currentTurn === "player") {
                skipPlayer = processEffects(player, "start").skip;
            } else {
                skipEnemy = processEffects(enemy, "start").skip;
            }

            updateBars();
            updateEnemyLabels();
            const stats = getEffectiveStats(player);
            const estats = getEffectiveStats(enemy);

            if (window.currentTurn === "player") {
                if (skipPlayer) {
                    notify(`${player.name} 無法行動。`, "#ffd1d1");
                    window.currentTurn = "enemy";
                    setTimeout(nextTurn, 500);
                    return;
                }

                if (way === "skill") {
                    const success = useSkill(skillName);
                    if (!success) return;
                    processEffects(enemy, "end");
                    updateBars();
                    updateEnemyLabels();
                    setBattleButtonsDisabled(true);
                    window.currentTurn = "enemy";
                    setTimeout(nextTurn, 600);
                    return;
                }

                parent.animateAttack("player", () => {
                    let dmg = Math.max(stats.atk - estats.def, 1);
                    enemy.currentHP = Math.max(enemy.currentHP - dmg, 0);
                    showDamageNumber("enemy", dmg);
                    notify(`造成 ${dmg} 傷害`, "#fff8d6");

                    if (enemy.currentHP <= 0) {
                        checkTasks(enemy);
                        showBattleResult(enemy);
                        return;
                    }

                    processEffects(enemy, "end");
                    updateBars();
                    updateEnemyLabels();

                    window.currentTurn = "enemy";
                    setTimeout(nextTurn, 500);
                });
            } else if (window.currentTurn === "enemy") {
                if (skipEnemy) {
                    notify(`${enemy.name} 無法行動`, "#fff8d6");
                    window.currentTurn = "player";
                    setBattleButtonsDisabled(false);
                    updateBars();
                    return;
                }

                parent.animateAttack("enemy", () => {
                    const enemyDamage = Math.max(estats.atk - stats.def, 1);
                    player.currentHP -= enemyDamage;
                    showDamageNumber("player", enemyDamage);
                    notify(`${enemy.name} 造成 ${enemyDamage} 傷害`, "#ffd1d1");

                    if (player.currentHP <= 0) {
                        showPlayerDeath(enemy);
                        return;
                    }

                    processEffects(player, "end");
                    updateBars();
                    updateEnemyLabels();

                    window.currentTurn = "player";
                    savePlayer();
                    setBattleButtonsDisabled(false);
                });
            }
        }

        nextTurn();
    }

    function setBattleButtonsDisabled(disabled) {
        const iframe = document.getElementById('gameFrame');
        if (!iframe) return;
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (!doc) return;

        const attackBtn = doc.getElementById('btnAttack');
        const runBtn = doc.getElementById('btnRun');

        if (attackBtn) attackBtn.disabled = disabled;
        if (runBtn) runBtn.disabled = disabled;

        const skillBtns = document.querySelectorAll('.battle-skill-btn');
        skillBtns.forEach(btn => {
            btn.disabled = disabled;
            btn.style.opacity = disabled ? '0.5' : '1';
            btn.style.cursor = disabled ? 'not-allowed' : 'pointer';
            btn.style.background = disabled ? '#222' : '#444';
        });
    }

    function showDamageNumber(target, damage) {
        const iframe = document.getElementById('gameFrame');
        if (!iframe) return;
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        const targetDiv = doc.querySelector(target === 'player' ? '.actor.player' : '.actor.enemy');
        if (!targetDiv) return;

        const dmgEl = doc.createElement('div');
        dmgEl.textContent = `-${damage}`;
        dmgEl.style.position = 'absolute';
        dmgEl.style.color = 'red';
        dmgEl.style.fontWeight = 'bold';
        dmgEl.style.fontSize = '24px';
        dmgEl.style.top = '-30px';
        dmgEl.style.left = '50%';
        dmgEl.style.transform = 'translateX(-50%)';
        dmgEl.style.opacity = 1;
        dmgEl.style.transition = 'transform 0.6s ease, opacity 0.6s ease';

        targetDiv.appendChild(dmgEl);

        setTimeout(() => {
            dmgEl.style.transform = 'translateX(-50%) translateY(-50px)';
            dmgEl.style.opacity = 0;
        }, 50);

        setTimeout(() => {
            dmgEl.remove();
        }, 650);
    }

    function checkTasks(enemy) {
        player.tasks.forEach(task => {
            if (task.status === '進行中' && task.name.includes(enemy.name)) {
                task.progress += 1;
                const targetTask = tasks.find(t => t.name === task.name);
                if (!targetTask) return;

                if (task.progress >= targetTask.count) {
                    task.status = '完成';
                    parent.notify(`任務完成：${task.name}`, "#d1ffd1");
                } else {
                    parent.notify(`任務進度：${task.name} (${task.progress}/${targetTask.count})`, "#fff8d6");
                }

                savePlayer();
            }
        });
    }



    function getRandomDrop(enemy) {
        if (!enemy.drops || enemy.drops.length === 0) return null;
        if (Math.random() < 0.5) return null;

        const weightedPool = [];

        for (const name of enemy.drops) {
            if (skillDatabase[name]) {
                weightedPool.push({
                    name,
                    type: "skillBook",
                    data: skillDatabase[name],
                    weight: skillDatabase[name].rate || 1
                });
            } else if (itemDatabase[name]) {
                weightedPool.push({
                    name,
                    type: "item",
                    data: itemDatabase[name],
                    weight: itemDatabase[name].rate || 1
                });
            } else {
                console.warn(`找不到掉落項目：${name}`);
            }
        }

        if (weightedPool.length === 0) return null;

        const totalWeight = weightedPool.reduce((sum, e) => sum + e.weight, 0);
        let roll = Math.random() * totalWeight;

        for (const entry of weightedPool) {
            roll -= entry.weight;
            if (roll <= 0) {
                if (entry.type === "skillBook") {
                    const skill = entry.data;
                    const item = {
                        name: skill.name + "書",
                        type: "skillBook",
                        price: skill.price,
                        skillRef: skill.name
                    };
                    player.addItem(item);
                    return item;
                } else if (entry.type === "item") {
                    const item = { ...entry.data };
                    player.addItem(item);
                    return item;
                }
            }
        }

        return null;
    }

    function resetBattleState() {
        window.currentTurn = null;
        pBuffs = [];
        eBuffs = [];
        player.statusEffects = [];
        if (window.currentEnemy) window.currentEnemy.statusEffects = [];
        setBattleButtonsDisabled(false);
    }



    function showPlayerDeath(enemy) {
        const iframe = document.getElementById('gameFrame');
        resetBattleState();
        player.currentHP = calculateStats(player).maxHP;

        iframe.srcdoc = `
    <html>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body style="font-family:sans-serif; text-align:center; background:#ffd1d1; min-height:100vh;">
            <div class="container">
                <h1>你被 ${enemy.name} 擊敗了</h1>
                <p>回城鎮再練練吧</p>
                <button class="btn btn-primary" onclick="parent.loadTown()">返回城鎮</button>
            </div>
        </body>
    </html>`;
        window.currentEnemy = null;
        updateBars();
    }

    function showBattleResult(enemy) {
        const iframe = document.getElementById('gameFrame');
        const stats = calculateStats(player);

        const expGain = Math.round(enemy.rewardExp);
        const gold = Math.floor(Math.random() * (enemy.rewardCoin[1] - enemy.rewardCoin[0] + 1)) + enemy.rewardCoin[0];
        const goldGain = Math.round(gold * stats.coinRate);

        player.gainExp(expGain);
        player.coin += goldGain;

        const drop = getRandomDrop(enemy, stats.dropRate);
        const dropItem = drop ? drop.name : null;

        savePlayer();
        resetBattleState();

        iframe.srcdoc = `
    <html>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body style="font-family:sans-serif; text-align:center; background:#d1ffd1; min-height:100vh;">
            <div class="container">
                <h1>戰鬥勝利</h1>
                <p>你擊敗了 <strong>${enemy.name}</strong></p>
                <p>獲得經驗值：<strong>${expGain}</strong></p>
                <p>獲得金幣：<strong>${goldGain}</strong></p>
                ${dropItem ? `<p>掉落物品：<strong>${dropItem}</strong></p>` : `<p>沒有掉落物品</p>`}
                <div class="fixed-bottom p-3 d-flex justify-content-center border-top" style="background:#d1ffd1">
                    <button class="btn btn-outline-primary me-3" onclick="parent.loadBattle(true)">繼續探索</button>
                    <button class="btn btn-outline-success me-3" onclick="parent.loadInventory()">物品欄</button>
                    <button class="btn btn-primary" onclick="parent.loadTown()">返回城鎮</button>
                </div>
            </div>
        </body>
    </html>`;

        window.currentEnemy = null;
        updateBars();
    }

    function runFromBattle() {
        window.currentEnemy = null;
        loadTown();
    }


    function loadBattle(newEncounter = false) {
        pauseTrainingOnSceneChange();
        const iframe = document.getElementById('gameFrame');
        let enemy = window.currentEnemy;

        if (newEncounter || !enemy) {
            const rand = Math.random();
            if (rand < 0.7) {
                enemy = generateEnemy();
                window.currentEnemy = enemy;
            } else if (rand < 0.9) {
                const gold = Math.floor(Math.random() * 50) + 10;
                player.coin += gold;
                savePlayer();
                iframe.srcdoc = `
            <html>
                <head>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
                </head>
                <body style="font-family:sans-serif; text-align:center; background:#fff0f5; min-height:100vh;">
                    <div class="container">
                        <h1>你找到一個寶箱</h1>
                        <p>獲得 ${gold} 金幣</p>
                        <div class="fixed-bottom p-3 d-flex justify-content-center border-top" style="background:#fff0f5">
                            <button class="btn btn-outline-primary me-3" onclick="parent.loadBattle(true)">繼續探索</button>
                            <button class="btn btn-outline-success me-3" onclick="parent.loadInventory()">物品欄</button>
                            <button class="btn btn-primary" onclick="parent.loadTown()">返回城鎮</button>
                        </div>
                    </div>
                </body>
            </html>`;
                updateBars();
                return;
            } else {
                const damage = Math.floor(Math.random() * 10) + 5;
                player.currentHP = Math.max(0, player.currentHP - damage);
                savePlayer();
                iframe.srcdoc = `
            <html>
                <head>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
                </head>
                <body style="font-family:sans-serif; text-align:center; background:#f0e68c; min-height:100vh;">
                    <div class="container">
                        <h1>你踩到陷阱</h1>
                        <p>受到 ${damage} 點傷害</p>
                        <div class="fixed-bottom p-3 d-flex justify-content-center border-top" style="background:#f0e68c;">
                            <button class="btn btn-outline-primary me-3" onclick="parent.loadBattle(true)">繼續探索</button>
                            <button class="btn btn-outline-success me-3" onclick="parent.loadInventory()">物品欄</button>
                            <button class="btn btn-primary" onclick="parent.loadTown()">返回城鎮</button>
                        </div>
                    </div>
                </body>
            </html>`;
                updateBars();
                return;
            }
        }

        const content = `
<h1>遭遇敵人：${enemy.name}</h1>
<p id="enemy_lvl">敵人 等級：${enemy.lvl}</p>
<p id="enemy_hp">敵人 HP：${enemy.currentHP}</p>
<p id="enemy_atk">敵人 攻擊力：${enemy.atk}</p>
<p id="enemy_def">敵人 防禦力：${enemy.def}</p>
<div id="img_atk" style="
  position:absolute;
  top:50%;
  left:0;
  right:0;
  transform:translateY(-50%);
  height:200px;
  z-index:9999;
  overflow:visible;
  pointer-events:none;
">
  <div class="actor player" style="
    position:absolute;
    left:0;
    top:50%;
    transform:translateY(-50%);
  ">
    <img id="playerImg" src="${player.img}" style="
      display:block;
      width:150px;
      transition: transform 0.28s ease;
      transform: translateX(0);
      ">
  </div>
  <div class="actor enemy" style="
      position:absolute;
      right:0;
      top:50%;
      transform:translateY(-50%);
      ">
      <img id="enemyImg" src="${enemy.img}" style="
      display:block;
      height:150px;
      width:150px;
      transition: transform 0.28s ease;
      transform: translateX(0);
    ">
  </div>
</div>
<div class="fixed-bottom p-3 d-flex justify-content-center border-top" 
  style="background:#f0e68c; z-index:2000;">
  <button class="btn btn-danger me-3" id="btnAttack" onclick="parent.attackEnemy()">攻擊</button>
  <button class="btn btn-outline-success me-3" onclick="parent.loadInventory()">物品欄</button>
  <button class="btn btn-secondary me-3" id="btnRun" onclick="parent.runFromBattle()">逃跑</button>
</div>
`;

        iframe.srcdoc = `
        <html>
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
            </head>
            <body style="font-family:sans-serif; text-align:center; background:#f0e68c; min-height:100vh;">
                <div class="container">${content}</div>
            </body>
        </html>`;
        updateBars();
    }


    document.getElementById("cleardataBtn").onclick = cleardata;

    function cleardata() {
        localStorage.removeItem('playerData');
        location = '';
    }

    function savePlayer() {
        const data = {
            currentHP: player.currentHP,
            maxHP: player.maxHP,
            currentMP: player.currentMP,
            maxMP: player.maxMP,
            exp: player.exp,
            maxExp: player.maxExp,
            lvl: player.lvl,
            atk: player.atk,
            def: player.def,
            coin: player.coin,
            tasks: player.tasks,
            inventory: player.inventory,
            equipment: {
                weapon: player.equipment.weapon,
                armor: player.equipment.armor
            },
            talentSlots: player.talentSlots || [],
            statPoints: player.statPoints,
            totalStatPoints: player.totalStatPoints,
            statBonus: player.statBonus,
            skills: player.skills.map(skill => ({
                name: skill.name,
                lvl: skill.lvl || 1
            })),
            equipSkills: player.equipSkills || []
        };
        localStorage.setItem('playerData', JSON.stringify(data));
    }

    function loadPlayer() {
        const data = JSON.parse(localStorage.getItem('playerData'));
        if (data) {
            player.currentHP = data.currentHP ?? player.currentHP;
            player.maxHP = data.maxHP ?? player.maxHP;
            player.currentMP = data.currentMP ?? player.currentMP;
            player.maxMP = data.maxMP ?? player.maxMP;
            player.exp = data.exp ?? player.exp;
            player.maxExp = data.maxExp ?? player.maxExp;
            player.lvl = data.lvl ?? player.lvl;
            player.atk = data.atk ?? player.atk;
            player.def = data.def ?? player.def;
            player.tasks = data.tasks || [];
            player.coin = data.coin ?? player.coin;
            player.inventory = data.inventory || player.inventory || [];
            if (data.equipment) player.equipment = data.equipment;
            player.talentSlots = data.talentSlots || [];
            player.statPoints = data.statPoints ?? player.statPoints;
            player.totalStatPoints = data.totalStatPoints ?? player.totalStatPoints;
            player.statBonus = data.statBonus || { atk: 0, def: 0, hp: 0, mp: 0 };
            player.skills = (data.skills || []).map(skill => ({
                name: skill.name,
                lvl: skill.lvl || 1
            }));
            player.equipSkills = data.equipSkills || [];
        }
        updateBars();
    }

    // 主遊戲初始化
    console.log(player);
    loadPlayer();
    loadTown();
    loadBattleSkillBar();
    // player.addItem({name:"鐵劍"})
}

function login_html() {


    const days = ['一', '二', '三', '四', '五', '六', '日'];
    const periods = 8;
    document.getElementById('main').style.display = 'none';
    document.getElementById('sign_up').style.display = 'none';
    function getUsers() { return JSON.parse(localStorage.getItem('users') || '{}'); }
    function saveUsers(obj) { localStorage.setItem('users', JSON.stringify(obj)); }

    function getLogin() { return JSON.parse(localStorage.getItem('data') || '{}'); }
    function setLogin(acc) { localStorage.setItem('data', JSON.stringify({ acc })); }
    function clearLogin() { localStorage.removeItem('data'); }

    function login() {
        const acc = document.getElementById('login_acc').value.trim();
        const ps = document.getElementById('login_ps').value.trim();
        const users = getUsers();
        if (!users[acc] || users[acc].ps !== ps) {
            alert('帳號或密碼錯誤');
            return;
        }
        users[acc].logintime = new Date().toLocaleString();
        saveUsers(users);
        setLogin(acc);
        checkdata();
    }

    function sign_up() {
        const acc = document.getElementById('signup_acc').value.trim();
        const ps = document.getElementById('signup_ps').value.trim();
        const users = getUsers();
        if (acc === '' || ps === '') {
            alert('欄位不能為空');
            return;
        }
        if (users[acc]) {
            alert('帳號已存在');
            return;
        }
        users[acc] = { ps, logintime: '', timetable: {} };
        saveUsers(users);
        alert('註冊成功，請登入');
        showLogin();
    }

    function clearsession() {
        clearLogin();
        location.reload();
    }

    function checkdata() {
        const login = getLogin();
        const acc = login.acc;
        if (acc) {
            document.getElementById('login').style.display = 'none';
            document.getElementById('sign_up').style.display = 'none';
            document.getElementById('main').style.display = 'block';
            const users = getUsers();
            document.getElementById('user').textContent = acc;
            document.getElementById('logintime').textContent = users[acc].logintime || '尚未記錄';
            initTimetable();
        } else {
            showLogin();
        }
    }

    function showLogin() {
        document.getElementById('login').style.display = 'block';
        document.getElementById('sign_up').style.display = 'none';
        document.getElementById('main').style.display = 'none';
    }

    function showSignup() {
        document.getElementById('login').style.display = 'none';
        document.getElementById('sign_up').style.display = 'block';
        document.getElementById('main').style.display = 'none';
    }

    function loadTT() {
        const login = getLogin();
        const users = getUsers();
        return users[login.acc].timetable || {};
    }

    function saveTT(obj) {
        const login = getLogin();
        const users = getUsers();
        users[login.acc].timetable = obj;
        saveUsers(users);
    }

    function buildTimetable() {
        const data = loadTT();
        const tb = document.getElementById('timetable');
        tb.innerHTML = '';

        tb.insertAdjacentHTML('beforeend', `
        <thead><tr>
            <th style="width:70px">節次</th>
            ${days.map(d => `<th>${d}</th>`).join('')}
        </tr></thead>
    `);

        const tbody = document.createElement('tbody');
        for (let p = 1; p <= periods; p++) {
            const tr = document.createElement('tr');
            tr.insertAdjacentHTML('beforeend', `<th>${p}</th>`);

            for (let d = 0; d < days.length; d++) {
                const key = `${d}-${p}`;
                const td = document.createElement('td');
                td.dataset.d = d;
                td.dataset.p = p;
                td.style.minWidth = '120px';
                td.style.cursor = 'text';
                if (data[key] && data[key].trim() !== '') td.style.backgroundColor = '#E6F0FF';
                td.textContent = data[key] || '';

                td.addEventListener('click', () => {
                    const cur = td.textContent;
                    const v = prompt(`填入課程(${days[d]} 第${p}節)`, cur);
                    if (v === null) return;
                    const s = v.trim();
                    const obj = loadTT();
                    if (s) obj[key] = s;
                    else delete obj[key];
                    saveTT(obj);
                    td.textContent = s;
                    td.style.backgroundColor = s ? '#E6F0FF' : '';
                });

                td.addEventListener('contextmenu', e => {
                    e.preventDefault();
                    const obj = loadTT();
                    delete obj[key];
                    saveTT(obj);
                    td.textContent = '';
                    td.style.backgroundColor = '';
                });

                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        tb.appendChild(tbody);
    }

    function initTimetableUI() {
        const oldBtn = document.getElementById('clearTT');
        const newBtn = oldBtn.cloneNode(true);
        oldBtn.replaceWith(newBtn);
        newBtn.addEventListener('click', () => {
            if (confirm('確定清空整張課表？')) {
                saveTT({});
                buildTimetable();
            }
        });
    }

    function initTimetable() {
        initTimetableUI();
        buildTimetable();
    }


    document.getElementById('loginBtn').addEventListener('click', login);
    document.getElementById('signupBtn').addEventListener('click', sign_up);
    document.getElementById('logoutBtn').addEventListener('click', clearsession);

    document.getElementById('goSignup').addEventListener('click', showSignup);
    document.getElementById('goLogin').addEventListener('click', showLogin);

    document.getElementById('loginClear').addEventListener('click', () => {
        document.getElementById('login_acc').value = '';
        document.getElementById('login_ps').value = '';
    });

    document.getElementById('signupClear').addEventListener('click', () => {
        document.getElementById('signup_acc').value = '';
        document.getElementById('signup_ps').value = '';
    });

    checkdata();

}
function jstest() {
    const iframe = document.getElementById('pv');
    const ta = document.getElementById('input');
    const pos = document.getElementById('pos');
    const btnTable1 = document.getElementById('table1');
    const btnClear = document.getElementById('cleartb');
    const fullHTML = document.documentElement.outerHTML;

    function render() {
        iframe.srcdoc = ta.value;
    }

    function updatePos() {
        pos.textContent = ta.selectionStart ?? 0;
    }

    btnTable1.addEventListener('click', () => {
        ta.value = fullHTML;
        render();
        updatePos();
    });

    btnClear.addEventListener('click', () => {
        ta.value = '';
        render();
        updatePos();
    });

    ta.addEventListener('input', () => { render(); updatePos(); });
    ta.addEventListener('click', updatePos);
    ta.addEventListener('keyup', updatePos);

    window.ob = function (btn) {
        const el = ta;
        const start = el.selectionStart ?? 0;
        const end = el.selectionEnd ?? start;
        const text = ta.value ?? '';
        const label = (btn.innerText || '').trim();

        const htmlTags = ['input', 'div', 'button', 'label', 'style', 'script', 'form'];
        const cssProps = ['background-color'];

        let res = '';
        if (htmlTags.includes(label)) {
            switch (label) {
                case 'input': res = `<input type="text" class="">`; break;
                case 'div': res = `<div class="">內容</div>`; break;
                case 'button': res = `<button type="button" class="">按鈕</button>`; break;
                case 'label': res = `<label class="">標籤</label>`; break;
                case 'style': res = `<style>\n\n</style>`; break;
                case 'script': res = `<script>\n\n</script>`; break;
                case 'form': res = `<form action="" method="get">\n  \n</form>`; break;
            }
        } else if (cssProps.includes(label)) {
            res = `${label}: ;`;
        } else {
            return;
        }

        const newText = text.slice(0, start) + res + text.slice(end);
        ta.value = newText;

        const caret = start + res.length;
        el.selectionStart = caret;
        el.selectionEnd = caret;
        el.focus();

        render();
        updatePos();
    };

    const ids = ['ob1', 'ob2', 'ob3', 'ob4', 'ob5', 'ob6', 'ob7'];
    ids.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener('click', () => window.ob(btn));
    });

    render();
    updatePos();
}

function test12() {

    var c = document.getElementById('canvas')
    var ctx = c.getContext("2d")
    const actions = [];
    let replayIndex = -1;

    function updateResult() {
        result.innerHTML = "";
        actions.forEach(v => {
            let line = v.type + " ";
            if (v.color) line += v.color + " ";
            if (v.txt) line += v.txt + " ";
            if (v.value) line += Object.values(v.value).join(" ") + " ";
            result.innerHTML += line + "\n";
        });
        replayIndex = actions.length - 1;
    }



    // c.getContext("2d")
    function clearDraw() {
        ctx.clearRect(0, 0, 200, 200);
        actions.clear()
    }

    function circle() {
        let data = document.getElementById('input2').value
        let color = document.getElementById('input3').value
        console.log(data);

        ctx.beginPath();
        let [x, y, r, start] = data.split(" ").map(Number);

        ctx.arc(x, y, r, start, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
        if (replayIndex < actions.length - 1) {
            actions.splice(replayIndex + 1);
        }
        actions.push({ type: "circle", color: color, value: { x, y, r, start } })
        updateResult()
    }
    function text() {
        value = document.getElementById('input1').value
        color = document.getElementById('input0').value
        xy = document.getElementById('input1_xy').value

        let [x, y] = xy.split(" ").map(Number)
        ctx.font = "15px Arial"
        ctx.fillStyle = color
        ctx.fillText(value, x, y)
        if (replayIndex < actions.length - 1) {
            actions.splice(replayIndex + 1);
        }
        actions.push({ type: "text", color: color, value: { x, y }, txt: value })
        updateResult()

    }

    function rectDraw() {
        let data = document.getElementById('input4').value;
        let color = document.getElementById('input5').value;
        let [x, y, w, h] = data.split(" ").map(Number);

        ctx.globalAlpha = 0.5;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
        ctx.globalAlpha = 1.0;
        if (replayIndex < actions.length - 1) {
            actions.splice(replayIndex + 1);
        }
        actions.push({ type: "rect", color: color, value: { x, y, w, h } })
        updateResult()
    }

    // function changeColorRect() {
    //     var grd = ctx.createLinearGradient(0, 0, 200, 0)
    //     grd.addColorStop(0, "pink")
    //     grd.addColorStop(0.5, "white")
    //     grd.addColorStop(1, "blue")

    //     ctx.fillStyle = grd
    //     ctx.fillRect(0, 10, 150, 80)
    // }
    console.log(c);

    function drawline() {
        let data = document.getElementById('input6').value;
        let [x1, y1, x2, y2] = data.split(" ").map(Number);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        if (replayIndex < actions.length - 1) {
            actions.splice(replayIndex + 1);
        }
        actions.push({ type: "line", value: { x1, y1, x2, y2 } })
        updateResult()

    }

    const circleBtn = document.getElementById('circle');
    const rectDrawBtn = document.getElementById('rectDraw');
    const textBtn = document.getElementById('text');
    const clearDrawBtn = document.getElementById('clearDraw');
    // const changeColorRectBtn = document.getElementById('changeColorRect');
    const drawlineBtn = document.getElementById('drawline');
    circleBtn.addEventListener("click", () => circle());
    rectDrawBtn.addEventListener("click", () => rectDraw());
    textBtn.addEventListener("click", () => text());
    clearDrawBtn.addEventListener("click", () => clearDraw());
    // changeColorRectBtn.addEventListener("click", () => changeColorRect());
    drawlineBtn.addEventListener("click", () => drawline());

    function clearDraw() {
        ctx.clearRect(0, 0, c.width, c.height);
        actions.length = 0;
        replayIndex = -1;
        result.innerHTML = "";
    }



    function replayStep() {
        ctx.clearRect(0, 0, c.width, c.height);
        result.innerHTML = "";

        if (replayIndex < 0) return;

        actions.slice(0, replayIndex + 1).forEach(act => {
            switch (act.type) {
                case "circle":
                    ctx.beginPath();
                    ctx.arc(act.value.x, act.value.y, act.value.r, act.value.start, 2 * Math.PI);
                    ctx.fillStyle = act.color;
                    ctx.fill();
                    ctx.stroke();
                    break;
                case "rect":
                    ctx.globalAlpha = 0.5;
                    ctx.fillStyle = act.color;
                    ctx.fillRect(act.value.x, act.value.y, act.value.w, act.value.h);
                    ctx.globalAlpha = 1.0;
                    break;
                case "text":
                    ctx.fillStyle = act.color;
                    ctx.font = "15px Arial";
                    ctx.fillText(act.txt, act.value.x, act.value.y);
                    break;
                case "line":
                    ctx.beginPath();
                    ctx.moveTo(act.value.x1, act.value.y1);
                    ctx.lineTo(act.value.x2, act.value.y2);
                    ctx.stroke();
                    break;
                case "sprite":
                    drawSprite(act.sprite, act.startX, act.startY, act.pixelSize, act.palette, false);
                    break;
            }

            let line = act.type + " ";
            if (act.color) line += act.color + " ";
            if (act.txt) line += act.txt + " ";
            if (act.value) line += Object.values(act.value).join(" ") + " ";
            result.innerHTML += line + "\n";
        });
    }

    function prevStep() {
        replayIndex--;
        if (replayIndex < -1) replayIndex = -1;
        replayStep();
    }

    function nextStep() {
        if (replayIndex < actions.length - 1) {
            replayIndex++;
            replayStep();
        }
    }
    document.getElementById('prevStepBtn').addEventListener('click', prevStep);
    document.getElementById('nextStepBtn').addEventListener('click', nextStep);

    function drawSprite(sprite, startX, startY, pixelSize, palette, record = true) {
        for (let y = 0; y < sprite.length; y++) {
            for (let x = 0; x < sprite[y].length; x++) {
                const colorIndex = sprite[y][x];
                if (colorIndex !== "0") {
                    ctx.fillStyle = palette[colorIndex];
                    ctx.fillRect(startX + x * pixelSize, startY + y * pixelSize, pixelSize, pixelSize);
                }
            }
        }
        if (record) {
            actions.push({
                type: "sprite",
                sprite,
                startX,
                startY,
                pixelSize,
                palette
            });
            updateResult();
        }
    }

    const catSprite = [
        "0110000000000110",
        "0151100000001100",
        "0015111111111100",
        "0115555555555100",
        "0155345553455100",
        "1555335553355510",
        "1555555555555510",
        "1553355555335510",
        "0115555555511100",
        "0011111111111000",
        "0000011111100000",
        "0100115555110000",
        "0155155555551000",
        "0011555555551000",
        "0000111111110000",
        "0000000000000000"
    ];

    const catPalette = {
        "1": "#b8b8c0",
        "2": "#ff9eb8",
        "3": "#303038",
        "4": "white",
        "5": "#d4d4db",
    };

    const goblinSprite = [
        "4440044444440444",
        "4114411111114114",
        "0411111111111140",
        "0041131111311400",
        "0041111111111400",
        "0004113331114000",
        "0000411111140000",
        "0000041111400000",
        "0000411111540000",
        "0004041155104000",
        "0000041115500400",
        "0000041155400000",
        "0000041441140000",
        "0000411404414000",
        "0000044000440000",
        "0000000000000000"
    ];

    const goblinPalette = {
        "1": "#7ecf5f",
        "3": "#111111",
        "4": "#4aa341",
        "5": "#8b5a2b"
    };

    const skeletonSprite = [
        "0000444444400000",
        "0004222222240000",
        "0042222222224000",
        "0422322222322400",
        "0422222322222400",
        "0422222222222400",
        "0044222222444000",
        "0000433333400000",
        "0000444444000000",
        "0000442222440000",
        "0004041111404000",
        "0000042222400000",
        "0000041441140000",
        "0000411404414000",
        "0000044000440000",
        "0000000000000000"
    ];

    const skeletonPalette = {
        "1": "#f2f2f2",
        "2": "#d6d6d6",
        "3": "black",
        "4": "#8a8a8a",
    };

    const oakSprite = [
        "0000011111100000",
        "0000122222220000",
        "0001222222221000",
        "0012223332222100",
        "0012233333322100",
        "0122233333332210",
        "0122223333222210",
        "0122222222222210",
        "0012222222222100",
        "0001222222221000",
        "0000014444100000",
        "0000014554100000",
        "0000014554100000",
        "0000014554100000",
        "0000014444100000",
        "0000000000000000"
    ];

    const oakPalette = {
        "1": "#9fe07a",
        "2": "#6fba55",
        "3": "#3f7b2a",
        "4": "#b07a49",
        "5": "#875736"
    };

    function drawGrassBase() {
        const W = ctx.canvas.width;
        const H = ctx.canvas.height;

        const grad = ctx.createLinearGradient(0, 0, 0, H);
        grad.addColorStop(0, "#6fbf4b");
        grad.addColorStop(1, "#5f7f4f");

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
    }

    drawGrassBase();

    drawSprite(oakSprite, 400, 50, 6, oakPalette);
    drawSprite(oakSprite, 450, 150, 6, oakPalette);
    drawSprite(oakSprite, 100, 20, 6, oakPalette);
    drawSprite(oakSprite, 270, 10, 6, oakPalette);

    drawSprite(catSprite, 100, 150, 6, catPalette);
    drawSprite(goblinSprite, 300, 150, 6, goblinPalette);
    drawSprite(skeletonSprite, 250, 50, 6, skeletonPalette);


    const x = 260, y = 225, r = 26, offsetX = 50, offsetY = 20;
    const cx = x + offsetX;
    const cy = y + offsetY;

    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(120,220,255,0.80)";
    ctx.fill();
    ctx.stroke();
    actions.push({ type: "arc", color: "rgba(120,220,255,0.80)", value: { x: cx, y: cy, r } });

    ctx.beginPath();
    ctx.arc(cx + 15, cy - 10, 4, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    actions.push({ type: "arc", color: "white", value: { x: cx + 15, y: cy - 10, r: 4 } });

    ctx.beginPath();
    ctx.arc(cx + 9, cy - 15, 3, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    actions.push({ type: "arc", color: "white", value: { x: cx + 9, y: cy - 15, r: 3 } });

    ctx.beginPath();
    ctx.arc(cx - 10, cy + 1, 5, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    actions.push({ type: "arc", color: "black", value: { x: cx - 10, y: cy + 1, r: 5 } });

    ctx.beginPath();
    ctx.arc(cx - 12, cy + 1, 3, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    actions.push({ type: "arc", color: "white", value: { x: cx - 12, y: cy + 1, r: 3 } });

    ctx.beginPath();
    ctx.arc(cx + 5, cy + 1, 5, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
    actions.push({ type: "arc", color: "black", value: { x: cx + 5, y: cy + 1, r: 5 } });

    ctx.beginPath();
    ctx.arc(cx + 3, cy + 1, 3, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    actions.push({ type: "arc", color: "white", value: { x: cx + 3, y: cy + 1, r: 3 } });
    updateResult()

    document.getElementById('input1').value = "貓咪打怪物"
    document.getElementById('input0').value = "black"
    document.getElementById('input1_xy').value = "10 20"

    text()

}
function test11() {
    const images = ['小丑1.png', '小丑2.png', '烏一一阿一.png', '史萊姆.png', '哥布林.png', '骷髏頭.png'];
    let index = 0;

    const titleEl = document.getElementById('title');
    const imgEl = document.getElementById('img');
    const nameEl = document.getElementById('name');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    function updateDisplay() {
        titleEl.innerText = index + 1;
        imgEl.src = "../img/" + images[index];
        nameEl.innerText = images[index];
    }

    function prev() {
        index--;
        if (index < 0) index = images.length - 1;
        updateDisplay();
    }

    function next() {
        index++;
        if (index >= images.length) index = 0;
        updateDisplay();
    }


    updateDisplay();
    nextBtn.addEventListener("click", () => next());
    prevBtn.addEventListener("click", () => prev());

}
function test10() {
    const table = document.getElementById("tb");
    function width(value) {
        table.style.width = value + "px";
    }

    function border(value) {
        table.style.borderSpacing = value + "px";
    }

    function color(value) {
        table.style.backgroundColor = value;
    }

    function reset_tb() {
        table.style.width = "";
        table.style.borderSpacing = "";
        table.style.backgroundColor = "";
    }

    const width1 = document.getElementById("width1");
    const width2 = document.getElementById("width2");
    const border1 = document.getElementById("border1");
    const border2 = document.getElementById("border2");
    const border3 = document.getElementById("border3");
    const color1 = document.getElementById("color1");
    const color2 = document.getElementById("color2");
    const color3 = document.getElementById("color3");
    const resetBtn = document.getElementById("reset_tb");

    if (width1) width1.addEventListener("click", () => width(200));
    if (width2) width2.addEventListener("click", () => width(500));

    if (border1) border1.addEventListener("click", () => border(1));
    if (border2) border2.addEventListener("click", () => border(10));
    if (border3) border3.addEventListener("click", () => border(20));

    if (color1) color1.addEventListener("click", () => color("aqua"));
    if (color2) color2.addEventListener("click", () => color("gray"));
    if (color3) color3.addEventListener("click", () => color("greenyellow"));

    if (resetBtn) resetBtn.addEventListener("click", reset_tb);

}
function test9() {
    html = "<table class='table'>"

    for (let j = 1; j < 10; j++) {
        html += "<tr>"
        for (let i = 2; i < 10; i++) {
            html += "<td>" + i + "*" + j + "=" + i * j + "    </td>"

        }
        html += "</tr>"
    }
    html += "</table>"

    document.getElementById("test9").innerHTML = html;
}
function fa() {
    const num = [
        ['147', '258', '369'],
        ['123', '456', '789'],
        ['159', '357']
    ];
    const title = ["直線", "橫線", "斜直線"];
    let rd = 0;
    let count = 3;

    const blocks = Array.from(document.querySelectorAll(".block"));
    const checkBtn = document.getElementById("check");
    const targetEl = document.getElementById("target");

    function rand() {
        rd = Math.floor(Math.random() * 3);
        if (targetEl) targetEl.textContent = title[rd];
    }

    function check() {
        const arr = blocks
            .filter(b => b.classList.contains("btn-warning"))
            .map(b => b.id)
            .sort();

        if (num[rd].includes(arr.join(''))) {
            alert('你成功了,回去首頁吧');
            location.replace('index.html');
        } else {
            count--;
            if (count <= 0) {
                alert('太糟糕了，回去首頁吧!');
                location.replace('index.html');
            } else {
                alert(`驗證錯誤!剩餘${count}機會`);
            }
        }
    }

    blocks.forEach(block => {
        block.addEventListener("click", () => {
            block.classList.toggle("btn-warning");
            block.classList.toggle("btn-outline-secondary");
        });
    });

    if (checkBtn) checkBtn.addEventListener("click", check);

    rand();
}

