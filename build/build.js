import { defineComponent as z, useSlots as F, ref as o, computed as m, resolveComponent as k, openBlock as t, createElementBlock as s, unref as i, toDisplayString as f, createCommentVNode as a, renderSlot as d, createBlock as L, normalizeClass as j, Fragment as q, renderList as G, createElementVNode as H, withCtx as J, createTextVNode as K, createVNode as M, nextTick as O } from "vue";
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
  setup(c, { expose: V, emit: T }) {
    const N = T, n = F(), P = c;
    let $ = [];
    const g = o(P.page), r = o([]), u = o($);
    o(!1);
    const l = o(!0), y = o(!1), _ = o(null), D = (e) => {
      Array.isArray(e) && (r.value = e), l.value = !1, y.value = !0;
    }, U = (e) => {
      u.value = e;
    }, B = () => O(() => l.value = !0), S = () => N("create"), A = () => {
      _.value.doRefresh();
    }, p = m(() => u.value.includes("create")), h = m(() => u.value.includes("read")), C = m(() => u.value.includes("update")), R = m(() => u.value.includes("drop"));
    return V({
      doRefresh: A
    }), (e, b) => {
      const E = k("lkt-loader"), I = k("lkt-button"), w = k("lkt-paginator");
      return t(), s("section", Q, [
        e.title || i(n).title ? (t(), s("header", W, [
          e.title ? (t(), s("h2", X, f(e.title), 1)) : a("", !0),
          i(n).title ? d(e.$slots, "title", { key: 1 }) : a("", !0)
        ])) : a("", !0),
        i(n).buttons ? (t(), s("div", Y, [
          d(e.$slots, "buttons")
        ])) : a("", !0),
        y.value && i(n).filters ? (t(), s("div", Z, [
          d(e.$slots, "filters", {
            items: r.value,
            isLoading: l.value
          })
        ])) : a("", !0),
        l.value ? (t(), L(E, { key: 3 })) : a("", !0),
        !l.value && r.value.length > 0 ? (t(), s("div", {
          key: 4,
          class: j(["lkt-item-page-items", e.itemsClass])
        }, [
          (t(!0), s(q, null, G(r.value, (v) => d(e.$slots, "item", {
            item: v,
            canCreate: p.value,
            canRead: h.value,
            canUpdate: C.value,
            canDrop: R.value,
            isLoading: l.value
          })), 256)),
          i(n)["extra-item"] ? d(e.$slots, "extra-item", {
            key: 0,
            canCreate: p.value,
            canRead: h.value,
            canUpdate: C.value,
            canDrop: R.value,
            isLoading: l.value
          }) : a("", !0)
        ], 2)) : a("", !0),
        !l.value && r.value.length === 0 ? (t(), s("div", x, f(e.noResultsText), 1)) : a("", !0),
        H("div", ee, [
          p.value ? (t(), L(I, {
            key: 0,
            onClick: S,
            palette: "success"
          }, {
            default: J(() => [
              K(f(e.createText), 1)
            ]),
            _: 1
          })) : a("", !0)
        ]),
        M(w, {
          ref_key: "paginator",
          ref: _,
          modelValue: g.value,
          "onUpdate:modelValue": b[0] || (b[0] = (v) => g.value = v),
          resource: e.resource,
          filters: e.filters,
          onResults: D,
          onPerms: U,
          onLoading: B
        }, null, 8, ["modelValue", "resource", "filters"])
      ]);
    };
  }
}), le = {
  install: (c) => {
    c.component("lkt-item-page") === void 0 && c.component("lkt-item-page", te);
  }
};
export {
  le as default
};
