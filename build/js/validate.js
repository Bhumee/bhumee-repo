function contact() {
    var name = document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["Email"];
    var phone = document.forms["RegForm"]["Telephone"];
    var category = document.forms["RegForm"]["Category"];
    var city = document.forms["RegForm"]["City"];
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");
    

    
    if (name.value == "") {
        //window.alert("Please enter your name.");
        document.getElementById("error-name").innerHTML= "Please enter your name.";
        name.focus();
        return false;
    }

    if (email.value == ""|| atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length) {
        //window.alert("Please enter a valid e-mail address.");
        document.getElementById("error-email").innerHTML= "Please enter a valid e-mail address.";
        email.focus();
        return false;
    }

    if (isNaN(phone)) {
        //window.alert("Please enter valid telephone number.");
        document.getElementById("error-phone").innerHTML= "Please enter valid telephone number.";
        phone.focus();
        return false;
    }

    if (category.selectedIndex < 1) {
        //alert("Please enter your course.");
        document.getElementById("error-category").innerHTML= "Please choose a valid category.";
        category.focus();
        return false;
    }
    if (city.selectedIndex < 1) {
        //alert("Please enter your course.");
        document.getElementById("error-city").innerHTML= "Please choose a valid city.";
        city.focus();
        return false;
    }
    return true;
}