import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AppLayout } from './components/layout/AppLayout';

import { DashboardPage } from './pages/DashboardPage';
import { EmptyPage } from './pages/EmptyPage';
import { ContactsPage } from './pages/users/ContactsPage';
import { ProfilePage } from './pages/users/ProfilePage';
import { AccountSettingsPage } from './pages/users/AccountSettingsPage';
import { RolesPage } from './pages/users/RolesPage';
import { RoleDetailsPage } from './pages/users/RoleDetailsPage';
import { PermissionsPage } from './pages/users/PermissionsPage';
import { LayoutVariantPage } from './pages/layouts/LayoutVariantPage';

// Forms
import { FormBasicElementsPage } from './pages/forms/FormBasicElementsPage';
import { FormValidationPage } from './pages/forms/FormValidationPage';
import { FormSelectPage } from './pages/forms/FormSelectPage';
import { FormPickersPage } from './pages/forms/FormPickersPage';
import { FormFileuploadsPage } from './pages/forms/FormFileuploadsPage';
import { FormTextEditorsPage } from './pages/forms/FormTextEditorsPage';
import { FormRangeSliderPage } from './pages/forms/FormRangeSliderPage';
import { FormCropperPage } from './pages/forms/FormCropperPage';
import { FormWizardPage } from './pages/forms/FormWizardPage';
import { FormLayoutPage } from './pages/forms/FormLayoutPage';
import { FormOtherPluginPage } from './pages/forms/FormOtherPluginPage';

// Tables
import { TablesStaticPage } from './pages/tables/TablesStaticPage';
import { TablesCustomPage } from './pages/tables/TablesCustomPage';
import { TablesDatatablesBasicPage } from './pages/tables/TablesDatatablesBasicPage';
import { TablesDatatablesExportDataPage } from './pages/tables/TablesDatatablesExportDataPage';
import { TablesDatatablesSelectPage } from './pages/tables/TablesDatatablesSelectPage';
import { TablesDatatablesAjaxPage } from './pages/tables/TablesDatatablesAjaxPage';
import { TablesDatatablesFixedHeaderPage } from './pages/tables/TablesDatatablesFixedHeaderPage';
import { TablesDatatablesFixedColumnsPage } from './pages/tables/TablesDatatablesFixedColumnsPage';
import { TablesDatatablesScrollPage } from './pages/tables/TablesDatatablesScrollPage';
import { TablesDatatablesCheckboxSelectPage } from './pages/tables/TablesDatatablesCheckboxSelectPage';
import { TablesDatatablesChildRowsPage } from './pages/tables/TablesDatatablesChildRowsPage';
import { TablesDatatablesColumnSearchingPage } from './pages/tables/TablesDatatablesColumnSearchingPage';
import { TablesDatatablesColumnsPage } from './pages/tables/TablesDatatablesColumnsPage';
import { TablesDatatablesJavascriptPage } from './pages/tables/TablesDatatablesJavascriptPage';
import { TablesDatatablesRangeSearchPage } from './pages/tables/TablesDatatablesRangeSearchPage';
import { TablesDatatablesRenderingPage } from './pages/tables/TablesDatatablesRenderingPage';
import { TablesDatatablesRowsAddPage } from './pages/tables/TablesDatatablesRowsAddPage';

// Plugins
import { SortablePage as SortableListPage } from './pages/plugins/SortablePage';
import { PdfViewerPage as PDFViewerPage } from './pages/plugins/PdfViewerPage';
import { I18nPage } from './pages/plugins/I18nPage';
import { SweetAlertsPage } from './pages/plugins/SweetAlertsPage';
import { IdleTimerPage } from './pages/plugins/IdleTimerPage';
import { PasswordMeterPage } from './pages/plugins/PasswordMeterPage';
import { ClipboardPage } from './pages/plugins/ClipboardPage';
import { TreeViewPage } from './pages/plugins/TreeViewPage';
import { MasonryPage as MasonryGridPage } from './pages/plugins/MasonryPage';
import { TourPage as InteractiveTourPage } from './pages/plugins/TourPage';
import { AnimationPage as AnimationsPage } from './pages/plugins/AnimationPage';
import { VideoPlayerPage } from './pages/plugins/VideoPlayerPage';

