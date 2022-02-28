import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import Tooltip from "@mui/material/Tooltip";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { TextField } from "@mui/material";
import InnerRow from "./innerRow";

export default function AppTable(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [myValue, setMyValue] = useState(row.item.vendorName);
  const [appValue, setAppValue] = useState(row.item.ofApplication);
  const [totalSpndValue, setTotalSpndValue] = useState(row.item.totalSpend);
  const [activecontractValue, setActiveContractValue] = useState(row.item.activeContract);
  const [sourceValue, setSourceValue] = useState(row.item.source);
  const [spendlastValue, setSpendLastValue] = useState(row.item.totalSpendLast);
  const [contractValue, setContractValue] = useState(row.item.contractValue);


  const onEdit = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  const handleSave = () => {
    row.item.vendorName = myValue;
    row.item.ofApplication = appValue;
    row.item.totalSpend = totalSpndValue;
    row.item.activeContract = activecontractValue;
    row.item.source = sourceValue;
    row.item.totalSpendLast = spendlastValue;
    row.item.contractValue = contractValue;
    setShow(true)
}


  return (
    <React.Fragment>
      <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {show ? (
            row.item.vendorName
          ) : (
            <TextField onChange={(e) => {
                setMyValue(e.target.value)
            }} value={myValue} defaultValue={myValue} />
          )}
        </TableCell>
        <TableCell align="center">
          {show ? (
            row.item.ofApplication
          ) : (
            <TextField onChange={(e) => {
                setAppValue(e.target.value)
            }} value={appValue} defaultValue={appValue} />
          )}
        </TableCell>
        <TableCell align="center">
          {show ? (
            row.item.totalSpend
          ) : (
            <TextField onChange={(e) => {
                setTotalSpndValue(e.target.value)
            }} value={totalSpndValue} defaultValue={totalSpndValue} />
          )}
        </TableCell>
        <TableCell align="center">
          {show ? (
            row.item.activeContract
          ) : (
            <TextField onChange={(e) => {
                setActiveContractValue(e.target.value)
            }} value={activecontractValue} defaultValue={activecontractValue} />
          )}
        </TableCell>
        <TableCell align="center">
          {show ? (
            row.item.source
          ) : (
            <TextField onChange={(e) => {
                setSourceValue(e.target.value)
            }} value={sourceValue} defaultValue={sourceValue} />
          )}
        </TableCell>
        <TableCell align="center">
          {show ? (
            row.item.totalSpendLast
          ) : (
            <TextField onChange={(e) => {
                setSpendLastValue(e.target.value)
            }} value={spendlastValue} defaultValue={spendlastValue} />
          )}
        </TableCell>
        <TableCell align="center">
          {show ? (
            row.item.contractValue
          ) : (
            <TextField onChange={(e) => {
                setContractValue(e.target.value)
            }} value={contractValue} defaultValue={contractValue} />
          )}
        </TableCell>
        <TableCell align="center">
          <Tooltip title="Edit">
            <IconButton size="large" onClick={onEdit}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          {show ? null : (
            <Tooltip title="Save">
              <IconButton size="large" onClick={handleSave}>
                <SaveIcon />
              </IconButton>
            </Tooltip>
          )}
        </TableCell>
      </TableRow>
      <TableRow hover>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Application
              </Typography>
              <Table size="small" aria-label="application">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        backgroundColor: "#D3D3D3",
                        borderBottom: "2px solid #D3D3D3",
                        fontSize: "11px",
                        "& th": {
                          fontSize: "1.25rem",
                          color: "rgba(96, 96, 96)",
                        },
                      }}
                      align="center"
                    >
                      APPLICATION Name
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#D3D3D3",
                        borderBottom: "2px solid #D3D3D3",
                        fontSize: "11px",
                        "& th": {
                          fontSize: "1.25rem",
                          color: "rgba(96, 96, 96)",
                        },
                      }}
                      align="center"
                    >
                      VENDOR
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#D3D3D3",
                        borderBottom: "2px solid #D3D3D3",
                        fontSize: "11px",
                        "& th": {
                          fontSize: "1.25rem",
                          color: "rgba(96, 96, 96)",
                        },
                      }}
                      align="center"
                    >
                      CATEGORY
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#D3D3D3",
                        borderBottom: "2px solid #D3D3D3",
                        fontSize: "11px",
                        "& th": {
                          fontSize: "1.25rem",
                          color: "rgba(96, 96, 96)",
                        },
                      }}
                      align="center"
                    >
                      LICENSE BOUGHT
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#D3D3D3",
                        borderBottom: "2px solid #D3D3D3",
                        fontSize: "11px",
                        "& th": {
                          fontSize: "1.25rem",
                          color: "rgba(96, 96, 96)",
                        },
                      }}
                      align="center"
                    >
                      APP COVERED IN CONTRACT
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#D3D3D3",
                        borderBottom: "2px solid #D3D3D3",
                        fontSize: "11px",
                        "& th": {
                          fontSize: "1.25rem",
                          color: "rgba(96, 96, 96)",
                        },
                      }}
                      align="center"
                    >
                      BILLING FREQUENCY
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#D3D3D3",
                        borderBottom: "2px solid #D3D3D3",
                        fontSize: "11px",
                        "& th": {
                          fontSize: "1.25rem",
                          color: "rgba(96, 96, 96)",
                        },
                      }}
                      align="center"
                    >
                      PAYMENT TERMS
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: "#D3D3D3",
                        borderBottom: "2px solid #D3D3D3",
                        fontSize: "11px",
                        "& th": {
                          fontSize: "1.25rem",
                          color: "rgba(96, 96, 96)",
                        },
                      }}
                      align="center"
                    >
                      ACTION
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.application.map((historyRow) => (
                    <InnerRow inner = {historyRow}/>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
