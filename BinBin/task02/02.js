
var aqiData = [
 	 ["北京", 90],
  	 ["上海", 50],
 	 ["福州", 10],
 	 ["广州", 50],
	 ["成都", 80],
	 ["西安", 100]
	];
	// document.write(aqiData.join(" "));
	var cityArr=new Array();
	for (var i = 0; i < aqiData.length; i++) {

		if (aqiData[i][1]>60) {
			cityArr[i]=aqiData[i];
			// document.write(cityArr[i].sort());
		}
	}
	cityArr.sort(function (x,y){
		return x[1]-y[1];
	});
	for (var i = 0; i < cityArr.length; i++) {
		document.write("第"+(i+1)+"名："+cityArr[i][0]+":"+cityArr[i][1]+"<br>");
	}