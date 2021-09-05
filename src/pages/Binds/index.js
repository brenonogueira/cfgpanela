import React, { useState, useEffect } from "react";
import { binds } from "../../services/api";
import axios from "axios";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Binds = () => {
  const [bindsData, setBindsData] = useState([]);

  useEffect(() => {
    //how to create a async function inside the hook useEffect
    (async () => {
      const response = await axios.get(binds);
      setBindsData(response.data);
    })();
  }, []);

  console.log(bindsData);

  return (
    <Grid container spacing={2}>
      {bindsData.map((bind) => (
        <Grid item xs={12} md={12} lg={12}>
          <Paper style={{ border: "1px solid #3f51b5" }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {bind.titulo}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {bind.descricao}
              </Typography>
            </CardContent>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Binds;
