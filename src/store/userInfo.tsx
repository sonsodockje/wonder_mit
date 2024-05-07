import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      isLogin: false,
      login: () => set({ isLogin: true }),
      logout: () => set({ isLogin: false }),
    }),
    {
      name: "zustand-login-check",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
