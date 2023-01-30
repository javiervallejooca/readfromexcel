import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
const AppLayout = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 1,
        gridTemplateRows: "auto",
        gridTemplateAreas: `"header header header header"
                            "sidebar main main main"
                            "footer footer footer footer"`,
      }}
    >
      <Box sx={{ gridArea: "header", bgcolor: "primary.main" }}>Header</Box>
      <Box sx={{ gridArea: "main", bgcolor: "#f4f4f4" }}>
        <Outlet />
      </Box>
      <Box sx={{ gridArea: "sidebar", bgcolor: "#eaeaea" }}>
        <Sidebar />
      </Box>
      <Box sx={{ gridArea: "footer", bgcolor: "warning.dark" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default AppLayout;
