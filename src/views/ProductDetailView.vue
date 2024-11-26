<template>
  <div class="product-details">
    <h1>{{ product.name }}</h1>
    <img src="https://via.placeholder.com/150" :alt="product.name">
    <p>{{ product.description }}</p>
    <button class="btn btn-primary" @click="addToCart(product)">Add to Cart</button>
  </div>
</template>
<script>
import { cart } from '../store/cart';
export default {
  data() {
    return {
      product: {}
    };
  },
  created() {
    const productId = this.$route.params.id;
    // Fetch product details based on productId
    // For demonstration, we'll use a static product
    this.product = { id: productId, name: 'Product ' + productId, description: 'Description ' + productId, image: 'image' + productId + '.jpg' };
  },
  methods: {
    addToCart(product) {
      cart.addToCart(product);
    }
  }
};
</script>
<style scoped>
.product-details {
  text-align: center;
}
</style>