import styled  from "@emotion/styled";
import { NaviButtonProps } from "./Navigation.types";

export const Navigation = styled.nav`
    position:fixed;
    top:0;
    right:0;
    width:500px;
    height:100vh;
    padding:100px 0;
    transform:  ${(props: NaviButtonProps) =>
        !props.isOpen ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${(props: NaviButtonProps) =>
            !props.isOpen ? 0 : 1};
    border:5px solid red;
    transition:.5s;
`
export const NaviButton = styled.div`
    position:absolute;
    top:50%;
    right:50px;
    z-index:33;
    width:35px;
    height:30px;
    transform:translateY(-50%);
    cursor:pointer;

    span {
        height: 2px;
        background: black;
        right: 0;
        -moz-transition: 0.3s;
        -o-transition: 0.3s;
        -webkit-transition: 0.3s;
        transition: 0.3s;   

    }
    span:nth-of-type(1) {
        position: absolute;
        top: 50%;
        margin-top: -1px;
        width: 100%;
        transform:  ${(props: NaviButtonProps) =>
            !props.isOpen ? 'rotate(0deg)' : 'rotate(45deg)'};
    }

    span:nth-of-type(2) {
        position: absolute;
        top: 0;
        width: 100%;
        transform:  ${(props: NaviButtonProps) =>
            !props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
            
        opacity: ${(props: NaviButtonProps) =>
            !props.isOpen ? 1 : 0};
        }

        span:nth-of-type(3) {
        position: absolute;
        bottom:  ${(props: NaviButtonProps) =>
            !props.isOpen ? 0 : "14px"};
        width: 100%;
        transform:  ${(props: NaviButtonProps) =>
            !props.isOpen ? 'rotate(0deg)' : 'rotate(-45deg)'};
    }
`