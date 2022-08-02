let jagoda = document.querySelector('#jagoda');
let malina = document.querySelector('#malina');
let borovnica = document.querySelector('#borovnica');
let pomorandza = document.querySelector('#pomorandza');
let limun = document.querySelector('#limun');
let jabuka = document.querySelector('#jabuka');
let sok = document.querySelector('#sok');
let cena = document.querySelector('#cena');
let messages =[]
var theTotal = 0;

$(jagoda).click(function(){
if (messages.length <4){
    messages.push('Jagode')
    theTotal = Number(theTotal) + Number($(this).val());
$('.cena').text("Cena: "+theTotal+' dinara');
}
else  {
    $('#warning').text(" Mozete izabrati najvise 4 sastojka ");
}
    if (messages.length > 0  ) {
sok.innerText = messages.join(', ')
jagoda.setAttribute('disabled', 'true')
}
});



$(malina).click(function(){
if(messages.length <4){
    messages.push('Maline')
    theTotal = Number(theTotal) + Number($(this).val());
if (messages.length <= 5)
$('.cena').text("Cena: "+theTotal+' dinara');
}
else  {
    $('#warning').text(" Mozete izabrati najvise 4 sastojka ");
}
    if (messages.length > 0) {
sok.innerText = messages.join(', ')
malina.setAttribute('disabled', 'true')
}
});




$(borovnica).click(function(){
if (messages.length < 4){
    messages.push('Borovnice')
    theTotal = Number(theTotal) + Number($(this).val());
$('.cena').text("Cena: "+theTotal+' dinara');  
}
else  {
    $('#warning').text(" Mozete izabrati najvise 4 sastojka ");
}
    if (messages.length > 0) {
sok.innerText = messages.join(', ')
borovnica.setAttribute('disabled', 'true')
}
});




$(pomorandza).click(function(){
if (messages.length <4){
    messages.push('Pomorandze')
    theTotal = Number(theTotal) + Number($(this).val());
$('.cena').text("Cena: "+theTotal+' dinara');  
}
else  {
    $('#warning').text(" Mozete izabrati najvise 4 sastojka ");
}
    if (messages.length > 0) {
sok.innerText = messages.join(', ')
pomorandza.setAttribute('disabled', 'true')
}
 
});




$(limun).click(function(){
if (messages.length <4){
    messages.push('Limuna')
    theTotal = Number(theTotal) + Number($(this).val());
$('.cena').text("Cena: "+theTotal+' dinara');  
}
else  {
    $('#warning').text(" Mozete izabrati najvise 4 sastojka ");
}
    if (messages.length > 0) {
sok.innerText = messages.join(', ')
limun.setAttribute('disabled', 'true')
}
});




$(jabuka).click(function(){
if (messages.length <4){
    messages.push('Jabuke')
    theTotal = Number(theTotal) + Number($(this).val());
$('.cena').text("Cena: "+theTotal+' dinara');
}
else  {
    $('#warning').text(" Mozete izabrati najvise 4 sastojka ");
}
    if (messages.length > 0) {
sok.innerText = messages.join(', ')
jabuka.setAttribute('disabled', 'true')
}
   
});
//////////////////////////////////////////////////////////////////////////
let kruska = document.querySelector('#kruska');
let sargarepa = document.querySelector('#sargarepa');
let visnja = document.querySelector('#visnja');
let djumbir = document.querySelector('#djumbir');
let kivi = document.querySelector('#kivi');
let ananas = document.querySelector('#ananas');
let kolicina = document.querySelector('#kolicina')
let dodajUkorpu = document.getElementById('naruci')
var theTotal = 0;



$(kruska).click(function(){
if (messages.length <4){
messages.push('Kruske')
theTotal = Number(theTotal) + Number($(this).val());
$('.cena').text("Cena: "+theTotal+' dinara');
}
else  {
    $('#warning').text(" Mozete izabrati najvise 4 sastojka ");
}
 if (messages.length > 0) {
sok.innerText = messages.join(', ')
kruska.setAttribute('disabled', 'true')
}
});



$(sargarepa).click(function(){
if (messages.length <4){
 messages.push('Sargarepe')
 theTotal = Number(theTotal) + Number($(this).val());
$('.cena').text("Cena: "+theTotal+' dinara');   
}
else  {
    $('#warning').text(" Mozete izabrati najvise 4 sastojka ");
}
 if (messages.length > 0) {
sok.innerText = messages.join(', ')
sargarepa.setAttribute('disabled', 'true')
}
});



