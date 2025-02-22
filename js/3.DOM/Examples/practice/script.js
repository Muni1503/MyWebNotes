
console.log(this)

const doc=new Document();//it is not possible in practical because document obj is already provided by browser
console.log(doc);//document object
const h1=doc.getElementsByTagName("h1");
console.log(document);
console.log(h1)//This will give empty collection

const h11=document.getElementsByTagName("h1");
console.log(h11);//HTMLCollection(2) [h1, h1]