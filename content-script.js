window.addEventListener("mouseup", wordSelected);
function wordSelected(evet) {
	let selectText = window.getSelection().toString().trim();
	if (selectText.length > 0) {
		chrome.runtime.sendMessage(selectText);
	}
}
