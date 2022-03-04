class Car{
    constructor(color){
        // this.brand=brand;
        this.color=color;
    }
    brandcolor(){
        return `I have a ${this.color} color car`;
    }
}

class Hyundai extends Car{
    constructor(color){
        super(color);
    }
    display(){
        return this.brandcolor();
    }
}

var child1=new Hyundai ("Red");
console.log(child1.brandcolor());