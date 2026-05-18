// Order Status
export enum OrderStatus {
    PENDING = 'PENDING',
    PAID = 'PAID',
    FAILED = 'FAILED',
    SHIPPED = 'SHIPPED',
    CANCELLED = 'CANCELLED',
}

// Core entities
export interface OrderItem {
    productId: string;
    quantity: number;
    unitPrice: number;
}

export interface Order {
    id: string;
    customerId: string;
    items: OrderItem[];
    total: number;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
}

export interface Payment {
    id: string;
    orderId: string;
    amount: number;
    status: 'SUCCESS' | 'FAILED';
    paidAt?: Date;
}

//Events (for event-driven architecture)
export interface OrderCreatedEvent {
    type: 'ORDER_CREATED';
    payload: Order;
}

export interface OrderPaidEvent {
    type: 'ORDER_PAID';
    payload: { orderId: string; paymentId: string; paidAt?: Date;}
}

export interface OrderFailedEvent {
    type: 'ORDER_FAILED';
    payload: {orderId: string; reason: string;}
}

export type OrderEvent =
    | OrderCreatedEvent
    | OrderPaidEvent
    | OrderFailedEvent;