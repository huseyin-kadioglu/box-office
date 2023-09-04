const CreateAccount = (props) => {

    const handleOnClick = () => {
        props?.isLoginOpen(true);
    }

    return (
        <div className={"create-account"} onClick={handleOnClick}>
            Hesap Aç
        </div>
    );

};
export default CreateAccount;