import Link from 'next/link'

const Fetch = () => {
    return (
        <ul>
            <li>
                <Link href="/graphql/usequery">
                    UseQuery
                </Link>
            </li>
            <li>
                <Link href="/graphql/uselazypages">
                    UseLazyQuery
                </Link>
            </li>
            <li>
                <Link href="/graphql/mutation">
                    mutation
                </Link>
            </li>
        </ul>
    );
}
 
export default Fetch;