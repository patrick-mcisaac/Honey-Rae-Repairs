export const Welcome = () => {
    return (
        <div className="flex h-[90vh] w-[100vw] items-center justify-center">
            <div className="flex h-50 w-150 flex-col items-center justify-center gap-6 rounded-2xl border-2 border-black bg-blue-50 p-10">
                <h1 className="flex flex-col items-center gap-1 text-3xl">
                    <span className="text-">Welcome to</span>
                    <span>Honey Rae Repair Shop</span>
                </h1>
                <p>Your one-stop-shop to get all you electronics fixed</p>
            </div>
        </div>
    )
}
