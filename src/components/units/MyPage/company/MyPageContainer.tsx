import MyPageUI from "./MyPagePresenter";

const MyPage = () => {
  const onClickTabActive = (event: any) => {
    const current = event.currentTarget;
    const chkActive = current.classList.value.indexOf("on");
    check();

    if (chkActive === -1) {
      current.classList.add("on");
    }
  };

  const check = () => {
    const checkitem = document.getElementsByClassName("tab");
    for (let i = 0; i < checkitem[0].children.length; i++) {
      checkitem[0].children[i].classList.remove("on");
    }
  };
  return <MyPageUI onClickTabActive={onClickTabActive} />;
};

export default MyPage;
