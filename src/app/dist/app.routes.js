"use strict";
exports.__esModule = true;
exports.appRoutes = void 0;
var app_resolvers_1 = require("app/app.resolvers");
var auth_guard_1 = require("app/core/auth/guards/auth.guard");
var noAuth_guard_1 = require("app/core/auth/guards/noAuth.guard");
var layout_component_1 = require("app/layout/layout.component");
var list_reclamation_component_1 = require("./modules/admin/dashboards/list-reclamation/list-reclamation.component");
var add_reclamation_component_1 = require("./modules/admin/dashboards/add-reclamation/add-reclamation.component");
var update_reclamation_component_1 = require("./modules/admin/dashboards/update-reclamation/update-reclamation.component");
var add_offre_component_1 = require("./modules/admin/dashboards/add-offre/add-offre.component");
var list_offre_component_1 = require("./modules/admin/dashboards/list-offre/list-offre.component");
var update_offre_component_1 = require("./modules/admin/dashboards/update-offre/update-offre.component");
// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
exports.appRoutes = [
    // Redirect empty path to '/dashboards/project'
    { path: '', pathMatch: 'full', redirectTo: 'dashboards/project' },
    // Redirect signed-in user to the '/dashboards/project'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'dashboards/project' },
    // Auth routes for guests
    {
        path: '',
        canActivate: [noAuth_guard_1.NoAuthGuard],
        canActivateChild: [noAuth_guard_1.NoAuthGuard],
        component: layout_component_1.LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'confirmation-required', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/auth/confirmation-required/confirmation-required.routes'); }); } },
            { path: 'forgot-password', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/auth/forgot-password/forgot-password.routes'); }); } },
            { path: 'reset-password', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/auth/reset-password/reset-password.routes'); }); } },
            { path: 'sign-in', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/auth/sign-in/sign-in.routes'); }); } },
            { path: 'sign-up', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/auth/sign-up/sign-up.routes'); }); } }
        ]
    },
    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [auth_guard_1.AuthGuard],
        canActivateChild: [auth_guard_1.AuthGuard],
        component: layout_component_1.LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-out', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/auth/sign-out/sign-out.routes'); }); } },
            { path: 'unlock-session', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/auth/unlock-session/unlock-session.routes'); }); } }
        ]
    },
    // Landing routes
    {
        path: '',
        component: layout_component_1.LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'home', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/landing/home/home.routes'); }); } },
        ]
    },
    // Admin routes
    {
        path: '',
        canActivate: [auth_guard_1.AuthGuard],
        canActivateChild: [auth_guard_1.AuthGuard],
        component: layout_component_1.LayoutComponent,
        resolve: {
            initialData: app_resolvers_1.initialDataResolver
        },
        children: [
            // Dashboards
            { path: 'dashboards', children: [
                    { path: 'project', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/dashboards/project/project.routes'); }); } },
                    { path: 'analytics', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/dashboards/analytics/analytics.routes'); }); } },
                    { path: 'finance', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/dashboards/finance/finance.routes'); }); } },
                    { path: 'crypto', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/dashboards/crypto/crypto.routes'); }); } },
                    { path: 'listreclamation', component: list_reclamation_component_1.ListReclamationComponent },
                    { path: 'addrec', component: add_reclamation_component_1.AddReclamationComponent },
                    { path: 'updaterec/:id', component: update_reclamation_component_1.UpdateReclamationComponent },
                    { path: 'updateoffre/:id', component: update_offre_component_1.UpdateOffreComponent },
                    { path: 'listoffre', component: list_offre_component_1.ListOffreComponent },
                    { path: 'addoffre', component: add_offre_component_1.AddOffreComponent },
                ] },
            // Apps
            { path: 'apps', children: [
                    { path: 'academy', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/apps/academy/academy.routes'); }); } },
                    { path: 'chat', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/apps/chat/chat.routes'); }); } },
                    { path: 'contacts', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/apps/contacts/contacts.routes'); }); } },
                    { path: 'ecommerce', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/apps/ecommerce/ecommerce.routes'); }); } },
                    { path: 'file-manager', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/apps/file-manager/file-manager.routes'); }); } },
                    { path: 'help-center', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/apps/help-center/help-center.routes'); }); } },
                    { path: 'mailbox', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/apps/mailbox/mailbox.routes'); }); } },
                    { path: 'notes', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/apps/notes/notes.routes'); }); } },
                    { path: 'scrumboard', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/apps/scrumboard/scrumboard.routes'); }); } },
                    { path: 'tasks', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/apps/tasks/tasks.routes'); }); } },
                ] },
            // Pages
            { path: 'pages', children: [
                    // Activities
                    { path: 'activities', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/pages/activities/activities.routes'); }); } },
                    // Authentication
                    { path: 'authentication', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/pages/authentication/authentication.routes'); }); } },
                    // Coming Soon
                    { path: 'coming-soon', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/pages/coming-soon/coming-soon.routes'); }); } },
                    // Error
                    { path: 'error', children: [
                            { path: '404', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/pages/error/error-404/error-404.routes'); }); } },
                            { path: '500', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/pages/error/error-500/error-500.routes'); }); } }
                        ] },
                    // Invoice
                    { path: 'invoice', children: [
                            { path: 'printable', children: [
                                    { path: 'compact', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/pages/invoice/printable/compact/compact.routes'); }); } },
                                    { path: 'modern', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/pages/invoice/printable/modern/modern.routes'); }); } }
                                ] }
                        ] },
                    // Maintenance
                    { path: 'maintenance', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/pages/maintenance/maintenance.routes'); }); } },
                    // Pricing
                    { path: 'pricing', children: [
                            { path: 'modern', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/pages/pricing/modern/modern.routes'); }); } },
                            { path: 'simple', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/pages/pricing/simple/simple.routes'); }); } },
                            { path: 'single', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/pages/pricing/single/single.routes'); }); } },
                            { path: 'table', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/pages/pricing/table/table.routes'); }); } }
                        ] },
                    // Profile
                    { path: 'profile', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/pages/profile/profile.routes'); }); } },
                    // Settings
                    { path: 'settings', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/pages/settings/settings.routes'); }); } },
                ] },
            // User Interface
            { path: 'ui', children: [
                    // Material Components
                    { path: 'material-components', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/ui/material-components/material-components.routes'); }); } },
                    // Fuse Components
                    { path: 'fuse-components', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/ui/fuse-components/fuse-components.routes'); }); } },
                    // Other Components
                    { path: 'other-components', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/ui/other-components/other-components.routes'); }); } },
                    // TailwindCSS
                    { path: 'tailwindcss', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/ui/tailwindcss/tailwindcss.routes'); }); } },
                    // Advanced Search
                    { path: 'advanced-search', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/ui/advanced-search/advanced-search.routes'); }); } },
                    // Animations
                    { path: 'animations', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/ui/animations/animations.routes'); }); } },
                    // Cards
                    { path: 'cards', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/ui/cards/cards.routes'); }); } },
                    // Colors
                    { path: 'colors', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/ui/colors/colors.routes'); }); } },
                    // Confirmation Dialog
                    { path: 'confirmation-dialog', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/ui/confirmation-dialog/confirmation-dialog.routes'); }); } },
                    // Datatable
                    { path: 'datatable', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/ui/datatable/datatable.routes'); }); } },
                    // Forms
                    { path: 'forms', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/ui/forms/forms.routes'); }); } },
                    // Icons
                    { path: 'icons', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/ui/icons/icons.routes'); }); } },
                    // Page Layouts
                    { path: 'page-layouts', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/ui/page-layouts/page-layouts.routes'); }); } },
                    // Typography
                    { path: 'typography', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/ui/typography/typography.routes'); }); } }
                ] },
            // Documentation
            { path: 'docs', children: [
                    // Changelog
                    { path: 'changelog', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/docs/changelog/changelog.routes'); }); } },
                    // Guides
                    { path: 'guides', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/docs/guides/guides.routes'); }); } }
                ] },
            // 404 & Catch all
            { path: '404-not-found', pathMatch: 'full', loadChildren: function () { return Promise.resolve().then(function () { return require('app/modules/admin/pages/error/error-404/error-404.routes'); }); } },
            { path: '**', redirectTo: '404-not-found' }
        ]
    }
];
