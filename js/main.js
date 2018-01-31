document.getElementById('submitData').addEventListener('click', function () {

    let cutWasch = [100, 130, 150];
    let wasch = [40,50,80];
    let hair = [40];
    let trymer = [50];
    var firstname = document.getElementById('name').value;
    var secondname = document.getElementById('surname').value;
    var email = document.getElementById('exampleFormControlInput1').value;
    var mobile = document.getElementById('phone').value;
    var dog = document.getElementById('size').value;
    var dogName = document.getElementById('whatsDog').value;

    var dogPrice = document.getElementById('dogService').value;

    var timeDay = document.getElementById('dayTime').value;

    document.getElementById('name1').value = firstname;
    document.getElementById('surname1').value = secondname;
    document.getElementById('exampleFormControlInput2').value = email;

    document.getElementById('phone1').value = mobile;
    document.getElementById('size2').value = dog;
    document.getElementById('whatsDog1').value = dogName;
    document.getElementById('servicess').value = dogPrice;
    document.getElementById('timeDog').value = timeDay;


    if (dog == "do 5kg" && dogPrice == "value1") {
        document.getElementById('test11').value = cutWasch[0] + "zł";

    } else if (dog == "do 5kg" && dogPrice == "value2") {
        document.getElementById('test11').value = wasch[0] + "zł";
    } else if (dog == "do 5kg" && dogPrice == "value3") {
        document.getElementById('test11').value = hair[0] + "zł";
    }else if(dog=="od 5kg-10kg" && dogPrice=="value1"){
        document.getElementById('test11').value=cutWasch[1] + "zł";
    }else if(dog=="od 5kg-10kg" && dogPrice=="value2"){
        document.getElementById('test11').value=wash[1] + "zł";
    }else if(dog=="od 5kg-10kg" &&dogPrice=="value3"){
        document.getElementById('test11').value=hair[1];
    }
    divChange();





});

function divChange() {
    document.getElementById('form').style.display = "none";
    document.getElementById('data-custome').style.display = "block";

}

function form() {
    document.getElementById('form').style.display = "block";


    document.querySelectorAll('.form-control').innerHTML = "";
    document.querySelectorAll('.form-control').innerHTML = "";
    document.getElementById('data-custome').style.display = "none";

    document.querySelector('#popUp').style.display = "block";
    document.getElementById('test11').value = "";


}

document.getElementById('form-submit').addEventListener('click', form);

document.getElementById('hidePop').addEventListener('click', function () {
    document.getElementById('popUp').style.display = "none";
})

/*price function*/


//function priceShow(){
//   let dogSize=document.getElementById('size').value;
//   let dogPrice=document.getElementById('exampleFormControlSelect1').value;
//  return dogSize + dogPrice;
//}

$(function () {
    $("#datepicker").datepicker();
});