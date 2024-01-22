import React from "react";
import { RowStack } from "../RowStack/RowStack";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import _ from "lodash";

type Props = {
  links: string[];
};

export const CategoryBreadcrumbs = ({ links }: Props) => {
  const handleClick = () => {};
  return (
    <RowStack>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {_.initial(links).map((text) => (
          <Link
            underline="hover"
            key={text}
            color="inherit"
            href="#"
            onClick={handleClick}
          >
            {text}
          </Link>
        ))}
        <Typography color="text.primary">{_.last(links)}</Typography>
      </Breadcrumbs>
    </RowStack>
  );
};
