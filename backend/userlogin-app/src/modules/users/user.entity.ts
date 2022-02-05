import { Table, Column, Model, DataType, BeforeCreate, BeforeUpdate, DefaultScope } from 'sequelize-typescript';
const bcrypt = require('bcrypt')

@Table
@DefaultScope(() => ({
    attributes: { exclude: ['password'] },
}))
export class User extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastName: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.ENUM,
        values: ['male', 'female'],
        allowNull: false,
    })
    gender: string;

    // @BeforeUpdate
    @BeforeCreate
    private static async hashPassword(user:User) {
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password,salt);        
    }

    
}
 