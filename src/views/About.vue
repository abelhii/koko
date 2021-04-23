<template>
  <div class="about">
    <header>
      <div class="content">
        <h1>About</h1>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/_defaultVars.scss";

.about {
  header .content {
    background-color: $light-grey;
    display: grid;
    justify-content: center;
    text-align: left;
    padding: 4rem 2rem !important;

    h1 {
      font-size: 4rem;
      margin: 1rem 0;
    }
    p {
      font-size: 1.5rem;
      margin: 1rem 0;
    }
  }
}
</style>
