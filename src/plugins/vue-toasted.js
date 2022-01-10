import Vue from 'vue'

import Toasted from 'vue-toasted';

Vue.use(Toasted, {
    position: 'bottom-center',
    duration: 2000,
    singleton: true,
})