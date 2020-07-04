(function () {
	let bgPage = chrome.extension.getBackgroundPage();
	console.log(bgPage.word);

	let st = bgPage.word.toString();
	// $("#userinput").val(st);

	let url = "https://cn.bing.com/images/search?q=" + st;
	$("#myif").attr("src", url);
})();
