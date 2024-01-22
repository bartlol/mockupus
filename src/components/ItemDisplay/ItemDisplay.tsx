import React from "react";
import { DynamicPrice } from "../DynamicPrice";
import {
  Box,
  Button,
  Container,
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
type Props = {
  item: Item;
};

const links = [
  "Strona główna",
  "Produkty na wymiar",
  "Gabloty na wymiar",
  "Gablota Wewnętrzna Antracyt",
];

export const ItemDisplay = ({ item }: Props) => {
  return (
    <ColumnStack gap={4} sx={{ maxWidth: "940px" }}>
      <Box>
        <CategoryBreadcrumbs links={links} />
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
                <Box>
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton>
                    <ShareIcon />
                  </IconButton>
                </Box>
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
            <ImageGallery imageUrls={item.photoUrls} />
          </ColumnStack>
        </CardSection>

        <CardSection>
          <ColumnStack gap={2}>
            <ColumnStack gap={2}>
              <Typography variant="h5" fontWeight={"bold"}>
                Konfigurator
              </Typography>
              <DynamicVariables variables={item.variables} />
            </ColumnStack>
            <Button variant="contained" startIcon={<AddShoppingCartIcon />}>
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
      <Parameters />
      <Description description={item.description} />
      <ItemOpinions opinions={item.opinions} />
    </ColumnStack>
  );
};
