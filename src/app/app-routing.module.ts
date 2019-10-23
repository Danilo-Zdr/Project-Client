import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'matches', loadChildren: () => import('./matches/match.module').then(m => m.MatchModule) },
  {path: 'teams', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule) },
  {path: 'types', loadChildren: () => import('./type/types.module').then(m => m.TypesModule) },
  {path: 'scorelines', loadChildren: () => import('./scoreline/scoreline.module').then(m => m.ScorelineModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
