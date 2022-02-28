import * as React from "react";
import {makeStyles, Typography} from "@material-ui/core";


const useStyle = makeStyles(theme => ({
    text: {
        color: "#fff"
    }
}));


export default function News(){

    const style = useStyle();


    return(
        <Typography classes={{root:style.text}}>
            CRYPTO NEWS
        </Typography>

    );

}
