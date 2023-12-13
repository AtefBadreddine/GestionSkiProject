import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-widget',
  template: `
    <div class="stats-widget" [style.background-color]="backgroundColor" [style.box-shadow]="boxShadow">
      <div class="content">
        <mat-icon class="stat-icon" style="font-size: 32px; color: #2196F3;">insert_chart</mat-icon>
        <div class="value" [style.color]="valueColor">{{ value }}%</div>
        <div class="description">{{ description }}</div>
        <mat-progress-bar class="progress-bar" [value]="normalizeValueForProgressBar()" mode="buffer" color="primary"></mat-progress-bar>
      </div>
    </div>
  `,
  styles: [`
    .stats-widget {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      width: 300px;
      height: 250px;
      border-radius: 12px;
      border: 2px solid #000; /* Thinner border */
      padding: 16px;
      overflow: hidden; /* Hide overflow to prevent box shadow from being cut off */
    }

    .stats-widget:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Box shadow on hover */
    }

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .stat-icon {
      position: absolute;
      top: 8px;
      right: 8px;
      font-size: 48px; /* Larger font size for the icon */
    }

    .value {
      font-size: 2.5em;
      font-weight: bold;
    }

    .description {
      font-size: 1.5em;
      color: #000;
      margin-top: 20px;
    }

    .progress-bar {
      width: 100%;
      margin-top: 20px;
    }
  `],
})
export class StatsWidgetComponent {
  @Input() value: number = 50;
  @Input() valueColor: string = '#000';
  @Input() backgroundColor: string = '#fff';
  @Input() borderColor: string = '#000';
  @Input() description: string = '';

  get boxShadow(): string {
    return `0 0 8px ${this.borderColor}`;
  }

  normalizeValueForProgressBar(): number {
    return Math.min(Math.max(this.value, 0), 100);
  }
}
