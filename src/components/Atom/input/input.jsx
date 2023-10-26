import * as React from "react";
import TextField from "@mui/material/TextField";

export default function BasicTextFields(id, new_className, size, name, label) {
  return (
    <div>
      <TextField
        name={name}
        id={id}
        size={size}
        label={label}
        new_className={new_className}
        variant="outlined"
      />
    </div>
  );
}
