import { Component } from '@angular/core';

import { CardsOurServices } from '../../../datas/our-services';
import { IOurServices } from '../../../interfaces/ourServices';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
  cardsDatas: Array<IOurServices> = CardsOurServices
}
