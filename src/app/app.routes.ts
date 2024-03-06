import { Routes } from '@angular/router';
import { AboutMeComponent } from './modules/mod-pages/about-me/about-me.component';
import { ProjectsComponent } from './modules/mod-pages/projects/projects.component';
import { StreamingComponent } from './modules/mod-pages/streaming/streaming.component';
import { DiscordComponent } from './modules/mod-pages/discord/discord.component';

export const routes: Routes = [
    {path: 'about-me', component: AboutMeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'streaming', component: StreamingComponent},
    {path: 'discord', component: DiscordComponent},
    {path: '', redirectTo:'/about-me', pathMatch: 'full'},
];
