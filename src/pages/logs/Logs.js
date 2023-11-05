import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

const columns = [
  { id: "user", label: "Usuário", minWidth: 170 },
  { id: "changed", label: "Alteração", minWidth: 170 },
  {
    id: "date",
    label: "Data",
    minWidth: 170,
    align: "right",
  },
];

function createData(user, changed, date) {
  return { user, changed, date };
}

const rows = [
  createData("India", "IN", 1324171354),
  createData("China", "CN", 1403500365),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434),
  createData("Canada", "CA", 37602103),
  createData("Australia", "AU", 25475400),
  createData("Germany", "DE", 83019200),
  createData("Ireland", "IE", 4857000),
  createData("Mexico", "MX", 126577691),
  createData("Japan", "JP", 126317000),
  createData("France", "FR", 67022000),
  createData("United Kingdom", "GB", 67545757),
  createData("Russia", "RU", 146793744),
  createData("Nigeria", "NG", 200962417),
  createData("Brazil", "BR", 210147125),
];

export default function Logs() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
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
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
