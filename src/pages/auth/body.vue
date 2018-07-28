<template>
 <div class="">
    <Header />
    <router-view></router-view>

 </div>
</template>


<script type="text/javascript">
	import Header from './header'
	export default {
		components: {Header},
		data(){
			return {

			}
		},
	}
</script>



<style type="text/css" scoped>

</style>
