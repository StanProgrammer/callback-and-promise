console.log('person1: shows ticket')
console.log('person2: shows ticket')

const preMovie=async()=>{
    try{
    const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    });
    const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`))
    // const getCandy=new Promise((resolve,reject)=>resolve(`candy`))
    // const getCoke=new Promise((resolve,reject)=>resolve(`coke`))
    const addButter=new Promise((resolve,reject)=>resolve(`butter`))
    const getColdDrinks=new Promise((resolve,reject)=>resolve(`colddrinks`))

    let tickets=await promiseWifeBringingTicks

    console.log(`wife: I have ${tickets}`)
    // console.log(`wife: I have tickets`)
    console.log(`husband: should we go in`)
    console.log(`wife: no I am hungry`)

    let popcorn=await getPopcorn;
    console.log(`husband: i got some ${popcorn}`)
    // console.log(`husband: i got some popcorn`)
    console.log(`husband: should we go in`)
    console.log(`wife: no I need butter on my popcorn`)

    let butter=await addButter;

    console.log(`husband: i got some ${butter} on popcorn`)
    // console.log(`husband: i got some butter on popcorn`)
    console.log(`husband: anything else darling?`)
    console.log(`wife: I need colddrinks`)
    

    let colddrinks=await getColdDrinks;
    console.log(`husband: i got some ${colddrinks}`)
    // console.log(`husband: i got some colddrinks`)
    console.log(`husband: anything else darling?`)
    console.log(`wife: let's go we are getting late`)
    console.log(`husband: thank you for reminder`)

    // using promise.all 
    // let[popcorn,candy,coke]=await Promise.all([getPopcorn,getCandy,getCoke])
    // console.log(`${popcorn}, ${candy}, ${coke}`)
    return tickets
}catch(e){
    console.log(e)
}
}
preMovie().then((m)=>console.log(`person3: shows ${m}`))
console.log('person4: shows ticket')
console.log('person5: shows ticket')