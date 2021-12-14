import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid/";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";

// mui datatable is used for displaying tasks details, the columns are defined here

const columns = [
  { field: "status", headerName: "Status", width: 150 },
  { field: "title", headerName: "Title", width: 150 },
  { field: "category", headerName: "Category", width: 150 },
  { field: "urgent", headerName: "Urgent", width: 150 },
  { field: "startDate", headerName: "Start Date", width: 150 },
  { field: "endDate", headerName: "End Date", width: 150 },
  { field: "deadline", headerName: "Deadline", width: 150 },
  { field: "location", headerName: "Location", width: 150 },
  { field: "details", headerName: "Details", width: 150 },
  { field: "issuer", headerName: "Issuer", width: 150 },
  { field: "handler", headerName: "Handler", width: 150 },
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
