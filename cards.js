var createButton = document.getElementById("createButton")
var deleteButton;
var textArea = document.getElementById("textarea")
var cardSection = document.getElementById("cardSection")
var getText;

textArea.onkeypress=function(e){
    if(e.keyCode==13){
        e.preventDefault();
        var pressedEnter = createButton.click();
    }
}



function handleCreate (event) {
	getText = textArea.value;
	var textCard = "<article class='card'><h1 class='text'>" + getText +"</h1><button type='button' class='deleteButton'>Delete Card</button></article>";
	cardSection.innerHTML += textCard;

	//Added eventlisteners to each of the new buttons
	deleteButton = document.getElementsByClassName("deleteButton")
	for (var i = 0; i < deleteButton.length; i++) {
 		deleteButton.item(i).addEventListener("click", handleDelete);
	};
	textArea.value = "";
}

function handleDelete (event) {
	this.parentElement.remove()
}


createButton.addEventListener("click", handleCreate)




