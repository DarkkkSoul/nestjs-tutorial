import { Body, Controller, Get, Param, Patch, Post, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
   @Get()
   findAll(): string {
      return "This function returns detils of users"
   }

   @Get(':id')
   findOne(@Param('id') id: string) {
      return `Giving details of user ${id}`
   }

   @Post()
   create(@Body() user: {}) {
      return user
   }

   @Patch(':id')
   update(@Param('id') id: string, @Body() updatedUser: {}) {
      return { id, ...updatedUser }
   }

   @Delete(':id')
   delete(@Param('id') id: string) {
      return `Delete user ${id}`
   }
}