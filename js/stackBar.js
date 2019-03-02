var dom = document.getElementById("stackBar");
var myChart = echarts.init(dom);
var stackBar = {
	data: [
		[17.91, 9.09, 11.52, 10.14, 6.45, 8.24, 1.98, 3.55, 2.7, 2.9, -5.49, -11.67],
		[0.52, 1.92, 1.2, 1.48, 0.75, 0.8, 1.12, 0.73, 0.64, 0.71, 1.03, 1.17],
		[0.32, 1.03, 1.04, 0.84, 3.14, 1.88, 0.79, 1.75, 1.42, 2.1, 2.03, 0.98],
		[3.45, -0.13, -0.51, 1.22, 0.43, 1.01, -0.52, -0.12, 0.29, -0.7, 0.94, 1.07]
	],
	name: ["打架指数", "后期指数", "运营指数", "奇迹指数"],
	team: ["iG", "EDG", "RNG", "RW", "Snake", "BLG", "JDG", "SNG", "FPX", "WE", "LGD", "OMG"],
}
var STACK_COUNT = 4;
var stackBarOption = {
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	legend: {
		data: stackBar.name
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	xAxis: {

		type: 'category',
		data: stackBar.team,
	},
	yAxis: {
		type: 'value',
	},
	series: []
}
for (var i = 0; i < STACK_COUNT; i++) {
	stackBarOption.series[i] = ({
		name: stackBar.name[i],
		type: 'bar',
		stack: '总量',
		label: {
			normal: {
				// show: true,
				position: 'insideRight'
			}
		},
		data: stackBar.data[i]
	})
}
myChart.setOption(stackBarOption, true);