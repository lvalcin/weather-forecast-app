export const FiveDays = {
    // This data is a mockup for the Five Day Forecast API response.
  cod: "200",
  message: 0,
  cnt: 5,
  list: [
    {
      dt: 1733486400,
      dt_txt: "2024-12-06 12:00:00",
      main: {
        temprature: 284.5,
        temprature_min: 283.1,
        temprature_max: 286.2,
        temprature_feels_like: 283.7,
        pressure: 1012,
        humidity: 68,
        temprature_unit: "K"
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d"
        }
      ]
    },
    {
      dt: 1733572800,
      dt_txt: "2024-12-07 12:00:00",
      main: {
        temprature: 285.2,
        temprature_min: 284.0,
        temprature_max: 287.5,
        temprature_feels_like: 284.3,
        pressure: 1010,
        humidity: 63,
        temprature_unit: "K"
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ]
    },
    {
      dt: 1733659200,
      dt_txt: "2024-12-08 12:00:00",
      main: {
        temprature: 282.8,
        temprature_min: 281.6,
        temprature_max: 284.9,
        temprature_feels_like: 281.5,
        pressure: 1008,
        humidity: 70,
        temprature_unit: "K"
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ]
    },
    {
      dt: 1733745600,
      dt_txt: "2024-12-09 12:00:00",
      main: {
        temprature: 280.1,
        temprature_min: 279.0,
        temprature_max: 281.3,
        temprature_feels_like: 279.1,
        pressure: 1013,
        humidity: 75,
        temprature_unit: "K"
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ]
    },
    {
      dt: 1733832000,
      dt_txt: "2024-12-10 12:00:00",
      main: {
        temprature: 278.4,
        temprature_min: 277.5,
        temprature_max: 280.0,
        temprature_feels_like: 277.2,
        pressure: 1015,
        humidity: 80,
        temprature_unit: "K"
      },
      weather: [
        {
          id: 600,
          main: "Snow",
          description: "light snow",
          icon: "13d"
        }
      ]
    }
  ]
};
