window.onload = run;

function rowFromArray(array) {
    let row = document.createElement("tr");

    for (let i = 0; i < array.length; i++) {
        let td = document.createElement("td");
        let textnode = document.createTextNode(array[i]);
        td.appendChild(textnode);
        row.appendChild(td);
    }

    return row;
}

function run() {
    // grab form
    let form = document.getElementById("form");
    
    // grab & clear result div
    let resultArea = document.getElementById("result");
    resultArea.replaceChildren();

    // populate variables from from
    let xMin = Number(form.elements["min_col"].value);
    let xMax = Number(form.elements["max_col"].value);
    let yMin = Number(form.elements["min_row"].value);
    let yMax = Number(form.elements["max_row"].value);

    // ensure inputs are integers
    if ( !(Number.isInteger(xMin) && 
           Number.isInteger(xMax) && 
           Number.isInteger(yMin) && 
           Number.isInteger(yMax)) ) {
           let errorArea = document.getElementById("result");
           result.replaceChildren();
           let message = document.createElement("h2");
           message.className = "errorMessage";
           let messageText = document.createTextNode("Please only enter integers between X and Y");
           message.appendChild(messageText);
           result.appendChild(message);
            return;
        }

    // range checking
    if ( ((xMax - xMin) > 300) ||
         ((yMax - yMin) > 300)    ) {
            let errorArea = document.getElementById("result");
            result.replaceChildren();
            let message = document.createElement("h2");
            message.className = "errorMessage";
            let messageText = document.createTextNode("Please only enter integers between X and Y");
            message.appendChild(messageText);
            result.appendChild(message);
            return;
       }

    /* build table */
    let table = document.createElement("table");
    result.appendChild(table);

    // build header row 
    let array = new Array(xMax - xMin);
    for (let i = 0; i <= xMax - xMin; i++) {
        array[i] = xMin + i;
    }
    let headerRow = rowFromArray(array);

    let td = document.createElement("td");
    let textnode = document.createTextNode("×");
    td.appendChild(textnode);
    headerRow.prepend(td);

    table.appendChild(headerRow);
    
    // build body rows
    for (let y = yMin; y <= yMax; y++) {
        let bodyRow = rowFromArray(array.map((num) => num * y));
        let td = document.createElement("td");
        let textnode = document.createTextNode(y);
        td.appendChild(textnode);
        bodyRow.prepend(td);
        table.appendChild(bodyRow);
    }
//    table.appendChild(tbody);
    // style
    //table.style.border = "solid", "black";
    //table.getElementsByTagName("td").style.border = "solid", "black";
}

//TODO: add keypress listener
//TODO: error checking
    // not a number
    //number too big
//TODO: change to submit button instead of button
//TODO: refactor to create whole table instead of just adding to it