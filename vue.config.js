module.exports = {
	productionSourceMap: false,
	publicPath: "./",
	outputDir: "dist",
	assetsDir: "assets",
	devServer: {
		proxy: {
			"/api": {
				target: "http://localhost:80",
				changeOrigin: true,
				secure: false,
				pathRewrite: {
					"^/api": "",
				},
			},
		},
		open: true,
	},
};
