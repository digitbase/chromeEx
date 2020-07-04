chrome.runtime.onMessage.addListener(receiver);

function receiver(re, send, sendResponse) {
	console.log(re);

	window.word = re;
}
