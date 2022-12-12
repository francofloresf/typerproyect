import Header from "../../components/Header";
import { Box } from "@mui/material"

const Tasktodo = () => {
return (
<Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Task To Do" subtitle="Todas tus tareas en un sitio" />

      </Box>

</Box>
);                                          
}
export default Tasktodo;