let bill = 0
let people = 0
let tip = 0

const peopleInput = document.getElementById("peopleCounter")
const billInput = document.getElementById("typeAmount")

const buttonInput = document.querySelectorAll('input[type=button]')
const textInput = document.querySelectorAll('input[type=text]')


function getPayments(){

    console.log(people)

        let tipPerPerson = bill * (tip / 100)
        let tipToPay = tipPerPerson * people
        let finalPayment = bill + tipToPay

        if(isNaN(bill)) bill = 0
        if(isNaN(tipPerPerson)) tipPerPerson = 0
        if(isNaN(tipToPay)) tipToPay = 0
        if(isNaN(finalPayment)) finalPayment = 0

        document.getElementById("tipPerPerson").innerHTML = tipPerPerson.toFixed(2)
        document.getElementById("tipToPay").innerHTML = tipToPay.toFixed(2)
        document.getElementById("finalPayment").innerHTML = finalPayment.toFixed(2) 
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
            if(billInput.value != ''){
                bill = parseInt(billInput.value)
            } else{
                bill = 0
            } }
        
        if(e.currentTarget == peopleInput){
            if(peopleInput.value != ''){
                people = parseInt(peopleInput.value)   
            } else {
                people = 0
            }
        }
    
        getPayments()
    }
  )
})

let updateValue = (number) => {
   tip = number 
}





