import React, {useEffect, useState} from "react";
import TitleAndInputComponent from "../common/TitleAndInputComponent";

const CreateAccountView = ({}) => {

    const [emailAdress, setEmailAdress] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <TitleAndInputComponent title={"Email Adress"}
                                    onChange={e => setEmailAdress(e.target.value)}/>
            <TitleAndInputComponent title={"Username"}
                                    onChange={e => setUsername(e.target.value)}/>
            <TitleAndInputComponent title={"Password"}
                                    onChange={e => setPassword(e.target.value)}/>

            <p>Email Adress: {emailAdress}, Username: {username}, Password: {password}</p>
        </>
    );
};
export default CreateAccountView;