import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from './userSlice';
import UsersBooks from './UsersBooks';
import UsersWishlist from './UsersWishlist';
import { getReadBooks, getWishlistBooks } from '../Books/bookSlice';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function Profile(){
 
    const currentUser = useSelector((state) => state.users.currentUser);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentUser())
      }, [dispatch])

    useEffect(() => {
        dispatch(getReadBooks())
    }, [dispatch])
    
    useEffect(() => {
        dispatch(getWishlistBooks())
    }, [dispatch])

    const books = useSelector((state) => state.books.entities)
    const wishlistBooks = useSelector((state) => state.books.wishlistEntities)

    const renderReadBooks = (books) =>
    currentUser &&
    books.map((b) => (
      <Col key={b.id} md={4}>
        <UsersBooks b={b} />
      </Col>
    ));

    const renderWishlistBooks = (wishlistBooks) =>
    currentUser &&
    wishlistBooks.map((b) => (
      <Col key={b.id} md={4}>
        <UsersBooks b={b} />
      </Col>
    ));

    return(
        <>
            <h1>Books I've Read</h1>
            <Container> 
                <Row >
                    {currentUser && renderReadBooks(books)}
                </Row>
            </Container>
            <br></br>
            <h1>Wishlist</h1>
            <Container>
                <Row >
                    {currentUser && renderWishlistBooks(wishlistBooks)}
                </Row>
            </Container>
        </>
    )
}

export default Profile;