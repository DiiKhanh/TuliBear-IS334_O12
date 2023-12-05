import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      totalAmount: 0,
      calculateTotalAmount: () => {
        const total = get().cartItems.reduce((accumulator, item) => {
          const itemPrice = item.priceSale || item.price;
          return accumulator + itemPrice * item.quantity;
        }, 0);
        set({ totalAmount: total });
      },
      addItemToCart: (item, quantity) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === item.id
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
          set({ cartItems: [...get().cartItems] });
        } else {
          set({ cartItems: [...get().cartItems, { ...item, quantity: quantity }] });
        }
        toast.success("Thêm vào giỏ hàng thành công!");
        get().calculateTotalAmount();
      },

      increaseQuantity: (productId, quantity) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === productId
        );

        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            if (itemExists.quantity < itemExists.inStock) {
              itemExists.quantity = quantity;
            } else return;
          }
          set({ cartItems: [...get().cartItems] });
        }
        get().calculateTotalAmount();
      },

      decreaseQuantity: (productId, quantity) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === productId
        );

        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            if (itemExists.quantity === 1) {
              const updatedCartItems = get().cartItems.filter(
                (item) => item.id !== productId
              );
              set({ cartItems: updatedCartItems });
            } else {
              itemExists.quantity = quantity;
              set({ cartItems: [...get().cartItems] });
            }
          }
        }
        get().calculateTotalAmount();
      },

      removeItemFromCart: (productId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === productId
        );

        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            const updatedCartItems = get().cartItems.filter(
              (item) => item.id !== productId
            );
            set({ cartItems: updatedCartItems });
          }
        }

        get().calculateTotalAmount();
      },
      clearCart: () => {
        set({ cartItems: [], totalAmount: 0 });
      }
    }),
    {
      name: "cart-items"
    }
  )
);

