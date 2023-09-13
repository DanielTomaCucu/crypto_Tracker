import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.css'],
})
export class ChartWidgetComponent {
  private tradingViewScriptUrl = 'https://s3.tradingview.com/tv.js';
  //public symbol = 'BTC';
  @Input() symbol: string | null | undefined;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.loadTradingViewScript().then(() => {
      this.initializeTradingViewWidget();
    });
  }

  loadTradingViewScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (document.getElementById('tradingViewScript')) {
        resolve();
        return;
      }

      const scriptElement = this.renderer.createElement('script');
      scriptElement.id = 'tradingViewScript';
      scriptElement.src = this.tradingViewScriptUrl;
      scriptElement.onload = () => resolve();
      scriptElement.onerror = () => reject();
      this.renderer.appendChild(this.el.nativeElement, scriptElement);
    });
  }

  initializeTradingViewWidget() {
    new (window as any).TradingView.widget({
      autosize: true,
      symbol: `BINANCE:${this.symbol}USDT`,
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: 'light',
      style: '3',
      locale: 'en',
      enable_publishing: false,
      gridColor: 'rgba(101, 101, 101, 0.06)',
      hide_top_toolbar: true,
      hide_legend: true,
      save_image: false,
      hide_volume: true,
      container_id: 'tradingview_a8029',
    });
  }
}
