function formValidation() {

   // clearErrors();            // Clear error message area

    var result = validateUsername();  // Call name validation function
    //result = validatePhoneNumber() && result;  // Call phone number validation function

    return result;

  }  //  End of main function

  function validateUsername() {
   var nameMessageRules="<p> - Please enter a minimum of 4 alphabetic characters</p>";
    var stringName = document.getElementById("username").value;
    stringName = stringName.trim();
    var stringLength = stringName.length;
    if (stringLength == 0) { 
      showErrors("<p><mark>Name</mark><br /> - The name field can not be left empty or just blank characters<br />" + nameMessageRules + "</p>");
      return false;
    } 
    if (stringLength < 4) {
        showErrors( "<p><mark>Name</mark><br /> - You did not enter enough charcaters for the name<br />" + nameMessageRules + "</p>" );
        return false;
    }
         var countNonAlpha = 0;		
    stringName = stringName.toUpperCase(); // easier to check  - otherwise you will need to check for upper and lower case inside the for loop                 
    for (var i=0;i<stringLength;i++ ) {
       if (! ( (stringName.charCodeAt(i) > 64) && (stringName.charCodeAt(i) < 91) ) ) {  // A=65  .....  Z=90 - upper case range
          countNonAlpha++;
          break;
       } 
    } // End of the for loop
    if  (countNonAlpha) {
       showErrors("<p><mark>Name</mark><br /> - Only alphabetic characters are allowed for the name<br />" + nameMessageRules + "</p>");
       return false;
    }
        return true;
  }  //  End of function