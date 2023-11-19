import { useState } from "react";
import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Sliderselect from "./components/Sliderselect";
import Tenurselect from "./components/Tenurselect";

function App() {

  const[data,setData]=useState({
    homeValue:3000,
    downPayment:3000 * 0.2,
    loanAmount:3000 * 0.8,
    loanTerm:5,
    interestRate:5,
  });
  
  return (
    <div className="App">
      <Navbar/>
      
      <Container maxwidth="xl" sx={{mt: 2}}>
      <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
      <Sliderselect data={data} setData={setData}/>
      <Tenurselect data={data} setData={setData}/>
      </Grid>
      <Grid item xs={12}  md={6}>
      <Result data={data}/>
       </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default App;
