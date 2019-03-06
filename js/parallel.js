var myChart = echarts.init(document.getElementById('main'));
var data1 = 2;
var parallel = {
	data: [
		[
			[17.91, -0.52, -0.22, 3.45, 0.87],
			[9.09, -1.92, 1.03, -0.13, 0.67],
			[11.52, -1.2, 1.04, -0.51, 0.71],
			[10.14, -1.48, 0.84, 1.22, 0.69],
			[6.45, -0.75, 3.14, 0.43, 0.55],
			[8.24, -0.8, 1.88, 1.01, 0.62],
			[1.98, -1.12, 0.79, -0.52, 0.53],
			[3.55, -0.73, 1.75, -0.12, 0.53],
			[2.7, -0.64, 1.42, 0.29, 0.52],
			[2.9, -0.71, 2.1, -0.7, 0.51],
			[-5.49, -1.03, 2.03, 0.94, 0.34],
			[-11.67, -1.17, 0.98, 1.07, 0.25],
		],
		[
			[10.88, -0.94, -2.4, 1.71, 0.8],
			[8.75, -0.38, -0.2, -0.99, 0.69],
			[5.42, -1.48, -1.03, -0.92, 0.66],
			[7.89, -1.17, -0.99, 0.66, 0.7],
			[3.04, -0.67, -1.14, -1.26, 0.61],
			[-1.09, -0.82, -0.61, -1.14, 0.51],
			[3.88, -0.9, -0.57, -1.54, 0.61],
			[-4.07, -0.88, -1.76, 0.54, 0.48],
			[-6.7, -1, -0.38, -0.85, 0.39],
			[-6.77, -1.61, 0.09, -0.55, 0.38],
			[-5.29, -0.46, 0.07, -0.37, 0.4],
			[-12.18, -1.17, -0.46, -1.73, 0.29],
		],
		[
			[11.92, 0.73, -0.9, -0.06, 0.77],
			[11.51, 0.97, -0.18, -0.67, 0.74],
			[6.43, -0.34, -0.81, -1.6, 0.66],
			[1.35, 0.23, -0.26, -0.18, 0.54],
			[2.62, 1.7, 0.16, -0.66, 0.55],
			[-0.16, 1.22, 0.89, 0.86, 0.47],
			[3.31, 1.8, 0.14, -0.95, 0.56],
			[-4.54, 0.66, 1.52, 0.52, 0.37],
			[-7.54, 0.55, 0.37, -0.38, 0.34],
			[-11.4, -0.31, 0.2, 0.27, 0.28],
			[-11.69, 0.05, -0.15, 1.64, 0.28],
			[-15.11, 0.92, 0.32, 0.95, 0.19],
		],
		[
			[11.01, -0.06, -0.78, -0.04, 0.75],
			[12.43, 1.02, 0.37, -1.55, 0.74],
			[4.99, -0.04, -0.7, 1.63, 0.63],
			[3.45, -0.24, -0.57, -0.29, 0.6],
			[-0.72, -0.09, -0.86, 0.11, 0.52],
			[-3.15, 0.45, -0.57, 0.07, 0.46],
			[-2.97, 0.06, 0.94, -0.1, 0.42],
			[-6.65, -0.43, -0.75, -0.19, 0.4],
			[-3.93, 0.54, 0.03, 0.32, 0.42],
			[-12.37, 0.01, 0.5, 1.58, 0.24],
			[-4.64, 0.23, 1.09, 0.42, 0.38],
			[-8.19, 0.18, 0.51, 1.08, 0.33],
		],
		[
			[10.43, 0.44, -0.15, -1.65, 0.72],
			[9.5, -0.38, -1.02, -0.88, 0.73],
			[3.86, 0.1, 0.57, -1.67, 0.57],
			[2.58, -0.5, -0.76, 1.09, 0.58],
			[0.41, 0.36, 1.25, -1.3, 0.48],
			[0.76, -0.31, -0.24, -0.54, 0.53],
			[-2.53, 1.13, 0.05, -0.51, 0.45],
			[-0.9, 0.36, -0.32, -0.02, 0.5],
			[-4.22, -0.24, -0.19, 0.54, 0.43],
			[-9.14, -0.11, -0.74, -0.95, 0.35],
			[-20.71, -0.59, 0.12, -0.52, 0.09],
			[-20.83, -1.44, -1.51, -0.67, 0.15],
		],
		[
			[21.2, -0.24, -1.92, 1.79, 0.99],
			[16.1, 2.42, 0.05, 0.7, 0.81],
			[3.26, 0.69, 0.37, -0.19, 0.56],
			[3.11, 0.89, -0.72, -0.6, 0.59],
			[5.55, 1.84, -0.11, 0.24, 0.61],
			[3.45, 1.61, 0.38, -0.42, 0.56],
			[-5.23, 1.36, -0.1, 0.6, 0.4],
			[-7.55, 1.1, -0.62, -0.05, 0.37],
			[-8.56, 2.35, 0.39, 0.72, 0.31],
			[-11.35, 0.59, -1.43, 1.29, 0.32],
			[-7.12, 2.26, 0.04, -0.77, 0.35],
			[-19.09, 0.05, -1.3, 0.96, 0.16],
		],
	],
	code: ['2018春', '2018夏', '2017春', '2017夏', '2016春', '2016夏'],
	//name:['打架指数','后期指数','运营指数'，'奇迹指数','胜率值'],
};
var count = 6;
var schema = [{
		name: 'F1',
		index: 0,
		text: '打架指数'
	},
	{
		name: 'F2',
		index: 1,
		text: '后期指数'
	},
	{
		name: 'F3',
		index: 2,
		text: '运营指数'
	},
	{
		name: 'F4',
		index: 3,
		text: '奇迹指数'
	},
	{
		name: 'winrate',
		index: 4,
		text: '胜率值'
	}
];
//console.log(1);
var lineStyle = {
	normal: {
		width: 2,
		opacity: 2,
		//color:'#0169A5'
		//color:color[4]
	}
};
var option = {
	backgroundColor: '#333',
	legend: {
		bottom: 10,
		data: parallel.code,
		itemGap: 20,
		textStyle: {
			color: '#fff',
			fontSize: 14
		}
	},
	tooltip: {
		padding: 10,
		backgroundColor: '#222',
		borderColor: '#777',
		borderWidth: 1,
		
	},
	parallelAxis: [
		{
			dim:0,
			name: schema[0].text
		},
		{
			dim: 1,
			name: schema[1].text
		},
		{
			dim: 2,
			name: schema[2].text
		},
		{
			dim: 3,
			name: schema[3].text
		},
		{
			dim: 4,
			name: schema[4].text
		},
	],
	visualMap: {
		show: true,
		min: 0,
		max: 150,
		dimension: 5,
		inRange: {
			color: ['#d94e5d', '#eac736', '#50a3ba'].reverse(),
		}
	},
	parallel: {
		left: '5%',
		right: '18%',
		bottom: '10%',
		top: '15%',
		parallelAxisDefault: {
			type: 'value',
			name: '平行坐标',
			nameLocation: 'end',
			nameGap: 20,
			nameTextStyle: {
				color: '#fff',
				fontSize: 12
			},
			axisLine: {
				lineStyle: {
					color: '#aaa'
				}
			},
			axisTick: {
				lineStyle: {
					color: '#777'
				}
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#fff'
				}
			}
		}
	},
	series: []
}
console.log(2);
var count = 6;
for (var i = 0; i < count; i++) {
	option.series[i] = ({
		name: parallel.code[i],
		type: 'parallel',
		lineStyle: lineStyle,
		data: parallel.data[i],
	});
}
myChart.setOption(option, true);