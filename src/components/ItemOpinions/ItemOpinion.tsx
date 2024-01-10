import React from "react";
import { Opinion } from "../../Models/Opinion";
import { ColumnStack } from "../ColumnStack/ColumnStack";
import { Divider, Rating, Typography } from "@mui/material";
import { RowStack } from "../RowStack/RowStack";

type Props = {
  opinion: Opinion;
};

export const ItemOpinion = ({ opinion }: Props) => {
  return (
    <ColumnStack>
      <RowStack>
        <Rating
          size="small"
          value={opinion.rate}
          readOnly
          max={5}
          precision={0.1}
        />
        <Typography color="GrayText" variant="caption">
          {opinion.date.toLocaleString()}
        </Typography>
        <Divider flexItem orientation="vertical" />
        <Typography color="GrayText" variant="caption">
          {opinion.username}
        </Typography>
      </RowStack>
      <Typography>{opinion.opinion}</Typography>
    </ColumnStack>
  );
};
