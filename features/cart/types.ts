// features/cart/types.ts
export type CartProductSnapshot = {
  slug: string;
  name: string;
  imageUrl: string;
  price: number; 
};

export type CartItem = {
  variantId: string;
  qty: number;
  product: CartProductSnapshot;
};

export type CartState = {
  items: CartItem[];
  /** * Menandai apakah data sudah disinkronkan dengan Supabase 
   * untuk mencegah pemanggilan API yang berlebihan.
   */
  isSynced: boolean; 
};

export type CartActions = {
  /** Menambah item baru, jika sudah ada maka menambah quantity */
  addItem: (payload: { 
    variantId: string; 
    qty: number; 
    product: CartProductSnapshot 
  }) => Promise<void>;

  /** Menghapus satu varian dari keranjang */
  removeItem: (variantId: string) => Promise<void>;

  /** Mengubah jumlah quantity varian tertentu secara spesifik */
  setQty: (variantId: string, qty: number) => Promise<void>;

  /** Mengosongkan seluruh isi keranjang */
  clear: () => Promise<void>;

  /** * Mengambil data dari database Supabase dan 
   * menggabungkannya ke dalam store saat initial load/login.
   */
  syncCart: () => Promise<void>;

  // Derived Helpers (fungsi pembantu)
  /** Menghitung total seluruh item (misal: 2 baju + 1 celana = 3) */
  getItemCount: () => number;

  /** Menghitung total harga seluruh isi keranjang */
  // getSubtotal: () => number;
};

export type CartStore = CartState & CartActions;