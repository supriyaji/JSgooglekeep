const addButton = document.querySelector('#add');

const updateData = ()=>{
   const textData = document.querySelectorAll('textarea');
   const notes = [];
   textData.forEach((note)=>{
      return notes.push(note.value);
   })
   localStorage.setItem( 'notes',JSON.stringify(notes));
}

const addNewNote = (text=" ")=>{
 const note = document.createElement('div');
    note.classList.add('note');
 const html= `<div class="operation">
  <button class="edit"><i class="fas fa-edit"></i></button>
  <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>

  <div class="main ${text? " " : "hidden"} "></div>
  <textarea class="${text? "hidden" : " "} "></textarea>
  `;
 note.insertAdjacentHTML('afterbegin',html);

 const editButton = note.querySelector('.edit');
 const delButton = note.querySelector('.delete');
 const mainDiv = note.querySelector('.main');
 const textArea = note.querySelector('textarea');

  
 delButton.addEventListener('click', ()=>{
    note.remove();
    updateData();
 })

 editButton.addEventListener('click', ()=>{
   mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
 })
 textArea.addEventListener('change', (event)=>{
   const value = event.target.value;
   mainDiv.innerHTML = value;
   updateData();
 })
 
 document.body.appendChild(note);
}
//localStorage.setItem( 'notes',JSON.stringify(notes));
//window.localStorage.getItem('notes');
//const notes = localStorage.getItem('notes', JSON.parse(notes));
const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){ notes.forEach((note)=> addNewNote(note)) };

addButton.addEventListener('click' ,()=> addNewNote());