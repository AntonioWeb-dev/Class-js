import { fetchUsers } from "../mock/user.mock";

export async function getUsersUseCase() {
    const users = await fetchUsers();
    return users;
}