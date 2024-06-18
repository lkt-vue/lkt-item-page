import { LktObject } from "lkt-ts-interfaces";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    page: number;
    resource: string;
    title: string;
    noResultsText: string;
    createText: string;
    itemsClass: string;
    filters: LktObject;
}>, {
    page: number;
    resource: string;
    title: string;
    itemsClass: string;
    noResultsText: string;
    createText: string;
    filters: () => {};
}>, {
    doRefresh: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    create: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    page: number;
    resource: string;
    title: string;
    noResultsText: string;
    createText: string;
    itemsClass: string;
    filters: LktObject;
}>, {
    page: number;
    resource: string;
    title: string;
    itemsClass: string;
    noResultsText: string;
    createText: string;
    filters: () => {};
}>>> & {
    onCreate?: ((...args: any[]) => any) | undefined;
}, {
    page: number;
    title: string;
    filters: LktObject;
    resource: string;
    noResultsText: string;
    createText: string;
    itemsClass: string;
}, {}>, {
    title?(_: {}): any;
    buttons?(_: {}): any;
    filters?(_: {
        items: never[];
        isLoading: boolean;
    }): any;
    item?(_: {
        item: never;
        canCreate: boolean;
        canRead: boolean;
        canUpdate: boolean;
        canDrop: boolean;
        isLoading: false;
    }): any;
    "extra-item"?(_: {
        canCreate: boolean;
        canRead: boolean;
        canUpdate: boolean;
        canDrop: boolean;
        isLoading: false;
    }): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
