//!json

//?json stands for JavaScript Object Notation
//?It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client,
//? so it can be displayed on a web page, or vice versa).
//?Why json because json is very light weight it will not take that much space

//!what is json

//JSON is a text-based data format following JavaScript object syntax,
// Even though it closely resembles JavaScript object literal syntax, it can be used independently from JavaScript,
//and many programming environments feature the ability to read (parse) and generate JSON.

//?JSON exists as a string — useful when you want to transmit data across a network.
//?t needs to be converted to a native JavaScript object when you want to access the data.

//?json has methods for coonverting the json to object and object to json(as a string  when we want to transmit)

//!MIME
//MIME (Multipurpose Internet Mail Extensions) is a standard to describe documents in other forms besides ASCII text,
// for example, audio, video, and images.//?Initially used for email attachments,
//A MIME type (now properly called "media type", but also sometimes "content type")
//It  is a string sent along with a file indicating the type of the file (describing the content format,
//for example, a sound file might be labeled audio/ogg, or an image file image/png).

//It serves the same purpose as filename extensions traditionally do on Windows.

//The name originates from the MIME standard originally used in email.

//!json
//?A JSON string can be stored in its own file, which is basically just a text file with an extension of .json,
//?and a MIME type of application/json.

//!json Structure

//? JSON is a string whose format very much resembles JavaScript object literal format.
//?you can include all the datatype that you are including in js.

const json1=
    {
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2016,
        "secretBase": "Super tower",
        "active": true,
        "members": [
          {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
          },
          {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
              "Million tonne punch",
              "Damage resistance",
              "Superhuman reflexes"
            ]
          },
          {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
              "Immortality",
              "Heat Immunity",
              "Inferno",
              "Teleportation",
              "Interdimensional travel"
            ]
          }
        ]
      }
      
  
  

//?Actually this is string and we can access the elements inside the json like objects such as dot/bracket notation

console.log(json1["members"][1]["powers"][2]);//Superhuman reflexes


//!Arrays as json
//Above we mentioned that JSON text basically looks like a JavaScript object inside a string.
// We can also convert arrays to/from JSON. Below is also valid JSON, for example:

const arrJson=[
    {"name":"rao",
      "age":21,

    },
    {"name":"Ammu",
        "age":23,
  
      },
      {"name":"Achu",
        "age":20,
  
      },
       {"name":'bru',
        "age":21,
  
      }

]

console.log(arrJson[0].name)//rao
console.log(arrJson[2].name)//Achu

//The above array is a perfectly json
//if it is passed or transmitted in the server(in its parsed version) we have access it with the help of arrayIndex


//!other notes about json
//1.JSON is purely a string with a specified data format — it contains only properties, no methods.

//2.Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work.
//although computer-generated JSON is less likely to include errors, as long as the generator program is working correctly
//we can validate our json file using JSONLint

//3.in JSON only quoted strings may be used as properties.


//!converting between objects and text

//sometimes we receive a raw JSON string, and we need to convert it to an object ourselves.
//And when we want to send a JavaScript object across the network, we need to convert it to JSON (a string) before sending it.

//we have json Object in js that has following two methods

//?parse(): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
//?stringify(): Accepts an object as a parameter, and returns the equivalent JSON string.


//!Example




let myObj = { name: "Chris", age: 38 };
console.log(myObj);
let myString = JSON.stringify(myObj);//obj to json(string)//?{"name":"Chris","age":38} see value will be same no quotes required around it
console.log(myString);

let obj=JSON.parse(myString);//json to obj
console.log(obj)

const jsonText = `{
    "browsers": {
      "firefox": {
        "name": "Firefox",
        "pref_url": "about:config",
        "releases": {
          "1": {
            "release_date": "2004-11-09",
            "status": "retired",
            "engine": "Gecko",
            "engine_version": "1.7"
          }
        }
      }
    }
  }`;
  
  console.log(JSON.parse(jsonText));//json to obj


  
