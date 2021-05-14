

function construir(muro) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muro.construido = true

      if (muro.construido) {
        resolve(muro)
      } else {
        const error = new Error('No se pudo construir')
        reject(error)
      }

    }, 1000)
  })
}

function aplanar(muro) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muro.aplanado = true

      const error = muro.aplanado
        ? null
        : new Error('No se pudo aplanar')

      if (error) {
        reject(error)
        return
      }

      resolve(muro)
    }, 2000)
  })
}

function pintar(muro) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muro.pintado = true

      const error = muro.pintado
        ? null
        : new Error('No se pudo pintar')

      if (error) return reject(error)

      resolve(muro)

    }, 1000)
  })
}

/*
construir({})
  .then((muroConstruido) => {

    console.log('muroConstruido: ', muroConstruido)
    aplanar(muroConstruido)
      .then((muroAplanado)=>{

        console.log('muro aplanado: ', muroAplanado)
          pintar(muroAplanado)
            .then((muroPintado)=>{

              console.log('muro pintado: ', muroPintado)
            })
            .catch((error)=>{
              console.error('error al pintar: ', error)
            })
      })
      .catch((error)=>{
        console.error('error al aplanar: ', error)
      })
  })
  .catch((error)=>{
    console.error('error al construir: ',error)
  })*/

async function principal() {
  const muroConstruido = await construir({})
  const muroAplanado = await aplanar(muroConstruido)
  const muroPintado = await pintar(muroAplanado)
  console.log('estatusMuro: ', muroPintado)
}

principal()
  .then(()=>{
    console.log('todo cool')
  })

  .catch((error)=>{
    console.error('algo salió mal: ',error)
  })

