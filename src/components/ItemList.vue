<template>
  <div v-if="items">
    <li v-for="item in items.content" v-bind:key="item.guid">
      <a :href="item.url"> {{ item.title }} </a>
    </li>
  </div>
  <button @click="getItems" type="button">Refresh</button>
</template>
<script>
import ItemsService from "@/services/items.service";

export default {
  name: "ItemList",
  components: {},
  data() {
    return {
      items: undefined,
    };
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    } else {
      this.getItems();
    }
  },
  methods: {
    getItems() {
      ItemsService.getItems().then((response) => (this.items = response.data));
    },
  },
  computed: {
    currentUser() {
      return localStorage.getItem("user");
    },
  },
};
</script>
