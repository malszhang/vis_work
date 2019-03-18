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
        data: ['预测胜率','实际胜率'],
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
        //data: ["TOP","BLG","FPX","RNG","iG","EDG","SDG","SN","V5","VG","WE","JDG"],
		data: ["JDG","WE","VG","V5","SN","SDG","EDG","iG","RNG","FPX","BLG","TOP"],
    },
    series: [
        {
            name: '实际胜率',
            type: 'bar',
            //data: ["0.833","0.7","0.818","0.7","0.75","0.545","0.5","0.385","0.364","0.182","0.545","0.727"],
			data: ["0.727","0.545","0.182","0.364","0.385","0.5","0.545","0.75","0.7","0.818","0.7","0.833"],
			x:'75%',
        },
        {
            name: '预测胜率',
            type: 'bar',
            //data: ["0.876808013","0.560723352","0.709324963","0.556400141","0.814267937","0.45702154","0.420586471","0.337441128","0.379081948","0.188349163","0.390254517","0.405738139"],
			data: ["0.405738139","0.390254517","0.188349163","0.379081948","0.337441128","0.420586471","0.45702154","0.814267937","0.556400141","0.709324963","0.560723352","0.876808013"],
			x:'75%',
        },
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}