import { Schema, model, Document } from 'mongoose';
import { IOrder } from '../interfaces/order.interface';


const orderSchema: Schema<IOrder> = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    order_date: { type: Date, required: true },
    total_amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered', 'canceled'], required: true },
    shipping_address: { type: String, required: true },
  },
  { timestamps: true }
);

export const Order = model<IOrder>('Order', orderSchema);
