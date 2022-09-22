import { createApp } from "vue";
import { Quasar } from "quasar";
import "./styles.css";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";

// Import Quasar css
import "quasar/src/css/index.sass";

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./App.vue";

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {},
  config: {
    brand: {
      primary: "#1976D2",
      secondary: "#919ca7",
      accent: "#9C27B0",
      dark: "#474d56",
      positive: "#42d29d",
      negative: "#fa6767",
      info: "#44badc",
      warning: "#f9bc0d",
      blue: "#3688fc",
      indigo: "#727cf5",
      purple: "#6b5eae",
      pink: "#ff679b",
      red: "#fa6767",
      orange: "#ff9041",
      yellow: "#f9bc0d",
      green: "#42d29d",
      teal: "#02a8b5",
      cyan: "#44badc",
      white: "#fff",
      gray: "#98a6ad",
      "gray-dark": "#343a40",
      "gray-1": "#f1f3fa",
      "gray-2": "#eef2f7",
      "gray-3": "#dee2e6",
      "gray-4": "#ced4da",
      "gray-5": "#adb5bd",
      "gray-6": "#98a6ad",
      "gray-7": "#919ca7",
      "gray-8": "#343a40",
      "gray-9": "#474d56",
    },
  },
});

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
