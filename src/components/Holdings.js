import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import HoldingsService from "../services/HoldingsService";
import {Typography} from "@material-ui/core";

class Holdings extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            holdings: [],
            oneHolding: {}
        }
    }

    componentDidMount() {
        HoldingsService.getHoldings().then((response)=>{
            this.setState({holdings: response.data})
        })
        // HoldingsService.getHolding().then((response ) =>{
        //     this.setState({oneHolding: response.data})
        // })

        console.log(this.state.holdings.map((holdin, id) =>{
            console.log(holdin.id)
        }));
    }

    render() {
        return(
            <React.Fragment>
                <Title>Your holdings</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>LP</TableCell>
                            <TableCell>Coin Name</TableCell>
                            <TableCell >Holdings</TableCell>
                            <TableCell>Price</TableCell>
                            {/*<TableCell align="right">Sale Amount</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {this.state.holdings.map((holding, id)=>(

                            <TableRow key={holding.id}  >
                                <TableCell >{holding.id}</TableCell>
                                <TableCell>{holding.name}</TableCell>
                                <TableCell >{holding.amount}</TableCell>
                                <TableCell sx={{alignContent: "right"}}>{holding.price}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </React.Fragment>
        )
    }
}
export default Holdings




//
// // Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//     return { id, date, name, shipTo, paymentMethod, amount };
// }
//
//
// function preventDefault(event) {
//     event.preventDefault();
// }
//
// export default function Holdings() {
//
//
//
//
//
//     return (
//         <React.Fragment>
//             <Title>Your holdings</Title>
//             <Table size="small">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>Asset Name</TableCell>
//                         <TableCell>Holdings</TableCell>
//                         <TableCell align={"right"}>Price</TableCell>
//                         {/*<TableCell>Payment Method</TableCell>*/}
//                         {/*<TableCell align="right">Sale Amount</TableCell> */}
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                         <TableRow key={row.id}>
//                             <TableCell>{row.date}</TableCell>
//                             <TableCell>{row.name}</TableCell>
//                             <TableCell align={"right"}>{row.shipTo}</TableCell>
//                             {/*<TableCell>{row.paymentMethod}</TableCell>*/}
//                             {/*<TableCell align="right">{`$${row.amount}`}</TableCell>*/}
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//             <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
//                 See more coins
//             </Link>
//         </React.Fragment>
//     );
// }