// Auth
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { ResetPasswordPage } from './pages/auth/ResetPasswordPage';
import { NewPasswordPage } from './pages/auth/NewPasswordPage';
import { TwoFactorPage } from './pages/auth/TwoFactorPage';
import { LockScreenPage } from './pages/auth/LockScreenPage';
import { SuccessMailPage } from './pages/auth/SuccessMailPage';
import { LoginPinPage } from './pages/auth/LoginPinPage';
import { DeleteAccountPage } from './pages/auth/DeleteAccountPage';
import { CardAuthPage } from './pages/auth/CardAuthPage';
import { SplitAuthPage } from './pages/auth/SplitAuthPage';

// Errors
import { Error400Page } from './pages/errors/Error400Page';
import { Error401Page } from './pages/errors/Error401Page';
import { Error403Page } from './pages/errors/Error403Page';
import { Error404Page } from './pages/errors/Error404Page';
import { Error408Page } from './pages/errors/Error408Page';
import { Error500Page } from './pages/errors/Error500Page';
import { MaintenancePage } from './pages/errors/MaintenancePage';

// Base UI
import { AccordionsPage } from './pages/ui/AccordionsPage';
import { AlertsPage } from './pages/ui/AlertsPage';
import { BadgesPage } from './pages/ui/BadgesPage';
import { BreadcrumbPage } from './pages/ui/BreadcrumbPage';
import { ButtonsPage } from './pages/ui/ButtonsPage';
import { CardsPage } from './pages/ui/CardsPage';
import { CarouselPage } from './pages/ui/CarouselPage';
import { CollapsePage } from './pages/ui/CollapsePage';
import { ColorsPage } from './pages/ui/ColorsPage';
import { DropdownsPage } from './pages/ui/DropdownsPage';
import { GridPage } from './pages/ui/GridPage';
import { ImagesPage } from './pages/ui/ImagesPage';
import { LinksPage } from './pages/ui/LinksPage';
import { ListGroupPage } from './pages/ui/ListGroupPage';
import { ModalsPage } from './pages/ui/ModalsPage';
import { NotificationsPage } from './pages/ui/NotificationsPage';
import { OffcanvasPage } from './pages/ui/OffcanvasPage';
import { PlaceholdersPage } from './pages/ui/PlaceholdersPage';
import { PaginationPage } from './pages/ui/PaginationPage';
import { PopoversPage } from './pages/ui/PopoversPage';
import { ProgressPage } from './pages/ui/ProgressPage';
import { ScrollspyPage } from './pages/ui/ScrollspyPage';
import { SpinnersPage } from './pages/ui/SpinnersPage';
import { TabsPage } from './pages/ui/TabsPage';
import { TooltipsPage } from './pages/ui/TooltipsPage';
import { TypographyPage } from './pages/ui/TypographyPage';
import { UtilitiesPage } from './pages/ui/UtilitiesPage';
import { VideosPage } from './pages/ui/VideosPage';
// Widgets
import { StatisticsPage } from './pages/widgets/StatisticsPage';
import { WidgetsChartsPage } from './pages/widgets/WidgetsChartsPage';
import { WidgetsMixedPage } from './pages/widgets/WidgetsMixedPage';
import { WidgetsSocialPage } from './pages/widgets/WidgetsSocialPage';
import { WidgetsWeatherPage } from './pages/widgets/WidgetsWeatherPage';

