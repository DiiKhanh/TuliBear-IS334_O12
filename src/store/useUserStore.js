import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      saveUser:  (data) => {
        set({ user: data });
        // localStorage.setItem("user-tl", JSON.stringify(data));
      },
      deleteUser: () => {
        set({ user: null });
        // localStorage.removeItem("user-tl");
      }
    }),
    {
      name: "user-tulibear"
    }
  )
);

