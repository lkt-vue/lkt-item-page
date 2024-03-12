import { defineComponent as b, useSlots as L, ref as r, resolveComponent as p, openBlock as t, createElementBlock as l, unref as u, toDisplayString as v, createCommentVNode as o, renderSlot as d, createBlock as V, Fragment as N, renderList as $, createVNode as B, nextTick as C } from "vue";
const P = { class: "lkt-item-page" }, T = { key: 0 }, x = { key: 0 }, A = {
  key: 1,
  class: "lkt-item-page-buttons"
}, I = {
  key: 2,
  class: "lkt-item-page-filters"
}, j = {
  key: 4,
  class: "lkt-item-page-items"
}, D = {
  key: 5,
  class: "lkt-item-page-empty"
}, E = /* @__PURE__ */ b({
  __name: "LktItemPage",
  props: {
    page: { type: Number, default: 1 },
    resource: { type: String, default: "" },
    noResultsText: { type: String, default: "No results" },
    title: { type: String, default: "" },
    filters: { type: Object, default: () => ({}) }
  },
  setup(e, { expose: y }) {
    const n = L(), m = r(e.page), i = r([]), a = r(!0), f = r(!1), k = r(null), h = (s) => {
      Array.isArray(s) && (i.value = s), a.value = !1, f.value = !0;
    }, _ = () => C(() => a.value = !0);
    return y({
      doRefresh: () => {
        k.value.doRefresh();
      }
    }), (s, g) => {
      const R = p("lkt-loader"), S = p("lkt-paginator");
      return t(), l("section", P, [
        e.title || u(n).title ? (t(), l("header", T, [
          e.title ? (t(), l("h2", x, v(e.title), 1)) : o("", !0),
          u(n).title ? d(s.$slots, "title", { key: 1 }) : o("", !0)
        ])) : o("", !0),
        u(n).buttons ? (t(), l("div", A, [
          d(s.$slots, "buttons")
        ])) : o("", !0),
        f.value && u(n).filters ? (t(), l("div", I, [
          d(s.$slots, "filters")
        ])) : o("", !0),
        a.value ? (t(), V(R, { key: 3 })) : o("", !0),
        !a.value && i.value.length > 0 ? (t(), l("div", j, [
          (t(!0), l(N, null, $(i.value, (c) => d(s.$slots, "item", { item: c })), 256))
        ])) : o("", !0),
        !a.value && i.value.length === 0 ? (t(), l("div", D, v(e.noResultsText), 1)) : o("", !0),
        B(S, {
          ref_key: "paginator",
          ref: k,
          modelValue: m.value,
          "onUpdate:modelValue": g[0] || (g[0] = (c) => m.value = c),
          resource: e.resource,
          filters: e.filters,
          onResults: h,
          onLoading: _
        }, null, 8, ["modelValue", "resource", "filters"])
      ]);
    };
  }
}), q = {
  install: (e) => {
    e.component("lkt-item-page") === void 0 && e.component("lkt-item-page", E);
  }
};
export {
  q as default
};
