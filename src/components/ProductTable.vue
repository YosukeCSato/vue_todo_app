<template>
  <div class="table">
    <label v-for="label in options" :key="label.label">
      <input type="radio" v-model="current" :value="label.value" />
      {{ label.label }}
    </label>
    <table>
      <thead class="ahan">
        <tr>
          <th class="index">No.</th>
          <th class="name">商品名</th>
          <th class="memo">メモ</th>
          <th class="state">状態</th>
          <th class="delete">削除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in computedProducts" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.memo }}</td>
          <td>
            <button @click="changeProductState(item)">
              {{ labels[item.state] }}
            </button>
          </td>
          <td>
            <button @click="deleteProduct(item)">
              削除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const data = {
  options: [
    { value: -1, label: "すべて" },
    { value: 0, label: "未購入" },
    { value: 1, label: "購入済み" }
  ],
  current: -1
};
export default {
  name: "ProductTable",
  props: {
    products: {
      type: Array
    }
  },
  data() {
    return data;
  },
  computed: {
    labels() {
      return this.options.reduce((a, b) => {
        return Object.assign(a, { [b.value]: b.label });
      }, {});
    },
    computedProducts() {
      return this.products.filter(el => {
        var option = this.current < 0 ? true : this.current === el.state;
        console.log(this.current);
        return option;
      }, this);
    },
    state() {
      if (this.products.state === 1) {
        return "購入済み";
      }
      if (this.products.state === 0) {
        return "未購入";
      }
      return "";
    }
  },
  methods: {
    deleteProduct(item) {
      const params = new URLSearchParams();
      params.append("productID", item.id);

      this.$axios
        .post("http://localhost:8080/deleteProduct", params)
        .then(response => {
          if (response.status != 200) {
            throw new Error("レスポンスエラー");
          }
        });
    }
  }
};
</script>

<style land="scss">
.table {
  color: #ffffff;
  font-weight: bold;
}

.ahan {
  color: red;
}
</style>
