function init(){

	var messageInput = document.getElementById("entryinput");
	var button1 = document.getElementById("entrybutton");
	
	function messageAlert() {
	
		alert('Sean Khuon: ' + messageInput.value);
		messageOutput.innerHTML = messageInput.value;
	}
	
	button1.addEventListener('click', messageAlert);

}




window.addEventListener('load', init);