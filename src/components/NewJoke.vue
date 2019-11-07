<template>
  <div>
    <button
      class="button"
      :disabled="disabled"
      v-on:click="NewJoke"
    >{{!disabled?"Новая шутка":"Включено авто добавление шутки"}}</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "NewJoke",
  props: ["disabled"],
  methods: {
    ...mapActions(["fetchItems"]),
    NewJoke() {
      this.fetchItems();
    }
  }
};
</script>
<style lang="less" scoped>
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 40px 35px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2em;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
@media (max-width: 600px){
    .button{
        font-size: 1.5em;
        padding: 25px 35px;
    }
}
</style>