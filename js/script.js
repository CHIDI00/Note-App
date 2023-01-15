const noteContainer = document.querySelector('.note-container');
const noteLength = document.querySelector('.note-length');
const noteTitle = document.querySelector('.note-title');
const addBtn = document.querySelector('.add');
const textArea = document.querySelector('.text-area');
const textContainer = document.querySelector('.textArea');
const save = document.querySelector('#save');
const mainNote = document.querySelector('.note-main-container')


// addBtn.addEventListener('click', () =>{
//   if (textArea.value !== '') {

//   }
// })

addBtn.addEventListener('click', () =>{
    textArea.style.display = 'block'
    textContainer.style.display = 'block'
})

save.addEventListener('click', () =>{
  textArea.style.display = 'none'
  if (textArea.value !== '') {
    let newItem = document.createElement('div');
    newItem.classList.add('note-container')
    newItem.innerHTML = `
    <div class="note-title">
            <P>${textArea.value}</P>
          </div>
       </div>
    `
    mainNote.appendChild(newItem)
    textArea.value = ''
  } else {
    alert('Please enter a note')
  }
})











// let notes = JSON.parse(localStorage.getItem('note'));

// if (notes) {
//   notes.forEach((note) =>{
//     addNote(note)
//   })
// }

// function addNote( text = '' ) {
//   const note = document.createElement('div')
//   note.classList.add('note')
//   textArea.value = text
//   note.innerHTML = text
//   text = push(notes)


//   textArea.addEventListener('input', (e) => {
//     const { value } = e.target.
//     note.innerHTML = value
//   })
//   updateLoacalStorage()
// }

// function updateLoacalStorage() {
  
// }






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
 


