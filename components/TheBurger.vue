<template>
  <div class="burger">
    <p class="burger-item">Not Made By Robots</p>
          
    <p @click="burgerClicked" class="burger-item burger-icon">{{ burger }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      burger: "🍔"
    };
  },
  methods: {
    burgerClicked() {
      this.$emit("burgerIsClicked", true);
    }
  }
};
</script>
<style scoped>
.burger {
  margin: 0;
  padding: 0;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding:0 3em;
  z-index: 99;
  justify-content: space-between;
}
.burger-item {
  font-size: 1.5em;
}
.burger-icon {
  font-size: 2em;
  cursor: pointer;
}



</style>
