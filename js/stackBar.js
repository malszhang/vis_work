var dom = document.getElementById("stackBar");
var myChart = echarts.init(dom);
var stackBar = {
	data: [
		["0.328655302","0.161147929","0.164356409","-0.118943142","0.049854283","-0.133943696","-0.343970243","-0.386224865","-0.538852818","-0.671344698","-0.369709048","-0.376841677"],
[0.374370427,"-0.625629573",0.032802469,0.152604348,"-0.57616324","-0.394822073",0.088702911,"-0.244007116",0.050923093,"-0.054098149","-0.158876268","-0.303366833"],
["-0.373645787",0.208564383,"-0.166064769","-0.135842237","-0.791435617",0.088170599,"-0.080862844",0.06324967,"-0.28186311",0.088689232,"-0.061324294","-0.147126699"],
["-0.381555941",0.166328323,"-0.083823702","-0.038097318",0.618444059,"-0.313994235","-0.31559996","-0.052825034","-0.203322554","-0.051617265","-0.286535227","-0.071003849"],
	],
	name: ["打架指数", "后期指数", "运营指数", "奇迹指数"],
	team: ["TOP","BLG","FPX","RNG","iG","EDG","SDG","SN","V5","VG","WE","JDG"],
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
