function validate(){
    if(document.myForm.name.value ==""){
        alert("Name field is empty");
        document.myForm.name.focus();
        return false;
    }
    if(document.myForm.email.value ==""){
        alert("email field is empty");
        document.myForm.email.focus();
        return false;
    }
    if(document.myForm.mobile.value ==""){
        alert("mobile field is empty");
        document.myForm.mobile.focus();
        return false;
    }

}
