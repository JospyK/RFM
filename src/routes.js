/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
// import DashboardPage from "views/Dashboard/Dashboard.js";
import HomePage from "views/Dashboard/Home.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Setting from "views/UserProfile/Setting.js";
import Control from "views/TableList/Control.js";
import NewMission from "views/UserProfile/NewMission.js";
import TableList from "views/TableList/TableList.js";
import Missions from "views/TableList/Missions.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import { AddBox, Gamepad, Settings } from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    rtlName: "???????? ??????????????",
    icon: Dashboard,
    component: HomePage,
    layout: "/admin",
  },
  {
    path: "/control",
    name: "Control",
    rtlName: "???????? ??????????????",
    icon: Gamepad,
    component: Control,
    layout: "/admin",
  },
  {
    path: "/missions",
    name: "Missions List",
    rtlName: "?????????? ????????????",
    icon: "content_paste",
    component: Missions,
    layout: "/admin",
  },
  {
    path: "/newMission",
    name: "New Mission",
    rtlName: "???????? ??????????????",
    icon: AddBox,
    component: NewMission,
    layout: "/admin",
  },
  {
    path: "/setting",
    name: "Setting",
    rtlName: "???????? ??????????????",
    icon: Settings,
    component: Setting,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "?????? ???????????? ????????????????",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "?????????? ????????????",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "??????????",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "????????????",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "??????????",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "??????????????",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "???????????????? ???? ???????? ???? ????",
    icon: Language,
    component: RTLPage,
    layout: "/rtl",
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "???????????? ????????????????????",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin",
  },
];

export default dashboardRoutes;
