const submit = () => {
    const btn = document.getElementById('js-btn');
    
    btn.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('error').innerHTML='';
        let email = document.getElementById('email').value;
        let name = document.getElementById('name').value;
        const mailValid = valideEmail(email);
        if (typeof email !== undefined && email != "" && name !== undefined && name != "" && mailValid){
            document.getElementById('success').innerHTML="Great! You are subscribed!";
            document.getElementById("hide-form").hidden = true;
            document.getElementById("hide-btn").hidden = true;
        } else {
            document.getElementById('error').innerHTML="Please enter valid data";
        }
    })
}

const valideEmail = (email) => {
    const mailformat = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
    if(email.match(mailformat)) {
        return true;
    } else {
        return false;
    }
}

submit();