let imgguerrier = document.getElementById('guerrier');
let imgmage = document.getElementById('mage');
let imgvoleur = document.getElementById('voleur');

const Personnage = function (puissance, name) {
    this.levelLife = 200;
    this.puissance = puissance;
    this.name = name;

    this.coup1 = function (victime) {
        return victime.levelLife = victime.levelLife - (this.puissance);
    }

    this.coup2 = function (victime) {
        return victime.levelLife = victime.levelLife - (this.puissance * 2);
    }

    this.coup3 = function (victime) {
        return victime.levelLife = victime.levelLife - (this.puissance * 3);
    }
}

let onhand = Math.round(Math.random() * 3);

let guerrier = new Personnage(5, "Guerrier");

let mage = new Personnage(200, "Mage");

let voleur = new Personnage(2, "Voleur");

guerrier.coup1(mage);
console.log(guerrier.levelLife)
console.log(mage.levelLife)
let pos;
document.addEventListener('keydown', function (e) {
    if (onhand <= 1) {
        switch (e.keyCode) {
            case 37:
                pos = imgguerrier.offsetLeft-10;
                imgguerrier.style.left = pos + "px";
                break;
            case 38:
                pos = imgguerrier.offsetTop-10;
                imgguerrier.style.top = pos + "px";
                break;
            case 39:
                pos = imgguerrier.offsetLeft+10;
                imgguerrier.style.left = pos + "px";
                break;
            case 40:
                pos = imgguerrier.offsetTop+10;
                imgguerrier.style.top = pos + "px";
                break;
        }
    }
    if (onhand == 2) {
        switch (e.keyCode) {
            case 37:
                pos = imgmage.offsetLeft-10;
                imgmage.style.left = pos + "px";
                break;
            case 38:
                pos = imgmage.offsetTop-10;
                imgmage.style.top = pos + "px";
                break;
            case 39:
                pos = imgmage.offsetLeft+10;
                imgmage.style.left = pos + "px";
                break;
            case 40:
                pos = imgmage.offsetTop+10;
                imgmage.style.top = pos + "px";
                break;
        }
    }
    if (onhand == 3) {
        switch (e.keyCode) {
            case 37:
                pos = imgvoleur.offsetLeft-10;
                imgvoleur.style.left = pos + "px";
                break;
            case 38:
                pos = imgvoleur.offsetTop-10;
                imgvoleur.style.top = pos + "px";
                break;
            case 39:
                pos = imgvoleur.offsetLeft+10;
                imgvoleur.style.left = pos + "px";
                break;
            case 40:
                pos = imgvoleur.offsetTop+10;
                imgvoleur.style.top = pos + "px";
                break;
        }
    }
});
