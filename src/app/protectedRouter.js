
import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const protectedRouter = ({element}) => {
    const history = useHistory();
    const userInfo = useSelector(state => state.auth);

    if (userInfo.loginStatus) {
        history.push("/login")
    }

    return <>
        {element}
    </>
}

export default protectedRouter;