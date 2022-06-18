import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { TestService } from '../../../application/test.service';

@Controller('testAPI')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  default() {
    return 'testAPI here';
  }

  @Get('/:userId')
  @ApiOperation({
    summary: '유저 아이디로 로그 필터',
  })
  findByUserId(@Param('userId') userId: string) {
    return this.testService.findByUserId(userId);
  }
}
