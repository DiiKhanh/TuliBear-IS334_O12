import { create } from "zustand";

export const useAppStore = create((set) => ({
  isShowModal: false,
  setModal: (isShowModal) => set(() => ({ isShowModal }))
}));

