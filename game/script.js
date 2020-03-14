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
  let errormessage = document.querySelector(".errormessage");

  const Personnage = function(puissance, defense, name, image) {
    this.levelLife = 100;
    this.puissance = puissance;
    this.defense = defense;
    this.name = name;
    this.image = image;
    this.collision = false;

    this.coup1 = function(victime) {
      return (victime.levelLife =
        victime.levelLife - this.puissance + victime.defense);
    };

    this.coup2 = function(victime) {
      return (victime.levelLife =
        victime.levelLife - this.puissance * 2 + victime.defense);
    };

    this.coup3 = function(victime) {
      return (victime.levelLife =
        victime.levelLife - this.puissance * 3 + victime.defense);
    };

    this.errorMessage = function() {
      errormessage.textContent = "Mouvement non autorisée";
      return false;
    };

    this.detectCollisionTop = function(arr) {
      // write all case possible
      //move top
      this.collision = false;
      arr.forEach(e => {
        if (
          this.image.getBoundingClientRect().top >
            e.image.getBoundingClientRect().bottom &&
          this.image.getBoundingClientRect().left <
            e.image.getBoundingClientRect().right &&
          this.image.getBoundingClientRect().right >
            e.image.getBoundingClientRect().left
        ) {
          if (
            this.image.getBoundingClientRect().top - 100 <
            e.image.getBoundingClientRect().bottom
          ) {
            console.log("collision top ", this.name, " avec ", e.name);
            return (this.collision = true);
          }
        }
      });
    };

    this.detectCollisionBottom = function(arr) {
      // write all case possible
      //move bottom
      this.collision = false;
      arr.forEach(e => {
        if (
          this.image.getBoundingClientRect().bottom <
            e.image.getBoundingClientRect().top &&
          this.image.getBoundingClientRect().left <
            e.image.getBoundingClientRect().right &&
          this.image.getBoundingClientRect().right >
            e.image.getBoundingClientRect().left
        ) {
          if (
            this.image.getBoundingClientRect().bottom + 100 >
            e.image.getBoundingClientRect().top
          ) {
            console.log("collision bottom", this.name, " avec ", e.name);
            return (this.collision = true);
          }
        }
      });
    };

    this.detectCollisionLeft = function(arr) {
      // write all case possible
      //move left
      this.collision = false;
      arr.forEach(e => {
        if (
          this.image.getBoundingClientRect().left >
            e.image.getBoundingClientRect().right &&
          this.image.getBoundingClientRect().top <
            e.image.getBoundingClientRect().bottom &&
          this.image.getBoundingClientRect().bottom >
            e.image.getBoundingClientRect().top
        ) {
          if (
            this.image.getBoundingClientRect().left - 100 <
            e.image.getBoundingClientRect().right
          ) {
            console.log("collision left", this.name, " avec ", e.name);
            return (this.collision = true);
          }
        }
      });
    };

    this.detectCollisionRight = function(arr) {
      // write all case possible
      //move right
      this.collision = false;
      arr.forEach(e => {
        if (
          this.image.getBoundingClientRect().right <
            e.image.getBoundingClientRect().left &&
          this.image.getBoundingClientRect().top <
            e.image.getBoundingClientRect().bottom &&
          this.image.getBoundingClientRect().bottom >
            e.image.getBoundingClientRect().top
        ) {
          if (
            this.image.getBoundingClientRect().right + 100 >
            e.image.getBoundingClientRect().left
          ) {
            console.log("collision right", this.name, " avec ", e.name);
            return (this.collision = true);
          }
        }
      });
    };

    this.move = function(key, arr) {
      switch (key) {
        case 37:
          this.detectCollisionLeft(arr);
          return this.moveLeft();
        case 38:
          this.detectCollisionTop(arr);
          return this.moveTop();
        case 39:
          this.detectCollisionRight(arr);
          return this.moveRight();
        case 40:
          this.detectCollisionBottom(arr);
          return this.moveBottom();
      }
    };

    this.moveLeft = function() {
      if (this.image.offsetLeft - 100 < 0 || this.collision)
        return this.errorMessage();
      return (this.image.style.left = this.image.offsetLeft - 100 + "px");
    };

    this.moveTop = function() {
      if (
        this.image.offsetTop - 100 <
          bartitle.offsetTop + bartitle.offsetHeight ||
        this.collision
      )
        return this.errorMessage();
      return (this.image.style.top = this.image.offsetTop - 100 + "px");
    };

    this.moveRight = function() {
      if (
        this.image.offsetLeft + this.image.offsetWidth >
          window.innerWidth - 100 ||
        this.collision
      )
        return this.errorMessage();
      return (this.image.style.left = this.image.offsetLeft + 100 + "px");
    };

    this.moveBottom = function() {
      if (
        this.image.offsetTop + this.image.offsetHeight >
          window.innerHeight - 100 ||
        this.collision
      )
        return this.errorMessage();
      return (this.image.style.top = this.image.offsetTop + 100 + "px");
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

  let guerrier = new Personnage(8, 2, "Guerrier", imgguerrier);

  let mage = new Personnage(6, 5, "Mage", imgmage);

  let voleur = new Personnage(5, 7, "Voleur", imgvoleur);

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
      errormessage.textContent = " ";
      if (guerrier.move(e.keyCode, [mage, voleur])) {
        getstyleborder(magetitle);
        onhand = 2;
        return false;
      }
    }
    if (onhand == 2) {
      errormessage.textContent = " ";
      if (mage.move(e.keyCode, [guerrier, voleur])) {
        getstyleborder(voleurtitle);
        onhand = 3;
        return false;
      }
    }
    if (onhand == 3) {
      errormessage.textContent = " ";
      if (voleur.move(e.keyCode, [mage, guerrier])) {
        getstyleborder(guerriertitle);
        onhand = 1;
        return false;
      }
    }
  });
};
