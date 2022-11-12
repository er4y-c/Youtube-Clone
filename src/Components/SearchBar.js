import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper 
        component="form" 
        onSubmit={()=>{}} 
        sx={{
            borderRadius: 20,
            border: "1px solid #e3e3e3",
            boxShadow: "none",
            pl: 3,
            ml: { sm: 5 },
        }}
    >
        <input
            className="search-bar" 
            placeholder="Search"
            value=""
            onChange={()=>{}}
        />
        <IconButton 
            type="submit"
            sx={{
                p: "10px",
                color: "red",
            }}
        >
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar