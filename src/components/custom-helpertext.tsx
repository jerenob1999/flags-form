import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
  message?: string;
}

export function CustomHelperText({ message }: Props) {
  return (
    <Typography variant="caption" sx={{ minHeight: 200 }}>
      {message}
    </Typography>
  );
}
