import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listSearch'
})
export class ListSearchPipe implements PipeTransform {

  transform(list: any[], searchText: string ): any[] {
    if (!list) { return []; }
    if (!searchText) { return list; }

    return list.filter( (it: string) => {
      return it.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}
