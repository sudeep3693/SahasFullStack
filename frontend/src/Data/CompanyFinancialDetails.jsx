
import {
  BsPersonFill,
  BsCashCoin,
  BsPiggyBank,
  BsBank,
  BsCreditCard2FrontFill,
  BsBarChartFill,
} from 'react-icons/bs';

const color = '#85193C';
const financialData = [
  { label: 'Members', count: 405, icon: <BsPersonFill size={50} color={color} /> },
  { label: 'Share Capital', count: 13207000, icon: <BsCashCoin size={50} color={color} /> },
  { label: 'Reserve Fund', count: 73500, icon: <BsPiggyBank size={50} color={color} /> },
  { label: 'Deposit', count: 38980600, icon: <BsBank size={50} color={color} /> },
  { label: 'Loan', count: 45649100, icon: <BsCreditCard2FrontFill size={50} color={color} /> },
  { label: 'Total Assets', count: 47454751800, icon: <BsBarChartFill size={50} color={color} /> },
];

export default financialData;