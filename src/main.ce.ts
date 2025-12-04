import { defineCustomElement } from "vue";
import App from "./App.ce.vue";
import router from "./router";

const WCApp = defineCustomElement(App, {
  configureApp(app) {
    app.use(router);
  }
});

customElements.define('smarttab-event-ticketing', WCApp);

