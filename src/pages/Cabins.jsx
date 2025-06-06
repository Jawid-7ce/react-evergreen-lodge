import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";


function Cabins() {
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
    <Row type="vertical">
      <CabinTable/>
      <AddCabin/>
    </Row>
    </>
  );
}

export default Cabins;
