function init(){
//add your javascrip between these two lines of code
	var messageInput = document.getElementById("entryinput";
	var messageOutput = document.getElementById("textoutput");
	var button1 = document.getElementById("entrybutton");
	
	function messageAlert() {
	
		alert('Sean Khuon: ' + messageInput.value);
		messageOutput.innerHTML = messageInput.value;
	}
	
	button1.addEventListener('click', messageAlert);







window.addEventListener('load', init);