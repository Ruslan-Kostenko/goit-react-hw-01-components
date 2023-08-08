import { TableEl, ThEl } from './Transaction.styled';
import { TransactionOne } from './TransactionOne';

export const TransactionHistory = ({ items }) => {
  return (
    <TableEl>
      <thead>
        <tr>
          <ThEl>Type</ThEl>
          <ThEl>Amount</ThEl>
          <ThEl>Currency</ThEl>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionOne item={item} />
          </tr>
        ))}
      </tbody>
    </TableEl>
  );
};
