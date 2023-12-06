var submit = document.getElementById('submit')
var firstName = document.getElementById('firstName')
var number = document.getElementById('number')
var address = document.getElementById('address')
submit.addEventListener('click', function(){
    if(!firstName.value) {
        window.alert('First Name is required!')
        return
    }
    if(!number.value) {
        window.alert('Your Number is required!')
        return
    }
    if(!address.value) {
        window.alert('Your Address is required!')
        return
    }
    window.alert('Submitted successfully !')
})