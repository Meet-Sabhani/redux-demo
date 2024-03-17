import styled from "styled-components";

const BookingCard = styled.div`
  background-color: #1f2937;
  padding: 15px;
  border-radius: 8px;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  gap: 10px;

  &:hover {
    box-shadow: 3px 3px 10px #5c6066;
  }

  img {
    width: 100%;
    border-radius: 8px;
  }
  .booked-slot {
    background: #fff;
    color: #000;
    padding: 8px;
    border-radius: 8px;
  }
`;

export default BookingCard;
