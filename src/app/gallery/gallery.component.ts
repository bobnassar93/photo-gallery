import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {

  title = "Recent Photos";
  visibleImages: any[] = [];
  @Input() filterBy?: string = 'all';
  images: any[] = [];

  constructor(
    private imageService: ImageService
  ) {
    this.visibleImages = imageService.getImages();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

}
