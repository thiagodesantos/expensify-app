import firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // quando é removido um item no banco, o banco avisa
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // quando um item é alterado o banco avisa
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// // quando um item é adicionado o banco avisa, a primeira vez que executa traz todos os items
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });



// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses)
//     });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses)
//     });

// database.ref('expenses').push({
//     description: 'Aluguel',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
// });


//adicionando item a uma lista no firebase com id gerado pelo mesmo
// database.ref('notes').push({
//     title:'Cursos',
//     body: 'Tests, React native e outros'
// });

//fica 'ouvindo' o banco em caso de mudanças, não funciona com promise pois fica trazendo o resultado
//toda hora
// database.ref().on('value', (snapshot) => { 
//     console.log(snapshot.val());
// });

// // teste para ver se o database está 'ouvindo'
// setTimeout(() => {
//     database.ref('age').set(35);
// },3500);


// setTimeout(() => {
//     database.ref().off();
// },7000);

// setTimeout(() => {
//     database.ref('age').set(37);
// },10500);


////traz apenas uma vez os dados e não fica 'ouvindo'
// database.ref()
//     .once('value')
//     .then((snapshot) =>{
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Erro ao pegar os dados', e)
//     });

// database.ref().set({
//     name: 'Thiago Santos',
//     age: 31,
//     stressLeve: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Rio de Janeiro',
//         country: 'Brazil'
//     }
// }).then(() => {
//     console.log('Dados foram salvos');
// }).catch((e) => {
//     console.log('Ocorreu um erro.', e);
// });



// database.ref().update({
//     stressLeve: 9,
//     'job/company' : 'Amazon',
//     'location/city': 'São paulo'
// });

// //update de object nested
// database.ref().update({
//    job: 'Master of code',
//    'location/city': 'Curitiba'
// });


// database.ref()
//     .remove()
//     .then(() => {
//         console.log('o dado foi removido');
//     }).catch((e) => {
//         console.log('o dado nao foi removido', e);
//     })

//remove tambem mas não é tao claro para as pessoas em geral
//database.ref('isSingle').set(null);



//apaga tudo que tiver na raiz pois está sem referencia
//database.ref().set('esse é meu dado') 

// database.ref('age').set(40);
// database.ref('location/city').set('Taubate');

// database.ref('attributes').set({
//     weight: 98,
//     height: 197
// }).then(() => {
//     console.log('Segunda chamada deu certo');
// }).catch((e) => {
//     console.log('segunda chamada deu erro', e);
// });