$(djumbir).click(function(){
if (messages.length <4){
 messages.push('Djumbira')
 theTotal = Number(theTotal) + Number($(this).val());
$('.cena').text("Cena: "+theTotal+' dinara'); 
}
else  {
    $('#warning').text(" Mozete izabrati najvise 4 sastojka ");
}
 if (messages.length > 0) {
sok.innerText = messages.join(', ')
djumbir.setAttribute('disabled', 'true')
}
   
});



$(kivi).click(function(){
if (messages.length <4){
 messages.push('Kivija')
 theTotal = Number(theTotal) + Number($(this).val());
$('.cena').text("Cena: "+theTotal+' dinara'); 
}
else  {
    $('#warning').text(" Mozete izabrati najvise 4 sastojka ");
}
 if (messages.length > 0) {
sok.innerText = messages.join(', ')
kivi.setAttribute('disabled', 'true')
}
});
$(ananas).click(function(){
if (messages.length <4){
 messages.push('Ananasa')
 theTotal = Number(theTotal) + Number($(this).val());
$('.cena').text("Cena: "+theTotal+' dinara');  
}
else  {
    $('#warning').text(" Mozete izabrati najvise 4 sastojka ");
}
 if (messages.length > 0) {
sok.innerText = messages.join(', ')
ananas.setAttribute('disabled', 'true')
}
  
});




$(visnja).click(function(){
if (messages.length <4){
 messages.push('Visnje')
 theTotal = Number(theTotal) + Number($(this).val());
$('.cena').text("Cena: "+theTotal+' dinara');
  }
  else  {
    $('#warning').text(" Mozete izabrati najvise 4 sastojka ");
}
 if (messages.length > 0) {
sok.innerText = messages.join(', ')
visnja.setAttribute('disabled', 'true')
}
});


$('.button').one('click', function(){
$('#naruciteS').text('Narucite sok od: ' );        
});

let  storage = 0;
let totalko = 0
let counter = 0
        
 
   
        
$('#naruci').click(function() {
    
    if (messages.length < 4) {
        $('#warning').text("Sok mora da sadrzi 4 sastojka ");
    }
    else {
        storage = Number(theTotal) * Number($(kolicina).val());
        const node = document.createElement("li");
        node.setAttribute('id','node' + counter++ );
        node.setAttribute('class','node' );
        let btn = document.createElement("button");
        btn.setAttribute('class','izbaci' );
       
        btn.innerHTML = "X";
        let text = document.createTextNode(" "+" "+"Mix "+messages+" "+"x"+Number($(kolicina).val())+" "+  "=" + storage + " dinara" + " " );
        node.appendChild(text);
        document.getElementById("korpica").appendChild(node).appendChild(btn);
        $('#warning').text(" ");
        totalko=Number(totalko) + Number(storage)
        $('#totalko').text("Ukupna cena: "+ totalko + " dinara");
        node.setAttribute('value', storage)
        btn.setAttribute('value', storage)
        theTotal=0
    messages= []
    $('.cena').text("");
    $(sok).text(" ")
    jagoda.disabled = false;
        malina.disabled = false;
        borovnica.disabled = false;
        pomorandza.disabled = false;
      
        jabuka.disabled = false
        kruska.disabled = false
        sargarepa.disabled = false
        djumbir.disabled = false
        ananas.disabled = false
        visnja.disabled = false
        kivi.disabled = false
        limun.disabled = false
      ;
    document.getElementById("kolicina").value = '1';
    }
})


$('#novMiks').click(function(){
  theTotal=0
 $('.cena').text("");
 $(sok).text(" ")
        messages.splice(0,messages.length);
        jagoda.disabled = false;
        malina.disabled = false;
        borovnica.disabled = false;
        pomorandza.disabled = false;
      
        jabuka.disabled = false
        kruska.disabled = false
        sargarepa.disabled = false
        djumbir.disabled = false
        ananas.disabled = false
        visnja.disabled = false
        kivi.disabled = false
        limun.disabled = false
        let kolicina = document.getElementById('kolicina')
        let promena = "1"
        $('#warning').text("");
       
    document.getElementById("kolicina").value = promena;
})



$('#isprazniKorpu').click(function(){
    totalko=0
    $('#totalko').text("");
    $('.node').text("");
    
})



$('body').on('click', '.izbaci', function() {
    totalko= Number(totalko)- Number($(this).val())
    
    document.getElementById("totalko").innerHTML = "Ukupna cena: "+ totalko + " dinara";
    $(this).closest( ".node" ).hide()
})