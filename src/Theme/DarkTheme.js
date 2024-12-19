import { createTheme } from "@mui/material";

export const darkTheme= createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#e91e63"
        },
        secondary:{
            main:"#5A20CB"
        },
        // black:{
        //     main:"000000"
        // },
        background:{
            main:"#000000",
            default:"#0a0a0a",
            paper:"#0a0a0a"
        },
        textColor:{
            main:"#111111",
        }
    }
})