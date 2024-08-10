import { defineNuxtPlugin } from "#app";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faCoffee);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
