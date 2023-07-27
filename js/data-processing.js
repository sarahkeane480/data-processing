// Code below from FreeCodeCamp
// https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/
function titleCase(str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}



const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

if (queryString.length > 0) {
    //form submitted!
    let myOutput = ""; //will store data for display
    //alert("Data submitted!");
    let myShipping = "";

    let myCart = "";
    let myTotal = 0;

    urlParams.forEach(function (value, key) {
        //console.log(value);

        if (key == "Cart") {
            //Process Cart
            // alert(value);

            switch (value) {
                case "Widget":
                    myCart += `Widget: $3.99<br>`;
                    myTotal += 3.99;
                    break;

                case "Sprocket":
                    myCart += `Sprocket: $5.99<br>`;
                    myTotal += 5.99;
                    break;

                case "Thingy":
                    myCart += `Thingy: $1.99<br>`;
                    myTotal += 1.99;
                    break;
            } // end cart items
        } else {
            //Process Shipping

            key = key.split("_").join(" ");

            //title case first, last, address & city only
            switch (key) {
                case "First Name":
                case "Last Name":
                case "Address":
                case "City":
                    value = titleCase(value);
                    break;
            } // end title case items
        }

        myShipping += `<p>${key}: ${value}</p>`;
    });

    myOutput = `<div id="container">`; //Will store data for display

    myCart = `<h3>Cart Contents</h3>
        <p>${myCart}</p>
        <p>Total: $${myTotal}</p>`;

    myOutput += myCart + myShipping;

    myOutput += `<p><a href="index.html">CLEAR</a></p>`;
    myOutput += `</div>`;

    document.querySelector("#output").innerHTML = myOutput;
}
