<template>
	<div class="container">
		<div class="left">
			<my-table :col="col" :data="data" v-if="showTable" :ref="tableref">
			</my-table>
		</div>
		<div class="right">
			<el-tree  v-if="showTable" draggable :data="col" node-key="id" :expand-on-click-node="false"
			:render-content="renderContent" @node-drop="nodedrop"/>
		</div>		
	</div>
</template>

<script>
	import MyTable from './MyTable'
	export default {
		components: {
			MyTable
		},
		data() {
			return {
				col: [{
						prop: 'date',
						label: '日期',
						id:"1"
					},
					{
						label: '配送信息',
						prop: 'name',
						id:"2",
						children: [
							{
								prop: 'name',
								label: '姓名',
								id:"2-2"
							},
							{
								label: '地址',
								prop: 'province',
								children: [{
										prop: 'province',
										label: '省份',
										id:"2-2-1"
									},
									{
										prop: 'city',
										label: '市区',
										id:"2-2-2"
									},
									{
										prop: 'address',
										label: '地址',
										id:"2-2-3"
									}
								]
							}
						]
					}
				],
				data: [{
						date: '2016-05-03',
						name: '王小虎',
						province: '上海',
						city: '普陀区',
						address: '上海市普陀区金沙江路 1518 弄',
						zip: 200333
					},
					{
						date: '2016-05-02',
						name: '王小虎',
						province: '上海',
						city: '普陀区',
						address: '上海市普陀区金沙江路 1518 弄',
						zip: 200333
					}
				],
				showTable: true,
				tableref: "tableref"
			}
		},
		methods: {
			renderContent(h, {node, data}) {
				if(data.isInput) {
					return (
						<div class="custom-tree-node">
							{h("input",{
								domProps: {value: data.label},
								on: {
									blur: ()=>{this.edit(data)}
								}
							})}
							<span class="node-operation">
								<i on-click={() => this.append(data)}
								class="el-icon-plus"
								title="修改"></i>
								<i on-click={() => this.remove(node,data)}
								class="el-icon-delete"
								title="删除"></i>
							</span>
						</div>
					)					
				} else {
					return (
						<div class="custom-tree-node">
							<span>{node.label}</span>
							<span class="node-operation">
								<i on-click={() => this.append(data)}
								class="el-icon-plus"
								title="修改"></i>
								<i on-click={() => this.remove(node,data)}
								class="el-icon-delete"
								title="删除"></i>
							</span>
						</div>
					)
				}				
			},
			edit(data) {
				data.isInput = false
				this.reload()
			},
			append(data) {
				data.isInput = true
				this.reload()
			},
			remove(node, data) {
				const { parent } = node
				const children = parent.data.children || parent.data
				const index = children.findIndex(d => d.prop === data.prop)
				children.splice(index, 1)
				this.reload()
			},
			nodedrop() {
				this.reload()
			},
			reload() {
				console.log(this.$refs.tableref)
				this.showTable = false
				this.$nextTick(() => {
				    this.showTable = true
					this.$nextTick(() => {
						console.log(this.$refs.tableref)
					})
				})
			}
		}
	}
</script>
<style lang="scss">
	.container {		
		display: flex;
		.left {
			width: 80%;
		}
		.right {
			border:1px solid #eee;
			width: 20%;
		}
	}
	.custom-tree-node {
		width: 100%;
		font-size: 14px;
		display: flex;
		justify-content:  space-between;
		.node-operation {
			float: right;
		}
		i[class*="el-icon"] + i[class*="el-icon"] {
			margin-left: 6px;
		}
		.el-icon-plus {
			color: #409eff;
		}
		.el-icon-delete {
			color: #157a0c;
		}
	}
</style>
