import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center"
    justifyContent="space-between"
    p={2} 
    sx={{position:"sticky", background:"black", top:0}}>
      <Link to="/" sx={{display: "flex", alignItems: "center"}}>
          <img src={logo} alt="logo" height={45}/>
      </Link>
      <SearchBar />
  </Stack>
)

export default Navbar