<template>
  <Header />
  <Hero />
  <About />
  <Reviews />
  <Form />
  <Footer />
</template>

<script>
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Reviews from "../views/Reviews"
import Form from "../components/Form"
import Footer from "../components/Footer"
  
export default {
  components: {Header, Hero, About, Reviews, Form, Footer},


}
</script>