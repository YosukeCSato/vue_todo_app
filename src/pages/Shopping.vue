<template>
  <div :class="$style.text">
    <p>ショッピング！！！！！</p>
    <p :class="$style.text__text">{{ introduceAhan }}</p>
    <input type="number" v-model="rails" />
    <input type="submit" value="送信" @click="click" />
    <p>{{ post }}</p>
    <AddProductSection :class="$style['text__add-section']" />
    <ProductTable :class="$style.text__table" :products="products" />
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
      products: [],
      ahan: "",
      rails: "こんにちは",
      post: ""
    };
  },
  methods: {
    click() {
      this.$axios
        .post("http://localhost:3000/hello/index")
        .then(response => {
          this.post = response.data;
        })
        .catch(reason => {
          this.post = "失敗!!!!!!!";
        });
    }
  },
  computed: {
    introduceAhan() {
      this.$axios
        .get(`http://localhost:3000/hello?msg=${this.rails}`)
        .then(response => {
          this.ahan = response.data;
        })
        .catch(reason => {
          this.ahan = "失敗!!!!!!!";
        });
      return this.ahan;
    }
  },
  mounted() {
    this.$axios
      .get("http://localhost:8080/fetchAllProducts")
      .then(response => {
        this.products = response.data;
        // console.log(response.data);
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

  &__add-section {
    color: pink;
    font-weight: bold;
  }

  &__table {
    color: white;
    font-weight: bold;
  }

  &__text {
    border-bottom: 1px solid #ffffff;
  }
}
</style>
