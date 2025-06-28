'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import SearchBar from '../../ui/searchbar/SearchBar';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Handle link clicks to show loading progress
  const handleLinkClick = () => {
    setIsLoading(true);
    setProgress(0);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 50);
  };

  // Reset loading when pathname changes
  useEffect(() => {
    if (isLoading) {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 200);
    }
  }, [pathname, isLoading]);

  return (
    <>
      {/* Progress Bar */}
      {isLoading && (
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <nav className={styles.navbar}>
        <Link href="/" onClick={handleLinkClick}>
          <div className={styles.logo}>
            <svg
              version={1.0}
              xmlns="http://www.w3.org/2000/svg"
              width="793.000000pt"
              height="598.000000pt"
              viewBox="0 0 793.000000 598.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,598.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M3903 5918 c-44 -55 -155 -197 -410 -525 -40 -50 -109 -140 -155
-200 -169 -218 -485 -622 -617 -789 -75 -94 -232 -295 -350 -447 -118 -152
-215 -277 -216 -277 -7 0 -469 588 -923 1175 -192 248 -405 521 -487 625 -28
36 -104 131 -167 211 -64 80 -131 167 -149 193 -19 26 -35 43 -36 39 -3 -9 39
-146 181 -581 47 -145 86 -267 86 -272 0 -6 -124 -10 -320 -10 -176 0 -320 -2
-320 -5 0 -9 549 -720 869 -1125 268 -338 370 -469 544 -695 93 -121 174 -225
178 -231 14 -17 -289 -412 -852 -1114 -112 -140 -324 -415 -470 -610 l-267
-355 318 -3 319 -2 -9 -28 c-4 -15 -24 -76 -43 -137 -19 -60 -76 -243 -127
-405 -51 -162 -95 -302 -98 -310 -2 -8 24 23 58 70 35 47 118 155 185 240 67
85 146 187 176 226 237 311 560 727 779 1004 102 129 270 344 373 477 103 133
191 244 196 247 4 3 25 -18 47 -47 72 -97 174 -227 201 -259 14 -15 12 -21
-20 -60 -19 -24 -55 -68 -78 -99 -143 -186 -309 -396 -496 -631 -181 -228
-431 -553 -511 -666 -24 -33 -24 -42 0 -19 7 7 132 120 278 251 146 131 305
275 353 319 49 44 107 96 130 115 48 39 276 246 441 399 61 57 114 103 117
103 4 0 53 -59 110 -131 57 -72 122 -155 145 -183 22 -28 119 -152 215 -276
97 -124 276 -354 400 -511 123 -157 280 -358 349 -447 69 -89 130 -162 136
-162 6 0 62 66 125 147 63 80 179 230 259 332 80 102 214 274 297 381 503 648
655 839 665 840 5 0 63 -50 130 -112 68 -61 188 -171 268 -243 80 -73 177
-159 215 -191 80 -67 345 -302 360 -319 10 -11 215 -196 275 -248 19 -16 51
-44 70 -61 19 -17 29 -24 24 -16 -66 94 -262 359 -331 447 -110 139 -310 394
-422 537 -47 61 -138 175 -201 255 -64 80 -130 165 -148 187 l-32 41 63 81
c34 44 91 118 126 163 l64 83 26 -34 c14 -18 62 -79 106 -134 138 -174 501
-638 755 -966 134 -173 276 -355 315 -405 39 -49 118 -150 176 -223 57 -74
166 -213 242 -310 76 -98 143 -185 149 -195 16 -31 18 -14 2 31 -24 72 -274
843 -274 848 0 2 146 5 323 6 l324 3 -86 112 c-47 61 -120 155 -161 209 -136
179 -571 736 -725 929 -175 221 -393 499 -536 686 l-100 131 84 111 c216 285
283 370 746 952 140 176 274 345 298 375 70 89 463 620 463 625 0 3 -142 5
-315 5 -173 0 -315 2 -315 4 0 2 24 80 54 172 30 93 84 266 121 384 36 118 73
235 81 259 8 25 13 46 11 48 -2 1 -22 -23 -44 -55 -22 -31 -102 -136 -177
-232 -75 -96 -169 -218 -209 -270 -41 -52 -136 -176 -213 -275 -77 -99 -191
-247 -254 -329 -63 -83 -169 -218 -235 -300 -107 -134 -366 -465 -420 -537
-11 -15 -60 -79 -110 -144 l-90 -117 -33 38 c-18 21 -94 119 -170 217 -223
291 -280 365 -417 538 -72 90 -178 225 -235 299 -57 74 -127 164 -155 200 -28
36 -94 119 -146 185 -53 66 -178 226 -278 355 -338 434 -375 480 -386 480 -6
0 -34 -28 -62 -62z m207 -1523 c57 -71 117 -146 134 -165 17 -20 45 -54 63
-75 140 -176 247 -310 297 -374 33 -42 175 -220 315 -396 141 -176 270 -339
288 -362 l32 -41 -126 -159 c-68 -87 -126 -159 -128 -161 -3 -3 -48 54 -383
478 -80 102 -207 261 -281 354 -75 93 -183 228 -239 300 -57 72 -107 134 -111
139 -8 8 -12 3 -328 -398 -121 -154 -255 -323 -297 -375 -82 -103 -143 -178
-292 -365 -53 -66 -99 -120 -104 -120 -15 0 -259 319 -251 330 4 5 63 80 130
165 68 85 160 202 204 259 45 57 123 154 172 215 50 61 136 170 192 241 56 72
146 186 200 253 100 127 126 160 271 346 l83 106 27 -32 c16 -18 75 -91 132
-163z m60 -1661 c91 -82 243 -218 337 -303 l172 -155 -48 -60 c-26 -34 -103
-131 -170 -216 -68 -85 -202 -256 -299 -380 -96 -124 -177 -227 -180 -230 -2
-3 -9 2 -15 11 -7 9 -31 38 -54 65 -50 60 -212 260 -471 583 l-196 245 55 48
c30 27 90 81 134 120 44 39 107 97 141 129 33 32 81 75 106 96 24 21 96 84
158 141 l114 102 25 -23 c14 -13 100 -91 191 -173z"
                />
              </g>
            </svg>
          </div>
        </Link>

        <ul className={styles.menu}>
          <li>
            <Link
              className={`${styles.navLink} ${pathname === '/' ? styles.linksActive : ''}`}
              href="/"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.navLink} ${pathname.startsWith('/products') ? styles.linksActive : ''}`}
              href="/products"
              onClick={handleLinkClick}
            >
              Products
            </Link>
          </li>
        </ul>

        <SearchBar />

        <ul className={styles.actions}>
          <li>
            <Link
              className={`${styles.navLink} ${pathname === '/account' ? styles.linksActive : ''}`}
              href="/account"
              onClick={handleLinkClick}
            >
              Account
              <div className={`iconWrapper ${styles.iconWrapper}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.006,12.309c3.611-.021,5.555-1.971,5.622-5.671-.062-3.56-2.111-5.614-5.634-5.637-3.561,.022-5.622,2.122-5.622,5.672s2.062,5.615,5.634,5.636Z" />
                  <path d="M11.994,13.661c-5.328,.034-8.195,2.911-8.291,8.322-.004,.268,.099,.527,.287,.718s.445,.299,.713,.299h14.595c.268,0,.525-.108,.713-.299,.188-.191,.291-.45,.287-.718-.092-5.333-3.036-8.288-8.304-8.322Z" />
                </svg>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.navLink} ${pathname === '/cart' ? styles.linksActive : ''}`}
              href="/cart"
              onClick={handleLinkClick}
            >
              My Cart
              <div className={`iconWrapper ${styles.iconWrapper}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Filled"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077Z" />
                  <circle cx={7} cy={22} r={2} />
                  <circle cx={17} cy={22} r={2} />
                </svg>
              </div>
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href="#" onClick={handleLinkClick}>
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
