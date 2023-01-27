import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../../context/context';
import { fetchRequest } from '../../../fetch/fetchRequest';
import { Actions } from '../../../interfaces/dataContext';
import PageLink from './PageLink';
import './Pagination.scss';

export type Props = {
  currentPage: number;
  lastPage: number;
  maxLength: number;
};

export const Pagination = ({ currentPage, lastPage }: Props) => {
  const { dispatch, state } = useContext(MyContext)!;
  const navigate = useNavigate();

  const handlePage = async (pageNum: number) => {
    const data = await fetchRequest({ numberPage: String(pageNum) });
    dispatch({ payload: data, type: Actions.UPLOAD });
    navigate(`/${pageNum}`);
  };
  const pageNums = Array(state.total_pages)
    .fill(1)
    .map((item, index) => index + 1);

  return (
    <nav className="pagination" aria-label="Pagination">
      <PageLink disabled={state.page === 1} onClick={() => handlePage(state.page - 1)}>
        Previous
      </PageLink>
      {pageNums.map((pageNum, idx) => {
        return (
          <PageLink
            key={idx}
            active={state.page === pageNum}
            disabled={isNaN(pageNum)}
            onClick={() => handlePage(pageNum)}
          >
            {pageNum}
          </PageLink>
        );
      })}
      <PageLink disabled={currentPage === lastPage} onClick={() => handlePage(state.page + 1)}>
        Next
      </PageLink>
    </nav>
  );
};
