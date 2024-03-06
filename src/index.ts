import { App, Plugin } from 'vue';

import { default as page } from './lib-components/LktItemPage.vue';
import "./../lkt-item-page.css";


const LktItemPage: Plugin = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-item-page') === undefined) app.component('lkt-item-page', page);
  },
};

export default LktItemPage;
