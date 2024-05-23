import { defineComponent as z, useSlots as F, ref as s, computed as d, resolveComponent as f, openBlock as t, createElementBlock as a, unref as c, toDisplayString as k, createCommentVNode as l, renderSlot as m, createBlock as C, normalizeClass as j, Fragment as q, renderList as G, createElementVNode as H, withCtx as J, createTextVNode as K, createVNode as M, nextTick as O } from "vue";
const Q = { class: "lkt-item-page" }, W = { key: 0 }, X = { key: 0 }, Y = {
  key: 1,
  class: "lkt-item-page-buttons"
}, Z = {
  key: 2,
  class: "lkt-item-page-filters"
}, x = {
  key: 5,
  class: "lkt-item-page-empty"
}, ee = { class: "lkt-item-page-buttons on-bottom" }, te = /* @__PURE__ */ z({
  __name: "LktItemPage",
  props: {
    page: { default: 1 },
    resource: { default: "" },
    title: { default: "" },
    noResultsText: { default: "No results" },
    createText: { default: "Create" },
    itemsClass: { default: "" },
    filters: { default: () => ({}) }
  },
  emits: ["create"],
  setup(r, { expose: b, emit: R }) {
    const V = R, u = F(), T = r;
    let L = [];
    const v = s(T.page), i = s([]), o = s(L);
    s(!1);
    const n = s(!0), g = s(!1), _ = s(null), N = (e) => {
      Array.isArray(e) && (i.value = e), n.value = !1, g.value = !0;
    }, P = (e) => {
      o.value = e;
    }, $ = () => O(() => n.value = !0), B = () => V("create"), D = () => {
      _.value.doRefresh();
    }, y = d(() => o.value.includes("create")), S = d(() => o.value.includes("read")), U = d(() => o.value.includes("update")), A = d(() => o.value.includes("drop"));
    return b({
      doRefresh: D
    }), (e, h) => {
      const E = f("lkt-loader"), I = f("lkt-button"), w = f("lkt-paginator");
      return t(), a("section", Q, [
        e.title || c(u).title ? (t(), a("header", W, [
          e.title ? (t(), a("h2", X, k(e.title), 1)) : l("", !0),
          c(u).title ? m(e.$slots, "title", { key: 1 }) : l("", !0)
        ])) : l("", !0),
        c(u).buttons ? (t(), a("div", Y, [
          m(e.$slots, "buttons")
        ])) : l("", !0),
        g.value && c(u).filters ? (t(), a("div", Z, [
          m(e.$slots, "filters")
        ])) : l("", !0),
        n.value ? (t(), C(E, { key: 3 })) : l("", !0),
        !n.value && i.value.length > 0 ? (t(), a("div", {
          key: 4,
          class: j(["lkt-item-page-items", e.itemsClass])
        }, [
          (t(!0), a(q, null, G(i.value, (p) => m(e.$slots, "item", {
            item: p,
            canCreate: y.value,
            canRead: S.value,
            canUpdate: U.value,
            canDrop: A.value
          })), 256))
        ], 2)) : l("", !0),
        !n.value && i.value.length === 0 ? (t(), a("div", x, k(e.noResultsText), 1)) : l("", !0),
        H("div", ee, [
          y.value ? (t(), C(I, {
            key: 0,
            onClick: B,
            palette: "success"
          }, {
            default: J(() => [
              K(k(e.createText), 1)
            ]),
            _: 1
          })) : l("", !0)
        ]),
        M(w, {
          ref_key: "paginator",
          ref: _,
          modelValue: v.value,
          "onUpdate:modelValue": h[0] || (h[0] = (p) => v.value = p),
          resource: e.resource,
          filters: e.filters,
          onResults: N,
          onPerms: P,
          onLoading: $
        }, null, 8, ["modelValue", "resource", "filters"])
      ]);
    };
  }
}), ae = {
  install: (r) => {
    r.component("lkt-item-page") === void 0 && r.component("lkt-item-page", te);
  }
};
export {
  ae as default
};
