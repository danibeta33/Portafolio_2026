import { create } from "zustand";

const useDarkModeStore = create((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => {
    localStorage.setItem("darkMode", !state.darkMode);
    return { darkMode: !state.darkMode };
  }),
  initializeDarkMode: () => set(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    return { darkMode: saved };
  })
}));

export default useDarkModeStore;
