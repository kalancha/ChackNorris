<template>
  <div>
    <div class="header">
      <div class="nor"></div>
    </div>
    <div v-for="item in items" :key="item.id">
      <p class="example-shadow-2">
        <span>{{item.value}}</span>
      </p>
    </div>
    <footer>
      <NewJoke v-bind:disabled="checked"></NewJoke>
      <TogBut v-on:autofill="letTry"></TogBut>
    </footer>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import TogBut from "@/components/TogBut.vue";
import NewJoke from "@/components/NewJoke.vue";
export default {
  name: "Box",
  data() {
    return {
      timerId: null,
      checked: false
    };
  },
  computed: {
    ...mapGetters(["items", "autoFill"])
  },
  methods: {
    ...mapActions(["fetchItems"]),
    getNew() {
      this.fetchItems();
    },
    toggleTimer() {
      if (this.checked) {
        this.timerId = setInterval(() => this.getNew(), 4000);
      } else {
        clearInterval(this.timerId);
      }
    },
    letTry(checked) {
      this.checked = checked;
      this.toggleTimer();
    }
  },
  components: {
    TogBut,
    NewJoke
  },
  async mounted() {
    this.fetchItems();
  }
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
footer{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
}
.example-shadow-2 {
  background: beige;
  text-align: center;
}
.example-shadow-2 span {
  display: inline-block;
  border-radius: 5px;
  padding: 15px 35px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: white;
  background: #55acee;
  box-shadow: 0 5px 0 #3c93d5;
  transition: 0.3s;
}
.nor {
  width: 150px;
  height: 150px;
  background-image: url(../assets/chack.gif);
  background-repeat: no-repeat;
  background-size: cover;
  @media(max-width: 600px) {
     width: 90px;
    height: 90px;
  }
}
</style>