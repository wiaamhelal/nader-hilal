import React from "react";
import styled from "styled-components";

const Paganation = ({ pages, setcurrentPage, currentPage }) => {
  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  return (
    <Main aria-label="..." className="">
      <button
        class="btn p-0"
        disabled={currentPage === 1}
        onClick={() => setcurrentPage((currentPage += -1))}
      >
        <a class="" href="#" tabindex="-1" aria-disabled="true">
          Previous
        </a>
      </button>
      {generatedPages.map((page) => (
        <li
          onClick={() => setcurrentPage(page)}
          key={page}
          class=""
          aria-current="page"
        >
          <a class="" href="#">
            {" "}
            {page}
          </a>
        </li>
      ))}
      <button
        class="page-item btn p-0"
        onClick={() => setcurrentPage((currentPage += 1))}
        disabled={currentPage === generatedPages.length}
      >
        <a class="" href="#">
          Next
        </a>
      </button>
    </Main>
  );
};
const Main = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: auto;
  border: 1px solid #b89564;
  border-radius: 5px;
  gap: 11px;
  padding: 5px;
  & a {
    color: #b89564;
  }
`;
const Previous = styled.div``;
const Number = styled.div``;
const Next = styled.div``;

export default Paganation;
