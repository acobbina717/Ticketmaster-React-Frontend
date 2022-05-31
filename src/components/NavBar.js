import { AppBar, Toolbar, Stack, Button, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <AppBar color="primary">
        <Toolbar>
          <Stack direction="row" spacing={1} sx={{ flexGrow: 1 }}>
            <Typography variant="h6">Ticket Maestro</Typography>

            <Button variant="contained" color="secondary">
              {/* <Link to="/" style={{ textDecoration: "none", color: "white" }}> */}
              Home
              {/* </Link> */}
            </Button>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              color="secondary"
              id="view-content-button"
            >
              Login
            </Button>

            <Button variant="contained" color="secondary">
              {/* <Link
              to="/about" style={{ textDecoration: "none", color: "white" }}> */}
              Get Help
              {/* </Link> */}
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
