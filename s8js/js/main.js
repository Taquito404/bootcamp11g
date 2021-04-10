let mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]

//mentor - signatures - promedio

let globalAverage = [];

const getTable = () => {
    let titlesArray = [ 'Mentor', 'HTML', 'CSS', 'JS', 'ReactJS', 'Promedio' ]
    
    let createTable = document.createElement("table");
    let createHeader = document.createElement("thead");
    let headerRow = document.createElement("tr")
    titlesArray.forEach(element => {
        let createHead = document.createElement("th");
        let textHead = document.createTextNode(element);

        createHead.appendChild(textHead);
        headerRow.appendChild(createHead)
    })
    createTable.appendChild(createHeader);
    createHeader.appendChild(headerRow)
    document.body.appendChild(createTable);

    let createTbody = document.createElement("tbody");
    

    mentorsArray.forEach(element => {

        let bodyRow = document.createElement("tr");
        let createBody = document.createElement("td");
        let textBody = document.createTextNode(element.name);

        createBody.appendChild(textBody);
        bodyRow.appendChild(createBody);
        createTbody.appendChild(bodyRow);

        element.scores.forEach(element => {

            let createBodyScore = document.createElement("td");
            let textBodyScore = document.createTextNode(element.score);
            createBodyScore.appendChild(textBodyScore);
            bodyRow.appendChild(createBody
  