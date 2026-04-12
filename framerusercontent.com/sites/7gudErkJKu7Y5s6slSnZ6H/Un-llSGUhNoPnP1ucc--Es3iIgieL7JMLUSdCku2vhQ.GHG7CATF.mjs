import "./chunk-42U43NKG.mjs";
import {
  A as ft,
  Aa as me,
  B as dt,
  Ba as H,
  C as pt,
  Ca as _t,
  Da as Ve,
  Ea as St,
  J as mt,
  M as ut,
  R as ht,
  S as ne,
  U as l,
  X as Se,
  Z as je,
  _ as gt,
  aa as xt,
  b as ve,
  c as p,
  ca as Ce,
  e as Fe,
  g as it,
  ga as fe,
  ia as yt,
  ja as de,
  k as ae,
  ka as pe,
  la as bt,
  m as R,
  n as st,
  o as lt,
  oa as wt,
  p as W,
  pa as B,
  q as Y,
  r as _e,
  sa as vt,
  t as e,
  u as b,
  v as Ie,
  wa as ke,
  x as ce,
  xa as v,
  y as z,
  ya as h,
  z as ct,
} from "./chunk-LNSS7WKB.mjs";
import { a as Ct } from "./chunk-UWL5TKOR.mjs";
import "./chunk-HZL4YIMB.mjs";
import { b as y, c as d } from "./chunk-A3IIQ6X3.mjs";
var ue = (t) => t;
var Ae = { ms: (t) => 1e3 * t, s: (t) => t / 1e3 };
function Oe(t, r) {
  return r ? t * (1e3 / r) : 0;
}
var kt = (t, r, n) =>
    (((1 - 3 * n + 3 * r) * t + (3 * n - 6 * r)) * t + 3 * r) * t,
  dr = 1e-7,
  pr = 12;
function mr(t, r, n, a, o) {
  let i,
    s,
    u = 0;
  do ((s = r + (n - r) / 2), (i = kt(s, a, o) - t), i > 0 ? (n = s) : (r = s));
  while (Math.abs(i) > dr && ++u < pr);
  return s;
}
function he(t, r, n, a) {
  if (t === r && n === a) return ue;
  let o = (i) => mr(i, 0, 1, t, n);
  return (i) => (i === 0 || i === 1 ? i : kt(o(i), r, a));
}
var on = {
  ease: he(0.25, 0.1, 0.25, 1),
  "ease-in": he(0.42, 0, 1, 1),
  "ease-in-out": he(0.42, 0, 0.58, 1),
  "ease-out": he(0, 0, 0.58, 1),
};
function At(t, r) {
  var n = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) &&
      r.indexOf(a) < 0 &&
      (n[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    var o = 0;
    for (a = Object.getOwnPropertySymbols(t); o < a.length; o++)
      r.indexOf(a[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, a[o]) &&
        (n[a[o]] = t[a[o]]);
  }
  return n;
}
var oe = {};
Object.defineProperty(oe, "__esModule", { value: !0 });
oe.warning = function () {};
oe.invariant = function () {};
var dn = oe.__esModule,
  pn = oe.warning,
  yr = oe.invariant;
var br = 5;
function Ye(t, r, n) {
  let a = Math.max(r - br, 0);
  return Oe(n - t(a), r - a);
}
var ie = { stiffness: 100, damping: 10, mass: 1 },
  wr = (t = ie.stiffness, r = ie.damping, n = ie.mass) =>
    r / (2 * Math.sqrt(t * n));
function vr(t, r, n) {
  return (t < r && n >= r) || (t > r && n <= r);
}
var We = ({
    stiffness: t = ie.stiffness,
    damping: r = ie.damping,
    mass: n = ie.mass,
    from: a = 0,
    to: o = 1,
    velocity: i = 0,
    restSpeed: s = 2,
    restDistance: u = 0.5,
  } = {}) => {
    i = i ? Ae.s(i) : 0;
    let m = { done: !1, hasReachedTarget: !1, current: a, target: o },
      g = o - a,
      f = Math.sqrt(t / n) / 1e3,
      c = wr(t, r, n),
      A;
    if (c < 1) {
      let S = f * Math.sqrt(1 - c * c);
      A = (C) =>
        o -
        Math.exp(-c * f * C) *
          (((c * f * g - i) / S) * Math.sin(S * C) + g * Math.cos(S * C));
    } else A = (S) => o - Math.exp(-f * S) * (g + (f * g - i) * S);
    return (S) => {
      m.current = A(S);
      let C = S === 0 ? i : Ye(A, S, m.current),
        V = Math.abs(C) <= s,
        T = Math.abs(o - m.current) <= u;
      return ((m.done = V && T), (m.hasReachedTarget = vr(a, o, m.current)), m);
    };
  },
  Yt = ({
    from: t = 0,
    velocity: r = 0,
    power: n = 0.8,
    decay: a = 0.325,
    bounceDamping: o,
    bounceStiffness: i,
    changeTarget: s,
    min: u,
    max: m,
    restDistance: g = 0.5,
    restSpeed: f,
  }) => {
    a = Ae.ms(a);
    let c = { hasReachedTarget: !1, done: !1, current: t, target: t },
      A = (x) => (u !== void 0 && x < u) || (m !== void 0 && x > m),
      S = (x) =>
        u === void 0
          ? m
          : m === void 0 || Math.abs(u - x) < Math.abs(m - x)
            ? u
            : m,
      C = n * r,
      V = t + C,
      T = s === void 0 ? V : s(V);
    ((c.target = T), T !== V && (C = T - t));
    let G = (x) => -C * Math.exp(-x / a),
      F = (x) => T + G(x),
      L = (x) => {
        let O = G(x),
          M = F(x);
        ((c.done = Math.abs(O) <= g), (c.current = c.done ? T : M));
      },
      P,
      I,
      X = (x) => {
        A(c.current) &&
          ((P = x),
          (I = We({
            from: c.current,
            to: S(c.current),
            velocity: Ye(F, x, c.current),
            damping: o,
            stiffness: i,
            restDistance: g,
            restSpeed: f,
          })));
      };
    return (
      X(0),
      (x) => {
        let O = !1;
        return (
          !I && P === void 0 && ((O = !0), L(x), X(x)),
          P !== void 0 && x > P
            ? ((c.hasReachedTarget = !0), I(x - P))
            : ((c.hasReachedTarget = !1), !O && L(x), c)
        );
      }
    );
  },
  Ne = 10,
  _r = 1e4;
function Tt(t) {
  let r,
    n = Ne,
    a = t(0),
    o = [a.current];
  for (; !a.done && n < _r; )
    ((a = t(n)),
      o.push(a.done ? a.target : a.current),
      r === void 0 && a.hasReachedTarget && (r = n),
      (n += Ne));
  let i = n - Ne;
  return (
    o.length === 1 && o.push(a.current),
    { keyframes: o, duration: i / 1e3, overshootDuration: (r ?? i) / 1e3 }
  );
}
var Sr = ["", "X", "Y", "Z"],
  Cr = ["translate", "scale", "rotate", "skew"];
var Pt = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (t) => t + "deg",
  },
  kr = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (t) => t + "px",
    },
    rotate: Pt,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: ue },
    skew: Pt,
  },
  Ar = new Map(),
  Yr = (t) => `--motion-${t}`,
  Rt = ["x", "y", "z"];
