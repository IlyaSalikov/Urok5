let goRest = document.getElementById('rest');
let wrapper = document.querySelector('.wrapper');

if (goRest) {
    goRest.addEventListener("click", shuttingDown)
}

function displayNone() {
    wrapper.style.display = 'none';//эта нет
    //console.log(10+10) //эта строка сработает
}

function shuttingDown() {
    setTimeout(displayNone, 1000);
}

//В чём суть: пытаюсь фон кирпичной стены поменять на фон завершения работы
//валится на 9 строке, Uncaught TypeError: Cannot read property 'style' of null
//по ощущениям, всё перепробовал, что мог, если бы была проблема в html-файле (опечатки в классах или id-шниках),
//то не работала бы функция, но лог отрабатывает.