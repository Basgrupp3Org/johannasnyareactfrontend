import '../styling/CreateBudgetModal.css';
import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Input } from '@material-ui/core';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 800,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function CreateBudgetModal() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const user = useContext(UserContext)
    const [open, setOpen] = useState(false);
    const [budgetName, setBudgetName] = useState('');


    useEffect(() => {

    })

    const handleBudget = (event) => {
        event.preventDefault();

        let requestObject = {



            BudgetName: budgetName
        }



        return (
            <div className="ccm">

                <button onClick={() => setOpen(true)}>Create Budget</button>

                <Modal
                    open={open}
                    onClose={() => setOpen(false)} >

                    <div style={modalStyle} className={classes.paper}>
                        <form className="cbm__createBudget">
                            <center>
                                <h2 className="cbm__budgettext">
                                    Create Budget
                                </h2>
                            </center>

                            <Input
                                placeholder="Budget Name"
                                type="text"
                                value={budgetName}
                                onChange={(e) => setBudgetName(e.target.value)} />



                            <button variant="contained" className="ccm__SubmitBudget" onClick={handleBudget}>Submit</button>

                        </form>
                    </div>
                </Modal>
            </div>
        )
    }

    export default CreateBudgetModal;