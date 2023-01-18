<script>
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
import FooterApp from './components/FooterApp.vue';


export default {
  components: {
    HeaderApp, 
    MainApp,
    FooterApp,
  },
}
</script>

<template>
  <HeaderApp/>
  <MainApp/>
  <FooterApp/>
</template>

<style lang="scss">

@use './styles/general.scss' as *;
@use './styles/partials/_variables.scss' as *;
@use 'bootstrap/scss/bootstrap.scss' as *;
</style>
