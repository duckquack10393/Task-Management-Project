import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}
@Injectable()
export class UsersService {
    private readonly users: User[] = [{
        id: 1, firstName: 'Arush', lastName: 'Das', email: 'a', password: 'ulord123', role: 'SUPER_ADMIN'
    }]

    async findOne(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email);
    }
}
