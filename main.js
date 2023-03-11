let forma = document.getElementById('forma')
let button = document.getElementById('trocar')

function trocar(){
    if(forma.style.background == 'blue'){
        forma.style.transition = '5s'
        forma.style.background = 'red'
        forma.style.borderRadius = '50%'
        forma.style.width = '250px'
        forma.style.height = '250px'

        forma.style.borderBottom = '0'
        forma.style.borderLeft = '0'
        forma.style.borderRight = '0'

        button.style.transition = '5s'
        button.style.background  = 'green'
        button.style.color = 'purple'
        button.style.borderRadius = '40px 60px 35px 70px'

    } else if(forma.style.background == 'red'){
        forma.style.transition = '3s'
        forma.style.background = 'none'
        forma.style.width = '0'
        forma.style.height = '0'
        forma.style.borderRadius = '0%'
        
        forma.style.borderTop = '250px solid 0'
        forma.style.borderBottom = '250px solid green'
        forma.style.borderLeft = '250px solid transparent'
        forma.style.borderRight = '250px solid transparent'

        button.style.transition = '3s'
        button.style.background = 'purple'
        button.style.color = 'green'
        button.style.borderRadius = '20px 40px 60px 80px'


    } else if(forma.style.background = 'none'){
        forma.style.transition = '4s'
        forma.style.background = 'blue'
        forma.style.borderRadius = '0%'
        forma.style.width = '250px'
        forma.style.height = '250px'
        forma.style.border = 'none'

        button.style.transition = '4s'
        button.style.background = 'purple'
        button.style.color = 'green'
        button.style.borderRadius = '60px 60px 40px 50px'
    }

        
    
    


}