// Charts
import { ApexChartsPage } from './pages/charts/ApexChartsPage';
import { ChartsApexAreaPage } from './pages/charts/ChartsApexAreaPage';
import { ChartsApexBarPage } from './pages/charts/ChartsApexBarPage';
import { ChartsApexBoxplotPage } from './pages/charts/ChartsApexBoxplotPage';
import { ChartsApexBubblePage } from './pages/charts/ChartsApexBubblePage';
import { ChartsApexCandlestickPage } from './pages/charts/ChartsApexCandlestickPage';
import { ChartsApexColumnPage } from './pages/charts/ChartsApexColumnPage';
import { ChartsApexFunnelPage } from './pages/charts/ChartsApexFunnelPage';
import { ChartsApexHeatmapPage } from './pages/charts/ChartsApexHeatmapPage';
import { ChartsApexLinePage } from './pages/charts/ChartsApexLinePage';
import { ChartsApexMixedPage } from './pages/charts/ChartsApexMixedPage';
import { ChartsApexPiePage } from './pages/charts/ChartsApexPiePage';
import { ChartsApexPolarAreaPage } from './pages/charts/ChartsApexPolarAreaPage';
import { ChartsApexRadarPage } from './pages/charts/ChartsApexRadarPage';
import { ChartsApexRadialbarPage } from './pages/charts/ChartsApexRadialbarPage';
import { ChartsApexRangePage } from './pages/charts/ChartsApexRangePage';
import { ChartsApexScatterPage } from './pages/charts/ChartsApexScatterPage';
import { ChartsApexSlopePage } from './pages/charts/ChartsApexSlopePage';
import { ChartsApexSparklinesPage } from './pages/charts/ChartsApexSparklinesPage';
import { ChartsApexTimelinePage } from './pages/charts/ChartsApexTimelinePage';
import { ChartsApexTreemapPage } from './pages/charts/ChartsApexTreemapPage';

import { ChartsEchartLinePage } from './pages/charts/ChartsEchartLinePage';
import { ChartsEchartBarPage } from './pages/charts/ChartsEchartBarPage';
import { ChartsEchartPiePage } from './pages/charts/ChartsEchartPiePage';
import { ChartsEchartScatterPage } from './pages/charts/ChartsEchartScatterPage';
import { ChartsEchartCandlestickPage } from './pages/charts/ChartsEchartCandlestickPage';
import { ChartsEchartRadarPage } from './pages/charts/ChartsEchartRadarPage';
import { ChartsEchartHeatmapPage } from './pages/charts/ChartsEchartHeatmapPage';
import { ChartsEchartGaugePage } from './pages/charts/ChartsEchartGaugePage';
import { ChartsEchartAreaPage } from './pages/charts/ChartsEchartAreaPage';
import { ChartsEchartGeoMapPage } from './pages/charts/ChartsEchartGeoMapPage';
import { ChartsEchartOtherPage } from './pages/charts/ChartsEchartOtherPage';

import { ChartsChartjsAreaPage } from './pages/charts/ChartsChartjsAreaPage';
import { ChartsChartjsBarPage } from './pages/charts/ChartsChartjsBarPage';
import { ChartsChartjsLinePage } from './pages/charts/ChartsChartjsLinePage';
import { ChartsChartjsOtherPage } from './pages/charts/ChartsChartjsOtherPage';

// Icons & Maps
import { IconsTablerPage } from './pages/icons/IconsTablerPage';
import { IconsLucidePage } from './pages/icons/IconsLucidePage';
import { IconsRemixPage } from './pages/icons/IconsRemixPage';
import { IconsSolarDuotonePage } from './pages/icons/IconsSolarDuotonePage';
import { IconsFlagsPage } from './pages/icons/IconsFlagsPage';

