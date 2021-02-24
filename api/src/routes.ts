import { Router } from 'express'
import { UserController } from './controllers/UsersController'

const router = Router()

const userController = new UserController()

/*
    GET    : Pegar
    POST   : Criar
    PUT    : Atualizar
    DELETE : Deletar
    PATCH  : Atualização especifica
*/

router.post("/users", userController.create)

export {router}
