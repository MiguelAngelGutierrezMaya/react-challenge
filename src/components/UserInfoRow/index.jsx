/**
 * Components
 */
import { Avatar, TableRow, TableCell } from '@material-ui/core';


/**
 * Styles
 */
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export default function UserInfoRow({ row }) {
    return (
        <StyledTableRow key={row.id}>
            <StyledTableCell align="center">{row.email}</StyledTableCell>
            <StyledTableCell>
                <Avatar alt="User" src={row.avatar} />
            </StyledTableCell>
        </StyledTableRow>
    );
}