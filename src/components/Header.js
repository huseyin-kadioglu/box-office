import '../index.css'
import CreateAccount from "./account/CreateAccount";

const Header = (props) => {
    return (
        <div className={"header"}>
            <span className={"site-logo"}>site logo</span>
            <div className={"navbar_items"}>
                <span className={"films"}>main nav</span>
                <CreateAccount isLoginOpen={props.isLoginOpen}/>
                <span className={"login"}>login</span>
            </div>
        </div>
    );
};

export default Header;