export default function LoginStatus({isLoading, isLoggedIn, status, counter}){
    if(isLoading){
        return(
            <div>
                <p>Content is Loading</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <p className="bg-green-300">Welcome back, you are logged in</p>
                {status ? <div>
                    <p className="bg-blue-300">status is verified</p>
                </div> : <div>
                    <p className="bg-red-400">status is not verified</p>
                    </div>}

                    {counter > 0 && <>
                    <p className="font-extrabold bg-gray-600">you have unread notifications</p>
                    </>}
            </div>
        )
    }
}