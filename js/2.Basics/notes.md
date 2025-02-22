b<!-- !1.js Definition -->

==>JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved in this

<!-- !2.what is html,css,js -->

HTML=> is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.

CSS =>is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.

JavaScript => is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)


<!-- !3.what can js really do -->
==>The core client-side JavaScript language consists of some common programming features that allow you to do things like:
        1.Store useful values inside variables.
        2.Operations on pieces of text (known as "strings" in programming).
        3.Running code in response to certain events occurring on a web page.
        4.And Much More

==>What is even more exciting however is the functionality that built on top of the client-side JavaScript language.
==>called Application Programming Interfaces (APIs) provide you with extra superpowers to use in your JavaScript code.    

==>APIs are ready-made sets of code building blocks that allow a developer to implement programs that would otherwise be hard or impossible to implement.
==>APIs generally fall into two categories
    1.3rd party APIs
    2.Browser APIs

    <!--?Browser APIs  -->
    ==>Browser APIs are built into your web browser
    ==>It is used to do complex things.For Example

        --Dom API
        --Geolocation API
        --canvas
        --Audio and video APIs like HTML MediaElement
   <!-- ?Third party APIs -->

   ==>Third party APIs are not built into the browser by default, and you generally have to grab their code and information from         somewhere on the Web. For example:
          --Twitter API
          --Google Maps API


<!--!4.What is javascript doing on your page-->

==>When you load a web page in your browser, you are running your code (the HTML, CSS, and JavaScript) inside an execution environment (the browser tab).
==> This is like a factory that takes in raw materials (the code) and outputs a product (the web page).

<!-- ?usage -->

==>A very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, via the Document Object Model API (as mentioned above).

<!-- ?Browser Security -->

==>Each browser tab has its own separate bucket for running code in (these buckets are called "execution environments" in technical terms) — this means that in most cases the code in each tab is run completely separately, 
==>and the code in one tab cannot directly affect the code in another tab — or on another website. 
==>This is a good security measure — if this were not the case, then pirates could start writing code to steal information from other websites, and other such bad things.(hacked one weak website and try to acces other strong website info)

<!-- ?note -->==>Note: There are ways to send code and data between different websites/tabs in a safe manner

<!-- ? Js running order -->

==>When the browser encounters a block of JavaScript, it generally runs it in order, from top to bottom. 
==>This means that you need to be careful what order you put things in

<!-- ?Interpreted vs compiled code -->

==>In interpreted languages, the code is run from top to bottom and the result of running the code is immediately returned. You don't have to transform the code into a different form before the browser runs it.

==>Compiled languages on the other hand are transformed (compiled) into another form before they are run by the computer. For example, In Java the code is  compiled into machine code that is then run by the computer.


==>JavaScript is a lightweight interpreted programming language
==>From a technical standpoint, most modern JavaScript interpreters actually use a technique called just-in-time compiling to improve performance; the JavaScript source code gets compiled into a faster, binary format while the script is being used, so that it can be run as quickly as possible.

<!-- ?server side vs client side code -->

==>Client-side code is code that is run on the user's computer — when a web page is viewed, the page's client-side code is downloaded, then run and displayed by the browser. 

==>Server-side code on the other hand is run on the server, then its results are downloaded and displayed in the browser.
==> Examples of popular server-side web languages include PHP, Python, Ruby, ASP.NET, and even JavaScript! 
==>JavaScript can also be used as a server-side language, for example in the popular Node.js environment

<!-- ?Dynamoic veruses static -->

==>The word dynamic is used to describe both client-side JavaScript, and server-side languages — it refers to the ability to update the display of a web page/app to show different things in different circumstances, generating new content as required.
==> Server-side code dynamically generates new content on the server, e.g. pulling data from a database, 
==>whereas client-side JavaScript dynamically generates new content inside the browser on the client, e.g. creating a new HTML table, filling it with data requested from the server, then displaying the table in a web page shown to the user. 

==> The meaning is slightly different in the two contexts, but related, and both approaches (server-side and client-side) usually work together.

     <!-- ?static -->
     ==>A web page with no dynamically updating content is referred to as static — it just shows the same content all the time.


