import React, {useContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {StateContext} from "../Context/StateContext";









 //  for (let i=0; i<tickets.length; i++){
 //  const rows= [
 //      createData(tickets[i].id, tickets[i].subject, tickets[i].requester_id, tickets[i].updated_at, tickets[i].group_id, tickets[i].assignee_id )
 //  ]
 //  };



//const rows = [
//  createData('India', 'IN', 1324171354, 3287263),
//  createData('China', 'CN', 1403500365, 9596961),
//  createData('Italy', 'IT', 60483973, 301340),
//  createData('United States', 'US', 327167434, 9833520),
//  createData('Canada', 'CA', 37602103, 9984670),
//  createData('Australia', 'AU', 25475400, 7692024),
//  createData('Germany', 'DE', 83019200, 357578),
//  createData('Ireland', 'IE', 4857000, 70273),
//  createData('Mexico', 'MX', 126577691, 1972550),
//  createData('Japan', 'JP', 126317000, 377973),
//  createData('France', 'FR', 67022000, 640679),
//  createData('United Kingdom', 'GB', 67545757, 242495),
//  createData('Russia', 'RU', 146793744, 17098246),
//  createData('Nigeria', 'NG', 200962417, 923768),
//  createData('Brazil', 'BR', 210147125, 8515767),
//];



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
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
//     function createData(id, subject, requester, requesterupdated, group, assignee ) {
//       return { id : tickets[i].id, subject : tickets[i].subject, requester : tickets[i].requester_id, requesterupdated : tickets[i].updated_at, group : tickets[i].group_id, assignee: tickets[i].assignee_id};
//     }
//     
// var rows = [];
// for (let)
//   var rows = [
//       createData(tickets.id, tickets.subject, tickets.requester_id, tickets.updated_at, tickets.group_id, tickets.assignee_id)
//   ]

    var rows = [];
    for(let i=0; i<tickets.length;i++){
        rows.push({
            id : tickets[i].id,
            subject : tickets[i].subject,
             requester : tickets[i].requester_id, 
             requesterupdated : tickets[i].updated_at, 
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


  return (
    <Paper className={classes.root}>
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
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
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
    </Paper>
  );
}

//id, subject, requester, requester UpdateRounded, group, AssignmentReturn

