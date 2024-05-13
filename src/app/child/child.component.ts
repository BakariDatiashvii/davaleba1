import { Component, Input } from '@angular/core';
import { Person } from '../interfase';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() personData: Person | undefined;
}
