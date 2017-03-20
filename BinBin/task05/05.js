	

		function rightIn(){
		
			var data=document.getElementById("text-input").value;
			var num_list=document.getElementById("num_list");
			if(data<10||data>100){
				alert("输入的值超过允许范围");
			}else if(num_list.childNodes.length>=10){
				alert("列表中数字个数已达到上限")
			}else{
			var num=document.createElement("li");
			num.style.height=data+"px";
			num.style.marginTop=(100-data)+"px"
			num_list.appendChild(num);
			num.onclick=function(){
				num_list.removeChild(this);
				}
			}
		}
		
		function leftIn(){
			var data=document.getElementById("text-input").value;
			var num_list=document.getElementById("num_list");
			if(data<10||data>100){
				alert("输入的值超过允许范围");
			}else if(num_list.childNodes.length>=10){
				alert("列表中数字个数已达到上限")
			}else{
			var num=document.createElement("li");
			num.style.height=data+"px";
			num.style.marginTop=(100-data)+"px"
			var first_child=document.getElementById("num_list").firstChild;
			num_list.insertBefore(num,first_child);
			num.onclick=function(){
				num_list.removeChild(this);
				}
			}
		}
		function leftOut(){
			var num_list=document.getElementById("num_list");
			if(num_list.childNodes.length!=0){
				var x=num_list.removeChild(num_list.childNodes[0]);
				alert("删除的元素是："+x.innerHTML);
				console.log(num_list.childNodes.length);
			}else{
				alert("没有元素了")
			}
		}
		function rightOut(){
			var num_list=document.getElementById("num_list");
			if(num_list.childNodes.length!=0){
				var x=num_list.removeChild(num_list.lastChild);
				alert("删除的元素是："+x.innerHTML);
				console.log(num_list.childNodes.length);
			}else{
				alert("没有元素了")
			}
		}
		function sortNum(){
			var numArr=document.getElementById("num_list").childNodes;
			var temp=0;
			for (var i = 1; i < numArr.length; i++) {
				for (var j = 0; j < numArr.length-i; j++) {
					if(numArr[j].offsetHeight>numArr[j+1].offsetHeight){
						temp=numArr[j].offsetHeight;
						numArr[j].style.height=numArr[j+1].offsetHeight+"px";
						numArr[j].style.marginTop=(100-numArr[j+1].offsetHeight)+"px";
						numArr[j+1].style.height=temp+"px";
						numArr[j+1].style.marginTop=(100-temp)+"px";

					}
				}
			}
		}
		function init(){
			document.getElementById("left-in").onclick=function(){
				leftIn();
			};
			document.getElementById("left-out").onclick=function(){
				leftOut();
			};
			document.getElementById("right-in").onclick=function(){
				rightIn();
			};
			document.getElementById("right-out").onclick=function(){
				rightOut();
			};
			document.getElementById("sort-num").onclick=function(){
				sortNum();
			}
		}
		init();