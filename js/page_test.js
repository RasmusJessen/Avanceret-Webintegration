let bamse = new spiller();

let profilknap = document.querySelector("#profil");

profilknap.addEventListener("click", function(event){
      console.log("du har klikket");
      console.log(bamse.profil());
})

let aktivknap = document.querySelector("#skiftaktiv");

aktivknap.addEventListener("click", function(event){
      console.log("du har skiftet status");
      console.log(bamse.skiftAktiv());
})