import {
  MainPage,
  PassengerPage,
  BusPage,
  CarrierPage,
  TransferPage,
} from "../components";
import BudgetTravelTips from "../components/BudgetTravelTips/BudgetTravelTips";
import TransferViewComponent from "../components/future/TransferCard/TransferView/TransferViewComponent";
import { Contacts } from "../pages";
import { MainPageComponent } from "../components/MainPageComponent/MainPageComponent";

import {
  MAIN_ROUTE,
  PASSENGER_ROUTE,
  BUS_ROUTE,
  DRIVER_ROUTE,
  TRANSFER_ROUTE,
  CONTACTS_ROUTE,
  TIPS_ROUTE,
} from "../utils/constants";

export const publicRoutes = [
  // {
  //   path: MAIN_ROUTE,
  //   Component: MainPage,
  // },
  {
    path: MAIN_ROUTE,
    Component: MainPageComponent,
  },
  {
    path: `${PASSENGER_ROUTE}/:trip`,
    Component: TransferViewComponent,
  },
  {
    path: `${TIPS_ROUTE}`,
    Component: BudgetTravelTips,
  },
  {
    path: PASSENGER_ROUTE,
    Component: PassengerPage,
  },
  {
    path: BUS_ROUTE,
    Component: BusPage,
  },
  {
    path: DRIVER_ROUTE,
    Component: CarrierPage,
  },
  {
    path: TRANSFER_ROUTE,
    Component: TransferPage,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
  },
];
