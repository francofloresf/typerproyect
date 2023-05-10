import Header from "../../components/Header";
import { Box } from "@mui/material"

const Pomodoro = () => {
return (
<Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="POMODORO" subtitle="Ingresa la cantidad de minutos para la sesion y para el break" />
      </Box>
</Box>
    );                                          
}
export default Pomodoro;