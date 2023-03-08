class Vehicle {
    constructor(model){
      this.model = model;
      
    }
    drive(){
      return this.model + " " + "drives" 
    }
    
    
}

// Class 1
class Sedan extends Vehicle{
    constructor(model, backupCamera){
        super(model)
        this.backupCamera = backupCamera;
    }
}



class Suv extends Vehicle{
    constructor(model, offroadPackage){
        super(model)
        this.offroadPackage = offroadPackage;
    }
}

class Truck extends Vehicle{
    constructor(model, towingCapacity){
        super(model)
        this.towingCapacity = towingCapacity;
    }
}

// Class 2
class EVSedan extends Sedan {
    constructor (model, charge){
        super(model)
        this.charge = charge;
        }
    
        recharge(){
            return this.model + " " + "recharges";
        }
}