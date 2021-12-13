import React from "react";
import { useRef, useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Inputlabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SendAndArchiveIcon from "@mui/icons-material/SendAndArchive";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import { FormControlLabel, MenuItem, Select } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";

export default function TaskForm(props) {
  const statusInputRef = useRef();
  const titleInputRef = useRef();
  const categoryInputRef = useRef();
  const locationInputRef = useRef();
  const detailsInputRef = useRef();
  const issuerInputRef = useRef();
  const handlerInputRef = useRef();
  const [selectedUrgent, setUrgent] = useState(true);
  const [selectedStartDate, setStartDate] = useState(null);
  const [selectedEndDate, setEndDate] = useState(null);
  const [selectedDeadline, setDeadline] = useState(null);
  //const [isSubmited, setSubmited] = useState(false);

  function SubmitMsg(props) {
    const Submited = props.isSubmited;
    if (Submited) {
      return <Typography variant="h4" sx={{color:'lightblue'}}> Task Submited! </Typography>;
    }
  }

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

    props.onAddTask(taskData);
    // setSubmited(true);
    event.target.reset();
  }

  return (
    <Paper sx={{ m: 4, bgcolor: "lightyellow" }} elevation={24}>
      <Box component="div" sx={{textAlign:'center'}}>
        <SubmitMsg isSubmited={true} />
      </Box>
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
                defaultValue={"Pending"}
              >
                <MenuItem value={"Pending"}>Pending</MenuItem>
                <MenuItem value={"InProgress"}>In Progress</MenuItem>
                <MenuItem value={"Completed"}>Completed</MenuItem>
                <MenuItem value={"Failed"}>Failed</MenuItem>
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
                defaultValue={"it support"}
              >
                <MenuItem value={"it support"}>IT support</MenuItem>
                <MenuItem value={"error handling"}>Error handling</MenuItem>
                <MenuItem value={"documentation"}>Documentation</MenuItem>
                <MenuItem value={"server maintainence"}>
                  Server Maintainence
                </MenuItem>
                <MenuItem value={"stock taking"}>Stock Taking</MenuItem>
                <MenuItem value={"external film handling"}>
                  external film handling
                </MenuItem>
                <MenuItem value={"export local film"}>
                  export local film
                </MenuItem>
                <MenuItem value={"others"}>others</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <FormControl fullWidth>
              <Inputlabel>Task Title</Inputlabel>
              <Input required type="text" id="title" inputRef={titleInputRef} />
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
                defaultValue={"PACS"}
              >
                <MenuItem value={"PACS"}>PACS Room</MenuItem>
                <MenuItem value={"XR"}>General X-Ray Room</MenuItem>
                <MenuItem value={"US"}>Ultrasound Exam Room</MenuItem>
                <MenuItem value={"CT"}>Computed Tomography Exam Room</MenuItem>
                <MenuItem value={"MRI"}>
                  Magnetic Resonance Imaging Exam Room
                </MenuItem>
                <MenuItem value={"AIR"}>
                  Angiograohy and Interventi onal Radiography Theatre
                </MenuItem>
                <MenuItem value={"Report"}>Reporting Area</MenuItem>
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
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <FormControl fullWidth>
              <Autocomplete
                id="issuer"
                loading
                // options={fetchedTaskData}
                // getOptionLabel={(option) => option.users}
                options={[{ label: "test1" }, { label: "test2" }]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Issuer"
                    inputRef={issuerInputRef}
                  />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <FormControl fullWidth>
              <Autocomplete
                id="handler"
                loading
                // options={fetchedTaskData}
                // getOptionLabel={(option) => option.users}
                options={[{ label: "test3" }, { label: "test4" }]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Handler"
                    inputRef={handlerInputRef}
                  />
                )}
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
}
