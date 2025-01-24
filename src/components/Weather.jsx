import { useEffect, useState } from 'react';
import styled from 'styled-components';

const WeatherCard = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const params = {
                latitude: 40.7128,
                longitude: -74.0060, // Coordinates for New York, USA
                current_weather: true
            };
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${params.latitude}&longitude=${params.longitude}&current_weather=${params.current_weather}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setWeatherData(data.current_weather);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeather();
    }, []);

    if (!weatherData) {
        return <WeatherCardContainer>Loading</WeatherCardContainer>;
    }

    const getWeatherEmoji = (temperature) => {
        if (temperature > 30) {
            return '☀️';
        } else if (temperature > 20) {
            return '⛅';
        } else if (temperature > 10) {
            return '🌧️';
        } else if (temperature > 0) {
            return '❄️';
        } else {
            return '🌩️';
        }
    };

    return (
        <WeatherCardContainer>
            <WeatherItem>
                <WeatherEmoji>{getWeatherEmoji(weatherData.temperature)}</WeatherEmoji>
                <WeatherInfo>
                    <p>Temperature: {weatherData.temperature}°C</p>
                    <p>Wind Speed: {weatherData.windspeed} km/h</p>
                </WeatherInfo>
            </WeatherItem>
        </WeatherCardContainer>
    );
};

const WeatherCardContainer = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 1em;
    background-color: inherit;
    border-radius: 8px;
    text-align: center;
`;



const WeatherItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 0;
    border-bottom: 1px solid #ccc;

    &:last-child {
        border-bottom: none;
    }
`;

const WeatherEmoji = styled.div`
    font-size: 2em;
`;

const WeatherInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    p {
        margin: 0;
        font-size: 1em;
    }
`;

export default WeatherCard;
