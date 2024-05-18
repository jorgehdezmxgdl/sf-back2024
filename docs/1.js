import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AltaCatalogo from "./AltaCatalogo";


export default function Catalogo() {
  const [rows, setRows] = useState([]);
  const [show, setShow] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "sku",
      headerName: "SKU",
      width: 190,
      editable: false,
    },
    {
      field: "barcode",
      headerName: "Barcode",
      width: 150,
      editable: false,
    },
    {
        field: "foto",
        headerName: "Imagen",
        width: 200,
        editable: false,
    },
    {
      field: "disenador",
      headerName: "Diseñador",
      width: 200,
      editable: false,
    },
    {
      field: "producto",
      headerName: "Producto",
      width: 150,
      editable: false,
    },
    {
        field: "genero",
        headerName: "Género",
        width: 150,
        editable: false,
    },
    {
        field: "ml",
        headerName: "ML",
        width: 150,
        editable: false,
    },
    {
        field: "tipo",
        headerName: "Tipo",
        width: 150,
        editable: false,
    },
    {
        field: "prsentacion",
        headerName: "Presentación",
        width: 150,
        editable: false,
    },
    {
        field: "pais",
        headerName: "País de origen",
        width: 150,
        editable: false,
    },
    {
        field: "estatus",
        headerName: "Estatus",
        width: 150,
        editable: false,
    },
    {
      field: "actions",
      headerName: "Acciones",
      sortable: false,
      headerAlign: "center",
      cellClassName: "actions-cell",
      width: 290,
      renderCell: (params) => {},
    },
  ];

  const handleOpenDialog = () => {
     setShow(true);
  }

  const handleCloseDialog = () => {
    setShow(false);
  } 

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              endIcon={<AddCircleOutlineIcon />}
              onClick={handleOpenDialog}
            >
              Adicionar producto
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ height: 400, mt: 2 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[5, 10, 15, 20]}
            checkboxSelection
            disableSelectionOnClick
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 15,
                },
              },
            }}
            sx={{
              "& .actions-cell:focus-within": {
                outline: "none",
              },
            }}
          />
        </Box>
      </Box>
      { show ?  <AltaCatalogo  handleCloseDialog={handleCloseDialog} /> : null}
    </div>
  );
}
