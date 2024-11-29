import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";

const DragAndDrop = ({ pokemon, index, movePokemon }) => {
  const [drag] = useDrag(() => ({
    type: "POKEMON",
    item: { index },
  }));

  const [drop] = useDrop(() => ({
    accept: "POKEMON",
    hover: (item) => {
      if (item.index !== index) {
        movePokemon(item.index, index);
        item.index = index; // Update the dragged item's index
      }
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      className="p-2 border rounded-md shadow-sm bg-white dark:bg-gray-700 dark:text-white"
    >
      <span>{pokemon.name}</span>
    </div>
  );
};

export default DragAndDrop;
