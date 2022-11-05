class Pizza {
    constructor() {
        this.tomate = false;
        this.queso = false;
        this.masafina = false;
        this.anana = false;
        this.bacon = false;
        this.otrosIngredientes = [];
    }

    setTomate() {
        this.tomate = true;
        return this;
    }
    setQueso() {
        this.queso = true;
        return this;
    }
    setMasafina() {
        this.masafina = true;
        return this;
    }
    setAnana() {
        this.anana = true;
        return this;
    }
    setBacon() {
        this.bacon = true;
        return this;
    }
    addOtrosIngredientes(ingredientes) {
        this.otrosIngredientes.push(ingredientes);
        return this;
    }

    build() {
        return {
            tomate: this.tomate,
            queso: this.queso,
            masafina: this.masafina,
            anana: this.anana,
            bacon: this.bacon,
            otrosIngredientes: this.otrosIngredientes,
        };
    }
}

let pizza = new Pizza().build();

let pizzaConAnana = new Pizza().setTomate().setAnana().build();

let pizzaConQuesoYSalame = new Pizza().setTomate().setQueso().addOtrosIngredientes("Salame").build();

console.log(pizza);
console.log(pizzaConAnana);
console.log(pizzaConQuesoYSalame);
