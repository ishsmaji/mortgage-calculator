import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Tenurselect = ({data, setData}) => {
  

  const handleChange = (event) => {
 setData({
  ...data,loanTerm: event.target.value,
 });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">TenUre</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data.loanTerm}
        label="TenUear"
        defaultvalue={5}
        onChange={handleChange}
      >
        <MenuItem value={5}>5 Years</MenuItem>
        <MenuItem value={10}>10 Year</MenuItem>
        <MenuItem value={15}>15 Year</MenuItem>
        <MenuItem value={20}>20 Year</MenuItem>
        <MenuItem value={25}>25 Year</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Tenurselect;
