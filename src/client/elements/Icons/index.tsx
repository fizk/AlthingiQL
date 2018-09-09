import * as React from 'react';
export const Spinner = () => (
    <svg width="100px" height="100px" viewBox="0 0 100 100">
        <circle
            id="thepath"
            fill="none"
            stroke="#000000"
            strokeMiterlimit="10"
            cx="50"
            cy="50"
            r="44"
        />
        <path
            fill="#CCCCCC"
            d="M50,0C22.386,0,0,22.386,0,50s22.386,50,50,50s50-22.386,50-50S77.614,0,50,0z M50,85.764 c-19.751,0-35.764-16.012-35.764-35.764S30.249,14.236,50,14.236c19.752,0,35.764,16.012,35.764,35.764S69.752,85.764,50,85.764z"
        />
        <path
            fill="#999999"
            d="M85.764,50c0,19.752-16.012,35.764-35.764,35.764V100c27.614,0,50-22.385,50-50H85.764z"
        >
            <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="1s"
                repeatCount="indefinite"
            />
        </path>
    </svg>
);

export const Empty = () => (
    <svg width="100px" height="100px" viewBox="0 0 100 100">
        <path
            fill="#CCCCCC"
            d="M21.378,14.398v71.203h57.243V14.398H21.378z M74.424,80.38H25.576V19.62h48.848V80.38z"
        />
    </svg>
);
