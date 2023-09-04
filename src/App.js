import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import React, {useState} from "react";
import DialogComponent from "./components/common/DialogComponent";
import CreateAccountView from "./components/account/CreateAccountModal";


const App = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null)

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    return (
        <div className="App">
            <Header isLoginOpen={setIsOpen}/>
            <Content/>
            <Footer/>
            {isOpen &&
                <DialogComponent open={isOpen} handleClose={handleCloseModal} user={user}>
                    <CreateAccountView setUser={setUser}/>
                </DialogComponent>
            }
        </div>
    );
}

export default App;
