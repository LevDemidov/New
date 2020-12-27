class Car {
    constructor(x, y, src='https://clck.ru/SVeyN') {
    constructor(x, y, src = 'https://clck.ru/SVeyN') {
        this.x = x;
        this.y = y;
        this.img = src;
    }
    drawCar = () => {
        let carHtml=document.getElementsByClassName(this.img)[0]
        if(!carHtml){
            carHtml= document.createElement('img');
        let carHtml = document.getElementsByClassName(this.img)[0]
        if (!carHtml) {
            carHtml = document.createElement('img');
            carHtml.className = this.img
            carHtml.src = this.img
            carHtml.style.position = "absolute";
            carHtml.style.width='300px'
            carHtml.style.width = '300px'
            document.querySelector('.container').appendChild(carHtml)
        }
        carHtml.style.left = this.x+'px'
        carHtml.style.top = this.y+'px'
        carHtml.style.left = this.x + 'px'
        carHtml.style.top = this.y + 'px'
    }
    moveRight=(v=5)=>{
        this.x+=v
    moveRight = (v = 5) => {
        this.x += v
        this.drawCar()
    }

}
const tesla  = new Car(10, 20)

const ferrari = new Car(10, 20, 'https://clck.ru/SVeyk')
const ford = new Car(10, 300, 'https://clck.ru/SVezy')

ferrari.drawCar()
ford.drawCar()
setInterval(()=>{tesla.moveRight(1)},10)
document.addEventListener('keydown', (e)=>{if (e.key==='ArrowRight'){ford.moveRight(10)}}) 
const startFord = setInterval(() => { ford.moveRight(1) }, 10)
document.getElementsByClassName('https://clck.ru/SVezy')[0].onclick = () => { clearInterval(startFord) }
document.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') { ferrari.moveRight(1) } }) 