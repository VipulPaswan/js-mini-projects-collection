const form = document.querySelector('form')

form.addEventListener('submit',function(e){
          e.preventDefault()
          const height= parseInt(document.querySelector('#height').value);
          const weight = parseInt(document.querySelector("#weight").value);
          const results = document.querySelector("#results");


          if (height === "" || height < 0 || isNaN(height)) {
            results.innerHTML = `Please give a vaild height ${height}`;
          } 
          else if (weight === "" || weight < 0 || isNaN(weight)) {
            results.innerHTML = `Please give a vaild weight ${weight}`;
          }

          else{
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            //show the result
            results.innerHTML = `<span>${bmi}</span>`;

            // Convert BMI string → number
            const x = parseFloat(bmi);

            if (18.6 > x) {
              results.innerHTML += "<br>Under Weight ";
            } else if (x > 24.9) {
              results.innerHTML += "<br>Overweight";
            } else {
              results.innerHTML += "<br>Normal Range";
            }
          }

})