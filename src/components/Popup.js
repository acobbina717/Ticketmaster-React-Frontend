import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import { useModals } from "@mantine/modals";

const Popup = ({ btntxt, children }) => {
  const [opened, setOpened] = useState(false);
  const modals = useModals;

  return (
    <>
      {/* <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {children}
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>{"btn txt"}</Button>
      </Group> */}
    </>
  );
};

export default Popup;
