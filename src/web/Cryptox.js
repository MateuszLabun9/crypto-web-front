import * as React from "react";
import {makeStyles} from "@material-ui/core";

import StyledButton from '../style/StyledButton'
import StyledTypography from '../style/StyledTypography'
import ProductHeroLayout from './ProductHeroLayout';
import Divider from '@mui/material/Divider';
import backgroundImage from '../style/crypto.jpg'
import Product from '../components/Product'


const useStyle = makeStyles(theme => ({
    text: {
        color: "#fff"
    }
}));


export default function Cryptox(){

    const style = useStyle();


    return (
        <React.Fragment>
        <ProductHeroLayout
          sxBackground={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: '#7fc7d9', // Average color of the background image.
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          {/* Increase the network loading priority of the background image. */}
          <img
            style={{ display: 'none' }}
            src={backgroundImage}
            alt="increase priority"
          />
          <StyledTypography  variant="h1" color="inherit" align="center" marked="center" sx={{  mt: { sx: 4, sm: 10 } }}>
            Follow your money
          </StyledTypography >
          <StyledTypography
            color="inherit"
            align="center"
            variant="h4"
            sx={{ mb: 10, mt: { sx: 8, sm: 10 } }}
          >
            Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
          </StyledTypography>
          <Divider  sx={{ mt: { sx: 8, sm: 12 } }}/>
          <StyledButton
            variant="contained"
            size="large"
            component="a"
            href="/login"
            sx={{ minWidth: 200 }}
          >
            Register
          </StyledButton>
        </ProductHeroLayout>
        <Product></Product>
        </React.Fragment>
      );

}
