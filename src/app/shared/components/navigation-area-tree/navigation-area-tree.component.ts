import { Component } from '@angular/core';
import { NavigationAreaService } from '../../services/navigation-area.service';

@Component({
  selector: 'app-navigation-area-tree',
  templateUrl: './navigation-area-tree.component.html',
  styleUrl: './navigation-area-tree.component.scss',
})
export class NavigationAreaTreeComponent {
  factoryTree!: any[];
  selectedFile: any;

  constructor(private navigationTreeService: NavigationAreaService) {}

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

  getTree() {
    this.navigationTreeService.getNavigationArea().subscribe({
      next: (data: any) => {
        console.log(data);
      },
    });
  }

  nodeSelect(event: any) {}

  nodeUnselect(event: any) {}
}
