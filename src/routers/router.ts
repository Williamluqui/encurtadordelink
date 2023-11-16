import {UrlEncode} from "controller/UrlEncodeController"
import express,{ Request, Response, Application, Router  } from "express"
const app = express()
export class UrlTeste {
    public async rota (){
        app.get('/')
    }
}


// const routersUrlApp = () => {
//         const app = Router()   
//         app.get('/cut')
//     return app
// };
// export default routersUrlApp;