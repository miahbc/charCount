function charCount(str) {
    let arr = (str.split(''))
    // return arr
    let anArr = []
    for (i=0; i<arr.length; i++) {
        // console.log(arr[i])
        if (anArr.includes(arr[i]) == false) {
            // console.log(i)        
            anArr.push(arr[i])
        }
            // console.log(anArr)
    // return anArr
}
// return anArr
let a = []
for (let i=0; i<anArr.length; i++) {
    a.push([anArr[i]])
    a[i].push(+0)
}
// return a
// return a[0][0]
for (let i=0; i<arr.length; i++) {
    for (let j=0; j<a.length; j++) {
        if (arr[i] == a[j][0]) {
            a[j][1] = a[j][1] += 1
        }
    }  
}
return a
    }


// exports.charCount = function charCount()

// console.log(charCount("an apple a day will keep the doctor away"))
console.log(charCount("aaabbc"))