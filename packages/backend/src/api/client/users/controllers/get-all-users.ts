import { BaseGetController } from '@/common/bases/controller';
import {
  ApiController,
  ApiControllerMethod
} from '@/common/decorators/controller.decorator';
import { Dependency } from '@/common/di';
import { HttpStatus } from '@/common/http';
import type { ApiRequestContext } from '@/common/interfaces/controller';
import { inject, injectable } from 'inversify';
import { GetUsersService } from '../services/get-users.service';
import { LoginRequired } from '@/common/decorators/login-required.decorator';

@injectable()
@Dependency()
@ApiController()
export class GetAllUsersController extends BaseGetController {
  @inject(GetUsersService) private getUsersService: GetUsersService;

  @ApiControllerMethod({
    paginate: true
  })
  @LoginRequired('users:list')
  async get({ res, pagination, user }: ApiRequestContext) {
    console.log({ user });

    const users = await this.getUsersService.get(pagination);

    return res.status(HttpStatus.OK).json(users);
  }
}
