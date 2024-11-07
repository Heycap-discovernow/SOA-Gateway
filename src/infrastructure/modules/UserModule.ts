import { Module } from "@nestjs/common";

import { TransportModule } from "src/infrastructure/modules/TransportModule";
import { CreateContactController } from "src/infrastructure/adapters/controllers/users/CreateContact";
import { CreateUserController } from "src/infrastructure/adapters/controllers/users/CreateUserController";
import { LoginController } from "src/infrastructure/adapters/controllers/users/LoginController";

@Module({
    imports: [TransportModule],
    controllers: [CreateUserController, CreateContactController, LoginController]
})
export class UserModule{}