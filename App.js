import React, { useState } from "react";
import PaginationFunc from "./Pagination/Pagination";

export default function App() {
  return (
    <div>
      <PaginationFunc currentPage={22} totalPages={50} />
    </div>
  );
}
