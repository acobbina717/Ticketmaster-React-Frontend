import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HomeIcon from "@mui/icons-material/Home";
import React, { useState } from "react";
import { AppShell, Header, Group, Menu, useMantineTheme } from "@mantine/core";
import { IconDoorEnter, IconAt } from "@tabler/icons";
const NavBar = () => {
  // const theme = useMantineTheme();
  return (
    <AppShell style={{ marginBottom: 50 }}>
      <Header fixed height={50} p="md">
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <Group position="left" grow style={{ flexGrow: 1 }}>
            <IconButton>
              {/* <Link to="/" style={{ textDecoration: "none", color: "white" }}> */}
              <HomeIcon />
              {/* </Link> */}
            </IconButton>
          </Group>

          <Group position="right">
            <Menu
              trigger="hover"
              control={
                <IconButton>
                  <AccountCircleIcon />
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
              {/* <Link
              to="/about" style={{ textDecoration: "none", color: "white" }}> */}
              <SupportAgentIcon />
              {/* </Link> */}
            </IconButton>
          </Group>
        </div>
      </Header>
    </AppShell>
  );
};

export default NavBar;
