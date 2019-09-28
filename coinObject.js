const coin = {
    state: 0,
    flip: function() {
       this.state = Math.floor(Math.random() *2); 
    },
    toString: function() {
        if(this.state ===0)
            return"Heads";
        else
            return "Tails";
    },
    toHTML: function() {
        const image = document.createElement('img');
        if(this.state === 0)
            image.src = "images/nocoinNB.png"
        else
            image.src = "images/yescoinNB.png"    
        return image;
    }
};
function display20Flips() {
    const results = [];
    for (flips = 0; flips < 20; flips++) {
        coin.flip();
        let transform = coin.toString();
        results.push(transform);
        document.write(transform + ", ");
    }
    return results;
}
function display20Images() {
    const results = [];
    for (display = 0; display < 20; display++) {
        coin.flip();
        let displayHtml = coin.toHTML();
        document.body.appendChild(displayHtml);
    }
}

display20Flips();
display20Images();