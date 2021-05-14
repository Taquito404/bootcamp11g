
const fs = require('fs')
const express = require('express')
const router = express.Router()


function getKodersFile() {
    const content = fs.readFileSync('koders.json', 'utf8')
    return JSON.parse(content)
}


router.get('/koders', async (request, response) => {
    const genderFilter = request.query.gender
    const countFilter = parseInt(request.query.count || 0)
    const jsonParsed = getKodersFile()

    let kodersData = null

    if (genderFilter) {
        kodersData = jsonParsed.koders.filter(koder => koder.gender === genderFilter)
    }

    if (countFilter) {
        const dataToFilter = kodersData || jsonParsed.koders
        kodersData = dataToFilter.splice(0, countFilter)
    }

    jsonParsed.koders = kodersData || jsonParsed.koders

    response.json(jsonParsed.koders)
})

router.get('/mentors', async (request, response) => {
    const jsonParsed = getKodersFile()

    response.json(jsonParsed.mentores)

})

router.post('/koders', (request, response) => {
    const name = request.body.name
    const gender = request.body.gender

    const newKoder = { name, gender }

    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content)

    json.koders.push(newKoder)

    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true
    })
})

router.post('/mentors', (request, response) => {
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

router.patch('/koders/:id', (request, response) => {
    request.params
    //console.log(request.params);
    const id = parseInt(request.params.id)
    const name = request.body.name

    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content)

    const newKoders = json.koders.reduce((koders, koderActual) => {
        if (id === koderActual.id) {
            koderActual.name = name
        }
        return [
            ...koders,
            koderActual
        ]
    }, [])

    json.koders = newKoders

    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true
    })
})

router.patch('/mentors/:id', (request, response) => {
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

router.get('/koders/:id', (request, response) => {
    const id = request.params.id

    console.log('query: ', request.query)

    const json = getKodersFile()

    const koderFound = json.koders.find(koder => koder.id == id)

    if (!koderFound) {
        response.status(404)
        response.json({
            success: false,
            message: 'koder not found :C'
        })
        return
    }

    response.json({
        success: true,
        message: 'koder found',
        data: {
            koder: koderFound
        }
    })
})

router.get('/mentors/:id', (request, response) => {
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


router.delete('/koders/:id', (request, response) => {
    const id = request.params.id
  
    const json = getKodersFile()
  
    const newKoders = json.koders.filter(koder => koder.id != id)
  
    json.koders = newKoders
  
    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')
  
    response.json({
      success: true
    })
  })

router.delete('/mentors/:id', (request, response) => {
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
