class Car{
    constructor(x,y,src='https://clck.ru/SVeyN'){
        this.x = x;
        this.y = y;
        this.img = src;
    }
    drawCar=()=>{
        let carHtml = document.getElementsByClassName(this.img)[0]
        if(!carHtml){
            carHtml=document.createElement('img')
            carHtml.className = this.img
            carHtml.src =this.img
            carHtml.style.position = 'absolute'
            carHtml.width = '300px'
            document.querySelector('.container').appendChild(carHtml)
        }
        carHtml.style.top = this.y+'px'
        carHtml.style.left = this.x+'px'
    }
    moveRight=(v=5)=>{
        this.x+=v
        this.drawCar()
    }
}
const tesla = new Car(10,20)
tesla.drawCar()
document.addEventListener('keydown', (e)=>{if (e.key==='ArrowRight'){tesla.moveRight(1)}})