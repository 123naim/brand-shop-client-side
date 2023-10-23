
const Raing = ({ rating }) => {
    const rat = Number(rating)
    const yellowStars = rat;
    const grayStars = 5 - rat;

    const yellowStarElements = Array(yellowStars).fill(null).map((_, index) => (
        <span key={index} className="text-yellow-400 text-2xl">&#9733;</span>
    ));

    const grayStarElements = Array(grayStars).fill(null).map((_, index) => (
        <span key={index + yellowStars} className="text-gray-300 text-2xl">&#9733;</span>
    ));
    return (
        <div>
            {yellowStarElements}
            {grayStarElements}
        </div>
    );
};

export default Raing;