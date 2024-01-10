import React from "react";
import { Opinion } from "../../Models/Opinion";
import { ColumnStack } from "../ColumnStack/ColumnStack";
import { ItemOpinion } from "./ItemOpinion";
import { Box, Button, Divider, Link, Rating, Typography } from "@mui/material";
import { interleave } from "../../utils/arrayFunctions";
import { RowStack } from "../RowStack/RowStack";
import { RatingSummaryDisplay, opinionsToRatingSummary } from "./RatingSummary";
import DoneIcon from "@mui/icons-material/Done";
import { CardSection } from "../../layout/CardSection";
type Props = {
  opinions: Opinion[];
};

const maxOpinions = 3;

export const ItemOpinions = ({ opinions }: Props) => {
  return (
    <CardSection>
      <ColumnStack gap={2}>
        <Typography variant="h5" fontWeight={"bold"}>
          Opinie o produkcie
        </Typography>
        <Box sx={{ paddingX: 4 }}>
          <RatingSummaryDisplay
            ratingSummary={opinionsToRatingSummary(opinions)}
          />
        </Box>
        <RowStack>
          <DoneIcon color="success" />
          <Typography color="GrayText" variant="caption">
            Wszystkie opinie są potwierdzone zakupem.
          </Typography>
          <Link variant="caption">Dowiedz się więcej</Link>
        </RowStack>
        <Divider flexItem />
        {interleave(
          opinions
            .slice(0, maxOpinions)
            .map((opinion) => (
              <ItemOpinion opinion={opinion} key={opinion.username} />
            )),
          <Divider flexItem />
        )}
        <Divider flexItem />
        {opinions.length > maxOpinions && (
          <Button variant="contained">Zobacz wszystkie opinie</Button>
        )}
      </ColumnStack>
    </CardSection>
  );
};
