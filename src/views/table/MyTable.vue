<template>
	<div class="my-table">
		<el-table :data="data" ref="tableref">
			<el-table-column width="80">
				<template>
					<i class="el-icon-rank allowDrag" style="cursor:move;font-size:16px;"></i>
				</template>	
			</el-table-column>
			<my-column v-for="(item,index) in col" :key="index" :col="item"></my-column>
		</el-table>
	</div>
</template>

<script>
	import MyColumn from './MyColumn'
	import Sortable from 'sortablejs'
	export default {
		components: {
			MyColumn
		},
		props: {
			col: {
				type: Array
			},
			data: {
				type: Array
			}
		},
		mounted() {
			// 表格行拖拽
			const tbody = this.$refs.tableref.$el.querySelector('.el-table__body-wrapper tbody')
			Sortable.create(tbody, {
				handle: '.allowDrag',
				onEnd({newIndex, oldIndex}) {
					console.log(newIndex, oldIndex)
				}
			})
		}
	}
</script>
<style scoped>
</style>
