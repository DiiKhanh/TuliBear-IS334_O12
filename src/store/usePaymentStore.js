import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePaymentStore = create(
  persist(
    (set, get) => ({
      purchasedList: [],
      shipping: null,
      totalPrice: 0,
      saveShipping: (data) => {
        set({ shipping: data });
      },
      calculateTotalAmount: () => {
        const total = get().purchasedList.reduce((accumulator, item) => {
          const itemPrice = item.priceSale || item.price;
          return accumulator + itemPrice * item.quantity;
        }, 0);
        set({ totalPrice: total });
      },
      addPurchased: (item, quantity) => {
        const itemExists = get().purchasedList.find(
          (purchased) => purchased.id === item.id
        );
        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            const total = itemExists.quantity + quantity;
            if (total > itemExists.inStock) {
              toast.error("có lỗi khi số lượng hàng quá lớn trong kho!");
              return;
            } else {
              itemExists.quantity = itemExists.quantity + quantity;
            }
          }
          set({ purchasedList: [...get().purchasedList] });
        } else {
          set({ purchasedList: [...get().purchasedList, { ...item, quantity: quantity }] });
        }
        toast.success("Thêm vào giỏ hàng thành công!");
        get().calculateTotalAmount();
      }
    }),
    {
      name: "payment-tuli"
    }
  )
);

