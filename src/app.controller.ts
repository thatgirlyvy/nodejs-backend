import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({
    description: 'Success',
    status: 200,
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/figure/triangle')
  getTriangle() {
    return {
      name: 'triangle',
      properties: ['base', 'sideA', 'sideB'],
      operations: {
        area: {
          formula: '0.5 * base * height',
        },
        perimeter: {
          formula: 'base + sideA + sideB',
        },
      },
    };
  }

  @Get('/figure/circle')
  getCircle() {
    return {
      name: 'circle',
      properties: ['radius'],
      operations: {
        area: {
          formula: 'radius*3.14*radius',
        },
        perimeter: {
          formula: '2*3.14*radius',
        },
      },
    };
  }

  @Get('/figure/rectangle')
  getRectangle() {
    return {
      name: 'rectangle',
      properties: ['length', 'width'],
      operations: {
        area: {
          formula: 'length*width',
        },
        perimeter: {
          formula: '(length + width) * 2',
        },
      },
    };
  }

  @Get('/figure/square')
  getSquare() {
    return {
      name: 'square',
      properties: ['side'],
      operations: {
        area: {
          formula: 'side * side',
        },
        perimeter: {
          formula: 'c * 4',
        },
      },
    };
  }
}
