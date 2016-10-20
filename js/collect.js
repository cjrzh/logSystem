function httpPost(jsonStr) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status >= 200 && xhr.status < 304 || xhr.status == 304) {
				console.log(xhr.responseText);
			}
		}
	}
	console.log(jsonStr);
	xhr.open("POST", "http://localhost:8080", true);
	xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
	xhr.send(jsonStr);
}

function postClick(url) {
	// body...
	var postData = {
		"username": "admin",
		"action": "click",
		"url": url
	};
	var jsonStr = JSON.stringify(postData);
	httpPost(jsonStr);

}


function postQuery(kw) {
	// body...
	var postData = {
		"username":"张翼",
		"action":"query",
		"query":kw
	};
	var jsonStr = JSON.stringify(postData);
	httpPost(jsonStr);
}

function toSelect() {
	var kt = document.getElementById("keytype").value;
	var kw = document.getElementById("keyword").value;
	var basePath = 'http://124.133.230.227:10000/hotapp/';
	postQuery(kw);
	if (kw != "")
		window.parent.document.getElementById("main1Frame").src = basePath + "system/userRecommendInfo.do?type=search&keytype=" + kt + "&keyword=" + kw;

}


function toDetail(url) {
	//alert(url);
	postClick(url);
	window.open(url);
}
toDetail('http://www.chinasafety.gov.cn/newpage/Contents/Channel_5493/2016/1019/277202/content_277202.htm');