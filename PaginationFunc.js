import { useState } from "react";
import {
  Badge,
  Col,
  Container,
  Pagination,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import "./Pagination.css";

export default function PaginationFunc(props) {
  //define states and constants
  let pageSize = props.pageSize;
  const [totalPages, setTotalPages] = useState(props.totalPages);
  const [currentPage, setCurrentPage] = useState(props.currentPage);
  let pageNumbers = [
    currentPage - 3,
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
  ];
  //chaning page function
  const changePagination = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <section className="todo-container">
      {
        <Container>
          <Row>
            <Col>
              <Pagination className="pagination d-flex justify-content-center">
                <Pagination.Item
                  className={currentPage === 1 && "active"}
                  onClick={() => changePagination(1)}
                  key={0}
                >
                  {1}
                </Pagination.Item>
                {currentPage > 4 && <Pagination.Item>...</Pagination.Item>}
                {pageNumbers.map((page) => {
                  return (
                    page >= 1 &&
                    page <= totalPages - 2 && (
                      <Pagination.Item
                        className={currentPage === page + 1 && "active"}
                        onClick={() => changePagination(page + 1)}
                        key={page + 1}
                      >
                        {page + 1}
                      </Pagination.Item>
                    )
                  );
                })}
                {currentPage <= totalPages - 4 && (
                  <Pagination.Item>...</Pagination.Item>
                )}
                <Pagination.Item
                  className={currentPage === totalPages && "active"}
                  onClick={() => changePagination(totalPages)}
                  key={totalPages}
                >
                  {totalPages}
                </Pagination.Item>
              </Pagination>
            </Col>
          </Row>
        </Container>
      }
    </section>
  );
}
