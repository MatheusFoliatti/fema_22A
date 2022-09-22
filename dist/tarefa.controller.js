"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefaController = void 0;
const common_1 = require("@nestjs/common");
let TarefaController = class TarefaController {
    constructor() {
        this.tarefaList = [];
    }
    listaTarefa() {
        console.log('this.tarefaList ', this.tarefaList);
        return this.tarefaList;
    }
    apenasUmaTarefa(params) {
        console.log('params', params.id);
        return { nome: 'Tarefa 02' };
    }
    receberTarefa(tarefa) {
        console.log('tarefa', tarefa);
        tarefa.id = Math.random().toString(36);
        this.tarefaList.push(tarefa);
        return tarefa;
    }
};
__decorate([
    (0, common_1.Get)('tarefa'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TarefaController.prototype, "listaTarefa", null);
__decorate([
    (0, common_1.Get)('tarefa/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TarefaController.prototype, "apenasUmaTarefa", null);
__decorate([
    (0, common_1.Put)('tarefa'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TarefaController.prototype, "receberTarefa", null);
TarefaController = __decorate([
    (0, common_1.Controller)()
], TarefaController);
exports.TarefaController = TarefaController;
//# sourceMappingURL=tarefa.controller.js.map