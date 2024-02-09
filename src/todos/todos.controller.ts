import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.service';
@Controller('todos')
export class TodosController {
    constructor(private service:TodosService){}

    @Get("/")
    todosGetAll(){
        return this.service.todosGetAll()
    }
}
