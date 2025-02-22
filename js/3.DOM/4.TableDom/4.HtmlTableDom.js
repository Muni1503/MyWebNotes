//!Traversing an HTML table with JavaScript and DOM Interfaces

//Here we are going to see  how to create, access and control, and remove HTML elements dynamically. 
//The DOM methods presented here are not specific to HTML; they also apply to XML.

function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 2; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }


  //?Explanation

//1.First we created the <table> element.
//2.Next, we created the <tbody> element, which is a child of the <table> element.
//3.Next, we used a loop to create the <tr> elements, which are children of the <tbody> element.
//4.For each <tr> element, we used a loop to create the <td> elements, which are children of <tr> elements.
//5.For each <td> element, we then created the text node with the table cell's text.
//6.After that appending everychild to its parent needs to be done


//!setting the background color of paragraph for second para

function setBackground() {
    // now, get all the p elements in the document
    const paragraphs = document.getElementsByTagName("p");
  
    // get the second paragraph from the list
    const secondParagraph = paragraphs[1];
  
    // set the inline style
    secondParagraph.style.background = "red";

    //!creating textNodes

let myTextNode=document.createTextNode(" Hi i am a textNode ");
//after that we have to append it

secondParagraph.appendChild(myTextNode)
  
  }
 
//!creating new element
let myNewPTagNode = document.createElement("p");

document.body.appendChild(myNewPTagNode); 

const paragraphs=document.getElementsByTagName("p");

paragraphs[2].innerText=" Hi i am newly created one"

//!Locating DOM elements using selectors
//?querySelector()

//Returns the first matching Element node within the node's subtree. If no matching node is found, null is returned.

//?querySelectorAll()

//Returns a NodeList containing all matching Element nodes within the node's subtree, or an empty NodeList if no matches are found.


  

