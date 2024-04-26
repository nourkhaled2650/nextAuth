import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
interface ICardWRapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
}
export const CardWrapper = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
}: ICardWRapperProps) => {
  return (
    <Card>
      <CardHeader>{headerLabel}</CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
