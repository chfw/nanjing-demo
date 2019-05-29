$.getJSON('nanjing.geojson', function (data) {
  var cityname='nanjing';
  echarts.registerMap(cityname, data);
  var chart = echarts.init(document.getElementById('map'));
  var busLines = [].concat.apply([], data.features.map(function (feature, idx) {
	return {
	  coords: feature.geometry.coordinates
	}
  }));
  var sample = {
    type: 'lines',
    coordinateSystem: 'geo',
    polyline: true,
    data: busLines,
    silent: true,
    lineStyle: {
      normal: {
        color: 'white',
        color: 'rgb(200, 35, 45)',
        opacity: 0.2,
        width: 1
      }
    },
    progressiveThreshold: 500,
    progressive: 200
  };
  var series = [sample];
  var option =  {
	geo: {
      map: '南京市中心',
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: 'white',
          borderColor: '#404a59'
        },
        emphasis: {
          areaColor: 'gray'
        }
      }
    },
	"title": [
	  {
		"textStyle": {
		  "color": "#000", 
		  "fontSize": 18
		}, 
		"subtext": "", 
		"text": "南京市中心", 
		"top": "auto", 
		"subtextStyle": {
		  "color": "#aaa", 
		  "fontSize": 12
		}, 
		"left": "auto"
	  }
	], 
	"legend": [
	  {
		"selectedMode": "multiple",
		"top": "top",
		"orient": "horizontal",
		"data": [
		  ""
		],
		"left": "center",
		"show": true
	  }
	],
	"backgroundColor": "#fff",
	"series": series
  };
  chart.setOption(option); 
}).fail(function(xhr, status, error){
  console.log(error);
});
