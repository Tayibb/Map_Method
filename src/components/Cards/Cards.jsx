import React from "react";
import { Starters, Local } from "./CardsData";
import styles from "./styles.module.scss";

const Cards = () => {
    return (
        <div>
            <div className={styles.logo}>
                Cheezious
                <img src="https://www.cheezious.com/_next/image?url=https%3A%2F%2Fem-cdn.eatmubarak.pk%2F54946%2Flogo%2F1649325481.png&w=1920&q=90" alt="" />
            </div>
            <div className={`container ${styles.cards}`}>
                <h2>Starters</h2>
                <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4  ${styles.cardsContent}`}>
                    {Starters.map((items) => {
                        return (
                            <div className="col" key={items.id}>
                                <div className={styles.card}>
                                    <div className={styles.cardAvatar}>
                                        <img src={items.image} alt="" />
                                    </div>
                                    <div className={styles.cardsTxts}>
                                        <h3>{items.title}</h3>
                                        <p>{items.desc}</p>
                                        <div className={styles.break}></div>
                                        <p>from Rs {items.price}</p>
                                        <div className="d-flex justify-content-center">
                                            <button>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <h2 className="pt-5">Somewhat Local</h2>
                <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4  ${styles.cardsContent}`}>
                    {Local.map((items) => {
                        return (
                            <div className="col" key={items.id}>
                                <div className={styles.card}>
                                    <div className={styles.cardAvatar}>
                                        <img src={items.image} alt="" />
                                    </div>
                                    <div className={styles.cardsTxts}>
                                        <h3>{items.title}</h3>
                                        <p>{items.desc}</p>
                                        <div className={styles.break}></div>
                                        <p>from Rs {items.price}</p>
                                        <div className="d-flex justify-content-center">
                                            <button>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Cards;
