<template>
  <router-view/>
</template>

<script>
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Reviews from "./views/Reviews"
import Form from "./components/Form"
import Footer from "./components/Footer"
  
export default {
  components: {Header, Hero, About, Reviews, Form, Footer},


}
</script>

<style lang="scss">
@font-face {
    font-family: "SF Pro Display";
    src: url("./assets/fonts/SF-Pro-Display-Bold.woff") format("woff");
    font-weight: 700;
}
@font-face {
    font-family: "SF Pro Display";
    src: url("./assets/fonts/SF-Pro-Display-Semibold.woff") format("woff");
    font-weight: 600;
}
@font-face {
    font-family: "SF Pro Display";
    src: url("./assets/fonts/SF-Pro-Display-Heavy.woff") format("woff");
    font-weight: 800;
}
@font-face {
    font-family: "SF Pro Display";
    src: url("./assets/fonts/SF-Pro-Display-Regular.woff") format("woff");
    font-weight: 400;
}
</style>
