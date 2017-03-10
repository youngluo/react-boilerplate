import { connect } from 'react-redux';
import { Footer } from '../../components/todoList';
import { setVisibility } from '../../redux/action';

// 当state更新时，自动执行并触发组件重新渲染
const mapStateToProps = (state, defaultProps) => {
    return {
        curFilterType: state.visibilityFilter //获取当前显示类型
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterChange: (filterType) => {
            dispatch(setVisibility(filterType));
        },
        visibilityFilters: ['ALL', 'TODO', 'DONE']
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);