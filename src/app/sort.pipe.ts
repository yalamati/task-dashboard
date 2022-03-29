import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:true
})
export class SortPipe implements PipeTransform {

  transform(list: any[],column:string): any[] {

   let sortList =  list.sort((t1,t2) => {
      if ( t1[column] > t2[column] ) {
        return 1;
      }
      if ( t1[column] < t2[column] ) {
        return -1;
      }
        return 0;
    });
    return sortList;
  }

}
