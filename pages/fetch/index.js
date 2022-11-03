import Link from 'next/link'

const Fetch = () => {
    return (
        <ul>
            <li>
                <Link href="/fetch/csr">
                    CSR
                </Link>
            </li>
            <li>
                <Link href="/fetch/ssr">
                    SSR
                </Link>
            </li>
            <li>
                <Link href="/fetch/ssg">
                    SSG
                </Link>
            </li>
            <li>
                <Link href="/fetch/isg">
                    ISR
                </Link>
            </li>
        </ul>
    );
}
 
export default Fetch;