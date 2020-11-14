import React from 'react';
import './AddItem.css'
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function AddItem() {
    const classes = useStyles();
    return (
        <div className="Additem">
             <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
     
               </form>
               <Button variant="contained" color="primary">
  Primary
</Button>
        </div>
    )
}

export default AddItem
