// Array traversing in javascript

const data = [10,20,30,40,50,60,70,80]

const traversing = () =>{
    for(let i =0; i < data.length; i++){
        console.log(`Array of ${i} index is ${data[i]}`)
    }
}

// Access Element in Array using javascript 

const accessing = (elem) =>{

    if(elem > 0 && elem < data.length && typeof parseInt(elem) === "number"){

        console.log(`Array of ${elem} index is ${data[elem]}`)
    }else{
        console.log("Please enter the correct value")
    }
}

traversing()
accessing(3) // Under this function you need to enter a value for output.