import {Express, Request, Response, NextFunction} from 'express';
import { container } from 'tsyringe';
import BlogServices from './blog/services/blogService';

// Your custom "middleware" function:
export  function  initIoc(req: Request, res: Response, next: NextFunction): void {
  
container.register(
    BlogServices, {
        useValue: new BlogServices()
    })
  next()
}
