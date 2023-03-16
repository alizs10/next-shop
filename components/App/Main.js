import MainProducts from './Main/MainProducts'
import MainTitle from './Main/MainTitle'
import MainProduct from './Main/MainProduct'
import { useState } from 'react';

function Main() {

    const [shownProduct, setShownProduct] = useState({
        name: "NIKE AIR MAX III",
        price: 149,
        stars: [
            {
                id: "star-one",
                status: true
            },
            {
                id: "star-two",
                status: true
            },
            {
                id: "star-three",
                status: true
            },
            {
                id: "star-four",
                status: true
            },
            {
                id: "star-five",
                status: false
            }
        ],
        colors: [
            {
                id: "color-one",
                palette: ['#fff', "#222"],
                image: '/assets/nike-shoe-rmed-bg.png',
                price_increase: 0
            },
            {
                id: "color-two",
                palette: ['#fff', "#222"],
                image: '/assets/nike-shoe-rmed-bg.png',
                price_increase: 10
            },
            {
                id: "color-three",
                palette: ['#fff', "#222"],
                image: '/assets/nike-shoe-rmed-bg.png',
                price_increase: 25
            }
        ],
        sizes: [
            {
                id: "size-one",
                size: 6,
                price_increase: 0
            },
            {
                id: "size-one",
                size: 8,
                price_increase: 5
            },
            {
                id: "size-one",
                size: 10,
                price_increase: 15
            }
        ],
        image: "/assets/nike-shoe-rmed-bg.png",
    })

    return (
        <div className="mt-10 w-full h-full lg:pt-20 xl:pt-0 grid grid-cols-7 gap-y-2">

            <MainTitle />
            <MainProduct shownProduct={shownProduct} />
            <MainProducts />

        </div>
    );
}

export default Main;