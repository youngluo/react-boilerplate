import { connect } from 'react-redux';
import { Footer } from '../../components/todoList';
import { setVisibility } from '../../redux/action';

Footer.defaultProps = { visibilityFilters: ['ALL', 'TODO', 'DONE'] };

const mapStateToProps = (state) => {
    return {
        curFilterType: state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterChange: (filterType) => {
            dispatch(setVisibility(filterType));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);