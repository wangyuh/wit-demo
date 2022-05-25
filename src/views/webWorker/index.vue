<template>
	<div>
		<div class="move">LHX-FLY</div>
	</div>
</template>

<script>
	/* 
		1、npm i worker-loader --save-dev
		2、vue-cli3 中依赖的 webpack 版本是 "webpack": "^4.0.0"，而 "worker-loader": "^3.0.0" 要求的 webpack 版本是 4 | 5。
		使用前要检查下各个依赖对应版本，不然会引发一些错误。 
		3、webpack 配置
		vue-cli 的 webpack 配置在 vue.config.js 文件中，见vue.config.js > chainWebpack > worker配置
	 */
	import test from "./worker/test.worker.js";
	export default {
		data() {
			return {}
		},
		created() {
			// 一秒后执行js长任务
			// setTimeout(this.longFun, 1000)
			
			//长任务重新开线程执行
			let myWorker = new test()
			myWorker.postMessage('新线程'); // 发送
			myWorker.onmessage = event => {
				console.log(event)
			};
		},
		methods: {
			longFun() {
				let i = 0
				const start = performance.now()
				// 5秒内不停执行 i++ 操作，实现长任务效果
				while (performance.now() - start <= 5000) {
					i++
				}
				return i
			}
		}
	}
</script>
<style>
	@keyframes move {
		from {
			left: 0;
		}

		to {
			left: 100%;
		}
	}

	.move {
		position: absolute;
		animation: move 5s linear infinite;
	}
</style>
