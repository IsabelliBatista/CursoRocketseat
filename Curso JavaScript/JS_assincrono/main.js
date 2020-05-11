// //essa variavel vai ser possivel ir no ajax, ver o q tem no servidor
// var xhr = new XMLHttpRequest();
// //aparece la no network
// xhr.open('GET', 'https://api.github.com/users/diego3g');
// xhr.send(null);

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         console.log(JSON.parse(xhr.responseText));
//     }
// }

// var minhaPromisse = function () {
//     return new Promise(function (resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/diego3g');
//         xhr.send(null);
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));

//                 } else {
//                     reject('erro na requisição');
//                 }

//             }

//         }
//     });
// }
axios.get('https://api.github.com/users/diego3g')
    //vai retornar resposta de sucesso (200)
    .then(function (response) {
        console.log(response);
    })
    //erro
    .catch(function (error) {
        console.log(error);
    });