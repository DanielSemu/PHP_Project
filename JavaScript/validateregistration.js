function valid(){
    // var nam=document.myform.name.value;
    // var ag=document.myform.age.value;
    // var lname=document.myform.lname.value;
    var pnum=document.myform.phone.value;
   // var Email=document.myform.email.value;
    var Password1=document.myform.password.value;
    var comfirm=document.myform.cpassword.value;
    var agecon=/^[0-9]+$/;
    var phonenum=/^(09)[0-9]+$/;
    var emai=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
    var len=Password1.length;
    
    // if(!(Email.match(emai))){
    //     alert("insert the correct email format");
    //     ag.focus();
    //     return false;
    // }
    if(pnum.length !=10){
        alert("phone number must have 10 digit");
        pnum.focus();
        return false;
    }
    if(!(pnum.match(phonenum))){
        alert("the phone number must start with 09");
        pnum.focus();
        return false;
    }
    if(len<8){
        alert("the password length must be greater than 8")
        Password1.focus();
        return false;
    }
    if(!(comfirm.match(Password1))){
        alert("the password does not match");
        Password1.focus();
        comfirm.focus();
        return false;
    }
    // if(!(ag.match(agecon))){
    //     alert("the age must be number");
    //     ag.focus();
    //     return false;
    // }
    }