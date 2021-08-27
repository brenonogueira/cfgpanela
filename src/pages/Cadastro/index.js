import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { mapas, funcao, resolucao, jogador } from "../../services/api";
import { toast } from "react-toastify";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [nickname, setNickname] = useState("");
  const [sensibilidade, setSensibilidade] = useState("");
  const [dpi, setDpi] = useState("");
  const [mira, setMira] = useState("");
  const [funcao_id, setFuncao_id] = useState(0);
  const [mapa_id, setMapa_Id] = useState(0);
  const [resolucao_id, setResolucao_id] = useState("");

  const { data: mapas_list } = useFetch(mapas);
  const { data: funcoes } = useFetch(funcao);
  const { data: resolucoes } = useFetch(resolucao);

  let history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(jogador, {
        nome: nome,
        nickname: nickname,
        sensibilidade: sensibilidade,
        dpi: dpi,
        mira: mira,
        funcao_id: funcao_id,
        mapa_id: mapa_id,
        resolucao_id: resolucao_id,
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro! Player não adicionado!", { autoClose: 2000 });
      });
    toast.success("Player adicionado com sucesso!", { autoClose: 2000 });
    history.push("/jogadores");
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={12}>
          <Toolbar style={{ backgroundColor: "#3f51b5" }}>
            <Typography variant="h6">Cfgs</Typography>
          </Toolbar>
          <div style={{ padding: "15px", border: "1px solid #3f51b5" }}>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    style={{ backgroundColor: "#fff", color: "white" }}
                    color="white"
                    fullWidth
                    label="Nome"
                    variant="outlined"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    fullWidth
                    color="primary"
                    label="Nickname"
                    variant="outlined"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6} lg={4}>
                  <TextField
                    fullWidth
                    color="primary"
                    label="DPI"
                    variant="outlined"
                    value={dpi}
                    onChange={(e) => setDpi(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <TextField
                    color="primary"
                    fullWidth
                    label="Sensibilidade"
                    variant="outlined"
                    value={sensibilidade}
                    onChange={(e) => setSensibilidade(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <TextField
                    fullWidth
                    label="Mira"
                    color="primary"
                    variant="outlined"
                    value={mira}
                    onChange={(e) => setMira(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6} lg={4}>
                  <Select
                    native
                    color="primary"
                    fullWidth
                    variant="outlined"
                    value={mapa_id}
                    onChange={(e) => setMapa_Id(e.target.value)}
                    inputProps={{
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option value={null}>Mapa Favorito</option>
                    {mapas_list?.map((mapa) => (
                      <option key={mapa.id} value={mapa.id}>
                        {mapa.mapa}
                      </option>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Select
                    native
                    color="primary"
                    fullWidth
                    variant="outlined"
                    value={funcao_id}
                    onChange={(e) => setFuncao_id(e.target.value)}
                    inputProps={{
                      id: "funcao_id",
                    }}
                  >
                    <option value={null}>Função</option>
                    {funcoes?.map((funcao) => (
                      <option key={funcao.id} value={funcao.id}>
                        {funcao.funcao}
                      </option>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Select
                    native
                    fullWidth
                    color="primary"
                    placeholder="A"
                    variant="outlined"
                    value={resolucao_id}
                    onChange={(e) => setResolucao_id(e.target.value)}
                    inputProps={{
                      id: "resolucao_id",
                    }}
                  >
                    <option value={null}>Resolução</option>
                    {resolucoes?.map((resolucao) => (
                      <option key={resolucao.id} value={resolucao.id}>
                        {resolucao.resolucao}
                      </option>
                    ))}
                  </Select>
                </Grid>
                <Grid
                  style={{ display: "flex", justifyContent: "flex-end" }}
                  item
                  xs={12}
                  md={6}
                  lg={12}
                >
                  <Button
                    fullWidth
                    size="large"
                    variant="contained"
                    color="primary"
                    onClick={submit}
                  >
                    Cadastrar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cadastro;
