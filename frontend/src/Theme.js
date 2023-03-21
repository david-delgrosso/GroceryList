import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    typography: {
        fontFamily: "'Nanum Gothic', sans-serif",
    },
    palette: {
        background: {
            primary: "#FFFFFF",
            nav: "#57cc99",
            item: {
                need: "#a4f3b3",
                dontneed: "#FFFFFF",
            }
        },
        text: {
            primary: "#000000",
            header: "#495057",
            item: {
                need: "#000000",
                dontneed: "#000000"
            }
        },
        accent: "#22577a",
    },
});

export const darkTheme = createTheme({
    typography: {
        fontFamily: "'Nanum Gothic', sans-serif",
    },
    palette: {
        background: {
            primary: "#333533",
            nav: "#000000",
            item: {
                need: "#80ed99",
                dontneed: "#000000",
            }
        },
        text: {
            primary: "#FFFFFF",
            header: "#e9ecef",
            item: {
                need: "#000000",
                dontneed: "#FFFFFF"
            }
        },
        accent: "#80ed99",
    },
});