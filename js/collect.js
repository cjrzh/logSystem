function post(url) {
	// body...
	var postData = {
		"username": "admin",
		"action": "click",
		"url": url
	};
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status >= 200 && xhr.status < 304 || xhr.status == 304) {
				console.log(xhr.responseText);
			}
		}
	}
	xhr.open("POST", "localhost:8080", true);
	xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
	xhr.send(postData)

}

function toDetail(url) {
	//alert(url);
	post(url);
	window.open(url);
}
toDetail('http://www.chinasafety.gov.cn/newpage/Contents/Channel_5493/2016/1019/277202/content_277202.htm');