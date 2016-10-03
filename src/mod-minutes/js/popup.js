function open_win() {
	window.open("timer.html","_blank","toolbar=yes, location=yes, directories=yes, status=yes, menubar=yes, scrollbars=no, resizable=no, copyhistory=yes, width=605, height=315");
}

// function open_Win() {
// 	myWindow = window.open('','','width=500,height=200');
// 	myWindow.document.write("<p>This is 'myWindow'</p>");
// 	myWindow.focus();
// };

$("#link").on("click", function() {
  open_win();
});

// chrome.browserAction.onClicked.addListener(function() {
// 	open_win();
// });