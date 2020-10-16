import { IUserFacade  } from '../Ports/in/Facade'



export default class UserFacade extends IUserFacade{ 
    
    constructor(userRepository){

        super()
        let _userRepository = userRepository
        this.userRepository = () => _userRepository
        this.setUserRepository = (userRepository) => { _userRepository = userRepository }
 
        Object.freeze(this)
    }

    add(userInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    update(userInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    delete(userId) {
        return Promise.reject(new Error('not implemented'));
    }

    getById(userId) {
        // repo.find({username: '', passworod: ''})
        return Promise.reject(new Error('not implemented'));
    }

    getByEmail(email) {
        return Promise.reject(new Error('not implemented'));
    }
    getByUsername(username) {
        return this.userRepository().getByUsername(username);
    }
    
    find(inputs){

        // ! implement it after we've done everything
        // if(Object.keys(inputs).length == 0) this.getAll()
        // if(Object.keys(inputs).length == 1) 
        return Promise.reject(new Error('not implemented'));
    }
    getAll() {
        return Promise.reject(new Error('not implemented'));
    }

    addRoom(userInstance, room) {
        return Promise.reject(new Error('not implemented'));
    }
}