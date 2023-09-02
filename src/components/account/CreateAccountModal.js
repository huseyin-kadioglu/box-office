import React, {useEffect, useState} from "react";
import TitleAndInputComponent from "../common/TitleAndInputComponent";

const CreateAccountView = ({setUser}) => {

    const [emailAdress, setEmailAdress] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        setUser({email: emailAdress, username: username, password: password})
    }, [emailAdress, username, password, setUser]);

    return (
        <>
            <TitleAndInputComponent title={"Email Adress"}
                                    onChange={e => setEmailAdress(e.target.value)}/>
            <TitleAndInputComponent title={"Username"}
                                    onChange={e => setUsername(e.target.value)}/>
            <TitleAndInputComponent title={"Password"}
                                    onChange={e => setPassword(e.target.value)}/>
        </>
    );
};
export default CreateAccountView;