
// const Data = [
//     {
//         id: 1,
//         name: "HTML", 
//         year: 2020
//     },
//     {
//         id: 2,
//         name: "CSS", 
//         year: 2021
//     },
//     {
//         id: 3,
//         name: "JavaScript", 
//         year: 2022
//     }
// ]

// console.log(Data);

// Tìm hiểu về async/Await trong JavaScript

function getDataPromise(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    const data = JSON.parse(xhr.responseText)
                    resolve(data);
                } else {
                    reject("Lỗi rồi bạn ơi " + xhr.status);
                }
            }
        };

        xhr.send();
    });
}

// getDataPromise("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data) => {
//         console.log(data);

//         return getDataPromise(
//             "https://jsonplaceholder.typicode.com/users/" + data.userId
//         );
//     })
//     .then((author) => {
//         console.log(author.name);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

async function getData(){
    
    try {
        const data = await getDataPromise(
            "https://jsonplaceholder.typicode.com/posts/1"
        );
        console.log(data);
    
        const author = await getDataPromise(
            "https://jsonplaceholder.typicode.com/users/" + data.userId
        ); 
        console.log(author);    
        
    } catch (error) {
        console.log(error);
    }
}

getData();