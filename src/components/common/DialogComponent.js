import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from "@mui/material";
import CloseIcon from '@material-ui/icons/Close'
import UserService from "../../service/UserService";


const DialogComponent = ({open, title, children, handleClose, user, setLoginScreen}) => {

    const serviceCall = () => {
        UserService.createUser(user);
        // UserService.getUser().then(response => console.log(response)).catch(e => console.log(e));
    };

    const redirectLogin = () => {
        // setLoginScreen(true);
    }

    return (
        <Dialog open={open}>
            <DialogTitle id="alert-dialog-title">
                <Box display="flex" alignItems="center">
                    <Box flexGrow={1}>{title}</Box>
                    <Box>
                        <IconButton onClick={handleClose}>
                            <CloseIcon fontSize="small"/>
                        </IconButton>
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent PaperProps={{
                style: {
                    margin: '20px',
                    height: '50vh',
                    width: '15vw',
                    alignItems: 'center'
                },
            }}>
                {children}
            </DialogContent>
            <DialogActions style={{margin: '20px', display: 'block', alignItems: 'center'}}>
                <Button onClick={serviceCall} variant="outlined">Hesap Oluştur</Button>
                <p>veya Hesabın varsa </p>
                <Button onClick={redirectLogin} variant="outlined">Giriş Yap</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogComponent;