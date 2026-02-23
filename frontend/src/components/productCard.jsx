export default function ProductCard() {

    console.log(props)

    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            <button>Add to Cart</button>
        </div>
    );
}