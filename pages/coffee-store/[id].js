import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import coffeeStoresData from "../../data/coffee-stores.json";

export function getStaticProps(staticProps) {
    const params = staticProps.params;
    console.log(params)
    return {
        props: {
            coffeeStore: coffeeStoresData.find(coffeeStore => {
                return coffeeStore.id.toString() === params.id; //dynamic id
            })
        }
    }
}

export function getStaticPaths() {
    // To make the paths property dynamic, map through the returned coffeeStore
    // data and store in a constant to be applied to the return value
    const paths = coffeeStoresData.map(coffeeStore => {
        return {
            params: {
                id: coffeeStore.id.toString()
            }
        }
    });

    return {
        fallback: true,
        paths
    }
}

const CoffeeStore = (props) => {
    const router = useRouter();
    
    // If the path hasn't been defined in static paths, return a loading state
    // until the data can be downloaded. If it doesn't exist, it will throw an error
    // on the second time around.
    if(router.isFallback) {
        return <div>loading...</div>;
    }

    // Define values after isFallback has been checked as it will not be defined
    // when running the first time around as it isn't set in the paths property
    const { address, name, neighbourhood } = props.coffeeStore;

    return (
        <div>
            <Head>
                <title>{name}</title>
            </Head>
            <Link href="/">Back to Home</Link>
            <p>{address}</p>
            <p>{name}</p>
            <p>{neighbourhood}</p>
        </div>
    )
}

export default CoffeeStore;