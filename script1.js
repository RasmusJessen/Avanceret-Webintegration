let spiller_1 = {
    fornavn: 'Rasmus',
    efternavn: 'Jessen',
    aktiv: false,
    point: 0,
    skriftAktiv: function () {
        this.aktiv = !this.aktiv;
    },
    givPoint: function (antal) {
        this.point += antal;
    },
    profil: function () {
        return `${this.fornavn} ${this.efternavn} har ${this.point}
        point ${this.aktiv ? "(aktiv)" : "(ikke aktiv)"}`
    }
}

spiller_1.skriftAktiv();
spiller_1.givPoint(5);
console.log(spiller_1.profil());