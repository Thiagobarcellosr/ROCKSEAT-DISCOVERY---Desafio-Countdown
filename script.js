const diastxt = document.querySelector('.dias')
const horastxt = document.querySelector('.horas')
const minutostxt = document.querySelector('.minutos')
const segundostxt = document.querySelector('.segundos')



const newEventDate = new Date('1 Jan 2024')

setInterval(() => {
  const currentDate = new Date()
  const totalSeconds = (newEventDate - currentDate) / 1000

  let dias =  Math.floor((totalSeconds / 3600) / 24)
  let horas =  Math.floor((totalSeconds / 3600) % 24)
  let minutos =  Math.floor((totalSeconds / 60) % 60)
  let segundos = Math.floor(totalSeconds%60)


  if (dias < 10){
    dias = `0${dias}`
  } 

  if (horas < 10){
    horas = `0${horas}`
  }

  if (minutos < 10){
    minutos = `0${minutos}`
  }

  if (segundos < 10){
    segundos = `0${segundos}`
  }

  diastxt.innerHTML = dias
  horastxt.innerHTML = horas
  minutostxt.innerHTML = minutos
  segundostxt.innerHTML = segundos

} ,1000)

