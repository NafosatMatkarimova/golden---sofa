import React from "react";
import { ContentTitle } from "components/InfoColums/style";
import { DiscountText, MainPriceText, PriceBox } from "components/Banner/style";
import * as S from "./style";
import Button from "components/Button";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const ProductInfo = ({name, inCash, price, oldPrice, id }) => {
return(
  <S.ProductInfoWrapper>
    <ContentTitle>{name}</ContentTitle>
    <PriceBox>
      <MainPriceText>{price}</MainPriceText>
      <DiscountText>{oldPrice}</DiscountText>
    </PriceBox>
      <Button text={"Купить"}/>
      <Accordion sx={{marginTop: "40px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Оплата</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Оплата при получении товара, Картой онлайн, Google Pay, Акционная оплата картой Visa, Безналичными для юридических лиц, Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Монтаж и доставка</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Оплата при получении товара, Картой онлайн, Google Pay, Акционная оплата картой Visa, Безналичными для юридических лиц, Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Гарантии и выгода</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Оплата при получении товара, Картой онлайн, Google Pay, Акционная оплата картой Visa, Безналичными для юридических лиц, Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении
          </Typography>
        </AccordionDetails>
      </Accordion>
  </S.ProductInfoWrapper>
)
}

export default ProductInfo;