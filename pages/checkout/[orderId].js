import Checkout from "../../components/App/Checkout/Checkout";
import useRole from "../../hooks/useRole";

function CheckoutPage({ orderId, transactionId }) {

    console.log(orderId, transactionId);
    return (
        <Checkout orderId={orderId} transactionId={transactionId} />
    );
}

export async function getServerSideProps({ req, query }) {

    const cb = (props) => {
        props.orderId = query.orderId
        props.layoutType = "app"
    }

    return await useRole(req, ['user', 'admin'], cb)
}


export default CheckoutPage;