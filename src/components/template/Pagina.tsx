interface PaginaProps {
    externa?: boolean
    children: any
    className?: string
}

export default function Pagina (props: PaginaProps) {
    return (
        <div className={`
            flex flex-col min-h-screen
            bg-gradient-to-r from-zinc-800 via-black to-zinc-800
            ${props.className ?? ''}
        `}>
            {props.children}
        </div>
    )
}