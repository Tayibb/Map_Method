import React, { useState } from "react";
import { Starters, Local } from "./CardsData";
import styles from "./styles.module.scss";
import Drawer from "../drawer/Drawer";
import Header from "../Header/Header";

const Cards = () => {
    // const [starterItems, setStarterItems] = useState(Starters);
    const [cartItem, setCartItem] = useState();
    const [cartCount, setCartCount] = useState(1);
    const [headerCount, setHeaderCount] = useState(0);
    let id = "offcanvasRight";

    const onSelect = (id) => {
        const copyStarters = [...Starters];
        const clickedItem = copyStarters.find((item) => item.id === id);
        console.log(clickedItem, "clicked item");
        if (!clickedItem.selectedItem) {
            clickedItem.selectedItem = true;
            console.log(copyStarters, "all items");
            setCartItem(clickedItem);
        }
    };
    // console.log(cartItem, "cartItem");

    return (
        <>
            <div>
                <Header headerCount={headerCount} />
                <div className={`container ${styles.cards} mb-5`}>
                    <h2>Starters</h2>
                    <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4  ${styles.cardsContent}`}>
                        {Starters.map((items) => {
                            return (
                                <div className="col" key={items.id}>
                                    <div className={styles.card} data-bs-toggle="offcanvas" data-bs-target={`#${id}`} aria-controls={id} onClick={() => onSelect(items.id)}>
                                        <div className={styles.cardAvatar}>
                                            <img src={items.image} alt="" />
                                        </div>
                                        <div className={styles.cardsTxts}>
                                            <h3>{items.title}</h3>
                                            <p>{items.desc}</p>
                                            <div className={styles.break}></div>
                                            <p>from Rs {items.price}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Drawer headerCount={headerCount} setHeaderCount={setHeaderCount} cartCount={cartCount} setCartCount={setCartCount} open={id} cartItem={cartItem} setCartItem={setCartItem} />
        </>
    );
};

export default Cards;
