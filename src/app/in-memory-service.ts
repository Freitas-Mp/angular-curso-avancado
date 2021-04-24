import {InMemoryDbService} from "angular-in-memory-web-api"
import {IrequestCategory} from "./pages/category/shared/category.model"

class inMemoryService implements InMemoryDbService{
    createDb(){
        const categories:IrequestCategory[]=[
            {id:1,name:"Lazer",description:"food"},
            {id:2,name:"Fruit",description:"mango"},
            {id:3,name:"Meat",description:"cat"},
            {id:4,name:"Lazer",description:"food"},
            {id:5,name:"carro",description:"new cars" }
        ]
        return {categories}
    }
}

export {inMemoryService}