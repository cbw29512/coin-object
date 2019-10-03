const coin = {
  state: 0,
  flip: function() {
    this.state = Math.floor(Math.random() * 2);
    return this.state;
  },

  toString: function() {
    if (this.state === 0) return "Heads, ";
    else return "Tails, ";
  },

  toHTML: function() {
    const image = document.createElement("img");
    if (this.state === 0) image.src = "images/yescoinNB.png";
    else image.src = "images/nocoinNB.png";
    return image;
  }
};

function display20Flips() {
  for (flips = 0; flips < 20; flips++) {
    coin.flip();
    let flipResult = document.createElement("span");
    flipResult.textContent = coin.toString();
    document.body.appendChild(flipResult);
  }
};

function display20Images() {
  for (display = 0; display < 20; display++) {
    coin.flip();
    let displayHtml = coin.toHTML();
    document.body.appendChild(displayHtml);
  }
};

function refreshPage() {
  window.location.reload();
};

display20Flips();
display20Images();
