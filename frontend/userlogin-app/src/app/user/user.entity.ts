
// solving TypeScript Error
class IObjectKeys {
    [key: string]: string | number | boolean | undefined;
}

export class User extends IObjectKeys{
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public password!: string;
    public checkPassword!: string;
    public gender!: string;
    public edit!: boolean;
}

