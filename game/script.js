window.onload = function() {
  let imgguerrier = document.getElementById("guerrier");
  let imgmage = document.getElementById("mage");
  let imgvoleur = document.getElementById("voleur");
  let bartitle = document.querySelector(".bartitle");
  let guerrierscore = document.querySelector(".guerrierscore");
  let magescore = document.querySelector(".magescore");
  let voleurscore = document.querySelector(".voleurscore");
  let guerriertitle = document.querySelector(".guerriertitle");
  let magetitle = document.querySelector(".magetitle");
  let voleurtitle = document.querySelector(".voleurtitle");

  //   console.log(window.innerHeight);
  //   console.log(window.innerWidth);

  const Personnage = function(puissance, name, image) {
    this.levelLife = 200;
    this.puissance = puissance;
    this.name = name;
    this.image = image;

    this.coup1 = function(victime) {
      return (victime.levelLife = victime.levelLife - this.puissance);
    };

    this.coup2 = function(victime) {
      return (victime.levelLife = victime.levelLife - this.puissance * 2);
    };

    this.coup3 = function(victime) {
      return (victime.levelLife = victime.levelLife - this.puissance * 3);
    };

    this.moveLeft = function() {
      if (this.image.offsetLeft - 50 < 0) return false;
      this.image.style.left = this.image.offsetLeft - 50 + "px";
    };

    this.moveTop = function() {
      if (
        this.image.offsetTop - 50 <
        bartitle.offsetTop + bartitle.offsetHeight
      )
        return false;
      this.image.style.top = this.image.offsetTop - 50 + "px";
    };

    this.moveRight = function() {
      if (
        this.image.offsetLeft + this.image.offsetWidth >
        window.innerWidth - 50
      )
        return false;
      this.image.style.left = this.image.offsetLeft + 50 + "px";
    };

    this.moveBottom = function() {
      if (
        this.image.offsetTop + this.image.offsetHeight >
        window.innerHeight - 50
      )
        return false;
      this.image.style.top = this.image.offsetTop + 50 + "px";
    };
  };

  let onhand = Math.floor(Math.random() * 3 + 1);

  if (onhand == 1) {
    guerriertitle.style.border = "2px solid green";
  } else if (onhand == 2) {
    magetitle.style.border = "2px solid green";
  } else if (onhand == 3) {
    voleurtitle.style.border = "2px solid green";
  }

  let guerrier = new Personnage(5, "Guerrier", imgguerrier);

  let mage = new Personnage(2, "Mage", imgmage);

  let voleur = new Personnage(2, "Voleur", imgvoleur);

  guerrierscore.textContent = guerrier.levelLife;
  magescore.textContent = mage.levelLife;
  voleurscore.textContent = voleur.levelLife;

  function getstyleborder(arg) {
    let table = [guerriertitle, voleurtitle, magetitle];
    table.forEach(e => {
      if (e == arg) {
        e.style.border = "2px solid green";
      } else {
        e.style.border = "";
      }
    });
  }

  document.addEventListener("keydown", function(e) {
    if (onhand == 1) {
      imgguerrier.style.zIndex = 1;
      //   console.log(imgguerrier.offsetTop);
      //   console.log(imgguerrier.offsetWidth);
      //   console.log("bartitle " + (bartitle.offsetTop + bartitle.offsetHeight));
      switch (e.keyCode) {
        case 37:
          guerrier.moveLeft();
          break;
        case 38:
          guerrier.moveTop();
          break;
        case 39:
          guerrier.moveRight();
          break;
        case 40:
          guerrier.moveBottom();
          break;
      }
      getstyleborder(magetitle);
      imgguerrier.style.zIndex = 0;
      onhand = 2;
      return false;
    }
    if (onhand == 2) {
      imgmage.style.zIndex = 1;
      switch (e.keyCode) {
        case 37:
          mage.moveLeft();
          break;
        case 38:
          mage.moveTop();
          break;
        case 39:
          mage.moveRight();
          break;
        case 40:
          mage.moveBottom();
          break;
      }
      getstyleborder(voleurtitle);
      imgmage.style.zIndex = 0;
      onhand = 3;
      return false;
    }
    if (onhand == 3) {
      imgvoleur.style.zIndex = 1;
      switch (e.keyCode) {
        case 37:
          voleur.moveLeft();
          break;
        case 38:
          voleur.moveTop();
          break;
        case 39:
          voleur.moveRight();
          break;
        case 40:
          voleur.moveBottom();
          break;
      }
      getstyleborder(guerriertitle);
      imgvoleur.style.zIndex = 0;
      onhand = 1;
      return false;
    }
  });
};
