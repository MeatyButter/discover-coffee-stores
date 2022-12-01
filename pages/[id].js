import { useRouter } from "next/router";
import Head from "next/head";

const Dynamic = () => {
    const router = useRouter();
    const query = router.query.id;
    return (
        <>
            <Head>
                <title>dynamic route: {query}</title>
            </Head>
            <h1>This is a dynamic route: {query}</h1>
        </>
    );
}

export default Dynamic;