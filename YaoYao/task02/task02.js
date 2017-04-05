var labels=document.getElementsByTagName("label");
		var inputs=document.getElementsByTagName("input");
		var results=document.getElementsByClassName("result");
		
		var str1="必填，长度应为4-16个字符！";
		var str2="不能为空";
		var str3='格式正确';
		var str4="长度不符合要求"

		function showFocusTips(index){
			var tip=document.createElement("p")
			inputs[index].onfocus=function(){
			results[index].appendChild(tip);
			tip.className="default";
			if(index==2){
				tip.innerHTML="再次输入相同密码"
			}else{
				tip.innerHTML=str1;
			}
			}
		}
		function isAllNaN(value){
			for (var i = 0; i < value.length; i++) {
				if(isNaN(value.charAt(i))){
					return false
				}
			}
			return true
		}

		function getlength(value){
			var strlen=0;
			for(var i=0;i<value.length;i++){
			 		var a=value.charAt(i);
			 		if(a.match(/[^\x00-\xff]/ig)!=null){
			 			strlen+=2;
			 		}else{
			 			strlen++;
			 		 }
			 		}
			 return strlen;
			}
	
		function showChecktips(index){
			inputs[index].onblur=function(){
				var checkTips= results[index].childNodes[1];
				var value=inputs[index].value.replace(/\s/g,"");;
				//value=value.replace(/\s/g,"");
				if(getlength(value)==0){
					checkTips.innerHTML=labels[index].innerHTML+str2;
					inputs[index].className=checkTips.className="error";
					
				}else if(getlength(value)<4||getlength(value)>16){
					checkTips.innerHTML=labels[index].innerHTML+str4;
					inputs[index].className=checkTips.className="error";
					
				}else{
					checkTips.innerHTML=labels[index].innerHTML+str3;
					inputs[index].className=checkTips.className="success";
					if(index==1){
						checkTips.innerHTML="密码可用";
					}else if(index==2){
						if(value==inputs[index-1].value){
							checkTips.innerHTML="密码输入一致";

						}else{
							checkTips.innerHTML="两次密码输入不一致";
							inputs[index].className=checkTips.className="error";
							
						}
					}else if(index==3){
						if(value.indexOf("@")==-1){
							checkTips.innerHTML="邮箱格式错误";
							inputs[index].className=checkTips.className="error";
							
						}
					}else if(index==4){
						if(!(getlength(value)==5&&value.charAt(0)=="1"&&isAllNaN(value))){
							checkTips.innerHTML="手机格式错误";
							inputs[index].className=checkTips.className="error";
							
						}
					}
				}
			}
		
		}
		
		for(var i=0;i<inputs.length;i++){
			 showFocusTips(i);
			 showChecktips(i);
		}
		function testResults(){
			for(var i=0;i<inputs.length;i++){
				if(inputs[i].className=="error"){
					return false
				}
			}
			return true
		}
		 
		var submit=document.getElementById("submit");
		submit.onclick=function(){
			if(testResults()){
				alert("提交成功")
			}else{
				alert("提交失败")
			}
		}

	