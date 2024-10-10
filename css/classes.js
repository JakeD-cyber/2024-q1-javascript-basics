//@ts-check

class Cheese {
    constructior(type) { 
        this.type = type;
        this.color = "yellow";
        this.age = 0;
        this.cost = 0.0;
    }

       eat() {
        console.log(`Nom nom nom ${this.type} is yummy!`);
       }

}

       let cheddar = new Cheese("Milk");
       let swiss = new Cheese("Butter");
       swiss.color = "white";

let choclate = new Cheese("Choclate");

butter.eat();
choclate.eat();