import React from "react";
import { PageLayout } from "../layout/PageLayout";
import { ItemDisplay } from "../components/ItemDisplay/ItemDisplay";

export const ShopPage = () => {
  return (
    <PageLayout>
      {/* <CategoryBreadcrumbs links={links} /> */}
      <ItemDisplay item={item} />
    </PageLayout>
  );
};
