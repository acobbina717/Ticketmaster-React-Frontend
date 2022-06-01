import React from 'react'
import { Card, Avatar, Text, Group, useMantineTheme } from '@mantine/core';
import UserUpdateButton from './UserUpdateButton';
import NavBar from './NavBar';


function UserProfile({id, name, email, username, password, dob}) {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <>
    <NavBar />
    <div style={{ width: 680, margin: 'auto' }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
            <Group position="center" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                <Avatar 
                color="cyan" 
                radius="xl"
                >
                EX
                </Avatar>
            </Group>    
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>Eric Xiao{/*name*/}</Text>
          <UserUpdateButton />
        </Group>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>Email: es.xiao93@gmail.com{/*email*/}</Text>
          <UserUpdateButton />
        </Group>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>  
          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>UserName: es.xiao93{/*username*/}</Text>
          <UserUpdateButton />
        </Group>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>  
          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>Password: *********{/*password*/}</Text>
          <UserUpdateButton />
        </Group>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>Date Of Birth: 11-27-1993{/*dob*/}</Text>
          <UserUpdateButton />
        </Group>
      </Card>
    </div>
    </>
  );
}

export default UserProfile;