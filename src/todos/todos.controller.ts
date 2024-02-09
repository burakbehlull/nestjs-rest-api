import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './dto/todo.dto';
@Controller('todos')
export class TodosController {
    constructor(private service:TodosService){}

    @Get("/")
    todosGetAll(){
        return this.service.todosGetAll()
    }

    @Post('/add')
    todosAdd(@Body() todos: Todo){
        return this.service.todosAdd(todos)
    }

    @Get('/one/:id')
    todosGetOne(@Param('id') id){
        console.log(id)
        return this.service.todosGetOne(id)
    }
}
