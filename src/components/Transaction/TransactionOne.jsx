export const TransactionOne = ({item: {id, type, amount, currency}}) => {
    return (
        <>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </>
    )
}