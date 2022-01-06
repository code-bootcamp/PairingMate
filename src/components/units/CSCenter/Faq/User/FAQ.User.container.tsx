import FAQUserUI from "./FAQ.User.presenter";

const FAQUser = () => {
  const onClickToggleAccodian = (event: any) => {
    const current = event.currentTarget;
    const chkActive = current.classList.value.indexOf("active");
    console.log(current);
    check();

    if (chkActive === -1) {
      current.classList.add("active");
    }
  };
  const check = () => {
    const checkitem = document.getElementsByClassName("accodian");
    for (let i = 0; i < checkitem[0].children.length; i++) {
      checkitem[0].children[i].classList.remove("active");
    }
  };

  return (
    <>
      <FAQUserUI onClickToggleAccodian={onClickToggleAccodian} />
    </>
  );
};

export default FAQUser;
