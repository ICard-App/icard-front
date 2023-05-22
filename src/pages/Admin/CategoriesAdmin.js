import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import {
  HeaderPage,
} from "../../components/Admin";
import { ModalBasic } from "../../components/Common";
import { useCategory } from "../../hooks";

export function CategoriesAdmin() {
  return (
    <>
      <HeaderPage
        title="Categorias"
        btnTitle="Nueva categoria"
        btnClick={addCategory}
      />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <h2>Lista de Categorias</h2>
      )}
      </>
  );
}
