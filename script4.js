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

spiller_1 = new spiller("Martin", "Jessen");
spiller_2 = new spiller("Louise", "Jensen");

spiller_1.skriftAktiv();
spiller_1.givPoint(7);

spiller_2.givPoint(9);

console.log(spiller_1.profil());
console.log(spiller_2.profil());