import { useEffect } from 'react'; // Import useEffect

import './Table.css'; 
import HistoryIcon from '@mui/icons-material/History';
import useFetchTablesData from '../../Api';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import { ToastContainer, toast } from 'react-toastify'; // Import toast container and toast
import 'react-toastify/dist/ReactToastify.css';

function BookTable() {
  const { tablesData, loading, error, refetchTablesData } = useFetchTablesData(); // Add refetchTablesData to trigger data refetch
  const navigate = useNavigate();

  const handleTableClick = (tableNumber, tableStatus) => {
    if (tableStatus === 'available') {
      navigate(`/booktable/${tableNumber}/menu-order`);
    } else {
      toast.error('This table is already booked or reserved');
    }
  };

  useEffect(() => {
    // Set interval to refetch tables data every 10 seconds
    const interval = setInterval(() => {
      refetchTablesData();
    }, 10000);

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, [refetchTablesData]); // Trigger effect when refetchTablesData changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className='table-main'>
        <ToastContainer/>
        <div className='table-container'>
          <div className="table-grid">
            {tablesData.map(table => (
              <div key={table.number} className={`table-cell ${table.status}`} onClick={() => handleTableClick(table.number, table.status)}>
                <div className="table-info">
                  <div className="table-number">{table.number}</div>
                  <div className="table-duration">
                    <i className="far fa-clock"><HistoryIcon/></i> {table.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default BookTable;
