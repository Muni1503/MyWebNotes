//return-if we apply return then after that line if there is any code it is not compiled...

//create an application using the conditions given below
//admin-get full access
//subadmin-get access to create or delete courses
//testpre-get access to create or delete test
//user-get access to consume content

var user="admin";

switch(user){
    case "admin":
        console.log("you can get full acceess");
        break;//break is used to avoid fall through

     case "subadmin":
        console.log("you can get access to creat or delete courses");
        break;
        
        case "testpre":
            console.log("you can get access to creat or delete tests");
            break;
        case "user":
                console.log("you can get access to creat or delete tests");
                break;   
        default:
            console.log("Trail user");
            break  ;      
    }   

