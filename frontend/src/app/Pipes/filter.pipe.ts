import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString:string, vehName:string): any[] {
    const resultArray = [];
    if(value){
        if(value.length === 0 || filterString ===''|| vehName===''){
          return value;
        }
      for(const item of value){
        if(item[vehName]=== filterString){
          resultArray.push(item);
        }
      }
      return resultArray;
    } 
    }
    

}
