import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

const StyledButton = styled(MuiButton)(({ theme, size }) => ({
  borderRadius: 0,
  fontWeight: theme.typography.fontWeightMedium,
  fontFamily: [
    'Bebas Neue',
    'cursive',
  ].join(','),
  padding: theme.spacing(2, 4),
  fontSize: theme.typography.pxToRem(20),
  backgroundColor: 'white',
  color: '#0d131d',
  boxShadow: 'none',
  '&:active': {
    boxShadow: 'none',
    backgroundColor: "#90A8CA !important", 
  },
  '&:focus': {
    boxShadow: 'none',
    color: 'white',
    backgroundColor: "#17283D !important", 
  },
  '&:hover': {
    boxShadow: 'none',
    color: 'white',
    backgroundColor: "#17283D !important", 
  },

  ...(size === 'small' && {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(18),
  }),
  ...(size === 'large' && {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(20),
  }),
}));


export default StyledButton;