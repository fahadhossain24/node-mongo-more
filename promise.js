
const myPromise = new Promise((resolved, rejected) => {
    const data = []
    setTimeout(() => {
        data.push({ id: 1 })

        if (data.length === 0) {
            rejected('something wents wrong')
        } else {
            resolved({id: 1})
        }
    }, 1000)


})


//consumen promise
myPromise
    .then(res => console.log('from then', res))
    .catch(err => console.log('from catch', err))



// handle multiple promise

const userId = [1, 5, 3 , 9, 5];
const userInfo = [];

for(let i of userId){
    const id = i;
    userInfo.push(myPromise)
}

Promise.all(userInfo).then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})


// handle promise with async await

async function getData() {
    const res = await myPromise;
    console.log(res)
}
getData()





