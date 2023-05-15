import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'nametitle'
})

export class NameTitlePipe implements PipeTransform{
    transform(name:string, gender:string):string {
        if(gender.toLowerCase() == 'male'){
            return "Mr. "+name;
        }
        else{
            return "Mrs. "+name;
        }
    }
}