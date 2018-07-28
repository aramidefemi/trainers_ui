<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style>
@import './assets/css/bootstrap.min.css';
@import './assets/css/boomerang.min.css';
@import './assets/fonts/ionicons/css/ionicons.min.css';

.btn-primary {
    color: #fff;
    background-color: #7ac066;
    border-color: #7ac066cc;
}
.btn-primary:hover {
    color: #fff;
    background-color: #aeca3d;
    border-color: #aeca3dcc;
}
.pull-right {
  float: right;
}
/* yello #eed55a */
/* lemmon #aeca3d */
/* green #7ac066 */
</style>
