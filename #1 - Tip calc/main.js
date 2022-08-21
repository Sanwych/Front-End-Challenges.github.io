let bill = 0
let people = 0
let tip = 0

const peopleInput = document.getElementById("peopleCounter")
const billInput = document.getElementById("typeAmount")

const buttonInput = document.querySelectorAll('input[type=button]')
const textInput = document.querySelectorAll('input[type=text]')


function getPayments(){

        let tipPerPerson = bill * (tip / 100)
        let tipToPay = tipPerPerson * people
        let finalPayment = bill + tipToPay

        console.log(tipToPay)

        document.getElementById("tipPerPerson").innerHTML = tipPerPerson
        document.getElementById("tipToPay").innerHTML = tipToPay
        document.getElementById("finalPayment").innerHTML = finalPayment 
}

buttonInput.forEach((input) => {
    input.addEventListener("click", (e) => {
       
        for(let i = 0; i<buttonInput.length; i++){
            if(buttonInput[i].classList.contains('pressed') && buttonInput[i] != e.currentTarget){
                buttonInput[i].classList.remove('pressed')
                e.currentTarget.classList.add('pressed')
            } else {
                e.currentTarget.classList.add('pressed')
            }
        }
        
        getPayments()
    })
})

textInput.forEach((textInput) => {
    textInput.addEventListener("input", (e) => {

        if(e.currentTarget == billInput){
            if(!isNaN(billInput.value)){
                bill = parseInt(billInput.value)
            } else {
                bill = 0
            }}
        
        if(e.currentTarget == peopleInput){
            if(!isNaN(peopleInput.value)){
                people = parseInt(peopleInput.value)
            } else {
                people = 0
            }}

        getPayments()
  })
})

let updateValue = (number) => {
   tip = number 
}

