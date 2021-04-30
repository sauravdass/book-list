
// variable declairation
let form = document.getElementById('form');
let bookName = document.getElementById('bookName');
let author = document.getElementById('authorName');
let year = document.getElementById('year');
let submitBtn = document.getElementById('submitBtn');
let bookList = document.getElementById('book-list');

// trigger function on submit button click
submitBtn.onclick = function(e){
    e.preventDefault();

    if(year.value == ''){
        alert('please fill up empty field');
    } else {
        let newRow = document.createElement('tr');

        //new book
        let newBookName = document.createElement('td');
        newBookName.innerHTML = bookName.value;
        newRow.appendChild(newBookName);

        //author
        let newAuthor = document.createElement('td');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        //year
        let bookYear = document.createElement('td');
        bookYear.innerHTML = year.value;
        newRow.appendChild(bookYear);

        //remove
        let cross = document.createElement('td');
        let remove = document.createElement('a');
        remove.setAttribute('href','#');
        remove.innerHTML = 'x';
        cross.appendChild(remove);
        newRow.appendChild(cross);

        remove.onclick = function(){
            cross.parentElement.remove();
        }

        //all data append to book list
        bookList.appendChild(newRow);

        //to blank the value of input
        bookName.value = '';
        author.value = '';
        year.value = '';
    }

}



