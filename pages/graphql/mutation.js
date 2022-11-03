import Link from 'next/link'
import { gql, useMutation } from '@apollo/client';

const CREATE_CART_TOKEN = gql`
    mutation CreateCartToken{
        createEmptyCart
    }
`;

const  Mutationpages= () => {
    const [createCartToken, { data }] = useMutation(CREATE_CART_TOKEN);
    console.log('data', data);
    return (
        <div>
            <h3>Mutation</h3>
            <Link href="/graphql">
                Back
            </Link>

            <button onClick={createCartToken}>
                generate customer token
            </button>

            <div>
                {
                    data && data.createEmptyCart
                }
            </div>


        </div>
    );
}
 
export default Mutationpages;