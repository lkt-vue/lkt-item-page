<script lang="ts" setup>
// Emits
import {computed, nextTick, PropType, ref, useSlots} from "vue";
import {LktObject} from "lkt-ts-interfaces";

// Emits
const emit = defineEmits(['create']);

// Slots
const slots = useSlots();

// Props
const props = withDefaults(defineProps<{
    page: number
    resource: string
    title: string
    noResultsText: string
    createText: string
    itemsClass: string
    filters: LktObject
}>(), {
    page: 1,
    resource: '',
    title: '',
    itemsClass: '',
    noResultsText: 'No results',
    createText: 'Create',
    filters: () => ({}),
});

let basePerms: string[] = [];

const Page = ref(props.page),
    items = ref([]),
    perms = ref(basePerms),
    editMode = ref(false),
    loading = ref(true),
    firstLoadReady = ref(false),
    paginator = ref(null);


const onResults = (r: any) => {
        //@ts-ignore
        if (Array.isArray(r)) items.value = r;
        loading.value = false;
        firstLoadReady.value = true;
    },
    onPerms = (r: string[]) => {
        perms.value = r;
    },
    onLoading = () => nextTick(() => loading.value = true),
    onCreate = () => emit('create'),
    doRefresh = () => {
        //@ts-ignore
        paginator.value.doRefresh();
    },
    canCreate = computed(() => perms.value.includes('create')),
    canRead = computed(() => perms.value.includes('read')),
    canUpdate = computed(() => perms.value.includes('update')),
    canDrop = computed(() => perms.value.includes('drop'));

defineExpose({
    doRefresh
})
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
        
        <div class="lkt-item-page-items" :class="itemsClass" v-if="!loading && items.length > 0">
            <template v-for="item in items">
                <slot name="item"
                      v-bind:item="item"
                      v-bind:can-create="canCreate"
                      v-bind:can-read="canRead"
                      v-bind:can-update="canUpdate"
                      v-bind:can-drop="canDrop"
                />
            </template>
        </div>

        <div class="lkt-item-page-empty" v-if="!loading && items.length === 0">
            {{noResultsText}}
        </div>

        <div class="lkt-item-page-buttons on-bottom">
            <lkt-button
                v-if="canCreate"
                @click="onCreate"
                palette="success"
            >
                {{createText}}
            </lkt-button>
        </div>

        <lkt-paginator
            ref="paginator"
            v-model="Page"
            v-bind:resource="resource"
            v-bind:filters="filters"
            v-on:results="onResults"
            v-on:perms="onPerms"
            v-on:loading="onLoading"
        ></lkt-paginator>
    </section>
</template>