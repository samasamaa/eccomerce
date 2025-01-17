import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { CommonEntity } from "./Common.entity";
import { User } from "./User.entity";
import { OrderItem } from "./Orderitem.entity";

@Entity()
export class Order extends CommonEntity{

    @Column()
    address: string;

    @Column()
    postcode: string;

    @Column()
    phone: string;

    @Column('float')
    totalPrice: number;

    @ManyToOne( () => User, (user)=> user.orders)
    user: User;
    
    @OneToMany( () => OrderItem, (orderItem)=> orderItem.order, {onDelete: 'CASCADE', cascade: true})
    items: OrderItem[];
}