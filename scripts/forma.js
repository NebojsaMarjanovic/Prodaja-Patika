

/*nav menu*/
const button=document.getElementById("menu-button");
const nav=document.getElementById("nav-ul");

function funkcija(){
    nav.classList.toggle("show");
}
function alert_funkcija(){
    var ime=document.getElementById("ime").value;
    var prezime=document.getElementById("prezime").value;
    var adresa=document.getElementById("adresa").value;
    var email=document.getElementById("email").value;
    var radio1=document.getElementById("pouzecem");
    var radio2=document.getElementById("karticom");

    if(ime.length==0 || prezime.length==0 || adresa.length==0 || email.length==0 || (!radio1.checked && !radio2.checked)){
        alert("Niste popunili sva potrebna polja!");
    } else{
        let prom=confirm("Da li ste sigurni?\n\nOK - Siguran sam\nCancel - Nisam siguran");
        if(prom){
        alert("Uspešno ste obavili kupovinu. Hvala na poverenju!");
        }
        else{
           document.getElementById("form").reset();
        }

    }
}

const time=new Date();
const mesec = time.getUTCMonth()+1;
const dan = time.getUTCDate();
const godina = time.getUTCFullYear();
document.getElementById("time").textContent = "Datum narudzbine: "+ dan +"/"+mesec+"/"+godina;

