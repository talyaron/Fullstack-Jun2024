import { Post } from './postModel';

type User = {
    userName: string;
    id : string;
    email: string;
    password: string;
    phoneNumber?: string;
    posts: Post[];
};


export const users: User[] = [];