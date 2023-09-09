import React, {useState} from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const MuiDialog = () => {
    const [open, setOpen]=useState(false)
  return (
    <>
      <Button onClick={()=>setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={()=>setOpen(false)} aria-labelledby="dialog-title" aria-aria-describedby="dialog-description">
        <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id='dialog-description'>
            Are you sure to submitting the submit the test? You will not be able           
            to edit after submitting.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>setOpen(false)}>Cancel</Button>
            <Button autoFocus onClick={()=>setOpen(false)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;
