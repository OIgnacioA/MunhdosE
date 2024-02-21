const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const sum = require('./sum');


// Nueva ruta para la ruta raíz "/"
router.get('/', (ctx, next) => {
  ctx.body = 'Welcome to the application!----Ejemplo de url a usar: http://localhost:3000/add/3/5';
});



router.get('/add/:a/:b', (ctx, next) => {
  const result = sum(parseFloat(ctx.params.a), parseFloat(ctx.params.b));
  return ctx.body = { result };
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.PORT || 3000);
