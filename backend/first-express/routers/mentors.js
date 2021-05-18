
const fs = require('fs')
const express = require('express')
const router = express.Router()

function getKodersFile() {
    const content = fs.readFileSync('koders.json', 'utf8')
    return JSON.parse(content)
}

router.get('/', async (request, response) => {
    const jsonParsed = getKodersFile()

    response.json(jsonParsed.mentores)

})

router.post('/', (request, response) => {
    const name = request.body.name
    const module = request.body.module

    const newMentor = { name, module }

    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content)

    json.mentores.push(newMentor)

    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true
    })
})

router.patch('/:id', (request, response) => {
    request.params
    const id = parseInt(request.params.id)
    const name = request.body.name

    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content)

    const newMentors = json.koders.reduce((mentores, mentorActual) => {
        if (id === mentorActual.id) {
            mentorActual.name = name
        }
        return [
            ...mentores,
            mentorActual
        ]
    }, [])

    json.mentores = newMentors

    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true
    })
})

router.get(':id', (request, response) => {
    const id = request.params.id

    console.log('query: ', request.query)

    const json = getKodersFile()

    const mentorFound = json.mentores.find(mentores => mentores.id == id)

    if (!mentorFound) {
        response.status(404)
        response.json({
            success: false,
            message: 'mentor not found :C'
        })
        return
    }

    response.json({
        success: true,
        message: 'mentor found',
        data: {
            koder: mentorFound
        }
    })
})

router.delete(':id', (request, response) => {
    const id = request.params.id

    const json = getKodersFile()

    const newMentors = json.mentores.filter(mentores => mentores.id != id)

    json.mentores = newMentors

    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true
    })
})

module.exports = router