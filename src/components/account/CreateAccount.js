const CreateAccount = (props) => {

    const handleOnClick = () => {
        props?.isLoginOpen(true);
    }

    return (
        <div className={"create-account"} onClick={handleOnClick}>
            CREATE AN ACCOUNT
        </div>
    );

};
export default CreateAccount;