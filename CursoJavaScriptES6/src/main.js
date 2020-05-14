///////////////////////////////////////////////
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr);

// //esse map vai percorrer pelo array e executar a funcao
// const newArr = arr.map(function (item, index) {
//     return item * index;
// });
// console.log(newArr);

// //reduce soma todos os itens da lista
// const sum = arr.reduce(function (total, next) {
//     return total + next;
// });
// console.log(sum);

// //procura na lista
// const filter = arr.filter(function (item) {
//     return item % 2 === 0;
// });
// console.log(filter)

// //procurar item
// const find = arr.find(function (item) {
//     return item === 4;
// })
// console.log(find)

/// const /////
// const usuario = { nome: "isa" }
// usuario.nome = "belli";
// console.log(usuario);

// function teste(x) {
//     let y = 3;
//     if (x < 5) {
//         let y = 4;
//         console.log(x, y);
//     }
// }
// teste(2);


/////////////////////////// static ////////////////////
// class Matematica {
//     //nao depende de outra infos só retorna
//     static soma(a, b) {
//         return a + b;
//     }

// }
// console.log(Matematica.soma(2, 3));


///////////////////////////////// herança ///////////////////////////////
// class List {
//     constructor() {
//         this.data = [];
//     }
//     add(data) {
//         this.data.push(data);
//         console.log(this.data)
//     }
// }
// class TodoList extends List {
//     constructor() {
//         //chama a classe pai
//         super();

//         this.usuario = "isa";
//     }
//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }
// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function () {
//     MinhaLista.add("novo todo");
// }
// MinhaLista.mostraUsuario();

///////////////////////////////// classe ///////////////////////////////////
// class TodoList {
//     //esse é para armazenar
//     constructor() {
//         this.todos = [];
//     }
//     //como se fosse a funcao, o que ele tem q fazer
//     addTodo() {
//         this.todos.push('Novo Todo');
//         console.log(this.todos);
//     }
// }
// const MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function () {
//     MinhaLista.addTodo();
// }

/////////////////////////////////// Arrow function     ////////////////////////
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr);

// //arrow function, reduz o codigo da funcoes, mas usado quando tem so um parametro
// const newArr = arr.map(item => item * 2);

// const teste = () => ({ nome: "isa" });

// console.log(teste());

//////////////////valores padrao ////////////////////

//ao inves de usar função normal
// const soma = (a = 3, b = 6) => a + b;
// console.log(soma(1));
// console.log(soma());

///////////////////////// desestruturaçao //////////////

// const usuario = {
//     nome: 'isa',
//     idade: 19,
//     endereco: {
//         cidade: 'sp',
//         estado: 'sp'
//     },
// };
// console.log(usuario);

//////////////////os inves de fazer isso
// const nome = usuario.nome;
// const idade = usuario.idade;
//////////////faz isso
// const { nome, idade, endereco: { cidade } } = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);
////////////// p/ parametros
// function mostraNome({ nome, idade }) {
//     console.log(nome, idade);
// }
// mostraNome(usuario);

////////////////// REST ///////////////////////////////////////////
// const usuario = {
//     nome: 'isabelli',
//     idade: 19,
//     empresa: 'creditas'
// }
// const { nome, ...resto } = usuario;
// console.log(nome);
// console.log(resto);

// const arr = [1, 2, 3, 4];
// const { a, b, ...c } = arr;
// console.log(a);
// console.log(b);
// console.log(c);

// function soma(a, b, ...params) {
//     // return params.reduce((total, next) => total + next);
//     return params;
// }
// console.log(soma(1, 2, 3));

///////////////////// SPREAD //////////////////////////////
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const usuario = {
//     nome: 'isa',
//     idade: 19,
//     empresa: 'ramp'
// }
// const usuario2 = { ...usuario, nome: "belli" };
// console.log(usuario2);

///////////////// template literals ////////////
// const nome = "isa";
// const idade = 19;
// console.log(` meu nome é ${nome} e tenho ${idade} anos`);

//////////////// sintaxe curta /////////////
// const nome = "isa";
// const idade = 19;
// const usuario = {
//     nome,
//     idade,
//     empresa: 'ramp'
// }
// console.log(usuario);


//////////////////////////////// WEBPACK //////////////////
//dps de instalar tudoo
/////////nome do local que ta export e a pagina js
//import { soma, divisao } from './funcoes';
////////importando o default, pode ser qualquer nome
//import soma from './soma';
//console.log(soma(1, 2));
//console.log(divisao(2, 2));

//////////////////////// Async  await ///////////////////////////////////
// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('OK') }, 2000);
// });
// // minhaPromise().then(response=>{
// //     console.log(response);
// // })
// // .cacth(err=>{

// // });
// async function executaPromise() {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());

// }
// //////se fosse com o then e cath seria assim
// // minhaPromise().then(response=>{
// //     console.log(response);
// //     minhaPromise().then(response=>{
// //         console.log(response);

// //     })
// //     minhaPromise().then(response=>{
// //         console.log(response);

// //     })
// //     minhaPromise().then(response=>{
// //         console.log(response);

// //     })
// // })
// // .cacth(err=>{

// // });
// executaPromise();

////////////////////////////////////// axios //////////////////////////////////////
// import axios from 'axios';
// class Api {
//     static async getUserInfo(username) {
//         //usa o try e catch caso de erro
//         try {
//             const response = await axios.get(`https://api.github.com/users/${username}`);
//             console.log(response);
//         } catch (err) {
//             console.warn('erro na api');
//         }
//     }
// }

// Api.getUserInfo('diego3g')

/////////////////////////////////////////////////////////// APLICAÇÃO EM ES6 //////////////////////////////////////////////////////////////////////////////
import api from './api';

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]')
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }
    //vai registrar os eventos
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }
    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode("carregando"));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }
    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
            return;

        this.setLoading();

        try {
            const response = await api.get(`/repos/${repoInput}`);

            const { name, description, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });
            this.inputEl.value = '';
            this.render();
        } catch (err) {
            alert("o repositorio nao existe");
        }
        this.setLoading(false);
    }

    render() {
        this.listEl.innerHTML = '';
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        })
    }
}

new App();