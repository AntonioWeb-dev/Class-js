// const a = "antonio"
// const b = 22;
// const d = false;
// const c = [22];

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);

// interface IUser {
//     name: string
//     idade: number
// } // Um tipo definido

// type TUser = { 
//     name: string
//     idade: number
//  }

//  function getNameUser(user: IUser) {
//     // console.log(user.cidade)
//     console.log(user.name)
//  }

//  function getNameUserByType(user: TUser) {
//     // console.log(user.cidade)
//     console.log(user.name)
//  }

//  getNameUserByType({ name: "antonio", idade: 22 })

interface IDocument {
    document: string
    typeDocument: string
}

interface IUser {
    nome: string
    idade: number
    email: string
    senha: string
    doc?: IDocument
}


// Função para adicionar users ao array
const usersFIltrados: IUser[] = [];

function addUser(usuario: IUser): void {
    usersFIltrados.push(usuario)
}

function validatorEmail(email: string): boolean {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
}

function maiorDeIdade(idade: number): boolean {
    return idade >= 18
}

function mockRequestAPI(): { items: IUser[], page: number, perPage: number } {
    return {
      items: [
        { nome: 'João Silva', idade: 8, email: 'joao.silva@example.com', senha: 'senha123' },
        { nome: 'Maria Oliveira', idade: 34, email: 'maria.oliveira@example.com', senha: 'qwerty456' },
        { nome: 'Carlos Pereira', idade: 15, email: 'carlos.pereira@example.com', senha: 'abc12345' },
        { nome: 'Ana Souza', idade: 30, email: 'ana.souza@example.com', senha: 'senhaSegura1' },
        { nome: 'Pedro Costa', idade: 25, email: 'pample.com', senha: 'minhaSenha!' },
        { nome: 'Fernanda Lima', idade: 7, email: 'fernanda.lima@example.com', senha: 'passWord2' },
        { nome: 'Lucas Fernandes', idade: 31, email: 'lucas.fernandes@example.com', senha: 'senhaForte#' },
        { nome: 'Juliana Rocha', idade: 16, email: 'juliana.rocha@example.com', senha: 'rocha2025' },
        { nome: 'Rafael Martins', idade: 26, email: 'rafael.martinsle.com', senha: 'martins789' },
        { nome: 'Beatriz Santos', idade: 33, email: 'beatriz.santos@example.com', senha: 'santos000' }
      ],
      page: 1,
      perPage: 10
    };
  }

const handleUser = () =>  {
    const data = mockRequestAPI();
    const { items } = data;
    for (let user of items) {
        const isValidEmail = validatorEmail(user.email);
        const isValidAge = maiorDeIdade(user.idade);
        if (isValidAge === true && isValidEmail === true) {
            addUser(user);
        }
    }
    console.log(usersFIltrados)
}

handleUser()
/**
 * também implementar o campo location no user (esse campo deve conter cidade, estado e pais)
 * implementar alguns mocks de documentos sem GPT ( uns dois em users ta ok)
 * 
 * criar uma função de validate document, ela verifica o tipo de document só pode ser CPF ou RG
 * criar uma função de validação parao document, tamanho min 5 caracteres
 * e uma validação de pais apenas para BR
 * 
 * comando de execução npx ts-node fundamentals/tipagem.ts
 */