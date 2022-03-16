import React, { ChangeEvent, useEffect } from "react";
import { Formik, FormikHelpers as FormikActions, Form, Field } from "formik";
import styled from "styled-components";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { editPayloadType } from "../redux/reducers/editReducer";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/xd";
import { bindActionCreators } from "redux";
import * as Yup from "yup";

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
  const { product, edit } = useTypedSelector((state) => state.edit);
  const dispatch = useDispatch();
  const { handleSetEdit } = bindActionCreators(actionCreators, dispatch);

  const validationSchema = Yup.object().shape({
    productName: Yup.string().required("Pole wymagane"),
    productPrice: Yup.number().required("Pole wymagane"),
    productBrand: Yup.string().required("Pole wymagane"),
    productAmount: Yup.number().required("Pole wymagane"),
    productDesc: Yup.string().required("Pole wymagane"),
    productImage: Yup.string().required("Pole wymagane"),
    productSize: Yup.string().required("Pole wymagane"),
  });

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
        validationSchema={validationSchema}
        onSubmit={
          !edit
            ? (
                values: Values,

                { resetForm }: FormikActions<Values>
              ) => {
                console.log(values);

                fetch("http://localhost:8000/api/v1/product", {
                  method: "POST",
                  mode: "cors",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  credentials: "include",
                  body: JSON.stringify(values),
                }).then((response) => (response.ok ? resetForm() : null));
              }
            : (
                values: Values,

                { resetForm }: FormikActions<Values>
              ) => {
                console.log(values);

                fetch(`http://localhost:8000/api/v1/product/${product._id}`, {
                  method: "PATCH",
                  mode: "cors",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  credentials: "include",
                  body: JSON.stringify(values),
                }).then((response) => {
                  if (response.ok) {
                    resetForm();
                    handleSetEdit({});
                  }
                });
              }
        }
      >
        {function DefaultFunc({ errors, setFieldValue }) {
          useEffect(() => {
            const fields = [
              "productName",
              "productPrice",
              "productSize",
              "productBrand",
              "productAmount",
              "productDesc",
              "productImage",
            ];

            if (edit) {
              fields.forEach((field) =>
                setFieldValue(
                  field,
                  product[field as keyof editPayloadType],
                  false
                )
              );
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, []);

          return (
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
                    setFieldValue("productSize", e.target.value)
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

              <StyledButton type="submit">
                {edit ? "zatwierdź zmiany" : "dodaj produkt"}
              </StyledButton>
            </StyledForm>
          );
        }}
      </Formik>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 80%;
    padding-top: 15rem;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 70%;
  height: 70%;
  @media (max-width: 768px) {
    width: 100%;
  }
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
  font-size: 2.5rem;
  letter-spacing: 1.3px;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
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
