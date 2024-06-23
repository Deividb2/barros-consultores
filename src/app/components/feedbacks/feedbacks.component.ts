import { Component } from '@angular/core';

import { Feedbacks } from '../../../datas/feedbacks';
import { IFeedbacks } from '../../../interfaces/feedbacks.interface';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss'
})
export class FeedbacksComponent {
  feedbacks: Array<IFeedbacks> = Feedbacks
}
