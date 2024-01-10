import React, { useState } from "react";
import { RowStack } from "../RowStack/RowStack";
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type Props = {
  imageUrls: string[];
};

export const ImageGallery = ({ imageUrls }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <RowStack gap={0}>
      <IconButton
        onClick={() =>
          setCurrentIndex((prevState) =>
            prevState - 1 < 0 ? imageUrls.length - 1 : prevState - 1
          )
        }
      >
        <ChevronLeftIcon />
      </IconButton>
      <Box
        component="img"
        src={imageUrls[currentIndex]}
        alt="Oupsie!"
        sx={{
          maxWidth: "400px",
          height: "400px",
        }}
      />
      <IconButton
        onClick={() =>
          setCurrentIndex((prevState) => (prevState + 1) % imageUrls.length)
        }
      >
        <ChevronRightIcon />
      </IconButton>
    </RowStack>
  );
};
