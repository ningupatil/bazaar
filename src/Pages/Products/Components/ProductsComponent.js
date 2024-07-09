import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { Link, useParams, useSearchParams } from 'react-router-dom';


import ProductCardComp from "./ProductCardComponent";
import NavigationMenuComponent from "../../../Common/NavigationMenuComponent";
import { useDispatch, useSelector } from "react-redux";
import { productActionBinder } from "../Actions/ProductAction";
import MenuAppBar from "../../Home/Components/AppBarComponent";
import InfiniteScroll from "react-infinite-scroll-component";
const Products= () => {
  const [pageSkip, setPageSkip] = useState(-1);
  const [pageLimit, setPageLimit] = useState(10);
  const [hasMore, setHasMore] = useState(true)
  const [products, setProducts] = useState([])
    const dispatch = useDispatch();

    // const params = useParams();
    const [params] = useSearchParams();
  useEffect(()=>{
    console.log('--- in did mount');
    setPageSkip(0);
    dispatch(productActionBinder(params.get('category')))
  },[])

  const productData = useSelector((state) => {
    // console.log("---in  useSelector callback--- ", state)
    return state.productData
  })

  useEffect(() => {
    setProducts(productData.products)
  }, [productData])
  console.log("!!!productData!!!",productData)
  const fetchMoreData = () => {
    setPageSkip(pageSkip + pageLimit)
  }  

  useEffect(()=>{
    console.log("--- on skip update --- ", pageSkip)
    if (pageSkip != -1) {
      dispatch(productActionBinder(params.get('category'), pageSkip, pageLimit))
    }
  },[pageSkip])

  return (
    <div>
      <MenuAppBar />
      <NavigationMenuComponent />
      <Grid container >
        <Grid item xs={2} md={2} lg={2}>

        </Grid>
        
        <Grid item xs={10} md={8} lg={8}>
          <div
            >
            <InfiniteScroll
              dataLength={productData.Products.length}
              next={fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              // scrollableTarget="scrollableDiv"
            >
              <Grid container >
                {productData.Products.map((Product, index) => {
                  return (<Grid item xs={4} key={`product_details_${index}`} style={{ margin: "10px" }}>
                    <ProductCardComp
                      product={Product}
                    />
                  </Grid>)
                })}

              </Grid>
            </InfiniteScroll>
          </div>
         
        </Grid>
        <Grid item xs={2} md={2} lg={2}>

        </Grid>
      </Grid>
    </div>
  )
}

export default Products