"use client";

import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormSchema } from "@/schemas/form.schema";
import { defaultValues } from "@/constants/default-values";
import {
  Box,
  Button,
  Grid,
  TextField,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { Country } from "@/interfaces/country.interface";
import { toast } from "react-toastify";

interface Props {
  countries: Country[];
}

const Form = ({ countries }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("Form Data:", data);
      setIsLoading(false);
      toast("Form submited successfully!", {
        type: "success",
        isLoading: false,
        position: "bottom-center",
      });
      reset();
    }, 3000);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                slotProps={{ formHelperText: { className: "h[20px]" } }}
                fullWidth
                disabled={isLoading}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="middleName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Middle Name"
                error={!!errors.middleName}
                helperText={errors.middleName?.message || " "}
                slotProps={{ formHelperText: { className: "h[20px]" } }}
                fullWidth
                disabled={isLoading}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                error={!!errors.lastName}
                slotProps={{ formHelperText: { className: "h[20px]" } }}
                helperText={errors.lastName?.message || " "}
                fullWidth
                disabled={isLoading}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="addressLine1"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Address Line 1"
                error={!!errors.addressLine1}
                slotProps={{ formHelperText: { className: "h[20px]" } }}
                helperText={errors.addressLine1?.message || " "}
                fullWidth
                disabled={isLoading}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="addressLine2"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Address Line 2 (Optional)"
                slotProps={{ formHelperText: { className: "h[20px]" } }}
                error={!!errors.addressLine2}
                helperText={errors.addressLine2?.message || " "}
                fullWidth
                disabled={isLoading}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="City"
                error={!!errors.city}
                slotProps={{ formHelperText: { className: "h[20px]" } }}
                helperText={errors.city?.message || " "}
                fullWidth
                disabled={isLoading}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="State"
                error={!!errors.state}
                slotProps={{ formHelperText: { className: "h[20px]" } }}
                helperText={errors.state?.message || " "}
                fullWidth
                disabled={isLoading}
              ></TextField>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Country"
                error={!!errors.country}
                slotProps={{ formHelperText: { className: "h[20px]" } }}
                helperText={errors.country?.message || " "}
                fullWidth
                disabled={isLoading}
                select
              >
                {countries?.map((country) => (
                  <MenuItem
                    key={country.name.common}
                    value={country.name.common}
                  >
                    {country.name.common}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="zipCode"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                disabled={isLoading}
                slotProps={{ formHelperText: { className: "h[20px]" } }}
                label="Zip Code"
                error={!!errors.zipCode}
                helperText={errors.zipCode?.message || " "}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Date of Birth"
                type="date"
                disabled={isLoading}
                slotProps={{
                  inputLabel: { shrink: true },
                  formHelperText: { className: "h[20px]" },
                }}
                error={!!errors.dateOfBirth}
                helperText={errors.dateOfBirth?.message || " "}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="age"
            control={control}
            render={({ field }) => (
              <TextField
                slotProps={{
                  input: { inputProps: { min: 0 } },
                  formHelperText: { className: "h[20px]" },
                }}
                {...field}
                label="Age"
                type="number"
                error={!!errors.age}
                helperText={errors.age?.message || " "}
                fullWidth
                disabled={isLoading}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            disabled={isLoading}
            variant="contained"
            fullWidth
            endIcon={isLoading && <CircularProgress size={10} />}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
