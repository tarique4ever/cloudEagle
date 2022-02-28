import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Box,
  TableRow,
  TableSortLabel,
  Paper,
} from "@mui/material";
import { vendor, application, headCells } from "../utils/utils";
import { visuallyHidden } from "@mui/utils";
import AppTable from "../components/AppTable";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell
          sx={{
            backgroundColor: "#D3D3D3",
            borderBottom: "2px solid #D3D3D3",
            fontSize: "12px",
            "& th": {
              fontSize: "1.25rem",
              color: "rgba(96, 96, 96)",
            },
          }}
        />
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" :""}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              backgroundColor: "#D3D3D3",
              borderBottom: "2px solid #D3D3D3",
              fontSize: "13px",
              "& th": {
                fontSize: "1.25rem",
                color: "rgba(96, 96, 96)",
              },
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


export default function VendorTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

  let combineArr = [];
  vendor.map((item) => {
    const appli = application.filter((ite) => ite.vendor === item.vendorName);
    combineArr.push({
      item,
      application: [...appli],
    });
  });

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Card sx={{ background: "#91BAD6", padding: "8rem" }}>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          size="small"
          aria-label="collapsible table"
        >
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={combineArr.length}
          />
          <TableBody>
            {stableSort(combineArr, getComparator(order, orderBy)).map(
              (application) => (
                <AppTable key={application.item.vendorName} row={application} />
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
