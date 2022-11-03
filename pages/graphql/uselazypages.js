import Link from 'next/link';
import Image from 'next/image'
import { gql, useLazyQuery } from '@apollo/client';

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

const  Uselazypages = () => {
    const [loadCategory, { loading, data }] = useLazyQuery(GET_CATEGORIES);

    console.log('lazy', data);

    if(loading){
        return (
            <div>
                <h1>loading</h1>
            </div>
        )
    }

    return (
        <div>
            <h3>Use lazy pages</h3>
            <Link href="/graphql">
                Back
            </Link>
            <button onClick={loadCategory}>
                Click Me
            </button>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    data && data.categoryList && data.categoryList.map(category => {
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
 
export default Uselazypages;