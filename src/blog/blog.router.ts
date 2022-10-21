import "reflect-metadata";
import express, { Request, Response } from "express";
import Post, { Slug } from "./interfaces/post";
import BlogServices from "./services/blogService";
import { container } from "tsyringe";
import {marked} from 'marked';


export const blogRouter = express.Router();

blogRouter.get("/", async (req: Request, res: Response) => {
    const instance = container.resolve(BlogServices);
    const post: Post[] = await instance.GetAllPost();
    res.render('index',{post});
});

blogRouter.get<{slug:number}>('/post/:slug',(req,res)=>{
    console.log(marked.parse('## hi'));
    const post:Post = { title: "<h1>Como Configurar Metricas a Typescript</h1>", html:marked.parse('# hi') , markDown: "# hola", slug: "metric",date: new Intl.RelativeTimeFormat("es", { numeric: 'auto' }).format(-3, 'day') }
    res.render('post',{post})
    
})
