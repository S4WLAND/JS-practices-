/*
-Created a book class
-The class book will have title, author, year, and gender.
-Created a method which returns all imfortion from books.
-Request three books and save them in the array the books must be enter in beginning of the program with promt
-Check that fields are not empty and that the year is a number of four digits
-Check that the gender is: Adventure terror or fantasy
-Make a function that shows every books
-Make a function that shows the authors  alphabetically  ordered.
-Make a function that asks a gender and after returns the books that has this gender.
*/

class Book{
  constructor(title,author,year,gender){
    this.title = title;
    this.author = author;
    this.year = year;
    this.gender = gender;
  }
  bookiInfo(){
    return `${this.title} is a book of ${this.gender} wrote by ${this.author} in the year ${this.year}`;
  }
 getAuthor(){
   return this.author;
 }
 getGender(){
   return this.gender;
 }
}

let books = [];
while(books.length < 3){
  let title = prompt("Enter the title of any book");
  let author = prompt("Enter its author");
  let year = prompt("Enter the year in which it was published");
  let gender = prompt("What gender does it belong to?");

  if(title != "" && author != "" &&
     !isNaN(year) && year.length == 4 &&
     (gender == "adventure" || gender == "terror" || gender == "fantasy" )
    ){
     books.push(new Book(title,author,year,gender));
   }else{
     console.log("Something was wrong, try again");
   }
}
const showAllBooks = () =>{
  console.log(books);
};
//Show authors
const showAuthors = () =>{
  let authors = [];
  for (book of books) {
    authors.push(book.getAuthor());
  }
  console.log(authors.sort());
};
const showGender = () =>{
  const gender = prompt("Enter the gender to find");
  for (book of books) {
    if(book.getGender() == gender){
      console.log(book.bookiInfo());
    }
  }
};
//Calls to methods
showAllBooks();
showAuthors();
showGender();