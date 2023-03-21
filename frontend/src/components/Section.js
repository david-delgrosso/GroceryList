import React, {useState} from 'react'
import ItemList from './ItemList'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material'
import { useTheme } from '@mui/material'

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    backgroundColor: theme.palette.background.primary + " !important",
    color: theme.palette.text.primary + " !important",
    minHeight: "0",
    "& .MuiAccordionSummary-content": {
        margin: "0.5rem 0px",
    },
    "& .css-hqy168-MuiButtonBase-root-MuiAccordionSummary-root": {
        "& .Mui-expanded": {
            margin: "0.5rem 0px",
            minHeight: "0"
        }
    }
}))

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    backgroundColor: theme.palette.background.primary + " !important",
    color: theme.palette.text.primary + " !important",
    paddingTop: "0"
}))

const Section = ({ section }) => {
    const [numItems, setNumItems] = useState(0)
    const MuiTheme = useTheme();

    const updateNumItems = (value) => {
        setNumItems(value)
    }

    return (
        <>
            <Accordion>
                <StyledAccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: MuiTheme.palette.accent, minHeight: "0" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{section.name} - {numItems}</Typography>
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                    <ItemList section={section} updateNumItems={updateNumItems} />
                </StyledAccordionDetails>
            </Accordion>
        </>
    )
}

export default Section
