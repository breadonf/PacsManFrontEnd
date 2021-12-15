import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid/";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { Button } from '@mui/material'
import axios from 'axios'
// mui datatable is used for displaying tasks details, the columns are defined here
async function apiDeleteHandler(id) {
  const apiUrl = `https://backend-productivity.herokuapp.com/tasks/api/delete-task/${id}`;
  await axios
    .delete(apiUrl)
    .then((res, req) => console.log(res))
    .catch((error) => console.log(error));
}
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
  {
    field: "",
    headerName: "Delete",
    width: 150,
    renderCell: (params) => {
      const deleteHandler = (e) => {
        e.stopPropagation()
      
        const api = params.api
        const thisRow = {};
        //api.getAllColumns()
        //.filter((c) => c.field !== "__check__" && !!c)
        //.forEach(
          //(c) => (thisRow[c.field] = params.getValue(params.id, c.field))
        //);
        
        return alert(apiDeleteHandler(params.id));
      };
      return (
        <Button variant="outlined" onClick={deleteHandler}>
          <a href={'/'}>Delete</a>
        </Button>
      );
    },
  },
  
];

export default function TaskTable(props) {
  const router = useRouter();

  const RowClickHandler = (e) => {
    router.push("/task/" + e.id);
  };

  return (
    <Grid container>
      <Grid item xs={12} sx={{ minHeight: 700 }}>
        <Card component="div" raised sx={{ height: "100%" }}>
          <DataGrid
            getRowId={(row) => row._id}
            components={{ Toolbar: GridToolbar }}
            rows={props.events}
            columns={columns}
            autoPageSize
            pagination
            {...props.events}
            onRowClick={RowClickHandler}
          />
        </Card>
      </Grid>
    </Grid>
  );
}
