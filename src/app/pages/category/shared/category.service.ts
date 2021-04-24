import { Injectable } from '@angular/core';
import  { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable,throwError} from 'rxjs'
import  { catchError, map,mergeMap} from 'rxjs/operators'
import {IrequestCategory} from './category.model'
// flatMap is deprected we have to change to mergeMap

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   
  private apiPath:string='api/categories'

  constructor(private http:HttpClient) { }

    getAll():Observable<IrequestCategory[]>{
      return this.http.get(this.apiPath).pipe(
         catchError(this.handleError),
         map(this.jsonDataToCategories)
      )
      
    }
     
    getById(id:number):Observable<IrequestCategory>{
       const url=`${this.apiPath}/${id}`
      return this.http.get(url).pipe(
          catchError(this.handleError),
          map(this.jsonDataToCategory)
      )
    }

    create(category:IrequestCategory):Observable<IrequestCategory>{
      return this.http.post(this.apiPath,category).pipe(
         catchError(this.handleError),
         map(this.jsonDataToCategory)
      )
    }
    
    update(category:IrequestCategory):Observable<IrequestCategory>{
      const url=`${this.apiPath}/${category.id}`
      return this.http.put(url,category).pipe(
        catchError(this.handleError),
        map(()=>category)
      ) 
    }

    delete(id:number):Observable<IrequestCategory>{
      const url=`${this.apiPath}/${id}`
      return this.http.delete(url).pipe(
         catchError(this.handleError),
         map(()=>null)
      )
    }

    private jsonDataToCategories(jsonData: any[]):IrequestCategory[]{
        const categories:IrequestCategory[]=[]
         jsonData.forEach(element=>{
           categories.push(element as IrequestCategory)
          })
       return categories
    }

    private jsonDataToCategory(jsonData:any):IrequestCategory{
       return jsonData as IrequestCategory
    }

    private handleError(error:any):Observable<any>{
       console.log("ERRO DE REQUISIÇÃO =>",error)
       return throwError(error)
    }

}
