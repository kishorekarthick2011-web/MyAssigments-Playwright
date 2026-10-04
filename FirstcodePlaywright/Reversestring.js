let str = "Testleaf";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str.charAt(i);
}
console.log(reversedStr);