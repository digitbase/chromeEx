chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	console.log(tab);
}

chrome.runtime.onMessage.addListener(receiver);

function receiver(re, send, sendResponse) {
	console.log(re);

	window.word = re;
}
