function google(){  
	var text=document.getElementById("searchinput").value;
	window.location.href="https://www.google.com.hk/search?safe=strict&q="+text;
}
function baidu(){  
	var text=document.getElementById("searchinput").value;
	window.location.href="https://www.baidu.com/s?ie=UTF-8&wd="+text;		
	}
function getKey(){
	if(event.keyCode==13){
		baidu();
	}   
}