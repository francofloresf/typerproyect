import Header from "../../components/Header";
import { Box } from "@mui/material"

const Pomodoro = () => {
return (
<Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Pomodoro" subtitle="Realiza intervalos de estudio cronometrado" />

      </Box>

</Box>
    );                                          
}
export default Pomodoro;