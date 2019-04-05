var note =[];

// function getNote() {
//     note = document.getElementById("note-form").onsubmit();
//     return;
// };

function readNote() {
    //note.push("hello");
    storedText = localStorage.getItem('note', note);
    console.log(storedText);
}

function reduceNote() {
    note.splice(-1, 1);
    console.log(note);
}

function storeNote() {
    var text = document.getElementById("note").value;
    note.push(text);
    localStorage.setItem('note', note);  
    
    //localStorage.setItem(note);
};

// function readNote() {
//     localStorage.getItem(note);
// };

// function clearNote() {
//     localStorage.removeItem(note);
// };