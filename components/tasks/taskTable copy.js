import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid/";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";

const rows = [
  {
    id: 1,
    status: "status",
    col2: "World",
    col3: "World",
    col4: "World",
    col5: "World",
    col6: "World",
    col7: "World",
    col8: "World",
    col9: "World",
    col10: "World",
    col11: "World",
    col12: "World",
  },
  {
    id: 2,
    status: "status",
    col2: "2World",
    col3: "W2orld",
    col4: "Wor22ld",
    col5: "Wo2rld",
    col6: "W2orld",
    col7: "Worl2d",
    col8: "2World",
    col9: "World2",
    col10: "Wor2ld",
    col11: "Wor2ld",
    col12: "Worl2d",
  },
  {
    id: 3,
    status: "stat123us",
    col2: "Wo3rld",
    col3: "Worl3d",
    col4: "Wor3ld",
    col5: "Wo3rld",
    col6: "Wo3rld",
    col7: "Wor3ld",
    col8: "Worl3d",
    col9: "W3orld",
    col10: "W3orld",
    col11: "Wor3ld",
    col12: "Wo3rld",
  },
  {
    id: 4,
    status: "stat123us",
    col2: "Wo3rld",
    col3: "Worl3d",
    col4: "Wor3ld",
    col5: "Wo3rld",
    col6: "Wo3rld",
    col7: "Wor3ld",
    col8: "Worl3d",
    col9: "W3orld",
    col10: "W3orld",
    col11: "Wor3ld",
    col12: "Wo3rld",
  },
  {
    id: 5,
    status: "stat123us",
    col2: "Wo3rld",
    col3: "Worl3d",
    col4: "Wor3ld",
    col5: "Wo3rld",
    col6: "Wo3rld",
    col7: "Wor3ld",
    col8: "Worl3d",
    col9: "W3orld",
    col10: "W3orld",
    col11: "Wor3ld",
    col12: "Wo3rld",
  },
  {
    id: 6,
    status: "stat123us",
    col2: "Wo3rld",
    col3: "Worl3d",
    col4: "Wor3ld",
    col5: "Wo3rld",
    col6: "Wo3rld",
    col7: "Wor3ld",
    col8: "Worl3d",
    col9: "W3orld",
    col10: "W3orld",
    col11: "Wor3ld",
    col12: "Wo3rld",
  },
  {
    id: 7,
    status: "stat123us",
    col2: "Wo3rld",
    col3: "Worl3d",
    col4: "Wor3ld",
    col5: "Wo3rld",
    col6: "Wo3rld",
    col7: "Wor3ld",
    col8: "Worl3d",
    col9: "W3orld",
    col10: "W3orld",
    col11: "Wor3ld",
    col12: "Wo3rld",
  },
  {
    id: 8,
    status: "stat123us",
    col2: "Wo3rld",
    col3: "Worl3d",
    col4: "Wor3ld",
    col5: "Wo3rld",
    col6: "Wo3rld",
    col7: "Wor3ld",
    col8: "Worl3d",
    col9: "W3orld",
    col10: "W3orld",
    col11: "Wor3ld",
    col12: "Wo3rld",
  },
];

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
            getRowId={(row) => row._id}
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