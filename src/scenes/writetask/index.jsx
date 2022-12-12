import Header from "../../components/Header";
import { Box } from "@mui/material"

const WriteTask = () => {
return (
<Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Write Task" subtitle="Registra todas tus tareas" />

      </Box>

</Box>
    );                                          
}
export default WriteTask;