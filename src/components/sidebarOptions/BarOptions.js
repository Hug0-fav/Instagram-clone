import styled from "styled-components";
import MorePopupSlide from "./MorePopupSlide";
import SearchPopupSlide from "./SearchPopupSlide";

const PopSlide = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.show ? "90px" : "-300px")};
  width: 300px;
  height: 100vh;
  box-shadow: -2px 0 6px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
  padding: 20px;
`;

const OpenOption = styled.div`
  position: absolute;
  top: 12rem;
  left: ${(props) => (props.mobilemode ? "5.5rem" : "22px")};
  z-index: 1000;
`;

function BarOptions({ activeComponent, openOptionLeft }) {
  return (
    <>
      <PopSlide show={activeComponent === "search"}>
        {activeComponent === "search" && <SearchPopupSlide />}
      </PopSlide>

      <OpenOption style={{ left: openOptionLeft }}>
        {activeComponent === "more" && <MorePopupSlide />}
      </OpenOption>
    </>
  );
}

export default BarOptions;
