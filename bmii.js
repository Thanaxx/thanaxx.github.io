function solve(){
    const h = document.querySelector(".height").value;
    const w = document.querySelector(".weight").value;
    const bmi = w/(h/100*h/100);
    const bmio = (bmi.toFixed(2));

    document.getElementById("aa").innerHTML = "Your BMI is " + bmio;
}
