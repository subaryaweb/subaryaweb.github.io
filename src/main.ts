import { createApp } from "vue";
import "primevue/resources/themes/viva-light/theme.css";
import "primevue/resources/themes/viva-dark/theme.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import store from "./store";
import PrimeVue from "primevue/config";
import { router } from "./router/index";
import "virtual:windi.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(PrimeVue);

app.mount("#app");
