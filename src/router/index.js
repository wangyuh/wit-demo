import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/xlsx',
		name: '导入导出Excal',
		component: () => import('../views/xlsx.vue')
	},
	{
		path: '/table',
		name: 'element表格动态生成多级表头，可无限嵌套;表格行排序功能',
		component: () => import('../views/table/index.vue')
	},
	{
		path: '/tinymce',
		name: 'tinymce富文本',
		component: () => import('../views/tinymce/index.vue')
	},
	{
		path: '/watermark',
		name: '水印效果',
		component: () => import('../views/watermark')
	},
	{
		path: '/jsonEdit',
		name: 'json编辑器',
		component: () => import('../views/jsonEdit')
	},
	{
		path: '/webWorker',
		name: 'web-worker多线程',
		component: () => import('../views/webWorker')
	},
	{
		path: '/tabs',
		name: 'tab',
		component: () => import('../views/tabs')
	},
	{
		path: '/simpleCreoView',
		name: 'CreoView-简单示例',
		component: () => import('../views/creoView/simple-example')
	},
	{
		path: '/tableScroll',
		name: 'element-table表格虚拟滚动加载',
		component: () => import('../views/tableScroll')
	}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
