import {http} from "../service/http-common.service";

export class UserService {
     SignIn(email,password){
        return http.get(`user/sign-in/${email}/${password}`)
    }

    SignUp(user){
        return http.post('user/sign-up',user)
    }

    GetUserByEmail(email){
        return http.get(`user/email/${email}`)
    }
}