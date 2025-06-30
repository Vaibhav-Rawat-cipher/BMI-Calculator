const form=document.querySelector(".bmi");
const button=document.querySelector("#calculateBtn");
button.addEventListener("click",function(event){
    button.style.backgroundColor="rgb(161, 134, 27)";
    button.style.color="white";
})
button.addEventListener("mouseenter",function(event){
    button.style.backgroundColor="rgb(43, 40, 29)";
    button.style.color="white";
})
button.addEventListener("mouseleave",function(event){
    button.style.backgroundColor="#43bacf";
    button.style.color="white";
})
form.addEventListener("submit",function(event){
    event.preventDefault();
    const Hieght=parseInt(document.querySelector("#Height").value);
    const Wieght=parseInt(document.querySelector("#Weight").value);
    if(isNaN(Hieght)||isNaN(Wieght) || Hieght<=0||Wieght<=0){
        alert("Please enter valid numbers for height and weight.");
        return;
    }
    else {
    const bmi=Wieght/(Hieght/100)**2;
    const resultElement=document.querySelector("#result");
    const categoryElement=document.querySelector("#category");
    resultElement.innerHTML = "";
    categoryElement.innerHTML = "";
    resultElement.innerHTML=`Your BMI is : ${bmi.toFixed(2)}`;
    if(bmi<18.5){
        categoryElement.innerHTML="According to this number, you are Underweight.";
    }   
    else if(bmi>=18.5 && bmi<24.9){
        categoryElement.innerHTML="According to this number, you are Normal weight.";
    }
    else if(bmi>=25 && bmi<29.9){
        categoryElement.innerHTML="According to this number, you are Overweight.";
    }
    else {
        categoryElement.innerHTML="According to this number, you are Obese.";
    }
    }
  document.getElementById("Height").value = "";
  document.getElementById("Weight").value = "";
}
);
const reloadButton=document.getElementById("ReloadButton");
reloadButton.addEventListener("reset",function(event){
    location.reload();
});
reloadButton.addEventListener("mouseenter",function(event){
    reloadButton.style.backgroundColor="rgb(43, 40, 29)";
    reloadButton.style.color="white";
});
reloadButton.addEventListener("mouseleave",function(event){
    reloadButton.style.backgroundColor="rgb(241, 66, 13)";
    reloadButton.style.color="white";
});