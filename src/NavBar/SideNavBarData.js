import React from "react";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import CloudIcon from "@mui/icons-material/Cloud";
import CalculateIcon from "@mui/icons-material/Calculate";
import FactCheckIcon from "@mui/icons-material/FactCheck";

export const SideNavBarData = [
  {
    title: "Home",
    Link: "/home",
    Logo: <DashboardCustomizeIcon />,
  },
  {
    title: "CurrencyConverter",
    Link: "/currencyConverter",
    Logo: <CurrencyExchangeIcon />,
  },
  {
    title: "Dictionary",
    Link: "/Dictionary",
    Logo: <DragIndicatorIcon />,
  },
  {
    title: "Weather",
    Link: "/Weather",
    Logo: <CloudIcon />,
  },
  {
    title: "Calculator",
    Link: "/calculator",
    Logo: <CalculateIcon />,
  },
  {
    title: "Calendar",
    Link: "/Checklist",
    Logo: <FactCheckIcon />,
  },
];
