// Delete Element into array.

let data = [10,20,30,40,50,60]

const deleteElementInArray = (position)=>{
    // console.log("Data Before : ", data)
    for(let i = position; i <= data.length - 1; i++){
        data[i] = data[i + 1]
    }
    data.length = data.length - 1
    console.log("Data After : ", data)
}

deleteElementInArray(3)