<!-- ! 5.ways to add js -->
    <!-- ?Internal javascript -->
     --using script tag
     --Add the internal js just before closing the body tag(</body>)

         <!-- !Note  -->   
         ==>observe that the code in your web documents is generally loaded and executed in the order it appears on the page. By placing the JavaScript at the bottom, we ensure that all HTML elements are loaded.
    <!-- ? External javascript -->

    --First we have to create a new file with .js extension
    --link the js using src attribute

    --it is the best way(external js)

<!-- !6. script loading strategies -->

    ==>All the HTML on a page is loaded in the order in which it appears. If you are using JavaScript to manipulate elements on the page (or more accurately, the Document Object Model), 
    ==>your code won't work if the JavaScript is loaded and parsed before the HTML you are trying to do something to

    <!--? This is the reason why we write the script before closing the body.
     --we can also write the sccript in head but javascript is loaded and while using dom it try to fectch the elements but we cannot find the element,because html is not loaded

<!--!7.comments  -->
  <!-- ? single line comment -->
       // I am a comment
  <!--? Multi line comment  -->
  
  /*
  I am also
    a comment
    */




----------------------------------------------------------------------------------------------------------------------------------------

                                               <!-- !variables -->
==>A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence.         
==>One special thing about variables is that they can contain just about anything — not just strings and numbers. Variables can also contain complex data and even entire functions to do amazing things.

<!-- ?Declaring the variable -->
==>To use a variable, you've first got to create it — more accurately, we call this declaring the variable.
     <!--?Examples-->
        let myName;//declaration
        let myAge;

        myName="Muni";//initialization

        let myName="rao";//Declaration and initialization

<!--! A Note about var-->

You'll probably also see a different way to declare variables, using the var keyword

var name2;

==>Back when JavaScript was first created, this was the only way to declare variables.
==> The design of var is confusing and error-prone. So let was created in modern versions of JavaScript, a new keyword for creating variables that works somewhat differently to var, fixing its issues in the process.

<!-- ?D/b var and let -->

1.you can actually declare a variable with var after you initialize it and it will still work in var due to hoisting
Hoisting no longer works with let.This is a good thing — declaring a variable after you initialize it results in confusing, harder to understand code.

2.Secondly, when you use var, you can declare the same variable as many times as you like, but with let you can't. The following would work:
   var myName = "Chris";
   var myName = "Bob";//This will work


   let myName = "Chris";
   let myName = "Bob";//This will throw an error

   <!-- ? you can do this in let instead of above -->
   let myName = "Chris";
   myName = "Bob";//This is also works

   Again, this is a sensible language decision. There is no reason to redeclare variables — it just makes things more confusing.

==>For these reasons and more, we recommend that you use let in your code, rather than var.


<!-- !updating a value in variable -->
let MyName="Muni";
myName="RAO";
console.log("MyName");//RAO


<!-- !Naming a variable -->
1.just use latin characters(0-9,a-z,A-Z) and underscore in variable name
2.Dont use underscore at the start of the variable name-this is used in certain javascript construct to mean specific things,so may get confusing
3.Don't use numbers at the start of variables
4.A safe convention to stick to is lower camel case..eg:myNameFirstLetter,myAge
5.make variable name meaningful,so that they describe data they contain
6.Variables are case sensitive — so myage is a different variable from myAge.
7.you also need to avoid using JavaScript reserved words as your variable names


<!-- ! what are the datatype we store in variables-->
strings,arrays,Number,decimal,objects,boolean

<!-- !Dyamic typing -->
==>JavaScript is a "dynamically typed language", which means that, unlike some other languages, you don't need to specify what data type a variable will contain (numbers, strings, arrays, etc.).


<!-- !constants in javascript -->
These are like variables, except that
   --you must initialize them when you declare them
   --you can't assign them a new value after you've initialized them.

   const count;//err
   const count=5;
   count=6//err

==>Note that although a constant in JavaScript must always name the same value, you can change the content of the value that it names. ==>This isn't a useful distinction for simple types like numbers or booleans, but consider an object:

     const bird = { species: "Kestrel" };
     console.log(bird.species); // "Kestrel"
     bird.species = "Striated Caracara";
     console.log(bird.species); // "Striated Caracara"//This is possible

==>You can update, add, or remove properties of an object declared using const, because even though the content of the object has changed, the constant is still pointing to the same object:

This is the reason


