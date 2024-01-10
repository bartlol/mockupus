import React from "react";
import { DynamicPrice } from "../DynamicPrice";
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
    <ColumnStack gap={4}>
      <Box>
        <CategoryBreadcrumbs links={links} />
      </Box>
      <RowStack gap={6} alignItems={"flex-start"}>
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
                <Link href="#">14 ocen i 6 recenzji</Link>
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
          <ColumnStack>
            <RowStack
              sx={{
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">Firma: {item.companyName}</Typography>
              <Box
                component="img"
                src={item.companyLogoUrl}
                alt={`${item.companyName} logo`}
                sx={{
                  maxWidth: "100px",
                }}
              />
            </RowStack>
            <Divider flexItem />
            <Typography
              variant="body1"
              sx={{
                whiteSpace: "break-spaces",
              }}
            >
              {item.description}
            </Typography>
            <DynamicVariables variables={item.variables} />
            <Button variant="contained" startIcon={<AddShoppingCartIcon />}>
              Dodaj do koszyka
            </Button>
            <RowStack>
              <ScheduleIcon />
              <Typography>Wysyłka w piątek</Typography>
            </RowStack>
            <RowStack>
              <LocalShippingIcon />
              <Typography>Darmowa i szybka dostawa od 2 000.00zł</Typography>
            </RowStack>
            <RowStack>
              <ShieldIcon />
              <Typography>Bezpieczne zakupy</Typography>
            </RowStack>
          </ColumnStack>
        </CardSection>
      </RowStack>
      <Parameters />
      <ItemOpinions opinions={item.opinions} />
    </ColumnStack>
  );
};
