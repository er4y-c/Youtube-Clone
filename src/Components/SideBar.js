import { Stack } from "@mui/material";
import { categories } from "../utils/constant";

const SideBar = ({selectedCategory, setselectedCategory}) => {
  return (
    <Stack 
        direction="row"
        sx={{
            overFlowY: "auto",
            height:{xs: "small", md: "95%"}, 
            flexDirection:{md:"column"}
        }}
    >
        {categories.map((category) => (
            <button 
                className="category-btn" 
                onClick={() => setselectedCategory(category.name)}
                style={{
                    background: category.name===selectedCategory && "#FC1503",
                    color: "white"}
                }
                key={category.name}   
            >
                <span style={{color: category.name===selectedCategory ? "white" : "red", marginRight:"15px"}}>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar