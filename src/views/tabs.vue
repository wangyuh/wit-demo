<template>
	<div class="content">
		<vue-tabs-chrome theme="custom" ref="tab" v-model="tab" :tabs="tabs" @click="clickEvent"
			@contextmenu="contextmenu" @remove="removeEvent" @dblclick.native="(event) => dblclick1(event)">
			<!-- <template v-slot:close-icon="index">
				<div>{{ index }}</div>
			</template>
			-->
			<template v-slot:after>
				<i class="el-icon-edit"></i>
			</template>
		</vue-tabs-chrome>
		<div class="btns">
			<button @click="addTab">New Tab</button>
		</div>
	</div>
</template>

<script>
// 插件地址 https://github.com/viewweiwu/vue-tabs-chrome


import VueTabsChrome from 'vue-tabs-chrome'
var timer = null
export default {
	components: {
		VueTabsChrome
	},
	data() {
		return {
			tab: 'google',
			tabs: [
				{
					label: '页签1',
					key: 'google1',
					// favicon: require('@/assets/logo.png')
				},
				{
					label: '页签2',
					key: 'facebook2'
				},
				{
					label: '页签3',
					key: 'google3',
					// favicon: require('@/assets/logo.png')
				},
				{
					label: '页签4',
					key: 'facebook4'
				},
				{
					label: '页签5',
					key: 'google5',
					// favicon: require('@/assets/logo.png')
				},
				{
					label: '页签6',
					key: 'facebook6'
				}, {
					label: '页签7',
					key: 'google7',
					// favicon: require('@/assets/logo.png')
				},
				{
					label: '页签8',
					key: 'facebook8'
				},
				{
					label: '页签9',
					key: 'google9',
					// favicon: require('@/assets/logo.png')
				},
				{
					label: '页签10',
					key: 'facebook10'
				},
				{
					label: '页签31211',
					key: 'google11',
					// favicon: require('@/assets/logo.png')
				},
				{
					label: '页签12',
					key: 'facebook12'
				},
				{
					label: '页签13',
					key: 'google13',
					// favicon: require('@/assets/logo.png')
				},
				{
					label: '页签14',
					key: 'facebook14'
				}, {
					label: '页签15',
					key: 'facebook15'
				},
				{
					label: '页签3121111',
					key: 'google16',
					// favicon: require('@/assets/logo.png')
				},
				{
					label: '页签17',
					key: 'facebook17'
				},
				{
					label: '页签18',
					key: 'google18',
					// favicon: require('@/assets/logo.png')
				},
				{
					label: '页签19',
					key: 'facebook19'
				}
			]
		}
	},
	mounted() {
		// document.oncontextmenu = ()=>{
		// 	return false
		// }
	},
	methods: {
		addTab() {
			let item = 'tab' + Date.now()
			let newTabs = [
				{
					label: 'New Tab',
					key: item
				}
			]
			this.$refs.tab.addTab(...newTabs)
			this.tab = item
		},
		clickEvent() {
			clearTimeout(timer)
			timer = setTimeout(() =>{
				console.log(this.tabs)
			}, 500)
		},
		dblclick1(e) {
			clearTimeout(timer)
			console.log('双击', e)
		},
		contextmenu(event, tab, index) {
			debugger
			event.returnValue = false
		},
		removeEvent(tab, index) {
			debugger
		}
	}
}
</script>

<style lang="scss">


.vue-tabs-chrome.theme-custom {
	padding-top: 0;
	background-color: transparent;
	overflow: hidden;
	padding-right: 30px;

	.tabs-footer,
	.tabs-divider,
	.tabs-background-before,
	.tabs-background-after {
		display: none;
	}

	.tabs-item {
		cursor: pointer;
		border-bottom: 1px solid;
	}

	.tabs-content {
		overflow: unset;
		border-bottom: 1px solid #e4e7ed;
	}

	.tabs-background {
		padding: 0;
	}

	.tabs-background-content {
		border-top: 1px solid #e4e7ed;
		border-left: 1px solid #e4e7ed;
		border-right: 1px solid #e4e7ed;
		border-radius: 0;
		background-color: #fff;
	}

	.tabs-content {
		height: 40px;
	}

	.active {
		color: #409eff;
		border-bottom: none;
		.tabs-background {

			&::before,
			&::after {
				top: 100%;
				left: 0;
				content: '';
				width: 100%;
				height: 1px;
				background-color: #fff;
				z-index: 1;
				position: absolute;
			}

			&::before {
				top: 0;
				height: 2px;
				background-color: #409eff;
			}
		}
	}
}
</style>