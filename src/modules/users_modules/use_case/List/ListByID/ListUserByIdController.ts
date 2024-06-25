import { Request , Response } from "express"
import { ListUserByIdUseCase } from "./ListUserByIdUseCase"



class ListUserByIdController{

    constructor(private listUserByIdUseCase: ListUserByIdUseCase){

    }
    async handle(request:Request , response:Response):Promise<Response>{
     const user = await this.listUserByIdUseCase.execute(request.params.id)
        return response.status(200).json(user)
    }
}

export { ListUserByIdController }