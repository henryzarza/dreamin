import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteArtistComponent } from './favorite-artist/favorite-artist.component';
import { FirstPetComponent } from './first-pet/first-pet.component';
import { TagSongsComponent } from './tag-songs/tag-songs.component';
import { TagMoviesComponent } from './tag-movies/tag-movies.component';
import { TemplatesModuleRouting } from './templates.module.routing';

@NgModule({
  declarations: [
    TagMoviesComponent,
    TagSongsComponent,
    FirstPetComponent,
    FavoriteArtistComponent
  ],
  imports: [
    CommonModule,
    TemplatesModuleRouting
  ],
  exports: [
    TagMoviesComponent,
    TagSongsComponent,
    FirstPetComponent,
    FavoriteArtistComponent
  ]
})
export class TemplatesModule {}
