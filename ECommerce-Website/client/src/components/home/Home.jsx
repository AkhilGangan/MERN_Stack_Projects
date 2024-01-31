import  { useEffect } from 'react';

import { Box, styled } from '@mui/material';

import NavBar from './NavBar'
import Banner from './Banner';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import Slide from './Slide';

import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts } from '../../redux/actions/productActions';

const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;
`;

const Home = () => {
    // const getProducts = useSelector(state => state.getProducts);
    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Trending Offers'
                    timer={false} 
                    multi={true} 
                />
            </Component>
        </>
    )
}

export default Home;