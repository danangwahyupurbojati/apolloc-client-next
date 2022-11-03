import Link from 'next/link'
import Image from 'next/image'
import { gql, useQuery } from '@apollo/client';
import { useRouter } from "next/router";

const GET_PRODUCT_BY_CATEGORY = gql`
    query GetCategoryLists($filters: CategoryFilterInput){
        categoryList(filters: $filters){
            name
            products{
                items{
                    name
                    only_x_left_in_stock
                    qty_available
                    uid
                    sku
                    url_key
                    image{
                        url
                    }
                    price_range{
                        minimum_price{
                            final_price{
                                currency
                                value
                            }
                        }
                    }
                }
            }
        }
    }
`;

const  UseQuerypages = () => {
    const router = useRouter();
    const { loading, error, data } = useQuery(GET_PRODUCT_BY_CATEGORY, {
        variables: {
            filters: {
                url_key: {
                    eq: router.query.categories
                }
            }
        }
    });

    const products = data && data.categoryList[0].products.items;
    const simpleProducts = products && products.filter(product => product.__typename === 'SimpleProduct');

    if(loading){
        return (
            <div>
                <h1>loading</h1>
            </div>
        )
    }

    if(error){
        return (
            <div>
                <h1>Saya Error</h1>
            </div>
        )
    }
    return (
        <div>
            <h3>Use query pages</h3>
            <Link href="/graphql">
                Back
            </Link>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    simpleProducts.length > 0 ? (
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {
                                simpleProducts.map((product) => (
                                    <div style={{ margin: '16px', border: '1px solid red' }} key={product.uid}>
                                        <h3>{product.name}</h3>
                                        <Image
                                            src={product.image.url ? product.image.url : "/vercel.svg"}
                                            alt={product.name}
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <h3>Kosong</h3>
                    )
                }
            </div>
        </div>
    );
}
 
export default UseQuerypages ;