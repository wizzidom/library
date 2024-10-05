const dialog = document.querySelector("dialog");
const showModall = document.querySelector("dialog + div ");
const closeModal = document.querySelector("dialog button");

const form = document.querySelector("#form");
const books = document.querySelector(".books");



let myLibrary = [];

function Book(title, author , pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;


}
Book.prototype.toggle = function(){
    this.read = !this.read;

}

function toggle(i){
    myLibrary[i].toggle();
    display();
}


showModall.addEventListener("click", ()=>{
    dialog.showModal();
});
closeModal.addEventListener("click", ()=>{
    dialog.close()
});
form.addEventListener('submit', (e)=>{
    e.preventDefault();
  
    dialog.close();
    render();
    form.reset()

})
function render(){
    addBookToLibrary();
    display()
}
function display(){
    let book = [];
    books.innerHTML = "";
    for (var i = 0; i < myLibrary.length; i++) {
        book[i] = document.createElement('div');
        
        book[i].innerHTML= book[i].innerHTML + ` <div class="book" id = ${i}>
        <p>Title : ${myLibrary[i].title}</p>
        <p>Author : ${myLibrary[i].author}</p>
        <p>No of Pages : ${myLibrary[i].pages}</p>
        <p>Status : ${myLibrary[i].read ? "Read" : "Not Read"}</p>
         <input type="checkbox" id="toggle" onclick ="toggle(${i})">
        <button onclick = "removeBook(${i}, ${1})">Remove Book</button>
    </div> `
    books.appendChild(book[i]);

    }

}
function removeBook(start, end){
    myLibrary.splice(start, end);
    display()
    console.log(myLibrary)

 
    

}





function addBookToLibrary(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    
    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    console.log(myLibrary);

}
