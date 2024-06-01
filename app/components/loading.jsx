"use client";

import React, { useEffect, useRef } from 'react'
import { CiCirclePlus } from "react-icons/ci";

import { gsap } from 'gsap';

import "../../app/globals.css"

function Loader({loader}) {

    const evPlusRef = useRef(null)

    useEffect(() => {
        if (!loader) {
            setTimeout(() => {
                gsap.fromTo(evPlusRef.current, { opacity: 0, x: 0 ,scale:.5}, { opacity: 1, x: 0, duration: 1,scale:1 });
            }, 500);
        }
      }, [loader])
  
  return (
    <div className="loader-container">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="250" zoomAndPan="magnify"
    viewBox="0 0 187.5 187.499992" height="250" preserveAspectRatio="xMidYMid meet" version="1.0">
    <defs>
        <g />
        <clipPath id="bc4a2c648a">
            <path
                d="M 0.746094 14.589844 L 186.253906 14.589844 L 186.253906 99.859375 L 0.746094 99.859375 Z M 0.746094 14.589844 "
                clipRule="nonzero" />
        </clipPath>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#00ffff",stopOpacity:1}} />
            <stop offset="100%" style={{stopColor: "#9400ff",stopOpacity:1}} />
        </linearGradient>
    </defs>
    <g id="charger-path" fill="url(#gradient)" clipPath="url(#bc4a2c648a)">
        <path
            d="M 143.597656 14.605469 C 133.65625 14.605469 121.464844 21.410156 107.363281 34.832031 C 97.292969 44.417969 89.945312 53.863281 89.640625 54.261719 C 81.902344 64.238281 58.511719 90.136719 43.386719 90.136719 C 25.253906 90.136719 10.5 75.382812 10.5 57.246094 C 10.5 39.113281 25.253906 24.359375 43.386719 24.359375 C 45.917969 24.359375 48.867188 25.144531 52.144531 26.652344 C 49.332031 33.101562 50.886719 40.890625 56.496094 45.722656 L 68.984375 56.480469 L 73.695312 51.015625 L 78.023438 54.746094 C 78.972656 55.5625 80.40625 55.457031 81.226562 54.507812 C 82.046875 53.554688 81.9375 52.121094 80.988281 51.300781 L 76.660156 47.574219 L 79.742188 43.996094 L 82.820312 40.421875 L 87.152344 44.148438 C 88.101562 44.96875 89.535156 44.863281 90.355469 43.910156 C 91.171875 42.960938 91.066406 41.527344 90.117188 40.707031 L 85.789062 36.976562 L 90.496094 31.511719 L 78.011719 20.753906 C 72.5 16.003906 64.75 15.550781 58.824219 19.078125 C 53.207031 16.105469 48.050781 14.605469 43.386719 14.605469 C 19.875 14.605469 0.746094 33.734375 0.746094 57.246094 C 0.746094 80.761719 19.875 99.886719 43.386719 99.886719 C 53.332031 99.886719 65.523438 93.082031 79.625 79.660156 C 89.695312 70.078125 97.042969 60.628906 97.347656 60.234375 C 105.085938 50.253906 128.476562 24.359375 143.597656 24.359375 C 161.734375 24.359375 176.488281 39.113281 176.488281 57.246094 C 176.488281 75.382812 161.734375 90.136719 143.597656 90.136719 C 140.011719 90.136719 135.511719 88.546875 130.433594 85.507812 C 133.273438 79.050781 131.722656 71.238281 126.097656 66.394531 L 113.613281 55.636719 L 92.097656 80.605469 L 104.585938 91.363281 C 110.140625 96.152344 117.980469 96.574219 123.921875 92.949219 C 131.1875 97.554688 137.796875 99.886719 143.601562 99.886719 C 167.113281 99.886719 186.242188 80.757812 186.242188 57.246094 C 186.238281 33.734375 167.113281 14.605469 143.597656 14.605469 Z M 118.480469 84.949219 C 116.867188 84.949219 115.5625 83.640625 115.5625 82.03125 C 115.5625 80.421875 116.867188 79.113281 118.480469 79.113281 C 120.089844 79.113281 121.394531 80.421875 121.394531 82.03125 C 121.394531 83.640625 120.089844 84.949219 118.480469 84.949219 Z M 118.480469 84.949219 "
            fillOpacity="1" fillRule="nonzero" />
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(-0.737715, 149.760016)">
            <g>
                <path d="M 2.40625 0 L 2.40625 -24.859375 L 8.90625 -24.859375 L 8.90625 0 Z M 2.40625 0 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(14.825212, 149.760016)">
            <g>
                <path
                    d="M 19.421875 -9.890625 L 19.390625 -24.859375 L 25.421875 -24.859375 L 25.421875 0 L 19.75 0 L 8.46875 -14.859375 L 8.46875 0 L 2.40625 0 L 2.40625 -24.859375 L 8.125 -24.859375 Z M 19.421875 -9.890625 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(46.942585, 149.760016)">
            <g>
                <path
                    d="M 2.40625 0 L 2.40625 -24.859375 L 20.984375 -24.859375 L 20.953125 -19.671875 L 8.90625 -19.671875 L 8.90625 -14.140625 L 20.03125 -14.140625 L 20.03125 -8.96875 L 8.90625 -8.96875 L 8.90625 0 Z M 2.40625 0 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(72.714685, 149.760016)">
            <g>
                <path d="M 2.40625 0 L 2.40625 -24.859375 L 8.90625 -24.859375 L 8.90625 0 Z M 2.40625 0 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(88.277613, 149.760016)">
            <g>
                <path
                    d="M 19.421875 -9.890625 L 19.390625 -24.859375 L 25.421875 -24.859375 L 25.421875 0 L 19.75 0 L 8.46875 -14.859375 L 8.46875 0 L 2.40625 0 L 2.40625 -24.859375 L 8.125 -24.859375 Z M 19.421875 -9.890625 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(120.394987, 149.760016)">
            <g>
                <path d="M 2.40625 0 L 2.40625 -24.859375 L 8.90625 -24.859375 L 8.90625 0 Z M 2.40625 0 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(135.957915, 149.760016)">
            <g>
                <path
                    d="M 0.25 -19.5 L 0.25 -24.859375 L 21.5625 -24.859375 L 21.5625 -19.5 L 14.109375 -19.5 L 14.109375 0 L 7.625 0 L 7.625 -19.5 Z M 0.25 -19.5 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(161.978148, 149.760016)">
            <g>
                <path
                    d="M 17.9375 -24.859375 L 24.421875 -24.859375 L 15.453125 -7.9375 L 15.453125 0 L 8.96875 0 L 8.96875 -7.765625 L -0.171875 -24.859375 L 6.3125 -24.859375 L 12.203125 -14.1875 Z M 17.9375 -24.859375 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(8.203235, 168.421682)">
            <g>
                <path
                    d="M 0.84375 0 L 0.84375 -8.65625 L 7.671875 -8.65625 L 7.671875 -6.859375 L 3.109375 -6.859375 L 3.109375 -5.234375 L 7.234375 -5.234375 L 7.234375 -3.453125 L 3.109375 -3.4375 L 3.109375 -1.796875 L 7.796875 -1.796875 L 7.796875 0 Z M 0.84375 0 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(18.025685, 168.421682)">
            <g>
                <path
                    d="M 0.84375 0 L 0.84375 -8.65625 L 3.109375 -8.65625 L 3.109375 -1.921875 L 6.765625 -1.921875 L 6.765625 0 Z M 0.84375 0 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(26.464503, 168.421682)">
            <g>
                <path
                    d="M 0.84375 0 L 0.84375 -8.65625 L 7.671875 -8.65625 L 7.671875 -6.859375 L 3.109375 -6.859375 L 3.109375 -5.234375 L 7.234375 -5.234375 L 7.234375 -3.453125 L 3.109375 -3.4375 L 3.109375 -1.796875 L 7.796875 -1.796875 L 7.796875 0 Z M 0.84375 0 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(36.286954, 168.421682)">
            <g>
                <path
                    d="M 7.109375 -5.71875 C 6.828125 -6.070312 6.492188 -6.351562 6.109375 -6.5625 C 5.722656 -6.78125 5.335938 -6.890625 4.953125 -6.890625 C 4.515625 -6.890625 4.113281 -6.78125 3.75 -6.5625 C 3.394531 -6.34375 3.113281 -6.039062 2.90625 -5.65625 C 2.707031 -5.269531 2.609375 -4.84375 2.609375 -4.375 C 2.609375 -3.90625 2.707031 -3.476562 2.90625 -3.09375 C 3.113281 -2.707031 3.394531 -2.40625 3.75 -2.1875 C 4.113281 -1.96875 4.515625 -1.859375 4.953125 -1.859375 C 5.304688 -1.859375 5.675781 -1.945312 6.0625 -2.125 C 6.457031 -2.3125 6.804688 -2.5625 7.109375 -2.875 L 8.421875 -1.453125 C 7.953125 -0.960938 7.394531 -0.570312 6.75 -0.28125 C 6.101562 0.0078125 5.460938 0.15625 4.828125 0.15625 C 3.972656 0.15625 3.195312 -0.0390625 2.5 -0.4375 C 1.8125 -0.832031 1.269531 -1.367188 0.875 -2.046875 C 0.476562 -2.734375 0.28125 -3.5 0.28125 -4.34375 C 0.28125 -5.1875 0.484375 -5.945312 0.890625 -6.625 C 1.296875 -7.300781 1.847656 -7.832031 2.546875 -8.21875 C 3.253906 -8.601562 4.046875 -8.796875 4.921875 -8.796875 C 5.566406 -8.796875 6.203125 -8.660156 6.828125 -8.390625 C 7.453125 -8.128906 7.984375 -7.765625 8.421875 -7.296875 Z M 7.109375 -5.71875 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(46.319425, 168.421682)">
            <g>
                <path
                    d="M 0.09375 -6.796875 L 0.09375 -8.65625 L 7.515625 -8.65625 L 7.515625 -6.796875 L 4.921875 -6.796875 L 4.921875 0 L 2.65625 0 L 2.65625 -6.796875 Z M 0.09375 -6.796875 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(55.388287, 168.421682)">
            <g>
                <path
                    d="M 8.609375 0 L 6.046875 0 L 4.78125 -2.390625 L 3.109375 -2.390625 L 3.109375 0 L 0.84375 0 L 0.84375 -8.65625 L 4.734375 -8.65625 C 5.878906 -8.65625 6.765625 -8.390625 7.390625 -7.859375 C 8.023438 -7.328125 8.34375 -6.582031 8.34375 -5.625 C 8.34375 -4.96875 8.207031 -4.398438 7.9375 -3.921875 C 7.675781 -3.453125 7.296875 -3.085938 6.796875 -2.828125 Z M 3.109375 -6.859375 L 3.109375 -4.203125 L 4.75 -4.203125 C 5.207031 -4.203125 5.5625 -4.316406 5.8125 -4.546875 C 6.0625 -4.773438 6.1875 -5.109375 6.1875 -5.546875 C 6.1875 -5.972656 6.0625 -6.296875 5.8125 -6.515625 C 5.5625 -6.742188 5.207031 -6.859375 4.75 -6.859375 Z M 3.109375 -6.859375 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(65.816081, 168.421682)">
            <g>
                <path d="M 0.84375 0 L 0.84375 -8.65625 L 3.109375 -8.65625 L 3.109375 0 Z M 0.84375 0 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(71.240563, 168.421682)">
            <g>
                <path
                    d="M 7.109375 -5.71875 C 6.828125 -6.070312 6.492188 -6.351562 6.109375 -6.5625 C 5.722656 -6.78125 5.335938 -6.890625 4.953125 -6.890625 C 4.515625 -6.890625 4.113281 -6.78125 3.75 -6.5625 C 3.394531 -6.34375 3.113281 -6.039062 2.90625 -5.65625 C 2.707031 -5.269531 2.609375 -4.84375 2.609375 -4.375 C 2.609375 -3.90625 2.707031 -3.476562 2.90625 -3.09375 C 3.113281 -2.707031 3.394531 -2.40625 3.75 -2.1875 C 4.113281 -1.96875 4.515625 -1.859375 4.953125 -1.859375 C 5.304688 -1.859375 5.675781 -1.945312 6.0625 -2.125 C 6.457031 -2.3125 6.804688 -2.5625 7.109375 -2.875 L 8.421875 -1.453125 C 7.953125 -0.960938 7.394531 -0.570312 6.75 -0.28125 C 6.101562 0.0078125 5.460938 0.15625 4.828125 0.15625 C 3.972656 0.15625 3.195312 -0.0390625 2.5 -0.4375 C 1.8125 -0.832031 1.269531 -1.367188 0.875 -2.046875 C 0.476562 -2.734375 0.28125 -3.5 0.28125 -4.34375 C 0.28125 -5.1875 0.484375 -5.945312 0.890625 -6.625 C 1.296875 -7.300781 1.847656 -7.832031 2.546875 -8.21875 C 3.253906 -8.601562 4.046875 -8.796875 4.921875 -8.796875 C 5.566406 -8.796875 6.203125 -8.660156 6.828125 -8.390625 C 7.453125 -8.128906 7.984375 -7.765625 8.421875 -7.296875 Z M 7.109375 -5.71875 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(81.273034, 168.421682)">
            <g>
                <path
                    d="M 9.609375 0 L 7.203125 0 L 6.609375 -1.53125 L 2.875 -1.53125 L 2.265625 0 L -0.0625 0 L 3.65625 -8.65625 L 5.984375 -8.65625 Z M 4.765625 -6.359375 L 3.546875 -3.265625 L 5.9375 -3.265625 Z M 4.765625 -6.359375 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(92.306163, 168.421682)">
            <g>
                <path
                    d="M 0.84375 0 L 0.84375 -8.65625 L 3.109375 -8.65625 L 3.109375 -1.921875 L 6.765625 -1.921875 L 6.765625 0 Z M 0.84375 0 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(100.744979, 168.421682)">
            <g />
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(105.564115, 168.421682)">
            <g>
                <path
                    d="M 3.34375 0 L -0.03125 -8.65625 L 2.40625 -8.65625 L 4.578125 -2.390625 L 6.75 -8.65625 L 9.078125 -8.65625 L 5.6875 0 Z M 3.34375 0 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(116.090746, 168.421682)">
            <g>
                <path
                    d="M 0.84375 0 L 0.84375 -8.65625 L 7.671875 -8.65625 L 7.671875 -6.859375 L 3.109375 -6.859375 L 3.109375 -5.234375 L 7.234375 -5.234375 L 7.234375 -3.453125 L 3.109375 -3.4375 L 3.109375 -1.796875 L 7.796875 -1.796875 L 7.796875 0 Z M 0.84375 0 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(125.9132, 168.421682)">
            <g>
                <path
                    d="M 0.84375 0 L 0.84375 -8.65625 L 3.109375 -8.65625 L 3.109375 -5.125 L 6.59375 -5.125 L 6.59375 -8.65625 L 8.859375 -8.65625 L 8.859375 0 L 6.59375 0 L 6.59375 -3.328125 L 3.109375 -3.328125 L 3.109375 0 Z M 0.84375 0 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(137.094575, 168.421682)">
            <g>
                <path d="M 0.84375 0 L 0.84375 -8.65625 L 3.109375 -8.65625 L 3.109375 0 Z M 0.84375 0 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(142.519063, 168.421682)">
            <g>
                <path
                    d="M 7.109375 -5.71875 C 6.828125 -6.070312 6.492188 -6.351562 6.109375 -6.5625 C 5.722656 -6.78125 5.335938 -6.890625 4.953125 -6.890625 C 4.515625 -6.890625 4.113281 -6.78125 3.75 -6.5625 C 3.394531 -6.34375 3.113281 -6.039062 2.90625 -5.65625 C 2.707031 -5.269531 2.609375 -4.84375 2.609375 -4.375 C 2.609375 -3.90625 2.707031 -3.476562 2.90625 -3.09375 C 3.113281 -2.707031 3.394531 -2.40625 3.75 -2.1875 C 4.113281 -1.96875 4.515625 -1.859375 4.953125 -1.859375 C 5.304688 -1.859375 5.675781 -1.945312 6.0625 -2.125 C 6.457031 -2.3125 6.804688 -2.5625 7.109375 -2.875 L 8.421875 -1.453125 C 7.953125 -0.960938 7.394531 -0.570312 6.75 -0.28125 C 6.101562 0.0078125 5.460938 0.15625 4.828125 0.15625 C 3.972656 0.15625 3.195312 -0.0390625 2.5 -0.4375 C 1.8125 -0.832031 1.269531 -1.367188 0.875 -2.046875 C 0.476562 -2.734375 0.28125 -3.5 0.28125 -4.34375 C 0.28125 -5.1875 0.484375 -5.945312 0.890625 -6.625 C 1.296875 -7.300781 1.847656 -7.832031 2.546875 -8.21875 C 3.253906 -8.601562 4.046875 -8.796875 4.921875 -8.796875 C 5.566406 -8.796875 6.203125 -8.660156 6.828125 -8.390625 C 7.453125 -8.128906 7.984375 -7.765625 8.421875 -7.296875 Z M 7.109375 -5.71875 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(152.55154, 168.421682)">
            <g>
                <path
                    d="M 0.84375 0 L 0.84375 -8.65625 L 3.109375 -8.65625 L 3.109375 -1.921875 L 6.765625 -1.921875 L 6.765625 0 Z M 0.84375 0 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(160.990362, 168.421682)">
            <g>
                <path
                    d="M 0.84375 0 L 0.84375 -8.65625 L 7.671875 -8.65625 L 7.671875 -6.859375 L 3.109375 -6.859375 L 3.109375 -5.234375 L 7.234375 -5.234375 L 7.234375 -3.453125 L 3.109375 -3.4375 L 3.109375 -1.796875 L 7.796875 -1.796875 L 7.796875 0 Z M 0.84375 0 " />
            </g>
        </g>
    </g>
    <g fill="#000000" fillOpacity="1">
        <g transform="translate(170.812816, 168.421682)">
            <g>
                <path
                    d="M 6.8125 -6.0625 C 6.351562 -6.332031 5.859375 -6.550781 5.328125 -6.71875 C 4.804688 -6.894531 4.367188 -6.984375 4.015625 -6.984375 C 3.734375 -6.984375 3.507812 -6.929688 3.34375 -6.828125 C 3.1875 -6.722656 3.109375 -6.570312 3.109375 -6.375 C 3.109375 -6.1875 3.175781 -6.023438 3.3125 -5.890625 C 3.457031 -5.765625 3.632812 -5.660156 3.84375 -5.578125 C 4.050781 -5.503906 4.359375 -5.410156 4.765625 -5.296875 C 5.359375 -5.117188 5.847656 -4.941406 6.234375 -4.765625 C 6.628906 -4.597656 6.96875 -4.332031 7.25 -3.96875 C 7.53125 -3.613281 7.671875 -3.148438 7.671875 -2.578125 C 7.671875 -1.992188 7.519531 -1.5 7.21875 -1.09375 C 6.914062 -0.6875 6.5 -0.378906 5.96875 -0.171875 C 5.4375 0.0351562 4.84375 0.140625 4.1875 0.140625 C 3.46875 0.140625 2.75 0.015625 2.03125 -0.234375 C 1.320312 -0.492188 0.710938 -0.835938 0.203125 -1.265625 L 1.078125 -3.046875 C 1.515625 -2.648438 2.03125 -2.328125 2.625 -2.078125 C 3.21875 -1.835938 3.75 -1.71875 4.21875 -1.71875 C 4.550781 -1.71875 4.8125 -1.78125 5 -1.90625 C 5.195312 -2.03125 5.296875 -2.210938 5.296875 -2.453125 C 5.296875 -2.648438 5.222656 -2.8125 5.078125 -2.9375 C 4.941406 -3.070312 4.765625 -3.175781 4.546875 -3.25 C 4.328125 -3.332031 4.019531 -3.425781 3.625 -3.53125 C 3.03125 -3.695312 2.535156 -3.863281 2.140625 -4.03125 C 1.753906 -4.195312 1.421875 -4.453125 1.140625 -4.796875 C 0.867188 -5.140625 0.734375 -5.597656 0.734375 -6.171875 C 0.734375 -6.703125 0.875 -7.171875 1.15625 -7.578125 C 1.445312 -7.984375 1.851562 -8.296875 2.375 -8.515625 C 2.894531 -8.734375 3.503906 -8.84375 4.203125 -8.84375 C 4.828125 -8.84375 5.441406 -8.753906 6.046875 -8.578125 C 6.660156 -8.398438 7.195312 -8.160156 7.65625 -7.859375 Z M 6.8125 -6.0625 " />
            </g>
        </g>
    </g>
</svg>
<span ref={evPlusRef} className='opacity-0 '> 
    <CiCirclePlus color='black' className='w-8 h-8' />
</span>

    </div>
  )
}

export default Loader