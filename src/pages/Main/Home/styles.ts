import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  max-width: 600px;

  border-radius: 8px;
  border: 1px solid #334b7a;
  background: #334b7a;
  box-shadow: 0 0 12px 6px rgba(0, 0, 0, 0.4);

  margin: 16px;
  padding: 32px;

  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 2rem;
  }

  div {
    width: 100%;

    gap: 4px;
    display: flex;
    flex-direction: column;

    label {
      font-size: 0.75rem;
    }

    input {
      width: 100%;
      height: 40px;

      border-radius: 8px;
      border: none;
      outline: 2px solid #b1c5dd;
      background: #ffffff;

      color: #0a192f;
      font-size: 0.85rem;

      padding: 0 8px;

      &:focus {
        outline-color: #00b1ff;
      }
    }
  }

  button {
    width: 100%;

    border-radius: 8px;
    border: none;
    background: #00b1ff;

    color: #ffffff;
    font-size: 0.85rem;
    font-weight: bold;

    margin-top: 32px;
    padding: 8px;
  }
`;

export const Summary = styled.div`
  width: 100%;
  max-width: 600px;

  border-radius: 8px;
  border: 1px solid #334b7a;
  background: #334b7a;
  box-shadow: 0 0 12px 6px rgba(0, 0, 0, 0.4);

  margin: 16px;
  padding: 16px;

  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > strong {
    margin-bottom: 1rem;

    display: block;
  }

  div {
    width: 100%;

    display: flex;
    justify-content: space-between;

    &:last-of-type {
      margin-top: 0.5rem;

      strong,
      span {
        font-size: 0.85rem;
        font-weight: bold;
      }
    }

    strong,
    span {
      font-size: 0.65rem;
    }
  }

  button {
    width: 100%;

    border-radius: 8px;
    border: none;
    background: #00b1ff;

    color: #ffffff;
    font-size: 0.85rem;
    font-weight: bold;

    margin-top: 32px;
    padding: 8px;

    &:last-of-type {
      background: #ff6c70;

      margin-top: 0px;
    }
  }
`;
