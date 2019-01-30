const dropDown = window.document.querySelector('.dropdown')
const menu = document.querySelector('.menu')
const icon = document.querySelector('#menu-icon')

dropDown.onclick = function(){
    menu.classList.toggle('d-block')
    if (icon.classList.contains('fa-plus')){
        icon.classList.remove('fa-plus')
        icon.classList.add('fa-minus')
        
    } 
    else {
        icon.classList.add('fa-plus')
        icon.classList.remove('fa-minus')
        
    }
}
const buttonLink = document.querySelectorAll('li')
const projects = document.querySelectorAll('.project')
for (let link of buttonLink){
    console.log(link.id)
    link.onclick = function(){
        for (let project of projects){
            project.classList.add('d-none')
            if (project.dataset.category == link.id ){
                project.classList.remove('d-none')
            } 
//            project.style.display="none"
            console.log(project.dataset.category)
    
        }        
    }
}


