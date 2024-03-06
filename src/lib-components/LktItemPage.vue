<script lang="ts" setup>
// Emits
import {computed, nextTick, PropType, ref, useSlots} from "vue";
import {LktObject} from "lkt-ts-interfaces";

// Slots
const slots = useSlots();

// Props
const props = defineProps({
    page: {type: Number, default: 1},
    resource: {type: String, default: ''},
    noResultsText: {type: String, default: 'No results'},
    title: {type: String, default: ''},
    filters: {type: Object as PropType<LktObject>, default: () => ({})},
});

const Page = ref(props.page),
    items = ref([]),
    loading = ref(true),
    firstLoadReady = ref(false);


const onResults = (r: any) => {
        //@ts-ignore
        if (Array.isArray(r)) items.value = r;
        loading.value = false;
        firstLoadReady.value = true;
    },
    onLoading = () => nextTick(() => loading.value = true);
</script>


<template>
    <section class="lkt-item-page">
        <header v-if="title || slots.title">
            <h2 v-if="title">{{ title }}</h2>
            <template v-if="slots.title">
                <slot name="title"></slot>
            </template>
        </header>

        <div class="lkt-item-page-buttons" v-if="slots.buttons">
            <slot name="buttons"></slot>
        </div>

        <div class="lkt-item-page-filters" v-if="firstLoadReady && slots.filters">
            <slot name="filters"></slot>
        </div>

        <lkt-loader v-if="loading"></lkt-loader>
        
        <div class="lkt-item-page-items" v-if="!loading && items.length > 0">
            <template v-for="item in items">
                <slot name="item"
                      v-bind:item="item"
                />
            </template>
        </div>

        <div class="lkt-item-page-empty" v-if="!loading && items.length === 0">
            {{noResultsText}}
        </div>

        <lkt-paginator
            v-model="Page"
            v-bind:resource="resource"
            v-bind:filters="filters"
            v-on:results="onResults"
            v-on:loading="onLoading"
        ></lkt-paginator>
    </section>
</template>