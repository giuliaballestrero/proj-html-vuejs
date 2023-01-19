import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCalendarDays, faMagnifyingGlass, faPaperPlane, faPlus, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faEye, faMoneyBill1, } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faMagnifyingGlass, faUserPlus, faCalendarDays, faPlus, faUser, faMoneyBill1, faEye, faPaperPlane, faFacebookF, faTwitter, faInstagram)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
