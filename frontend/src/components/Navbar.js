import React, { useState, useContext, useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ThemeContext } from "../ThemeContext";
import { useTheme, styled, Typography, Drawer, Button, List, ListItem, Container, AppBar } from '@mui/material'
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: theme.palette.background.nav,
    color: theme.palette.accent,
}));

export const StyledContainer = styled(Container)({
    display: "flex !important",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    boxSizing: "unset !important",
    maxWidth: "1000px !important",
    width: "90%",
    padding: "0"
});

const StyledTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.accent,
    fontSize: 20,
    fontWeight: "bold"
}));

const StyledDrawerIcon = styled(MenuIcon)(({ theme }) => ({
    color: theme.palette.accent,
    fontSize: "2rem !important",
    zIndex: "3 !important",
}));

const StyledDrawerCloseIcon = styled(CloseIcon)(({ theme }) => ({
    position: "fixed",
    top: "12px",
    right: "12px",
    color: theme.palette.accent,
    fontSize: "2rem !important",
    zIndex: "4 !important",
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    "& div.MuiPaper-root": {
        background: theme.palette.background.nav,
        backdropFilter: "blur(10px)",
        height: "100vh !important",
        display: "flex",
        boxShadow: "none !important",
        textAlign: "center",
        justifyContent: "flex-start",
        color: theme.palette.text.primary,
        zIndex: "1 !important",
        paddingTop: "20%"
    },
}));

const StyledMenuItem = styled(ListItem)(({ theme }) => ({
    justifyContent: "center"
}));

const StyledDrawerText = styled(Typography)(({ theme }) => ({
    color: theme.palette.accent,
    fontSize: "1.5rem",
}));

function Navbar({ updatePage }) {
    const { theme, setTheme } = useContext(ThemeContext);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const MuiTheme = useTheme();

    useEffect(() => {
        setTimeout(() => {
            setHasAnimated(true);
        }, 1000);
    }, []);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const toggleTheme = () => {
        const newTheme = (theme === 'light' ? 'dark' : 'light')
        setTheme(newTheme)
    }

    const handleGroceriesClick = () => {
        toggleDrawer()
        updatePage("groceries")
    }

    const handleRecipesClick = () => {
        toggleDrawer()
        updatePage("recipes")
    }

    const handleManageItemsClick = () => {
        toggleDrawer()
        updatePage("manageitems")
    }

    // const handleAddRecipeClick = () => {
    //     toggleDrawer()
    //     //updatePage("addrecipe")
    // }

    const drawer = (
        <>
            <Button
                onClick={toggleDrawer}
                sx={{
                    animation: !hasAnimated ? "fadeIn" : "",
                    animationDuration: "2s",
                    display: "flex",
                    justifyContent: "flex-end"
                }}
            >
                <StyledDrawerIcon />
            </Button>

            <StyledDrawer
                anchor={"right"}
                variant="temporary"
                transitionDuration={500}
                disableScrollLock={true}
                open={isOpen}
                onClose={toggleDrawer}
            >
                <Button onClick={toggleDrawer}>
                    <StyledDrawerCloseIcon />
                </Button>
                <List>
                    <StyledMenuItem sx={{ justifyContent: "center" }}>
                        <Button sx={{ color: MuiTheme.palette.accent }} onClick={toggleTheme}>
                            {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
                        </Button>
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <StyledDrawerText onClick={handleGroceriesClick}>Groceries</StyledDrawerText>
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <StyledDrawerText onClick={handleRecipesClick}>Recipes</StyledDrawerText>
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <StyledDrawerText onClick={handleManageItemsClick}>Manage Items</StyledDrawerText>
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <StyledDrawerText>Manage Recipes</StyledDrawerText>
                    </StyledMenuItem>
                </List>
            </StyledDrawer>

        </>
    )

    return (
        <StyledAppBar position="fixed">
            <StyledContainer>
                <div style={{ width: "15%" }}>
                    <AiOutlineShoppingCart size={24} onClick={() => { window.location.reload() }} />
                </div>
                <StyledTitle>
                    Grocery List
                </StyledTitle>
                <div style={{ width: "15%" }}>
                    {drawer}
                </div>
            </StyledContainer>
        </StyledAppBar>
    );
}

export default Navbar;
