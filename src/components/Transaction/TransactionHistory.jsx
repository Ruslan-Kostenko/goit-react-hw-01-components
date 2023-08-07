import { TransactionOne } from "./TransactionOne"

export const TransactionHistory = ({items}) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>{items.map(item => (
                <tr key={item.id}>
                <TransactionOne item={item}/>
                </tr>
            ))}
            </tbody>
        </table>
    )
}