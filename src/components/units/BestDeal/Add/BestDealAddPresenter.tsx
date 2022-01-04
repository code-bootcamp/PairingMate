const BestDealAddUI = () => {

    return( 
    <>
        <div>
            <div>
                <select>
                    <option value="none">카테고리를 설정해주세요</option>
                    <option value="fitness">헬스</option>
                    <option value="yoga">요가</option>
                    <option value="pilates">필라테스</option>
                </select>
                <input type="text" placeholder="가격정보를 입력해주세요" />
            </div>
            <div>
                <input type="text" placeholder="매장정보를 입력하세요." />
            </div>
            <div>
                <input type="text" placeholder="해쉬태그를 입력해주세요." />
            </div>
            <textarea placeholder="시설정보를 입력하세요"></textarea>
            <div>
                <div>
                    <div>
                        <span>이미지</span>
                        <span>장소</span>
                    </div>
                    <input type="text" placeholder="장소를 검색해 주세요" />
                </div>
                <div>
                    <div>
                        <span>이미지</span>
                        <span>이미지 선택</span>
                    </div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <button>등록하기</button>            
        </div>
    </>
    )
}
export default BestDealAddUI;