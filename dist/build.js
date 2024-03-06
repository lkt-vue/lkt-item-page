import { defineComponent as S, useSlots as b, ref as i, resolveComponent as g, openBlock as t, createElementBlock as l, unref as u, toDisplayString as p, createCommentVNode as s, renderSlot as c, createBlock as L, Fragment as V, renderList as N, createVNode as R, nextTick as $ } from "vue";
const B = { class: "lkt-item-page" }, C = { key: 0 }, P = { key: 0 }, T = {
  key: 1,
  class: "lkt-item-page-buttons"
}, A = {
  key: 2,
  class: "lkt-item-page-filters"
}, I = {
  key: 4,
  class: "lkt-item-page-items"
}, j = {
  key: 5,
  class: "lkt-item-page-empty"
}, x = /* @__PURE__ */ S({
  __name: "LktItemPage",
  props: {
    page: { type: Number, default: 1 },
    resource: { type: String, default: "" },
    noResultsText: { type: String, default: "No results" },
    title: { type: String, default: "" },
    filters: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const n = b(), m = i(e.page), r = i([]), a = i(!0), k = i(!1), v = (o) => {
      Array.isArray(o) && (r.value = o), a.value = !1, k.value = !0;
    }, y = () => $(() => a.value = !0);
    return (o, f) => {
      const h = g("lkt-loader"), _ = g("lkt-paginator");
      return t(), l("section", B, [
        e.title || u(n).title ? (t(), l("header", C, [
          e.title ? (t(), l("h2", P, p(e.title), 1)) : s("", !0),
          u(n).title ? c(o.$slots, "title", { key: 1 }) : s("", !0)
        ])) : s("", !0),
        u(n).buttons ? (t(), l("div", T, [
          c(o.$slots, "buttons")
        ])) : s("", !0),
        k.value && u(n).filters ? (t(), l("div", A, [
          c(o.$slots, "filters")
        ])) : s("", !0),
        a.value ? (t(), L(h, { key: 3 })) : s("", !0),
        !a.value && r.value.length > 0 ? (t(), l("div", I, [
          (t(!0), l(V, null, N(r.value, (d) => c(o.$slots, "item", { item: d })), 256))
        ])) : s("", !0),
        !a.value && r.value.length === 0 ? (t(), l("div", j, p(e.noResultsText), 1)) : s("", !0),
        R(_, {
          modelValue: m.value,
          "onUpdate:modelValue": f[0] || (f[0] = (d) => m.value = d),
          resource: e.resource,
          filters: e.filters,
          onResults: v,
          onLoading: y
        }, null, 8, ["modelValue", "resource", "filters"])
      ]);
    };
  }
}), F = {
  install: (e) => {
    e.component("lkt-item-page") === void 0 && e.component("lkt-item-page", x);
  }
};
export {
  F as default
};
