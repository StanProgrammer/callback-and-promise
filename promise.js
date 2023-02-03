const posts=[
    {title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post Two',body:'This is post two',createdAt:new Date().getTime()},
];

const user={
    name:'Atib',
    lastActivityTime:new Date()
}
// console.log(user.lastActivityTime)

let intervalId=0
function getPosts(){
    return new Promise((resolve,reject)=>{
        clearInterval(intervalId);
    setInterval(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title} created  ${(new Date().getTime()-post.createdAt)/1000} seconds Ago</li>`
        });
        document.body.innerHTML=output;
        resolve()
    },1000)
    })
    
}
function createPosts(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()})
            resolve(posts)
        },1000)
    })
    
}

function create4thPosts(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()})
            resolve()
        },3000)
    })
    
}
function deletePosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let len=posts.length
            posts.pop()
            if(len==0){
                return reject('Error Stack is Empty')
            }
            resolve()
        },1000)
    })
}
// 1st Section 
createPosts({title:'Post Three', body:'This is post three'})
.then(getPosts)
.then(deletePosts)
.then(getPosts)
.then(deletePosts)
.then(getPosts)
.then(deletePosts)
.then(getPosts)
.then(deletePosts)
.then(getPosts)
.then(deletePosts)
.catch((err)=>{
    console.log(err)
})

//Promise.all
const updateLastUserActivityTime=new Promise((resolve,reject)=>{
    a=user.lastActivityTime
    setTimeout(()=>{
        console.log('User Time Before Creating post 4',a)
        user.lastActivityTime=new Date()
        resolve(user.lastActivityTime)
    },1000) 
})

// 2nd Section
Promise.all([createPosts({title:'Post Four',body:'This is post four'}),updateLastUserActivityTime])
.then((a)=>{
    console.log('After Creating post Four')
    console.log('posts>>',a[0])
    console.log('User last Activity time',a[1])
})

