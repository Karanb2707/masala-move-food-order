import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import useOnlineStatus from '../hooks/useOnlineStatus'
import noInternetImg from '../assets/images/NoConnection.png'

const Layout = () => {

    const onlineStatus = useOnlineStatus();
    console.log('Online Status', onlineStatus);

    return (
        <div>
            {
                onlineStatus
                    ?
                    <div>
                        <Header />
                        <main className='pt-16'>
                            <Outlet />
                        </main>
                    </div>
                    :
                    <div className="flex flex-col items-center justify-center h-screen gap-4">
                        <img src={noInternetImg} alt="No Internet" className="w-[420px] h-[260px]" />
                        <p className="text-3xl font-semibold text-gray-700">You're offline !!!</p>
                    </div>
            }
        </div>
    )
}

export default Layout