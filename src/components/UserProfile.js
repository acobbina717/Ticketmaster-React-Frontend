import React, {useState} from 'react'
import { Card, Avatar, Text, Group, useMantineTheme, Modal, Button } from '@mantine/core';
import UserUpdateButton from './UserUpdateButton';
import NavBar from './NavBar';
import { TextInput } from '@mantine/core';


function UserProfile({id, name, email, username, password, dob}) {

  const [opened, setOpened] = useState(false);

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
        <Group position="center" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>USER PROFILE</Text>
        </Group>
        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>Eric Xiao{/*name*/}</Text>
        </Group>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>Email: es.xiao93@gmail.com{/*email*/}</Text>
        </Group>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>  
          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>UserName: es.xiao93{/*username*/}</Text>
        </Group>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>  
          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>Password: *********{/*password*/}</Text>
        </Group>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>Date Of Birth: 11-27-1993{/*dob*/}</Text>
        </Group>


      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="User Information"
      >
      <div style={{ width: 340, margin: 'auto' }}>
      <Card shadow="sm" p="lg">

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <TextInput placeholder="Name" label="Full Name" />
        </Group>


        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <TextInput placeholder="Email" label="Email" />
        </Group>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>  
        <TextInput placeholder="Username" label="Username" />
        </Group>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>  
        <TextInput placeholder="Password" label="8-12 Characters" />
        </Group>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <TextInput placeholder="MM-DD-YYYY" label="Date of Birth" />
        </Group>
        <UserUpdateButton />
      </Card>
    </div>
    </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Edit Profile</Button>
      </Group>
      <br></br>
      <Group position="center">
        <Button>Reviews</Button>
      </Group>
      </Card>
      </div>
      <br></br>
      <div style={{ width: 340, margin: 'auto' }}>
      <Card shadow="sm" p="lg">

      
      </Card>
      </div>
    </>
    
  );
}

export default UserProfile;



