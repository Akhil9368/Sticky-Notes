let notes = document.getElementById("notes");
let note = document.querySelectorAll(".input-text");


function CreateEvent() {
    let node = document.createElement("P");
    let myImage = document.createElement("IMG");
    myImage.src = "images/delete.png"
    node.className = "input-text";
    node.setAttribute("contenteditable", "true")
    myImage.classList.add("delete_image");
    notes.appendChild(node).appendChild(myImage);
    localsaveNotes();
}

function localsaveNotes() {
    localStorage.setItem("Notes_Data", notes.innerHTML);
}

function getNotes() {
    notes.innerHTML = localStorage.getItem("Notes_Data");
}
getNotes();


notes.addEventListener('click', function (e) {

    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        localsaveNotes()
    }
    else if(e.target.tagName === 'P'){
        note = document.querySelectorAll('.input-text');
        console.log(note)
        note.forEach(elemVal =>{
            console.log(elemVal)
            elemVal.onkeyup = function(){
                localsaveNotes();
            }
        })
    }

})








