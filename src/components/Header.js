import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 2,
      path: '/profile',
      text: 'My Profile',
    },        
  ];
  return (
    <header>
      <div>
       <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          width="50"
          height="50"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path d="M3415 5106 c-146 -34 -255 -97 -364 -211 -80 -84 -139 -196 -164 -308 -9 -38 -17 -71 -20 -73 -3 -3 -42 0 -88 6 -46 5 -145 10 -221 10 -452 0 -887 -154 -1238 -437 -89 -72 -257 -243 -321 -328 -132 -172 -242 -380 -310 -584 -52 -157 -59 -219 -30 -245 12 -11 35 -19 52 -19 46 0 63 27 102 159 193 652 731 1141 1403 1274 140 28 408 38 552 20 98 -12 102 -13 108 -39 33 -154 85 -260 177 -358 163 -175 396 -253 625 -210 46 9 108 27 137 41 l54 25 47 -52 c70 -78 159 -200 219 -302 83 -141 177 -367 159 -385 -30 -30 -366 -219 -574 -324 -876 -442 -2028 -831 -2781 -941 l-47 -7 -30 79 c-82 214 -111 364 -119 608 -5 173 -7 192 -26 213 -29 32 -79 30 -106 -4 -19 -24 -21 -40 -21 -164 l0 -138 -51 -32 c-156 -101 -359 -278 -435 -381 -19 -26 -49 -77 -66 -115 -29 -61 -33 -79 -33 -154 0 -71 4 -94 26 -141 53 -112 170 -191 331 -223 95 -20 357 -20 508 -1 l105 13 35 -42 c70 -83 237 -250 310 -309 541 -438 1279 -557 1935 -312 271 101 507 257 718 473 107 111 118 131 101 177 -10 24 -63 45 -89 35 -11 -5 -76 -64 -145 -132 -144 -142 -267 -233 -430 -317 -270 -140 -489 -198 -786 -208 -172 -6 -291 4 -449 38 -270 58 -556 196 -776 375 -73 59 -239 228 -239 243 0 5 19 12 43 15 23 4 114 22 202 41 136 29 163 38 183 60 28 33 28 55 1 90 -27 34 -47 32 -289 -18 -270 -56 -436 -78 -641 -84 -271 -8 -378 16 -458 102 -97 105 -53 246 130 420 86 83 251 210 271 210 10 0 36 -93 37 -136 1 -8 -35 -44 -79 -78 -44 -35 -118 -104 -165 -153 -72 -76 -85 -94 -85 -123 0 -78 84 -100 355 -92 332 10 739 91 1290 256 1142 343 2306 893 2728 1291 126 118 155 188 97 231 -37 27 -173 42 -330 37 l-135 -5 -42 73 c-23 41 -36 74 -30 74 7 0 68 5 136 10 541 42 746 -173 457 -478 -412 -434 -1677 -1039 -2954 -1412 -80 -23 -112 -47 -112 -84 0 -37 37 -76 72 -76 60 0 582 167 940 301 543 202 1134 472 1488 677 l105 61 3 -77 c7 -158 -39 -414 -108 -602 -17 -47 -58 -138 -90 -203 -33 -65 -60 -128 -60 -138 0 -28 44 -69 75 -69 37 0 64 32 122 145 141 276 213 581 213 899 l0 143 58 38 c240 159 412 327 485 474 39 79 42 90 42 170 0 74 -4 94 -28 143 -102 208 -390 280 -897 223 l-55 -6 -68 81 -68 81 59 65 c69 74 120 167 153 274 33 106 33 264 0 370 -71 231 -245 407 -471 475 -76 22 -249 28 -325 11z m315 -168 c133 -49 240 -143 300 -264 33 -68 60 -174 60 -239 0 -65 -27 -171 -60 -239 -83 -168 -252 -280 -445 -293 -302 -20 -565 227 -565 532 0 243 172 460 413 521 77 20 217 11 297 -18z m860 -1622 c0 -7 -135 -114 -148 -118 -13 -3 -52 81 -52 110 0 9 27 12 100 12 55 0 100 -2 100 -4z m-3872 -1458 l21 -58 -99 0 c-55 0 -100 2 -100 5 0 11 145 124 150 118 4 -5 16 -34 28 -65z" />
            <path d="M803 936 c-79 -20 -160 -65 -218 -123 -66 -65 -103 -126 -127 -212 -102 -369 252 -697 617 -571 69 23 159 87 206 145 47 59 90 156 102 234 33 215 -103 439 -311 513 -71 25 -199 32 -269 14z m239 -164 c65 -28 133 -94 165 -161 36 -73 39 -190 6 -263 -30 -66 -95 -133 -162 -165 -76 -38 -190 -39 -268 -4 -109 49 -193 177 -193 296 0 106 76 236 165 283 90 46 201 52 287 14z" />
          </g>
        </svg>
        <h1>Space Travelers' Hub</h1>
      </div>
      <div>
        <ul className="header-links">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} activeClassName="active-link" exact>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
