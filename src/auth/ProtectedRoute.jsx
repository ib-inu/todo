import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';


const ProtectedRoute = ({ children }) => {
    const name = useSelector((state) => state.user.name);
    console.log(name);

    if (!name) {
        return <Navigate to="/auth" />;
    }

    return children;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};