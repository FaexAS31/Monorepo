export const config = {
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379', 10),
    },
    rabbitmq: {
        url: process.env.RABBIT_URL || 'amqp://guest:guest@localhost:5672',
    },
    kafka:{
        brokers: (process.env.KAFKA_BROKERS ?? 'localhost:9092').split(',')
    },
    services:{
        orderService: {
            grcpPort: parseInt(process.env.ORDER_SERVICE_GRPC_PORT ?? '50051', 10),
            tcpPort: parseInt(process.env.ORDER_SERVICE_TCP_PORT ?? '4000', 10),
        }
    }
} as const;