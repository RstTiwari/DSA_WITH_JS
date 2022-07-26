/*Lo arrabmh ho subARRAMBH MANGAL BELLA AAI"
"sapno ke dehlij pe baaje hai sehnai ehnai "*/

//Big-O Notation Primer

/**The Big-O notation measures the worst-case complexity of an algorithm ,if 
  n is input of function and it approches infinity */

/** see the graph in text book , for O(n) time and input will
  remain Constant O(n*2) , O(n*3) are quadratic and cubic O notaion */

function linear (n){
    console.log('jddjj')
    for(let i = 0 ; i < n ; i++){
            console.log(i)
            for(let j = i ; j < n ; j++){
                console.log(j)
            }
    }
}

function quadratic (n){
    console.log('jddjj')
    for(let i = 0 ; i < n ; i++){
            console.log(i)
            for(let j = i ; j < n ; j++){
                console.log(j)
            }
    }
}


function cubic (n){
    console.log('jddjj')
    for(let i = 0 ; i < n ; i++){
            console.log(i)
            for(let j = i ; j < n ; j++){
                console.log(j)
                for( let k = j ; k < n ; k++){
                    console.log(k)
                }
            }
    }
}

cubic(30)

// Rules for Big notation
// 1) Coefficent Rule =>
// 2) Sum Rule =>
// 3) Multilpe Rule =>
// 4) Trasient Rule =>