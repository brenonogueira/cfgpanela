import React, { useState, useMemo, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import DataTable from "react-data-table-component";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { jogador } from "../../../services/api";
import axios from "axios";

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <Grid style={{ marginTop: "-50px" }} item xs={12} md={8} lg={12}>
      <TextField
        style={{ width: "100%" }}
        id="search"
        placeholder="buscar"
        type="text"
        value={filterText}
        onChange={onFilter}
      />
    </Grid>
    {/* <ClearButton
      style={{ marginBottom: "10px", marginTop: "-60px" }}
      type="button"
      onClick={onClear}
    >
      X
    </ClearButton> */}
  </>
);

const columns = [
  //   {
  //     name: "Nome",
  //     selector: "nome",
  //     sortable: true,
  //   },
  {
    name: "Nickname",
    selector: "nickname",
    sortable: true,
  },
  {
    name: "Sensi",
    selector: "sensibilidade",
    sortable: true,
  },
  {
    name: "DPI",
    selector: "dpi",
    sortable: true,
  },
  {
    name: "Função",
    selector: "funcaos.funcao",
    sortable: true,
  },
  {
    name: "Mapa",
    selector: "mapas.mapa",
    sortable: true,
  },
  {
    name: "Resolução",
    selector: "resolucaos.resolucao",
    sortable: true,
  },
];

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
  &:hover {
    cursor: pointer;
  }
`;

export default function Table() {
  const [jogadores, setJogadores] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = jogadores.filter((item) =>
    item.nome.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  useEffect(() => {
    //how to create a async function inside the hook useEffect
    (async () => {
      const response = await axios.get(jogador);
      setJogadores(response.data);
      console.log(jogadores);
    })();
  }, [jogadores]);

  return (
    <DataTable
      style={{ backgroundColor: "#3f51b5" }}
      columns={columns}
      data={filteredItems}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
    />
  );
}
