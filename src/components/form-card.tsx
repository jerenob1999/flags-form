"use client";

import { useEffect } from "react";
import Form from "./form";
import { toast } from "react-toastify";
import { useGetCountriesQuery } from "@/services/countries";
import { LinearProgress } from "@mui/material";

function FormCard() {
  const { data, error, isLoading } = useGetCountriesQuery("all");

  useEffect(() => {
    if (error) {
      toast(
        "An error occurred while loading the form. Please try again later.",
        {
          type: "error",
          position: "bottom-center",
        }
      );
    }
  }, [error]);

  if (error) return null;

  return (
    <div className="max-w-[600px] mx-auto mt-4">
      <h2> Form </h2>
      {isLoading ? <LinearProgress sx={{ mb: 2 }} /> : null}
      <Form countries={data ?? []} />
    </div>
  );
}

export default FormCard;
