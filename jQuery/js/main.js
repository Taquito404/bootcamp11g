$("input[type='radio']").click(event => {
    $(`#element`).removeClass()
    switch (event.target.id) {
        case "Square":
            $(`#element`).addClass("square")
            break
        case "Rectangle":
            $(`#element`).addClass("rectangle")
            break
        default:
            $(`#element`).addClass("circle")

    }
})

// $("input[type='radio']").click( () => {
//     /*determinamos cuál fue la forma seleccionada*/
//     let selection = $("input[type='radio']:checked").val()
//     console.log( selection )
//     /*a nuestro elemento mutable le agregamos una clase con el mismo nombre que la selección*/
//     $("#element").removeClass().addClass(selection)
// })

var contador = 0
$("button").click(event => {
    let imageArray = [
        'https://picsum.photos/id/237/500/300',
        'https://picsum.photos/id/238/500/300',
        'https://picsum.photos/id/239/500/300',
        'https://picsum.photos/id/236/500/300',
        'https://picsum.photos/id/235/500/300'
    ]

    event.target.id === 'forward' ? contador += 1: contador -= 1
    if(contador === imageArray.length - 1){
        $('#forward').prop('disabled',true)
    }else if(contador === 0){
        $('#backward').prop('disabled',true)
    }else{
        $('#forward').prop('disabled',false)
        $('#backward').prop('disabled',false)
    }
    $("img").attr("src" , `${imageArray[contador]}`)

})