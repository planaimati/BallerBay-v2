import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/xd";
import { bindActionCreators } from "redux";
import { useTypedSelector } from "../hooks/useTypeSelector";
import ProductListItem from "../components/ProductListItemComponent";
import styled from "styled-components";

const ProductsListTemplate = () => {
  const { products } = useTypedSelector((state) => state);

  const dispatch = useDispatch();
  const { handleSetProducts } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    fetch(`https://ballerbay-api.herokuapp.com/api/v1/product`)
      .then((response) => response.json())
      .then((data) => handleSetProducts(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledContainer>
      <StyledItemsContainer>
        {products.products.map((item, index) => (
          <ProductListItem
            productId={item._id}
            productName={item.productName}
            productAmount={item.productAmount}
            productBrand={item.productBrand}
            productDesc={item.productDesc}
            productPrice={item.productPrice}
            productImage={item.productImage}
            productSize={item.productSize}
            key={item._id}
          />
        ))}
      </StyledItemsContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledItemsContainer = styled.div`
  height: 70%;
  margin: 5rem auto 0 auto;
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 2rem auto 0 auto;
  }
`;

export default ProductsListTemplate;
