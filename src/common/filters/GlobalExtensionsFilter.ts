import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class GlobalExtensionsFilter implements ExceptionFilter {
    private readonly logger = new Logger(GlobalExtensionsFilter.name);

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const status = exception.getStatus();
        const message = exception.getResponse();

        this.logger.error(`${request.method} ${request.url} ${status} ${message}`);

        response.status(status).json({
            statusCode: status,
            message: message,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
        
    }
}
