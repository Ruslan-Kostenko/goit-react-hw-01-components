import { TdEl } from './Transaction.styled';

export const TransactionOne = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <TdEl>{type}</TdEl>
      <TdEl>{amount}</TdEl>
      <TdEl>{currency}</TdEl>
    </>
  );
};
