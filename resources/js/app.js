require('./nodeModule');
require('./adminlte.min');
require('./bootstrap');



// Import modules...
import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

// Vue3 multiselector
import Multiselect from '@suadelabs/vue3-multiselect';

import Swal from 'sweetalert2/dist/sweetalert2.js'

window.Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

// font-awesome 과 관련되 import 를 정의
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(
    fas,
    far,
    fab
)

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .component('multiselect', Multiselect)
            .component('font-awesome-icon', FontAwesomeIcon)
            .component('InertiaHead', Head)
            .component('InertiaLink', Link)
            .use(plugin)
            // .use(Swal)
            .mixin({ methods: { route } })
            .mount(el);
    },
})

InertiaProgress.init({ color: '#4B5563' });
