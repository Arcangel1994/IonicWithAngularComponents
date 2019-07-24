import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'alert', loadChildren: './alert/alert.module#AlertPageModule' },
  { path: 'action-sheet', loadChildren: './action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'avatar', loadChildren: './avatar/avatar.module#AvatarPageModule' },
  { path: 'botones', loadChildren: './botones/botones.module#BotonesPageModule' },
  { path: 'card', loadChildren: './card/card.module#CardPageModule' },
  { path: 'check', loadChildren: './check/check.module#CheckPageModule' },
  { path: 'date-time', loadChildren: './date-time/date-time.module#DateTimePageModule' },
  { path: 'fab', loadChildren: './fab/fab.module#FabPageModule' },
  { path: 'grid', loadChildren: './grid/grid.module#GridPageModule' },
  { path: 'infinite-scroll', loadChildren: './infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule' },
  { path: 'input', loadChildren: './input/input.module#InputPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'list-reorder', loadChildren: './list-reorder/list-reorder.module#ListReorderPageModule' },
  { path: 'loading', loadChildren: './loading/loading.module#LoadingPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'pop-over', loadChildren: './pop-over/pop-over.module#PopOverPageModule' },
  { path: 'progress-bar', loadChildren: './progress-bar/progress-bar.module#ProgressBarPageModule' },
  { path: 'refresher', loadChildren: './refresher/refresher.module#RefresherPageModule' },
  { path: 'searchbar', loadChildren: './searchbar/searchbar.module#SearchbarPageModule' },
  { path: 'segment', loadChildren: './segment/segment.module#SegmentPageModule' },
  { path: 'slides', loadChildren: './slides/slides.module#SlidesPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
