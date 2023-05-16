import { Component } from '@angular/core';

@Component({
  selector: 'app-flatten-array',
  templateUrl: './flatten-array.component.html',
  styleUrls: ['./flatten-array.component.scss']
})
export class FlattenArrayComponent {


  ngOnInit(){
//  const multiDimensionalArray = [[1, 3], [true, "5"]];
 const multiDimensionalArray = [[1, 3], [true, "5"],[2,7],[10,'apple'],[false,678]];

const flattenedArray =this.transformDoodles(multiDimensionalArray);
console.log(flattenedArray); // Output: [1, 3, true, "5"]
  }

  transformDoodles(list: any[]): any[] {
    const result: any[] = [];
  
    function flattenArray(arr: any[]): void {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          flattenArray(arr[i]); // Recursively flatten nested arrays
        } else {
          result.push(arr[i]); // Add non-array values to the result
        }
      }
    }
  
    flattenArray(list);
    return result;
  }
  

}
