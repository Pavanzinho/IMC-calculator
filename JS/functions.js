

// export function Function(){
//     function IMC(weight, height){
//         return (weight / ((height / 100) ** 2)).toFixed(2)
//     }
//     function notNumber(value){
//         return isNaN(value) || value==""
    
//     }

//     return{
//         IMC,
//         notNumber
//     }

// }
import { modal } from "./modal.js"

export const Functions={
    calculateIMC(weight, height){
        return (weight / ((height / 100) ** 2)).toFixed(2)
    },
    notNumber(value){
        return isNaN(value) || value==""
    },
    displayResultMessage(result){
        const message= `Seu IMC é de ${result}`
    
        modal.message.innerText= message   
        modal.open()
    }
}
