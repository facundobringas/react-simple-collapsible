import Collapsible from './components/Collapsible';
import PropTypes from 'prop-types';

Collapsible.propTypes = {
    headerTitle: PropTypes.string,
    collapsed: PropTypes.bool,
}

Collapsible.defaultProps = {
    headerTitle: "",
    collapsed: true
};

export { Collapsible };
