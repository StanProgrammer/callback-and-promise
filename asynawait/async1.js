console.log('person1: shows ticket')
console.log('person2: shows ticket')

//using async
const tic=async()=>{
    try{
    const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    })
    const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`))
    const getButter=new Promise((resolve,reject)=>resolve(`butter`))
    let ticket=await promiseWifeBringingTicks
    console.log(`wife: I have ${ticket}`)
    console.log(`husband: should we go in`)
    console.log(`wife: no I am hungry`)

    let popcorn=await getPopcorn
    console.log(`husband: i got some ${popcorn}`)
    console.log(`husband: should we go in`)
    console.log(`wife: no I need butter on my popcorn`)

    let butter=await getButter
    console.log(`I got ${butter}`)
    let a=[ticket,popcorn,butter]
    return a
}
catch(e){
    console.log(e)
}
}
tic().then((a)=>console.log(`${a}`))

//using Promise 

// const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket')
//     },3000)
// })

// const getPopcorn=promiseWifeBringingTicks.then((t)=>{
//     console.log(`wife: I have tickets`)
//     console.log(`husband: should we go in`)
//     console.log(`wife: no I am hungry`)
//     return new Promise((resolve,reject)=>{resolve(`${t} popcorn`)})
// })
// const getButter=getPopcorn.then((t)=>{
//     console.log('husband: i got some popcorn')
//     console.log(`husband: should we go in`)
//     console.log(`wife: no I need butter on my popcorn`)
//     return new Promise((resolve,reject)=>{resolve(`${t} butter`)})
// })
// getButter.then((t)=>console.log(t))
// getPopcorn.then((t)=>{console.log(t)})
console.log('person4: shows ticket')
console.log('person5: shows ticket')