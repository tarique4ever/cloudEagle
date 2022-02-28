import * as React from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

import { TextField } from "@mui/material";

export default function InnerRow(props) {
  const { inner } = props;
  const [editShow, setEditShow] = useState(true);
  const [appNameValue, setAppNameValue] = useState(
    inner.applicationName
  );
  const [vendorValue, setVendorValue] = useState(inner.vendor);
  const [categoryValue, setCategoryValue] = useState(
    inner.category
  );
  const [licenseBoughtValue, setLicenseBoughtValue] = useState(
    inner.licenseBought
  );
  const [appCoveredValue, setAppCoveredValue] = useState(
    inner.appCoverd
  );
  const [billingFrequencyValue, setBillingFrequencyValue] = useState(
    inner.billingFrequency
  );
  const [paymentTermsValue, setPaymentTermsValue] = useState(
    inner.paymentTerms
  );


  console.log("test1", inner);
  const onEditApp = () => {
    if (editShow) {
      setEditShow(false);
    } else {
      setEditShow(true);
    }
  };

  const handleAppSave = () => {
    inner.applicationName = appNameValue;
    inner.vendor = vendorValue;
    inner.category = categoryValue;
    inner.licenseBought = licenseBoughtValue;
    inner.appCoverd = appCoveredValue;
    inner.billingFrequency = billingFrequencyValue;
    inner.paymentTerms = paymentTermsValue;
    setEditShow(true);
  };

  console.log("test", appNameValue);

  return (
    <TableRow hover key={inner.applicationName}>
      <TableCell align="center">
        {" "}
        {editShow ? (
          inner.applicationName
        ) : (
          <TextField
            onChange={(e) => {
              setAppNameValue(e.target.value);
            }}
            value={appNameValue}
            defaultValue={appNameValue}
          />
        )}
      </TableCell>
      <TableCell align="center">
        {editShow ? (
          inner.vendor
        ) : (
          <TextField
            onChange={(e) => {
              setVendorValue(e.target.value);
            }}
            value={vendorValue}
            defaultValue={vendorValue}
          />
        )}
      </TableCell>
      <TableCell align="center">
        {editShow ? (
          inner.category
        ) : (
          <TextField
            onChange={(e) => {
              setCategoryValue(e.target.value);
            }}
            value={categoryValue}
            defaultValue={categoryValue}
          />
        )}
      </TableCell>
      <TableCell align="center">
        {editShow ? (
          inner.licenseBought
        ) : (
          <TextField
            onChange={(e) => {
              setLicenseBoughtValue(e.target.value);
            }}
            value={licenseBoughtValue}
            defaultValue={licenseBoughtValue}
          />
        )}
      </TableCell>
      <TableCell align="center">
        {editShow ? (
          inner.appCoveredInContract
        ) : (
          <TextField
            onChange={(e) => {
                setAppCoveredValue(e.target.value);
            }}
            value={appCoveredValue}
            defaultValue={appCoveredValue}
          />
        )}
      </TableCell>
      <TableCell align="center">
        {editShow ? (
          inner.billingFrequency
        ) : (
          <TextField
            onChange={(e) => {
              setBillingFrequencyValue(e.target.value);
            }}
            value={billingFrequencyValue}
            defaultValue={billingFrequencyValue}
          />
        )}
      </TableCell>
      <TableCell align="center">
        {" "}
        {editShow ? (
          inner.paymentTerms
        ) : (
          <TextField
            onChange={(e) => {
              setPaymentTermsValue(e.target.value);
            }}
            value={paymentTermsValue}
            defaultValue={paymentTermsValue}
          />
        )}
      </TableCell>
      <TableCell align="center">
        {" "}
        <Tooltip title="Edit">
          <IconButton size="large" onClick={onEditApp}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        {editShow ? null : (
          <Tooltip title="Save">
            <IconButton size="large" onClick={handleAppSave}>
              <SaveIcon />
            </IconButton>
          </Tooltip>
        )}
      </TableCell>
    </TableRow>
  );
}
