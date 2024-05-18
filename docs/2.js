import React, { useState } from "react";
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

export default function AltaCatalogo(props) {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
        props.handleCloseDialog();
        setOpen(true);
      };

    return (
       <Dialog open={open} onClose={handleClose}>
         <DialogTitle id={"id10"}>
            Alta de nuevo producto
         </DialogTitle>
         <DialogContent>
           <DialogContentText>
              Completa la siguiente información
           </DialogContentText>
         </DialogContent>
         <DialogActions>
           <Button onClick={handleClose} color="primary">
             Cancel
           </Button>
         </DialogActions>
       </Dialog>
    )
}