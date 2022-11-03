import Link from 'next/link'
import Image from 'next/image'
import { gql, useQuery } from '@apollo/client';

const GET_CATEGORIES = gql`
    query GetCategoryLists{
        categoryList(filters: {}){
            name
            uid
            url_key
            image
        }
    }
`;

const  UseQuerypages = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    const categoryList = data && data.categoryList;

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
                    categoryList.map(category => {
                        if (category.url_key) {
                            return (
                                <div style={{ margin: '16px', border: '1px solid red' }} key={category.uid}>
                                    <Image
                                        src={category.image ? category.image : "/vercel.svg"}
                                        alt={category.name}
                                        width={200}
                                        height={200}
                                    />
                                    <h2>{category.name}</h2>
                                    <Link href="/graphql/[categories]" as={`/graphql/${category.url_key}`}>
                                        lihat category
                                    </Link>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
}
 
export default UseQuerypages ;