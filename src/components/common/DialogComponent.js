import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from "@mui/material";
import CloseIcon from '@material-ui/icons/Close'


const DialogComponent = ({open, title, children, handleClose, action}) => {

    return (
        <Dialog open={open}>
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
                <Button onClick={handleClose} variant="outlined">ÜYE OL</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogComponent;