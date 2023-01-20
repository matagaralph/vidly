import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = ({
    pageSize, currentPage, onPageChange, itemsCount }) => {
    /** number of pages */
    const pagesCount = Math.ceil(itemsCount / pageSize);
    /** removing pagination if eq to one */
    if (pagesCount === 1) return null;//
    /** an array of page numbers */
    const pages = _.range(1, pagesCount + 1);
    return (<nav aria-label="pagination">
        <ul className="pagination">
            {pages.map(page =>
                < li key={page}
                    className={(currentPage === page) ? 'page-item active' : 'page-item'}>
                    {/* eslint-disable-next-line */}
                    <a onClick={() => onPageChange(page)} className='page-link'>{page}</a>
                </li>)}
        </ul>
    </nav >);
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;