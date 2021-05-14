
const ejemploMuro = {}

/*function construir (muro) {
    setTimeout(()=>{
        muro.construido = true
    },1000)
    muro.construido = true
    return muro
}

function aplanar (muro) {
    muro.aplanado = true
    return muro
}

function pintar (muro) {
    muro.pintado = true
    return muro
}

const muroConstruido = construir(ejemploMuro)

console.log('muroConstruido:', muroConstruido)

const muroAplanado = aplanar(muroConstruido)

const muroPintado = pintar(muroAplanado)

console.log('muroPintado: ', muroPintado)

const ejepmloMuro = {
  construido: false,
  aplanado: false,
  pintado: false
}
function construir (muro, cb) {
  setTimeout(() => {
    muro.construido = true
    cb(false, muro)
  }, 1000)
}
function aplanar (muro) {
  muro.aplanado = true
  return muro
}
function pintar (muro) {
  muro.pintado = true
  return muro
}
construir(ejepmloMuro, (error, muroConstruido) => {
  console.log('muroConstruido: ', muroConstruido)
})*/
function construir (muro, cb) {
  setTimeout(() => {
    muro.construido = true
    cb(false, muro)
  }, 1000)
}
function aplanar (muro, cb) {
  setTimeout(() => {
    muro.aplanado = true
    cb(false, muro)
  }, 1000)
}
function pintar (muro, cb) {
  setTimeout(() => {
    muro.pintado = true
    cb(false, muro)
  }, 1000)
}

construir(ejemploMuro, (error, muroConstruido) => {
  if (error){
    console.error('No se pudo construir')
    return //salida temprana
  }
  console.log('muro construido: ', muroConstruido)
  aplanar(muroConstruido, (error, muroAplanado)=>{
    if (error){
      console.error('No se pudo aplanar')
      return
    }
    console.log('muro aplanado: ', muroAplanado)
    pintar(muroAplanado, (error, muroPintado)=>{
      if (error){
        console.error('No se pudo pintar')
        return
      }
      console.log('muro pintado: ', muroPintado)
    })
  })
})
