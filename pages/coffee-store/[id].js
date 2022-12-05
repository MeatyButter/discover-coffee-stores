import { useRouter } from "next/router";
import Link from "next/link";

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
    return {
        fallback: true,
        paths: [
            { params: { id: '0' } },
            { params: { id: '1' } }
        ]
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

    return (
        <div>
            Coffee Store Page {router.query.id}
            <Link href="/">Back to Home</Link>
            <p>{props.coffeeStore.address}</p>
            <p>{props.coffeeStore.name}</p>
        </div>
    )
}

export default CoffeeStore;