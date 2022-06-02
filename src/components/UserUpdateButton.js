import React from 'react';
import { Badge } from '@mantine/core';

const UserUpdateButton = () => {

// function handleUpdateClick

  return (
    <>
    <Badge color="dark" variant="light" onClick={(e) => console.log("update clicked")}>Update</Badge>
    <br></br>
    <Badge color="red" variant="light" onClick={(e) => console.log("update clicked")}>Delete User</Badge>
    </>
  )
}

export default UserUpdateButton;