let arr = [56,78,90,23,90,76,43,56]

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) 
                if (arr[i] == arr[j]) {
            console.log("Duplicate element is: " + arr[i])
        }
    }        