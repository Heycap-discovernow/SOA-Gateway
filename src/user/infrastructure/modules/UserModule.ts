import { Module } from "@nestjs/common";

import { TransportModule } from "src/infrastructure/modules/TransportModule";
import { CreateContactController } from "src/user/infrastructure/adapters/controllers/CreateContact";
import { CreateUserController } from "src/user/infrastructure/adapters/controllers/CreateUserController";
import { LoginController } from "src/user/infrastructure/adapters/controllers/LoginController";

@Module({
    imports: [TransportModule],
    controllers: [CreateUserController, CreateContactController, LoginController]
})
export class UserModule{}