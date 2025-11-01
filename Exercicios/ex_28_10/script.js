let message = document.getElementById("test")
message.textContent = "Texto manipulado com DOM JS"

const colorLight = "#630606ff"
const bgLight = "#e98585ff"

message.style.color = colorLight 
message.style.backgroundColor = bgLight



// Eventos (Usando onclick e addEventListener)
const colorDark = "#222333" 
const bgDark = "#646AD9"

let button1 = document.querySelector("#swapType")

button1.onclick = function swapType() {
    message.style.color = colorDark
    message.style.backgroundColor = bgDark
}


// Usando forms

let form = document.querySelector("#form")

let results = document.getElementById("results")

form.onsubmit = function func(event) {
    event.preventDefault()

    const name = form.querySelector("#name-input").value
    const email = form.querySelector("#email-input").value
    
    console.log("Dados Cadastrados")
    console.log(`Nome: ${name}\n Email: ${email}`) 

    form.querySelector("#name-input").value = ""
    form.querySelector("#email-input").value = ""

    results.innerHTML = `Nome: ${name}<br>Email: ${email}` 
}
