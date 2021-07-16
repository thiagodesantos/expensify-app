const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name:'atlas',
        //     age:30
        // });
        reject('Algo deu errado');
    }, 1500);    
});

console.log('antes');

promise.then((data) => {
    console.log('1',data);

    return 'algum dado';
}).then( (str) => {
    console.log('Isso roda?', str);
}).catch((error) => {
    console.log(error);
});

console.log('depois');