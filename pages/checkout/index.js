import CheckoutTransaction from "../../components/App/Checkout/CheckoutTransaction";
import useRole from "../../hooks/useRole";

function CheckoutIndexPage({transactionId}) {
    return (
        <CheckoutTransaction transactionId={transactionId}/>
    );
}

export async function getServerSideProps({ req, query }) {

    const cb = (props) => {
        props.layoutType = "app"
        props.transactionId = query.transactionId ?? null;
    }

    return await useRole(req, ['user', 'admin'], cb)
}

export default CheckoutIndexPage;