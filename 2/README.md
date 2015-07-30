# Задание 2
---
> Дан шарик (данный код менять не следует):

Balloon = { 

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
> Создайте два шарика таких, чтобы давление (pressure) в первом росло на 2 единицы, давление во втором росло бы на 3 единицы. При этом размер (size) обоих шариков бы менялся на 4 единицы.

---

