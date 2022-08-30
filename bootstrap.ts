import express from "express";
import helmet from "helmet";
import { blogRouter } from "./src/blog/blog.router";
import { initIoc } from "./src/initIoc";
import { engine as hbs,  } from "express-handlebars";
import cors from 'cors';
import path from "path";


const PORT: number = 8000//parseInt(process.env.PORT as string, 10);
const app = express();
app.use(express.static('src/public'));



app.engine( 'hbs', hbs( { 
  extname: 'hbs', 
  defaultLayout: 'main', 
  layoutsDir: path.join(__dirname , '/src//views/layouts/'),
  partialsDir : __dirname+'/src/views/partials',
} ) );

app.set( 'view engine', 'hbs' );
app.set("views", path.join(__dirname, "/src/views"))

// app.engine('handlebars', engine({
// extname: 'hbs', 
//   defaultLayout: 'main', 
//   layoutsDir: __dirname + '/views/layouts/',
//   partialsDir: __dirname + '/views/partials/',
// }));
// app.set('view engine', 'handlebars');
// app.set("views", join(__dirname, "./src/views"));
app.use(cors())
app.use(helmet());
app.use(express.json());
app.use(initIoc)
//app.get('/',(_,res)=>{res.render('index')})
app.use('/',blogRouter)
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

