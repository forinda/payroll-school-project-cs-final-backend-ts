import { BaseGetController } from '@/common/bases/controller';
import {
  ApiController,
  ApiControllerMethod
} from '@/common/decorators/controller.decorator';
import { Dependency } from '@/common/di';
import { HttpStatus } from '@/common/http';
import type { ApiRequestContext } from '@/common/interfaces/controller';
import { injectable } from 'inversify';

@injectable()
@Dependency()
@ApiController()
export class GetAllUsersController extends BaseGetController {
  @ApiControllerMethod({})
  async get({ res, query }: ApiRequestContext) {
    return res.status(HttpStatus.OK).json({ message: 'API works', query });
  }
}