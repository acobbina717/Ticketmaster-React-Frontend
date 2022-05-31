import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

const EventCard = ({ events }) => {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  const eventItems = events.map((event) => {
    return (
      <Card shadow="sm" p="lg" key={event.id}>
        <Card.Section>
          <Image src={event.image_url} height={160} alt="Norway" />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{event.event_name}</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {event.location}
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Buy Ticket Now
        </Button>
      </Card>
    );
  });

  return <div style={{ width: 340, margin: "auto" }}>{eventItems}</div>;
};

export default EventCard;
