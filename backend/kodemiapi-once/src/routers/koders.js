
const express = require('express')
const koders = require('../usecases/koders')

const authMiddlewares = require('../middlewares/auth')

const router = express.Router()

//router.use(auth)

router.get('/', authMiddlewares.auth, async (request, response) => {
  try {
    const allKoders = await koders.getAll()

    response.json({
      //siempre 3 keys (en respuestas satisfactorias):
      success: true,
      message: 'All koders',
      data: {
        koders: allKoders
      }
    })
  } catch (error){
    response.status(400)
    //igual a satisfactorio pero con error
    response.json({
      success: false,
      message: 'Error at "get all koders"',
      error: error.message
    })
  }
})


router.post('/', authMiddlewares.authRoles(['admin']), async (request, response) => {
  try{
    const koderCreated = await koders.create(request.body)
    response.json({
      success: true,
      message: 'koder created',
      data: {
        koder: koderCreated
      }
    })
  }catch (error){
    response.status(400)
    //igual a satisfactorio pero con error
    response.json({
      success: false,
      message: 'Error at "get all koders"',
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try{
    const { id } = request.params
    const kodedDeleted = await koders.deleteById(id)

    response.json({
      success: true,
      message: ' Koder deleted',
      data:{
        koder: kodedDeleted
      }
    })
  }catch (error){
    response.status(400)
    //igual a satisfactorio pero con error
    response.json({
      success: false,
      message: 'Error at "delete koder"',
      error: error.message
    })
  }
})

router.patch('/:id', async (request,response) => {
  try{
    const { id } = request.params
    const koderUpdated = await koders.updateById(id, request.body)
    response.json({
      success: true,
      message: 'koder updated',
      data: {
        koderUpdated
      }
    })

  } catch(error){
    response.status(400)
    response.json({
      success: false,
      message: 'Error at "patch"',
      error: error.message
    })
  }
})

module.exports = router
