<template>
  <div class="mini-cart">
    <h4>Mini Cart ({{ totalItems }} items)</h4>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} - Quantity: {{ item.quantity }}
      </li>
    </ul>
  </div>
</template>
<script>
import { computed } from 'vue';
import { cart } from '../store/cart';
export default {
  setup() {
    const cartItems = computed(() => cart.items);
    const totalItems = computed(() => cart.totalItems);
    return {
      cartItems,
      totalItems
    };
  }
};
</script>
<style scoped>
.mini-cart {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 200px;
  border: 1px solid #ddd;
  padding: 10px;
}
</style>