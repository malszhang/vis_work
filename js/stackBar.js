var dom = document.getElementById("stackBar");
var myChart = echarts.init(dom);
var stackBar = {
	data: [
		["0.44 ", "0.15 ", "0.23 ", "0.18 ", "0.06 ", "0.12 ", "-0.09 ", "-0.04 ", "-0.07 ", "-0.06 ", "-0.35 ", "-0.56 "],
		["-0.35 ", "0.65 ", "0.14 ", "0.34 ", "-0.19 ", "-0.15 ", "0.08 ", "-0.20 ", "-0.26 ", "-0.21 ", "0.01 ", "0.11 "],
		["-0.48 ", "-0.11 ", "-0.11 ", "-0.17 ", "0.52 ", "0.14 ", "-0.18 ", "0.10 ", "0.01 ", "0.21 ", "0.19 ", "-0.13 "],
		["0.70 ", "-0.16 ", "-0.25 ", "0.16 ", "-0.03 ", "0.11 ", "-0.26 ", "-0.16 ", "-0.06 ", "-0.30 ", "0.10 ", "0.13 "],
	],
	name: ["打架指数", "后期指数", "运营指数", "奇迹指数"],
	team: ["iG", "EDG", "RNG", "RW", "Snake", "BLG", "JDG", "SNG", "FPX", "WE", "LGD", "OMG"],
	color3: ['#86E3CE', '#D0E6A5', '#FFDD94', '#FA897B'],
	color2: ['#3399CC', '#CCFFCC', '#99CCCC', '#99CCFF'],
	
	color4: ['#BF4226', '#E1C0D8', '#F1CFE5', '#A9A5A2']
}
var STACK_COUNT = 4;
var stackBarOption = {
	grid: [{
       left: '10%',
       bottom: '10%',
       top: '20%',
       right: '10%',
	   containLabel: true,
   }],
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	brush: {
		toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
		xAxisIndex: 0
	},
	toolbox: {
		feature: {
			magicType: {
				type: ['stack', 'tiled']
			},
			dataView: {}
		}
	},
	legend: {
		data: stackBar.name,
		// color: stackBar.color,
		align: 'left',
		left: 75
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
				position: 'insideRight',
			}
		},
		data: stackBar.data[i],
// 		itemStyle: {
// 			normal: {
// 				color: stackBar.color[i],
// 			}
// 		},

	})
}
myChart.setOption(stackBarOption, true);
