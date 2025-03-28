import styled from "styled-components";
import usePopup from "../hooks/usePopUp";
import PropTypes from "prop-types";
const Popup = ({ children }) => {
  const { isOpen, closePopup } = usePopup();

  if (!isOpen) return null;

  return (
    <>
      <Backdrop onClick={closePopup}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContainer>
      </Backdrop>
    </>
  );
};

Popup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Popup;

/* ----------STYLES---------- */

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: relative;
  transition: transform 0.3s ease-out;
  transform: translateY(0);
`;
