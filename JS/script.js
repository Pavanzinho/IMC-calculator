import {modal} from './modal.js'
import {Functions} from './functions.js'
import { AlertError } from './alertError.js'



// Mapiando projeto//

//VARIÁVEIS

const form = document.querySelector('form')
const inputWeight= document.querySelector('#weight')
const inputHeight=document.querySelector('#height')
/* Essas variáveis foram substituidas por propriedades do objeto "modal "*/
// const modalWrapper=document.querySelector('.modal-wrapper')
// const modalText=document.querySelector('.modal .tittle span')
// const modalBtnClose=document.querySelector('.modal button.close')




/*Eventos*/

form.onsubmit= (event)=>{
    event.preventDefault()
    
    const weight= (inputWeight.value)
    const height= (inputHeight.value)
    
    const weightOrHeightIsNotANumber= Functions.notNumber(weight) || Functions.notNumber(height)
    
    if(weightOrHeightIsNotANumber){
        AlertError.open()
        return
    }
   

    AlertError.close()

    const result= Functions.calculateIMC(weight,height)
    
    Functions.displayResultMessage(result)
}

inputWeight.oninput=()=>
    AlertError.close()


inputHeight.oninput=()=>
    AlertError.close()











