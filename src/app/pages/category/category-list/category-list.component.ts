import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category.service'
import { IrequestCategory } from '../shared/category.model'
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private http:CategoryService) { }
  
  categories:IrequestCategory[]=[]

  ngOnInit(): void {
    this.getCategories()
  }

  alert(value){
    alert(value)
  }
  
   getCategories(){
     this.http.getAll()
          .subscribe(
            res=>{
              this.categories=res
            }
          )
   }

   delete=({ id })=>{
     const confirmDelete=confirm("desejas deletar!")
      if(confirmDelete){
      this.http.delete(id).subscribe(
        ()=>{
          this.categories=this.categories.filter(data=>data.id!=id)
        },
        ()=>alert("Erro ao tentar deletar!")
      )
    }
   }
}
