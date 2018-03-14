let spiller = function (fornavn, efternavn) {
    this.fornavn = fornavn,
    this.efternavn = efternavn,
    this.aktiv = false,
    this.point = 0,
    this.skriftAktiv = function () {
        this.aktiv = !this.Aktiv;
    },
    this.givPoint = function (antal) {
        this.point += antal;
    },
    this.profil = function () {
        return `${this.fornavn} ${this.efternavn} har ${this.point}
        point ${this.aktiv ? "(aktiv)" : "(ikke aktiv)"}`
    }
}

let spiller_1 = new spiller("Palle", "Olsen");
let spiller_2 = new spiller("Tina", "Jensen");

spiller_1.skriftAktiv();
spiller_1.givPoint(5);

spiller_2.givPoint(12);

console.log(spiller_1.profil());
console.log(spiller_2.profil());