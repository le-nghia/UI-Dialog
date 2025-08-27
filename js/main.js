
// Gọi API song song với async/await sao cho hiệu quả
function callAPI(ms){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

async function getData(){

    console.time("Tổng thời gian chạy")

    const promise1 = callAPI(1000)
    const promise2 = callAPI(2000)

    await promise1;
    await promise2;

    console.timeEnd("Tổng thời gian chạy")
}

// gọi hàm sau khi đã định nghĩa
getData();