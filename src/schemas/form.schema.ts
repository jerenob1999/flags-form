import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().nonempty("First Name is required"),
  middleName: z.string().nonempty("Middle Name is required"),
  lastName: z.string().nonempty("Last Name is required"),
  addressLine1: z.string().nonempty("Address Line 1 is required"),
  addressLine2: z.string().optional(),
  city: z.string().nonempty("City is required"),
  state: z.string().nonempty("State is required"),
  country: z.string().nonempty("Country is required"),
  age: z.string().nonempty("Age is required"),
  zipCode: z
    .string()
    .regex(/^\d{5}$/, "Zip Code must be 5 digits")
    .nonempty("Zip Code is required"),
  dateOfBirth: z
    .string()
    .nonempty("Date of Birth is required")
    .refine((value) => !isNaN(Date.parse(value)), {
      message: "Invalid Date",
    }),
});

export type FormSchema = z.infer<typeof formSchema>;
