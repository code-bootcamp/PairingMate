import NavigationUI from "./Navigation.presenter"
import { useState } from "react"

const Navigation = () =>{

    const [isOpen, setIsOpen] = useState(false)
    
    const onClickopen = () => {
        if(isOpen === true){
            setIsOpen(false)
            console.log(isOpen)
        }else{
            setIsOpen(true)
            console.log(isOpen)
        }
    }

    return(
        <>
        <NavigationUI 
            isOpen={isOpen}
            onClickopen={onClickopen}
        />
        </>
    )
}

export default Navigation