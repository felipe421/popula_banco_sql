/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ProdutosController from '../app/controllers/produtos_controller.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/nome', async () => {
  return {
    nome: 'felipe',
  }
})

router.resource('/produto ', ProdutosController).apiOnly()
