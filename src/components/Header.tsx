import MoralisType from "moralis"

interface HeaderPorps {
    user: MoralisType.User | null
    logout: () => void
    loggingOut: boolean
}

export default function Header(props: HeaderPorps) {
    return (
        <>
        <header className="text-slate-200 flex justify-between w-full h-full px-32 my-12 items-center">
            <div>
                <p className="text-5xl font-bold">WEB3</p>
            </div>
            <div className="flex gap-x-24 items-center">
                <p>
                    {props.user?.getUsername()}
                </p>
                <button
                    disabled={props.loggingOut}
                    onClick={props.logout}
                    className="w-[155px] font-bold text-lg px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-200 hover:text-black transition duration-500"    
                >
                    Logout
                </button>
            </div>
        </header>
        <div className="py-0.25 border border-slate-800"></div>
        </>
    )
}