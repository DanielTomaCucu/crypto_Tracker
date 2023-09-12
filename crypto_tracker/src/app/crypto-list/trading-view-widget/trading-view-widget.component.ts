import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-trading-view-widget',
  templateUrl: './trading-view-widget.component.html',
  styleUrls: ['./trading-view-widget.component.css'],
})
export class TradingViewWidgetComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngAfterViewInit() {
    this.addTradingViewScript();
  }
  addTradingViewScript() {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    scriptElement.async = true;
    scriptElement.innerHTML = `
    {
        "symbols": [
            {
                "proName": "FX_IDC:EURUSD",
                "title": "EUR to USD"
            },
            {
                "proName": "BITSTAMP:BTCUSD",
                "title": "Bitcoin"
            },
            {
                "proName": "BITSTAMP:ETHUSD",
                "title": "Ethereum"
            },
            {
                "description": "PolkaDot",
                "proName": "BINANCE:DOTUSDT"
            },
            {
                "description": "ChainLink",
                "proName": "BINANCE:LINKUSDT"
            },
            {
                "description": "MultiversX",
                "proName": "BINANCE:EGLDUSDT"
            },
            {
                "description": "Celo",
                "proName": "CELO"
            }
        ],
        "showSymbolLogo": true,
        "colorTheme": "light",
        "isTransparent": true,
        "displayMode": "regular",
        "locale": "en"
    }`;

    const container = document.getElementById('tradingViewWidgetContainer');
    if (container) {
      container.appendChild(scriptElement);
    }
  }
}
