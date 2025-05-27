import { IUser } from "../interfaces/users.interface";

export const usersMock: IUser[] = [
    {
        "firstName": "Antonio",
        "email": "admin@gmail.com",
        "password": "123456",
        "age": 18,
        "createdAt": new Date(),
        "updatedAt": new Date(),
    }
]

export async function fetchUsers() {
    return usersMock;
}

export async function createUser(user: IUser) {
    usersMock.push(user);
    return user;
}