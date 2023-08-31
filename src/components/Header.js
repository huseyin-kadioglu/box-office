import '../index.css'
import CreateAccount from "./account/CreateAccount";

const Header = (props) => {
    return (
        <div className={"header"}>
            <div className={"site-logo"}>site logo</div>
            <div className={"main-nav"}>main nav</div>
            <CreateAccount isLoginOpen={props.isLoginOpen}/>
            <div className={"login"}>login</div>
        </div>
    );
};

export default Header;