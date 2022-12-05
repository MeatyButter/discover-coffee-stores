import { useRouter } from "next/router";
import Link from "next/link";

import coffeeStoresData from "../../data/coffee-stores.json";

export function getStaticProps(staticProps) {
    const params = staticProps.params;
    console.log(params)
    return {
        props: {
            coffeeStore: coffeeStoresData.find(coffeeStore => {
                return coffeeStore.id === 0//params.id //dynamic id
            })
        }
    }
}

export function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { params: { id: '0' } },
            { params: { id: '1' } }
        ]
    }
}

const CoffeeStore = () => {
    const router = useRouter();
    console.log('router', router);
    return (
        <div>
            Coffee Store Page {router.query.id}
            <Link href="/">Back to Home</Link>
        </div>
    )
}

export default CoffeeStore;