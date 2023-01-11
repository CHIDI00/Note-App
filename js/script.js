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

let notes = JSON.parse(localStorage.getItem('note'));

if (notes) {
  notes.forEach((note) =>{
    addNote(note)
  })
}

function addNote( text = '' ) {
  const note = document.createElement('div')
  note.classList.add('note')
  textArea.value = text
  note.innerHTML = text
  text = push(notes)


  textArea.addEventListener('input', (e) => {
    const { value } = e.target.
    note.innerHTML = value
  })
  updateLoacalStorage()
}

function updateLoacalStorage() {

}









