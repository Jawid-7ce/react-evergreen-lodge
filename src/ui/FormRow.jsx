import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  background: rgba(255, 255, 255, 0.03);

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-300);
  }

  &:hover {
    background: rgba(255, 165, 0, 0.08);
    box-shadow: inset 0px 0px 8px rgba(255, 165, 0, 0.2);
    border-left: 4px solid var(--color-primary); /* Subtle left accent */
  }

  &:focus-within {
    background: rgba(255, 107, 107, 0.08);
    box-shadow: 0px 0px 10px rgba(255, 107, 107, 0.3);
    border-left: 4px solid var(--color-secondary);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
    padding-top: 1.6rem;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 8px;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

export default function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children?.props?.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}
