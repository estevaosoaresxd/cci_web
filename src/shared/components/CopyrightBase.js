import { Typography, Link } from "@mui/material";

export default function CopyrightBase(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">Bons Fluidos</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
