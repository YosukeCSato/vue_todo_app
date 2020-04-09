<template>
  <div class="text">
    <p>ショッピング！！！！！</p>
    <AddProductSection class="add-section" />
    <ProductTable class="table" :products="products" />
  </div>
</template>

<script>
import ProductTable from "./../components/ProductTable.vue";
import AddProductSection from "./../components/AddProductSection.vue";

export default {
  name: "Shopping",
  components: {
    AddProductSection,
    ProductTable
  },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:8080/fetchAllProducts")
      .then(response => {
        this.products = response.data;
        console.log(response.data);
      })
      .catch(reason => {
        this.products = "失敗";
      });
  }
};
</script>

<style lang="scss" module>
.text {
  font-weight: bold;
  color: #ffffff;
  justify-content: center;

  .add-section {
    color: red;
    font-weight: bold;
  }

  .table {
    color: red;
    font-weight: bold;
  }
}
</style>
