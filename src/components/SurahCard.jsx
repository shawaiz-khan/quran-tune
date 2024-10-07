import Card from "./Card";
import { HeartIcon } from '@heroicons/react/solid';
import Heading from "./Heading";
import { getCurrentData, saveData } from '../helpers/localStorage';
import { useLocation } from "react-router";
import '../CSS/SurahCard.css';
import { useMediaQuery } from 'react-responsive';

export default function SurahCard({ number, englishName, englishNameTranslation, numberOfAyahs }) {
    const location = useLocation();
    const favorites = getCurrentData("_favorites");
    const isFavorited = favorites.some(fav => fav.number === number);
    const toggleFavorite = (e) => {
        e.stopPropagation();
        e.preventDefault();
        let updatedFavorites;
        if (isFavorited) {
            updatedFavorites = favorites.filter(fav => fav.number !== number);
        } else {
            updatedFavorites = [...favorites, { number }];
        }
        saveData('_favorites', updatedFavorites);
    };

    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div>
            {isMobile ? (
                <div className="card-shadow">
                    <Card className="surah-card">
                        <div className="surah-header">
                            <span className="surah-number">{number}</span>
                            <div>
                                <HeartIcon className={`favorite-icon h-6 w-6 ${getCurrentData("_favorites").some(fav => fav.number == number) ? 'text-green-5001' : 'text-gray-300'}`} onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    let favorites = getCurrentData("_favorites")
                                    let element = null;
                                    element = e.target.classList.contains('favorite-icon') && e.target;
                                    if (!element)
                                        element = e.target.parentElement.classList.contains('favorite-icon') && e.target.parentElement;
                                    const isFavorited = favorites.some(fav => fav.number == number);
                                    if (isFavorited) {
                                        favorites = favorites.filter(fav => fav.number != number);
                                        if (element) {
                                            if (location.pathname.includes('favorites') && confirm("Are you sure to unfavorited this surah?")) {
                                                element.parentElement.parentElement.parentElement.parentElement.classList.add('hidden');
                                            }
                                            element.classList.replace('text-green-5001', 'text-gray-300');
                                        };
                                    } else {
                                        if (element) {
                                            element.classList.replace('text-gray-300', 'text-green-5001');
                                        };
                                        favorites.push({ number });
                                    }
                                    saveData('_favorites', favorites);
                                }} />
                            </div>
                        </div>
                        <div className="surah-details">
                            <Heading tag="h3" className="surah-name">{englishName}</Heading>
                            <small className="translation">Translation: {englishNameTranslation}</small>
                            <br />
                            <small className="ayah-count">Ayahs: {numberOfAyahs}</small>
                        </div>
                    </Card>
                </div>
            ) : (
                <div className="card-shadow cursor-pointer transition hover:scale-125">
                    <Card className="surah-card">
                        <div className="surah-header">
                            <span className="surah-number">{number}</span>
                            <div>
                                <HeartIcon className={`favorite-icon h-6 w-6 ${getCurrentData("_favorites").some(fav => fav.number == number) ? 'text-green-5001' : 'text-gray-300'} cursor-pointer transition hover:scale-125`} onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    let favorites = getCurrentData("_favorites")
                                    let element = null;
                                    element = e.target.classList.contains('favorite-icon') && e.target;
                                    if (!element)
                                        element = e.target.parentElement.classList.contains('favorite-icon') && e.target.parentElement;
                                    const isFavorited = favorites.some(fav => fav.number == number);
                                    if (isFavorited) {
                                        favorites = favorites.filter(fav => fav.number != number);
                                        if (element) {
                                            if (location.pathname.includes('favorites') && confirm("Are you sure to unfavorited this surah?")) {
                                                element.parentElement.parentElement.parentElement.parentElement.classList.add('hidden');
                                            }
                                            element.classList.replace('text-green-5001', 'text-gray-300');
                                        };
                                    } else {
                                        if (element) {
                                            element.classList.replace('text-gray-300', 'text-green-5001');
                                        };
                                        favorites.push({ number });
                                    }
                                    saveData('_favorites', favorites);
                                }} />
                            </div>
                        </div>
                        <div className="surah-details">
                            <Heading tag="h3" className="surah-name">{englishName}</Heading>
                            <small className="translation"><span className="text-grey-5001 font-bold">Translation:</span> {englishNameTranslation}</small>
                            <br />
                            <small className="ayah-count font-bold">Ayahs: {numberOfAyahs}</small>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    )
}
