import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TodosDocument = HydratedDocument<Todos>

@Schema()
export class Todos {
    @Prop()
    title: string

    @Prop()
    description: string

    @Prop()
    isCompleted: boolean
}

export const TodosSchema = SchemaFactory.createForClass(Todos)
