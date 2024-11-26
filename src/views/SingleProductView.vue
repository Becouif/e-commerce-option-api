<template>
  <div class="single-product">
    <h1>Single Product Page</h1>
    <ProductCard :product="product" @add-to-cart="addToCart" />
  </div>
</template>
<script>
import ProductCard from '../components/ProductCard.vue';
import { cart } from '../store/cart';
export default {
  components: {
    ProductCard
  },
  data() {
    return {
      product: { id: 1, name: 'Single Product', description: 'Single Product Description', image: 'single-product.jpg' }
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
.single-product {
  text-align: center;
}
</style>