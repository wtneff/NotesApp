var noteArr = [];
var whereAt = 0;

function storeNote() {
  var j = {};

  j.note = document.getElementById("note").value;

  var jJSON = JSON.stringify(j);
  //var noteTxt = jJSON;
  //noteTxt = document.getElementById("note").value;

  //console.log(j);

  noteArr.push(jJSON);
  console.log(noteArr);
  count();

  //localStorage.note = noteArr;

  //localStorage.setItem(note);
}

function readNote(whereAt) {
  var i = 0;
  if (whereAt > 0) {
    i = whereAt;
  }
  var readTxt = JSON.parse(noteArr[i]);
  if (whereAt <= 0) {
    document.getElementById("message").innerHTML = "There are no notes!";
  } else {
    document.getElementById("message").innerHTML = readTxt.note;
    console.log(readTxt.note);
    count();
  }
}

function clearNote() {
  if (noteArr.length > 1) {
    noteArr.splice(whereAt, 1);
  } else {
    noteArr.splice(0, 1);
  }
  console.log(noteArr);
  count();
  readNote(whereAt);
}

// function clearNote() {
//     noteArr.
//   document.getElementById("message").innerHTML = "";
//   count();
// }

function count() {
  if (noteArr.length == 0) {
    document.getElementById("count").innnerHTML =
      "There are no notes in the list!";
  } else if (noteArr.length === 1) {
    document.getElementById("count").innerHTML =
      "There is one note in the list:";
  } else {
    document.getElementById("count").innerHTML =
      "There are " + noteArr.length + " notes in the list:";

    //   if (noteArr.length === 0) { "no notes."
    //     } else {
    //         " notes and you are on note: " +
    //         whereAt + 1);
    //     }
  }
}

function next() {
  whereAt = whereAt + 1;
  if (noteArr[whereAt] == undefined) {
    document.getElementById("message").innerHTML = "No more notes!";
  } else {
    readNote(whereAt);
  }
  //for (i = 0; i > noteArr.length; i++) {
  //  readNote(noteArr[i]);
  //}
}

function previous() {
  if (whereAt == 0) {
    readNote(whereAt);
  } else {
    whereAt = whereAt - 1;
  }
  if (noteArr[whereAt] == undefined) {
    document.getElementById("message").innerHTML = "Error!";
  } else {
    readNote(whereAt);
  }
  //   for (i = 0; i > noteArr.length; i--) {
  //     readNote(noteArr[i]);
  //   }
}

// function clearNote() {
//     localStorage.removeItem(note);
// };
