<template>
  <div class="burger">
    <p class="burger-item">Not Made by Robots</p>
          
    <img @click="burgerClicked" src="~assets/img/bars-solid.svg" class="burger-item burger-icon">
  </div>
</template>

<script>
export default {
  data() {
    return {
      burger: ""
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
  z-index: 999;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(10, 10, 10);
  border: solid 1px white;
  -webkit-box-shadow: 0px 8px 7px 0px rgba(0,0,0,0.3); 
box-shadow: 0px 8px 7px 0px rgba(0, 0, 0, 0.3);
}
.burger-item {
  font-size: 2.5em;
  line-height: 50%;
}
.burger-icon {
  cursor: pointer;
  color: lightblue;
  fill: lightblue;
  height: 1.5em;
}



</style>
