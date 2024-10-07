import { preventDoublePlayAndTriggerNextPlay } from "../helpers/audio";
import Card from "./Card";
import Heading from "./Heading";
import "../CSS/Ayah.css";

export default function Ayah({ ayah, numberOfSurah, lockView }) {
    return (
        <Card id={lockView ? `ayah-${ayah.number}` : ''}>
            <div className="mb-8 flex items-center gap-4">
                <span class="ayah-num">{ayah.numberInSurah}</span>
                <audio
                    controls="controls"
                    // controlsList="nodownload"
                    className="murottals-audio"
                    preload="none"
                    onPlay={function (e) { preventDoublePlayAndTriggerNextPlay(e, ayah.number, numberOfSurah) }}
                >
                    <source src={ayah.audio} />
                </audio>
            </div>
            <div>
                <p className="leading-snug sm:leading-snug arabic-font block font-normal text-green-500 text-right mb-4 sm:pl-32 text-3xl sm:text-4xl">{ayah.text}</p>
                <Heading tag="h3" className="font-semibold text-black text-base sm:text-lg sm:mb-2 sm:pr-32">{ayah.textInTR}</Heading>
                <small className="font-medium text-gray-500 text-sm sm:text-base sm:pr-32"><p className="trans-audio" style={{ display: "inline" }}>Translation:</p> {ayah.textInTRL}</small>
            </div>
        </Card >
    )
}