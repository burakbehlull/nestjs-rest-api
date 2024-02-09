import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todos, TodosDocument } from './schemas/todos.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodosService {
    constructor(@InjectModel(Todos.name) private todoModel:Model<TodosDocument>) {

    }

    async todosGetAll(){
        return await this.todoModel.find({})
    }

    async todosGetOne(id){
        return await this.todoModel.findById(id)
    }

    async todosAdd(values){
        const todos = new this.todoModel(values)
        return todos.save()
    }
    async todosDelete(id){
        return await this.todoModel.deleteOne({_id:id})
    }
}