<!-- ?------------------------------------------------------------------------------------------------------------------------------ -->

                                     <!-- !Numbers and operators -->


Type of Numbers
 1.Integer-10,100
 2.Floating point Numbers=56.77,7.88

 3.Binary — The lowest level language of computers; 0s and 1s.
 4.Octal — Base 8, uses 0–7 in each digit.
 5.Hexadecimal — Base 16, uses 0–9 and then a–f in each digit. You may have encountered these numbers before when setting colors in CSS.

 ==>JavaScript only has one data type for numbers, both integers and decimals — you guessed it, Number

 const myInt = 5;
 const myFloat = 6.667;

 <!-- !typeof operator-it is used to check the datatype in javascript -->

 typeof myInt;//Number
 typeof myFloat;//Number

 <!-- ? Number Methods -->

 1.to round your number to a fixed number of decimal places
  const lotsOfDecimal = 1.766584958675746364;
  lotsOfDecimal;//1.766584958675746364
  const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
  twoDecimalPlaces;//1.76

 2.convert to Number datatype 
   let myNumber = "74";//here the type is string
   myNumber = Number(myNumber) + 3;//so it is converted to number

<!-- ?Arithmetic operators -->
   +,-,*,/,%,**
<!--? operator precedence  -->
  BODMAS
<!-- ? increment and decrement operator -->
 let  a=3;
 a++;

 3++;//it is not possible

 let b=6;
 b--;

<!-- ?Assignment operators -->
+= eg:x+=4  == (x=x=4)
-=
*=
/=

<!-- ?comparison operators -->
===,!==,<,>,<=,>=

<!-- ?note -->
==>You may see some people using == and != in their tests for equality and non-equality. 
==>These are valid operators in JavaScript, but they differ from ===/!==. The former versions test whether the values are the same but not whether the values' datatypes are the same. 
==>The latter, strict versions test the equality of both the values and their datatypes. The strict versions tend to result in fewer errors, so we recommend you use them.


<!-- ?-------------------------------------------------------------------------------------------------------------------------- -->

                                                 <!-- !strings -->

<!-- ?Declaring a string -->
 --we can declare strings in three ways
     1.using single quotes
     2.using double quotes
     3.using backticks

     const string = "The revolution will not be televised.";
     console.log(string);//The revolution will not be televised.

     ==>Just like we did with numbers, we are declaring a variable, initializing it with a string value, and then returning the value. 
     ==>The only difference here is that when writing a string, you need to surround the value with quotes.

<!-- ? template literals -->
   ==>Strings declared using backticks are a special kind of string called a template literal. In most ways, template literals are like normal strings, but they have some special properties:
                    --you can embed JavaScript in them
                    --you can declare template literals over multiple lines

   <!-- ? Embedding javascript -->
   ==>Inside a template literal, you can wrap JavaScript variables or expressions inside ${ }, and the result will be included in the string:
            const name = "Chris";
            const greeting = `Hello, ${name}`;
            console.log(greeting); // "Hello, Chris"

   <!-- ? Multiline strings  -->
   ==>Template literals respect the line breaks in the source code, so you can write strings that span multiple lines like this:

            const newline = `One day you finally knew
            what you had to do, and began,`;
            console.log(newline);

            //output
            /*
          One day you finally knew
          what you had to do, and began,
               */

<!-- ? concatenation in strings  -->
     <!-- ? using template literals -->
               const one = "Hello, ";
               const two = "how are you?";
               const joined = `${one}${two}`;
               console.log(joined); // "Hello, how are you?"

     <!-- ? using + operator  -->
               const greeting = "Hello";
               const name = "Chris";
               console.log(greeting + ", " + name); // "Hello, Chris"

<!-- ? Include quotes in strings -->
               const goodQuotes1 = 'She said "I think so!"';
               const goodQuotes2 = `She said "I'm not going in there!"`;

     Another option is to escape the problem quotation mark. Escaping characters means that we do something to them to make sure they are recognized as text, not part of the code. In JavaScript, we do this by putting a backslash just before the character.

               const bigmouth = 'I\'ve got no right to take my place…';
               console.log(bigmouth);

<!--? string vs Numbers-->
                What happens when we try to concatenate a string and a number    

                const name = "Front ";
                const number = 242;
                console.log(name + number); // "Front 242"   

<!--?for string methods refer sir notes>       






       





