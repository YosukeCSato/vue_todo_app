<template>
  <div class="section">
    <p>品名:<input type="text" name="productName" v-model="productName" /></p>
    <p>メモ:<input type="text" name="productMemo" v-model="productMemo" /></p>
    <p v-if="!checkEmpty">品名を入力してください</p>
    <button
      class="button"
      :class="{ disabled: !checkEmpty }"
      :disabled="!checkEmpty"
      @click="addProduct"
    >
      追加
    </button>
  </div>
</template>

<script>
export default {
  name: "AddProductSection",
  data() {
    return {
      productName: "",
      productMemo: ""
    };
  },
  computed: {
    checkEmpty() {
      return 0 < this.productName.length;
    }
  },
  methods: {
    addProduct() {
      const params = new URLSearchParams();
      params.append("productName", this.productName);
      params.append("productMemo", this.productMemo);

      this.$axios.post("http://localhost:8080/addProduct", params);
    }
  }
};
</script>

<style lang="scss">
.section {
  font-weight: bold;
  color: #ffffff;

  .button {
    color: black;
  }
  .disabled {
    background-color: gray;
    color: #ffffff;
  }
}
</style>
