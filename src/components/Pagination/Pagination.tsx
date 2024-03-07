import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({
  info,
  pageNumber,
  setPageNumber,
}: {
  info: any;
  pageNumber: number;
  setPageNumber: Function;
}) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-1 my-2"
      nextLabel=">"
      previousLabel="<"
      nextClassName="btn btn-light"
      previousClassName="btn btn-light"
      pageClassName="page-item"
      activeClassName="active"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      pageLinkClassName="page-link"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info.pages}
    />
  );
};

export default Pagination;
