var today = new Date();
var el = document.getElementById('js-dateTime');
setTimeout(function domListenerEvent() {
	el.textContent = today.toDateString();
}, 5000);
el.addEventListner('onload', domListenerEvent(), false);

