class Car{
    constructor(brand,color){
        this.brand=brand;
        this.color=color;
    }
}
const vehicle=new Car("Audi","black");
console.log(vehicle.brand)


class Account{
    constructor(name,accno,balance){
        this.name=name;
        this.accno=accno;
        this.balance=balance;
    }
    getbalance(){
        return `Balance amount is:Rs${this.balance}`;
    }
}
var Infa=new Account("Infa","xxx123",200000);
var Innu=new Account("Innu","xxx456",2000);
var Infant=new Account("Infant","xxx789",20000000);
console.log(Infa.getbalance());