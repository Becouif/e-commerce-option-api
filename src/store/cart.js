import { reactive, computed } from 'vue';
const state = reactive({
  items: []
});
export const cart = {
  get items() {
    return state.items;
  },
  addToCart(product) {
    const item = state.items.find(item => item.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      state.items.push({ ...product, quantity: 1 });
    }
  },
  totalItems: computed(() => {
    return state.items.reduce((acc, item) => acc + item.quantity, 0);
  })
};