Cr.forEach((t) => {
  Sr.forEach((r) => {
    (Rt.push(t + r), Ar.set(Yr(t + r), kr[t]));
  });
});
var Vn = new Set(Rt);
var Mt = (t) => document.createElement("div").animate(t, { duration: 0.001 }),
  zt = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        Mt({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!Mt({ opacity: [0, 1] }).finished,
  },
  Be = {},
  Tr = {};
for (let t in zt) Tr[t] = () => (Be[t] === void 0 && (Be[t] = zt[t]()), Be[t]);
function Ft(t, r) {
  var n;
  return (
    typeof t == "string"
      ? r
        ? (((n = r[t]) !== null && n !== void 0) ||
            (r[t] = document.querySelectorAll(t)),
          (t = r[t]))
        : (t = document.querySelectorAll(t))
      : t instanceof Element && (t = [t]),
    Array.from(t || [])
  );
}
function It(t) {
  let r = new WeakMap();
  return (n = {}) => {
    let a = new Map(),
      o = (s = 0, u = 100, m = 0, g = !1) => {
        let f = `${s}-${u}-${m}-${g}`;
        return (
          a.has(f) ||
            a.set(
              f,
              t(
                Object.assign(
                  {
                    from: s,
                    to: u,
                    velocity: m,
                    restSpeed: g ? 0.05 : 2,
                    restDistance: g ? 0.01 : 0.5,
                  },
                  n,
                ),
              ),
            ),
          a.get(f)
        );
      },
      i = (s) => (r.has(s) || r.set(s, Tt(s)), r.get(s));
    return {
      createAnimation: (s, u, m, g, f) => {
        var c, A;
        let S,
          C = s.length;
        if (m && C <= 2 && s.every(Pr)) {
          let T = s[C - 1],
            G = C === 1 ? null : s[0],
            F = 0,
            L = 0,
            P = f?.generator;
          if (P) {
            let { animation: x, generatorStartTime: O } = f,
              M = x?.startTime || O || 0,
              K = x?.currentTime || performance.now() - M,
              Z = P(K).current;
            ((L = (c = G) !== null && c !== void 0 ? c : Z),
              (C === 1 || (C === 2 && s[0] === null)) &&
                (F = Ye((Q) => P(Q).current, K, Z)));
          } else L = (A = G) !== null && A !== void 0 ? A : parseFloat(u());
          let I = o(L, T, F, g?.includes("scale")),
            X = i(I);
          ((S = Object.assign(Object.assign({}, X), { easing: "linear" })),
            f &&
              ((f.generator = I), (f.generatorStartTime = performance.now())));
        } else S = { easing: "ease", duration: i(o(0, 100)).overshootDuration };
        return S;
      },
    };
  };
}
var Pr = (t) => typeof t != "string",
  On = It(We),
  Nn = It(Yt),
  Mr = { any: 0, all: 1 };
function zr(t, r, { root: n, margin: a, amount: o = "any" } = {}) {
  if (typeof IntersectionObserver > "u") return () => {};
  let i = Ft(t),
    s = new WeakMap(),
    u = (g) => {
      g.forEach((f) => {
        let c = s.get(f.target);
        if (f.isIntersecting !== !!c)
          if (f.isIntersecting) {
            let A = r(f);
            typeof A == "function" ? s.set(f.target, A) : m.unobserve(f.target);
          } else c && (c(f), s.delete(f.target));
      });
    },
    m = new IntersectionObserver(u, {
      root: n,
      rootMargin: a,
      threshold: typeof o == "number" ? o : Mr[o],
    });
  return (i.forEach((g) => m.observe(g)), () => m.disconnect());
}
var Te = new WeakMap(),
  D;
function Lr(t, r) {
  if (r) {
    let { inlineSize: n, blockSize: a } = r[0];
    return { width: n, height: a };
  }
  return t instanceof SVGElement && "getBBox" in t
    ? t.getBBox()
    : { width: t.offsetWidth, height: t.offsetHeight };
}
function Er({ target: t, contentRect: r, borderBoxSize: n }) {
  var a;
  (a = Te.get(t)) === null ||
    a === void 0 ||
    a.forEach((o) => {
      o({
        target: t,
        contentSize: r,
        get size() {
          return Lr(t, n);
        },
      });
    });
}
function Rr(t) {
  t.forEach(Er);
}
function Fr() {
  typeof ResizeObserver < "u" && (D = new ResizeObserver(Rr));
}
function Ir(t, r) {
  D || Fr();
  let n = Ft(t);
  return (
    n.forEach((a) => {
      let o = Te.get(a);
      (o || ((o = new Set()), Te.set(a, o)), o.add(r), D?.observe(a));
    }),
    () => {
      n.forEach((a) => {
        let o = Te.get(a);
        (o?.delete(r), o?.size || D?.unobserve(a));
      });
    }
  );
}
var Pe = new Set(),
  ge;
function jr() {
  ((ge = () => {
    let t = { width: d.innerWidth, height: d.innerHeight },
      r = { target: d, size: t, contentSize: t };
    Pe.forEach((n) => n(r));
  }),
    d.addEventListener("resize", ge));
}
function Vr(t) {
  return (
    Pe.add(t),
    ge || jr(),
    () => {
      (Pe.delete(t), !Pe.size && ge && (ge = void 0));
    }
  );
}
function jt(t, r) {
  return typeof t == "function" ? Vr(t) : Ir(t, r);
}
function Ge(t, r, n) {
  t.dispatchEvent(new CustomEvent(r, { detail: { originalEvent: n } }));
}
function Lt(t, r, n) {
  t.dispatchEvent(new CustomEvent(r, { detail: { originalEntry: n } }));
}
var Or = {
    isActive: (t) => !!t.inView,
    subscribe: (t, { enable: r, disable: n }, { inViewOptions: a = {} }) => {
      let { once: o } = a,
        i = At(a, ["once"]);
      return zr(
        t,
        (s) => {
          if ((r(), Lt(t, "viewenter", s), !o))
            return (u) => {
              (n(), Lt(t, "viewleave", u));
            };
        },
        i,
      );
    },
  },
  Et = (t, r, n) => (a) => {
    (!a.pointerType || a.pointerType === "mouse") && (n(), Ge(t, r, a));
  },
  Nr = {
    isActive: (t) => !!t.hover,
    subscribe: (t, { enable: r, disable: n }) => {
      let a = Et(t, "hoverstart", r),
        o = Et(t, "hoverend", n);
      return (
        t.addEventListener("pointerenter", a),
        t.addEventListener("pointerleave", o),
        () => {
          (t.removeEventListener("pointerenter", a),
            t.removeEventListener("pointerleave", o));
        }
      );
    },
  },
  Wr = {
    isActive: (t) => !!t.press,
    subscribe: (t, { enable: r, disable: n }) => {
      let a = (i) => {
          (n(), Ge(t, "pressend", i), d.removeEventListener("pointerup", a));
        },
        o = (i) => {
          (r(), Ge(t, "pressstart", i), d.addEventListener("pointerup", a));
        };
      return (
        t.addEventListener("pointerdown", o),
        () => {
          (t.removeEventListener("pointerdown", o),
            d.removeEventListener("pointerup", a));
        }
      );
    },
  },
  Br = { inView: Or, hover: Nr, press: Wr },
  Wn = ["initial", "animate", ...Object.keys(Br), "exit"];
var Gr = 100,
  Xr = {
    left: (t) => `translateX(-${t}px)`,
    right: (t) => `translateX(${t}px)`,
    top: (t) => `translateY(-${t}px)`,
    bottom: (t) => `translateY(${t}px)`,
  };
function U(t) {
  let {
      slots: r = [],
      gap: n,
      padding: a,
      paddingPerSide: o,
      paddingTop: i,
      paddingRight: s,
      paddingBottom: u,
      paddingLeft: m,
      speed: g,
      hoverFactor: f,
      direction: c,
      alignment: A,
      sizingOptions: S,
      fadeOptions: C,
      style: V,
    } = t,
    {
      fadeContent: T,
      overflow: G,
      fadeWidth: F,
      fadeInset: L,
      fadeAlpha: P,
    } = C,
    { widthType: I, heightType: X } = S,
    x = o ? `${i}px ${s}px ${u}px ${m}px` : `${a}px`,
    O = ne.current(),
    M = O === ne.canvas || O === ne.export,
    K = r.filter(Boolean),
    Z = ve.count(K),
    Q = Z > 0;
  c === !0 && (c = "left");
  let se = c === "left" || c === "right",
    nr = ct(0),
    we = Xr[c],
    Xa = ft(nr, we),
    ee = Y(null),
    j = W(() => [{ current: null }, { current: null }], []),
    [J, or] = _e({ parent: null, children: null }),
    Qe = null,
    Ee = [],
    le = 0,
    Re = 0;
  (M && ((le = Z ? Math.floor(10 / Z) : 0), (Re = 1)),
    !M &&
      Q &&
      J.parent &&
      ((le = Math.round((J.parent / J.children) * 2) + 1),
      (le = Math.min(le, Gr)),
      (Re = 1)));
  let et = ae(() => {
      if (Q && ee.current) {
        let _ = se ? ee.current.offsetWidth : ee.current.offsetHeight,
          k = j[0].current
            ? se
              ? j[0].current.offsetLeft
              : j[0].current.offsetTop
            : 0,
          re =
            (j[1].current
              ? se
                ? j[1].current.offsetLeft + j[1].current.offsetWidth
                : j[1].current.offsetTop + j[1].current.offsetHeight
              : 0) -
            k +
            n;
        or({ parent: _, children: re });
      }
    }, []),
    tt = M ? { contentVisibility: "auto" } : {};
  if (Q) {
    if (!M) {
      let _ = Y(!0);
      lt(
        () => (
          Ie.read(et, !1, !0),
          jt(ee.current, ({ contentSize: k }) => {
            (!_.current && (k.width || k.height) && Ie.read(et, !1, !0),
              (_.current = !1));
          })
        ),
        [],
      );
    }
    Qe = ve.map(K, (_, k) => {
      let q;
      (k === 0 && (q = j[0]), k === K.length - 1 && (q = j[1]));
      let re = {
        width: I ? _.props?.width : "100%",
        height: X ? _.props?.height : "100%",
      };
      return e(ce, {
        inherit: "id",
        children: e("li", {
          ref: q,
          style: re,
          children: Fe(
            _,
            {
              style: { ..._.props?.style, ...re, flexShrink: 0, ...tt },
              layoutId: _.props.layoutId
                ? _.props.layoutId + "-original-" + k
                : void 0,
            },
            _.props?.children,
          ),
        }),
      });
    });
  }
  let te = M ? !0 : pt(ee);
  if (!M)
    for (let _ = 0; _ < le; _++)
      Ee = Ee.concat(
        ve.map(K, (k, q) => {
          let re = {
            width: I ? k.props?.width : "100%",
            height: X ? k.props?.height : "100%",
            willChange: te ? "transform" : void 0,
          };
          return e(
            ce,
            {
              inherit: "id",
              children: e(
                "li",
                {
                  style: re,
                  "aria-hidden": !0,
                  children: Fe(
                    k,
                    {
                      key: _ + " " + q,
                      style: {
                        ...k.props?.style,
                        width: I ? k.props?.width : "100%",
                        height: X ? k.props?.height : "100%",
                        flexShrink: 0,
                        ...tt,
                      },
                      layoutId: k.props.layoutId
                        ? k.props.layoutId + "-dupe-" + _
                        : void 0,
                    },
                    k.props?.children,
                  ),
                },
                _ + "li" + q,
              ),
            },
            _ + "lg" + q,
          );
        }),
      );
  let N = J.children + J.children * Math.round(J.parent / J.children),
    qa = Y(null),
    Ha = Y(null),
    Da = Y(0),
    rt = Y(!1),
    ir = dt(),
    at = Y(null),
    E = Y(null);
  if (!M) {
    R(() => {
      if (!(ir || !N || !g))
        return (
          (E.current = at.current.animate(
            { transform: [we(0), we(N)] },
            {
              duration: (Math.abs(N) / g) * 1e3,
              iterations: 1 / 0,
              easing: "linear",
            },
          )),
          () => E.current.cancel()
        );
    }, [f, N, g]);
    let _ = ae(() => {
      if (!E.current) return;
      let k = document.hidden;
      te && !k && E.current.playState === "paused"
        ? E.current.play()
        : (!te || k) && E.current.playState === "running" && E.current.pause();
    }, [te]);
    (R(() => {
      _();
    }, [te, f, N, g]),
      R(
        () => (
          document.addEventListener("visibilitychange", _),
          () => {
            document.removeEventListener("visibilitychange", _);
          }
        ),
        [_],
      ));
  }
  let sr = se ? "to right" : "to bottom",
    nt = F / 2,
    lr = 100 - F / 2,
    cr = $r(L, 0, nt),
    fr = 100 - L,
    ot = `linear-gradient(${sr}, rgba(0, 0, 0, ${P}) ${cr}%, rgba(0, 0, 0, 1) ${nt}%, rgba(0, 0, 0, 1) ${lr}%, rgba(0, 0, 0, ${P}) ${fr}%)`;
  return Q
    ? e("section", {
        style: {
          ...Vt,
          opacity: Re,
          WebkitMaskImage: T ? ot : void 0,
          maskImage: T ? ot : void 0,
          overflow: G ? "visible" : "hidden",
          padding: x,
        },
        ref: ee,
        children: b(z.ul, {
          ref: at,
          style: {
            ...Vt,
            gap: n,
            top: c === "bottom" && Ot(N) ? -N : void 0,
            left: c === "right" && Ot(N) ? -N : void 0,
            placeItems: A,
            position: "relative",
            flexDirection: se ? "row" : "column",
            ...V,
            willChange: M || !te ? "auto" : "transform",
            transform: we(0),
          },
          onMouseEnter: () => {
            ((rt.current = !0), E.current && (E.current.playbackRate = f));
          },
          onMouseLeave: () => {
            ((rt.current = !1), E.current && (E.current.playbackRate = 1));
          },
          children: [Qe, Ee],
        }),
      })
    : b("section", {
        style: qr,
        children: [
          e("div", { style: Hr, children: "\u2728" }),
          e("p", { style: Dr, children: "Connect to Content" }),
          e("p", {
            style: Ur,
            children:
              "Add layers or components to infinitely loop on your page.",
          }),
        ],
      });
}
U.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
Se(U, {
  slots: {
    type: l.Array,
    title: "Children",
    control: { type: l.ComponentInstance },
  },
  speed: {
    type: l.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: l.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: !0,
  },
  alignment: {
    type: l.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: l.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: l.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: l.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: l.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
      heightType: {
        type: l.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: l.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: l.Boolean, title: "Fade", defaultValue: !0 },
      overflow: {
        type: l.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(t) {
          return t.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: l.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeInset: {
        type: l.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: l.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: l.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: "Slows down the speed while you are hovering.",
  },
});
var Vt = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  qr = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  Hr = { fontSize: 32, marginBottom: 10 },
  Dr = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  Ur = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  },
  $r = (t, r, n) => Math.min(Math.max(t, r), n),
  Ot = (t) => typeof t == "number" && !isNaN(t);
var Xe =
    '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  Nt = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Kr = {
    ...Nt,
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    color: "#85F",
    border: "1px dashed #85F",
    flexDirection: "column",
  },
  qe = {
    onClick: { type: l.EventHandler },
    onMouseEnter: { type: l.EventHandler },
    onMouseLeave: { type: l.EventHandler },
  },
  Jr = {
    type: l.Number,
    title: "Font Size",
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0,
  },
  Zr = {
    font: {
      type: l.Boolean,
      title: "Font",
      defaultValue: !1,
      disabledTitle: "Default",
      enabledTitle: "Custom",
    },
    fontFamily: {
      type: l.String,
      title: "Family",
      placeholder: "Inter",
      hidden: ({ font: t }) => !t,
    },
    fontWeight: {
      type: l.Enum,
      title: "Weight",
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      optionTitles: [
        "Thin",
        "Extra-light",
        "Light",
        "Regular",
        "Medium",
        "Semi-bold",
        "Bold",
        "Extra-bold",
        "Black",
      ],
      hidden: ({ font: t }) => !t,
    },
  };
var ea = {
  100: "Thin",
  200: "Extra-light",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "Semi-bold",
  700: "Bold",
  800: "Extra-bold",
  900: "Black",
};
function He(t) {
  let {
      fontFamily: r = "Inter",
      fontSize: n = 16,
      fontWeight: a = 400,
      font: o = !1,
    } = t,
    i = ea[a],
    s = `"${r} ${i}", "${r}", ${Xe}`,
    u = r
      ? { fontSize: n, fontWeight: a, fontFamily: s }
      : { fontSize: n, fontWeight: a },
    m = async () => {
      await ke
        .loadWebFontsFromSelectors([
          `CUSTOM;${r}`,
          `CUSTOM;${r} ${i}`,
          `GF;${r}-${i.toLowerCase()}`,
        ])
        .catch((g) => console.error(g));
    };
  return (
    R(() => {
      o && m();
    }, [o, r, a]),
    u
  );
}
function De(t) {
  let {
    borderRadius: r,
    isMixedBorderRadius: n,
    topLeftRadius: a,
    topRightRadius: o,
    bottomRightRadius: i,
    bottomLeftRadius: s,
  } = t;
  return W(
    () => (n ? `${a}px ${o}px ${i}px ${s}px` : `${r}px`),
    [r, n, a, o, i, s],
  );
}
var ta = {
  borderRadius: {
    title: "Radius",
    type: l.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
  },
};
function Ue(t) {
  let {
    padding: r,
    paddingPerSide: n,
    paddingTop: a,
    paddingRight: o,
    paddingBottom: i,
    paddingLeft: s,
  } = t;
  return W(() => (n ? `${a}px ${o}px ${i}px ${s}px` : r), [r, n, a, o, i, s]);
}
var ra = {
  padding: {
    type: l.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
  },
};
function xe(t) {
  let {
      label: r,
      content: n,
      fill: a,
      color: o,
      style: i,
      onClick: s,
      font: u,
      hoverOptions: m,
      ...g
    } = t,
    f = He({ fontWeight: 500, ...g }),
    c = De(t),
    A = Ue(t),
    S = ae(() => {
      var C;
      ((C = y.clipboard) === null || C === void 0 || C.writeText(n), s?.());
    }, [s, n]);
  return e(z.button, {
    style: {
      border: "none",
      outline: "none",
      resize: "none",
      width: "max-content",
      wordBreak: "break-word",
      overflowWrap: "break-word",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      letterSpacing: "-0.2px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: a,
      borderRadius: c,
      cursor: "pointer",
      padding: A,
      color: o,
      ...f,
      ...u,
      ...i,
    },
    onClick: S,
    ...g,
    whileHover: m,
    transition: m?.transition,
    children: r,
  });
}
Se(xe, {
  content: {
    type: l.String,
    title: "Content",
    displayTextArea: !0,
    description: "When clicked, this content will be copied to the clipboard.",
  },
  label: { type: l.String, title: "Label", defaultValue: "Copy to Clipboard" },
  fill: { type: l.Color, title: "Fill", defaultValue: "#06F" },
  color: { type: l.Color, title: "Text", defaultValue: "#fff" },
  font: { type: l.Font, controls: "extended", defaultValue: { fontSize: 16 } },
  hoverOptions: {
    type: l.Object,
    title: "Hover",
    buttonTitle: "Effect",
    optional: !0,
    controls: {
      scale: {
        type: l.Number,
        title: "Scale",
        min: 0,
        max: 10,
        displayStepper: !0,
        step: 0.01,
        defaultValue: 1.1,
      },
      backgroundColor: {
        type: l.Color,
        title: "Fill",
        defaultValue: "#0088FF",
        optional: !0,
      },
      color: {
        type: l.Color,
        title: "Color",
        defaultValue: "#FFF",
        optional: !0,
      },
      transition: {
        type: l.Transition,
        title: "Transition",
        defaultValue: { type: "spring", stiffness: 400, damping: 30 },
      },
    },
  },
  padding: {
    type: l.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
    defaultValue: 10,
  },
  borderRadius: {
    title: "Radius",
    type: l.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
    defaultValue: 50,
  },
  ...qe,
});
ke.loadFonts([]);
var Gt = [{ explicitInter: !0, fonts: [] }],
  Xt = [
    ".framer-4dDkP .framer-styles-preset-1d2bx69:not(.rich-text-wrapper), .framer-4dDkP .framer-styles-preset-1d2bx69.rich-text-wrapper a { --framer-link-current-text-color: #111111; --framer-link-current-text-decoration: none; --framer-link-hover-text-decoration: none; --framer-link-text-decoration: none; }",
  ],
  qt = "framer-4dDkP";
var $e = Ce(z.div),
  Ke = fe(h),
  Me = fe(z.div),
  na = fe(v),
  oa = fe(z.a),
  ia = Ve(U),
  sa = Ce(v),
  Ht = Ce(h),
  la = Ve(xe),
  ca = {};
var fa = "framer-0Y6PA",
  da = { WQLkyLRf1: "framer-v-72rtr7" },
  ye = (t, r) => `translateX(-50%) ${r}`,
  pa = { bounce: 0.4, delay: 0, duration: 1, type: "spring" },
  ma = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: pa,
    x: 0,
    y: 0,
  },
  Dt = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: -150,
  },
  ua = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Zt = { bounce: 0.4, delay: 0, duration: 0.6, type: "spring" },
  ha = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Zt,
    x: 0,
    y: 0,
  },
  Ut = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: -150,
    y: 0,
  },
  Qt = { bounce: 0.4, delay: 0, duration: 0.8, type: "spring" },
  ga = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Qt,
    x: -150,
    y: 0,
  },
  Je = (t, r) => `translateY(-50%) ${r}`,
  $t = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 150,
    y: 0,
  },
  er = { bounce: 0.4, delay: 0, duration: 1.3, type: "spring" },
  xa = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: er,
    x: 150,
    y: 0,
  },
  Ze = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 150,
  },
  $ = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  ya = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: $,
    x: 0,
    y: 150,
  },
  ba = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: $,
    x: -150,
    y: 0,
  },
  wa = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: $,
    x: 150,
    y: 0,
  },
  tr = { bounce: 0.3, delay: 0, duration: 0.8, type: "spring" },
  va = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: tr,
    x: 0,
    y: 150,
  },
  _a = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: -150,
  },
  Sa = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: $,
    x: 0,
    y: -150,
  },
  rr = { bounce: 0.3, delay: 0, duration: 1.2, type: "spring" },
  Ca = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: rr,
    x: 0,
    y: 150,
  },
  ka = { bounce: 0.4, delay: 0, duration: 0.9, type: "spring" },
  Kt = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ka,
    x: 0,
    y: 0,
  },
  Aa = { bounce: 0.2, delay: 0, duration: 1.7, type: "spring" },
  Ya = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Aa,
    x: 0,
    y: 0,
  },
  Jt = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 150,
  },
  Ta = { bounce: 0.3, delay: 0, duration: 1.3, type: "spring" },
  Pa = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ta,
    x: 0,
    y: 0,
  },
  Ma = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 150,
    y: 0,
  },
  za = { bounce: 0.4, delay: 0, duration: 1.1, type: "spring" },
  La = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: za,
    x: 0,
    y: 0,
  },
  Ea = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: -150,
    y: 0,
  },
  ar = { bounce: 0.25, delay: 0, duration: 0.45, type: "spring" },
  Ra = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: ar,
  },
  Fa = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    transition: ar,
  },
  Ia = { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 50, y: 0 },
  ja = { bounce: 0.25, delay: 0.1, duration: 0.45, type: "spring" },
  be = {
    effect: Ia,
    repeat: !0,
    startDelay: 0.5,
    tokenization: "character",
    transition: ja,
    trigger: "onInView",
    type: "appear",
  },
  Va = {
    filter: "blur(10px)",
    opacity: 0.001,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 10,
  },
  Oa = { bounce: 0, delay: 0.05, duration: 0.4, type: "spring" },
  ze = {
    effect: Va,
    repeat: !0,
    startDelay: 0.3,
    threshold: 1,
    tokenization: "character",
    transition: Oa,
    trigger: "onInView",
    type: "appear",
  },
  Na = ({ value: t }) =>
    wt()
      ? null
      : e("style", {
          dangerouslySetInnerHTML: { __html: t },
          "data-framer-html-style": "",
        }),
  Wa = ({ height: t, id: r, width: n, ...a }) => ({ ...a }),
  Ba = it(function (t, r) {
    let n = Y(null),
      a = r ?? n,
      o = st(),
      { activeLocale: i, setLocale: s } = ut(),
      u = yt(),
      { style: m, className: g, layoutId: f, variant: c, ...A } = Wa(t),
      S = W(() => Ct(void 0, i), [void 0, i]);
    ht(S);
    let [C, V] = vt(c, ca, !1),
      T = void 0,
      F = je(fa, ...[qt]),
      L = mt("gTnIhhMrd"),
      P = Y(null);
    return (
      bt({}),
      e(gt.Provider, {
        value: { primaryVariantId: "WQLkyLRf1", variantClassNames: da },
        children: b(ce, {
          id: f ?? o,
          children: [
            e(Na, { value: "html body { background:rgb(12, 8, 24); }" }),
            e("img", {
              className: "site-bg-gif",
              src: "/gifs/background.gif",
              alt: "",
              decoding: "async",
              fetchPriority: "high",
              width: 1920,
              height: 1080,
              "aria-hidden": "true",
            }),
            b(z.div, {
              ...A,
              className: je(F, "framer-72rtr7", g),
              ref: a,
              style: { ...m },
              children: [
                b($e, {
                  animate: ma,
                  className: "framer-svz3b",
                  "data-border": !0,
                  "data-framer-appear-id": "svz3b",
                  initial: Dt,
                  optimized: !0,
                  transformTemplate: ye,
                  children: [
                    b("div", {
                      className: "framer-zmdxru",
                      children: [
                        e(v, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 819.2,
                            intrinsicWidth: 819.2,
                            loading: H(-258),
                            pixelHeight: 500,
                            pixelWidth: 500,
                            src: "/framerusercontent.com/images/MPqNQETYRusncJDhi8AZeE.png",
                          },
                          className: "framer-llrg43",
                          "data-framer-name":
                            "ChatGPT Image Apr 1, 2025, 10 44_09 AM 1",
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(p, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7TW9uYSBTYW5zLTYwMA==",
                                "--framer-font-family":
                                  '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                                "--framer-font-size": "24px",
                                "--framer-font-weight": "600",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: "Sgt Stubby",
                            }),
                          }),
                          className: "framer-1k8optr",
                          fonts: ["GF;Mona Sans-600"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    e(h, {
                      __fromCanvasComponent: !0,
                      children: e(p, {
                        children: e("p", {
                          style: {
                            "--font-selector": "R0Y7TW9uYSBTYW5zLXJlZ3VsYXI=",
                            "--framer-font-family":
                              '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                            "--framer-font-size": "20px",
                            "--framer-text-color": "rgb(255, 255, 255)",
                          },
                          children: e(B, {
                            href: "https://x.com/stubbyonSol",
                            motionChild: !0,
                            nodeId: "TelegramNavBtn",
                            openInNewTab: !0,
                            relValues: [],
                            scopeId: "augiA20Il",
                            smoothScroll: !1,
                            children: e(z.a, {
                              className: "framer-styles-preset-1d2bx69",
                              "data-styles-preset": "mlrEiqJn7",
                              children: "Twitter",
                            }),
                          }),
                        }),
                      }),
                      className: "framer-1tsgjab",
                      fonts: ["GF;Mona Sans-regular"],
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    b("div", {
                      className: "framer-vhp8hh",
                      children: [
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(p, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7TW9uYSBTYW5zLXJlZ3VsYXI=",
                                "--framer-font-family":
                                  '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                                "--framer-font-size": "20px",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: e(B, {
                                href: "https://www.dextools.io/app/en/solana/pair-explorer/TBA?t=1716152329249%2F",
                                motionChild: !0,
                                nodeId: "G5GYsukHP",
                                openInNewTab: !0,
                                relValues: [],
                                scopeId: "augiA20Il",
                                smoothScroll: !1,
                                children: e(z.a, {
                                  className: "framer-styles-preset-1d2bx69",
                                  "data-styles-preset": "mlrEiqJn7",
                                  children: "Dextools",
                                }),
                              }),
                            }),
                          }),
                          className: "framer-xq6r2p",
                          fonts: ["GF;Mona Sans-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(p, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7TW9uYSBTYW5zLXJlZ3VsYXI=",
                                "--framer-font-family":
                                  '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                                "--framer-font-size": "20px",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: e(B, {
                                href: "https://dexscreener.com/solana/TBA",
                                motionChild: !0,
                                nodeId: "aRpXEvGkH",
                                openInNewTab: !0,
                                relValues: [],
                                scopeId: "augiA20Il",
                                smoothScroll: !1,
                                children: e(z.a, {
                                  className: "framer-styles-preset-1d2bx69",
                                  "data-styles-preset": "mlrEiqJn7",
                                  children: "Dexscreener",
                                }),
                              }),
                            }),
                          }),
                          className: "framer-pvdqz1",
                          fonts: ["GF;Mona Sans-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    e(B, {
                      href: "https://pump.fun/coin/TBA",
                      motionChild: !0,
                      nodeId: "UdPCgvtD6",
                      openInNewTab: !0,
                      scopeId: "augiA20Il",
                      children: e(z.a, {
                        className: "framer-1j7wkl9 framer-lux5qc",
                        children: e(h, {
                          __fromCanvasComponent: !0,
                          children: e(p, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7TW9uYSBTYW5zLXJlZ3VsYXI=",
                                "--framer-font-family":
                                  '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                                "--framer-font-size": "20px",
                              },
                              children: "Buy Stubby",
                            }),
                          }),
                          className: "framer-1m31yjg",
                          fonts: ["GF;Mona Sans-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                  ],
                }),
                b("div", {
                  className: "framer-gx941v",
                  "data-border": !0,
                  children: [
                    e(Ke, {
                      __framer__animate: { transition: Zt },
                      __framer__animateOnce: !0,
                      __framer__enter: ua,
                      __framer__exit: ha,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __fromCanvasComponent: !0,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      children: e(p, {
                        children: e("h2", {
                          style: {
                            "--font-selector": "R0Y7TW9uYSBTYW5zLTcwMA==",
                            "--framer-font-family":
                              '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                            "--framer-font-size": "50px",
                            "--framer-font-weight": "700",
                            "--framer-letter-spacing": "-0.04em",
                            "--framer-line-height": "1.4em",
                            "--framer-text-color": "rgb(255, 255, 255)",
                          },
                          children: "The Heroic Tale of Sgt. Stubby",
                        }),
                      }),
                      className: "framer-1vqbhpv",
                      fonts: ["GF;Mona Sans-700"],
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    e("div", {
                      className: "framer-15aa3ze",
                      "data-border": !0,
                      children: e(h, {
                        __fromCanvasComponent: !0,
                        children: e(p, {
                          children: e("p", {
                            style: {
                              "--font-selector": "R0Y7TW9uYSBTYW5zLTcwMA==",
                              "--framer-font-family":
                                '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                              "--framer-font-size": "18px",
                              "--framer-font-weight": "700",
                              "--framer-text-color": "rgb(255, 252, 252)",
                            },
                            children: "The  Story",
                          }),
                        }),
                        className: "framer-1eeso6b",
                        fonts: ["GF;Mona Sans-700"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    e(Me, {
                      __framer__animate: { transition: Qt },
                      __framer__animateOnce: !0,
                      __framer__enter: Ut,
                      __framer__exit: ga,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: "framer-1cvri5n",
                      children: e(h, {
                        __fromCanvasComponent: !0,
                        children: e(p, {
                          children: e("h2", {
                            style: {
                              "--font-selector": "R0Y7TW9uYSBTYW5zLTUwMA==",
                              "--framer-font-family":
                                '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                              "--framer-font-size": "33px",
                              "--framer-font-weight": "500",
                              "--framer-letter-spacing": "-0.04em",
                              "--framer-line-height": "1.6em",
                            },
                            children:
                              "He saved soldiers by warning them of gas attacks, finding wounded men, and even catching a German spy.  Stubby became the most decorated war dog of World War I and was promoted to sergeant for his bravery.",
                          }),
                        }),
                        className: "framer-ox9orz",
                        fonts: ["GF;Mona Sans-500"],
                        transformTemplate: Je,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    e(na, {
                      __framer__animate: { transition: er },
                      __framer__animateOnce: !0,
                      __framer__enter: $t,
                      __framer__exit: xa,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 819.2,
                        intrinsicWidth: 819.2,
                        loading: H((u?.y || 0) + 930 + 91),
                        pixelHeight: 1194,
                        pixelWidth: 800,
                        sizes: "565px",
                        src: "/framerusercontent.com/images/vtm3brxaigUfgJRzhYIzV4Fmwbg.jpg?scale-down-to=1024",
                        srcSet:
                          "/framerusercontent.com/images/vtm3brxaigUfgJRzhYIzV4Fmwbg.jpg?scale-down-to=1024 686w,/framerusercontent.com/images/vtm3brxaigUfgJRzhYIzV4Fmwbg.jpg 800w",
                      },
                      className: "framer-1vs0435",
                      "data-framer-name":
                        "ChatGPT Image Apr 1, 2025, 01 08_09 PM 1",
                    }),
                  ],
                }),
                b("div", {
                  className: "framer-xvp1df",
                  children: [
                    e("div", {
                      className: "framer-10oi1l0",
                      "data-border": !0,
                      children: e(h, {
                        __fromCanvasComponent: !0,
                        children: e(p, {
                          children: e("p", {
                            style: {
                              "--font-selector": "R0Y7TW9uYSBTYW5zLTcwMA==",
                              "--framer-font-family":
                                '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                              "--framer-font-size": "18px",
                              "--framer-font-weight": "700",
                              "--framer-text-color": "rgb(255, 255, 255)",
                            },
                            children: "Trading",
                          }),
                        }),
                        className: "framer-1vtsb5u",
                        fonts: ["GF;Mona Sans-700"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    e(Ke, {
                      __framer__animate: { transition: $ },
                      __framer__animateOnce: !0,
                      __framer__enter: Ze,
                      __framer__exit: ya,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __fromCanvasComponent: !0,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      children: e(p, {
                        children: e("h2", {
                          style: {
                            "--font-selector": "R0Y7TW9uYSBTYW5zLTYwMA==",
                            "--framer-font-family":
                              '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                            "--framer-font-size": "46px",
                            "--framer-font-weight": "600",
                            "--framer-letter-spacing": "-0.04em",
                            "--framer-line-height": "1.4em",
                            "--framer-text-color": "rgb(255, 255, 255)",
                          },
                          children: "Start Trading $SGT. Stubby",
                        }),
                      }),
                      className: "framer-1q9vd3t",
                      fonts: ["GF;Mona Sans-600"],
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    e(h, {
                      __fromCanvasComponent: !0,
                      children: b(p, {
                        children: [
                          e("div", {
                            style: {
                              "--font-selector": "R0Y7TW9uYSBTYW5zLXJlZ3VsYXI=",
                              "--framer-font-family":
                                '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                              "--framer-font-size": "32px",
                              "--framer-letter-spacing": "-0.02em",
                              "--framer-line-height": "1.6em",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(255, 255, 255)",
                            },
                            children:
                              "$stubby is our way to honor the duty Stubby did for the U.S military. Join our community today to start building his legacy onchain.",
                          }),
                          e("div", {
                            style: {
                              "--framer-letter-spacing": "-0.02em",
                              "--framer-line-height": "1.6em",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgb(102, 102, 102)",
                            },
                            children: e("span", {
                              style: { "--framer-font-size": "32px" },
                              children: e("br", {}),
                            }),
                          }),
                        ],
                      }),
                      className: "framer-1ezyucq",
                      fonts: ["GF;Mona Sans-regular"],
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  ],
                }),
                b("div", {
                  className: "framer-1ddp95p",
                  children: [
                    e(Ke, {
                      __framer__animate: { transition: $ },
                      __framer__animateOnce: !0,
                      __framer__enter: Ut,
                      __framer__exit: ba,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __fromCanvasComponent: !0,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      children: e(p, {
                        children: e("p", {
                          style: {
                            "--font-selector": "R0Y7TW9uYSBTYW5zLXJlZ3VsYXI=",
                            "--framer-font-family":
                              '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                            "--framer-font-size": "24px",
                            "--framer-text-color": "rgb(255, 255, 255)",
                          },
                          children: "Powered by the Solana ecosystem",
                        }),
                      }),
                      className: "framer-1q8fnlj",
                      fonts: ["GF;Mona Sans-regular"],
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    e(B, {
                      href: "https://pump.fun/coin/TBA",
                      motionChild: !0,
                      nodeId: "IAI2WUmoo",
                      openInNewTab: !0,
                      scopeId: "augiA20Il",
                      children: e(oa, {
                        __framer__animate: { transition: $ },
                        __framer__animateOnce: !0,
                        __framer__enter: $t,
                        __framer__exit: wa,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-khtyt2 framer-lux5qc",
                        "data-border": !0,
                        children: e(h, {
                          __fromCanvasComponent: !0,
                          children: e(p, {
                            children: e("p", {
                              style: {
                                "--font-selector":
                                  "R0Y7TW9uYSBTYW5zLXJlZ3VsYXI=",
                                "--framer-font-family":
                                  '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                                "--framer-font-size": "24px",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: "Swap on Pumpfun",
                            }),
                          }),
                          className: "framer-1e1xveg",
                          fonts: ["GF;Mona Sans-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                  ],
                }),
                b("div", {
                  className: "framer-5inbai",
                  children: [
                    e("div", {
                      className: "framer-rqxjva",
                      children: e(h, {
                        __fromCanvasComponent: !0,
                        children: e(p, {
                          children: e("p", {
                            style: {
                              "--font-selector":
                                "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                              "--framer-font-family":
                                '"ADLaM Display", sans-serif',
                              "--framer-font-size": "24px",
                              "--framer-text-color": "rgb(255, 255, 255)",
                            },
                            children: "SGT. Stubby",
                          }),
                        }),
                        className: "framer-1jg7j4x",
                        fonts: ["GF;ADLaM Display-regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    b("div", {
                      className: "framer-1eukdbb",
                      children: [
                        e("div", {
                          className: "framer-1m01qxe",
                          children: e(B, {
                            href: "https://t.me/StubbyonSol",
                            motionChild: !0,
                            nodeId: "ER6DYTogL",
                            openInNewTab: !0,
                            scopeId: "augiA20Il",
                            children: e(me, {
                              as: "a",
                              className: "framer-16a10ng framer-lux5qc",
                              "data-framer-name": "Vector (4)",
                              opacity: 1,
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 43 36"><path d="M 39.509 0.856 L 1.413 15.171 C -0.12 15.837 -0.638 17.172 1.043 17.897 L 10.816 20.924 L 34.446 6.693 C 35.736 5.799 37.058 6.038 35.921 7.02 L 15.626 24.926 L 14.988 32.504 C 15.579 33.674 16.66 33.679 17.35 33.098 L 22.964 27.921 L 32.581 34.938 C 34.815 36.226 36.03 35.395 36.51 33.033 L 42.818 3.93 C 43.473 1.023 42.356 -0.258 39.509 0.856 Z" fill="rgb(255, 255, 255)" stroke-width="0.5" stroke="rgba(0,0,0,1)" stroke-miterlimit="10"></path></svg>',
                              svgContentId: 9677265671,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        e("div", {
                          className: "framer-c1yd3o",
                          children: e(B, {
                            href: "https://x.com/StubbyonSol",
                            motionChild: !0,
                            nodeId: "cvWL6ZWSl",
                            openInNewTab: !0,
                            scopeId: "augiA20Il",
                            children: e(me, {
                              as: "a",
                              className: "framer-1rgi1qs framer-lux5qc",
                              "data-framer-name": "Graphic",
                              opacity: 1,
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 39"><path d="M 30.712 1.828 L 36.694 1.828 L 23.629 16.799 L 39 37.172 L 26.966 37.172 L 17.54 24.814 L 6.754 37.172 L 0.77 37.172 L 14.744 21.157 L 0 1.828 L 12.341 1.828 L 20.86 13.121 L 30.715 1.828 Z M 28.616 33.584 L 31.931 33.584 L 10.537 5.228 L 6.983 5.228 Z" fill="rgb(255, 255, 255)"></path></svg>',
                              svgContentId: 10211887273,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                      ],
                    }),
                    e(h, {
                      __fromCanvasComponent: !0,
                      children: e(p, {
                        children: e("p", {
                          style: {
                            "--font-selector": "R0Y7TW9uYSBTYW5zLXJlZ3VsYXI=",
                            "--framer-font-family":
                              '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                            "--framer-text-color": "rgb(255, 255, 255)",
                          },
                          children:
                            "\xA9 2026 Sgt. Stubby. All rights reserved.",
                        }),
                      }),
                      className: "framer-1ctxi85",
                      fonts: ["GF;Mona Sans-regular"],
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  ],
                }),
                b("div", {
                  className: "framer-11g6xre",
                  children: [
                    e(h, {
                      __fromCanvasComponent: !0,
                      children: e(p, {
                        children: e("p", {
                          style: {
                            "--font-selector": "R0Y7TW9uYSBTYW5zLTYwMA==",
                            "--framer-font-family":
                              '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                            "--framer-font-size": "85px",
                            "--framer-font-weight": "600",
                            "--framer-text-color": "rgb(255, 255, 255)",
                          },
                          children: "Honourarium",
                        }),
                      }),
                      className: "framer-u8fv76",
                      fonts: ["GF;Mona Sans-600"],
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    b("div", {
                      className: "framer-1to8kou",
                      children: [
                        b("div", {
                          className: "framer-2k85ez",
                          children: [
                            e(de, {
                              children: e(pe, {
                                className: "framer-1yrjai2-container",
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: "Gyxy8rQfS",
                                scopeId: "augiA20Il",
                                children: e(U, {
                                  alignment: "center",
                                  direction: "bottom",
                                  fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !0,
                                    fadeInset: 0,
                                    fadeWidth: 39,
                                    overflow: !1,
                                  },
                                  gap: 25,
                                  height: "100%",
                                  hoverFactor: 1,
                                  id: "Gyxy8rQfS",
                                  layoutId: "Gyxy8rQfS",
                                  padding: 0,
                                  paddingBottom: 0,
                                  paddingLeft: 0,
                                  paddingPerSide: !1,
                                  paddingRight: 0,
                                  paddingTop: 0,
                                  sizingOptions: {
                                    heightType: !0,
                                    widthType: !0,
                                  },
                                  slots: [
                                    e(v, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 768,
                                        pixelWidth: 1024,
                                        sizes: "441px",
                                        src: "/framerusercontent.com/images/j1XewB3LyqaAERYgsO5vUQ072Xk.jpg",
                                        srcSet:
                                          "/framerusercontent.com/images/j1XewB3LyqaAERYgsO5vUQ072Xk.jpg?scale-down-to=512 512w,/framerusercontent.com/images/j1XewB3LyqaAERYgsO5vUQ072Xk.jpg 1024w",
                                      },
                                      className: "framer-1o6unta",
                                      children: e(v, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          pixelHeight: 480,
                                          pixelWidth: 574,
                                          sizes: "441px",
                                          src: "/framerusercontent.com/images/coM6x532mhUusnTVwlN8vLT6Fw.jpg",
                                          srcSet:
                                            "/framerusercontent.com/images/coM6x532mhUusnTVwlN8vLT6Fw.jpg?scale-down-to=512 512w,/framerusercontent.com/images/coM6x532mhUusnTVwlN8vLT6Fw.jpg 574w",
                                        },
                                        className: "framer-1fk3lir",
                                      }),
                                    }),
                                    e(v, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 768,
                                        pixelWidth: 1024,
                                        sizes: "441px",
                                        src: "/framerusercontent.com/images/fJGJ2FrvilBeni2vgOswCOHRnY.jpg",
                                        srcSet:
                                          "/framerusercontent.com/images/fJGJ2FrvilBeni2vgOswCOHRnY.jpg?scale-down-to=512 512w,/framerusercontent.com/images/fJGJ2FrvilBeni2vgOswCOHRnY.jpg 1024w",
                                      },
                                      className: "framer-eq4095",
                                      children: e(v, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          pixelHeight: 417,
                                          pixelWidth: 1280,
                                          sizes: "441px",
                                          src: "/framerusercontent.com/images/jW2YKtGjNFfSQBP6hYzo64nJQ.png",
                                          srcSet:
                                            "/framerusercontent.com/images/jW2YKtGjNFfSQBP6hYzo64nJQ.png?scale-down-to=512 512w,/framerusercontent.com/images/jW2YKtGjNFfSQBP6hYzo64nJQ.png?scale-down-to=1024 1024w,/framerusercontent.com/images/jW2YKtGjNFfSQBP6hYzo64nJQ.png 1280w",
                                        },
                                        className: "framer-1tim7j2",
                                      }),
                                    }),
                                    e(v, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 483,
                                        pixelWidth: 569,
                                        sizes: "441px",
                                        src: "/framerusercontent.com/images/f2M1qzt7Kuef0wbES7jTwYsSsI.jpg",
                                        srcSet:
                                          "/framerusercontent.com/images/f2M1qzt7Kuef0wbES7jTwYsSsI.jpg?scale-down-to=512 512w,/framerusercontent.com/images/f2M1qzt7Kuef0wbES7jTwYsSsI.jpg 569w",
                                      },
                                      className: "framer-jqyhls",
                                      children: e(v, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          pixelHeight: 161,
                                          pixelWidth: 310,
                                          src: "/framerusercontent.com/images/Szu8erMkrNxe9q48lKubqCzgDJU.jpg",
                                        },
                                        className: "framer-zkns1u",
                                      }),
                                    }),
                                  ],
                                  speed: 100,
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                            e("div", {
                              className: "framer-sm75t3",
                              "data-border": !0,
                            }),
                          ],
                        }),
                        e("div", {
                          className: "framer-17nst5l",
                          children: e(de, {
                            children: e(pe, {
                              className: "framer-1adms4n-container",
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: "zom310xpY",
                              scopeId: "augiA20Il",
                              children: e(U, {
                                alignment: "center",
                                direction: "top",
                                fadeOptions: {
                                  fadeAlpha: 0,
                                  fadeContent: !0,
                                  fadeInset: 0,
                                  fadeWidth: 17,
                                  overflow: !1,
                                },
                                gap: 25,
                                height: "100%",
                                hoverFactor: 1,
                                id: "zom310xpY",
                                layoutId: "zom310xpY",
                                padding: 0,
                                paddingBottom: 0,
                                paddingLeft: 0,
                                paddingPerSide: !1,
                                paddingRight: 0,
                                paddingTop: 0,
                                sizingOptions: {
                                  heightType: !0,
                                  widthType: !0,
                                },
                                slots: [
                                  e(v, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      pixelHeight: 161,
                                      pixelWidth: 310,
                                      src: "/framerusercontent.com/images/Szu8erMkrNxe9q48lKubqCzgDJU.jpg",
                                    },
                                    className: "framer-21lrsa",
                                  }),
                                  e(v, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      pixelHeight: 274,
                                      pixelWidth: 182,
                                      src: "/framerusercontent.com/images/d890fq1Sg3dT3cgwlyrtkqBiAUg.jpg",
                                    },
                                    className: "framer-1mycml6",
                                  }),
                                  e(v, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      pixelHeight: 1280,
                                      pixelWidth: 1280,
                                      sizes: "441px",
                                      src: "/framerusercontent.com/images/G9kdmPqMWydP8THGiceou85qpjI.jpg",
                                      srcSet:
                                        "/framerusercontent.com/images/G9kdmPqMWydP8THGiceou85qpjI.jpg?scale-down-to=512 512w,/framerusercontent.com/images/G9kdmPqMWydP8THGiceou85qpjI.jpg?scale-down-to=1024 1024w,/framerusercontent.com/images/G9kdmPqMWydP8THGiceou85qpjI.jpg 1280w",
                                    },
                                    className: "framer-154834n",
                                  }),
                                  e(v, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      pixelHeight: 1194,
                                      pixelWidth: 800,
                                      sizes: "441px",
                                      src: "/framerusercontent.com/images/vtm3brxaigUfgJRzhYIzV4Fmwbg.jpg",
                                      srcSet:
                                        "/framerusercontent.com/images/vtm3brxaigUfgJRzhYIzV4Fmwbg.jpg?scale-down-to=1024 686w,/framerusercontent.com/images/vtm3brxaigUfgJRzhYIzV4Fmwbg.jpg 800w",
                                    },
                                    className: "framer-1wre8wx",
                                  }),
                                  e(v, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      pixelHeight: 536,
                                      pixelWidth: 675,
                                      sizes: "441px",
                                      src: "/framerusercontent.com/images/OY8uwKXpbiA2ZuXcMcAL7TKY7GI.jpg",
                                      srcSet:
                                        "/framerusercontent.com/images/OY8uwKXpbiA2ZuXcMcAL7TKY7GI.jpg?scale-down-to=512 512w,/framerusercontent.com/images/OY8uwKXpbiA2ZuXcMcAL7TKY7GI.jpg 675w",
                                    },
                                    className: "framer-zxdu2n",
                                    children: e(v, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        pixelHeight: 274,
                                        pixelWidth: 182,
                                        src: "/framerusercontent.com/images/d890fq1Sg3dT3cgwlyrtkqBiAUg.jpg",
                                      },
                                      className: "framer-1b77ao2",
                                    }),
                                  }),
                                ],
                                speed: 100,
                                style: { height: "100%", width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                        e(de, {
                          children: e(pe, {
                            className: "framer-1fz3xz2-container",
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            nodeId: "kSOHmpYEG",
                            scopeId: "augiA20Il",
                            children: e(U, {
                              alignment: "center",
                              direction: "top",
                              fadeOptions: {
                                fadeAlpha: 0,
                                fadeContent: !0,
                                fadeInset: 0,
                                fadeWidth: 10,
                                overflow: !1,
                              },
                              gap: 25,
                              height: "100%",
                              hoverFactor: 1,
                              id: "kSOHmpYEG",
                              layoutId: "kSOHmpYEG",
                              padding: 0,
                              paddingBottom: 0,
                              paddingLeft: 0,
                              paddingPerSide: !1,
                              paddingRight: 0,
                              paddingTop: 0,
                              sizingOptions: { heightType: !0, widthType: !0 },
                              slots: [
                                e(v, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 768,
                                    pixelWidth: 1024,
                                    sizes: "441px",
                                    src: "/framerusercontent.com/images/rlWBnkvWOfAMndqqyVnEa59WJyI.jpg",
                                    srcSet:
                                      "/framerusercontent.com/images/rlWBnkvWOfAMndqqyVnEa59WJyI.jpg?scale-down-to=512 512w,/framerusercontent.com/images/rlWBnkvWOfAMndqqyVnEa59WJyI.jpg 1024w",
                                  },
                                  className: "framer-1sgiv58",
                                  children: e(v, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      pixelHeight: 480,
                                      pixelWidth: 574,
                                      sizes: "441px",
                                      src: "/framerusercontent.com/images/coM6x532mhUusnTVwlN8vLT6Fw.jpg",
                                      srcSet:
                                        "/framerusercontent.com/images/coM6x532mhUusnTVwlN8vLT6Fw.jpg?scale-down-to=512 512w,/framerusercontent.com/images/coM6x532mhUusnTVwlN8vLT6Fw.jpg 574w",
                                    },
                                    className: "framer-n2gs5c",
                                  }),
                                }),
                                e(v, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 783,
                                    pixelWidth: 781,
                                    sizes: "441px",
                                    src: "/framerusercontent.com/images/xVnAg4IqMGyZZC6zshiAc0Ss.jpg",
                                    srcSet:
                                      "/framerusercontent.com/images/xVnAg4IqMGyZZC6zshiAc0Ss.jpg 781w",
                                  },
                                  className: "framer-1v64ntq",
                                  children: e(v, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      pixelHeight: 274,
                                      pixelWidth: 182,
                                      src: "/framerusercontent.com/images/d890fq1Sg3dT3cgwlyrtkqBiAUg.jpg",
                                    },
                                    className: "framer-1c651kq",
                                  }),
                                }),
                                e(v, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 768,
                                    pixelWidth: 1024,
                                    sizes: "441px",
                                    src: "/framerusercontent.com/images/G3qogwzYiCbbLSuQnEMDsBLc8Y.jpg",
                                    srcSet:
                                      "/framerusercontent.com/images/G3qogwzYiCbbLSuQnEMDsBLc8Y.jpg?scale-down-to=512 512w,/framerusercontent.com/images/G3qogwzYiCbbLSuQnEMDsBLc8Y.jpg 1024w",
                                  },
                                  className: "framer-1cghzav",
                                  children: e(v, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      pixelHeight: 1280,
                                      pixelWidth: 1280,
                                      sizes: "441px",
                                      src: "/framerusercontent.com/images/G9kdmPqMWydP8THGiceou85qpjI.jpg",
                                      srcSet:
                                        "/framerusercontent.com/images/G9kdmPqMWydP8THGiceou85qpjI.jpg?scale-down-to=512 512w,/framerusercontent.com/images/G9kdmPqMWydP8THGiceou85qpjI.jpg?scale-down-to=1024 1024w,/framerusercontent.com/images/G9kdmPqMWydP8THGiceou85qpjI.jpg 1280w",
                                    },
                                    className: "framer-lwwik2",
                                  }),
                                }),
                                e(v, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 480,
                                    pixelWidth: 574,
                                    sizes: "441px",
                                    src: "/framerusercontent.com/images/coM6x532mhUusnTVwlN8vLT6Fw.jpg",
                                    srcSet:
                                      "/framerusercontent.com/images/coM6x532mhUusnTVwlN8vLT6Fw.jpg?scale-down-to=512 512w,/framerusercontent.com/images/coM6x532mhUusnTVwlN8vLT6Fw.jpg 574w",
                                  },
                                  className: "framer-x4g7hu",
                                }),
                              ],
                              speed: 100,
                              style: { height: "100%", width: "100%" },
                              width: "100%",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                b("div", {
                  className: "framer-157ok",
                  id: L,
                  ref: P,
                  children: [
                    b(Me, {
                      __framer__animate: { transition: tr },
                      __framer__animateOnce: !0,
                      __framer__enter: Ze,
                      __framer__exit: va,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: "framer-11gfhc1",
                      "data-border": !0,
                      children: [
                        e(v, {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: H((u?.y || 0) + 2209 + 8.0284 + 0),
                            pixelHeight: 480,
                            pixelWidth: 574,
                            positionX: "center",
                            positionY: "top",
                            sizes: "446px",
                            src: "/framerusercontent.com/images/coM6x532mhUusnTVwlN8vLT6Fw.jpg",
                            srcSet:
                              "/framerusercontent.com/images/coM6x532mhUusnTVwlN8vLT6Fw.jpg?scale-down-to=512 512w,/framerusercontent.com/images/coM6x532mhUusnTVwlN8vLT6Fw.jpg 574w",
                          },
                          className: "framer-awztrz",
                        }),
                        e("div", { className: "framer-mm2t9y" }),
                        b("div", {
                          className: "framer-10sgxtq",
                          children: [
                            e(h, {
                              __fromCanvasComponent: !0,
                              children: b(p, {
                                children: [
                                  e("div", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7TW9uYSBTYW5zLTYwMA==",
                                      "--framer-font-family":
                                        '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                                      "--framer-font-size": "30px",
                                      "--framer-font-weight": "600",
                                      "--framer-letter-spacing": "-0.02em",
                                      "--framer-line-height": "1.6em",
                                      "--framer-text-color": "rgb(251, 132, 5)",
                                    },
                                    children: "Secure & Transparent",
                                  }),
                                  e("div", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7TW9jaGl5IFBvcCBQIE9uZS1yZWd1bGFy",
                                      "--framer-font-family":
                                        '"Mochiy Pop P One", "Mochiy Pop P One Placeholder", sans-serif',
                                      "--framer-font-size": "50px",
                                      "--framer-letter-spacing": "-0.02em",
                                      "--framer-line-height": "1.6em",
                                    },
                                    children: e("span", {
                                      style: { "--framer-font-size": "30px" },
                                      children: e("br", {}),
                                    }),
                                  }),
                                ],
                              }),
                              className: "framer-1un5lrc",
                              fonts: [
                                "GF;Mona Sans-600",
                                "GF;Mochiy Pop P One-regular",
                              ],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            e(h, {
                              __fromCanvasComponent: !0,
                              children: e(p, {
                                children: e("div", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7TW9uYSBTYW5zLXJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                                    "--framer-font-size": "20px",
                                    "--framer-letter-spacing": "-0.02em",
                                    "--framer-line-height": "1.6em",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children:
                                    "Built on Solana blockchain with transparent tokenomics and verified smart contracts.",
                                }),
                              }),
                              className: "framer-jvme1z",
                              fonts: ["GF;Mona Sans-regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    b(Me, {
                      __framer__animate: { transition: $ },
                      __framer__animateOnce: !0,
                      __framer__enter: _a,
                      __framer__exit: Sa,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: "framer-8pztsc",
                      "data-border": !0,
                      children: [
                        e(v, {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: H((u?.y || 0) + 2209 + 27.0284 + 0),
                            pixelHeight: 161,
                            pixelWidth: 310,
                            positionX: "center",
                            positionY: "top",
                            src: "/framerusercontent.com/images/Szu8erMkrNxe9q48lKubqCzgDJU.jpg",
                          },
                          className: "framer-qzu4ed",
                        }),
                        e("div", { className: "framer-1uqscup" }),
                        b("div", {
                          className: "framer-cd2skr",
                          children: [
                            e(h, {
                              __fromCanvasComponent: !0,
                              children: e(p, {
                                children: e("div", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7TW9uYSBTYW5zLTYwMA==",
                                    "--framer-font-family":
                                      '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                                    "--framer-font-size": "30px",
                                    "--framer-font-weight": "600",
                                    "--framer-letter-spacing": "-0.02em",
                                    "--framer-line-height": "1.6em",
                                    "--framer-text-color": "rgb(251, 132, 5)",
                                  },
                                  children: "Community Driven",
                                }),
                              }),
                              className: "framer-jl6cx2",
                              fonts: ["GF;Mona Sans-600"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            e(h, {
                              __fromCanvasComponent: !0,
                              children: e(p, {
                                children: e("div", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7TW9uYSBTYW5zLXJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                                    "--framer-font-size": "20px",
                                    "--framer-letter-spacing": "-0.02em",
                                    "--framer-line-height": "1.6em",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children:
                                    "Built by the community, for the community. Sergeant Stubble thrives on the strength of its supporters.",
                                }),
                              }),
                              className: "framer-12ustj5",
                              fonts: ["GF;Mona Sans-regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    b(Me, {
                      __framer__animate: { transition: rr },
                      __framer__animateOnce: !0,
                      __framer__enter: Ze,
                      __framer__exit: Ca,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: "framer-1h5heym",
                      "data-border": !0,
                      children: [
                        e(v, {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: H((u?.y || 0) + 2209 + 8.0284 + 0),
                            pixelHeight: 274,
                            pixelWidth: 182,
                            positionX: "center",
                            positionY: "top",
                            src: "/framerusercontent.com/images/d890fq1Sg3dT3cgwlyrtkqBiAUg.jpg",
                          },
                          className: "framer-z79rkh",
                        }),
                        e("div", { className: "framer-x6rw9g" }),
                        b("div", {
                          className: "framer-m2in2w",
                          children: [
                            e(h, {
                              __fromCanvasComponent: !0,
                              children: e(p, {
                                children: e("div", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7TW9uYSBTYW5zLTYwMA==",
                                    "--framer-font-family":
                                      '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                                    "--framer-font-size": "30px",
                                    "--framer-font-weight": "600",
                                    "--framer-letter-spacing": "-0.02em",
                                    "--framer-line-height": "1.6em",
                                    "--framer-text-color": "rgb(251, 132, 5)",
                                  },
                                  children: "True Respect!",
                                }),
                              }),
                              className: "framer-1gkmrnq",
                              fonts: ["GF;Mona Sans-600"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            e(h, {
                              __fromCanvasComponent: !0,
                              children: e(p, {
                                children: e("div", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7TW9uYSBTYW5zLXJlZ3VsYXI=",
                                    "--framer-font-family":
                                      '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                                    "--framer-font-size": "20px",
                                    "--framer-letter-spacing": "-0.02em",
                                    "--framer-line-height": "1.6em",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children:
                                    "Unlike other meme tokens, Sergent stubby brings true honour and respect to his supporters.",
                                }),
                              }),
                              className: "framer-hbfamf",
                              fonts: ["GF;Mona Sans-regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e($e, {
                  animate: Kt,
                  className: "framer-11j1159",
                  "data-border": !0,
                  "data-framer-appear-id": "11j1159",
                  initial: Dt,
                  optimized: !0,
                  children: e(h, {
                    __fromCanvasComponent: !0,
                    children: e(p, {
                      children: e("p", {
                        style: {
                          "--font-selector": "R0Y7TW9uYSBTYW5zLTUwMA==",
                          "--framer-font-family":
                            '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                          "--framer-font-size": "12px",
                          "--framer-font-weight": "500",
                          "--framer-text-color": "rgb(255, 255, 255)",
                        },
                        children: "Solana Ecosystem",
                      }),
                    }),
                    className: "framer-6aut0j",
                    fonts: ["GF;Mona Sans-500"],
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                }),
                e(sa, {
                  animate: Ya,
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 819.2,
                    intrinsicWidth: 819.2,
                    loading: H((u?.y || 0) + 195),
                    pixelHeight: 500,
                    pixelWidth: 500,
                    src: "/framerusercontent.com/images/MPqNQETYRusncJDhi8AZeE.png",
                  },
                  className: "framer-141m624",
                  "data-framer-appear-id": "141m624",
                  "data-framer-name":
                    "ChatGPT Image Apr 1, 2025, 10 44_09 AM 1",
                  initial: Jt,
                  optimized: !0,
                  transformTemplate: ye,
                }),
                e(Ht, {
                  __fromCanvasComponent: !0,
                  animate: Pa,
                  children: e(p, {
                    children: e("h1", {
                      style: {
                        "--font-selector":
                          "R0Y7TW9jaGl5IFBvcCBPbmUtcmVndWxhcg==",
                        "--framer-font-family":
                          '"Mochiy Pop One", "Mochiy Pop One Placeholder", sans-serif',
                        "--framer-font-size": "225px",
                        "--framer-letter-spacing": "-0.04em",
                        "--framer-line-height": "1.1em",
                        "--framer-text-color": "rgb(22, 12, 42)",
                        background: "linear-gradient(90deg, #5C1BA6, #008F5D)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      },
                      children: "Sgt. Stubby",
                    }),
                }),
                  className: "framer-gfbh5n",
                  "data-framer-appear-id": "gfbh5n",
                  fonts: ["GF;Mochiy Pop One-regular"],
                  initial: Jt,
                  optimized: !0,
                  transformTemplate: ye,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(Ht, {
                  __fromCanvasComponent: !0,
                  animate: Kt,
                  children: e(p, {
                    children: e("p", {
                      style: {
                        "--font-selector": "R0Y7TW9uYSBTYW5zLTUwMA==",
                        "--framer-font-family":
                          '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                        "--framer-font-size": "20px",
                        "--framer-font-weight": "500",
                        "--framer-text-color": "rgb(255, 255, 255)",
                      },
                      children:
                        "Sergeant Stubby was a brave dog who served in World War I and became the mascot of the U.S. Army\u2019s 102nd Infantry Regiment.",
                    }),
                  }),
                  className: "framer-9r4utj",
                  "data-framer-appear-id": "9r4utj",
                  fonts: ["GF;Mona Sans-500"],
                  initial: Ma,
                  optimized: !0,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                b($e, {
                  animate: La,
                  className: "framer-1gk483p",
                  "data-framer-appear-id": "1gk483p",
                  initial: Ea,
                  optimized: !0,
                  children: [
                    e("div", {
                      className: "framer-hc0y1c",
                      children: e(B, {
                        href: "https://t.me/StubbyonSol",
                        motionChild: !0,
                        nodeId: "Z5botGE03",
                        openInNewTab: !0,
                        scopeId: "augiA20Il",
                        children: e(me, {
                          as: "a",
                          className: "framer-ecmt6g framer-lux5qc",
                          "data-framer-name": "Vector (4)",
                          opacity: 1,
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 43 36"><path d="M 39.509 0.856 L 1.413 15.171 C -0.12 15.837 -0.638 17.172 1.043 17.897 L 10.816 20.924 L 34.446 6.693 C 35.736 5.799 37.058 6.038 35.921 7.02 L 15.626 24.926 L 14.988 32.504 C 15.579 33.674 16.66 33.679 17.35 33.098 L 22.964 27.921 L 32.581 34.938 C 34.815 36.226 36.03 35.395 36.51 33.033 L 42.818 3.93 C 43.473 1.023 42.356 -0.258 39.509 0.856 Z" fill="rgba(0, 0, 0, 0.91)"></path></svg>',
                          svgContentId: 11374362415,
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-7uywbk",
                      children: e(B, {
                        href: "https://x.com/StubbyonSol",
                        motionChild: !0,
                        nodeId: "i_Fa9ZOc1",
                        openInNewTab: !0,
                        scopeId: "augiA20Il",
                        children: e(me, {
                          as: "a",
                          className: "framer-1lzsg90 framer-lux5qc",
                          "data-framer-name": "Graphic",
                          opacity: 1,
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 39"><path d="M 30.712 1.828 L 36.694 1.828 L 23.629 16.799 L 39 37.172 L 26.966 37.172 L 17.54 24.814 L 6.754 37.172 L 0.77 37.172 L 14.744 21.157 L 0 1.828 L 12.341 1.828 L 20.86 13.121 L 30.715 1.828 Z M 28.616 33.584 L 31.931 33.584 L 10.537 5.228 L 6.983 5.228 Z" fill="rgba(0, 0, 0, 0.91)"></path></svg>',
                          svgContentId: 9797123898,
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    e("div", { className: "framer-otk856" }),
                  ],
                }),
                e(v, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 417,
                    intrinsicWidth: 1280,
                    loading: H((u?.y || 0) + 1739),
                    pixelHeight: 417,
                    pixelWidth: 1280,
                    sizes: "1280px",
                    src: "/framerusercontent.com/images/jW2YKtGjNFfSQBP6hYzo64nJQ.png",
                    srcSet:
                      "/framerusercontent.com/images/jW2YKtGjNFfSQBP6hYzo64nJQ.png?scale-down-to=512 512w,/framerusercontent.com/images/jW2YKtGjNFfSQBP6hYzo64nJQ.png?scale-down-to=1024 1024w,/framerusercontent.com/images/jW2YKtGjNFfSQBP6hYzo64nJQ.png 1280w",
                  },
                  className: "framer-1ml1qhb",
                  "data-border": !0,
                  "data-framer-name": "Photo 2025-07-10_13-27-37",
                  transformTemplate: ye,
                }),
                b("div", {
                  className: "framer-p8lniv",
                  children: [
                    e(h, {
                      __fromCanvasComponent: !0,
                      children: e(p, {
                        children: e("p", {
                          style: {
                            "--font-selector": "R0Y7TW9uYSBTYW5zLTYwMA==",
                            "--framer-font-family":
                              '"Mona Sans", "Mona Sans Placeholder", sans-serif',
                            "--framer-font-size": "33px",
                            "--framer-font-weight": "600",
                            "--framer-text-color": "rgb(255, 255, 255)",
                          },
                          children:
                            "TBA",
                        }),
                      }),
                      className: "framer-j9wuxb",
                      fonts: ["GF;Mona Sans-600"],
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    e(de, {
                      children: e(pe, {
                        className: "framer-txaylv-container",
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: "Xs3T7E6Md",
                        rendersWithMotion: !0,
                        scopeId: "augiA20Il",
                        whileHover: Ra,
                        whileTap: Fa,
                        children: e(xe, {
                          borderRadius: 15,
                          bottomLeftRadius: 15,
                          bottomRightRadius: 15,
                          color: "rgb(0, 0, 0)",
                          content: "TBA",
                          fill: "rgb(255, 255, 255)",
                          font: {
                            fontFamily:
                              '"Mochiy Pop P One", "Mochiy Pop P One Placeholder", sans-serif',
                            fontSize: "28px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            letterSpacing: "0em",
                            lineHeight: "1em",
                          },
                          height: "100%",
                          id: "Xs3T7E6Md",
                          isMixedBorderRadius: !1,
                          label: "COPY",
                          layoutId: "Xs3T7E6Md",
                          padding: 10,
                          paddingBottom: 10,
                          paddingLeft: 10,
                          paddingPerSide: !1,
                          paddingRight: 10,
                          paddingTop: 10,
                          style: { height: "100%", width: "100%" },
                          topLeftRadius: 15,
                          topRightRadius: 15,
                          width: "100%",
                        }),
                      }),
                    }),
                  ],
                }),
                e(h, {
                  __fromCanvasComponent: !0,
                  children: e(p, {
                    children: e("p", {
                      style: {
                        "--font-selector": "R0Y7Q2hld3ktcmVndWxhcg==",
                        "--framer-font-family": '"Chewy", sans-serif',
                        "--framer-font-size": "160px",
                        "--framer-text-color":
                          "var(--token-ae372ced-fa56-47e5-82d6-81d5bc5aa9b1, rgb(255, 251, 0))",
                      },
                      children: "1 Billion",
                    }),
                  }),
                  className: "framer-brxlh1",
                  "data-framer-name": "1 Billion",
                  effect: be,
                  fonts: ["GF;Chewy-regular"],
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(h, {
                  __fromCanvasComponent: !0,
                  children: e(p, {
                    children: e("p", {
                      style: {
                        "--font-selector": "R0Y7Q2hld3ktcmVndWxhcg==",
                        "--framer-font-family": '"Chewy", sans-serif',
                        "--framer-font-size": "160px",
                        "--framer-text-color":
                          "var(--token-ae372ced-fa56-47e5-82d6-81d5bc5aa9b1, rgb(255, 251, 0))",
                      },
                      children: "SOLANA",
                    }),
                  }),
                  className: "framer-wgnyvq",
                  "data-framer-name": "1 Billion",
                  effect: be,
                  fonts: ["GF;Chewy-regular"],
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(h, {
                  __fromCanvasComponent: !0,
                  children: e(p, {
                    children: e("p", {
                      style: {
                        "--font-selector": "R0Y7Q2hld3ktcmVndWxhcg==",
                        "--framer-font-family": '"Chewy", sans-serif',
                        "--framer-font-size": "160px",
                        "--framer-text-color": "rgb(255, 21, 0)",
                      },
                      children: "TOKENOMICS",
                    }),
                  }),
                  className: "framer-voz9zm",
                  "data-framer-name": "1 Billion",
                  effect: be,
                  fonts: ["GF;Chewy-regular"],
                  transformTemplate: ye,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(h, {
                  __fromCanvasComponent: !0,
                  children: e(p, {
                    children: e("p", {
                      style: {
                        "--font-selector": "R0Y7R3JhbmRzdGFuZGVyLXJlZ3VsYXI=",
                        "--framer-font-family": '"Grandstander", sans-serif',
                        "--framer-font-size": "22.48px",
                        "--framer-text-color":
                          "var(--token-eb3de5d8-7fc7-4141-9fa5-a1393dfb87f4, rgb(255, 255, 255))",
                      },
                      children: "SUPPLY",
                    }),
                  }),
                  className: "framer-1issmv6",
                  "data-framer-name": "SUPPLY OF NUTS",
                  effect: ze,
                  fonts: ["GF;Grandstander-regular"],
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(h, {
                  __fromCanvasComponent: !0,
                  children: e(p, {
                    children: e("p", {
                      style: {
                        "--font-selector": "R0Y7Q2hld3ktcmVndWxhcg==",
                        "--framer-font-family": '"Chewy", sans-serif',
                        "--framer-font-size": "160px",
                        "--framer-text-color":
                          "var(--token-ae372ced-fa56-47e5-82d6-81d5bc5aa9b1, rgb(255, 251, 0))",
                      },
                      children: "0%",
                    }),
                  }),
                  className: "framer-18sn4m0",
                  "data-framer-name": "1 Billion",
                  effect: be,
                  fonts: ["GF;Chewy-regular"],
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(h, {
                  __fromCanvasComponent: !0,
                  children: e(p, {
                    children: e("p", {
                      style: {
                        "--font-selector": "R0Y7R3JhbmRzdGFuZGVyLXJlZ3VsYXI=",
                        "--framer-font-family": '"Grandstander", sans-serif',
                        "--framer-font-size": "26px",
                        "--framer-text-color":
                          "var(--token-eb3de5d8-7fc7-4141-9fa5-a1393dfb87f4, rgb(255, 255, 255))",
                      },
                      children: "TAXES (BUY/SELL)",
                    }),
                  }),
                  className: "framer-qwvnj1",
                  "data-framer-name": "SUPPLY OF NUTS",
                  effect: ze,
                  fonts: ["GF;Grandstander-regular"],
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(h, {
                  __fromCanvasComponent: !0,
                  children: e(p, {
                    children: e("p", {
                      style: {
                        "--font-selector": "R0Y7R3JhbmRzdGFuZGVyLXJlZ3VsYXI=",
                        "--framer-font-family": '"Grandstander", sans-serif',
                        "--framer-font-size": "28px",
                        "--framer-text-color":
                          "var(--token-eb3de5d8-7fc7-4141-9fa5-a1393dfb87f4, rgb(255, 255, 255))",
                      },
                      children: "NETWORK",
                    }),
                  }),
                  className: "framer-1kzrx0k",
                  "data-framer-name": "SUPPLY OF NUTS",
                  effect: ze,
                  fonts: ["GF;Grandstander-regular"],
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(h, {
                  __fromCanvasComponent: !0,
                  children: e(p, {
                    children: e("p", {
                      style: {
                        "--font-selector": "R0Y7R3JhbmRzdGFuZGVyLXJlZ3VsYXI=",
                        "--framer-font-family": '"Grandstander", sans-serif',
                        "--framer-font-size": "28px",
                        "--framer-text-color":
                          "var(--token-eb3de5d8-7fc7-4141-9fa5-a1393dfb87f4, rgb(255, 255, 255))",
                      },
                      children: "LIQUIDITY",
                    }),
                  }),
                  className: "framer-y0k4d7",
                  "data-framer-name": "SUPPLY OF NUTS",
                  effect: ze,
                  fonts: ["GF;Grandstander-regular"],
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                e(h, {
                  __fromCanvasComponent: !0,
                  children: e(p, {
                    children: e("p", {
                      style: {
                        "--font-selector": "R0Y7Q2hld3ktcmVndWxhcg==",
                        "--framer-font-family": '"Chewy", sans-serif',
                        "--framer-font-size": "111px",
                        "--framer-text-color":
                          "var(--token-ae372ced-fa56-47e5-82d6-81d5bc5aa9b1, rgb(255, 251, 0))",
                      },
                      children: "LP BURNED",
                    }),
                  }),
                  className: "framer-pv95co",
                  "data-framer-name": "1 Billion",
                  effect: be,
                  fonts: ["GF;Chewy-regular"],
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              ],
            }),
            e("div", { id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Ga = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    "#main { position: relative; isolation: isolate; }",
    ".site-bg-gif { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 0; pointer-events: none; object-fit: cover; object-position: center; }",
    "#main>[data-framer-root] { position: relative; z-index: 1; width: 1477px !important; margin-left: auto !important; margin-right: auto !important; }",
    ".framer-0Y6PA.framer-lux5qc, .framer-0Y6PA .framer-lux5qc { display: block; }",
    ".framer-0Y6PA.framer-72rtr7 { background-color: transparent; height: 5756px; overflow: hidden; position: relative; width: 1477px; }",
    ".framer-0Y6PA .framer-svz3b { --border-bottom-width: 1px; --border-color: #424242; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; -webkit-backdrop-filter: blur(67px); align-content: center; align-items: center; backdrop-filter: blur(67px); background-color: rgba(41, 41, 41, 0.62); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: fixed; top: 32px; transform: translateX(-50%); width: min-content; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }",
    ".framer-0Y6PA .framer-zmdxru, .framer-0Y6PA .framer-rqxjva { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 68px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-0Y6PA .framer-llrg43 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 48px); overflow: visible; position: relative; width: 48px; z-index: 5; }",
    ".framer-0Y6PA .framer-1k8optr, .framer-0Y6PA .framer-1m31yjg, .framer-0Y6PA .framer-1q9vd3t, .framer-0Y6PA .framer-1e1xveg, .framer-0Y6PA .framer-1jg7j4x, .framer-0Y6PA .framer-1ctxi85, .framer-0Y6PA .framer-u8fv76, .framer-0Y6PA .framer-j9wuxb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-0Y6PA .framer-1tsgjab { cursor: pointer; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-0Y6PA .framer-vhp8hh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 24px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-0Y6PA .framer-xq6r2p, .framer-0Y6PA .framer-pvdqz1 { --framer-custom-cursors: pointer; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-0Y6PA .framer-1j7wkl9 { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 41px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 155px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-0Y6PA .framer-gx941v { --border-bottom-width: 3px; --border-color: #424242; --border-left-width: 3px; --border-right-width: 3px; --border-style: solid; --border-top-width: 3px; background-color: #000000; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.77); flex: none; gap: 10px; height: 760px; left: calc(50.00000000000002% - 1388px / 2); overflow: hidden; position: absolute; top: 930px; width: 1388px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-0Y6PA .framer-1vqbhpv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 44px; position: absolute; top: 119px; white-space: pre; width: auto; }",
    ".framer-0Y6PA .framer-15aa3ze { --border-bottom-width: 2px; --border-color: rgba(194, 192, 192, 0.8); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: rgba(135, 85, 85, 0); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 33px; justify-content: center; left: calc(49.92795389048993% - 129px / 2); overflow: hidden; padding: 10px; position: absolute; top: 58px; width: 129px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-0Y6PA .framer-1eeso6b, .framer-0Y6PA .framer-1vtsb5u, .framer-0Y6PA .framer-6aut0j { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }",
    ".framer-0Y6PA .framer-1cvri5n { -webkit-backdrop-filter: blur(57px); backdrop-filter: blur(57px); background-color: #ffffff; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; bottom: 162px; flex: none; gap: 10px; height: 379px; left: 32px; overflow: hidden; position: absolute; width: 1034px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-0Y6PA .framer-ox9orz { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 28px; position: absolute; top: 50%; transform: translateY(-50%); white-space: pre-wrap; width: 737px; word-break: break-word; word-wrap: break-word; }",
    ".framer-0Y6PA .framer-1vs0435 { border-bottom-left-radius: 66px; border-bottom-right-radius: 66px; border-top-left-radius: 66px; border-top-right-radius: 66px; flex: none; height: 624px; left: 789px; overflow: visible; position: absolute; top: calc(53.02631578947371% - 624px / 2); width: 565px; }",
    ".framer-0Y6PA .framer-xvp1df { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: auto; justify-content: center; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 3674px; transform: translateX(-50%); width: 804px; }",
    ".framer-0Y6PA .framer-10oi1l0 { --border-bottom-width: 2px; --border-color: rgba(120, 114, 114, 0.8); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: rgba(255, 255, 255, 0); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 33px; justify-content: center; overflow: hidden; padding: 10px; position: relative; width: 129px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-0Y6PA .framer-1ezyucq { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 164px; position: relative; white-space: pre-wrap; width: 103%; word-break: break-word; word-wrap: break-word; }",
    ".framer-0Y6PA .framer-1ddp95p { background: linear-gradient(92deg, #1a102a 0%, #25164a 22%, #2e1a66 45%, #1c2e4c 72%, #121e2e 100%); box-shadow: inset 0 1px 0 rgba(153,69,255,.28), inset 0 -1px 0 rgba(20,241,149,.16); align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 135px; justify-content: space-between; left: 0px; overflow: hidden; padding: 0 5%; position: absolute; right: 0px; top: 5462px; }",
    ".framer-0Y6PA .framer-1q8fnlj { --framer-link-text-color: #14F195; --framer-link-text-decoration: underline; flex: none; height: auto; left: auto; position: relative; top: auto; transform: none; white-space: pre; width: auto; }",
    ".framer-0Y6PA .framer-khtyt2 { --border-bottom-width: 3px; --border-color: #00a85c; --border-left-width: 3px; --border-right-width: 3px; --border-style: solid; --border-top-width: 3px; align-content: center; align-items: center; background: linear-gradient(180deg, #5cff9e 0%, #00d97a 52%, #00c26d 100%); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 88px; justify-content: center; left: auto; overflow: hidden; padding: 0px 20px; position: relative; text-decoration: none; top: auto; transform: none; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-0Y6PA .framer-5inbai { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 115px; justify-content: space-between; left: calc(50.033852403520676% - 1404px / 2); overflow: hidden; padding: 0px; position: absolute; top: 5629px; width: 1404px; }",
    ".framer-0Y6PA .framer-1eukdbb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 62px; justify-content: space-around; overflow: hidden; padding: 0px; position: relative; width: 273px; }",
    ".framer-0Y6PA .framer-1m01qxe, .framer-0Y6PA .framer-hc0y1c { cursor: pointer; flex: none; height: 36px; overflow: hidden; position: relative; width: 43px; }",
    ".framer-0Y6PA .framer-16a10ng, .framer-0Y6PA .framer-ecmt6g { flex: none; height: 36px; left: calc(48.837209302325604% - 43px / 2); position: absolute; text-decoration: none; top: calc(50.00000000000002% - 36px / 2); width: 43px; }",
    ".framer-0Y6PA .framer-c1yd3o, .framer-0Y6PA .framer-7uywbk { cursor: pointer; flex: none; height: 39px; overflow: hidden; position: relative; width: 39px; }",
    ".framer-0Y6PA .framer-1rgi1qs, .framer-0Y6PA .framer-1lzsg90 { flex: none; height: 39px; left: calc(48.71794871794874% - 39px / 2); position: absolute; text-decoration: none; top: calc(48.71794871794874% - 39px / 2); width: 39px; }",
    ".framer-0Y6PA .framer-11g6xre { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: absolute; top: 4155px; transform: translateX(-50%); width: 1403px; }",
    ".framer-0Y6PA .framer-1to8kou { flex: none; gap: 10px; height: 1073px; overflow: hidden; position: relative; width: 100%; }",
    ".framer-0Y6PA .framer-2k85ez { bottom: 0px; flex: none; left: calc(50.035637918745564% - 441px / 2); overflow: hidden; position: absolute; top: -285px; width: 441px; }",
    ".framer-0Y6PA .framer-1yrjai2-container { bottom: 0px; flex: none; left: -2px; position: absolute; right: -3px; top: 0px; }",
    ".framer-0Y6PA .framer-1o6unta, .framer-0Y6PA .framer-eq4095, .framer-0Y6PA .framer-jqyhls, .framer-0Y6PA .framer-21lrsa, .framer-0Y6PA .framer-1mycml6, .framer-0Y6PA .framer-154834n, .framer-0Y6PA .framer-1wre8wx, .framer-0Y6PA .framer-zxdu2n, .framer-0Y6PA .framer-1sgiv58, .framer-0Y6PA .framer-1v64ntq, .framer-0Y6PA .framer-1cghzav, .framer-0Y6PA .framer-x4g7hu { border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; height: 541px; overflow: hidden; position: relative; width: 441px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-0Y6PA .framer-1fk3lir, .framer-0Y6PA .framer-1tim7j2, .framer-0Y6PA .framer-zkns1u, .framer-0Y6PA .framer-1b77ao2, .framer-0Y6PA .framer-n2gs5c, .framer-0Y6PA .framer-1c651kq, .framer-0Y6PA .framer-lwwik2 { border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; flex: none; height: 541px; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 441px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-0Y6PA .framer-sm75t3 { --border-bottom-width: 1px; --border-color: #222222; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; -webkit-filter: blur(28px); background-color: #000000; filter: blur(28px); flex: none; height: 82px; left: -2px; overflow: hidden; position: absolute; right: 0px; top: 255px; }",
    ".framer-0Y6PA .framer-17nst5l { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 441px; }",
    ".framer-0Y6PA .framer-1adms4n-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: -1px; top: 0px; }",
    ".framer-0Y6PA .framer-1fz3xz2-container { bottom: 0px; flex: none; left: 950px; position: absolute; top: 0px; width: 446px; }",
    ".framer-0Y6PA .framer-157ok { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 12%; justify-content: center; left: calc(49.93472584856399% - 1397px / 2); overflow: hidden; padding: 0px; position: absolute; top: 2209px; width: 1397px; }",
    ".framer-0Y6PA .framer-11gfhc1 { --border-bottom-width: 3px; --border-color: #424242; --border-left-width: 3px; --border-right-width: 3px; --border-style: solid; --border-top-width: 3px; background-color: #050505; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; box-shadow: 10px 11px 10px 10px rgba(0, 0, 0, 0.69); flex: none; gap: 10px; height: 662px; overflow: hidden; position: relative; width: 446px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-0Y6PA .framer-awztrz, .framer-0Y6PA .framer-qzu4ed, .framer-0Y6PA .framer-z79rkh { flex: none; height: 423px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }",
    ".framer-0Y6PA .framer-mm2t9y { -webkit-filter: blur(32px); background-color: #050505; filter: blur(32px); flex: none; height: 226px; left: -85px; overflow: hidden; position: absolute; right: -85px; top: 346px; }",
    ".framer-0Y6PA .framer-10sgxtq { flex: none; height: 201px; left: 43px; overflow: hidden; position: absolute; right: 27px; top: 423px; }",
    ".framer-0Y6PA .framer-1un5lrc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 45px; left: 0px; position: absolute; top: 13px; white-space: pre; width: auto; }",
    ".framer-0Y6PA .framer-jvme1z { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; bottom: 26px; flex: none; height: auto; left: 0px; position: absolute; right: 34px; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; }",
    ".framer-0Y6PA .framer-8pztsc { --border-bottom-width: 3px; --border-color: #424242; --border-left-width: 3px; --border-right-width: 3px; --border-style: solid; --border-top-width: 3px; background-color: #050505; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.66); flex: none; gap: 10px; height: 624px; overflow: hidden; position: relative; width: 446px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-0Y6PA .framer-1uqscup { -webkit-filter: blur(32px); background-color: #050505; filter: blur(32px); flex: none; height: 149px; left: -85px; overflow: hidden; position: absolute; right: -85px; top: 348px; }",
    ".framer-0Y6PA .framer-cd2skr { flex: none; height: 201px; left: 35px; overflow: hidden; position: absolute; right: 35px; top: 423px; }",
    ".framer-0Y6PA .framer-jl6cx2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 44px; left: 0px; position: absolute; top: 15px; white-space: pre; width: auto; }",
    ".framer-0Y6PA .framer-12ustj5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; bottom: 26px; flex: none; height: auto; left: 0px; position: absolute; right: 0px; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; }",
    ".framer-0Y6PA .framer-1h5heym { --border-bottom-width: 3px; --border-color: #424242; --border-left-width: 3px; --border-right-width: 3px; --border-style: solid; --border-top-width: 3px; background-color: #050505; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.66); flex: none; gap: 10px; height: 662px; overflow: hidden; position: relative; width: 446px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-0Y6PA .framer-x6rw9g { -webkit-filter: blur(32px); background-color: #050505; filter: blur(32px); flex: none; height: 149px; left: -97px; overflow: hidden; position: absolute; right: -73px; top: 361px; }",
    ".framer-0Y6PA .framer-m2in2w { flex: none; height: 211px; left: 35px; overflow: hidden; position: absolute; right: 35px; top: 423px; }",
    ".framer-0Y6PA .framer-1gkmrnq { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 59px; left: 0px; position: absolute; top: 15px; white-space: pre; width: auto; }",
    ".framer-0Y6PA .framer-hbfamf { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; bottom: 36px; flex: none; height: auto; left: 0px; position: absolute; right: 0px; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; }",
    ".framer-0Y6PA .framer-11j1159 { --border-bottom-width: 2px; --border-color: rgba(9, 101, 237, 0.8); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background-color: #0040ff; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 28px; justify-content: center; left: calc(49.93472584856399% - 139px / 2); overflow: hidden; padding: 10px; position: absolute; top: 149px; width: 139px; will-change: var(--framer-will-change-effect-override, transform); }",
    ".framer-0Y6PA .framer-141m624 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 632px); left: 49%; overflow: visible; position: absolute; top: 195px; transform: translateX(-50%); width: 632px; will-change: var(--framer-will-change-effect-override, transform); z-index: 5; }",
    ".framer-0Y6PA .framer-gfbh5n { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 189px; transform: translateX(-50%); white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 0; }",
    ".framer-0Y6PA .framer-9r4utj { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 981px; position: absolute; top: 677px; white-space: pre-wrap; width: 31%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }",
    ".framer-0Y6PA .framer-1gk483p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 62px; justify-content: space-around; left: 72px; overflow: hidden; padding: 0px; position: absolute; top: 677px; width: 252px; will-change: var(--framer-will-change-effect-override, transform); }",
    ".framer-0Y6PA .framer-otk856 { cursor: pointer; flex: none; height: 41px; overflow: hidden; position: relative; width: 41px; }",
    ".framer-0Y6PA .framer-1ml1qhb { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; aspect-ratio: 3.0695443645083933 / 1; border-bottom-left-radius: 28px; border-bottom-right-radius: 28px; border-top-left-radius: 28px; border-top-right-radius: 28px; box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.8), 0px 2px 4px 0px rgba(0, 0, 0, 0.25); flex: none; height: var(--framer-aspect-ratio-supported, 417px); left: 50%; overflow: visible; position: absolute; top: 1739px; transform: translateX(-50%); width: 1280px; }",
    ".framer-0Y6PA .framer-p8lniv { align-content: center; align-items: center; background-color: #fb8405; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 89px; justify-content: center; left: calc(49.966147596479374% - 77.79282329045363% / 2); overflow: hidden; padding: 0px; position: absolute; top: 801px; width: 78%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-0Y6PA .framer-txaylv-container { cursor: pointer; flex: none; height: 65%; position: relative; width: 22%; will-change: var(--framer-will-change-effect-override, transform); }",
    ".framer-0Y6PA .framer-brxlh1 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 288px; position: absolute; top: 3106px; white-space: pre; width: auto; }",
    ".framer-0Y6PA .framer-wgnyvq { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 879px; position: absolute; top: 3106px; white-space: pre; width: auto; }",
    ".framer-0Y6PA .framer-voz9zm { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 51%; position: absolute; top: 2887px; transform: translateX(-50%); white-space: pre; width: auto; }",
    ".framer-0Y6PA .framer-1issmv6 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 492px; position: absolute; top: 3092px; white-space: pre; width: auto; }",
    ".framer-0Y6PA .framer-18sn4m0 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 405px; position: absolute; top: 3332px; white-space: pre; width: auto; }",
    ".framer-0Y6PA .framer-qwvnj1 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 440px; position: absolute; top: 3298px; white-space: pre; width: auto; }",
    ".framer-0Y6PA .framer-1kzrx0k { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 960px; position: absolute; top: 3081px; white-space: pre; width: auto; }",
    ".framer-0Y6PA .framer-y0k4d7 { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 982px; position: absolute; top: 3298px; white-space: pre; width: auto; }",
    ".framer-0Y6PA .framer-pv95co { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 773px; position: absolute; top: 3361px; white-space: pre; width: auto; }",
    ...Xt,
    '.framer-0Y6PA[data-border="true"]::after, .framer-0Y6PA [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    ".framer-0Y6PA .framer-xvp1df .framer-1q9vd3t { width: 100% !important; white-space: pre-wrap !important; text-align: center !important; }",
    ".framer-0Y6PA .framer-xvp1df .framer-1q9vd3t .framer-text { --framer-text-alignment: center !important; text-align: center !important; }",
    ".framer-0Y6PA .framer-xvp1df .framer-1ezyucq { width: 100% !important; text-align: center !important; }",
    ".framer-0Y6PA .framer-xvp1df .framer-1ezyucq .framer-text { --framer-text-alignment: center !important; text-align: center !important; }",
    ".framer-0Y6PA .framer-xvp1df .framer-10oi1l0 { align-self: center; }",
  ],
  Le = xt(Ba, Ga, "framer-0Y6PA"),
  ts = Le;
Le.displayName = "Home";
Le.defaultProps = { height: 5756, width: 1477 };
_t(
  Le,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Mona Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/monasans/v3/o-0mIpQmx24alC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyAjBN9Y41P6zHtY.woff2",
          weight: "600",
        },
        {
          family: "Mona Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/monasans/v3/o-0mIpQmx24alC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A99Y41P6zHtY.woff2",
          weight: "400",
        },
        {
          family: "Mona Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/monasans/v3/o-0mIpQmx24alC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyAaBN9Y41P6zHtY.woff2",
          weight: "700",
        },
        {
          family: "Mona Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/monasans/v3/o-0mIpQmx24alC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyDPA99Y41P6zHtY.woff2",
          weight: "500",
        },
        {
          family: "ADLaM Display",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/adlamdisplay/v1/KFOhCnGXkPOLlhx6jD8_b1ZECsTYkYBPY3o.woff2",
          weight: "400",
        },
        {
          family: "Mochiy Pop P One",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/mochiypoppone/v11/Ktk2AKuPeY_td1-h9LayHYWCjAqyN4a3WYZB_sU.woff2",
          weight: "400",
        },
        {
          family: "Mochiy Pop One",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/mochiypopone/v11/QdVPSTA9Jh-gg-5XZP2UmU4O9kw1D3s6ZKAi.woff2",
          weight: "400",
        },
        {
          family: "Chewy",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/chewy/v18/uK_94ruUb-k-wk50IDMfO-ed.woff2",
          weight: "400",
        },
        {
          family: "Grandstander",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/grandstander/v19/ga6fawtA-GpSsTWrnNHPCSIMZhhKpFjyNZIQD1--D33WttFGmQk.woff2",
          weight: "400",
        },
      ],
    },
    ...ia,
    ...la,
    ...St(Gt),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var rs = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerAcceptsLayoutTemplate: "false",
        framerComponentViewportWidth: "true",
        framerDisplayContentsDiv: "false",
        framerIntrinsicHeight: "5756",
        framerScrollSections:
          '{"gTnIhhMrd":{"pattern":":gTnIhhMrd","name":"features"}}',
        framerContractVersion: "1",
        framerIntrinsicWidth: "1477",
        framerImmutableVariables: "true",
        framerColorSyntax: "true",
        framerResponsiveScreen: "",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}',
        framerAutoSizeImages: "true",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { rs as __FramerMetadata__, ts as default };
//# sourceMappingURL=Un-llSGUhNoPnP1ucc--Es3iIgieL7JMLUSdCku2vhQ.GHG7CATF.mjs.map
