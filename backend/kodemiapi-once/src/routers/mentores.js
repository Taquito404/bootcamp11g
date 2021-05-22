
const express = require('express')
const mentores = require('../usecases/mentores')

const router = express.Router()

router.get('/', async (request, response) => {
  try{
    const allMentors = await mentores.getAll()
    
    response.json({
      success: true,
      message: 'Todos los mentores',
      data: {
        mentores: allMentors
      }
    })
  }catch(error){
    response.status(400)
    response.json({
      success: false,
      message: 'No se han encontrado datos',
      data:{
        mentores: error
      }
    })
  }
})

router.post('/', async (request, response) => {
  try{
    const mentorCreated = await mentores.create(request.body)

    response.json({
      success:true,
      message: 'mentor creado',
      data: {
        mentores: mentorCreated
      }
    })
  } catch (error) {
    {
      response.status(400)
      response.json({
        success: false,
        message: 'No se puede crear el mentor',
        data:{
          error: error
        }
      })
    }
  }
})

router.delete('/:id', async (request,response) =>  {
  try{
    const { id } = request.params
    const mentorDeleted = await mentores.deleteById(id)

    response.json({
      success: true,
      message: ' El mentor ha sido eliminado con éxito',
      data:{
        mentores: mentorDeleted
      }
    })

  }catch(error) {
      response.status(400)
      response.json({
        success: false,
        message: 'No se puede eliminar',
        data:{
          error: error
        }
      })
    }
})

router.patch('/:id', async (request, response) => {
  try{
    const {id} = request.params
    const mentoresUpdated = await mentores.updateById(id, request.body)
    
    response.json({
      success: true,
      message: 'Se ha modificado con éxito',
      data: {
        mentores: mentoresUpdated
      }
    })
  }catch(error){
    response.status(400)
    response.json({
      success: false,
      message: 'No se puede eliminar',
      data:{
        error: error
      }
    })
  }
})

module.exports = router