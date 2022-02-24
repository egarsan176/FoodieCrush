import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { FileDB } from "../interfaces/interface";

@Injectable({
    providedIn: 'root'
  })
export class FileUploadService {

    private urlBase: string = environment.urlBase;  //url a la que hacer la petición

    constructor(private http: HttpClient) { }

    upload(file: File): Observable<HttpEvent<any>> {
      const formData: FormData = new FormData();
      formData.append('file', file);
      const req = new HttpRequest('POST', `${this.urlBase}/upload`, formData, {
        reportProgress: true,
        responseType: 'json'
      });
      console.log(req)
      return this.http.request(req);    //te devuelve el mensaje de que el archivo se ha subido correctamente
    }

    getFiles(): Observable<any> {
      return this.http.get(`${this.urlBase}/files`);
    }

    deleteFile(file: File): Observable<HttpEvent<any>>{
      const url = `${this.urlBase}/files/${file}`;
      return this.http.delete<any>(url);
    }

    getFileByName(){
      const name = localStorage.getItem('imgNAME')
      const url = `${this.urlBase}/files/${name}`;

      return this.http.get<FileDB>(url);
    }
  }