console.log("PROPERTY DECORATOR")

function formatNumber() {
    return function(target: Object, propertyKey: string) { 
        let value : string;

        const getter = function() {
            return value;
        };
    
        const setter = function (newVal: string) {
            value = newVal.padStart(5, "0")
        };

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        }); 
    }
}

class newID {
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id
    }
}

const newItem2 = new newID("1")

console.log(newItem2.id)
