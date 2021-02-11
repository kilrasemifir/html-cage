function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const updateCount = () => {
    const innerHtml = "<b>count: "+count+"</b>"
    const elem = document.getElementById("count");
    elem.innerHTML = innerHtml;
    document.querySelector("body").style.backgroundColor=getRandomColor();
}

var count = 0;

updateCount()
setInterval(()=>{
    count++;
    updateCount()
}, 10)


const onClick = () => {
    console.log("Whooo!")
    alert('Salut!!');
}

document.querySelector("img").onclick = onClick