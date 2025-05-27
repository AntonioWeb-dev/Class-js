import { getUsersUseCase } from "./useCases/getUsers.case";

async function main() {
    const users = await getUsersUseCase();
    console.log(users);


    /* 
        prox passos:
        criar um useCase que criar novos users
        criar um useCase que remove um user
        e realizar as chamadas na main
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
        
    */
}

main();

