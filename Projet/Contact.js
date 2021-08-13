function validForm() {
    var name = document.contact_form.name.value;
    var email = document.contact_form.email.value;
    var number = document.contact_form.number.value;
    var message = document.contact_form.message.value;

    if (name.length == 0) {
        document.getElementById("nom").style.display = 'inline-block';
    }

    else {
        document.getElementById("nom").style.display = 'none';
    } 

    if (number.length != 10) {
        document.getElementById("num").style.display = 'inline-block';
    }

    else {
        document.getElementById("num").style.display = 'none';
    }

    if (email.length == 0) {
        document.getElementById("mail").style.display = 'inline-block';
      
    }

    else {
        document.getElementById("mail").style.display = 'none';
    }

    
    if (message.length == 0) {
        document.getElementById("msg").style.display = 'inline-block';
    }

    else {
        document.getElementById("msg").style.display = 'none';
    }
    }
