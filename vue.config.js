const path = require('path');
module.exports = {
	// outputDir: '',
	chainWebpack: (config) => {
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
		types.forEach((type) => addStyleResource(config.module.rule('less').oneOf(type)));
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					require('postcss-pxtorem')({
						rootValue: 37.5, //你在html节点设的font-size大小
						unitPrecision: 2, //转rem精确到小数点多少位
						propList: ['*'],
						selectorBlackList: ['.van', 'swiper'], // 要忽略并保留为px的选择器
						replace: true, // 布尔值）替换包含REM的规则，而不是添加回退
						mediaQuery: false, //媒体查询内的px是否转换
						minPixelValue: 1, //小于指定数值的px不转换
					}),
					// require('postcss-px-to-viewport')({
					// 	unitToConvert: 'px', //需要转换的单位，默认为"px"
					// 	viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度
					// 	viewportHeight: 667, //视窗的高度，根据375设备的宽度来指定，一般指定667，也可以不配置
					// 	unitPrecision: 13, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
					// 	propList: ['*'], // 能转化为vw的属性列表
					// 	viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
					// 	fontViewportUnit: 'vw', //字体使用的视口单位
					// 	selectorBlackList: ['.ignore-', '.hairlines'], //指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
					// 	minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
					// 	mediaQuery: false, // 允许在媒体查询中转换`px`
					// 	replace: true, //是否直接更换属性值，而不添加备用属性
					// 	exclude: /node_modules/i, //忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
					// 	landscape: false, //是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
					// 	landscapeUnit: 'vw', //横屏时使用的单位
					// 	landscapeWidth: 1134, //横屏时使用的视口宽度
					// }),
				],
			},
		},
	},
};

function addStyleResource(rule) {
	rule.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [path.resolve(__dirname, './src/styles/base.less')],
		});
}
