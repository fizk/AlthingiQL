import React, {FunctionComponent} from "react";

export const Spinner: FunctionComponent = () => (
    <svg viewBox="0 0 100 100">
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
            d="M50,0C22.386,0,0,22.386,0,50s22.386,50,50,50s50-22.386,50-50S77.614,0,50,0z M50,85.764
            c-19.751,0-35.764-16.012-35.764-35.764S30.249,14.236,50,14.236c19.752,0,35.764,16.012,35.764,
            35.764S69.752,85.764,50,85.764z"
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

export const Empty: FunctionComponent = () => (
    <svg width="100" height="100" viewBox="0 0 100 100">
        <g strokeWidth="10" fill="none" fillRule="evenodd">
            <path stroke="#CCC" d="M20 10h60v80H20z"/>
            <path d="M9 82l79-62" stroke="#999" strokeLinecap="square"/>
        </g>
    </svg>
);

export const Error: FunctionComponent = () => (
    <svg viewBox="0 0 100 100">
        <g stroke="none" fill="none" fillRule="evenodd">
            <rect id="Rectangle" fill="#CCCCCC" transform="translate(49.500000, 50.500000) rotate(45.000000) translate(-49.500000, -50.500000) " x="0" y="46" width="99" height="9" />
            <path d="M50,0 C77.6142375,0 100,22.3857625 100,50 C100,77.6142375 77.6142375,100 50,100 C22.3857625,100 0,77.6142375 0,50 C0,22.3857625 22.3857625,0 50,0 Z M50,12 C29.0131795,12 12,29.0131795 12,50 C12,70.9868205 29.0131795,88 50,88 C70.9868205,88 88,70.9868205 88,50 C88,29.0131795 70.9868205,12 50,12 Z" id="Combined-Shape" fill="#CCCCCC" />
        </g>
    </svg>
);
