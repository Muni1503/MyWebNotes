//define a function that can answer the role of a user
//the user can be the following roles
//admin-get access to all
//subadmin-get access to delete or upload course
//testprep-get an access to delete or upload test
//user-can consume everything

//input:getUserRole(name,Role)

function getUserRole(name,role){
    switch(role){
        case "admin":
            return(`${name}is a admin.${name} has access to everything`);
            break;
        case "subadmin":
                return(`${name}is a subadmin.${name} has access to delete or upload course`);
                break;
        case "testprep":
                    return(`${name}is a subadmin.${name} has access to delete or upload test`);
                    break; 
        case "user":
                return(`${name}is a user.${name} has access consume course`);
                break;    
                
        default:
            return(`${name}is a trailuser.${name} has access to nothing`);
    }
}

getUserRole("muni","subadmin");
getUserRole("ice","admin");
getUserRole('chechi','testprep');
getUserRole(`abarna`,`user`);
getUserRole("sona","trailuser");//This doesnot print anything because we used return..

//To print
console.log(getUserRole("muni","subadmin")
);

var iceakka=getUserRole("ice","admin");
console.log(iceakka);


//another way to use function
var getUserRole=function (name,role){
    switch(role){
        case "admin":
            return(`${name}is a admin.${name} has access to everything`);
            break;
        case "subadmin":
                return(`${name}is a subadmin.${name} has access to delete or upload course`);
                break;
        case "testprep":
                    return(`${name}is a subadmin.${name} has access to delete or upload test`);
                    break; 
        case "user":
                return(`${name}is a user.${name} has access consume course`);
                break;    
                
        default:
            return(`${name}is a trailuser.${name} has access to nothing`);
    }
}


//another way (arrow function)

var getUserRole=(name,role)=>{
    switch(role){
        case "admin":
            return(`${name}is a admin.${name} has access to everything`);
            break;
        case "subadmin":
                return(`${name}is a subadmin.${name} has access to delete or upload course`);
                break;
        case "testprep":
                    return(`${name}is a subadmin.${name} has access to delete or upload test`);
                    break; 
        case "user":
                return(`${name}is a user.${name} has access consume course`);
                break;    
                
        default:
            return(`${name}is a trailuser.${name} has access to nothing`);
    }
}
