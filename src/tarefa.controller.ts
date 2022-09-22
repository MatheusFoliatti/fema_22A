import { Body, Controller, Get, Put, Param } from "@nestjs/common";

@Controller()
export class TarefaController {
    tarefaLista = [];
    @Get('/tarefa') 
    listaTarefa() {
        return this.tarefaLista
    }
    @Get('/tarefa/:id')
    adicionaUmaTarefa(@Param() params) {
        console.log('Params', params) 
        return {nome:'tarefa 02'}
    }

    @Put('tarefa')
    receberTarefa(@Body() tarefa) {
        tarefa.id = Math.random().toString(36)
        console.log('params ' , tarefa)
        this.tarefaLista.push(tarefa)
        return this.tarefaLista
    }
}