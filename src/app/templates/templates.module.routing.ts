import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteArtistComponent } from './favorite-artist/favorite-artist.component';
import { FirstPetComponent } from './first-pet/first-pet.component';
import { TagSongsComponent } from './tag-songs/tag-songs.component';
import { TagMoviesComponent } from './tag-movies/tag-movies.component';

const routes: Routes = [
  { path: 'tag-canciones', component: TagSongsComponent },
  { path: 'mascota', component: FirstPetComponent },
  { path: 'artista', component: FavoriteArtistComponent },
  { path: 'tag-peliculas', component: TagMoviesComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class TemplatesModuleRouting {}
