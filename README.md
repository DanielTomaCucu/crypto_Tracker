# crypto_Tracker

This project is a minimalistic replica of popular crypto tracking websites, like coinmarketcap and CoinGecko leveraging APIs provided by Messari and widgets from TradingView to visualize and navigate cryptocurrency data.

# Overview
![Screenshot 2023-10-31 at 17 53 28](https://github.com/DanielTomaCucu/crypto_Tracker/assets/61708051/d85d2ecc-6de7-48e5-bf94-1f2212a6400e)

The application fetches and displays real-time crypto data by making HTTP requests to the Messari APIs. Users can explore crypto price data, historical charts, and other relevant metrics in a manner similar to mainstream crypto tracking platforms.

# Performance Considerations
Given the real-time nature of cryptocurrency data, users might occasionally experience slight delays when accessing up-to-the-minute data. These potential delays arise mainly due to the API's constraints and traffic to the source.

# Features

Data Exploration: Delve into detailed cryptocurrency data, visualizing price trends, historical data, and market cap.
Responsive Design: Tailored with Tailwind CSS, the application is optimized for various screen sizes, ensuring a seamless user experience across devices.
Real-time Widgets: Integrated TradingView widgets provide users with dynamic and real-time data visualization.
# Purpose
This project was developed as a hands-on exercise to learn more about Tailwind CSS. Along the journey, I integrated third-party APIs from Messari and widgets for charting from Tradingview, enhancing my proficiency in Angular, HTML, and SCSS.

* Messari API Documentation: http://web.archive.org/web/20201226041150/https://messari.io/api/docs
* Tradingview Widgets: https://www.tradingview.com/widget/
* The project can be found here: https://crypto-tracker-danieltomacucu.vercel.app
