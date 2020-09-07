let Animals = function (name,weight) {
    this.name = name;
    this.weight = weight;
    this.setName = function (value) {
        this.name = value;
    }
    this.setWeight = function (number) {
        this.weight = number;
    }
    this.getName = function () {
        return this.name;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.toString = function () {
        let string ="";
        string+=this.getName()
        string+= this.getWeight();
        return string;
    }
}