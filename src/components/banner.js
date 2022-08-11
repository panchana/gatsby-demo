import React from 'react';
import * as styles from "./index.module.css"

const Banner = () => {
    return <div className={styles.banner_container}>
        <div className={styles.banner_first_container}>
            <div className={styles.banner_content_elements}>
                <h1 className={styles.banner_title}>GRUPO CAIO</h1>
                <div className={styles.banner_slogan_container}>
                    <div className={styles.banner_slogan_sub_container}>
                        <h3 className={styles.banner_slogan_title}>¿Quienes somos?</h3>
                        <p className={styles.banner_slogan_description}>
                        Somos una agencia que lograran obtener tu confianza, nuestros expertos viven cada proyecto como propio entregando así su corazón.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.banner_last_container}></div>
        <img
            className={styles.banner_big_logo}
            alt="Big logo"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NyA2OC43NCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiNmZmY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYXBhXzIiIGRhdGEtbmFtZT0iQ2FwYSAyIj48ZyBpZD0iQ2FwYV8xLTIiIGRhdGEtbmFtZT0iQ2FwYSAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik04LjE5LDI5Ljg2YzExLjk0LS4xNiwyNC44My0uMjcsMzYuNDItLjI5Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iNDQuNSIgeTE9IjY4LjMiIHgyPSIzMS4wNSIgeTI9IjYxLjI5Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMzEuNTQiIHkxPSI2MS41NSIgeDI9IjQ0LjUiIHkyPSIyOS44Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iOC40NyIgeTE9IjMwLjAyIiB4Mj0iMzQuMiIgeTI9IjU1LjAyIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMTkuMzMiIHkxPSIyOS43MSIgeDI9IjQ0LjQ1IiB5Mj0iNC4wMyIvPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjI1LjYxIiB5MT0iMjMuMzIiIHgyPSIxNC4wOCIgeTI9IjExIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iOC42NSIgeTE9IjMwLjQ2IiB4Mj0iOC42NSIgeTI9IjEwLjc5Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iOC42NSIgeTE9IjExLjE2IiB4Mj0iMTQuNDUiIHkyPSIxMS4xNiIvPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjcuNzQiIHkxPSIxMS4xNiIgeDI9IjguNjUiIHkyPSIxMS4xNiIvPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjAuMzUiIHkxPSIxOC4yOSIgeDI9IjguMDkiIHkyPSIxMS4wMiIvPjxsaW5lIGNsYXNzPSJjbHMtMSIgeTE9IjE4LjQyIiB4Mj0iOC43MiIgeTI9IjE4LjQyIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDQuMyw0LjIyYzEuNjEtMi45LDIwLjc0LTcuMTIsMjYuMiwxIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iNDQuNSIgeTE9IjI5LjgiIHgyPSI3MC41MiIgeTI9IjQuNDIiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02Ni43Miw4LjEzYzMuNzcsMSw5LjE0LDIuNjgsOS42OCw3LjA5Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDMuMTgsMTguMDljMSwxNi41NCw4LjI5LDMzLjQuNjcsNTAuMzgiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00NC40LDRhNDEuMjMsNDEuMjMsMCwwLDAtMS4yNSw4LjM3Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iNTAuOTQiIHkxPSIyMy41MiIgeDI9Ijc2Ljg0IiB5Mj0iMTQuNTkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00My4zOSwxMS45MmEzLjExLDMuMTEsMCwwLDEsMS43MS0uNjMsMy42OSwzLjY5LDAsMCwxLDMuNiwzLjc5LDMuNzgsMy43OCwwLDAsMS0zLjM2LDQuMDciLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00NS4zNCwxOS4xNWEyLjY3LDIuNjcsMCwwLDEtMi0uNjciLz48L2c+PC9nPjwvc3ZnPg=="
        />
    </div>
    
}

export default Banner

