import React, { useState } from 'react'
import { TextField, styled, Menu, MenuItem, Button, Typography, Divider } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SelectBar from './SelectBar';

const StyledButton = styled(Button)(({ theme }) => ({
    width: "100%",
    background: theme.palette.background.primary,
    color: theme.palette.text.primary,
    border: "1px solid",
    borderColor: theme.palette.accent,
    "&:hover": {
        backgroundColor: theme.palette.background.primary
    }
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
        width: "100%"
    }
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    width: "100%",
    justifyContent: "center",
    padding: "0",
    minHeight: "0"
}));

const StyledMenuItemText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary + " !important",
    padding: "0",
    fontSize: 16
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.background.primary + " !important",
    input: { color: theme.palette.text.primary + " !important" },
    marginBottom: "0",
    width: "100%",
    display: "flex",
}))

const ItemForm = ({ source }) => {
    const [itemValue, setItemValue] = useState('');
    const [sectionValue, setSectionValue] = useState('');
    const [op, setOp] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const opsMenuOpen = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleItemValueChange = (event) => {
        setItemValue(event.target.value);
    };

    const handleSectionValueChange = (event) => {
        setSectionValue(event.target.value);
    };

    const handleCreate = () => {
        handleClose()
        setOp("create")
    }

    const handleModify = () => {
        handleClose()
        setOp("modify")
    }

    const handleDelete = () => {
        handleClose()
        setOp("delete")
    }

    const updateItemValue = (value) => {
        setItemValue(value)
    }

    const updateSectionValue = (value) => {
        setSectionValue(value)
    }

    const switchForm = (op) => {
        switch (op) {
            case "create":
                return createForm
            case "modify":
                return modifyForm
            case "delete":
                return deleteForm
            default:
                return
        }
    }

    const createForm = (
        <div style={{ marginTop: "10rem" }}>
            <StyledTextField
                placeholder="Add item..."
                type="text"
                value={itemValue}
                size="small"
                onChange={handleItemValueChange}
            />
        </div>
    )

    const modifyForm = (
        <>
            <div style={{ marginTop: "1rem" }}>
                <SelectBar updateParentItemValue={updateItemValue} updateParentSectionValue={updateSectionValue} />
            </div>
            <div>
                <StyledTextField
                    placeholder="Select item..."
                    type="text"
                    value={itemValue}
                    size="small"
                    onChange={handleItemValueChange}
                />
            </div>
            <div style={{marginTop: "1rem"}}>
                <StyledTextField
                    placeholder="Section..."
                    type="text"
                    value={sectionValue}
                    size="small"
                    onChange={handleSectionValueChange}
                />
            </div>
        </>
    )

    const deleteForm = (
        <></>
    )

    return (
        <>
            <div>
                <StyledButton
                    id="ops-menu-button"
                    aria-controls={opsMenuOpen ? 'ops-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={opsMenuOpen ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    <Typography>Operation</Typography>
                </StyledButton>
                <StyledMenu
                    id="ops-menu"
                    MenuListProps={{
                        'aria-labelledby': 'ops-menu-button',
                    }}
                    anchorEl={anchorEl}
                    open={opsMenuOpen}
                    onClose={handleClose}
                >
                    <StyledMenuItem>
                        <StyledMenuItemText onClick={handleCreate}>Create</StyledMenuItemText>
                    </StyledMenuItem>
                    <Divider />
                    <StyledMenuItem>
                        <StyledMenuItemText onClick={handleModify}>Modify</StyledMenuItemText>
                    </StyledMenuItem>
                    <Divider />
                    <StyledMenuItem>
                        <StyledMenuItemText onClick={handleDelete}>Delete</StyledMenuItemText>
                    </StyledMenuItem>
                </StyledMenu>
            </div>
            {switchForm(op)}

        </>
    )
}

export default ItemForm
