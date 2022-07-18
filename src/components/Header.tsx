

export default function Header({user}: any) {
    return (
        <header className="text-slate-200 flex">
            <div>
                <p className="text-slate-200">WEB3</p>
            </div>
            <div>
                <p>{user} aaa</p>
                <button>Logout</button>
            </div>
        </header>
    )
}