
/* Aqui, vou criar uma variável objeto que possui várias funcões dentro, assim posso separar cada funcionalidade dentro de algo específico no código
assim como esse modal. Então pode-se adicionar todos os eventos,funções, variáveis, etc relacionadas a ele */

export const modal={
    
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .tittle span'),
    buttonClose: document.querySelector('.modal button.close'),
    
    open(){
        
       modal.wrapper.classList.add("open")
    },
    
    close(){
            modal.wrapper.classList.remove("open")
    }
        
}

modal.buttonClose.addEventListener("click", ()=>{
    modal.close()
}
)

window.addEventListener('keydown', event =>{
    if(event.key==='Escape'){
        modal.close()
    }
}
)

/*outra forma*/