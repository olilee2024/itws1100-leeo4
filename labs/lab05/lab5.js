/* Lab 5 JavaScript File 
   Place variables and functions in this file */




function validate(formObj) {
   // put your validation code here
   // it will be a series of if statements

   var alertText = "";
   var focusSet = 0;
   //FIRST NAME
   if (formObj.firstName.value == "") {
      alertText = alertText + "You must enter a first name\n";
      formObj.firstName.focus();
      focusSet = 1;
   }
   //LAST NAME
   if (formObj.lastName.value == "") {
      alertText = alertText + "You must enter a last name\n";
      if(focusSet = 0){
         formObj.lastName.focus();
         focusSet = 1;
      }
   }
   // TITLE
   if (formObj.title.value == "") {
      alertText = alertText + "You must enter a title\n";
      if(focusSet = 0){
         formObj.title.focus();
         focusSet = 1;
      }   
   }
   // ORGANIZATION
   if (formObj.org.value == "") {
      alertText = alertText + "You must enter an organization\n";
      if(focusSet = 0){
         formObj.org.focus();
         focusSet = 1;
      }   
   }
   // NICKNAME 
   if (formObj.pseudonym.value == "") {
      alertText = alertText + "You must enter a nickname\n";
      if(focusSet = 0){
         formObj.pseudonym.focus();
         focusSet = 1;
      }   
   }
   // COMMENTS ******FIX WHEN THEY DO ENTER PLEASE ENTER YOUR COMMENTS
   if (formObj.comments.value == "" || formObj.comments.value == "Please enter your comments") {
      alertText = alertText + "You must enter comments\n";
      if(focusSet = 0){
         formObj.comments.focus();
         focusSet = 1;
      }   
   }
   
   // don't only do alert(alertText) bc it will return with error because it's not boolean
   if (alertText == "") {
      alert("Form successfully submitted!");
      return true;
   }
   else {
      alert(alertText);
      return false;
   }

}


function rewrite(){
   var element = document.getElementById("comments");
   element.innerHTML = "";
}

function recolor(n){
   n.style.backgroundColor = "red"
}