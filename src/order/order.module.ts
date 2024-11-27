import { Order } from "src/entities/Order.entity";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductModule } from "src/product/product.module";


@Module({
    imports: [TypeOrmModule.forFeature([Order]), ProductModule],
    controllers: [OrderController],
    providers: [OrderService],
})

export class OrderModule{}