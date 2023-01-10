const noteContainer = document.querySelector('.note-container');
const noteLength = document.querySelector('.note-length');
const noteTitle = document.querySelector('.note-title');
const addBtn = document.querySelector('.add');
const textArea = document.querySelector('.text-area');
const textContainer = document.querySelector('.textArea');
const save = document.querySelector('#save');



addBtn.addEventListener('click', () =>{
    textArea.style.display = 'block'
    textContainer.style.display = 'block'
})

let note = []


function addNote( text ) {
  text = ''
  textArea.value = text
  text = push(note[noteTitle])
}

save.addEventListener('click', ()=> {
  addNote()
  textArea.style.display = 'none'
  textContainer.style.display = 'none'
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