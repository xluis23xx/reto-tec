import { Routes } from "@angular/router";
import { QuotedPageComponent } from "./pages/quoted-page/quoted-page.component";
import { InsuranceLayoutComponent } from "./layouts/insurance-layout/insurance-layout.component";
import { SummaryPageComponent } from "./pages/summary-page/summary-page.component";

export const insuranceRoutes: Routes = [
    {
        path: '',
        component: InsuranceLayoutComponent,
        children: [
            {
                path: '',
                component: QuotedPageComponent,
            },
            {
                path: 'summary',
                component: SummaryPageComponent,
            },
            {
                path: '**',
                redirectTo: 'quoted'
            }
        ]
    }
];

export default insuranceRoutes;