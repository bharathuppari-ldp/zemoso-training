// const myPromise= new Promise((reslove,reject)=>{
//     setTimeout(()=>{
//         let x=false;
//         if(x){
//             reslove("True")
//         }
//         else{
//          reject("hello");
//         }
//     },1000);
// });
// // myPromise.then(result => {
// //   console.log(result);
// // });

// // async function getData() {
// //     return "Hello";
// // }
// // const data =getData();
// // console.log(data);

// myPromise.then((res)=> console.log(res))
// .catch((res)=> console.log(res));





// const myPromise = new Promise((resolve, reject) => {
//   let success = true;   // change this to true to see the success case

//   if (success) {
//     resolve("Operation succeeded!");
//   } else {
//     reject("Operation failed!");
//   }
// });

// myPromise
//   .then(result => {
//     console.log(result); // runs when resolve() is called
//   })
//   .catch(error => {
//     console.log(error);  // runs when reject() is called
//   });

// const p=new Promise((reslove,reject)=>{
//     setTimeout(()=>{
//         reslove("Promise Resloved");
//     },5000);
// });
// async function show(name) {
//     const val=await p;
//     console.log("hello",name);
//     console.log(val);
// }
// // console.log("start");
// show("Bharath");
// // console.log("End");
// // p.then(res=> console.log(res));



// const p = Promise.resolve(10);
// p.then(value => console.log(value));

// const p = Promise.reject("Error occurred!");
// p.catch(err => console.log(err));  // Error occurred!

Promise.all([
  Promise.resolve(10),
  Promise.resolve(20)
]).then(values => console.log(values));

Promise.all([
  Promise.resolve(10),
  Promise.reject("Failed!")
]).catch(err => console.log(err));  // Failed!


Promise.allSettled([
  Promise.resolve(10),
  Promise.reject("Error")
])
.then(result => console.log(result));

Promise.race([
  new Promise(res => setTimeout(() => res("Fast"), 1000)),
  new Promise(res => setTimeout(() => res("Slow"), 2000))
]).then(value => console.log(value));

Promise.any([
  Promise.reject("Bad"),
  Promise.resolve("Good")
]).then(value => console.log(value));

function step1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve(10);       
    }, 1000);
  });
}

function step2(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 2 completed");
      resolve(num + 20); 
    }, 1000);
  });
}

function step3(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 3 completed");
      resolve(num * 2);
    }, 1000);
  });
}

console.log("Start");

step1()
  .then(result1 => {
    console.log("Result from step1:", result1);
    return step2(result1); 
  })
  .then(result2 => {
    console.log("Result from step2:", result2);
    return step3(result2); 
  })
  .then(finalResult => {
    console.log("Final result:", finalResult);
  })
  .catch(err => {
    console.error("Error:", err);
  });

console.log("End");
