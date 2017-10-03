
import { Router, Request, Response } from 'express';


let router = Router();


/* GET home page. */

router.get('/', function (req: Request, res: Response, next) {
  // res.sendFile(path.join(__dirname, "../public", "indexpalo3.html"));
  res.render('index', { title: 'Picam 0' });
});

router.get(`/:name`, (req: Request, res: Response) => {
  // Extract the name from the request parameters
  let { name } = req.params;


  // Greet the given name
  res.render('greeter', { name: name });
});



export const index: Router = router;
