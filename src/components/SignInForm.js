import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import {
  Box,
  TextInput,
  NumberInput,
  Button,
  Group,
  Checkbox,
  PasswordInput,
} from "@mantine/core";

const schema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First Name should have at least 2 letters" }),
  lastName: z
    .string()
    .min(2, { message: "Last Name should have at least 2 letters" }),
  email: z.string().email({ message: "Invalid email" }),
  age: z
    .number()
    .min(18, { message: "You must be at least 18 to create an account" }),
  password: z.string().min(6, { message: "Invalid password" }),
});

const SignInForm = () => {
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: 0,
    },
  });

  const submit = form.onSubmit((values) => console.log(values));

  return (
    <Box sx={{ maxWidth: 340 }} mx="auto">
      <form onSubmit={submit}>
        <TextInput
          label="First Name"
          placeholder="First Name"
          {...form.getInputProps("firstName")}
        />
        <TextInput
          label="Last Name"
          placeholder="Last Name"
          {...form.getInputProps("lastName")}
        />
        <TextInput
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm Password"
          {...form.getInputProps("confirmPassword")}
        />
        <NumberInput
          mt="sm"
          label="Age"
          placeholder="Age"
          {...form.getInputProps("age")}
        />
        <Group mt="md">
          <Checkbox label="I agree to sell my privacy" size="xs" />
        </Group>
        <Group position="center" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};

export default SignInForm;
