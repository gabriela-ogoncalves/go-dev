import PrintIcon from '@mui/icons-material/Print';

import './styles.scss';

const Print = ({text, onClick}) => {
  return(
    <>
      <div className='print'>
        <button className='print-button' type='button' role='button' onClick={onClick}>
          <PrintIcon className='print-button__icon'/>
          <span>{text}</span>
        </button>
      </div>
    </>
  );
};

export default Print;