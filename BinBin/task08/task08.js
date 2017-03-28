function Tree(root){
		this.root=root;
		this.isAnimating=false;
		this.animQueue=[];
		this.word="";
	}
	Tree.prototype.isReady = function() {
		if(this.isAnimating){
			alert("动画正在进行中，请稍后");
			return false;
		}else{
			return true;
		}
	};
	Tree.prototype.init=function(){
		this.root.style.backgroundColor="#fff";
		var divs=document.getElementsByTagName("div");
		Array.prototype.forEach.call(divs,function(item,index){
			item.style.backgroundColor="#fff";
		});
	}

	Tree.prototype.preOrder=function(node){
		if(node){
			this.animQueue.push(node);
			var nodes=node.children;
			for(var i=0;i<nodes.length;i++){
				this.preOrder(nodes[i]);
			}
		}
	}
	Tree.prototype.postOrder=function(node){
		if(node){
			var nodes=node.children;
			for(var i=0;i<nodes.length;i++){
				this.postOrder(nodes[i]);
			}
			this.animQueue.push(node);
		}
	}
	Tree.prototype.search=function(word){
		this.preOrder(root);
		this.word=word;
		this.showResult();
	}
	Tree.prototype.showResult=function(){
		this.init();
		this.isAnimating=true;
		var arr=this.animQueue,
		    time=500;
		    that=this,
		    count=0;

		    time=setInterval(function(){
		    	arr[Math.max(count-1,0)].style.backgroundColor="#fff";
		    	arr[Math.min(count++,arr.length-1)].style.backgroundColor="#0f0";
		    	if(count>arr.length){
		    		clearInterval(time);
		    		that.animQueue=[];
		    		arr[arr.length-1].style.backgroundColor="#fff";
		    		that.isAnimating=false;
		    		alert("没有找到查询内容");
		    	}
		    		else if(arr[count-1].innerHTML===that.word||arr[count-1].getAttribute("data")===that.word){
		    			clearInterval(time);
		    			arr[count-1].style.backgroundColor="#f00";
		    			that.animQueue=[];
		    			that.isAnimating=false;
		    		}
		    	
		    },time);
	}
	Tree.prototype.animate=function(){
		this.init();
		this.isAnimating=true;
		var arr=this.animQueue,
		    time=500;
		    that=this,
		    count=0;
		    time=setInterval(function(){
		    	arr[Math.max(count-1,0)].style.backgroundColor="#fff";
		    	arr[Math.min(count++,arr.length-1)].style.backgroundColor="#0f0";
		    	if(count>arr.length){
		    		clearInterval(time);
		    		that.animQueue=[];
		    		arr[arr.length-1].style.backgroundColor="#fff";
		    		that.isAnimating=false;
		    	}
		    },time);
	}
	function addEvent(elem,event,func){
		if(elem.addEventListener){
			elem.addEventListener(event,func,false);
		}else if(elem.attachEvent){
			elem.attachEvent("on"+event,func);
		}
	}
	window.onload=function(){
		var root=document.getElementById("root");
		var tree=new Tree(root);
		var btns=document.getElementsByTagName("button");
		Array.prototype.forEach.call(btns,function(item,index){
			addEvent(item,"click",function(){
				if(tree.isReady()){
					var method=item.getAttribute("data-method");
					tree[method](root);
					tree.animate();
				}
			})
		});
		var search=document.getElementById("search");
		addEvent(search,"click",function(){
			if(tree.isReady){
				var word=document.getElementById("word").value;
				tree.search(word);
			}
		})
		}
	