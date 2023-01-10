const noteContainer = document.querySelector('.note-container');
const noteLength = document.querySelector('.note-length');
const noteTitle = document.querySelector('.note-title');
const addBtn = document.querySelector('.add');
const textArea = document.querySelector('.text-area');
const save = document.querySelector('#save');



addBtn.addEventListener('click', () =>{
    textArea.style.display = 'block'
})

let note = []

if (note) {
    // textArea.value = text
    note = `
    <div class="note-container edit">
      <div class="note-title"></div>
    </div>
    `
}

function addNote( text = "") {
  textArea.value = text
  text = push(note)
}

save.addEventListener('click', ()=> {
  addNote()
  // console.log('saved')
})






// let textSpace = ""
// let notes = JSON.parse(localStorage.getItem('notes'))

// addBtn.addEventListener('click', () =>{
//     noteContainer.classList = textArea.style.display = 'block'
//     addNewNote();
//     // note_value.append('<div class="note-title">' + note_value + '</div>')
// })

// if (notes) {
//     notes.forEach((note) => {
//         addNewNote(note)
//     })
// }

// function addNewNote(text = "") {
//     const note = document.createElement("div")
//     note.classList.add("note");

//     textArea.value = text;
//     noteTitle.innerHTML = marked(text) 

//     textArea.addEventListener("input", (e) => {
//         const { value } = e.target;
//         noteTitle.innerHTML = marked(value)

//         updateLocalStorage()
//     })
// }
 


// save.addEventListener('click', ()=> {
//     noteContainer.classList = textArea.style.display = 'none'
//     textSpace = textArea
// })