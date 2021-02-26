import { Router } from 'express'
import { SendMailController } from './controllers/SendMailController'
import { SurveysController } from './controllers/SurveysController'
import { UserController } from './controllers/UsersController'

const router = Router()

const userController = new UserController()
const surveyController = new SurveysController()
const sendMailController = new SendMailController()

/*
    GET    : Pegar
    POST   : Criar
    PUT    : Atualizar
    DELETE : Deletar
    PATCH  : Atualização especifica
*/

router.post("/users", userController.create)

router.post("/surveys", surveyController.create)
router.get("/surveys", surveyController.show)

router.post("/sendMail", sendMailController.execute)

export {router}
