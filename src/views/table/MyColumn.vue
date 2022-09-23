<template>
	<el-table-column :prop="col.prop" :label="col.label" align="left" :key="col.id">
		
		<template slot-scope="scope">
			<el-input v-model="scope.row[col.prop]"></el-input>
	    </template>
		<template v-if="col.children">
			<my-column v-for="(item, index) in col.children" :key="index" :col="item"></my-column>
		</template>

	</el-table-column>
</template>

<script>
	export default {
		name: 'MyColumn',
		props: {
			col: {
				type: Object
			}
		}
	}
</script>
<style scoped>
</style>
