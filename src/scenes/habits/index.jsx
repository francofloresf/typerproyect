import Header from "../../components/Header";
import { Box } from "@mui/material"

const Habits = () => {
return (
<Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Habits" subtitle="Registra nuevos habitos y llevalos a cabo" />

      </Box>

</Box>
    );                                          
}
export default Habits;