   const createUser = function(name, age) {
    return {
    name,
    age,
    toString: function() {
    return `${this.name} is
    ${this.age}y.o.`;
    },
    }
   }
   const users = [
    createUser("John", 21),
    createUser("Tory", 18),
    createUser("Kate", 23),
    createUser("Pete", 22),
   ]
//    users.sort((a,b) => a["age"] - b["age"]);

function bubbleSort(arr) {
    for (let i = 0; i < arr.length -1; i++) {
        for (let j = 0; j < arr.length - 1 -i; j++) {
            if (arr[j]["age"] > arr[j + 1]["age"]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

bubbleSort(users)


