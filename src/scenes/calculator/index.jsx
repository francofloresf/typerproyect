import Header from "../../components/Header";
import { Box } from "@mui/material"

const Calculator = () => {
return (
<Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Calculadora"/>

      </Box>

</Box>
    );                                          
}
export default Calculator;