import { MapsGooglePage } from './pages/maps/MapsGooglePage';
import { MapsVectorPage } from './pages/maps/MapsVectorPage';
import { MapsLeafletPage } from './pages/maps/MapsLeafletPage';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="pages/empty" element={<EmptyPage />} />
            
            {/* Users */}
            <Route path="apps/users/contacts" element={<ContactsPage />} />
            <Route path="apps/users/profile" element={<ProfilePage />} />
            <Route path="apps/users/account-settings" element={<AccountSettingsPage />} />
            <Route path="apps/users/roles" element={<RolesPage />} />
            <Route path="apps/users/role-details" element={<RoleDetailsPage />} />
            <Route path="apps/users/permissions" element={<PermissionsPage />} />
            
            {/* Forms */}
            <Route path="forms/basic" element={<FormBasicElementsPage />} />
            <Route path="forms/validation" element={<FormValidationPage />} />
            <Route path="forms/select" element={<FormSelectPage />} />
            <Route path="forms/pickers" element={<FormPickersPage />} />
            <Route path="forms/fileuploads" element={<FormFileuploadsPage />} />
            <Route path="forms/text-editors" element={<FormTextEditorsPage />} />
            <Route path="forms/editors" element={<FormTextEditorsPage />} />
            <Route path="forms/range-slider" element={<FormRangeSliderPage />} />
            <Route path="forms/cropper" element={<FormCropperPage />} />
            <Route path="forms/wizard" element={<FormWizardPage />} />
            <Route path="forms/layout" element={<FormLayoutPage />} />
            <Route path="forms/other-plugin" element={<FormOtherPluginPage />} />
            
            {/* Plugins */}
            <Route path="plugins/sortable" element={<SortableListPage />} />
            <Route path="plugins/pdf-viewer" element={<PDFViewerPage />} />
            <Route path="plugins/i18n" element={<I18nPage />} />
            <Route path="plugins/sweet-alerts" element={<SweetAlertsPage />} />
            <Route path="plugins/idle-timer" element={<IdleTimerPage />} />
            <Route path="plugins/pass-meter" element={<PasswordMeterPage />} />
            <Route path="plugins/clipboard" element={<ClipboardPage />} />
            <Route path="plugins/tree-view" element={<TreeViewPage />} />
            <Route path="plugins/masonry" element={<MasonryGridPage />} />
            <Route path="plugins/tour" element={<InteractiveTourPage />} />
            <Route path="plugins/animation" element={<AnimationsPage />} />
            <Route path="plugins/video-player" element={<VideoPlayerPage />} />

            {/* Base UI */}
            <Route path="ui/accordions" element={<AccordionsPage />} />
            <Route path="ui/alerts" element={<AlertsPage />} />
            <Route path="ui/badges" element={<BadgesPage />} />
            <Route path="ui/colors" element={<ColorsPage />} />
            <Route path="ui/breadcrumb" element={<BreadcrumbPage />} />
            <Route path="ui/buttons" element={<ButtonsPage />} />
            <Route path="ui/cards" element={<CardsPage />} />
            <Route path="ui/carousel" element={<CarouselPage />} />
            <Route path="ui/collapse" element={<CollapsePage />} />
            <Route path="ui/images" element={<ImagesPage />} />
            <Route path="ui/dropdowns" element={<DropdownsPage />} />
            <Route path="ui/videos" element={<VideosPage />} />
            <Route path="ui/grid" element={<GridPage />} />
            <Route path="ui/links" element={<LinksPage />} />
            <Route path="ui/list-group" element={<ListGroupPage />} />
            <Route path="ui/modals" element={<ModalsPage />} />
            <Route path="ui/notifications" element={<NotificationsPage />} />
            <Route path="ui/offcanvas" element={<OffcanvasPage />} />
            <Route path="ui/placeholders" element={<PlaceholdersPage />} />
            <Route path="ui/pagination" element={<PaginationPage />} />
            <Route path="ui/popovers" element={<PopoversPage />} />
            <Route path="ui/progress" element={<ProgressPage />} />
            <Route path="ui/scrollspy" element={<ScrollspyPage />} />
            <Route path="ui/spinners" element={<SpinnersPage />} />
            <Route path="ui/tabs" element={<TabsPage />} />
            <Route path="ui/tooltips" element={<TooltipsPage />} />
            <Route path="ui/typography" element={<TypographyPage />} />
            <Route path="ui/utilities" element={<UtilitiesPage />} />

            {/* Widgets & Charts */}
            <Route path="widgets/statistics" element={<StatisticsPage />} />
            <Route path="widgets/charts" element={<WidgetsChartsPage />} />
            <Route path="widgets/mixed" element={<WidgetsMixedPage />} />
            <Route path="widgets/social" element={<WidgetsSocialPage />} />
            <Route path="widgets/weather" element={<WidgetsWeatherPage />} />

            {/* Tables */}
            <Route path="tables/static" element={<TablesStaticPage />} />
            <Route path="tables/custom" element={<TablesCustomPage />} />
            <Route path="tables/datatables" element={<TablesDatatablesBasicPage />} />
            <Route path="tables/datatables/basic" element={<TablesDatatablesBasicPage />} />
            <Route path="tables/datatables/export" element={<TablesDatatablesExportDataPage />} />
            <Route path="tables/datatables/select" element={<TablesDatatablesSelectPage />} />
            <Route path="tables/datatables/ajax" element={<TablesDatatablesAjaxPage />} />
            <Route path="tables/datatables/fixed-header" element={<TablesDatatablesFixedHeaderPage />} />
            <Route path="tables/datatables/fixed-columns" element={<TablesDatatablesFixedColumnsPage />} />
            <Route path="tables/datatables/scroll" element={<TablesDatatablesScrollPage />} />
            <Route path="tables/datatables/checkbox-select" element={<TablesDatatablesCheckboxSelectPage />} />
            <Route path="tables/datatables/child-rows" element={<TablesDatatablesChildRowsPage />} />
            <Route path="tables/datatables/column-searching" element={<TablesDatatablesColumnSearchingPage />} />
            <Route path="tables/datatables/columns" element={<TablesDatatablesColumnsPage />} />
            <Route path="tables/datatables/javascript" element={<TablesDatatablesJavascriptPage />} />
            <Route path="tables/datatables/range-search" element={<TablesDatatablesRangeSearchPage />} />
            <Route path="tables/datatables/rendering" element={<TablesDatatablesRenderingPage />} />
            <Route path="tables/datatables/rows-add" element={<TablesDatatablesRowsAddPage />} />

            {/* ApexCharts */}
            <Route path="charts/apex" element={<ApexChartsPage />} />
            <Route path="charts/apex/area" element={<ChartsApexAreaPage />} />
            <Route path="charts/apex/bar" element={<ChartsApexBarPage />} />
            <Route path="charts/apex/bubble" element={<ChartsApexBubblePage />} />
            <Route path="charts/apex/candlestick" element={<ChartsApexCandlestickPage />} />
            <Route path="charts/apex/column" element={<ChartsApexColumnPage />} />
            <Route path="charts/apex/heatmap" element={<ChartsApexHeatmapPage />} />
            <Route path="charts/apex/line" element={<ChartsApexLinePage />} />
            <Route path="charts/apex/mixed" element={<ChartsApexMixedPage />} />
            <Route path="charts/apex/timeline" element={<ChartsApexTimelinePage />} />
            <Route path="charts/apex/boxplot" element={<ChartsApexBoxplotPage />} />
            <Route path="charts/apex/treemap" element={<ChartsApexTreemapPage />} />
            <Route path="charts/apex/pie" element={<ChartsApexPiePage />} />
            <Route path="charts/apex/radar" element={<ChartsApexRadarPage />} />
            <Route path="charts/apex/radialbar" element={<ChartsApexRadialbarPage />} />
            <Route path="charts/apex/scatter" element={<ChartsApexScatterPage />} />
            <Route path="charts/apex/polar-area" element={<ChartsApexPolarAreaPage />} />
            <Route path="charts/apex/sparklines" element={<ChartsApexSparklinesPage />} />
            <Route path="charts/apex/range" element={<ChartsApexRangePage />} />
            <Route path="charts/apex/funnel" element={<ChartsApexFunnelPage />} />
            <Route path="charts/apex/slope" element={<ChartsApexSlopePage />} />

            {/* ECharts */}
            <Route path="charts/echart/line" element={<ChartsEchartLinePage />} />
            <Route path="charts/echart/bar" element={<ChartsEchartBarPage />} />
            <Route path="charts/echart/pie" element={<ChartsEchartPiePage />} />
            <Route path="charts/echart/scatter" element={<ChartsEchartScatterPage />} />
            <Route path="charts/echart/candlestick" element={<ChartsEchartCandlestickPage />} />
            <Route path="charts/echart/radar" element={<ChartsEchartRadarPage />} />
            <Route path="charts/echart/heatmap" element={<ChartsEchartHeatmapPage />} />
            <Route path="charts/echart/treemap" element={<ChartsEchartAreaPage />} />
            <Route path="charts/echart/sunburst" element={<ChartsEchartGeoMapPage />} />
            <Route path="charts/echart/gauge" element={<ChartsEchartGaugePage />} />
            <Route path="charts/echart/funnel" element={<ChartsEchartOtherPage />} />

            {/* Chart.js */}
            <Route path="charts/chartjs/area" element={<ChartsChartjsAreaPage />} />
            <Route path="charts/chartjs/bar" element={<ChartsChartjsBarPage />} />
            <Route path="charts/chartjs/line" element={<ChartsChartjsLinePage />} />
            <Route path="charts/chartjs/other" element={<ChartsChartjsOtherPage />} />

            {/* Icons & Maps */}
            <Route path="icons/tabler" element={<IconsTablerPage />} />
            <Route path="icons/lucide" element={<IconsLucidePage />} />
            <Route path="icons/remix" element={<IconsRemixPage />} />
            <Route path="icons/solar-duotone" element={<IconsSolarDuotonePage />} />
            <Route path="icons/flags" element={<IconsFlagsPage />} />
            <Route path="maps/google" element={<MapsGooglePage />} />
            <Route path="maps/vector" element={<MapsVectorPage />} />
            <Route path="maps/leaflet" element={<MapsLeafletPage />} />

            {/* Layout Variants */}
            <Route path="layouts/horizontal" element={<LayoutVariantPage title="Horizontal Layout" attrType="layout" attrValue="horizontal" />} />
            <Route path="layouts/boxed" element={<LayoutVariantPage title="Boxed Layout" attrType="layoutWidth" attrValue="boxed" />} />
            <Route path="layouts/scrollable" element={<LayoutVariantPage title="Scrollable Layout" attrType="layoutPosition" attrValue="scrollable" />} />
            <Route path="layouts/compact" element={<LayoutVariantPage title="Compact Layout" attrType="sidenavSize" attrValue="compact" />} />
            <Route path="layouts/preloader" element={<LayoutVariantPage title="Preloader Layout" />} />
            <Route path="layouts/sidebar-light" element={<LayoutVariantPage title="Light Menu" attrType="menuColor" attrValue="light" />} />
            <Route path="layouts/sidebar-gradient" element={<LayoutVariantPage title="Gradient Menu" attrType="menuColor" attrValue="gradient" />} />
            <Route path="layouts/sidebar-gray" element={<LayoutVariantPage title="Gray Menu" attrType="menuColor" attrValue="gray" />} />
            <Route path="layouts/sidebar-image" element={<LayoutVariantPage title="Image Menu" attrType="menuImage" attrValue="img-1" />} />
            <Route path="layouts/sidebar-compact" element={<LayoutVariantPage title="Compact Menu" attrType="sidenavSize" attrValue="compact" />} />
            <Route path="layouts/sidebar-on-hover" element={<LayoutVariantPage title="On Hover Menu" attrType="sidenavSize" attrValue="on-hover" />} />
            <Route path="layouts/sidebar-offcanvas" element={<LayoutVariantPage title="Offcanvas Menu" attrType="sidenavSize" attrValue="offcanvas" />} />
            <Route path="layouts/sidebar-no-icons" element={<LayoutVariantPage title="No Icons with Lines" />} />
            <Route path="layouts/sidebar-with-lines" element={<LayoutVariantPage title="Sidebar with Lines" />} />
            <Route path="layouts/topbar-dark" element={<LayoutVariantPage title="Dark Topbar" attrType="topbarColor" attrValue="dark" />} />
            <Route path="layouts/topbar-gray" element={<LayoutVariantPage title="Gray Topbar" attrType="topbarColor" attrValue="gray" />} />
            <Route path="layouts/topbar-gradient" element={<LayoutVariantPage title="Gradient Topbar" attrType="topbarColor" attrValue="gradient" />} />

            {/* Error Pages */}
            <Route path="errors/400" element={<Error400Page />} />
            <Route path="errors/401" element={<Error401Page />} />
            <Route path="errors/403" element={<Error403Page />} />
            <Route path="errors/404" element={<Error404Page />} />
            <Route path="errors/408" element={<Error408Page />} />
            <Route path="errors/500" element={<Error500Page />} />
            <Route path="errors/maintenance" element={<MaintenancePage />} />
          </Route>

          {/* Standalone Auth */}
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
          <Route path="/auth/new-pass" element={<NewPasswordPage />} />
          <Route path="/auth/two-factor" element={<TwoFactorPage />} />
          <Route path="/auth/lock-screen" element={<LockScreenPage />} />
          <Route path="/auth/success-mail" element={<SuccessMailPage />} />
          <Route path="/auth/login-pin" element={<LoginPinPage />} />
          <Route path="/auth/delete-account" element={<DeleteAccountPage />} />

          <Route path="/auth/card/sign-in" element={<CardAuthPage mode="sign-in" />} />
          <Route path="/auth/card/sign-up" element={<CardAuthPage mode="sign-up" />} />
          <Route path="/auth/card/reset-pass" element={<CardAuthPage mode="reset-pass" />} />
          <Route path="/auth/card/new-pass" element={<CardAuthPage mode="new-pass" />} />
          <Route path="/auth/card/two-factor" element={<CardAuthPage mode="two-factor" />} />
          <Route path="/auth/card/lock-screen" element={<CardAuthPage mode="lock-screen" />} />
          <Route path="/auth/card/success-mail" element={<CardAuthPage mode="success-mail" />} />
          <Route path="/auth/card/login-pin" element={<CardAuthPage mode="login-pin" />} />
          <Route path="/auth/card/delete-account" element={<CardAuthPage mode="delete-account" />} />

          <Route path="/auth/split/sign-in" element={<SplitAuthPage mode="sign-in" />} />
          <Route path="/auth/split/sign-up" element={<SplitAuthPage mode="sign-up" />} />
          <Route path="/auth/split/reset-pass" element={<SplitAuthPage mode="reset-pass" />} />
          <Route path="/auth/split/new-pass" element={<SplitAuthPage mode="new-pass" />} />
          <Route path="/auth/split/two-factor" element={<SplitAuthPage mode="two-factor" />} />
          <Route path="/auth/split/lock-screen" element={<SplitAuthPage mode="lock-screen" />} />
          <Route path="/auth/split/success-mail" element={<SplitAuthPage mode="success-mail" />} />
          <Route path="/auth/split/login-pin" element={<SplitAuthPage mode="login-pin" />} />
          <Route path="/auth/split/delete-account" element={<SplitAuthPage mode="delete-account" />} />

          <Route path="*" element={<Error404Page />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
