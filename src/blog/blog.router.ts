import "reflect-metadata";
import express, { Request, Response } from "express";
import Post, { Slug } from "./interfaces/post";
import BlogServices from "./services/blogService";
import { container } from "tsyringe";


export const blogRouter = express.Router();

blogRouter.get("/", async (req: Request, res: Response) => {
    const instance = container.resolve(BlogServices);
    const post: Post[] = await instance.GetAllPost();
    res.render('index',{post});
});

blogRouter.get<{slug:number}>('/post/:slug',(req,res)=>{
    console.log(req.params.slug);
    const post = { title: "<h1>Como Configurar Metricas a Typescript</h1>", html: "<p>hola<p>", markDown: "# hola", slug: "metric" }
    res.render('post',{post})
    
})
