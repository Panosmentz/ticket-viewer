import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { useHistory } from "react-router-dom";
import { StateContext } from "../Context/StateContext";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 800,
  },
});

function TicketsPage() {
  const classes = useStyles();
  let history = useHistory();
  const { tickets } = useContext(StateContext); //tickets object is stored in React's Context API and can be used from all Components
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25); //only display 25 tickets at each page

  const columns = [
    { id: "id", label: "ID" },
    { id: "subject", label: "Subject" },
    {
      id: "requester",
      label: "Requester",
    },
    {
      id: "requesterupdated",
      label: "Requester updated",
    },
    {
      id: "group",
      label: "Group",
    },
    {
      id: "assignee",
      label: "Assignee",
    },
  ];

  const rows = []; //define an array and populate it with data from the tickets Object
  for (let i = 0; i < tickets.length; i++) {
    rows.push({
      id: tickets[i].id,
      subject: tickets[i].subject,
      requester: tickets[i].requester_id,
      requesterupdated: new Date(tickets[i].created_at).toLocaleDateString(
        "en-gb"
      ),
      group: tickets[i].group_id,
      assignee: tickets[i].assignee_id,
    });
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (event) => {
    history.push(`/tickets/${event}`); //if the row is clicked, redirect to /tickets/:id
  };

  return (
    <Grid className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    tabIndex={-1}
                    key={row.code}
                    onClick={() => handleRowClick(row.id)}
                    hover={true}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id}>
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

export default TicketsPage;
