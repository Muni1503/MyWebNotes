//!What is dom

//1.Dom is an api
//2.The Document Object Model (DOM) is a programming interface for web documents
//3.It represents the page so that programs can change the document structure, style, and content. 
//4.The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
//5.The HTML DOM model is constructed as a tree of Objects:REf image DOM TREE.gif

//A web page is a document that can be either displayed in the browser window or as the HTML source. 
//In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. 
//As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.


//!Dom and javascript

//The DOM is not part of the JavaScript language, but is instead a Web API used to build websites.
// JavaScript can also be used in other contexts. For example, Node.js runs JavaScript programs on a computer,
// but provides a different set of APIs, and the DOM API is not a core part of the Node.js runtime.

//Even if most web developers will only use the DOM through JavaScript, 
//implementations of the DOM can be built for any language like python

//!Accessing the dom

//You don't have to do anything special to begin using the DOM.
//You can use dom Api directly from the script (a program run by browser)


//When you create a script, whether inline in a <script> element or included in the web page, 
//you can immediately begin using the API for the document or window objects to manipulate the document itself,
// or any of the various elements in the web page (the descendant elements of the document).

//!interfaces and objects

//Many objects implement several different interfaces. The table object, for example, implements a specialized 
//?HTMLTableElement interface,
// which includes such methods as createCaption and insertRow. But since it's also an HTML element, table implements the Element 
//interface described in the DOM Element Reference chapter. And finally, since an HTML element is also, as far as the DOM is concerned, 
//a node in the tree of nodes that make up the object model for an HTML or XML page, 
//the table object also implements the more basic Node interface, from which Element derives.


