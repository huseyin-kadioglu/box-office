import '../index.css'
import CreateAccount from "./account/CreateAccount";
import mainLogo from '../logo.png'

const Header = (props) => {
    return (<div className={"header"}>
            <span className={"site-logo"}>
                          <img src={mainLogo} style={{height: "40px"}} alt={"logo"}/>
            </span>
        <div className={"navbar_items"}>
            <span className={"films"}>Filmler</span>
            <CreateAccount isLoginOpen={props.isLoginOpen}/>
            <span className={"login-account"}>Giriş Yap</span>
        </div>
    </div>);
};

export default Header;