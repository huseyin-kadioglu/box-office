import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from "@mui/material";
import CloseIcon from '@material-ui/icons/Close'
import UserService from "../../service/UserService";


const DialogComponent = ({open, title, children, handleClose}) => {

    const serviceCall = () => {
        UserService.createUser({
            email: "huseyinavnikadioglu@gmail.com",
            username: "faux",
            password: "h3ll0w0rld"
        });
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
                    <Box><IconButton onClick={handleClose} style={{color: "red"}}><CloseIcon/></IconButton></Box>
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