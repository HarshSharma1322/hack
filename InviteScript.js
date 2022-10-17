// function myFunction(){
//     var x = document.createElement("INPUT"); //texbox
//     var button = document.createElement("INPUT");
//     var label = document.createElement("label");
//     var row = document.createElement("div");
//     var col = document.createElement("div");
//     var col2 = document.createElement("div");
    
//     // var col3 = document.createElement("div");
//     // var col4 = document.createElement("div");
//     var col5 = document.createElement("div");
    
//     //label
//     label.setAttribute("class", "labelStyle");
//     label.setAttribute("for", "insert");
    
//     // divs
//     row.setAttribute("class", "row delete-this");
//     col.setAttribute("class", "col-xs-6");
//     col5.setAttribute("class", "col-xs-12");
//     col2.setAttribute("class", "form-group has-feedback");
//     col.appendChild(col2);
//     row.appendChild(col);
    
//     // col3.setAttribute("class", "col-xs-6");
//     // col3.appendChild(col4);
//     // row.appendChild(col3);
//     row.appendChild(col5);
    
//   // Textbox attributes
//     x.setAttribute("type", "text");
//     x.setAttribute("name", "insert[]");
//     // x.setAttribute("class", "form-control");
//     x.setAttribute("placeholder","Enter description in spanish");
    
//   // Button attributes (to delete textbox)
//     button.setAttribute("type", "submit");
//     button.setAttribute("value", "Delete");
//     button.setAttribute("class", "btn btn-danger delete-this");
//     button.setAttribute("onclick", "deleteField(this)");
    
//     // Append row to #option div
//     document.getElementById("options").appendChild(row);
//     col2.appendChild(label);
//     col2.appendChild(x);
//     col5.appendChild(button);
//     label.appendChild(document.createTextNode("New description in spanish"));
    
//     var x_eng = document.createElement("INPUT"); //texbox
//     var label_eng = document.createElement("label");
    
//     //label
//     label_eng.setAttribute("class", "labelStyle");
//     label_eng.setAttribute("for", "insert_eng");
  
//   // Textbox attributes
//     x_eng.setAttribute("type", "text");
//     x_eng.setAttribute("name", "insert_eng[]");
//     // x_eng.setAttribute("class", "form-control");
//     x_eng.setAttribute("placeholder","Enter description in english");
    
//     // Append row to #option div
//     // col3.appendChild(label_eng);
//     // col3.appendChild(x_eng);
//     // label_eng.appendChild(document.createTextNode("New description in english"));
// }

// function deleteField(e)
// {
//  e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
// }


  //Get a reference to the button
  var button = document.getElementById("generate");

  //Run the function on button click
  button.onclick = function generate() {

  // Create a variable to hold a random number between 1 and 100
  var randomNum = Math.floor(Math.floor(100000 + Math.random() * 900000));

  // Create a variable el to hold the ranNum element
  var el = document.getElementById('ranNum');
  // Write the number into that element
  el.innerHTML = randomNum;
  }
 
  function OTPInput() {
  const inputs = document.querySelectorAll('#otp > *[id]');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keydown', function(event) {
      if (event.key === "Backspace") {
        inputs[i].value = '';
        if (i !== 0)
          inputs[i - 1].focus();
      } else {
        if (i === inputs.length - 1 && inputs[i].value !== '') {
          return true;
        } else if (event.keyCode > 47 && event.keyCode < 58) {
          inputs[i].value = event.key;
          if (i !== inputs.length - 1)
            inputs[i + 1].focus();
          event.preventDefault();
        } else if (event.keyCode > 64 && event.keyCode < 91) {
          inputs[i].value = String.fromCharCode(event.keyCode);
          if (i !== inputs.length - 1)
            inputs[i + 1].focus();
          event.preventDefault();
        }
      }
    });
  }
}
OTPInput();