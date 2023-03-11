let lists = [
    {title: "book1", auther: "xyz", publicationYear: 2001},
{title: "book2", auther: "abc", publicationYear: 2004},
{title: "book3", auther: "abd", publicationYear: 2017},
{title: "book4", auther: "abe", publicationYear: 2021},
{title: "book5", auther: "abf", publicationYear: 2014}
]            

let filterList = lists.filter(function (book){
   return book.publicationYear > 2010   
}).map(function(book){
    return {title: book.title, auther: book.auther.toUpperCase(), publicationYear: book.publicationYear}
})


console.log(filter)