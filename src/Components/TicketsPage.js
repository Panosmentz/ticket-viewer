import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {StateContext} from "../Context/StateContext";
import { useHistory} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 800,
  },
});

export default function StickyHeadTable() {
  let history=useHistory();
    const {tickets} = useContext(StateContext);
    const columns = [
        { id: 'id', label: 'ID', minWidth: 170 },
        { id: 'subject', label: 'Subject', minWidth: 100 },
        {
          id: 'requester',
          label: 'Requester',
          minWidth: 170,
        },
        {
          id: 'requesterupdated',
          label: 'Requester updated',
          minWidth: 170,
        },
        {
          id: 'group',
          label: 'Group',
          minWidth: 170,
        },
        {
          id: 'assignee',
          label: 'Assignee',
          minWidth: 170,
        }
      ];

    var rows = [];
    for(let i=0; i<tickets.length;i++){
        rows.push({
            id : tickets[i].id,
            subject : tickets[i].subject,
             requester : tickets[i].requester_id, 
             requesterupdated : new Date(tickets[i].created_at).toLocaleDateString("en-gb"), 
             group : tickets[i].group_id,
            assignee: tickets[i].assignee_id
        })
    }

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (event) => {
    history.push(`/tickets/${event}`);
  }

  return (
    <Grid xs={12} className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow tabIndex={-1} key={row.code} onClick={()=> handleRowClick(row.id)} hover={true}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Grid>
  );
}

//id, subject, requester, requester UpdateRounded, group, AssignmentReturn

