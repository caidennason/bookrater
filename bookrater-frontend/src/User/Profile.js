import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from './userSlice';
import UsersBooks from './UsersBooks';
import UsersWishlist from './UsersWishlist';
import { getReadBooks } from '../Books/bookSlice';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


function Profile(){

    const [wishlistBooks, setWishlistBooks] = useState([])
 
    const currentUser = useSelector((state) => state.users.currentUser);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getReadBooks())
    }, [dispatch])

    const books = useSelector((state) => state.books.entities)

    useEffect(() => {
        dispatch(getCurrentUser())
      }, [dispatch])

    useEffect(() => {
            fetch('/wishlistbooks')
            .then(res => res.json())
            .then(wishlistBooks => (setWishlistBooks(wishlistBooks)))
    }, [])

    console.log(wishlistBooks)

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
           <p>{currentUser ? currentUser.name : ' '}</p>
            <p>{currentUser ? currentUser.about_me : ' '}</p>
            <p>{currentUser ? currentUser.location : ' '}</p>
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