const array =[2,2,2,2,4,6,4,3,4,4,3,4,4,4,7,7,7,7,7,7,7]

let obj = {}
for (const i of array) {
    obj[i] = obj[i] + 1 || 1
}
console.log(obj)