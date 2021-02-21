var type,price,transmission=0,fuelvalue,total;
var days=document.getElementById("days");
function cartype (e) {
    type=e;
    var zero=document.getElementsByName("radio");
    for(var i=0;i<zero.length;i++){
        zero[i].disabled = true; }
        var zerogp=document.getElementsByName("radiogp");
    for(var i=0;i<zerogp.length;i++){
        zerogp[i].disabled = true;
    }
    switch (type) {
        case "citadine": document.querySelector ("#manuel").disabled=false; 
                         document.querySelector ("#manuel").checked=true; 
                         document.querySelector ("#electrique").disabled=false;
                         document.querySelector ("#hybride").disabled=false;
                         document.querySelector ("#diesel").disabled=false;
                         document.querySelector ("#essence").disabled=false;
                         price=12;
            break;
        case "compact":  document.querySelector ("#manuel").disabled=false; 
                         document.querySelector ("#manuel").checked=true; 
                         document.querySelector ("#hybride").disabled=false;
                         document.querySelector ("#diesel").disabled=false;
                         document.querySelector ("#essence").disabled=false;
                         price=14;
            break;                        
        case "SUV": document.querySelector("#automatique").disabled=false;
                    document.querySelector("#automatique").checked=true;
                    document.querySelector ("#hybride").disabled=false;
                    document.querySelector ("#diesel").disabled=false;
                    document.querySelector ("#essence").disabled=false;
                    price=20;
                    transmission=0.19;
            break;
        case "bikes": document. querySelector("#electrique").disabled=false;
                      document.querySelector("#essence").disabled=false;
                      price=10;
            break;
        case "trucks": document.querySelector("#automatique").disabled=false;             
                       document.querySelector("#automatique").checked=true;
                       document.querySelector("#diesel").disabled=false;
                       document.querySelector("#diesel").checked=true;
                       price=250;
                       transmission=0.19;
            break;
        case "engins":document.querySelector("#automatique").disabled=false;             
                      document.querySelector("#automatique").checked=true;
                      document.querySelector("#diesel").disabled=false;
                      document.querySelector("#essence").disabled=false;
                      price=900;
            break; 
        case "utilitaire": document.querySelector("#manuel").disabled=false;             
                           document.querySelector("#manuel").checked=true;
                           document.querySelector("#diesel").disabled=false;
                           document.querySelector("#diesel").checked=true;
                           price=16;
            break;                      
        } 
}
function fuel (e) {
    fuelvalue=e;
}
function calcul(){
    total = (price + (price * fuelvalue) + (price * transmission)) * days.value;
    alert("total price: "+total+ "Euro");

}