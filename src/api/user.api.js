import Faker from 'faker'
import { useReducer } from 'react'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms)) 

class User{
    constructor(){
        this.users = []
        this.__init()
    }

    // initializer
    __init(){
        for(let i = 0; i < 10; i++){
            let user = {}
            user.id = Faker.random.uuid()
            user.name = Faker.name.findName()
            user.email = Faker.internet.email()
            user.avater = Faker.internet.avatar()
            user.phone = Faker.phone.phoneNumber()

            this.users.push(user)
        }
    }

    async getUsers(ms){
        await delay(ms)
        return this.users
    }   
    
    async getUserById(id, ms){
        await delay(ms)
        const user = this.users.find(us => us.id === id)
        return user
    }

    async createUser(user, ms){
        await delay(ms)
        user.id = Faker.random.uuid()
        this.users.push(user)
        return user
    }

    async updateUserById(id, updateUser, ms) {
        await delay(ms)
        const index = this.users.findIndex(us => us.id === id)
        this.users[index] = { ...this.users, ...updateUser}
        return this.users[index]
    }

    async deleteUserById(id, ms){
        await delay(ms)
        const index = this.users.findIndex(us => us.id === id)
        this.users.splice(index, 1)
        return true
    }
}

export default new User()     