import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadImagesService {
  isLoadedImage$ = new BehaviorSubject(false);

  public setLoadedImages(isLoaded: boolean) {
    this.isLoadedImage$.next(isLoaded);
  }
  getLoadedImages() {
    return this.isLoadedImage$.asObservable();
  }
}
