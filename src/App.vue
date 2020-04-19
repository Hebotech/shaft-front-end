<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from './store/index';

export default {
  store,
  name: 'ShaftHelmets',
  metaInfo: {
    meta: [
      { name: 'description', content: 'Descubre la nueva colección 🔥, encuentra dónde comprar 🗺 o vende Shaft 🤑' },
      { property: 'og:title', content: 'Sitio Web Shaft Helmets México' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'Descubre la nueva colección 🔥, encuentra dónde comprar 🗺 o vende Shaft 🤑' },
      { property: 'og:image', content: 'https://pure-cove-18399.herokuapp.com/products/SH591/PIKA/2.png' },
    ],
  },
};
</script>

<style lang="scss">
@font-face {
    font-family: 'shaft-h1';
    font-display: swap;
    src: url("~@/styles/lhfasylum-webfont.woff") format('woff');
}
@font-face {
    font-family: 'MensuraBold';
    font-display: swap;
    src: url('~@/styles/mensurabold-webfont.woff2') format('woff2'),
         url('~@/styles/mensurabold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}
@font-face {
    font-family: 'MensuraLight';
    font-display: swap;
    src: url('~@/styles/mensuralight-webfont.woff2') format('woff2'),
         url('~@/styles/mensuralight-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-display: swap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
