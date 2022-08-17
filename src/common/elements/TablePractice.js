import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(num, event, rep, phone, date) {
  return { num, event, rep, phone, date };
}

const rows = [
  createData('1', "행사명", "대표자", "010-0000-0000", "2022.01.01 ~ 2022.02.01" ),
  createData('2', "행사명", "대표자", "010-0000-0000", "2022.01.01 ~ 2022.02.01"),
  createData('3', "행사명", "대표자", "010-0000-0000", "2022.01.01 ~ 2022.02.01"),
  createData('4', "행사명", "대표자", "010-0000-0000", "2022.01.01 ~ 2022.02.01"),
  createData('5', "행사명", "대표자", "010-0000-0000", "2022.01.01 ~ 2022.02.01"),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>번호</StyledTableCell>
            <StyledTableCell>행사명</StyledTableCell>
            <StyledTableCell>대표명</StyledTableCell>
            <StyledTableCell>연락처</StyledTableCell>
            <StyledTableCell>출입일시</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.num}>
              <StyledTableCell component="th" scope="row">
                {row.num}
              </StyledTableCell>
              <StyledTableCell>{row.event}</StyledTableCell>
              <StyledTableCell>{row.rep}</StyledTableCell>
              <StyledTableCell>{row.phone}</StyledTableCell>
              <StyledTableCell>{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
