import { connect } from 'react-redux';
import { Footer } from '../../components/todoList';
import { setVisibility } from '../../redux/action';

Footer.defaultProps = { visibilityFilters: ['TODO', 'DONE','ALL'] };

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterChange: (filterType) => {
            dispatch(setVisibility(filterType));
        }
    }
}

export default connect(null, mapDispatchToProps)(Footer);