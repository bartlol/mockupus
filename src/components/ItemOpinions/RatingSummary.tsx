import React from "react";
import { Typography, Rating, LinearProgress, Divider } from "@mui/material";
import { ColumnStack } from "../ColumnStack/ColumnStack";
import { RowStack } from "../RowStack/RowStack";
import { Opinion } from "../../Models/Opinion";
import { RatingSummary } from "../../Models/RatingSummary";

type Props = {
  ratingSummary: RatingSummary;
};

export function opinionsToRatingSummary(opinions: Opinion[]): RatingSummary {
  const count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  opinions.forEach((opinion) => (count[opinion.rate] += 1));
  return count;
}

export const RatingSummaryDisplay = ({ ratingSummary }: Props) => {
  const total = Object.values(ratingSummary).reduce((a, b) => a + b);
  const average =
    (ratingSummary[1] * 1 +
      ratingSummary[2] * 2 +
      ratingSummary[3] * 3 +
      ratingSummary[4] * 4 +
      ratingSummary[5] * 5) /
    total;
  return (
    <RowStack gap={3}>
      <RowStack alignItems={"flex-end"}>
        <Typography variant="h4" fontWeight={"500"}>
          {average}
        </Typography>
        <Typography variant="overline" color="GrayText">
          /5
        </Typography>
      </RowStack>
      <Divider flexItem orientation="vertical" />
      <ColumnStack gap={0} flex={1}>
        <RatingSummaryRow rate={5} total={total} count={ratingSummary[5]} />
        <RatingSummaryRow rate={4} total={total} count={ratingSummary[4]} />
        <RatingSummaryRow rate={3} total={total} count={ratingSummary[3]} />
        <RatingSummaryRow rate={2} total={total} count={ratingSummary[2]} />
        <RatingSummaryRow rate={1} total={total} count={ratingSummary[1]} />
      </ColumnStack>
    </RowStack>
  );
};

type RatingSummaryRowProps = {
  rate: number;
  total: number;
  count: number;
};
const RatingSummaryRow = ({ total, count, rate }: RatingSummaryRowProps) => {
  return (
    <RowStack gap={2} flex={1}>
      <RowStack gap={0.5}>
        <Typography variant="overline" lineHeight={0}>
          {rate}
        </Typography>
        <Rating size="small" value={rate} readOnly max={5} />
      </RowStack>
      <LinearProgress
        sx={{ flex: 1 }}
        variant="determinate"
        value={(count / total) * 100}
      />
      <Typography color="GrayText" variant="overline" lineHeight={0}>
        {count}
      </Typography>
    </RowStack>
  );
};
