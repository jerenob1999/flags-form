"use client";

import React from "react";
import { Card, CardContent } from "@mui/material";
import { useGetCountriesQuery } from "@/services/countries";
import Form from "./form";

function FormCard() {
  const { data, error, isLoading } = useGetCountriesQuery();

  return (
    <Card sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <CardContent>
        <Form countries={data ?? []} />
      </CardContent>
    </Card>
  );
}

export default FormCard;
