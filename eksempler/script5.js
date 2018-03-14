class spiller {
    constructor(fornavn, efternavn) {
        this.fornavn = fornavn;
        this.efternavn = efternavn;
        this.aktiv = false; 
        this.point = 0;
    }

    skriftAktiv() {
        this.aktiv = !this.aktiv;
     }
 
     givPoint(antal) {
         this.point += antal;
     }
 
     profil() {
         return `${this.fornavn} ${this.efternavn} har ${this.point}
         point ${this.aktiv ? "(aktiv)" : "(ikke aktiv)"}`
     }
}

let spillerliste = [];
spillerliste.push(new spiller("Martin", "Jessen"))
spillerliste.push(new spiller("Louise", "Jensen"))

spillerliste.forEach(function (spiller) {
    // console.log(spiller);
    console.log(spiller.profil());
    spiller.givPoint(10);
})