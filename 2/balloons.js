'use strict';

// Объект исходного шарика
var Balloon = { 
    pressure:0, 
    size:0, 
    inflateSpeed:1,

    inflate: function() { 
        this.pressure += this.inflateSpeed; 
        this.increaseSize();
    }, 

    increaseSize: function(){ 
        this.size += 1; 
    }
}

// Конструктор наших кастомных шариков
function BigBalloon() {
    // Переопределяем основные значения чтобы не было коллизий с исходным шариком
    this.pressure = 0;
    this.size = 0;
}

// Наследуем свойства и методы в прототип от исходного шарика, дублируя объект
BigBalloon.prototype = Object.create(Balloon);
// Меняем скорость увеличения, которая по условию одинакова для кастомных шариков
BigBalloon.prototype.increaseSize = function(){ 
        this.size += 4; 
};

// Создаём кастомный шарик А и задаём ему скорость увеличения давления
var balloonA = new BigBalloon();
balloonA.inflateSpeed = 2;

// Создаём кастомный шарик В и задаём ему скорость увеличения давления
var balloonB = new BigBalloon();
balloonB.inflateSpeed = 3;