document.getElementById('loginform').addEventListener('submit', function(event) {
event.preventDefault();

const username = document.getElementById('loginUsername').value;
const password =document.getElementById('loginPassword').value;

if(username==='admin' && password==='admin123@'){
alert('Login Successful.')
}
else{
    alert('Invalid Username or Password.')
}
});

document.getElementById('registrationform').addEventListener('submit',function(event){
    
    const email =document.getElementById('regEmail').value;
    const username=document.getElementById('regUsername').value;
    const password =document.getElementById('regPassword').value;
    const confirmpassword=document.getElementById('regConfirmPassword').value;

    if(email&&username&&password&&confirmpassword){
        if(password==confirmpassword){
            alert('Registration Successful.');
            document.getElementById('registrationform').reset();
        }
        else{
            alert('Password and Confirm Password are different.');
        }
    }
    else{
        alert('Fill all the field.')
    }
});