<template>
	<div class="home">
		水印页面
	</div>
</template>

<script>
	export default {
		name: "Home",
		data(){
			return {
				time: null
			}
		},
		computed:{
			routerData() {
				return this.$router.options.routes
			}
		},
		mounted() {
			// js卸载plugins/common.js 内
			this.time = setInterval(()=>{
				this.__canvasWM({
					content: "水印"
				})
			},1000)		
		},
		beforeDestroy() {
			clearInterval(this.time)
		}
	};
</script>
<style lang="scss" scoped>
	.home {
		display: flex;
		flex-direction: column;
	}
</style>