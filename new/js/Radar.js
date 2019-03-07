var dom = document.getElementById("Radar");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: 'LPL战队指数雷达图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 'center',
        data:["iG", "EDG", "RNG", "RW", "Snake", "BLG", "JDG", "SNG", "FPX", "WE", "LGD", "OMG"]
    },
    radar: [
        {
            indicator: [
                {text: '打架指数', max: 20},
                {text: '后期指数', max: 2},
                {text: '运营指数', max: 3.5},
                {text: '奇迹指数', max: 4}
            ],
            center: ['50%','60%'],
            radius: 140
			
        },  
    ],
    series: [
		{
            type: 'radar',
             tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: [17.91,0.52,-0.22,3.45],
                    name: 'iG'
                },
                {
                    value: [9.09,1.92,1.03,-0.13],
                    name: 'EDG'
                },
                {
                    value: [11.52,1.2,1.04,-0.51],
                    name: 'RNG'
                },
                {
                    value: [10.14,1.48,0.84,1.22],
                    name: 'RW'
                },
                {
                    value: [6.45,0.75,3.14,0.43],
                    name: 'Snake'
                },
                {
                    value: [8.24,0.8,1.88,1.01],
                    name: 'BLG'
                },
                {
                    value: [1.98,1.12,0.79,-0.52],
                    name: 'JDG'
                },
                {
                    value: [3.55,0.73,1.75,-0.12],
                    name: 'SNG'
                },
                {
                    value: [2.7,0.64,1.42,0.29],
                    name: 'FPX'
                },
                {
                    value: [2.9,0.71,2.1,-0.7],
                    name: 'WE'
                },
                {
                    value: [-5.49,1.03,2.03,0.94],
                    name: 'LGD'
                },
                {
                    value: [-11.67,1.17,0.98,1.07],
                    name: 'OMG'
                }
            ]
        }
		
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}