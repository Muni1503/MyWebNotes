//!Here we are going to see the datatypes in DOM


                    //!1.Document

//The Dom is an interface 
//It serves as an entry point into the webpage content,which is DOM Tree
//The Document interface describes the common properties and methods for any kind of document.

                    //!Document constructor
//The Document constructor creates a new Document object 

//?syntax
//new Document();

const doc=new Document();//it is not possible in practical because document obj is already provided by browser if we 
console.log(doc);// it will not give document obj because document only give that whole document(html page)
console.log(document)//it will give the address to the mentioned whole html page
const h1=doc.getElementsByTagName("h1");
console.log(h1)//This will give empty collection

const h11=document.getElementsByTagName("h1");
console.log(h11);//HTMLCollection(2) [h1, h1]

