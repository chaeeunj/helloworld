const colck = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  colck.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

getClock();
setInterval(getClock, 1000);
