let forma = document.getElementById('forma')
let button = document.getElementById('trocar')

function trocar(){
    if(forma.style.background == 'blue'){
        forma.style.transition = '5s'
        forma.style.background = 'red'
        forma.style.borderRadius = '50%'

        button.style.transition = '5s'
        button.style.background  = 'green'
        button.style.color = 'purple'
        button.style.borderRadius = '40px 60px 35px 70px'

    } else if(forma.style.background = 'red'){
        forma.style.transition = '4s'
        forma.style.background = 'blue'
        forma.style.borderRadius = '0%'

        button.style.transition = '4s'
        button.style.background = 'purple'
        button.style.color = 'green'
        button.style.borderRadius = '60px 60px 40px 50px'
    }
    


}