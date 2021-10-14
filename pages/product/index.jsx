import React from "react";
import ListProduct from "../../containers/listProduct";
import ListWitOutFilters from "../../containers/listProduct/ListWithOutFilters";

function product({ word, category, ap }) {
  return (
    <>
      {ap !== "" && (
        <>
          <ListWitOutFilters api={ap} />
        </>
      )}

      {ap === "" && <ListProduct searchWord={word} categoryIn={category} />}
    </>
  );
}

export default product;

// function server side
export async function getServerSideProps(context) {
  return {
    props: {
      id: context.query.id || "",
      category: context.query.cat || "",
      word: context.query.word || "",
      ap: context.query.ap || "",
    },
  };
}
