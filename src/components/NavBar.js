import { IconButton } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";
import { AppShell, Header, Group, Menu, useMantineTheme } from "@mantine/core";
import { IconDoorEnter, IconAt } from "@tabler/icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  // const theme = useMantineTheme();

  return (
    <AppShell style={{ marginBottom: 50 }}>
      <Header fixed height={50} p="md">
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <Group position="left" grow style={{ flexGrow: 1 }}>
            <IconButton>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <HomeIcon />
              </Link>
            </IconButton>
            <IconButton>
              <Link
                to="/userprofile"
                style={{ textDecoration: "none", color: "black" }}
              >
                <PersonIcon />
              </Link>
            </IconButton>
          </Group>

          <Group position="right">
            <Menu
              trigger="hover"
              control={
                <IconButton>
                  <LoginIcon />
                </IconButton>
              }
            >
              <Menu.Item
                icon={<IconDoorEnter />}
                onClick={() => console.log("Login")}
              >
                Login
              </Menu.Item>
              <Menu.Item
                icon={<IconAt />}
                onClick={() => console.log("Register")}
              >
                Register
              </Menu.Item>
            </Menu>

            <IconButton>
              <Link
              to="/help" style={{ textDecoration: "none", color: "black" }}>
              <HelpCenterIcon />
              </Link>
            </IconButton>
          </Group>
        </div>
      </Header>
    </AppShell>
  );
};

export default NavBar;
