var dom = document.getElementById("categoryBar");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = 'LPL春季赛胜率预测 - 条形图';

option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: [ '预测胜率','实际胜率'],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
		top:'8%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['OMG','LGD','WE','FPX','SNG','JDG','BLG','Snake','RW','RNG','EDG','iG']
    },
    series: [
        {
            name: '胜率',
            type: 'bar',
            data: [0.263,0.316,0.45,0.474,0.474,0.5,0.571,0.6,0.682,0.696,0.714,0.857],
			x:'75%',
        },
        {
            name: '预测',
            type: 'bar',
            data: [-0.263,-0.316,-0.45,-0.474,-0.474,-0.5,-0.571,-0.6,-0.682,-0.696,-0.714,-0.857],
			x:'75%',
        },
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}