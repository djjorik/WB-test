import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }

  sortBy(array: any[], prop: string) {
    const propType = typeof array[0][prop];
    let sortedArray;
    switch (propType) {
      case 'string':
        // Default: ascending (A->Z)
        sortedArray = array.sort((a, b) => {
          const itemA = a[prop].toLowerCase();
          const itemB = b[prop].toLowerCase();
          if (itemA > itemB) { return 1; }
          if (itemA < itemB) { return -1; }
          return 0;
        });
        break;
      case 'number':
        // Default: ascending (0->9)
        sortedArray = array.sort((a, b) => {
          const itemA = a[prop];
          const itemB = b[prop];
          return itemB - itemA;
        });
    }
    return sortedArray;
  }
}
