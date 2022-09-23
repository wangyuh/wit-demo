<template>
	<div class="home">
		<router-link :to="{path:item.path}" v-for="item in routerData" :key="item.path">{{item.name}}</router-link>
	</div>
</template>

<script>
	export default {
		name: "Home",
		computed:{
			routerData() {
				return this.$router.options.routes
			}
		}
	};
</script>
<style lang="scss" scoped>
	.home {
		display: flex;
		flex-direction: column;
	}
</style>