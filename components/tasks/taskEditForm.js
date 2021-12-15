import React from "react";
import { useRef, useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Inputlabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SendAndArchiveIcon from "@mui/icons-material/SendAndArchive";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import { FormControlLabel, MenuItem, Select } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Link from "next/link";

// A form for adding task to the database, where users is fetched from database for autocompleting

/*const fetchedTaskData = [
  { user: "123" },
  { user: "hkchadmin" },
  { user: "handler" },
  { user: "issuer" },
  { user: "example" },
  { user: "example1" },
];*/

/* const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.Name,
}); */

export default function TaskEditForm(props) {
  const statusInputRef = useRef();
  const titleInputRef = useRef();
  const categoryInputRef = useRef();
  const locationInputRef = useRef();
  const detailsInputRef = useRef();
  const issuerInputRef = useRef(null);
  const handlerInputRef = useRef(null);
  const [selectedUrgent, setUrgent] = useState(true);
  const [selectedStartDate, setStartDate] = useState(null);
  const [selectedEndDate, setEndDate] = useState(null);
  const [selectedDeadline, setDeadline] = useState(null);
  const [yetSubmited, setSubmited] = useState(true);

  function submitHandler(event) {
    event.preventDefault();

    const enteredStatus = statusInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;
    const enteredUrgent = selectedUrgent;
    const enteredStartDate = selectedStartDate;
    const enteredEndDate = selectedEndDate;
    const enteredDeadline = selectedDeadline;
    const enteredLocation = locationInputRef.current.value;
    const enteredDetails = detailsInputRef.current.value;
    const enteredIssuer = issuerInputRef.current.value;
    const enteredHandler = handlerInputRef.current.value;

    const taskData = {
      status: enteredStatus,
      title: enteredTitle,
      category: enteredCategory,
      urgent: enteredUrgent,
      startDate: enteredStartDate,
      endDate: enteredEndDate,
      deadline: enteredDeadline,
      location: enteredLocation,
      details: enteredDetails,
      issuer: enteredIssuer,
      handler: enteredHandler,
    };

    props.onEditTask(taskData);
    setSubmited(false);
  }

  if (yetSubmited) {
    return (
      <Paper sx={{ m: 4, bgcolor: "lightyellow" }} elevation={24}>
        <Box component="form">
          <Grid
            container
            spacing={2}
            padding={10}
            alignItems="center"
            rowSpacing={5}
          >
            <Grid item xs={1}></Grid>
            <Grid item xs={7}>
              <FormControl required fullWidth>
                <Inputlabel id="select-status">Status</Inputlabel>
                <Select
                  required
                  labelId="select-status"
                  id="status"
                  inputRef={statusInputRef}
                  defaultValue={"pending"}
                >
                  <MenuItem value={"pending"} key={"pending"}>
                    Pending
                  </MenuItem>
                  <MenuItem value={"inProgress"} key={"inProgress"}>
                    In Progress
                  </MenuItem>
                  <MenuItem value={"completed"} key={"completed"}>
                    Completed
                  </MenuItem>
                  <MenuItem value={"failed"} key={"failed"}>
                    Failed
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl required fullWidth>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedUrgent}
                      onChange={(selectedUrgency) => {
                        setUrgent(selectedUrgency.target.checked);
                      }}
                    />
                  }
                  label="Urgent"
                />
              </FormControl>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <FormControl required fullWidth>
                <Inputlabel id="select-category">Category</Inputlabel>
                <Select
                  required
                  labelId="select-category"
                  id="category"
                  inputRef={categoryInputRef}
                  defaultValue={"itSupport"}
                >
                  <MenuItem value={"itSupport"} key={"itSupport"}>
                    IT support
                  </MenuItem>
                  <MenuItem value={"errorHandling"} key={"errorHandling"}>
                    Error handling
                  </MenuItem>
                  <MenuItem value={"documentation"} key={"documentation"}>
                    Documentation
                  </MenuItem>
                  <MenuItem
                    value={"serverMaintainence"}
                    key={"serverMaintainence"}
                  >
                    Server Maintainence
                  </MenuItem>
                  <MenuItem value={"stockTaking"} key={"stockTaking"}>
                    Stock Taking
                  </MenuItem>
                  <MenuItem
                    value={"externalFilmHandling"}
                    key={"externalFilmHandling"}
                  >
                    external film handling
                  </MenuItem>
                  <MenuItem value={"exportLocalFilm"} key={"exportLocalFilm"}>
                    export local film
                  </MenuItem>
                  <MenuItem value={"others"} key={"others"}>
                    others
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <FormControl fullWidth>
                <Inputlabel>Task Title</Inputlabel>
                <Input
                  required
                  type="text"
                  id="title"
                  inputRef={titleInputRef}
                />
              </FormControl>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Start Date"
                    value={selectedStartDate}
                    onChange={(newStartDate) => {
                      setStartDate(newStartDate);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </FormControl>
            </Grid>
            <Grid item xs={5}>
              <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="End Date"
                    value={selectedEndDate}
                    minDate={selectedStartDate}
                    onChange={(newEndDate) => {
                      setEndDate(newEndDate);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </FormControl>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Deadline"
                    value={selectedDeadline}
                    minDate={selectedStartDate}
                    onChange={(newDeadline) => {
                      setDeadline(newDeadline);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </FormControl>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <FormControl fullWidth>
                <Inputlabel id="select-location">Location</Inputlabel>
                <Select
                  required
                  labelId="select-location"
                  id="location"
                  inputRef={locationInputRef}
                  defaultValue={"pacs"}
                >
                  <MenuItem value={"pacs"} key={"pacs"}>
                    PACS Room
                  </MenuItem>
                  <MenuItem value={"xr"} key={"xr"}>
                    General X-Ray Room
                  </MenuItem>
                  <MenuItem value={"us"} key={"us"}>
                    Ultrasound Exam Room
                  </MenuItem>
                  <MenuItem value={"ct"} key={"ct"}>
                    Computed Tomography Exam Room
                  </MenuItem>
                  <MenuItem value={"mri"} key={"mri"}>
                    Magnetic Resonance Imaging Exam Room
                  </MenuItem>
                  <MenuItem value={"air"} key={"air"}>
                    Angiograohy and Interventi onal Radiography Theatre
                  </MenuItem>
                  <MenuItem value={"report"} key={"report"}>
                    Reporting Area
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <FormControl fullWidth>
                <Inputlabel>Details</Inputlabel>
                <Input
                  multiline
                  rows={4}
                  id="details"
                  inputRef={detailsInputRef}
                />
              </FormControl>
            </Grid>
            <Grid item xs={1}></Grid>
            
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <Button
                  variant="contained"
                  type="submit"
                  aria-label="submit"
                  endIcon={<SendAndArchiveIcon />}
                  onClick={submitHandler}
                >
                  Submit
                </Button>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <Button
                  variant="contained"
                  type="reset"
                  aria-label="reset"
                  endIcon={<RotateLeftIcon />}
                >
                  Reset
                </Button>
              </FormControl>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Box>
      </Paper>
    );
  } else {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ justifyContent: "center", p: 4 }}>
          <Paper
            sx={{
              m: 4,
              bgcolor: "grey",
              color: "white",
              minHeight: 200,
              textAlign: "center",
            }}
            elevation={6}
          >
            <Grid item sx={{ pt: 4 }}>
              <Typography variant="h2" color="primary">
                Task Updated!
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ pt: 4, pb: 2 }}>
              <Link href="/">
                <Button variant="contained">Back to Home</Button>
              </Link>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
