import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";
import styled from "styled-components";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Tag = styled.span`
  width: fit-content;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 12px;
  padding: 0.4rem 0.8rem;
  text-transform: uppercase;
  font-family: "Sono", sans-serif;

  /* Adapter for dark mode */
  background-color: var(--color-${(props) => props.type}-700);
  color: var(--color-${(props) => props.type}-100);
`;

const Flag = styled.img`
  width: 2.4rem;
  height: 1.8rem;
  object-fit: cover;
  border: 1px solid var(--color-grey-100);
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ stay }) {
  const { id, status, guests, numNights } = stay;
  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      <Guest>{guests.fullName}</Guest>
      <div>{numNights} nights</div>

      {status === "unconfirmed" && (
        <Button size="small" variation="primary" as={Link} to={`/checkin/${id}`}>
          Check in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
