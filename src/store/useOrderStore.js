import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useOrderStore = create(
  persist(
    (set, get) => ({
      orderList: [],
      priceNow: 0,
      calculateTotalAmount: () => {
        const total = get().orderList.reduce((accumulator, item) => {
          const itemPrice = item.priceSale || item.price;
          return accumulator + itemPrice * item.quantity;
        }, 0);
        set({ priceNow: total });
      },
      buyNow: (item, quantity) => {
        const itemExists = get().orderList.find(
          (orderItem) => orderItem.id === item.id
        );
        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            itemExists.quantity = quantity;
          }
          set({ orderList: [...get().orderList] });
        } else {
          set({ orderList: [...get().orderList, { ...item, quantity: quantity }] });
        }
        get().calculateTotalAmount();

      },
      orderPlace: (list) => {
        set({ orderList: list });
        get().calculateTotalAmount();
      },
      removeOrder: () => {
        set({ orderList: [], priceNow: 0 });
      }
    }),
    {
      name: "order-tulibear"
    }
  )
);

