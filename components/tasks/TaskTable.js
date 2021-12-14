import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid/";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";


const columns = [
  { field: "status", headerName: "Status", width: 150 },
  { field: "col2", headerName: "Title", width: 150 },
  { field: "col3", headerName: "Category", width: 150 },
  { field: "col4", headerName: "Urgent", width: 150 },
  { field: "col5", headerName: "Start Date", width: 150 },
  { field: "col6", headerName: "End Date", width: 150 },
  { field: "col8", headerName: "Deadline", width: 150 },
  { field: "col9", headerName: "Location", width: 150 },
  { field: "col10", headerName: "Details", width: 150 },
  { field: "col11", headerName: "Issuer", width: 150 },
  { field: "col12", headerName: "Handler", width: 150 },
];

export default function TaskTable(props) {
  const router = useRouter();

  const RowClickHandler = (e) => {
    router.push("/task/" + e.id);
  };

  return (
    <Grid container>
      <Grid item xs={12} sx={{ minHeight: 500 }}>
        <Card component="div" raised sx={{ height: "100%" }}>
          <DataGrid
            getRowId = {(row)=> row._id}
            components={{ Toolbar: GridToolbar }}
            rows={props.events}
            columns={columns}
            autoHeight
            autoPageSize
            onRowClick={RowClickHandler}
          />
        </Card>
      </Grid>
    </Grid>
  );
}
