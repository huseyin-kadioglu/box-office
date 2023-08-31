import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";

const DialogComponent = ({open, title, children, handleClose, action}) => {

    return (
        <Dialog open={open}>
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>ÜYE OL</Button>
                <Button onClick={handleClose} autoFocus>ÇIKIŞ YAP</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogComponent;