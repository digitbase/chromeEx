(function () {
	let bgPage = chrome.extension.getBackgroundPage();
	let st = bgPage.word.toString();

	let url = "https://cn.bing.com/images/search?q=" + st;
	$("#myif").attr("src", url);

	let surl = "https://s.ohltr.com/searchapi.php?ex=0&word=" + st;
	$.getJSON(surl, function (data) {
		if (data.error == 1) {
			console.log(data.data[0].explain.toString());
			$("#mytxt").html(data.data[0].explain.toString());
		}
	});
})();
