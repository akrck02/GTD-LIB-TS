
function validate_email(email,func){
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!regex.test(email)){
        func();
        return false;
    } 
    return true;
} 

function validate_username(username,maxchar,func){
    if(username.length > maxchar) {
        func();
        return false;
    }
    return true;
}