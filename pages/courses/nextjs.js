import Link from "next/link";
import { useRouter } from "next/router"

const NextJS = () => {
    return (
        <div>
            <h1>Welcome to Next.js with Ankita</h1>
            <ul>
                <li><Link href="/oh">Oh</Link></li>
                <li><Link href="/hi">Hi</Link></li>
                <li><Link href="/mark">Mark</Link></li>
            </ul>
        </div>
    );
}

export default NextJS;