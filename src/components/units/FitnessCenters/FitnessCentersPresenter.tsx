import { Inner } from "../../../commons/styles/common";
import * as F from "./FitnessCentersStyles"

const FitnessCentersUI = (props) => {

    return (
        <>
            <F.Wrapper>
                <F.Map id="map"/>
                <F.List>
                    <F.TitleBox>
                        <F.Title>내 주변 피트니스 센터</F.Title>
                    </F.TitleBox>
                    <div>
                    {props.myKeyword &&
                        props.myKeyword.map((el: any, index) => (
                        <div key={el.id}>
                            <div onClick={props.newMarker(index)}>업체명: {el.place_name}</div>
                            <div>주소: {el.address_name}</div>
                            <div>전화번호: {el.phone}</div>
                            <a href={el.place_url}>상세보기</a>
                            
                        </div>
                        ))}
                    </div>
                </F.List>
            </F.Wrapper>
        </>
    )
}
export default FitnessCentersUI;