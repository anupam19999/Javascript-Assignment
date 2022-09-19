let a;
let date;
let time;
let t
t=setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString();
  document.getElementById('d').innerHTML = date
  time = a.getHours() + ' :' + a.getMinutes() + ' :' + a.getSeconds();
  document.getElementById('time').innerHTML = time
}, 1000);
clockstop=()=>{
  clearInterval(t)
}
clockstart=()=>{
  t=setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString();
    document.getElementById('d').innerHTML = date
    time = a.getHours() + ' :' + a.getMinutes() + ' :' + a.getSeconds();
    document.getElementById('time').innerHTML = time
  }, 1000);
}