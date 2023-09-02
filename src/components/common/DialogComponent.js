import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from "@mui/material";
import CloseIcon from '@material-ui/icons/Close'
import UserService from "../../service/UserService";


const DialogComponent = ({open, title, children, handleClose, user}) => {

    const serviceCall = () => {
        UserService.createUser(user);

        // UserService.getUser().then(response => console.log(response)).catch(e => console.log(e));
    };

    return (
        <Dialog open={open}

                PaperProps={{
                    style: {
                        margin: '20px',
                        height: '50vh',
                        width: '21vw',
                    },
                }}
        >
            <DialogTitle id="alert-dialog-title">
                <Box display="flex" alignItems="center">
                    <Box flexGrow={1}>{title}</Box>
                    <Box><IconButton onClick={handleClose}><CloseIcon/></IconButton></Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={serviceCall} variant="outlined">ÜYE OL</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogComponent;