const voiture = {
    marque: "clio",
    avancer: function () {
        return "Cool"
    },

    get arrow() {
        return this.marque
    },

    marque1: function () {
        return this.marque
    },

    get message() {
        return this.avancer() + ' c\'est une ' + this.marque1();
    }
}

console.log(voiture.marque)
console.log(voiture.avancer())
console.log(voiture.arrow)
console.log(voiture.message)

class Voiture {
    constructor(marque) {
        this.marque = marque
    }

    setMarque = function (marque) {
        return this.marque = marque;
    }
}

let clio = new Voiture("Porsche")
console.log(clio.marque)
clio.setMarque('Renault')

console.log(clio.marque)

const Moto = function() {
    this.marque = "Yamaha"
}

let x = new Moto();

Moto.prototype.ville = "ville";

console.log(x.marque)
console.log(x.ville)
