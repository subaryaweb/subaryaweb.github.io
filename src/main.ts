import { createApp } from "vue";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
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
