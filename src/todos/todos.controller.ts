import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

    @Delete('/remove/:id')
    todosDelete(@Param('id') id){
        return this.service.todosDelete(id)
    }

    @Put('/update/:id')
    todosUpdate(@Param('id') id, @Body() todos: Todo){
        return this.service.todosUpdate(id, todos)
    }

}
