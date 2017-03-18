function getData(){
		var data=new Array();
		var cityArr=document.getElementById("source").childNodes;
		for (var i = 0; i < cityArr.length; i++) {
			if(cityArr[i].nodeType==3){
				cityArr[i].parentNode.removeChild(cityArr[i])
			}
			}
			for (var i = 0; i < cityArr.length; i++){
				data[i]=new Array();
				data[i][0]=cityArr[i].innerHTML.substring(0,cityArr[i].innerHTML.indexOf("空"));
				data[i][1]=document.getElementsByTagName("b")[i].innerHTML;
		}
		return data;
	}
	
	function sortAqiData(data){
		data.sort(function(a,b){
			return a[1]-b[1];
		});
		// for (var i = 0; i < data.length; i++) {
		// 	console.log(data[i][0]+data[i][1]);
		// }
		return data;
	}
	function render(data){
		var resort=document.getElementById("resort");
		for (var i = 0; i < data.length; i++) {
			var newcode=document.createElement("li");
			newcode.innerHTML="第"+(i+1)+"名:"+data[i][0]+"空气质量:"+"<b>"+data[i][1]+"</b>";
			resort.appendChild(newcode);
		}
	}
	function btnHandle() {
 	 var aqiData = getData();
  	 aqiData = sortAqiData(aqiData);
 	 render(aqiData);
	}
	// function reset(){
	// 	var resort=document.getElementById("resort");
	// 	document.write(resort.childNodes.length)
	// 	 for (var i = 0; i < resort.childNodes.length; i++) {
	// 	 	resort.removeChild(resort.childNodes[i]);
	// 	}
	// }
	    function init(){
	   var btn=document.getElementById("sort-btn");
	  	btn.addEventListener("click",btnHandle,false)
	   }
	 
	   init();