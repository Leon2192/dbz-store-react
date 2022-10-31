import React from "react";
import { Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./Footer.css";

const Footer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <footer>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <Link>
                <h5>Features</h5>
              </Link>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Link>
                <h5>Pricing</h5>
              </Link>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Link>
                <h5>Contact</h5>
              </Link>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Link>
                <h5>Items</h5>
              </Link>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Link>
                <h5>Sites</h5>
              </Link>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Link>
                <h5>Global</h5>
              </Link>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
