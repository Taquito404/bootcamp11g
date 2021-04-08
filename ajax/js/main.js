
let mentor = {
    name: "",
    age: 0,
    number: 0
}

const uploadMentor = () => {
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log( response  )
        }
    }

    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/taco/mentors.json", true);

    xhttp.send( JSON.stringify(mentor) );
}

let sendInfo = function (){
    mentor.name = document.forms[0].elements[0].value;
    mentor.age = document.forms[0].elements[1].value;
    mentor.number = document.forms[0].elements[2].value;
    
    uploadMentor()

    document.forms[0].elements[0].value = "";
    document.forms[0].elements[1].value = "";
    document.forms[0].elements[2].value = "";
}

let sendButton = document.getElementById("send");
sendButton.addEventListener("click", sendInfo)
