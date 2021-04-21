<template>
  <div class="nav">
    <div class="logo">
      KO <br />
      KO
    </div>
    <div class="nav-options" v-bind:class="{ 'cover-screen': openBurgerMenu }">
      <div class="burger-menu" v-on:click="openBurgerMenu = !openBurgerMenu">
        <i class="fas fa-bars" v-if="!openBurgerMenu"></i>
        <i class="fas fa-times" v-if="openBurgerMenu"></i>
      </div>
      <ul v-bind:class="{ 'display-menu': openBurgerMenu }">
        <li v-for="option in navOptions" :key="option">
          <span>{{ option }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Nav",
  props: {
    navOptions: Array,
  },
  data() {
    return {
      openBurgerMenu: false,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/_defaultVars.scss";

.nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;
  margin: auto;
  max-width: $max-width;

  .logo {
    display: flex;
    place-content: center;
    place-items: center;
    height: 3rem;
    width: 3rem;
    font-weight: 600;
    border: 1px solid $black;
  }

  .nav-options {
    position: relative;
    text-transform: capitalize;
    text-align: right;

    &.cover-screen {
      position: fixed;
      top: 0;
      right: 0;
      min-height: 100vh;
      min-width: 100vw;
      z-index: 100;
      color: white;
      background-color: $black;

      &:nth-child(n) {
        padding: 2rem 4rem;
      }
    }

    .burger-menu {
      cursor: pointer;
      font-size: 1.5rem;
      float: right;
    }

    ul {
      position: fixed;
      right: 0;
      bottom: 0;
      display: none;
      flex-direction: column;
      gap: 2rem;
      margin: 6rem;
      list-style: none;

      li span {
        position: relative;
        font-weight: 500;
        font-size: 2rem;

        &::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          width: 100%;
          z-index: -1;
          opacity: 0;
          box-shadow: 0px -8px 0px 8px $accent;
          transition: 0.15s ease-in-out;
        }

        &:hover {
          cursor: pointer;

          &::after {
            opacity: 1;
          }
        }
      }
    }

    .display-menu {
      display: flex;
    }
  }
}

@media (min-width: 1024px) {
  .nav {
    .nav-options {
      display: flex;
      align-items: center;

      &.cover-screen {
        position: unset;
        top: unset;
        right: unset;
        min-height: unset;
        min-width: unset;
        z-index: unset;
        color: unset;
        background-color: unset;

        &:nth-child(n) {
          padding: unset;
        }
      }

      .burger-menu {
        display: none;
      }

      ul {
        position: initial;
        display: flex;
        flex-direction: row;
        margin: 0;

        li span {
          font-size: 1rem;

          &::after {
            box-shadow: 0px -4px 0px 6px $accent;
          }
        }
      }
    }
  }
}
</style>
