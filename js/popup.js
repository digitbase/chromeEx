var st = "";
(function () {
	console.log("func run");
	let bgPage = chrome.extension.getBackgroundPage();
	if (!typeof bgPage.word == "string") return false;

	st = bgPage.word;

	let url = "https://cn.bing.com/images/search?q=" + st;
	$("#myif").attr("src", url);
})();

document.addEventListener("DOMContentLoaded", function () {
	console.log("DOMContentLoaded");
	let surl = "https://s.ohltr.com/searchapi.php?ex=0&word=" + st;
	$.getJSON(surl, function (data) {
		if (data.error == 1) {
			//console.log(data.data[0].explain.toString());
			if (data.data[0].root == "")
				$("#mytxt").html(data.data[0].root + data.data[0].explain);
			else $("#mytxt").html(data.data[0].root);
		}
	});
	let keyWord = st;

	var burl =
		"https://sp0.baidu.com/-rM1hT4a2gU2pMbgoY3K/gettts?lan=en&text=" +
		keyWord +
		"&spd=2&source=alading";
	$("#dictVoice").attr("src", burl);
});
