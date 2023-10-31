import * as React from "react";
import TextField from "@mui/material/TextField";

export default function Input ({id, size, name, label}) {
  return (
    <div>
      <TextField
        name={name}
        id={id}
        size={size}
        label={label}
        variant="outlined"
      />
    </div>
  );
}
