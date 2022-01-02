import * as N from "./Navigation.styles"
import { NavigationProps } from "./Navigation.types"


const NavigationUI = (props:NavigationProps) =>{

    return(
        <>
         <N.NaviButton isOpen={props.isOpen} onClick={props.onClickopen}>
            <span></span>
            <span></span>
            <span></span>
         </N.NaviButton>
        <N.Navigation isOpen={props.isOpen}>
            <ul>
                <li>
                    <button>FindMates</button>
                </li>
                <li>
                    <button>Fitness Center</button>
                </li>
                <li>
                    <button>Best Deal</button>
                </li>
                <li>
                    <button>Runday Course</button>
                </li>
                <li>
                    <button>고객센터</button>
                </li>
            </ul>
        </N.Navigation>
        </>
    )
    
}

export default NavigationUI