// Inserting element into array 

const data = [10, 20, 30, 40, 50, 60, 70]
const newArray = []

const insertionElement = (position, element) => {
    console.log("Data Before : ", data)


    for (let i = data.length - 1; i >= 0; i--) {
        if (i >= position) {
            data[i + 1] = data[i]
            console.log("Data Array : ", data)
            if (i === position) {
                data[i] = element
                break
            }


        }
    }
    console.log("Data After : ", data)
}

const insertionElementMethod2 = (position, element) => {
   
    for (let i = 0; i <= data.length - 1; i++) {
        if (i === position) {
            newArray.push(element)
        }
        newArray.push(data[i])

    }

    console.log("Array Data : ", newArray)
}

const insertionElementMethod3 = (position, element)=>{
    data.splice(position, 0, element)

    console.log("Array Data : ", data)
}

// insertionElement(2, 300)
// insertionElementMethod2(2, 400)
insertionElementMethod3(2,90)