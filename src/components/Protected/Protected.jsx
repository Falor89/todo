import { useSelector } from "react-redux"
import { Navigate } from "react-router"
import { routes } from "../../utils/routes"

export const ProtectedRoute = ({ element }) => {
    const { authorization } = useSelector(store => store.user)
    return (

        authorization ? element : <Navigate to={routes.login} replace />

    )
}