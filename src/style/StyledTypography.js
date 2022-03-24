
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles'

 const StyledTypography = styled(Typography)(({ theme }) => ({
    '&': {
        fontFamily: [
          'Bebas Neue',
          'cursive',
        ].join(','),
        margin: `${theme.spacing(1)} auto 0`,
    }
  }));

export default StyledTypography;

