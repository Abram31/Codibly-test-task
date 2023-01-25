import { useContext } from 'react';
import { MyContext } from '../../../context/context';
import { fetchRequest } from '../../../fetch/fetchRequest';
import { Actions } from '../../../interfaces/dataContext';
import PageLink from './PageLink';
import './Pagination.scss';

export type Props = {
  currentPage: number;
  lastPage: number;
  maxLength: number;
  setCurrentPage: (page: number) => void;
};

export const Pagination = ({ currentPage, lastPage, maxLength, setCurrentPage }: Props) => {
  const { dispatch, state } = useContext(MyContext)!;

  const handlePage = async (pageNum: number) => {
    const data = await fetchRequest({ numberPage: String(pageNum) });
    dispatch({ payload: data, type: Actions.UPLOAD });
    console.log(data);
    setCurrentPage(pageNum);
  };
  const pageNums = Array(maxLength)
    .fill(1)
    .map((item, index) => index + 1);

  return (
    <nav className="pagination" aria-label="Pagination">
      <PageLink disabled={currentPage === 1} onClick={() => handlePage(currentPage - 1)}>
        Previous
      </PageLink>
      {pageNums.map((pageNum, idx) => (
        <PageLink
          key={idx}
          active={currentPage === pageNum}
          disabled={isNaN(pageNum)}
          onClick={() => handlePage(pageNum)}
        >
          {pageNum}
        </PageLink>
      ))}
      <PageLink disabled={currentPage === lastPage} onClick={() => handlePage(currentPage + 1)}>
        Next
      </PageLink>
    </nav>
  );
};
