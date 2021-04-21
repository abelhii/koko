<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,500;0,600;0,700;1,400&display=swap");
@import "styles/_defaultVars.scss";

html,
body {
  position: relative;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Montserrat", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  text-align: center;
  margin: auto;
  color: $black;
}
</style>
