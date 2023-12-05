import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      saveUser:  (data) => {
        set({ user: data });
      },
      deleteUser: () => {
        set({ user: null });
      }
    }),
    {
      name: "user-tulibear"
    }
  )
);

