import {
  Grid,
  Card,
  Image,
  Button,
  Group,
  Text,
  useMantineTheme,
  FloatingTooltip,
} from "@mantine/core";
import { IconStar, IconMessage } from "@tabler/icons";

const EventCard = ({ id, image, event_name, location, btntxt }) => {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Grid.Col span={4}>
      <Card shadow="sm" p="lg" key={id}>
        <Card.Section>
          <Image src={image} height={160} alt={event_name} />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{event_name}</Text>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {location}
        </Text>

        <Group position="right">
          <FloatingTooltip label="Review" color="dark" position="top">
            <IconMessage onClick={(e) => console.log("message clicked")} />
          </FloatingTooltip>
          <FloatingTooltip label="Favorite" color="dark" position="top">
            <IconStar onClick={(e) => console.log("favorite clicked")} />
          </FloatingTooltip>
        </Group>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={() => console.log(id)}
        >
          {btntxt}
        </Button>
      </Card>
    </Grid.Col>
  );
};

export default EventCard;
