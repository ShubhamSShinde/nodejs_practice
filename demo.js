// const abc= (a,b)=>{
//     return a+b;
// }

// console.log('the sum is' + abc(50,50))


// let arr =['shubham','manasi','pooja','shiva']
// for(let elements of arr){
//     console.log(`elemenst in arr : ${elements.length}`)
// }
// for (let i =0; i<arr.length ;i++){
//     console.log(arr[i])
// }

// arr.forEach((elements,index,array)=>{
//     // console.log(elements)
//     console.log(index,array
//         )

// })

// const obj1 = { foo: "bar", x: 42 };
// const obj2 = { foo: "baz", y: 13 };

// const clonedObj = { ...obj1 };
// // { foo: "bar", x: 42 }

// const mergedObj = { ...obj1, ...obj2 };
// console.log(clonedObj)
// console.log(mergedObj)

// function getThis() {
//     return this;
//   }
  
//   const obj1 = { name: "obj1" };
//   const obj2 = { name: "obj2" };
  
//   obj1.getThis = getThis;
//   obj2.getThis = getThis;
  
//   console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
//   console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
  
// let arr =['shubham','manasi','pooja','shiva']
// let c=arr.forEach((elements,index,array)=>{
//     return index
// })

// // let another_array = arr.map((elemets,index,aray)=>{
// // return index+10
// // })

// // console.log(another_array)
// console.log(c)

// let arr =['shubham','shubham','manasi','pooja','shiva']
// let arr1 =[10,10,2,4,4,54,2]
// let c= arr1.filter((ages)=>{
//     for(let i=0;i<arr1.length;i++){
//         if(arr1[i]===arr1[i+1]){
            
//         }
//     -1
//     return 
// })
// console.log(c)

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a,b)=>{
//     return b
// })
// console.log(points)

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var first = fruits.upShift();

// console.log(fruits); // Output: ["Orange", "Apple", "Mango"]
// console.log(first);  // Output: "Banana"

// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// // Removes the elements at index 1 and 2 and inserts "Lemon" at index 1
// fruits.splice(1, 2, "Lemon"); 

// // Output: ["Banana", "Lemon", "Mango"]

let d= [[25,3,4,6,7,10],[25,3,4,6,7,10]]
// let e = d.map((ele,index)=> ele*2).filter((a)=>a>10).reduce((accumulator,element,index)=>{
//     debugger;
//      return accumulator

    
// })
// let e =d.reduce((a,e,i)=>{
//     return a+e
// })
// console.log(new Date().toLocaleString())
// console.log(new Date().toString())
// console.log( Date().toString())
// console.log(typeof( new Date().toLocaleTimeString()))
// console.log( Date.now())

// console.log(new Date(2000,0,16,7,45,35,20).toLocaleTimeString())

// d=Math.ceil(125.5)
// console.log(d)
// f= Math.round(213.614);
// console.log(f)

// const today = new Date();
// const milliseconds = today.getMilliseconds();


// const bioDaata ={
//     myname:'shubham',
//     lastname:"shinde",
//     age:22,
//     bio : ()=>{
//         console.log(`my data is :
//         ${bioDaata.lastname} , 
//         ${bioDaata.myname} ,
//         ${bioDaata.age}`)
//     }
// }

// bioDaata.bio()
// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);
// console.log(obj);
// console.log(JSON.stringify(obj))

let a ='hello how are you guys?'

const first= ()=>{
    let b= 'hi i am fime what about you'
    // console.log(a+b)

    const second =()=>{
        var c =' \n yes i am about to fine kadakk  na bhai'
        console.log(a+b+c)
    }
    second();
    console.log(c)
}

first()