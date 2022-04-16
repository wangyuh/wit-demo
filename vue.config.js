module.exports = {
	lintOnSave: false,
	publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
	outputDir: 'dist',
	assetsDir: 'static',
	productionSourceMap: false,
	configureWebpack: {
		performance: {
			hints: 'warning',
			//入口起点的最大体积 整数类型（以字节为单位）
			maxEntrypointSize: 50000000,
			//生成文件的最大体积 整数类型（以字节为单位 300k）
			maxAssetSize: 30000000,
			//只给出 js 文件的性能提示
			assetFilter: function(assetFilename) {
				return assetFilename.endsWith('.js');
			}
		}
	},
	chainWebpack: config => {
		// worker配置
		config.module.rule('worker').test(/\.worker\.js$/).use('worker-loader').loader('worker-loader').options({
		  inline: 'fallback'
		}).end();
		config.module.rule('js').exclude.add(/\.worker\.js$/);
	},
	// 解决打包的时报错: (由于一些原因我的项目最后没有使用 worker, 也就没有研究打包遇到的问题...)
	parallel: false,
	devServer: {
		open: true,
		proxy: {
			'/': {
				target: 'http://192.168.90.29:9089/ntsyzl',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/': ''
				}
			},
		}
	}
}
