"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
(0, common_1.Injectable)();
class TodoService {
    getName() {
        return 'Hello Todo';
    }
    createTodo() {
        return 'I am created by akbor';
    }
}
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map