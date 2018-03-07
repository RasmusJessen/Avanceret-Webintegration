class film {
    constructor(titel, sendetid) {
        this.titel = titel;
        this.sendetid = sendetid;
        this.pris = 100;
        this.sal = 0;
    }

    sendeTid() {
        this.sendeTid = new Date();
     }
 
     givSal(nummer) {
         this.sal += nummer;
     }
 
     profil() {
         return `${this.titel} kører i sal ${this.sal}
         kører ${this.sendeTid} og koster ${this.pris} kr. per billet`
     }
}


film_1 = new film("Deadpool");
film_2 = new film("Black Panther");

film_1.sendeTid();
film_1.givSal(1);

film_2.sendeTid();
film_2.givSal(2);

console.log(film_1.profil());
console.log(film_2.profil());