import pino from 'pino';

export interface LoggerOptions {
    service: string;
    level?: 'debug' | 'info' | 'warn' | 'error';
}


export function createLogger(options: LoggerOptions) {
    return pino({
        level: options.level ?? 'info',
        base: {
            service: options.service,
        },
        timestamp: pino.stdTimeFunctions.isoTime,
    })
}

export type Logger = ReturnType<typeof createLogger>;