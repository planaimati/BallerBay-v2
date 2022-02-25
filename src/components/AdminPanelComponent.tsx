import React, { ChangeEvent } from "react";
import { Formik, FormikHelpers as FormikActions, Form, Field } from "formik";
import styled from "styled-components";

interface Values {
  productName: string;
  productPrice: string;
  productBrand: string;
  productAmount: string;
  productDesc: string;
  productImage: string;
  productSize: string;
}

const AdminPanelComponent = () => {
  return (
    <StyledContainer>
      <StyledHeader>Dodaj produkt</StyledHeader>
      <Formik
        initialValues={{
          productName: "",
          productPrice: "",
          productSize: "",
          productBrand: "",
          productAmount: "",
          productDesc: "",
          productImage: "",
        }}
        onSubmit={(
          values: Values,

          { resetForm }: FormikActions<Values>
        ) => {
          console.log(values);

          fetch("https://ballerbay-api.herokuapp.com/api/v1/product", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }).then((response) => (response.ok ? resetForm() : null));
        }}
      >
        {(formProps) => (
          <StyledForm action="">
            <InputContainer>
              <StyledLabel htmlFor="itemName">Nazwa</StyledLabel>
              <StyledInput type="text" name="productName"></StyledInput>
            </InputContainer>
            <InputContainer>
              <StyledLabel htmlFor="itemPrice">Cena</StyledLabel>
              <StyledInput type="text" name="productPrice"></StyledInput>
            </InputContainer>
            <InputContainer>
              <StyledLabel htmlFor="productSize">Rozmiar</StyledLabel>
              <StyledInput
                as="select"
                name="productSize"
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  formProps.setFieldValue("productSize", e.target.value)
                }
              >
                <option value=""></option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </StyledInput>
            </InputContainer>
            <InputContainer>
              <StyledLabel htmlFor="itemBrand">Marka</StyledLabel>
              <StyledInput type="text" name="productBrand"></StyledInput>
            </InputContainer>
            <InputContainer>
              <StyledLabel htmlFor="itemAmount">Ilość</StyledLabel>
              <StyledInput type="text" name="productAmount"></StyledInput>
            </InputContainer>
            <InputContainer>
              <StyledLabel htmlFor="itemDesc">Opis</StyledLabel>
              <StyledInput type="text" name="productDesc"></StyledInput>
            </InputContainer>
            <InputContainer>
              <StyledLabel htmlFor="image">Zdjęcie</StyledLabel>
              <StyledInput type="text" name="productImage"></StyledInput>
            </InputContainer>

            <StyledButton type="submit">dodaj produkt</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 70%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 70%;
  height: 100%;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const StyledLabel = styled.label`
  display: inline-block;
  width: 30%;
  height: 100%;
  line-height: 50px;
  background-color: #efefef;
  border: 1px solid #dddddd;
  text-align: center;
`;

const StyledInput = styled(Field)`
  width: 70%;
  height: 100%;
  border: 1px solid #dddddd;
`;

const StyledHeader = styled.h3`
  font-size: 25px;
  letter-spacing: 1.3px;
`;

const StyledButton = styled.button`
  margin-top: 30px;
  background-color: #313131;
  color: white;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  letter-spacing: 0.8px;
  transition: 0.2s;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

export default AdminPanelComponent;
