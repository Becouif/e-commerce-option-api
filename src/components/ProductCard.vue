<template>
  <div class="card" style="width: 18rem;">
    <img src="https://via.placeholder.com/150" class="card-img-top" :alt="product.name">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <router-link :to="`/product/${product.id}`" class="btn btn-primary me-2">View Details</router-link>
      <button class="btn btn-secondary" @click="$emit('add-to-cart', product)">Add to Cart</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: Object
  }
};
</script>
<style scoped>
.card {
  margin: 10px;
}
</style>