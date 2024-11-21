import { ArgumentMetadata, BadRequestException, Injectable, ValidationPipe } from '@nestjs/common';

@Injectable()
export class ValidateInputPipe extends ValidationPipe {

  async transform(value: unknown, metadata: ArgumentMetadata): Promise<unknown> {
    try {
      return await super.transform(value, metadata);
    } catch (e) {
      if (e instanceof BadRequestException) {
        const messages: unknown = e.getResponse()['message'];

        if (messages) {
          throw new BadRequestException({
            message: messages[0],
            messages: messages,
          });
        } else {
          throw e;
        }
      }
    }
  }
}
