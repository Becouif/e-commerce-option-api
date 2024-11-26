<template>
  <div class="home">
    <h1>Home Page</h1>
    <div class="product-list">
      <ProductCard v-for="product in products" :key="product.id" :product="product" @add-to-cart="addToCart" />
    </div>
    <MiniCart />
  </div>
</template>
<script>
import ProductCard from '../components/ProductCard.vue';
import MiniCart from '../components/MiniCart.vue';
import { cart } from '../store/cart';
export default {
  components: {
    ProductCard,
    MiniCart
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', description: 'Description 1', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', description: 'Description 2', image: 'https://via.placeholder.com/150' },
        // Add more products as needed
      ]
    };
  },
  methods: {
    addToCart(product) {
      cart.addToCart(product);
    }
  }
};
</script>
<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}
</style>