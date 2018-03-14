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

     static Hentspillerliste() {
        let liste = [];
        liste.push(new spiller("James", "Dean"))
        liste.push(new spiller("Sarah", "Dee"))
        liste.push(new spiller("Sam", "Glee"))
        return liste;
    }
    
}

let spillerliste = spiller.Hentspillerliste();

 console.log(spillerliste);
