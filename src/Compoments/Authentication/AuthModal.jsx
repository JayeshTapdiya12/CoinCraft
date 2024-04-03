import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { AppBar } from '@mui/material';
import { Tab, TabPanel, Tabs, TabsList } from '@mui/base';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'theme.palette.background.paper',
    border: '2px solid #000',
    borderRadius: 10,
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);

    };

    return (
        <div>
            <Button
                variant='contained'
                style={{
                    width: 85,
                    height: 40,
                    backgroundColor: "#EEBC1D"
                }}
                onClick={handleOpen}>Login</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>


                        <AppBar position='static'
                            style={{ backgroundColor: "transparent", color: "white" }}>
                            <Tabs value={value}>
                                {/* /<Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
                                <TabsList
                                    value={value}
                                    onChange={handleChange}
                                    variant="fullWidth"
                                    style={{ borderRadius: 10 }}
                                >
                                    <Tab label="login"  >Login</Tab>
                                    <Tab label="Sign Up" style={{ width: "5vw", height: "5vw", color: "black" }}>Sign Up</Tab>

                                </TabsList>

                                {/* </Box> */}
                            </Tabs>

                        </AppBar>

                    </Box>


                    {/* {value === 1 && <Login />} */}


                </Fade>
            </Modal>
        </div>
    );
}