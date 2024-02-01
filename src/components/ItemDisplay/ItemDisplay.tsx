import React, { useContext } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Rating,
  Typography,
} from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShieldIcon from "@mui/icons-material/Shield";
import { RowStack } from "../RowStack/RowStack";
import { Item } from "../../Models/Item";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { ColumnStack } from "../ColumnStack/ColumnStack";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ItemOpinions } from "../ItemOpinions/ItemOpinions";
import { DynamicVariables } from "../DynamicVariables/DynamicVariables";
import { CategoryBreadcrumbs } from "../CategoryBreadcrumbs/CategoryBreadcrumbs";
import { CardSection } from "../../layout/CardSection";
import { Parameters } from "../Parameters/Parameters";
import { Description } from "../Description/Description";
import { DynamicPriceContext } from "../../context/DynamicPriceContextProvider";
type Props = {
  item: Item;
};

export const ItemDisplay = ({ item }: Props) => {
  const { state } = useContext(DynamicPriceContext);
  console.log("FOO", state);
  return (
    <ColumnStack gap={4} sx={{ maxWidth: "940px" }}>
      <Box>
        <CategoryBreadcrumbs links={item.breadCrumbs} />
      </Box>
      <RowStack
        gap={6}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
      >
        <CardSection>
          <ColumnStack gap={3}>
            <Box>
              <RowStack justifyContent={"space-between"}>
                <Typography variant="h5" fontWeight={"bold"}>
                  {item.name}
                </Typography>
                <RowStack gap={0}>
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton>
                    <ShareIcon />
                  </IconButton>
                </RowStack>
              </RowStack>
              <RowStack>
                <RowStack>
                  <Typography variant="body1">{item.rating}</Typography>
                  <Rating
                    size="small"
                    value={item.rating}
                    readOnly
                    max={5}
                    precision={0.1}
                  />
                </RowStack>
                <Link href="#">{`14 ocen i ${item.opinions.length} opinii`}</Link>
                <Divider flexItem orientation="vertical" />
                <Typography color="GrayText" variant="caption">
                  {"18 osób już kupiło ten produkt"}
                </Typography>
              </RowStack>
            </Box>
            <Box sx={{ alignSelf: "center" }}>
              <ImageGallery imageUrls={item.photoUrls[state["color"]]} />
            </Box>
          </ColumnStack>
        </CardSection>

        <CardSection>
          <ColumnStack gap={2}>
            <ColumnStack gap={2}>
              <Typography variant="h5" fontWeight={"bold"}>
                Konfigurator
              </Typography>
              <DynamicVariables
                variables={item.variables}
                formula={item.formula}
              />
            </ColumnStack>
            <Button
              variant="contained"
              color="config"
              startIcon={<AddShoppingCartIcon />}
              sx={{ color: (theme) => theme.palette.config.contrastText }}
            >
              Dodaj do koszyka
            </Button>
            <Divider />
            <ColumnStack>
              <RowStack>
                <ScheduleIcon fontSize="small" />
                <Typography variant="subtitle2">Wysyłka w piątek</Typography>
              </RowStack>
              <RowStack>
                <LocalShippingIcon fontSize="small" />
                <Typography variant="subtitle2">
                  Darmowa i szybka dostawa od 2 000.00zł
                </Typography>
              </RowStack>
              <RowStack>
                <ShieldIcon fontSize="small" />
                <Typography variant="subtitle2">Bezpieczne zakupy</Typography>
              </RowStack>
            </ColumnStack>
            <Divider />
            <Link href="#" sx={{ alignSelf: "center" }}>
              Warunki zwrotu i gwarancji
            </Link>
          </ColumnStack>
        </CardSection>
      </RowStack>
      <Parameters parameters={item.parameters} />
      <Description description={item.description} />
      <ItemOpinions opinions={item.opinions} />
    </ColumnStack>
  );
};
