import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadImage(data: FormData) {
    return this.http.post(
      `https://api.cloudinary.com/v1_1/dhcdh9u9h/image/upload`,
      data
    );
  }
}
