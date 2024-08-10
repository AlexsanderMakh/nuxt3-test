import { defineStore } from "pinia";

export const usePopupStore = defineStore("popup", {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
});
