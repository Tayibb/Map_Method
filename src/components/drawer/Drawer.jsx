import React, { useState } from "react";
import styles from "./styles.module.scss";

const Drawer = (props) => {
    const { cartItem, open, setCartItem, cartCount, setCartCount, setHeaderCount, headerCount } = props;

    const onClose = () => {
        if ((cartItem.selectedItem = true)) {
            cartItem.selectedItem = false;
        }
        console.log(cartItem, "on-close");
        setCartCount(1);
    };

    const onDelete = (id) => {
        console.log(id, "del");
        setCartItem(null);
        setCartCount(1);
        setHeaderCount(headerCount - cartCount);
        if ((cartItem.selectedItem = true)) {
            cartItem.selectedItem = false;
        }
    };

    const addToCart = () => {
        setHeaderCount(headerCount + cartCount);
        if ((cartItem.selectedItem = true)) {
            cartItem.selectedItem = false;
        }
        console.log(cartItem, "on-close");
        setCartCount(1);
    };

    const lessCount = () => {
        if (cartCount > 1) {
            setCartCount(cartCount - 1);
        }
    };

    console.log(cartItem, "cart-item");
    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id={open} aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">{cartItem?.title}</h5>
                    <button type="button" onClick={onClose} className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="col">
                        {cartItem ? (
                            <div className={styles.card}>
                                <div className={styles.cardAvatar}>
                                    <img src={cartItem?.image} alt="" />
                                </div>
                                <div className={styles.cardsTxts}>
                                    <h3>{cartItem?.title}</h3>
                                    <p>{cartItem?.desc}</p>
                                    <div className={styles.break}></div>
                                    <p>from Rs {cartItem?.price}</p>
                                    <div className="d-flex justify-content-center mt-3">
                                        <button data-bs-dismiss="offcanvas" aria-label="Close" onClick={addToCart}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-4 ml-4 customCounter">
                                    <div className="d-flex">
                                        <div onClick={lessCount} style={{ fontSize: "30px", fontWeight: "bold" }}>
                                            -
                                        </div>
                                        <div className="mx-2" style={{ fontSize: "30px", fontWeight: "bold" }}>
                                            {cartCount}
                                        </div>
                                        <div onClick={() => setCartCount(cartCount + 1)} style={{ fontSize: "30px", fontWeight: "bold" }}>
                                            +
                                        </div>
                                    </div>
                                    {/* <button onClick={() => onDelete(cartItem.id)}>Delete</button> */}
                                </div>
                            </div>
                        ) : (
                            "Select another item"
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Drawer;
