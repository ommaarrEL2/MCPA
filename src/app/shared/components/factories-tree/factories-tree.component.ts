import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factories-tree',
  templateUrl: './factories-tree.component.html',
  styleUrl: './factories-tree.component.scss',
})
export class FactoriesTreeComponent {
  factoryTree!: any[];
  selectedFile: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.factoryTree = [
      {
        key: '0',
        label: 'factory1',
        children: [
          {
            key: '0-0',
            label: 'line1',
            data: 'https://angular.io',
            children: [
              {
                key: '0-0-0',
                label: 'machine1',
                data: 'https://angular.io',
                type: 'url',
              },
              {
                key: '0-0-1',
                label: 'Machine2',
                type: 'url',
              },
              {
                key: '0-0-1',
                label: 'Machine3',
              },
            ],
          },
          {
            key: '0-1',
            label: 'Line 2',
          },
          {
            key: '0-2',
            label: 'Line 3',
          },
          {
            key: '0-3',
            label: 'Line 4',
          },
        ],
      },
    ];
  }

  nodeSelect(event: any) {
    const value: string = event.node.label.replace(/\d+$/, '');
    this.router.navigate([`/manufacture/${value}`]);
    // switch (value) {
    //   case 'factory':
    //     this.router.navigate([`/manufacture/${value}`]);
    //     break;
    //   case 'line':
    //     this.router.navigate([`/manufacture/${value}`]);
    //     break;
    //   case 'factory':
    //     this.router.navigate([`/manufacture/${value}`]);
    //     break;

    //   default:
    //     break;
    // }
  }

  nodeUnselect(event: any) {}
}
